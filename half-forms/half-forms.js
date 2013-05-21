$(document).ready(function(e){

    // Events
    $("#select_all_consonants_for_half_made").bind("click",function(e){
        var all = "" ;
        for(var key in consonants){
            all += consonants[key];
        };
        $("#half_made").val(all);
    });

    $("#select_all_consonants_for_test_against").bind("click",function(e){
        var all = "" ;
        for(var key in consonants){
            all += consonants[key];
        };
        $("#test_against").val(all);
    });



    // GO
    $("#go_tool").bind("click", function(e){
        $("#tool_output").html("");
        // Get form input
        var hm = $("#half_made").val().split("");
        var ta = $("#test_against").val().split("");

        var html = "";
        for(var i = 0; i < hm.length; i++){
            for(var j = 0; j < ta.length; j++){
                html += hm[i] + virama + ta[j] + " ";
            }
            html += "<br>";
        }
        $("#tool_output").html(html);
    });
});