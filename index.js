// Array for Restaurants and filtered list of Restaurants
var restaurants = [];
var filteredList = [];

// Invoke Function Once the Document is ready
$(document).ready(() => {
    loadDoc();
})

// Creating Products from the Available list of Products from URL
function displayProduct(productList) {
    document.getElementById("restaurantListing").innerHTML = "";
    productList.forEach( (value, index) => {
        var cardBody = "<div class=' col-3 cardStyle d-flex align-items-stretch'>";
        cardBody+= "<div class='card' style='width: 18rem;'>";
        cardBody+="<img class='card-img-top' src='"+value.img +"' alt=' Image of "+value.name+"'/>";
        cardBody+="<div class='card-body'>";
        cardBody+="<h5 class='card-title'>"+value.name+"</h5>";
        cardBody+="<div class='card-text'>"
        cardBody+="<p>"+value.description+ "</p>"
        cardBody+="<b>Rating: " + value.rating + "</b>"
        cardBody+="</div> <br/>"                
        cardBody+="<a id=" + value.id + " class='btn btn-primary' onclick='deleteRestaurant(event)'>Delete</a>";
        cardBody+= "</div>";
        cardBody+= "</div>";
        cardBody+= "</div>";
        document.getElementById("restaurantListing").innerHTML+= cardBody;
    });   
};

// Functionality invoked when the Restaurant Delete button is clicked
function deleteRestaurant(event) {
    event.preventDefault();
    var id = event.target.id;
    $.ajax({
        url: "http://localhost:3000/restaurants/" + id,
        type: 'DELETE',
        success: function(data) {
            loadDoc();
        }
    })
}

// Functionality to iterate and create Restaurant list
function loadDoc() {
    $.get("http://localhost:3000/restaurants").done((data) => {
        restaurants = data;
        filteredList = data;
        displayProduct(filteredList);
    })
}

// Functionality of Click to submit Restaurant name to the current listing
function addRestraurant() {
    var sameId = restaurants.filter(rest => rest.name == "1");
    if(sameId.length > 0) {
        alert("Cannot Have Same Id for the New Restraurant");
        return
    }
    $.post("http://localhost:3000/restaurants", {
        "id": new Date().valueOf(),
        "img": document.getElementById("restaurantImage").value,
        "name": document.getElementById("restaurantName").value,
        "description": document.getElementById("restaurantDescription").value,
        rating: 5
    }).done((data) => {
        show_divListing()
        loadDoc();
    })
}

// Functionality of Click to search Restaurant name in the current listing
function searchFunc(){
    var name = document.getElementById("inputText").value;
    filteredList = restaurants.filter((restraurant) =>  {
        return restraurant.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
    })
    displayProduct(filteredList);
}

// Functionality of Click to view About Us Tab
function show_divAboutUs(event){
    if(event) {
        event.preventDefault();
    }
    document.getElementById("restaurantListing").style.display = "none";
    document.getElementById("addARestaurant").style.display = "none";
    document.getElementById("aboutUs").style.display = "block";
}

// Functionality of Click to view (Restaurant Listing) Home Tab
function show_divListing(event){
    if(event) {
        event.preventDefault();
    }    
    document.getElementById("restaurantListing").style.display = "flex";
    document.getElementById("addARestaurant").style.display = "none";
    document.getElementById("aboutUs").style.display = "none";
}

// Functionality of Click to view Add A Restaurant Tab
function show_div(event){
    if(event) {
        event.preventDefault();
    }
    document.getElementById("restaurantListing").style.display = "none";
    document.getElementById("addARestaurant").style.display = "block";
    document.getElementById("aboutUs").style.display = "none";
}