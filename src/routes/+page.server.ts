import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	createShortLink: async ({ request }) => {
		const formData = await request.formData();
		const { amount, quoteAsset, settlementAsset } = Object.fromEntries(formData);
		console.log({ amount, quoteAsset, settlementAsset });
	}
};
