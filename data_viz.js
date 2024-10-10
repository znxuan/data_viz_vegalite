
var vg_1 = "bar_chart.json";
var vg_2 = "choropleth_map.vg.json";
var vg_3 = "pie_chart.json";
var vg_4 = "radar_chart.json";

// Embed the bar chart
vegaEmbed("#bar_chart", vg_1).then(function(result) {
  // Access the Vega view instance as result.view if needed
  console.log("Bar chart loaded");
}).catch(console.error);

// Embed the choropleth map
vegaEmbed("#choropleth_map", vg_2).then(function(result) {
  // Access the Vega view instance as result.view if needed
  console.log("Choropleth map loaded");
}).catch(console.error);

// Embed the pie chart
vegaEmbed("#pie_chart", vg_3).then(function(result) {
  // Access the Vega view instance as result.view if needed
  console.log("Pie chart loaded");
}).catch(console.error);

// Embed the radar chart
vegaEmbed("#radar_chart", vg_4).then(function(result) {
  // Access the Vega view instance as result.view if needed
  console.log("Radar chart loaded");
}).catch(console.error);

