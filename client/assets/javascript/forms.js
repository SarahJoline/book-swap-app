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
      url: "/api",
      data: { email, password },
      success: function(res) {
        $("#inputEmail").val("");
        $("#inputPassword").val("");
      }
    });
  });
});
