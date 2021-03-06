$("document").ready(function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;

    console.log(lat, lon);
    console.log(position);

    let apikey = "cc5ff5524ad449ad9cd3d2a5117d86a2";

    let request_url =
      "https://api.opencagedata.com/geocode/v1/json" +
      "?" +
      "key=" +
      apikey +
      "&q=" +
      encodeURIComponent(lat + "," + lon) +
      "&pretty=1" +
      "&no_annotations=1";
    $.ajax({
      url: request_url,
      method: "GET",
      data: {
        key: "cc5ff5524ad449ad9cd3d2a5117d86a2",
        no_annotations: 1
      },
      dataType: "json",
      statusCode: {
        200: function(response) {
          // success
          console.log(response.results[0].formatted);
          console.log(response.results[0].components.city);
          $("#city").val(response.results[0].components.city);
        }
      }
    });
  });

  $("#submitButton").on("click", function(e) {
    e.preventDefault();
    let city = $("#city").val();
    console.log(city);
    window.location.href = "../../dashboard.html";
  });
});
