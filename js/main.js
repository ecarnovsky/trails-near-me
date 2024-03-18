
navigator.geolocation.getCurrentPosition((position) => {

    fetch(`https://api.tomtom.com/search/2/poiSearch/nature trail.json?key=xsnwWh7MFr7v6GKbnrtoR9P6rrDJkXGU&lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        for(let i = 0; i < data.results.length; i++){
          console.log(data.results[i].poi.name)
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

  });