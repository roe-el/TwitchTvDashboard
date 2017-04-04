$(document).ready(function() {
var j = 0;
            function streamData() {
            	var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
                console.log("Outside");
                $.each(streamers, function(i, val)  {
                	console.log('Outside 1st JSON:'+val);
                    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + val+ '?callback=?', function(data) {
                    	    var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
                    		console.log('Inside 1st JSON:'+val);
                            console.log(data);
                            if(data.stream!=null){
                                postResults(data);
                            } 
                            else{
                    	    channelInfo(val);	
                            }
                            });
                    });
                    function postResults(data){
                        $('.results').append("<a href='"
                                + data.stream.channel.url
                                + "' target='_blank'><div class='row well stream'><div class='col-md-3'><img class='img-thumbnail img-circle img-responsive pic' src='"
                                +data.stream.preview.medium 
                                +"' alt=''></div><div class='col-md-3'>"
                                + data.stream.channel.display_name
                                +"</div><div class='col-md-3'>" 
                                +data.stream.game
                                +"</div><div class='col-md-3'>"
                                +data.stream.viewers
                                +"</div></a>").fadeIn();
                    }
                    function channelInfo(val){
                        $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/"+val+"?callback=?", function(d){
                            {    if(d.status!=404){
                                console.log('Inside 2nd JSON:'+val);
                                console.log(d);
                                $('.results').append("<a href='"
                                + d.url
                                + "' target='_blank'><div class='row well stream'><div class='col-md-3'><img class='img-thumbnail img-circle img-responsive pic' src='"
                                +d.logo
                                +"' alt=''></div><div class='col-md-3'>"
                                +d.display_name
                                +"</div><div class='col-md-3'>" 
                                +d.game
                                +"</div><div class='col-md-3'>Not Streaming</div></a>").fadeIn();}
                                else{
                                 $('.results').append("<div class='row well noStream'><div class='col-md-3'><img class='img-thumbnail' src=''alt='None'></div><div class='col-md-3'>Does Not Exist</div><div class='col-md-3'>Does Not Exist</div><div class='col-md-3'>Does Not Exist</div>").fadeIn();

                                }
                            }
                                });
                    }
                }
                streamData();
            });
