var Grid = document.getElementById("currency-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  var url = 'http://10.199.13.243:81/currency.json';
  ourRequest.open('GET', url);
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
});

function renderHTML(data) {
  var htmlString = '<div class="grid-container">';

  for (i = 0; i < data.length; i++) {
    htmlString += '<div class="grid-item">';
    htmlString += '<p>' + data[i].rate + ' EURUSD ' + data[i].timestamp + '</p>';
    htmlString += '</div>';

    if ((i + 1) % 3 === 0) {
      htmlString += '</div>'; 
    }
  }

  htmlString += '</div>'; 
  Grid.innerHTML = htmlString;
}
