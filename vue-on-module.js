const { createApp } = Vue

async function register(selector, path) {
  const element = document.querySelector(selector)
  if (element) createApp((await import(path)).default).mount(selector)
}

export default { register }
