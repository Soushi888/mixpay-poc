<script lang="ts">
	import { enhance } from '$app/forms';
	import PaymentLink from '$lib/components/payment-link.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;

	$: if (form?.url) {
		window.open(form.url, '_blank');
	}

	$: if (form?.error) {
		console.log(form.error);
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center flex-col">
	<div class="flex gap-5 justify-around">
		<div class="card p-5">
			<h3 class="h3 mb-2 font-bold text-center">Payment links</h3>
			<img src="mixpay-btn.svg" alt="MixPay Button" class="mb-5" />
			<div class="flex flex-col gap-4">
				<PaymentLink amount={1} />
				<PaymentLink amount={5} />
				<PaymentLink amount={10} />
				<PaymentLink amount={20} />
				<PaymentLink />
			</div>
		</div>

		<!-- <div class="card p-5">
			<h3 class="h3 mb-2 font-bold">Amount</h3>
			<form action="?/createShortLink" method="post" use:enhance>
				{#if form?.error}
					<p class="m-2 text-primary-500">{form.error}</p>
				{/if}
				<div class="flex flex-col gap-5">
					<input class="input" type="number" name="amount" placeholder="Amount" min="0" />
					<button class="btn variant-filled-primary" type="submit">Donate</button>
				</div>
			</form>
		</div> -->
	</div>
</div>
