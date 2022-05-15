UFO SIGHTINGS ANALYSIS

Overview of Project

The goal of this project was to build a UFO “sightings” webpage using data from a JavaScript dataset.  The new site was developed with the use of JavaScript and HTML to update existing code that would provide for a more in-depth analysis based on given search criteria.  Bootstrap and CSS were also used to further customize the page and make it more responsive to user input. 

Results

Having a responsive filtering interface enables users to refine their searches rapidly and typically provides for a more satisfying experience.  Before starting a search, users may refresh the page by clicking on “UFO Sightings” found at the top left corner of the page. (Refreshing clears each of the filter fields and resets the table) For added guidance, users will note placeholders in each of the filter fields. 

![image](https://user-images.githubusercontent.com/100803302/168479122-d1079955-b4b3-427a-ba2e-aeea736e77cb.png)
 

Use of the search criteria can be accomplished with the following:

•	Make an entry into one or more of the five search fields and tap the “enter” key.

•	Use lowercase when making field entries.

•	In addition to refreshing to clear fields, each field can be cleared with the delete or backspace keys.

Summary

The major drawback to the site is that the search fields are case sensitive.  While the country field might be omitted altogether, the other text fields require that entries be made in lowercase.  This design can prevent users from having an easy and useful experience.  

 ![image](https://user-images.githubusercontent.com/100803302/168479147-33ff04e8-cdd1-42f7-a0a3-b6a7d45ebb2c.png)


The first recommendation is to address the case sensitivity of the current code.  To make the search fields case insensitive, the code could be updated using either the toLowerCase() or toUpperCase() to ensure both strings are either all lowercase or all uppercase.  Another method would be to use the localCompare().

One additional recommendation for improving the current site is to create a drop-down menu for entries made in the date field.  Because the UFO sightings table only has data for the dates of July 1 through July 13, it may be helpful to the user if only dates in a drop-down menu are available for selection. As a sample, using <div class = “dropdown” > in HTML and .dropbtn{} in CSS would remove the ability of the user to input any date they want with an expectation of receiving a result.



