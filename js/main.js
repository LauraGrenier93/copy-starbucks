let main = {
    init:()=> {
        mobile.menu();
        mobile.submenuOpen();
        mobile.submenuClose();
        mobile.menufooter();
        tablet.menu();
    }
}

document.addEventListener("DOMContentLoaded",main.init);