(function () {

    // Burger

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')
        const burgerButtons = e.target.closest('.block-buttons')

        if (!burgerIcon && !burgerNavLink && !burgerButtons) return
        if (document.documentElement.clientWidth > 1150) return

        if (burgerIcon) {
            e.preventDefault()
        }

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

// Modals Application

const modalApplication = document.querySelector('.modal--application')
const modalButtonApplication = document.querySelector('.button-application')

modalButtonApplication.addEventListener('click', openModalApplication)
modalApplication.addEventListener('click', closeModalApplication)

function openModalApplication(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal--application')
}

function closeModalApplication(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal--application__cancel') || target.classList.contains('modal--application')) {
        document.body.classList.remove('body--opened-modal--application')
    }

}

// Modals Application

const modalCalculate = document.querySelector('.modal--calculate')
const modalButtonCalculate = document.querySelector('.button-calculate')

modalButtonCalculate.addEventListener('click', openModalCalculate)
modalCalculate.addEventListener('click', closeModalCalculate)

function openModalCalculate(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal--calculate')
}

function closeModalCalculate(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal--calculate__cancel') || target.classList.contains('modal--calculate')) {
        document.body.classList.remove('body--opened-modal--calculate')
    }

}

// Modals Service

const modalService = document.querySelector('.modal--service')
const modalButtonService = document.querySelector('.service__card-arrow')

modalButtonService.addEventListener('click', openModalService)
modalService.addEventListener('click', closeModalService)

function openModalService(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal--service')
}

function closeModalService(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal--service__cancel') || target.classList.contains('modal--service')) {
        document.body.classList.remove('body--opened-modal--service')
    }

}

// Slader gallery

new Swiper('.gallery__slider', {

    spaceBetween: 20,
    slidesPerView: 1,


    pagination: {
        el: '.gallery__pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },

    breakpoints: {

        
    }
});

// Tabs

const tabControls = document.querySelector('.tab-controls')

tabControls.addEventListener('click', toggleTab)

function toggleTab(e) {

    const tabControl = e.target.closest('.tab-controls__link')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('tab-controls__link--active')) return

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tab-controls__link--active')
    const activeContent = document.querySelector('.tab-content--show')

    if (activeControl) {
        activeControl.classList.remove('tab-controls__link--active')
    }
    if (activeContent) {
        activeContent.classList.remove('tab-content--show')
    }

    tabControl.classList.add('tab-controls__link--active')
    tabContent.classList.add('tab-content--show')
}

})()
