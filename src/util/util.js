export function pullOutIngredients(ing){

    const x = []
    for(let i in ing){

        if(i.includes("strIngredient")&& ing[i])
            x.push(ing[i])

    }

    return x;



}



export function pullOutIngredientAmounts(ing){

     const x = [];
     for (let i in ing) {
       if (i.includes("strMeasure") && ing[i]) x.push(ing[i]);
     }

     return x;

}


