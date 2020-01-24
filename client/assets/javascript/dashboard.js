$("document").ready(function() {
  $("#searchBtn").on("click", function() {
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
        // console.log(result.items[0].volumeInfo.title);
        // console.log(result.items[0].volumeInfo.authors[0]);
        console.log(result.items[0].volumeInfo.infoLink);

        $("#books").append(`
          <div class="jumbotron">
            <p>${result.items[0].volumeInfo.title}, ${result.items[0].volumeInfo.authors[0]}</p>
            <a href="${result.items[0].volumeInfo.infoLink}">
              <button>Click me</button>
            </a>
          </div>
        `);
      }
    });
  });
});
