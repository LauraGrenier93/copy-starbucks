let main = {
    init:()=> {
        mobile.menu();
        mobile.submenuOpen();
        mobile.submenuClose();
        mobile.menufooter();
    }
}

document.addEventListener("DOMContentLoaded",main.init);