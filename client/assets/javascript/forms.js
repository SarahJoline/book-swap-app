$(document).ready(function() {
  $("#userForm").submit(function(e) {
    e.preventDefault();

    var email = $("#inputEmail")
      .val()
      .trim();
    var password = $("#inputPassword")
      .val()
      .trim();

    $.ajax({
      type: "POST",
      url: "/api/user/new",
      data: { email, password },
      success: function(res) {
        window.location.href = "/profile/new";
      }
    });
  });

  $("#userProfile").submit(function(e) {
    e.preventDefault();

    var photoLink = $("#photoUpload")
      .val()
      .trim();

    var firstName = $("#inputFirstName")
      .val()
      .trim();
    var lastName = $("#inputLastName")
      .val()
      .trim();
    var location = $("#inputLocation")
      .val()
      .trim();

    $.ajax({
      type: "POST",
      url: "/api/profile/new",
      data: { photoLink, firstName, lastName, location },
      success: function(res) {
        console.log(res);
        console.log("things and stuff");
      }
    });
    // });
  });
});
