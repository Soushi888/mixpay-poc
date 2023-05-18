import type { Actions } from '@sveltejs/kit';
import { config } from 'dotenv';

config();

const MIXPAY_API_URL = 'https://api.mixpay.me/v1';

export const actions: Actions = {
	createShortLink: async ({ request }) => {
		const formData = await request.formData();
		const { amount, quoteAsset, settlementAsset } = Object.fromEntries(formData);
		const payeeId = process.env.MIXPAY_PAYEE_ID ?? '';

		const body = {
			payeeId,
			quoteAmount: amount,
			quoteAssetId: quoteAsset,
			settlementAssetId: settlementAsset
		};

		console.log(body);

		const response = await fetch(`${MIXPAY_API_URL}/pay`, {
			method: 'GET',
			body: JSON.stringify(body)
		});

		const data = await response.json();
		console.log(data);
	}
};
