$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);

  const id = urlParams.get("id");

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
      success: function(data) {
        console.log(data);
        let id = data.id;
        window.location.href = `/user/profile/new/?id=${id}`;
      }
    });
  });
});
