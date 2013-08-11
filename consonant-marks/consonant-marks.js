$(document).ready(function(e){

    // Putting all dependent vowels
    for(var key in dependent_vowels){
        var opt_html = '<input type="checkbox" ' +
            'class="vowels_option" value="'+key+'" />' +
            '<span style = "color: #a6a6a6;">\u0935</span>'+dependent_vowels[key]+'&nbsp;&nbsp;&nbsp;';
        $("#all_dependent_vowels").append(opt_html);
    }

    // Putting all various signs
    for(var key in various_signs){
        var opt_html = '<input type="checkbox" ' +
            'class="various_signs_option" value="'+key+'" />' +
            '<span style = "color: #a6a6a6;">\u0935</span>'+various_signs[key]+'&nbsp;&nbsp;&nbsp;';
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


    // GO
    $("#go_tool").bind("click", function(e){
        $("#tool_output").html("");
        // Get form input
        var c = $("#consonants").val().split("");

        var all_iv = $(".vowels_option");
        var iv = [];
        for(var i = 0; i < all_iv.length; i++){
            if(all_iv[i].checked){
                iv.push(all_iv[i].value);
            }
        }

        var all_vs = $(".various_signs_option");
        var vs = [];
        for(var i = 0; i < all_vs.length; i++){
            if(all_vs[i].checked){
                vs.push(all_vs[i].value);
            }
        }

        var want_reph = $("#need_reph").is(":checked");


        // consonants with independent vowels
        for(var i = 0; i < c.length; i++){
            var html = c[i] + " ";
            for(var j = 0; j < iv.length; j++){
                html += c[i] + dependent_vowels[iv[j]] +" ";
            }
            $("#tool_output").append(html);



            for(var j = 0; j < vs.length; j++){
                html = " " + c[i] + various_signs[vs[j]] + " ";
                for(var k = 0; k < iv.length; k++){
                    html += c[i] + dependent_vowels[iv[k]] + various_signs[vs[j]]  + " ";
                }
                $("#tool_output").append(html);
            }

            if(want_reph){
                html = reph + c[i] + " ";
                for(var j = 0; j < iv.length; j++){
                    html += reph + c[i] + dependent_vowels[iv[j]] + " ";
                }
                $("#tool_output").append(html);

                for(var j = 0; j < vs.length; j++){
                    html = " " + reph + c[i] + various_signs[vs[j]] + " ";
                    for(var k = 0; k < iv.length; k++){
                        html += reph + c[i] + dependent_vowels[iv[k]] + various_signs[vs[j]]  + " ";
                    }
                    $("#tool_output").append(html);
                }
            }

            $("#tool_output").append("\n\n");
        }
    });

});