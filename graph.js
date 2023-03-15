
  (async function get(){
    const query=`query allpers{
      allPlanets{
        pageInfo{
          hasNextPage
          startCursor
        }
        edges{
          node{
            name
          }
        }
      }
    }`
    
    const myBody=document.querySelector('.myGraph')
    
    const resp= await fetch('https://swapi-graphql.netlify.app/.netlify/functions/index',{
      method:'POST',
      headers: {"Content-type":'application/json'},
      body:JSON.stringify({query})

    }).then(resp=>{
      return resp.json();
    }).then(q=>{
      console.log(q.data.allPlanets.edges)
      for (const a of q.data.allPlanets.edges){
        myBody.innerHTML+=`
        <article>
        <div>
        ${a.node.name}
        </div>
        </article>
        `
      }
    })
   
  }) ()
  