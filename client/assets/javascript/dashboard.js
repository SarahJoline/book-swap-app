$("document").ready(function() {
  const urlParams = new URLSearchParams(window.location.search);

  const title = urlParams.get("title");
  const author = urlParams.get("author");
  const description = urlParams.get("description");
  const link = urlParams.get("link");

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
        let title = result.items[0].volumeInfo.title;
        let author = result.items[0].volumeInfo.authors[0];
        let description = result.items[0].searchInfo.textSnippet;
        let link = result.items[0].volumeInfo.infoLink;

        window.location.href = `/dashboard?title=${title}&author=${author}&description=${description}&link=${link}`;
      }
    });
  });

  $(document).on("click", "#addToWishlist", function() {
    console.log(title, author);

    $.ajax({
      type: "POST",
      url: "/api/wishlist/new",
      data: { title, author },
      success: function(res) {
        console.log("successful post");
      }
    });
  });
});
