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

    const modalService1 = document.querySelector('.modal--service1')
    const modalButtonService1 = document.getElementById('service__cards-item1')

    modalButtonService1.addEventListener('click', openModalService1)
    modalService1.addEventListener('click', closeModalService1)

    function openModalService1(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal--service1')
    }

    function closeModalService1(e) {

        const target = e.target

        if (target.closest('.modal--service__cancel1') || target.classList.contains('modal--service1')) {
            e.preventDefault()
            document.body.classList.remove('body--opened-modal--service1')
        }
    }
    // ============================================================================

    const modalService2 = document.querySelector('.modal--service2')
    const modalButtonService2 = document.getElementById('service__cards-item2')

    modalButtonService2.addEventListener('click', openModalService2)
    modalService2.addEventListener('click', closeModalService2)

    function openModalService2(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal--service2')
    }

    function closeModalService2(e) {

        const target = e.target

        if (target.closest('.modal--service__cancel2') || target.classList.contains('modal--service2')) {
            e.preventDefault()
            document.body.classList.remove('body--opened-modal--service2')
        }
    }
    // ==================================================================
    const modalService3 = document.querySelector('.modal--service3')
    const modalButtonService3 = document.getElementById('service__cards-item3')

    modalButtonService3.addEventListener('click', openModalService3)
    modalService3.addEventListener('click', closeModalService3)

    function openModalService3(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal--service3')
    }

    function closeModalService3(e) {

        const target = e.target

        if (target.closest('.modal--service__cancel3') || target.classList.contains('modal--service3')) {
            e.preventDefault()
            document.body.classList.remove('body--opened-modal--service3')
        }
    }

    // ==================================================================
    const modalService4 = document.querySelector('.modal--service4')
    const modalButtonService4 = document.getElementById('service__cards-item4')

    modalButtonService4.addEventListener('click', openModalService4)
    modalService4.addEventListener('click', closeModalService4)

    function openModalService4(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal--service4')
    }

    function closeModalService4(e) {

        const target = e.target

        if (target.closest('.modal--service__cancel4') || target.classList.contains('modal--service4')) {
            e.preventDefault()
            document.body.classList.remove('body--opened-modal--service4')
        }
    }
    // ==================================================================

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
        slidesPerView: 1,

        navigation: {
            nextEl: '.certificate-gallery__next',
            prevEl: '.certificate-gallery__prev',
        },

        breakpoints: {

            451: {
                slidesPerView: 1.5
            },

            491: {
                slidesPerView: 2
            },

            501: {
                slidesPerView: 3
            },

            951: {
                slidesPerView: 4,
            },

            1101: {
                slidesPerView: 5,
            }
        }
    });


    // Portfolio gallery

    new Swiper('.portfolio__slider', {

        spaceBetween: 50,
        slidesPerView: 1,


        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.portfolio-gallery__next',
            prevEl: '.portfolio-gallery__prev',
        },

        breakpoints: {
            // 451: {
            //     slidesPerView: 1.5
            // },

            501: {
                slidesPerView: 1.5,
            },

            601: {
                slidesPerView: 2,
            },

            851: {
                slidesPerView: 3,
            },

            1101: {
                slidesPerView: 4,
            }


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
