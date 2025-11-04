// Render Product List
const shop = document.querySelector('#shop');
const productList = product.renderProductList();
shop.appendChild(productList);

// Render Categories & Filters
const categories = document.querySelector('#categories');
const seed = product.addFilterRadio('Seeds', 'category', 'Seeds','', product.categoryCallback.bind(product));
const soilFertilizer = product.addFilterRadio('Soil & Fertilizer', 'category', 'Soil & Fertilizer', '', product.categoryCallback.bind(product));
const gardeningTools = product.addFilterRadio('Gardening Tools', 'category', 'Gardening Tools', '', product.categoryCallback.bind(product));
const potPlanters = product.addFilterRadio('Pots & Planters', 'category', 'Pots & Planters', '', product.categoryCallback.bind(product));
const pestControl = product.addFilterRadio('Pest Control', 'category', 'Pest Control', '', product.categoryCallback.bind(product));
categories.append(seed, soilFertilizer, gardeningTools, potPlanters, pestControl);

const readyToShip = document.querySelector('.ready-to-ship');
const rtsCheck = product.addFilterCheckbox('Ready to Ship', 'readyToShip', true, '', product.readyToShipCallback.bind(product));
readyToShip.appendChild(rtsCheck);

const byPrice = document.querySelector('.by-price');
const underFive = product.addFilterRadio('Under $5', 'price', 'under-five', '', product.priceCallback.bind(product));
const fiveTen = product.addFilterRadio('$5 - $10', 'price', 'five-ten', '', product.priceCallback.bind(product));
const tenTwenty = product.addFilterRadio('$10 - $20', 'price', 'ten-twenty', '', product.priceCallback.bind(product));
const twentyThirty = product.addFilterRadio('$20 - $30', 'price', 'twenty-thirty', '', product.priceCallback.bind(product));
const overThirty = product.addFilterRadio('Over $30', 'price', 'over-thirty', '', product.priceCallback.bind(product));
byPrice.append(underFive, fiveTen, tenTwenty, twentyThirty, overThirty);

const byRating = document.querySelector('.by-rating');
const fromOneStar = product.addFilterRadio('From 1*', 'rating', 'from 1*', '', product.ratingCallback.bind(product));
const fromTwoStar = product.addFilterRadio('From 2*', 'rating', 'from 2*', '', product.ratingCallback.bind(product));
const fromThreeStar = product.addFilterRadio('From 3*', 'rating', 'from 3*', '', product.ratingCallback.bind(product));
const fromFourStar = product.addFilterRadio('From 4*', 'rating', 'from 4*', '', product.ratingCallback.bind(product));
const fiveStar = product.addFilterRadio('5*', 'rating', '5*', '', product.ratingCallback.bind(product));
byRating.append(fromOneStar, fromTwoStar, fromThreeStar, fromFourStar, fiveStar);

// Update Counter by clicking Add to cart Buttons
function updateCounter() {
    const cartBoxList = document.querySelectorAll('.cart-box');
    counter.textContent = `${cartBoxList.length}`;
}
updateCounter();

const atcBtns = document.querySelectorAll('.add-to-cart');
atcBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        updateCounter();
    })
})