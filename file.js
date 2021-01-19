
var div = document.getElementById("cardDiv");
fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "20eab6a446mshc6a0b21f57a159ep1908b5jsn92b1ee32d193",
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
	}
})
.then(response => {
	return response.json()
})
.then(data => {
    
    console.log(data)
    let arr =data["results"]
    let  variable;

   
    for(let i =0; i < arr.length; i++){
        if (i%4==0){
            variable = document.createElement("div");
            variable.classList.add("row");
            div.appendChild(variable);

        }
        // console.log(arr[i])
        variable.innerHTML+=`
        <div class = " card col-3">
            <img class =" card-img-top" src ="${arr[i]["background_image"]}">
            <div class ="card-body">
                <h5 class =" card-title">${arr[i]["name"]}</h5>
                <p>${arr[i]["slug"]}</p>
            </div>
        </div>
        `
    }
    
})
.catch(err => {
	console.error(err);
});

