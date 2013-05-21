$(document).ready(function(e){

    $("#select_all_consonants").bind("click",function(e){
        var all = "" ;
        for(var i = 0; i < consonants.length; i++){
            all += consonants[i] + "" ;
        };
        $("#consonants").val(all);
    });

    $("#select_all_vowels").bind("click",function(e){
        var vowels = $(".vowels_option");
        for(var i = 0; i < vowels.length; i++){
            vowels[i].checked = true;
        };
    });

    $("#select_all_various_signs").bind("click",function(e){
        var vs = $(".various_signs_option");
        for(var i = 0; i < vs.length; i++){
            vs[i].checked = true;
        };
    });

    $("#go_tool").bind("click", function(e){
        alert("Go away");
    });

});