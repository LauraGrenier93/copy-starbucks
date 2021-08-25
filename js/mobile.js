let mobile = {
    menu:()=> {
       document.querySelector('.menu__burger').addEventListener('click', mobile.handleMenu);

    },

    submenuOpen:()=>{
        document.querySelector('.benefit__link.menu').addEventListener('click', mobile.handleSubMenuOpen);
    },
    
    submenuClose:()=> {
        document.querySelector('.menu__title').addEventListener('click', mobile.handleSubMenuClose);
    },

    menufooter:()=>{
        let menuElements = document.querySelectorAll('.footer__menu-title');
        for(let element of menuElements) {
            element.addEventListener('click', mobile.handleMenuFooter);
        }   
    },

    handleMenu:()=> {
        document.querySelector('.menu__burger').classList.toggle('open');
        document.querySelector('.burger__sub-menu').classList.toggle('open');
        document.querySelector('.sub-menu__menu').classList.remove('open');
        document.querySelector('div.opacity').classList.toggle('open');
    },

    handleSubMenuOpen:()=> {
        document.querySelector('.sub-menu__menu').classList.add('open');
       /* document.querySelector('.burger__sub-menu').setAttribute('style','display:none;');*/
    },

    handleSubMenuClose:()=> {
        document.querySelector('.sub-menu__menu').classList.remove('open');
      /*  document.querySelector('.burger__sub-menu').setAttribute('style','display:flex; flex-direction:column;');*/
    },

    handleMenuFooter:()=> {
        if(event.target.classList.contains('menu-title__text')){
            event.target.nextElementSibling.classList.toggle('open');
        } else {
            event.target.classList.toggle('open');
        }
        event.target.closest('.footer__menu-menu').querySelector('.menu__subtitle').classList.toggle('hidden');
        let linkElements = event.target.closest('.footer__menu-menu').querySelectorAll('.menu-link');
        linkElements.forEach(link=>link.classList.toggle('hidden'));
    }
}