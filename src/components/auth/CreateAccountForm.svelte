<script>
  let messages = {}
  let loading = false

  async function handleSubmit(event) {
    event.preventDefault()
    
    messages = { }
    loading = true
    const formData = new FormData(event.target)

    const password = formData.get('password')
    const confirmPassword = formData.get('confirm-password')

    if (password !== confirmPassword) {
      loading = false
      messages = { password: "Passwords don't match" }
      
      return
    }

    const request = await fetch('/create-account', { method: 'POST', body: formData })
    const response = await request.json()

    console.log('response', response)

    if (response.messages) messages = {...response.messages}

    loading = false
  }
</script>

<form on:submit={handleSubmit} class="border border-cms-green-50 p-8 rounded shadow grid gap-4 w-full max-w-md">
  <h1 class="text-center">Create Account</h1>
  <label for="email">
    <span class="flex justify-between items-center">
      Email {#if messages.email}<span class="text-sm text-red-600">{messages.email}</span>{/if}
    </span>
    <input type="email" id="email" name="email" placeholder="you@yourcompany.com" required on:keydown={() => messages.email = '' } />
  </label>
  <label for="password">
    <span class="flex justify-between items-center">
      Password {#if messages.password}<span class="text-sm text-red-600">{messages.password}</span>{/if}
    </span>
    <input type="password" id="password" name="password" placeholder="********" minlength="8" required on:keydown={() => messages.password = '' } />
  </label>
  <label for="confirm-password">
    <span class="flex justify-between items-center">
      Confirm Password {#if messages.password}<span class="text-sm text-red-600">{messages.password}</span>{/if}
    </span>
    <input type="password" id="confirm-password" name="confirm-password" placeholder="********" minlength="8" required on:keydown={() => messages.password = '' } />
  </label>
  <button type="submit" disabled={loading} class="action-button">
    {#if loading}
      <img src="/loading.svg" alt="" class="invert animate-spin" /> Creating account...
    {:else}
      <img src="/create-account.svg" alt="" class="invert" /> Create new account
    {/if}
  </button>
</form>