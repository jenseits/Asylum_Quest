if(!localStorage.getItem('fname')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('fname');
    myHeading.textContent = 'Hello' + storedName + ', I hope you are ready to descend into the darkest parts of your soul. Asylum Escape is a place from which there is no return home, or... is there ?' ;
}
