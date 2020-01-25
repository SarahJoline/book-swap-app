$(document).ready(function() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  console.log(id);

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

    console.log(photoLink, firstName, lastName, location, id);
    $.ajax({
      type: "POST",
      url: `/api/user/profile/new/?id=${id}`,
      data: { photoLink, firstName, lastName, location, id }
    }).then(data => {
      userId = id;
      console.log(id);
      //console.log(data);
    });
  });
});
