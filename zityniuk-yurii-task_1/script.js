;(function(){window.sumClicedElements = 0;

$(document).ready(function(){
    $(".circle__item").on({
        click:function(){
            let number = +$(this).text();
            console.log(number)
            summator.call(null, number);
        },
        mouseenter: function() {
            $(this).css({"background-color": "#091D34", "font-size": "150%"})
        },
        mouseleave: function() {
            $(this).css({"background-color": "#1461B8", "font-size": "100%"})
        }
    })
});

function summator (currNumber){
    this.sumClicedElements += currNumber;
    let message = `clicked sum equal: ${this.sumClicedElements}`;
    console.log(message);
    document.getElementById("counter").innerText = message;
}
})();
