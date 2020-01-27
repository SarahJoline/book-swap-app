$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const title = urlParams.get("title");
  const author = urlParams.get("author");
  const description = urlParams.get("description");
  const link = urlParams.get("link");

  $("#searchBtn").submit(function(e) {
    e.preventDefault();

    $("#myBooks").append(`
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
              <a target="blank" href="${link}">
                <button>More Info</button>
              </a>
            </div>`);
  });
});
