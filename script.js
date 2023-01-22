$("#search").keyup(function () {
  let inputField = $("#search").val();
  let exp = new RegExp(inputField, "i");
  $.getJSON("data.json", function (data) {
    let output = '<ul class="resultContainer">';
    $.each(data, function (key, value) {
      if (value.name.search(exp) != -1 || value.bio.search(exp) != -1) {
        output += "<li class='resultCard'>";
        output += "<h2>" + value.name + "</h2>";
        output +=
          '<img src="images/' +
          value.shortname +
          '_tn.jpg" alt="' +
          value.name +
          '"/>';
        output += "<p>" + value.bio + "</p>";
        output += "</li>";
      }
    });
    output += "</ul>";
    $(".result").html(output);
  }); //*getJSON
});
