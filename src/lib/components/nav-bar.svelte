<script lang="ts">
	import { AppBar, Avatar } from '@skeletonlabs/skeleton';
</script>

<AppBar gridColumns="grid-cols-1" slotLead="place-self-center gap-3">
	<svelte:fragment slot="lead">
		<Avatar src="avatar.png" />
		<h2 class="h2">Soushi Donation</h2>
	</svelte:fragment>
</AppBar>
