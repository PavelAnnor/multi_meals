
//function that gets recipes as long as they have the specifed keyword in the recipe name or list of ingredients
async function getMeals(food) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`,
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

//function that gets one random recipe
async function getRandomMeal() {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/random.php`,
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

//function that gets a recipe my ID
async function getMealByID(id) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}


export {getMealByID,getRandomMeal,getMeals}