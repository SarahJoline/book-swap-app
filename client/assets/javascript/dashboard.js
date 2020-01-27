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
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${author}</h6>
          <p class="card-text">${description}</p>
          <a data-title=${title} data-author=${author} data-description=${description} class="card-link" id="addToWishlist"><button>Add to List</button></a>
          <a target="blank" href=${link} class="card-link"><button>More Info</button></a>
        </div>
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
