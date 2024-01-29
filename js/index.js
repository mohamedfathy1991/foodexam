import {
  DisplayMeal,
  Search,
  menuanimation,
  Category,
  Area,
  Ingredient,
  Contacts,
} from "./main.module.js";

import { Details } from "./details.module.js";
//  animation for side bar open and close

$(".open-close-icon").click(() => {

      menuanimation();
    
    });

DisplayMeal.HomeDisplayMeal();



// ====> show input page <===== after click on link search in sidebar
function showInputPageAndSearchByNameAndLetter() {
  Search.showInputPage();

  $("#search-name").keyup(() => {
    let name = $("#search-name").val();
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    Search.searchByNameAndLetter(url);
  });
  $("#search-litter").keyup(() => {
    let letter = $("#search-litter").val();

    let url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
    Search.searchByNameAndLetter(url);
    if (letter == "") {
      $(".lds-spinner").addClass("d-none");
    }
  });
}

showInputPageAndSearchByNameAndLetter();

// ====>show category page <======

Category.showCategoryPage();
//=====> show area page<======
Area.showAreaPage();
// ======>show ingredient page<=======
Ingredient.showIngredientPage();

// ======>show contacts page<=======
Contacts.showContactsPage();

function chaeckInputdata() {
  let nameTest = /^[(a-z A-Z)]{1,50}$/;
  let ageTest = /^[\d]{1,2}$/;
  let emailtest = /(^[a-zA-Z]{2,20}[0-9]{0,3}@[a-z]{2,10}(.com|.eg)$)/g;
  let phonetest = /^0[0-9]{1,10}$/g;
  let passwordtest = /^[a-zA-z]{1,10}$/;

  $(".form input").keyup((e) => {
    let inputname = e.target.id;
    if (inputname == "name") {
      if (!nameTest.test(e.target.value)) {
        $(".name-form .name").removeClass("d-none");
      } else {
        $(".name-form .name").addClass("d-none");
      }
    }
    if (inputname == "age") {
      if (!ageTest.test(e.target.value)) {
        $(".age-form .age").removeClass("d-none");
      } else {
        $(".age-form .age").addClass("d-none");
      }
    }
    if (inputname == "email") {
      if (!emailtest.test(e.target.value)) {
        $(".email-form .email").removeClass("d-none");
      } else {
        $(".email-form .email").addClass("d-none");
      }
    }
    if (inputname == "telphone") {
      if (!phonetest.test(e.target.value)) {
        $(".telephone-form .telephone").removeClass("d-none");
      } else {
        $(" .telephone-form .telephone").addClass("d-none");
      }
    }
    if (inputname == "password") {
      if (!passwordtest.test(e.target.value)) {
        console.log("err");
        console.log(e.target.value);
        $(".password-form .password").removeClass("d-none");
      } else {
        console.log("true");
        $(" .password-form .password").addClass("d-none");
      }
    }

    $("#checkpassword").keyup((e) => {
      if ($("#password").val() != e.target.value) {
        $(".checkpassword").removeClass("d-none");
        return true;
      } else {
        $(".checkpassword").addClass("d-none");
      }
    });
    function removedisableBtn() {
      let name = document.querySelector("#name").value;
      let email = document.querySelector("#email").value;
      let age = document.querySelector("#age").value;
      let password = document.querySelector("#password").value;

      if (
        nameTest.test(name) &&
        ageTest.test(age) &&
        emailtest.test(email) &&
        passwordtest.test(password)
      ) {
        let btn = document.querySelector(".disabled");

        btn.classList.remove("disabled");
      }
    }
    removedisableBtn();
  });
}

chaeckInputdata();
