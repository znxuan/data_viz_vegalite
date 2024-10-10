// Function to load CSV data
function loadData(url) {
    return fetch(url)
      .then((response) => response.text())
      .then((text) => {
        // Parse CSV
        const rows = text.split('\n').slice(1); // Remove header row
        const data = rows.map((row) => {
          const cols = row.split(',');
          return {
            name: cols[0],
            value: parseFloat(cols[1]) || 0,
          };
        });
        return data;
      });
  }
  
  // URL for the CSV dataset
  const csvUrl = 'https://raw.githubusercontent.com/znxuan/data_viz_vegalite/refs/heads/main/revenue-of-the-leading-10-beauty-manufacturers-worldwide-2023.csv';
  
  // Load and process the data
  loadData(csvUrl).then((dataSet) => {
  
    // Sort the data in descending order (largest values first)
    dataSet.sort((a, b) => b.value - a.value);
  
    // Format data into a tree map structure
    const beautyData = [
      {
        name: "Beauty Manufacturers",
        children: dataSet
      }
    ];
  
    // Create a tree map chart and set the data
    var chart = anychart.treeMap(beautyData, "as-tree");
  
    // Set the maximum depth of the levels shown
    chart.maxDepth(2);
  
    // Set the chart title
    chart.title("10 Leading Beauty Manufacturers Worldwide and its revenue (2023)");
  
    // Set a custom color scale
    var customColorScale = anychart.scales.linearColor();
    customColorScale.colors(['#37B8F7', '#ffcc00']);
    chart.colorScale(customColorScale);
    chart.colorRange().enabled(true);
    chart.colorRange().length('90%');
  
    // Format the labels
    chart.labels().useHtml(true);
    chart.labels().format(
      "<span style=\"font-size: 14px; color: #00076f\">{%name}</span><br/>{%value} Billion USD"
    );
  
    // Format the tooltips
    chart.tooltip().format(
      "Revenue: {%value} Billion USD"
    );
  
    // Sort in descending order to show the largest value at the top-left
    chart.sort("desc");
  
    // Set the container id for the chart
    chart.container("container");
  
    // Initiate drawing the chart
    chart.draw();
  });
  