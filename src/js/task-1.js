
const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.querySelectorAll('li.item');

console.log('Кількість категорій:', categoryItems.length);

categoryItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;

  const categoryItemsCount = category.querySelectorAll('li').length;

  console.log(`Категорія: ${categoryName} (Кількість елементів: ${categoryItemsCount})`);
});
