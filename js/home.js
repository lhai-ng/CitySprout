// Recommended Products
const recProducts = document.querySelector('#recommended-products');
const recProductList = document.querySelector(".rec-product-list");
const recProNum = [1, 5, 14, 29, 32, 43, 51];
recProNum.forEach((number, index) => {
    const product = products.find(p => p.id === number);
    const cardWrapper = document.createElement('div');
    cardWrapper.className = `card-wrapper card-${index}`;
    const card = product._renderListCard(product);
    cardWrapper.appendChild(card)
    recProductList.appendChild(cardWrapper);
})

let recSlide = new LaniSlide(".rec-product-list", {
    items: 4,
    speed: 600,
    loop: true,
    autoplay: true,
});

const addToCartBtns_para = document.querySelectorAll(".add-to-cart p");
const addToCartBtns_img = document.querySelectorAll(".add-to-cart img");
let currentItems = 4;
const updateSlide = () => {
    const width = window.innerWidth;
    let newItems;
    
    if (width > 1200) {
        newItems = 4;
        addToCartBtns_para.forEach(p => {
            p.textContent = '+';
        })
        addToCartBtns_img.forEach(img => {
            img.style.display = 'block';
        })
    } else if (width > 640) {
        newItems = 3;
        addToCartBtns_para.forEach(p => {
            p.textContent = '+';
        })
        addToCartBtns_img.forEach(img => {
            img.style.display = 'block';
        })
    } else {
        newItems = 2;
        addToCartBtns_para.forEach(p => {
            p.textContent = 'Add to cart!';
        })
        addToCartBtns_img.forEach(img => {
            img.style.display = 'none';
        })
    }
    
    if (currentItems !== newItems) {
        currentItems = newItems;
        recSlide.opt.items = newItems;
        
        if (recSlide.track) {
            recSlide.track.remove();
        }
        recSlide.slides = recSlide.originalSlides.slice(0);
        recSlide.currentIndex = recSlide.opt.loop ? recSlide._getCloneCount() : 0;
        recSlide._createTrack();
        
        if (recSlide.opt.nav && recSlide.navWrapper) {
            recSlide.navWrapper.remove(); 
            recSlide._createNav(); 
        }
        
        recSlide._updatePosition();
    }
}

const checkInterval = setInterval(() => {
    updateSlide();
}, 100);

setTimeout(() => {
    clearInterval(checkInterval);
}, 3000);

window.addEventListener('resize', () => {
    updateSlide();
})

// Testimonials
const tesSlide = new LaniSlide(".testimonial-list", {
    items: 1,
    speed: 120,
    loop: true,
})

const testimonialList = document.querySelector(".testimonial-list");
const nameTag = document.createElement('div');
const prev = document.querySelectorAll('.lanislide-prev')[1];
const next = document.querySelectorAll('.lanislide-next')[1];

nameTag.className = 'name-tag';
testimonialList.appendChild(nameTag)
const names = ['Alexia', 'Bernard', 'John', 'Nancy', 'David'];

const dots = document.querySelectorAll("#testimonials .lanislide-dot")
function changeName() {
    dots.forEach((dot, index) => {
        const dotStyle = Array.from(dot.classList);
        if (dotStyle.includes('active')) {
            nameTag.textContent = names[index];
        }
    })
}
changeName()

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        changeName();
        console.log('hihi');
    })
})
prev.addEventListener('click', () => {
    changeName();
})
next.addEventListener('click', () => {
    changeName();
})

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