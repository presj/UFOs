// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
let tbody = d3.select("tbody");
function buildTable(data) {
}
function buildTable(data) {
  // first, clear out any existing data
  tbody.html("");
}
  // create a forEach function that LOOP THROUGH OUR DATA ARRAY, and then adds rows of data to the table
  data.forEach((dataRow) => {
    // create a variable that will APPEND A ROW TO THE TABLE (tells JS to find the <tbody> tag within the HTML code)
    let row = tbody.append("tr");
    // add code to loop through each field in the dataRow argument (these fields will become table data and will be wrapped in <td> tags when they're appended to the HTML table)
    // We're already working with an array of objects, where each object is a UFO sighting. By starting our line of code with Object.values, we're telling JS to reference one object from the array of UFO sightings
    // we're telling our code put each sighting onto its own row of data. The val argument represents each item in the object, such as the location, shape, or duration
    Object.values(dataRow).forEach((val) => {
      // In the next two lines of code, we'll APPEND EACH VALUE OF THE OBJECT TO A CELL in the table
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });

  
