<script>
  let loading = false

  function handleSubmit(event) {
    event.preventDefault()
    
    loading = true
  }
</script>

<form on:submit={handleSubmit} class="border border-cms-green-50 p-8 rounded shadow grid gap-4 w-full max-w-md">
  <h1 class="text-center">Log in</h1>
  <label for="email">
    Email
    <input type="email" id="email" name="email" placeholder="you@yourcompany.com" required />
  </label>
  <label for="password">
    Password
    <input type="password" id="password" name="password" placeholder="********" required />
  </label>
  <button type="submit" disabled={loading} class="action-button">
    {#if loading}
      <img src="/loading.svg" alt="" class="invert animate-spin" /> Logging in...
    {:else}
      <img src="/log-in.svg" alt="" class="invert" /> Log in
    {/if}
  </button>
</form>