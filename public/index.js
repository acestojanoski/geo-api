const onMount = (fn) => document.addEventListener('DOMContentLoaded', fn)

onMount(async () => {
  const displayElement = document.querySelector('#result')

  try {
    const response = await fetch('/api/locate')
    const serializedData = JSON.stringify(await response.json(), null, 2)
    displayElement.innerHTML = serializedData

    if (!response.ok) {
      console.info('Request failed with status code', response.status)
    }
  } catch (error) {
    displayElement.innerHTML = error.message
  }
})
