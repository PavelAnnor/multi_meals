


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