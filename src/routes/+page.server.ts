import type { Actions } from '@sveltejs/kit';
import { config } from 'dotenv';
import type { T } from 'vitest/dist/types-71ccd11d';

config();

const MIXPAY_API_URL = 'https://api.mixpay.me/v1';

export const actions: Actions = {
	createShortLink: async ({ request }) => {
		const formData = await request.formData();
		const { amount, quoteAsset } = Object.fromEntries(formData);
		const payeeId = process.env.MIXPAY_PAYEE_ID ?? '';

		const quoteAssetId = await getAssetId(quoteAsset as string);

		const body = {
			payeeId,
			quoteAmount: amount,
			quoteAssetId,
			settlementAssetId: await getAssetId('USDT')
		};

		console.log(body);

		const response = await fetch(`${MIXPAY_API_URL}/payments`, {
			method: 'POST',
			body: JSON.stringify(body)
		});

		const data = await response.json();
		console.log(data);
	}
};

async function getAssetId(asset: string): Promise<string> {
	const response = await fetch(`${MIXPAY_API_URL}/setting/payment_assets`);
	const { data } = await response.json();

	const assetId = data.find((item: any) => item.symbol === asset)?.chainAsset.id;

	if (!assetId) {
		throw new Error(`Asset ${asset} not found`);
	}

	return assetId;
}
