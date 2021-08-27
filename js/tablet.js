let tablet = {
    menu:() =>{
            window.addEventListener("resize", tablet.handleMenuTablet)       
    },
    handleMenuTablet: ()=> {
        let allIconHome = document.querySelectorAll('.menu__home');
        console.log('tall array', allIconHome.length);
        for(let i=0; i<allIconHome.length; i++) {
            console.log('icon'+ i ,allIconHome[i]);
        }
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