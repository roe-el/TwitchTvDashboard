$(document).ready(function() {

            function streamData() {
            	
                console.log("Outside");
                var array = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
                for (var i = 0; i < array.length; i++) {
                	var name = array[i];
                    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + array[i] + '?callback=?', function(data) {
                    		
                            console.log(data);
                            if(data.stream!==null){
                            $('.results').append("<a href='"
                            	+ data.url
                            	+ "' target='_blank'><div class='row well'><div class='col-md-4'><img src='"
                            	+data.logo 
                                +"' alt=''></div><div class='col-md-4'>"
                                + data.display_name
                                +"</div><div class='col-md-4'>" 
                                +data.status
                                +"</div></div></a>").fadeIn();
                            }
                            
                            	else{
                            	$('.results').append("<div class='row well'>"
                            		+data.message+
                            	"</div>").fadeIn();
                            }
                            });
                    }
                }
                streamData();
            });
