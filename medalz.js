// Team acDC
// Carol Pan and Donia Tung
// SoftDev2 pd7
// K12 - Medallions...of Data!
// 2018-03-20

var svg = document.getElementById("svg");
var title = document.getElementById("title");
var switch_btn = document.getElementById("switch");
var US_medal_count = [9, 8, 6];
var SK_medal_count = [5, 8, 4];
var data = US_medal_count;

var set = function(){
    var circles = d3.selectAll("circle");
    circles.data(data);
    circles.attr("r", function(d){return 11 * d});
    var texts = d3.selectAll("text");
    texts.data(data);
    texts.html(function(d){return d});
}

var switch_button = function(e){
    if (data == US_medal_count){
	title.innerHTML = "South Korea";
	data = SK_medal_count;
    }
    else if (data == SK_medal_count){
	title.innerHTML = "US";
	data = US_medal_count;
    }
    set();
}

switch_btn.addEventListener("click", switch_button);
