function searchText() {
  var inputText = document.getElementById("search-input").value;
  var paragraph = document.getElementById("search-results");
  var text = paragraph.innerHTML;
  var highlightedText = text.replace(new RegExp(inputText, "gi"), "<span class='highlighted'>$&</span>");
  paragraph.innerHTML = highlightedText;
}