$(document).ready(function() {
    var j = 0;

    function streamData() {
        var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "nightblue3", "drdemolitionmatt", "riotgames", "imaqtpie"];
        $.each(streamers, function(i, val) {
            $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + val + '?callback=?', function(data) {
                var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "nightblue3", "drdemolitionmatt", "riotgames", "imaqtpie"];
                if (data.stream !== null) {
                    postResults(data);
                } else {
                    channelInfo(val);
                }
            });
        });

        function postResults(data) {
            $('.results').append("<a href='" + data.stream.channel.url + "' target='_blank'><div class='row stream text-center'><div class='col-md-3'><img class='img-thumbnail img-circle img-responsive pic' src='" + data.stream.preview.medium + "' alt=''></div><div class='col-md-3'>Name: " + data.stream.channel.display_name + "</div><div class='col-md-3'>Game: " + data.stream.game + "</div><div class='col-md-3'>Viewers: " + data.stream.viewers + "</div></a>").fadeIn();
        }

        function channelInfo(val) {
            $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" + val + "?callback=?", function(d) {

                if (d.status !== 404) {
                    $('.results').append("<a href='" + d.url + "' target='_blank'><div class='row notStreaming text-center'><div class='col-md-3'><img class='img-thumbnail img-circle img-responsive pic' src='" + d.logo + "' alt=''></div><div class='col-md-3'>Name: " + d.display_name + "</div><div class='col-md-3'>Game: " + d.game + "</div><div class='col-md-3'>Not Streaming</div></a>").fadeIn();
                } else {
                    $('.results').append("<div class='row noStream text-center'><div class='col-md-3'><img class='img-thumbnail' src=''alt='None'></div><div class='col-md-3'>Does Not Exist</div><div class='col-md-3'>Does Not Exist</div><div class='col-md-3'>Does Not Exist</div>").fadeIn();

                }
            });
        }
    }
    streamData();
});
