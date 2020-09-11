function Itemlist(x) {
  if (x == "food") {
    var select = document.getElementById("products");
    var length = select.options.length;
    for (i = length - 1; i >= 1; i--) {
      select.options[i] = null;
    }
    var select1 = document.getElementById("brand");
    var length = select1.options.length;
    for (i = length - 1; i >= 1; i--) {
      select1.options[i] = null;
    }
    var option = document.createElement("option");
    option.text = "Cereals";
    select.add(option);
    var option = document.createElement("option");
    option.text = "Rice";
    select.add(option);
  }
  if (x == "drinks") {
    var select = document.getElementById("products");
    var length = select.options.length;
    for (i = length - 1; i >= 1; i--) {
      select.options[i] = null;
    }
    var select1 = document.getElementById("brand");
    var length = select1.options.length;
    for (i = length - 1; i >= 1; i--) {
      select1.options[i] = null;
    }
    var option = document.createElement("option");
    option.text = "Coca-cola";
    select.add(option);
    var option = document.createElement("option");
    option.text = "Pepsi";
    select.add(option);
  }
  if (x == "Cereals") {
    var select = document.getElementById("brand");
    var length = select.options.length;
    for (i = length - 1; i >= 1; i--) {
      select.options[i] = null;
    }
    var option = document.createElement("option");
    option.text = "Cereals1";
    select.add(option);
    var option = document.createElement("option");
    option.text = "Cereals2";
    select.add(option);
  }
  if (x == "Rice") {
    var select = document.getElementById("brand");
    var length = select.options.length;
    for (i = length - 1; i >= 1; i--) {
      select.options[i] = null;
    }
    var option = document.createElement("option");
    option.text = "Rice1";
    select.add(option);
    var option = document.createElement("option");
    option.text = "Rice2";
    select.add(option);
  }
  if (x == "Coca-cola") {
    var select = document.getElementById("brand");
    var length = select.options.length;
    for (i = length - 1; i >= 1; i--) {
      select.options[i] = null;
    }
    var option = document.createElement("option");
    option.text = "Sprite";
    select.add(option);
    var option = document.createElement("option");
    option.text = "Fanta";
    select.add(option);
  }
  if (x == "Pepsi") {
    var select = document.getElementById("brand");
    var length = select.options.length;
    for (i = length - 1; i >= 1; i--) {
      select.options[i] = null;
    }
    var option = document.createElement("option");
    option.text = "Mirinda";
    select.add(option);
    var option = document.createElement("option");
    option.text = "Tropicana";
    select.add(option);
  }
}
function Dropdown_select(x) {
  Itemlist(x);
  Statistics();
}
// Anychart
function Statistics() {
  var x = document.getElementById("container");
  x.remove();
  document.getElementById("chart").innerHTML = "<div id='container'></div>";
  var chart = anychart.column();
  chart.animation(true);
  chart.title("Sales By Month for");
  var data = [1, 2, 3, 4];
  for (var i = 0; i < data.length; i++)
    data[i] += Math.ceil(Math.random() * 400) + 20; //Generating random values for the data
  var series = chart.column([
    ["January", data[0]],
    ["February", data[1]],
    ["March", data[2]],
    ["April", data[3]],
  ]);

  chart.yScale().minimum(0);

  chart.tooltip().positionMode("point");
  chart.interactivity().hoverMode("by-x");
  chart.xAxis().title("Months");
  chart.yAxis().title("Sales");
  chart.container("container");
  chart.draw();
}
