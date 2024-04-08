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
    const modalButtonsApplication = document.querySelectorAll('.button-application')


    modalButtonsApplication.forEach((btn) => btn.addEventListener('click', openModalApplication));
    modalApplication.addEventListener('click', closeModalApplication)

    function openModalApplication(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal--application')
    }

    function closeModalApplication(e) {

        const target = e.target

        if (target.closest('.modal--application__cancel') || target.classList.contains('modal--application')) {
            e.preventDefault()
            document.body.classList.remove('body--opened-modal--application')
        }

    }

    // Modals Calculate

    const modalCalculate = document.querySelector('.modal--calculate')
    const modalButtonsCalculate = document.querySelectorAll('.button-calculate')


    modalButtonsCalculate.forEach((btn) => btn.addEventListener('click', openModalCalculate));
    modalCalculate.addEventListener('click', closeModalCalculate)

    function openModalCalculate(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal--calculate')
    }

    function closeModalCalculate(e) {

        const target = e.target

        if (target.closest('.modal--calculate__cancel') || target.classList.contains('modal--calculate')) {
            e.preventDefault()
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

        const target = e.target

        if (target.closest('.modal--service__cancel') || target.classList.contains('modal--service')) {
            e.preventDefault()
            document.body.classList.remove('body--opened-modal--service')
        }
    }

    // Slader gallery

    new Swiper('.modal--service__slider', {

        spaceBetween: 1,
        slidesPerView: 1,


        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
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

    // Slader tab rewiews gallery

    new Swiper('.tab-about-company__slider', {

        spaceBetween: 20,
        slidesPerView: 1,

        navigation: {
            nextEl: '.review-gallery__next',
            prevEl: '.review-gallery__prev',
        },

        breakpoints: {


        }
    });

    // Modals tab rewiews

    const modalReview = document.querySelector('.modal--review')
    const modalButtonsReview = document.querySelectorAll('.about-company-review-button')


    modalButtonsReview.forEach((btn) => btn.addEventListener('click', openModalReview));
    modalReview.addEventListener('click', closeModalReview)

    function openModalReview(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal--review')
    }

    function closeModalReview(e) {

        const target = e.target

        if (target.closest('.modal--review__cancel') || target.classList.contains('modal--review')) {
            e.preventDefault()
            document.body.classList.remove('body--opened-modal--review')
        }
    }

    // Certificate gallery

    new Swiper('.certificate__slider', {

        spaceBetween: 5,
        slidesPerView: 5,

        navigation: {
            nextEl: '.certificate-gallery__next',
            prevEl: '.certificate-gallery__prev',
        },

        breakpoints: {


        }
    });


    // Portfolio gallery

    new Swiper('.portfolio__slider', {

        spaceBetween: 50,
        slidesPerView: 4,


        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.portfolio-gallery__next',
            prevEl: '.portfolio-gallery__prev',
        },

        breakpoints: {


        }
    });

    // Accordions

    const accordionLists = document.querySelectorAll('.accordion-list')

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }

            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });

})()
