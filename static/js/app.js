// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
let tbody = d3.select("tbody");
function buildTable(data) {
}
//function buildTable(data) {
   //first, clear out any existing data
  //tbody.html("");
//}
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
// we're going to use D3 to handle an action from a user, such as a button click
function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  // setting the filteredData variable to our raw data, is using it as a blank slate and if no date has been entered as a filter, then all of the data will be returned instead
  let filteredData = tableData;
  // "If there is a date already set, then use that date as a filter. If not, then return the default data."
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
  };
}
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
// Build the table when the page loads
buildTable(tableData);