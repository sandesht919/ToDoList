//jshint esversion:6
function getDay(){
    var today = new Date();
    
    var options = {
        day: "numeric",
        weekday: "long",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);
    return day;
};

module.exports = getDay();

