import { fail, type Actions } from '@sveltejs/kit';
import { config } from 'dotenv';
import client from 'mixpayjs';

const mixpay = client();
config();

const MIXPAY_API_URL = 'https://api.mixpay.me/v1';

export const actions: Actions = {
	createShortLink: async ({ request }) => {
		const formData = await request.formData();
		const { amount } = Object.fromEntries(formData);
		const payeeId = process.env.MIXPAY_PAYEE_ID;

		if (!payeeId) return fail(400, { error: 'Payee ID not found' });
		if (!amount) return fail(400, { error: 'Amount not found' });

		const data = await mixpay.createOneTimePaymentLink({
			payeeId,
			quoteAmount: amount,
			quoteAssetId: 'USD',
			settlementAssetId: await getAssetId('USDT'),
			paiementAssetId: await getAssetId('USDT'),
			returnTo: '/success',
			orderId: '1234567890'
		});

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
