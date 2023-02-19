const apiKey = 'lQYzzyMgtbkcJ9F5cSRjDcbBwWMFt125'


const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)


httpCall
.then(result => result.json())
.then(({data}) =>{
    const { url } = data.images.original

    const img = document.createElement('img')
    img.src = url

    document.body.append(img);
})
.catch(console.warn);
