
console.log("sdas")

const url =
  "https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ac57dbe144msh1b7cf41ae3ff422p17282djsna199af6985d3",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};
let card = document.getElementById("card");


 class Showdata {
      
async  getapidata() {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
      } catch (error) {
        console.error(error);
      }
    }
  async show() {
    let data = await getapidata();

    for (x of data) {
      console.log(x);
      card.innerHTML += `
        <div class="col-lg-3 g-3 col-md-6">
        <div  class="card " >
          <img class="card-img-top" src="${x.thumbnail}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        
       
      </div>
      
      </div>
        `;
    }
  }
}




