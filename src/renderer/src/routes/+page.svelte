<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<script>
  function handleClick() {
    window.electronAPI?.sendMessage('Hello from SvelteKit!');
  }
</script>

<button on:click={handleClick}>Send IPC</button>