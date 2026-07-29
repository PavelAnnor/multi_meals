export default async function fetchData(){

    

    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    const result = await response.json()
    console.log(result)
    return result
    




}

