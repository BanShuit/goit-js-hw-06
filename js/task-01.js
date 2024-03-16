const categoriesList = document.querySelectorAll('#categories .item');
let categoriesCount = 0;

categoriesList.forEach(category => {
    categoriesCount++;
    const categoryName = category.querySelector('h2').textContent;
    const elementsCount = category.querySelectorAll('li').length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
})

console.log(`Number of categories: ${categoriesCount}`);
