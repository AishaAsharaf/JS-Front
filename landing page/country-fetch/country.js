data = async() =>{
  let  countryValue = bar.value
  console.log(countryValue);
  if(countryValue){
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryValue}?fullText=true`)
    console.log(response);
    response.json().then((result)=>{
        console.log(result);
            let cname = result[0].name.common
            console.log(cname);

            let oname = result[0].name.official
            console.log(oname);

           

            /* currency */
            for(let currency in result[0].currencies){
                var curr = result[0].currencies[currency].name
                var symbol = result[0].currencies[currency].symbol
            }
            console.log(curr);
            console.log(symbol);

            let capital = result[0].capital[0]
            console.log(capital);

            /* languages */
            national = []
            for(let lang in result[0].languages){
                national.push(result[0].languages[lang])    
                
            }
        
        
            

            let pop = result[0].population
            console.log(pop);

            let bord = result[0].borders
            console.log(bord);

            let areaa = result[0].area
            console.log(areaa);

            let map = result[0].maps.googleMaps
            console.log(map);

            let flag = result[0].flags.png
            console.log(flag);

            let timezone = result[0].timezones
            console.log(timezone);

            let conti = result[0].continents
            console.log(conti);


            final.innerHTML=`<div class="card m-5 fs-4" style="width: 40rem;">
                                <img class="card-img-top p-3 rounded shadow" src="${flag}" alt="Card image cap" style="border-radius:10px;">
                                <div class="card-body">
                                     <h5 class="card-title fw-bolder fs-1 text-primary" style="overflow-y: hidden">${oname}</h5>
                                     <p class="card-text">${cname}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Capital: ${capital}</li>
                                    <li class="list-group-item">Population: ${pop}</li>
                                    <li class="list-group-item">Currency: ${symbol} ${curr}</li>
                                    <li class="list-group-item">Language: ${national}</li>
                                    <li class="list-group-item">Time Zone: ${timezone}</li>
                                    <li class="list-group-item">Continents: ${conti}</li>
                                    <li class="list-group-item">Area: ${areaa}</li>
                                    <li class="list-group-item">Border: ${bord}</li>

                                </ul>
                             <div class="card-body">
                                 <a href="${map}" class="card-link"><button class="btn btn-primary text-light">Google Maps</button></a>
                          
                             </div>
                            </div>`

            

    })
  }
  
  else{
    alert('write a country name')
}
}