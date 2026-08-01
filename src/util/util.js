
//The ingredients are listed as propeties (EX 'strIngredient1' strIngredient12") and some of the values are null, function to 
//put the recipes in an array 

export function pullOutIngredients(ing){

    const x = []
    for(let i in ing){

        if(i.includes("strIngredient")&& ing[i])
            x.push(ing[i])

    }

    return x;



}


//same thing as above, just for the amount of each ingredient
export function pullOutIngredientAmounts(ing){

     const x = [];
     for (let i in ing) {
       if (i.includes("strMeasure") && ing[i]) x.push(ing[i]);
     }

     return x;

}


