(async function getGraph(){
    const query=`query FILM{
        film(filmID:3){
          openingCrawl
          director
          title
          producers
          releaseDate
          characterConnection{
            pageInfo{
              hasNextPage
            }
          }
        }
      }`
    const endpoint=await fetch('https://swapi-graphql.netlify.app/.netlify/functions/index',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({query})
    })
    const resp=await endpoint.json()
    const bodySrt='resp.data.film'
    console.log(resp)
    const screen=document.querySelector('.second')
        screen.innerHTML+=`
        <div>
        <div>
        ${resp.data.film.director}
        </div>
        <div>
        ${resp.data.film.openingCrawl}
        </div>
        <div>
        ${resp.data.film.releaseDate}
        </div>
        <div>
        ${resp.data.film.title}
        </div>
        <div>
        `
})()