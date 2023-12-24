;(async function locateMe() {
  const response = await fetch('/api/locate')

  if (response.ok) {
    const data = await response.json()
    document.querySelector('pre').innerHTML = JSON.stringify(data, null, 2)
  } else {
    console.info('Request failed with status code', response.status)
  }
})()
