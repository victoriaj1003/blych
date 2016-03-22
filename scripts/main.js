
$( document ).ready(function() {
	console.log("ready freddy");
	
	function sizeMatters() {

		if($(window).width() < 640) {
			$("#nav").hide();
			$("#burger").show();
			console.log("burger showing");
		} else {
			$("#burger").hide();
			$("#nav").show();
			console.log("navbar showing");
		}
	}

	$(window).load(sizeMatters);
	$(window).resize(sizeMatters);


	$('.fa-bars').click(function() {
		$('#menuItems').toggle();
		console.log("got to the dropdown stuff");
	})

// open dropdown menu when click on hamburger

	if($("#burger").hover()) {
		$("#menuitems").css('visibility, visible');
		console.log("i'm here");
	} else {
		$("#menuitems").css('visibility, hidden');
		console.log("i'm invisible!");
	}




});

