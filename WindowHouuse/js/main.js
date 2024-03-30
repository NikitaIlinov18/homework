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
    // e.preventDefault()
    document.body.classList.toggle('body--opened-modal--application')
}

function closeModalApplication(e) {
    // e.preventDefault()

    const target = e.target

    if (target.closest('.modal--application__cancel') || target.classList.contains('modal--application')) {
        document.body.classList.remove('body--opened-modal--application')
    }

}

// Modals Calculate

const modalCalculate = document.querySelector('.modal--calculate')
const modalButtonCalculate = document.querySelector('.button-calculate')

modalButtonCalculate.addEventListener('click', openModalCalculate)
modalCalculate.addEventListener('click', closeModalCalculate)

function openModalCalculate(e) {
    // e.preventDefault()
    document.body.classList.toggle('body--opened-modal--calculate')
}

function closeModalCalculate(e) {
    // e.preventDefault()

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

// Tabs product

const tabProductControls = document.querySelector('.tab-product-controls')

tabProductControls.addEventListener('click', toggleTab)

function toggleTab(e) {

    const tabProductControl = e.target.closest('.tab-product-controls__link')

    if (!tabProductControl) return
    e.preventDefault()
    if (tabProductControl.classList.contains('tab-product-controls__link--active')) return

    const tabProductContentID = tabProductControl.getAttribute('href')
    const tabProductContent = document.querySelector(tabProductContentID)
    const activeProductControl = document.querySelector('.tab-product-controls__link--active')
    const activeProductContent = document.querySelector('.tab-product-content--show')

    if (activeProductControl) {
        activeProductControl.classList.remove('tab-product-controls__link--active')
    }
    if (activeProductContent) {
        activeProductContent.classList.remove('tab-product-content--show')
    }

    tabProductControl.classList.add('tab-product-controls__link--active')
    tabProductContent.classList.add('tab-product-content--show')
}

// Slader tab product gallery

new Swiper('.tab-product-gallery__slider', {

    spaceBetween: 20,
    slidesPerView: 1,

    navigation: {
        nextEl: '.tab-product-gallery__next',
        prevEl: '.tab-product-gallery__prev',
    },

    breakpoints: {

        
    }
});

// Tabs about company

const tabAboutCompanyControls = document.querySelector('.tab-about-company-controls')

tabAboutCompanyControls.addEventListener('click', toggleAboutCompanyTab)

function toggleAboutCompanyTab(e) {

    const tabAboutCompanyControl = e.target.closest('.tab-about-company-controls__link')

    if (!tabAboutCompanyControl) return
    e.preventDefault()
    if (tabAboutCompanyControl.classList.contains('tab-about-company-controls__link--active')) return

    const tabAboutCompanyContentID = tabAboutCompanyControl.getAttribute('href')
    const tabAboutCompanyContent = document.querySelector(tabAboutCompanyContentID)
    const activeAboutCompanyControl = document.querySelector('.tab-about-company-controls__link--active')
    const activeAboutCompanyContent = document.querySelector('.tab-about-company-content--show')

    if (activeAboutCompanyControl) {
        activeAboutCompanyControl.classList.remove('tab-about-company-controls__link--active')
    }
    if (activeAboutCompanyContent) {
        activeAboutCompanyContent.classList.remove('tab-about-company-content--show')
    }

    tabAboutCompanyControl.classList.add('tab-about-company-controls__link--active')
    tabAboutCompanyContent.classList.add('tab-about-company-content--show')
}


// Tabs rewiews

const tabRewiewsControls = document.querySelector('.tab-rewiews-controls')

tabRewiewsControls.addEventListener('click', toggleRewiewsTab)

function toggleRewiewsTab(e) {

    const tabRewiewsControl = e.target.closest('.tab-rewiews-controls__link')

    if (!tabRewiewsControl) return
    e.preventDefault()
    if (tabRewiewsControl.classList.contains('tab-rewiews-controls__link--active')) return

    const tabRewiewsContentID = tabRewiewsControl.getAttribute('href')
    const tabRewiewsContent = document.querySelector(tabRewiewsContentID)
    const activeRewiewsControl = document.querySelector('.tab-rewiews-controls__link--active')
    const activeRewiewsContent = document.querySelector('.tab-rewiews-content--show')

    if (activeRewiewsControl) {
        activeRewiewsControl.classList.remove('tab-rewiews-controls__link--active')
    }
    if (activeRewiewsContent) {
        activeRewiewsContent.classList.remove('tab-rewiews-content--show')
    }

    tabRewiewsControl.classList.add('tab-rewiews-controls__link--active')
    tabRewiewsContent.classList.add('tab-rewiews-content--show')
}

// Slader tab rewiews gallery

new Swiper('.tab-rewiews-gallery__slider', {

    spaceBetween: 20,
    slidesPerView: 1,

    navigation: {
        nextEl: '.tab-rewiews-gallery__next',
        prevEl: '.tab-rewiews-gallery__prev',
    },

    breakpoints: {

        
    }
});

})()
