export default async function fetchData(food = "Arrabiata") {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`,
  );
  const result = await response.json();
  console.log(result.meals);
  return result;
}

