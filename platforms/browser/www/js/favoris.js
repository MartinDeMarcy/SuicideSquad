$(document).ready(function(){
            $.getJSON("../../json/generated.json").done(function(data){
                localStorage.setItem("data", JSON.stringify(data));
                $.each(data, function(index, value){
                    if (value.fav = true)
                      $("#contacts").append('<a href="../competences/'+ value.path +'"><div class="case">'+ value.title +'</div></a>');
                });

            });

        });