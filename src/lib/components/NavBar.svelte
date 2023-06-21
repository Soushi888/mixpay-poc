<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotLead="place-self-start gap-3">
	<svelte:fragment slot="lead">
		<a href="/">Donation</a>
	</svelte:fragment>
	<h2 class="h2">EdenOnBitcoin Donation</h2>
</AppBar>
