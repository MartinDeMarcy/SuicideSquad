$(document).ready(function(){
<<<<<<< HEAD
	data = JSON.parse(localStorage.getItem("data"));
	$(".bookmark").click(function(){
		$.each(data, function(index, value){
			id = $(".titrefiche").attr('id');
			if (id == value.index)
			{
				if (value.fav == true)
					value.fav = false;
				else
					value.fav = true;
			}
			data[index] = value;
		});
		localStorage.setItem("data", JSON.stringify(data));
		console.log(JSON.parse(localStorage.getItem("data")));
=======
    data = JSON.parse(localStorage.getItem("data"));
    $("#bookmark").click(function(){
    	$.each(data, function(index, value){
		    
    	});
>>>>>>> f09e0bb6fafe4d9c1ef8187a1a6dcfa49c29882d
    })
});