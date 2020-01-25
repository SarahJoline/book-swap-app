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
        let description = result.items[0].searchInfo.textSnippet;
        let infoLink = result.items[0].volumeInfo.infoLink;
        // console.log(result.items[0].volumeInfo.title);
        console.log(author);

        $("#books").append(`
          <div class="card dashJumbotron">
        window.location.href = `/dashboard?title=${title}&author=${author}`;
        $("#myWishlist").append(`
          <div class="jumbotron">

            <p>
              ${title}, ${author}
            </p>
            <p>
              ${description}
            </p>
            <a id="addToWishlist" data-title=${title} data-author=${author} data-description=${description}>
              <button>Add to List</button>
            </a>
            <a target="blank" class="moreInfoBtn" href="${infoLink}">
              <button>More Info</button>
            </a>
          </div>`);
      }
    });

    $(document).on("click", "#addToWishlist", function() {
      const urlParams = new URLSearchParams(window.location.search);
      const title = urlParams.get("title");
      const author_again = urlParams.get("author");

      console.log(title);
      console.log(author_again);

      // $.ajax({
      //   type: "POST",
      //   url: "/wishlist/",
      //   data: { title, author, description }
      // }).then(() => {
      //   $("#wishlist").append(data);
      //   console.log("success?");
      // });
    });
  });
});
