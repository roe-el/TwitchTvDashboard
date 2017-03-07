$(document).ready(function() {
var j = 0;
            function streamData() {
            	var array = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
                console.log("Outside");
                for (var i = 0; i < array.length; i++) {
                	console.log('Outside 1st JSON:'+array[i]);
                    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + array[i] + '?callback=?', function(data) {
                    	    var array = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
                    		console.log('Inside 1st JSON:'+array[i]);
                            console.log(data);
                            if(data.stream!==null){
                            $('.results').append("<a href='"
                            	+ data._links.channel
                            	+ "' target='_blank'><div class='row well success'><div class='col-md-3'><img class='img-thumbnail img-responsive' src='"
                            	+data.stream.preview.medium 
                                +"' alt=''></div><div class='col-md-3'>"
                                + data.stream.channel.display_name
                                +"</div><div class='col-md-3'>" 
                                +data.stream.game
                                +"</div><div class='col-md-3'>"
                                +data.stream.viewers
                                +"</div></a>").fadeIn();
                            } else{
                    	    var array = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
                    	    
                    $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/"+array[j]+"?callback=?", function(d){
                    	    if(d.status!=404){var array = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
                            	console.log('Inside 2nd JSON:'+array[j]);
                            	console.log(d);
                            	$('.results').append("<a href='"
                            	+ d.url
                            	+ "' target='_blank'><div class='row well warning'><div class='col-md-3'><img class='img-thumbnail img-responsive' src='"
                            	+d.logo
                                +"' alt=''></div><div class='col-md-3'>"
                                + data.display_name
                                +"</div><div class='col-md-3'>" 
                                +d.game
                                +"</div><div class='col-md-3'>Not Streaming</div></a>").fadeIn();
                            } else{
                            	$('.results').append("<div class='row well danger'><div class='col-md-3'><img class='img-thumbnail' src=''alt='None'></div><div class='col-md-3'>Does Not Exist</div><div class='col-md-3'>Does Not Exist</div><div class='col-md-3'>Does Not Exist</div>").fadeIn();
                            }
                            	});
                            	j++;
                            }
                            });
                    }
                }
                streamData(); img-responsive
            });
