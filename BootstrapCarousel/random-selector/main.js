/*window.onload=function(){
    
}
*/

$(document).ready(function(){
    $("input").click(function(){
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());
        $("#random-pic").attr("src", pictures[randomChildNumber]);
        //$("H1").text($("li").eq(randomChildNumber).text());
    });
});
