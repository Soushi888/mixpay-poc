<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import NavBar from '$lib/components/nav-bar.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Footer from '$lib/components/footer.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<NavBar />
	</svelte:fragment>
	<h2 class="h2 m-4 text-center text-3xl">Help me improve web3 donations projects.</h2>

	<slot />

	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>
