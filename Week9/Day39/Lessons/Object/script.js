const products = {
    "Shoes" :["Sneakers", "Boots", "Sandals"],
    "T-Shirts" :["Shirts","Polos"],
    "Coats" :["Jackets"],
};
console.log(typeof(products))
function recommendProducts(){
    const selectedProduct = document.getElementById("productInput").value;
    const recommended = recommendedSimilarProducts(selectedProduct);
    const recommendationElement = document.getElementById("recommendations");

    if (recommended.length > 0){
        recommendationElement.textContent = `Similar products to ${selectedProduct}: ${recommended.join(", ")}`    
    }else{
        recommendationElement.textContent= `No similar products found for ${selectedProduct}` 
    }
}

function recommendedSimilarProducts(product){
    if (products[product] !== undefined){
        return products[product]
    }
    return [];
}