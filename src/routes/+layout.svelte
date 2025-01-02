<script lang="ts">
	import '../app.postcss'
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<main class="container max-w-3xl mx-auto px-4 prose prose-xl">
	{@render children?.()}
</main>
