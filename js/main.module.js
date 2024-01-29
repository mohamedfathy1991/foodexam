/* ========> side bar  <=======   */

import { Details } from "./details.module.js";

export function menuanimation() {
  if ($(".dashboard-main").css("left") == "-200px") {
    $(".dashboard-main").animate({ left: "0" }, 600);
    $(".open-close-icon").addClass(" fa-xmark");

    $(".animation-ul ").slideDown(800);
  } else {
    $(".dashboard-main").animate({ left: "-200px" }, 600);
    $(".open-close-icon").removeClass(" fa-xmark");
    $(".animation-ul ").slideUp(500);

    // $(".animation-ul ").slideDown(200)
  }
}

/* ========> home page page <=======   */
let homemeal = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

export class DisplayMeal {
  static async GetDataApi(url) {
    $(".lds-spinner").removeClass("d-none");
    let dd = await fetch(url);

    let data = await dd.json();
    $(".lds-spinner").addClass("d-none");

    return data;
  }

  static async HomeDisplayMeal(url = homemeal) {
    let data = await DisplayMeal.GetDataApi(url);

    let card = document.getElementById("card");
    card.innerHTML = "";
    data.meals.forEach((item) => {
      card.innerHTML += `
    <div class=" g-3 col-md-3 col-sm-6   g-4">
    <div  data-id=${item.idMeal} class="card carddetails h-100 position-relative  overflow-hidden" >
  
      <img class="" src="${item.strMealThumb}" alt="Card image cap">
      <div class=" layer    align-content-center justify-content-center" >
      
      <h3>${item.strMeal}</h3>         
      </div>
  </div>
  
  </div>
    `;
    });

    let cardid = document.querySelectorAll(".carddetails");
    cardid.forEach((item) => {
      item.addEventListener("click", () => {
        hidenPages();
        $(".detalis-page").removeClass("d-none");

        Details.showDetailsItem(item.dataset.id);
      });
    });
  }
}
/* ========> search page <=======   */

export class Search {
  static showInputPage() {
    $("#search").click(function () {
      hidenPages();
      $(".search-page").removeClass("d-none");

      menuanimation();
    });
  }
  static async searchByNameAndLetter(url) {
    let data = await DisplayMeal.GetDataApi(url);
    let card = document.getElementById("searchcard");
    card.innerHTML = "";
    data.meals.forEach((item) => {
      card.innerHTML += `
          <div class=" g-3 col-md-3 col-sm-6   g-4">
          <div data-id=${item.idMeal} class="card carddetailssearch h-100 position-relative  overflow-hidden" >
        
            <img class="" src="${item.strMealThumb}" alt="Card image cap">
            <div class=" layer    align-content-center justify-content-center" >
            
            <h3>${item.strMeal}</h3>
            
      
      
      
            
            </div>
      
           
         
        </div>
        
        </div>
          `;
    });

    let cardid = document.querySelectorAll(".carddetailssearch");
    cardid.forEach((item) => {
      item.addEventListener("click", () => {
        hidenPages();
        $(".detalis-page").removeClass("d-none");
        Details.showDetailsItem(item.dataset.id);
      });
    });
  }
}

/* ========> category page <=======   */
export class Category {
  static showCategoryPage() {
    $("#category").click(function () {
      hidenPages();

      $(".category").removeClass("d-none");
      menuanimation();
      let url = `https://www.themealdb.com/api/json/v1/1/categories.php`;

      Category.showCategoryMeals(url);
    });
  }
  static async showCategoryMeals(url) {
    let data = await DisplayMeal.GetDataApi(url);
    let card = document.getElementById("datacategory");

    card.innerHTML = "";
    data.categories.forEach((item) => {
      card.innerHTML += `
          <div class=" g-3 col-md-3 col-sm-6   g-4">
          <div data-id=${
            item.strCategory
          }  class="card cardebycategory h-100 position-relative  overflow-hidden" >
        
            <img class="" src="${item.strCategoryThumb}" alt="Card image cap">
            <div class=" layer    " >
            <div>
            <h3>${item.strCategory}</h3>
            <p>${item.strCategoryDescription.slice(0, 120)}</p>
           
            </div>

            
            </div>
      
           
         
        </div>
        
        </div>
          `;
    });
    let cardid = document.querySelectorAll(".cardebycategory");
    cardid.forEach((item) => {
      item.addEventListener("click", () => {
        hidenPages();
        $(".home-card").removeClass("d-none");
        DisplayMeal.HomeDisplayMeal(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${item.dataset.id}`
        );
      });
    });
  }
}

/* ========> area page <=======   */

export class Area {
  static showAreaPage() {
    $("#area").click(function () {
      hidenPages();

      $(".area-page").removeClass("d-none");
      menuanimation();
      let url = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;

      Area.showAreaMeals(url);
    });
  }
  static async showAreaMeals(url) {
    let data = await DisplayMeal.GetDataApi(url);
    let card = document.getElementById("areapage");

    card.innerHTML = "";
    data.meals.forEach((item) => {
      card.innerHTML += `
          <div class=" g-3 col-md-3 col-sm-6   g-4">
          <div data-id="${item.strArea}" class=" areadetails overflow-hidden" >
          <i class="fa-solid fa-house-laptop fa-fa-2xs"></i>
          <h2>${item.strArea}</h2>
            </div>
            
            </div>
      </div>
        
        </div>
          `;
    });
    let cardid = document.querySelectorAll(".areadetails");
    cardid.forEach((item) => {
      item.addEventListener("click", () => {
        hidenPages();
        $(".home-card").removeClass("d-none");
        DisplayMeal.HomeDisplayMeal(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${item.dataset.id}`
        );
      });
    });
  }
}

/* ========> grident page <=======   */

export class Ingredient {
  static showIngredientPage() {
    $("#Ingredient").click(function () {
      hidenPages();

      $(".Ingredient-page").removeClass("d-none");

      menuanimation();
      let url = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
      Ingredient.showIngredentMeal(url);
    });
  }
  static async showIngredentMeal(url) {
    let data = await DisplayMeal.GetDataApi(url);
    let card = document.getElementById("data-Ingredient");

    card.innerHTML = "";

    data.meals.forEach((item) => {
      if (item.strDescription != null) {
        card.innerHTML += `
          <div  class="  g-3 col-md-3 col-sm-6    g-4">
          <div data-id="${
            item.strIngredient
          }"  class=" gredientdetail overflow-hidden" >
          <i class="fa-solid fa-drumstick-bite"></i>
          <h3>${item.strIngredient}</h3>
          <p>  ${item.strDescription.slice(0, 50)}</p>
          
             
            </div>

            
            </div>         
         
        </div>
        
        </div>
          `;
      }
    });
    let cardid = document.querySelectorAll(".gredientdetail");
    cardid.forEach((item) => {
      item.addEventListener("click", () => {
        hidenPages();
        $(".home-card").removeClass("d-none");

        DisplayMeal.HomeDisplayMeal(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${item.dataset.id}`
        );
      });
    });
  }
}
/* ========> contacts page <=======   */

export class Contacts {
  static showContactsPage() {
    $("#contacts").click(function () {
      hidenPages();
      $(".contacts-page").removeClass("d-none");

      menuanimation();
    });
  }
}

function hidenPages() {
  $(".home-card").addClass("d-none");
  $(".search-page").addClass("d-none");
  $(".category").addClass("d-none");
  $(".area-page").addClass("d-none");
  $(".Ingredient-page").addClass("d-none");
  $(".contacts-page").addClass("d-none");
  $(".detalis-page").addClass("d-none");
}
