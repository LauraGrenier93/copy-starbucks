let computer = {
    windowResize:() =>{
            window.addEventListener("resize", computer.handleMenuFooter);
    },

    menu:()=> {
        computer.handleMenuFooter();
    },

    handleMenuFooter: ()=> {
        if(window.self.innerWidth >= 1048) {
            let allMenuLink = document.querySelectorAll('.menu-link');
            for (let i = 0; i < allMenuLink.length; i++) {
                allMenuLink[i].classList.remove('hidden')
            }

            let allMenuSubtitle = document.querySelectorAll('.menu__subtitle');
                allMenuSubtitle.forEach(subtitle=>subtitle.classList.remove('hidden'));
        }
    }

}