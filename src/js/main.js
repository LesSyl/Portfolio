const burgerBtn = document.querySelector('.burger-btn')
const navMobile = document.querySelector('.nav-mobile')
const footerYear = document.querySelector('.footer__year')
const nav = document.querySelector('.navigation')
const portfolioTitle = document.querySelector('.portfolio__my-title')
const allNavItems = document.querySelectorAll('.nav__item')
const scroll = document.querySelectorAll('.nav__item-scroll')
const cardButton = document.querySelector('.card__button')
const items = document.querySelectorAll('.accordion__item')
const section = document.querySelectorAll('section')
const animated = document.querySelectorAll('.scroll-animation')

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

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const addShadow = () => {
	if (window.scrollY >= 50) {
		portfolioTitle.classList.add('portfolio__my-title--active-scroll')
		nav.classList.add('navigation--active-scroll')
		scroll.forEach(el => {
			el.classList.add('nav__item-scroll--active')
		})
	} else {
		portfolioTitle.classList.remove('portfolio__my-title--active-scroll')
		nav.classList.remove('navigation--active-scroll')
		scroll.forEach(el => {
			el.classList.remove('nav__item-scroll--active')
		})
	}
}

const openCard = () => {
	document.querySelectorAll('.card').forEach(el => {
		el.addEventListener('click', () => {
			el.classList.toggle('is-flipped')
		})
	})
}

items.forEach(item => {
	item.addEventListener('click', () => {
		const isOpen = item.classList.contains('open')
		items.forEach(el => el.classList.remove('open'))
		if (!isOpen) {
			item.classList.add('open')
		}
	})
})


window.addEventListener('scroll', () => {
	let current = ''

	section.forEach(section => {
		const sectionTop = section.offsetTop
		// const sectionHeight = section.offsetHeight
		if (window.scrollY >= sectionTop - 200) {
			current = section.getAttribute('id')
		}
	})

	scroll.forEach(link => {
		link.classList.remove('active-scroll')
		if (link.getAttribute('href') === '#' + current) {
			link.classList.add('active-scroll')
		}
	})
})



const handleScrollAnimation = () => {
  animated.forEach(el => {
    const rect = el.getBoundingClientRect()
    if (rect.top <= window.innerHeight - 100) {
      el.classList.add('scroll-animation--active')
    }
  })
}


handleCurrentYear()
burgerBtn.addEventListener('click', openMenu)
window.addEventListener('scroll', addShadow)
window.addEventListener('scroll', handleScrollAnimation)
window.addEventListener('load', handleScrollAnimation)
cardButton.addEventListener('click', openCard)
