$('document').ready(function () {
    // $("#start-datepicker").datepicker({ dateFormat: 'yy-mm-dd' });
    // $("#end-datepicker").datepicker({ dateFormat: 'yy-mm-dd' });

    navigator.geolocation.getCurrentPosition(function (position) {
        const lon = position.coords.longitude;
        const lat = position.coords.latitude;

        console.log(lat, lon);
        let apikey = 'cc5ff5524ad449ad9cd3d2a5117d86a2'

        let request_url = 'https://api.opencagedata.com/geocode/v1/json'
            + '?'
            + 'key=' + apikey
            + '&q=' + encodeURIComponent(lat + ',' + lon)
            + '&pretty=1'
            + '&no_annotations=1';
        $.ajax({
            url: request_url,
            method: 'GET',
            data: {
                'key': 'cc5ff5524ad449ad9cd3d2a5117d86a2',
                'no_annotations': 1
            },
            dataType: 'json',
            statusCode: {
                200: function (response) {  // success
                    console.log(response.results[0].formatted);
                    console.log(response.results[0].components.city);
                    $("#city").val(response.results[0].components.city);
                },
            }
        });
    });

    $("#submitButton").on("click", function (e) {
        e.preventDefault();
        let city = $("#input-group2").val();
        $("#city").val('');
        // let startDate = $("#start-datepicker").val().toString();
        // let endDate = $("#end-datepicker").val().toString();
        // $("#start-datepicker").val('');
        // $("#end-datepicker").val('');
        // if (startDate && startDate != "") {
        //     startDate += 'T00:00:00Z'
        // }
        // if (endDate && endDate != "") {
        //     endDate += 'T23:59:59Z'
        // }
        console.log(city);
    });
});
