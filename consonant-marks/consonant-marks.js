$(document).ready(function(e){

    // Putting all dependent vowels
    for(var key in dependent_vowels){
        var opt_html = '<input type="checkbox" ' +
            'class="vowels_option" value="'+key+'" />' +
            '<label>\u25cc'+dependent_vowels[key]+'</label><br>';
        $("#all_dependent_vowels").append(opt_html);
    }

    // Putting all various signs
    for(var key in various_signs){
        var opt_html = '<input type="checkbox" ' +
            'class="various_signs_option" value="'+key+'" />' +
            '<label>\u25cc'+various_signs[key]+'</label><br>';
        $("#all_various_signs").append(opt_html);
    }


    // Events
    $("#select_all_consonants").bind("click",function(e){
        var all = "" ;
        for(var key in consonants){
            all += consonants[key];
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