$("document").ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const title = urlParams.get("title");
  const author = urlParams.get("author");
  const description = urlParams.get("description");
  const link = urlParams.get("link");

  let bookArray = [];

  if (title == null || author == null) {
    console.log("there is no values for title and author");
  } else {
    console.log(title, author, description, link);

    $("#myWishlist").append(`
          <div class="jumbotron">
            <p>
              ${title}, ${author}
            </p>
            <p>
              ${description}
            </p>
            <a id="addToWishlist" data-title=${title} data-author=${author} data-description=${description}>
              <button id="addToWishList">Add to List</button>
              <button id="addToMyBooks">I have this book!</button>
            </a>
            <a target="blank" href="${link}">
              <button>More Info</button>
            </a>
          </div>`);
  }

  $("#searchBtn").on("click", function(e) {
    e.preventDefault();

    var bookName = $("#userInput").val();
    var bookSearch = bookName
      .split(" ")
      .join("+")
      .toLowerCase();

    $.ajax({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=${bookSearch}`,
      dataType: "JSON",
      success: result => {
        let bookTitle = result.items[0].volumeInfo.title;
        let bookAuthor = result.items[0].volumeInfo.authors[0];
        let description = result.items[0].searchInfo.textSnippet;
        let link = result.items[0].volumeInfo.infoLink;

        window.location.href = `/dashboard?title=${bookTitle}&author=${bookAuthor}&description=${description}&link=${link}&${id}`;

        bookArray.push(result);
      }
    });
  });

  $("#addToWishlist").on("click", function(e) {
    e.preventDefault();
    //bookArray.push(title, author);
    //bookArray.push(bookTitle);
    console.log(bookArray);

    var title = bookArray.bookTitle;
    var author = bookArray.bookAuthor;

    $.ajax({
      type: "POST",
      url: `/api/user/profile/wishlist/?id=${id}`,
      data: { title, author, id },
      success: function(res) {
        userId = id;
        console.log(bookArray);
        console.log("successful post");
      }
    });
  });
});
