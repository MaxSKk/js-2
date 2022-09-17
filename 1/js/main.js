const products = [
    { id: 1, title: 'Notebook', price: 2000, image: './image/gamepad.jpg' },
    { id: 2, title: 'Mouse', price: 20, image: './image/gamepad.jpg' },
    { id: 3, title: 'Keyboard', price: 200, image: './image/gamepad.jpg' },
    { id: 4, title: 'Gamepad', price: 50, image: './image/gamepad.jpg' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<div class="product-item">
                <img src="${item.image}">
                <div class="product-item__text-block">
                    <h3 class="product-item__title">${item.title}</h3>
                    <p class="product-item__text">${item.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);