$("document").ready(function() {
  $("#searchBtn").on("click", function(e) {
    e.preventDefault();

    var bookName = $("#userInput").val();
    var bookSearch = bookName
      .split(" ")
      .join("+")
      .toLowerCase();
    // console.log(bookSearch);

    $.ajax({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=${bookSearch}`,
      dataType: "JSON",
      success: result => {
        console.log(result);
        let title = result.items[0].volumeInfo.title;
        let author = result.items[0].volumeInfo.authors[0];
        let infoLink = result.items[0].volumeInfo.infoLink;

        $("#books").append(`
          <div class="jumbotron">
            <p>
              ${title}, ${author}
            </p>
            
            <button id="wishlistBtn">Add to List</button>
            <a target="blank" href="${infoLink}">
              <button>More Info</button>
            </a>
          </div>
        `);
      }
    });

    $("#wishlistBtn").on("click", function() {
      $.ajax({
        type: "POST",
        url: "/wishlist/new",
        data: { title, author }
      }).then(() => {
        $("#wishlist").append(data);
        console.log("success?");
      });
    });
  });
});
