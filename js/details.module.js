import { DisplayMeal } from "./main.module.js";
let dettails = document.getElementById("details");

export class Details {
  static async showDetailsItem(id) {
    let data = await DisplayMeal.GetDataApi(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    for (let detail of data.meals) {
      dettails.innerHTML = `
            
      <div class="row">
      <div class="col-lg-6 gx-2">
          <div class=" ">
             <img width="400" src="${detail.strMealThumb}" alt="">
             <h2>${detail.strMeal}</h2>
             </div>
             </div>

     
    <div class=" col-lg-6 gx-2">
      
    
    <div class="text-start">
    <h2 class="fw-bolder"> instruction:</h2>
    <p>${detail.strInstructions}</p>
    <h3> <span class="fw-bolder">area:</span>${detail.strArea}</h3>
    <h3> <span class="fw-bolder">category: </span>${detail.strCategory}</h3>
    <h3><span>Recipes :</span></h3>
    <div>
    <ul class ="d-flex">
    <li   >${detail.strIngredient1}</li >
    <li  >${detail.strIngredient2}</li >
    <li  >${detail.strIngredient3}</li >
    <li  >${detail.strIngredient4}</li >
    <li  >${detail.strIngredient5}</li>
    </ul>
    </div>

     
     <h3><span class="fw-bolder">tags:</span> ${detail.strTags}</h3>
     <a href="" class="mx-2 btn btn-success">source</a> <a  taget="_blank" href="${detail.strYoutube}" class="btn btn-danger">You toube</a>
    </div>
    
    
    </div>
     
     
      </div>

       
      
      
     `;
    }
  }
}
