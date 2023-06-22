<script lang="ts">
	export let amount: number | null = null;
</script>

<div>
	<a
		class="btn variant-filled-primary hover:variant-ghost-primary w-full"
		href="https://mixpay.me/41127124/{amount ? `${amount}usd` : 'donation'}"
		target="_blank"
	>
		{#if !amount}
			Choose Amount
		{:else}
			{amount} $US
		{/if}
	</a>
</div>
