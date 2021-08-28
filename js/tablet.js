let tablet = {
    windowResize:() =>{
            window.addEventListener("resize", tablet.handleMenuHeader);
    },

    menu:()=> {
        tablet.handleMenuHeader();
    },

    handleMenuHeader: ()=> {
        let allIconHome = document.querySelectorAll('.menu__home');
        if(window.self.innerWidth >= 792) {
        allIconHome[0].setAttribute('hidden', true);
        document.querySelector('.menu__burger').setAttribute('hidden', true);
        document.querySelector('.menu__tablet').removeAttribute('hidden');
        } else {
            allIconHome[0].removeAttribute('hidden');
            document.querySelector('.menu__burger').removeAttribute('hidden');
            document.querySelector('.menu__tablet').setAttribute('hidden', true);
        }
    }

}