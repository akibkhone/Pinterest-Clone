// Array containing objects with name and image properties
var array = [
	{
		name: 'Petals of roses',
		image: 'https://images.unsplash.com/photo-1518831696273-f1886ea5f920?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0YWxzJTIwb2YlMjByb3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
	},
	{
		name: 'Animals of town',
		image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fHww',
	},
	{
		name: 'The crowd of city',
		image: 'https://plus.unsplash.com/premium_photo-1661718892853-96806440393b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGhlJTIwY3Jvd2QlMjBvZiUyMGNpdHl8ZW58MHx8MHx8fDA%3D',
	},
	{
		name: 'Fruits of planet',
		image: 'https://media.istockphoto.com/id/1154805099/photo/zero-waste-and-eco-friendly-shopping-with-vegetables-and-fruits-in-textile-and-paper-bags-top.webp?b=1&s=170667a&w=0&k=20&c=JMK98QcptIqLFsnBZwVAGHC6dZaPrjQaqKDfuVJ-joA=',
	},
	{
		name: 'Orange peeled',
		image: 'https://images.unsplash.com/photo-1517281749396-564b95a206c3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3JhbmdlJTIwcGVlbGVkfGVufDB8fDB8fHww',
	},
	{
		name: 'Web design',
		image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2ViJTIwZGVzaWdufGVufDB8fDB8fHww',
	},
	{
		name: 'Cristiano',
		image: 'https://images.unsplash.com/photo-1586196877083-6a4e8a995cf1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3Jpc3RpYW5vJTIwcm9uYWxkb3xlbnwwfHwwfHx8MA%3D%3D',
	},
	{
		name: 'Moon',
		image: 'https://images.unsplash.com/photo-1481819613568-3701cbc70156?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbmV0fGVufDB8fDB8fHww',
	},
	{
		name: 'Happy',
		image: 'https://images.unsplash.com/photo-1709704989783-8d9bc093b578?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDN8fHxlbnwwfHx8fHw%3D',
	},
	{
		name: 'Blur Man',
		image: 'https://plus.unsplash.com/premium_photo-1709675363761-95dfcc15e6ed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		name: 'Man on Mobile',
		image: 'https://plus.unsplash.com/premium_photo-1689607810298-f849d1d0cfb9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		name: 'Parrot',
		image: 'https://images.unsplash.com/photo-1709733167481-c1da481d30d1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		name: 'Dog',
		image: 'https://images.unsplash.com/photo-1709777571247-39ad71a2d86e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjh8fHxlbnwwfHx8fHw%3D',
	},
	{
		name: 'Little girl',
		image: 'https://images.unsplash.com/photo-1638996970429-389100ca2b48?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D',
	},
];
// Function to display all cards initially
function showTheCards() {
	console.log(array);
	var clutter = '';
	array.forEach(function (obj) {
		// Creating HTML structure for each card
		clutter += `
            <div class="box">
                <img class="cursor-pointer rounded-2xl" src="${obj.image}" alt="image">
                <div class="caption">${obj.name}</div>
            </div>`;
	});
	// Setting the HTML content of the container to the generated clutter
	document.querySelector('.container').innerHTML = clutter;
}

// Function to handle search functionality
function handleSearchFunctionality() {
	var input = document.querySelector('#searchinput');

	// Event listener for input focus
	input.addEventListener('focus', function () {
		document.querySelector('.overlay').style.display = 'block';
	});

	// Event listener for input blur
	input.addEventListener('blur', function () {
		document.querySelector('.overlay').style.display = 'none';
	});

	// Event listener for input changes
	input.addEventListener('input', function () {
		// Filtering the array based on input value
		var filteredArray = array.filter((obj) => obj.name.toLowerCase().startsWith(input.value.toLowerCase()));
		var clutter = '';
		filteredArray.forEach(function (obj) {
			// Generating HTML for search results
			clutter += `<div class="res flex px-8 py-3 cursor-pointer">
                             <i class="ri-search-line font-semibold mr-5"></i>
                             <h3 class="font-semibold">${obj.name}</h3>
                         </div>`;
		});
		// Displaying search results
		document.querySelector('.searchdata').style.display = 'block';
		document.querySelector('.searchdata').innerHTML = clutter;
	});

	// Event listener for click on search results
	document.querySelector('.searchdata').addEventListener('click', function (event) {
		if (event.target.classList.contains('res')) {
			// Getting index of clicked search result
			var index = Array.from(event.target.parentNode.children).indexOf(event.target);
			// Displaying the card corresponding to the clicked search result
			displayCard(index);
		}
		// Hiding the search data
		document.querySelector('.searchdata').style.display = 'none';
	});
}

// Function to display a specific card
function displayCard(index) {
	var card = array[index];
	var clutter = `
        <div class="box">
            <img class="cursor-pointer rounded-2xl" src="${card.image}" alt="image">
            <div class="caption">${card.name}</div>
        </div>`;
	document.querySelector('.container').innerHTML = clutter;
}

document.querySelector('#home').addEventListener('click', function (event) {
	// Prevent the default behavior of the link
	// event.preventDefault();
	// Call the showTheCards function
	showTheCards();
});

// Calling functions to initialize
showTheCards();
handleSearchFunctionality();
