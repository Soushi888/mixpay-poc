<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotLead="place-self-start gap-3">
	<svelte:fragment slot="lead">
		<a href="/">Home</a>
		<a href="/about">About</a>
	</svelte:fragment>
	<h1 class="h1">MixPay Proof of Concept</h1>
</AppBar>
