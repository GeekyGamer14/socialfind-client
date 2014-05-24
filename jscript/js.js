lastQuery = new Array();
function query(q){
	q = $('#query').val();
	lastQuery = q;
	var el = document.getElementById('query');
	$fucks = $('<p>> ' + q + '</p>');
	$('#results').append($fucks);
	$.ajax({
		type: 'get',
		url: 'http://api.iquestria.net/socialfind/query.php?q=' + q,
		success: function(data){
			if(data.error){
				console.error(data.error);
				$('#results').append('<p>Error querying server</p>');
			}else{
				$('#results').append('<p>' + data.result + '</p>');
				el.scrollIntoView(true);
			}
		}
	});
}

function onload(){
	$("#query").keyup(function(event){
	    if(event.keyCode == 13){
	        query();
			$("#query").val('');
	    }
	    if(event.keyCode == 38){
	        $("#query").val(lastQuery);
	    }
	});
	$('#query').focus();
}

function clearQ(){
	$('#results').html('');
}

function focusUser(el){
	setTimeout(function(){
		$(el).focus();
	}, 1);
}