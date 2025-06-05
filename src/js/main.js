const burgerBtn = document.querySelector('.burger-btn')
const burgerBtnBars = document.querySelector('.burger-btn__bars')
const navMobile = document.querySelector('.nav-mobile')
const footerYear = document.querySelector('.footer__year')
const nav = document.querySelector('.navigation')
const portfolioTitle = document.querySelector('.portfolio__my-title')
const allNavItems = document.querySelectorAll('.nav__item')
const scroll = document.querySelectorAll('.nav__item-scroll')
const cardButton = document.querySelectorAll('.card__button')
const items = document.querySelectorAll('.accordion__item')
const animated = document.querySelectorAll('.scroll-animation')


//////////////////BURGER BTN///////////////
const openMenu = () => {
	burgerBtn.classList.toggle('burger-btn--active-btn')
	navMobile.classList.toggle('nav-mobile--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active')
			burgerBtn.classList.remove('burger-btn--active-btn')
		})
	})

	handleNavItemsAnimation()
}
/////////////////////LINK ANIMATION MOBILE////////////////
const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}


///////////////ADDING A SHADOW TO THE NAVIGATION//////////////////
const addShadow = () => {
	if (window.scrollY >= 50) {
		portfolioTitle.classList.add('portfolio__my-title--active-scroll')
		burgerBtnBars.classList.add('burger-btn__bars--active-scroll')
		nav.classList.add('navigation--active-scroll')
		scroll.forEach(el => {
			el.classList.add('nav__item-scroll--active')
		})
	} else {
		portfolioTitle.classList.remove('portfolio__my-title--active-scroll')
		burgerBtnBars.classList.remove('burger-btn__bars--active-scroll')
		nav.classList.remove('navigation--active-scroll')
		scroll.forEach(el => {
			el.classList.remove('nav__item-scroll--active')
		})
	}
}


////////////EXPERIENCE : TURNING OVER CARDS////////////////

document.querySelectorAll('.card__button').forEach(button => {
	button.addEventListener('click', e => {
		e.stopPropagation(); // zapobiega np. kliknięciu innych elementów
		const card = button.closest('.card')
		card.classList.toggle('is-flipped')
	})
})

/////////////MY PROJECTS : ACCORDION///////////

items.forEach(item => {
	item.addEventListener('click', () => {
		const isOpen = item.classList.contains('open')
		items.forEach(el => el.classList.remove('open'))
		if (!isOpen) {
			item.classList.add('open')
		}
	})
})

//////////////MY PROJECTS : ACCORDION///////////////

const handleScrollAnimation = () => {
	animated.forEach(el => {
		const rect = el.getBoundingClientRect()
		if (rect.top <= window.innerHeight - 100) {
			el.classList.add('scroll-animation--active')
		}
	})
}

////////////// FOOTER/////////////////////////////
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
burgerBtn.addEventListener('click', openMenu)
window.addEventListener('scroll', addShadow)
window.addEventListener('scroll', handleScrollAnimation)
window.addEventListener('load', handleScrollAnimation)
