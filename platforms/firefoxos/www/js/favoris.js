$(document).ready(function(){
	data = JSON.parse(localStorage.getItem("data"));
	$.each(data, function(index, value){
		id = $(".titrefiche").attr('id');
		if (id == value.index)
		{
			if (value.fav == true)
			{
				$(".fav").attr('src', '../../../img/fav.png');		
			}
			else
			{
				$(".fav").attr('src', '../../../img/fav_vide.png');	
			}
		}
		
	});
	$(".bookmark").click(function(){
		$.each(data, function(index, value){
			if (id == value.index)
			{
				if (value.fav == true)
				{
					$(".fav").attr('src', '../../../img/fav_vide.png');		
					value.fav = false;
				}
				else
				{
					$(".fav").attr('src', '../../../img/fav.png');	
					value.fav = true;
				}
			}
			data[index] = value;
		})
		localStorage.setItem("data", JSON.stringify(data));
	})
	
});