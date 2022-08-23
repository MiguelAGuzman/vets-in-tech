// Use Flexbox to place the three divs into columns, spaced evenly, 
// with the letter centered in the middle of each column.

document.getElementById('container').style.display = 'flex';
document.getElementById('container').style.justifyContent = 'space-evenly';
document.getElementById('container').style.textAlign = 'center';
document.getElementById('A').style.backgroundColor = 'red';

document.getElementById('B').style.backgroundColor = 'green';
document.getElementById('C').style.backgroundColor = 'yellow';

// Use JavaScript to change the background color of the A,B, & C 
// divs to the color of their border.  Use Javascript to change the 
// INNER HTML of the A,B, & C divs to the NAME of the color (ie, #A 
// should read 'red', #B should read 'green', etc.)

// Create a header and a footer.