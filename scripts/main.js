if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello' + storedName + ','+ ' I hope you are ready to descend into the darkest parts of your soul.' ;
}
