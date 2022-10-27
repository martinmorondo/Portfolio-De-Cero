let menuVisible = false;

// Function that hides or shows the menu.
function showHideMenu(){
    if(menuVisible) {
        document.querySelector('#nav').classList = "";
        menuVisible = false;
    } else {
        document.querySelector('#nav').classList = "responsive";
        menuVisible = true;
    }
}

function select(){
    // hide the menu once I select an option
    document.querySelector('#nav').classList = "";
    menuVisible = false;
}