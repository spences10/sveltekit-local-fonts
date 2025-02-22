<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class="prose prose-xl container mx-auto max-w-3xl px-4">
	{@render children()}
</main>
