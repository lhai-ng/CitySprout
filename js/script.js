// Header and Footer
class THeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="logo-nav">
                    <img class="logo" src="svg-image/logo.svg" alt="Logo">
                    <nav>
                        <input type="checkbox" id="sidebar-active">
                        <label for="sidebar-active" class="open-sidebar-button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" fill="#222"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                        </label>

                        <label id="overlay" for="sidebar-active"></label>
                        <div class="links-container">
                            <label for="sidebar-active" class="close-sidebar-button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px" fill="#222"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                            </label>
                            <a href="index.html">Home</a>
                            <a href="about.html">About</a>
                            <a href="shop.html">Shop</a>
                            <a href="blog.html">Blog</a>
                            <a href="contact.html">Contact</a>
                        </div>    
                    </nav>
                </div>
                <div class="icon-set"> 
                    <a href="">
                        <img width="20px" height="20px" src="svg-image/search.svg" alt="Search">
                    </a>
                    <a href="">
                        <img width="20px" height="20px" src="svg-image/login.svg" alt="Login">
                    </a>
                    <a class="cart-icon" href="">
                        <img width="20px" height="20px" src="svg-image/cart.svg" alt="Cart">
                    </a>
                </div>
            </header>
            <section class="header-compensation"><section>
        `
    }
}
customElements.define("t-header", THeader)

class TFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="fade-top"></div>
                <div class="footer-content">
                    <div class="form-socials">
                        <form action="">
                            <h5>Join our community now!</h5>
                            <p class="small-p">get the latest updates about best deals, new products, gardening tips and more!</p>
                            <div class="input-submit">
                                <input class="small-p" type="email" name="email" id="email" placeholder="enter email address">
                                <button class="small-p" type="submit">SIGN UP!</button>
                            </div>
                        </form>
                        
                        <div class="logo-socials">
                            <img class="footer-logo" src="svg-image/logo.svg" alt="Logo" width="128px" height="144px">
                            <div class="logo-socials-seperator"></div>
                            <div class="socials">
                                <h6>Follow us!</h6>
                                <div class="list-socials">
                                    <img src="svg-image/insta.svg" alt="Instagram">
                                    <img src="svg-image/facebook.svg" alt="Facebook">
                                    <img src="svg-image/tiktok.svg" alt="TikTok">
                                    <img src="svg-image/youtube.svg" alt="YouTube">
                                    <img src="svg-image/x.svg" alt="X/Twitter">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-info">
                        <div class="info-lists">
                            <div class="info menu">
                                <p class="info-title">Menu</p>
                                <hr>
                                <a class="p" href="index.html">Home</a>
                                <a class="p" href="about.html">About</a>
                                <a class="p" href="shop.html">Shop</a>
                                <a class="p" href="blog.html">Blog</a>
                                <a class="p" href="contact.html">Contact</a>
                            </div>
                            <div class="info other-info">
                                <p class="info-title">Other Info</p>
                                <hr>
                                <a class="p" href="">Privacy Policy</a>
                                <a class="p" href="">Terms & Conditions</a>
                            </div>
                            <div class="info contact">
                                <p class="info-title">Contact</p>
                                <hr>
                                <a class="p" href="">Phone number</a>
                                <a class="p" href="">E-mail</a>
                            </div>
                        </div>
                        <p class="credit">&copy; made by lhai-ng.</p>
                    </div>
                </div>
            </footer>
        `
    }
}
customElements.define("t-footer", TFooter)


// Add to Cart
const shoppingCart = document.querySelector('#shopping-cart');
const cartList = document.querySelector('.cart-list');
product.loadCart('.cart-list');

document.addEventListener('click', (e) => {
    if (e.target.closest('.cart-icon') ) {
        e.preventDefault();
        e.stopPropagation();
        shoppingCart.style.left = '0';
        document.documentElement.style.overflow = 'hidden';
        cartList.style.overflow = 'auto';
    }
})

shoppingCart.addEventListener('click', (e) => {
    if (e.target === shoppingCart) {
        shoppingCart.style.left = '110vw';
        document.documentElement.style.overflow = 'auto';
        cartList.style.overflow = 'hidden';
    }
})

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

let slide = new LaniSlide(".rec-product-list", {
    items: 4,
    speed: 600,
    loop: true,
    autoplay: true,
});

let currentItems = 4;
const updateSlide = () => {
    const width = window.innerWidth;
    let newItems;
    
    if (width > 1024) {
        newItems = 4;
    } else if (width > 640) {
        newItems = 3;
    } else {
        newItems = 2;
    }
    
    if (currentItems !== newItems) {
        currentItems = newItems;
        slide.opt.items = newItems;
        
        if (slide.track) {
            slide.track.remove();
        }
        slide.slides = slide.originalSlides.slice(0);
        slide.currentIndex = slide.opt.loop ? slide._getCloneCount() : 0;
        slide._createTrack();
        
        if (slide.opt.nav && slide.navWrapper) {
            slide.navWrapper.remove(); 
            slide._createNav(); 
        }
        
        slide._updatePosition();
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
