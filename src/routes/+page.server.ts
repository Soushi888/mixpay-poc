import { fail, type Actions } from '@sveltejs/kit';
import { config } from 'dotenv';

config();

const MIXPAY_API_URL = 'https://api.mixpay.me/v1';

export const actions: Actions = {
	createShortLink: async ({ request }) => {
		let formData = await request.formData();
		const { amount } = Object.fromEntries(formData);
		const payeeId = process.env.MIXPAY_PAYEE_ID;

		if (!payeeId) return fail(400, { error: 'Payee ID not found' });
		if (!amount) return fail(400, { error: 'Amount not found' });

		formData = new FormData();
		formData.append('payeeId', payeeId);
		formData.append('quoteAmount', amount);
		formData.append('quoteAssetId', 'USD');
		formData.append('settlementAssetId', await getAssetId('USDT'));

		console.log(formData);

		const response = await fetch(`${MIXPAY_API_URL}/one_time_payment`, {
			method: 'POST',
			body: formData
		});

		const { data } = await response.json();
		console.log(data);

		return { url: `https://mixpay.me/code/${data.code}` };
	}
};

async function getAssetId(asset: string): Promise<string> {
	const response = await fetch(`${MIXPAY_API_URL}/setting/payment_assets`);
	const { data } = await response.json();

	const assetId = data.find((item: any) => item.symbol === asset)?.chainAsset.id;

	if (!assetId) {
		throw new Error(`Asset "${asset}" not found`);
	}

	return assetId;
}
