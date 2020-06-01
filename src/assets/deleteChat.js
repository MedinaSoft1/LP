        
function sendLocation(){
    var CurrentLocation = window.location.href;
    lpTag.newPage(CurrentLocation, {section: "hide"});    
}
sendLocation();