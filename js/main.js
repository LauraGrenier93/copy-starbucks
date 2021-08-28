let main = {
    init:()=> {
        mobile.menu();
        mobile.submenuOpen();
        mobile.submenuClose();
        mobile.menufooter();
        tablet.windowResize();
        tablet.menu();
        computer.windowResize();
        computer.menu();
    }
}

document.addEventListener("DOMContentLoaded",main.init);