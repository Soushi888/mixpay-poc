<script lang="ts">
	import { enhance } from '$app/forms';
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
	<h2 class="h2 m-4">Donation</h2>

	<div class="flex gap-5 justify-around">
		<div class="card p-5">
			<h3 class="h3 mb-2 font-bold">Payment links</h3>
			<div class="flex flex-col gap-2">
				<a
					class="btn variant-filled-primary hover:variant-ghost-primary"
					href="https://mixpay.me/41127124/1usd"
					target="_blank"
				>
					1 $US
				</a>
				<a
					class="btn variant-filled-primary hover:variant-ghost-primary"
					href="https://mixpay.me/41127124/5usd"
					target="_blank"
				>
					5 $US
				</a>
				<a
					class="btn variant-filled-primary hover:variant-ghost-primary"
					href="https://mixpay.me/41127124/10usd"
					target="_blank"
				>
					10 $US
				</a>
				<a
					class="btn variant-filled-primary hover:variant-ghost-primary"
					href="https://mixpay.me/41127124/20usd"
					target="_blank"
				>
					20 $US
				</a>
				<a
					class="btn variant-filled-primary hover:variant-ghost-primary"
					href="https://mixpay.me/41127124/donation"
					target="_blank"
				>
					Choose Amount
				</a>
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
