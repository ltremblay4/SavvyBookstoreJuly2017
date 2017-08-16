// Javascript!
var book1 = {
  "id": 1,
  "name": "Savvy Coders July 2017",
  "author": "Savvy Coders",
  "picture_url": "https://github.com/camilopayan/student-showcase/blob/master/images/class.jpg?raw=true",
  "price": '$' + 24,
  "selling_points": [
    "Awesome coders July 2017",
    "camilo, chloek, ciara.l.nelson, kdub, ltremblay, wang, wrawlings",
    "Bacon ipsum dolor amet flank meatball venison ground round short loin, ball tip prosciutto pancetta.",
  ]
}

var book2 = {
  "id": 2,
  "name": "Sasha Savvy Loves to Code",
  "author": "Sasha Ariel Alston",
  "picture_url": "http://www.kickstartchildrensbooks.com/uploads/4/4/5/6/4456781/screen-shot-2017-01-17-at-3-41-24-pm_orig.png",
  "price": '$' + 9.99,
  "selling_points": [
    "Sasha Savvy Loves to Code is here to show little girls that they can program computers for fun and profit. ~ Bustle",
    "Sasha Savvy is here to teach girls that coding the world is a girl thing too! ~ Emory Brown, Beneath the Brand, Talent Zoo",
    "Sasha Savvy Loves to Code is sure to be a huge boost for young girls interested in STEM...~ Blavity",
  ]
}

var book3 = {
  "id": 3,
  "name": "Savvy",
  "author": "Ingrid Law",
  "picture_url": "http://images.penguinrandomhouse.com/cover/9780142414330",
  "price": '$' + 6.83,
  "selling_points": [
    "A Newberry Honor Book",
    "An Oprah's Book Club Kids Rreading List Pick",
    "A New York Times Bestseller",
  ]
}

var add_to_page = function( obj ) {
  var contentID = 'book' + obj.id;

  $('#main').append($("<div id='" + contentID + "'></div>"));

  var $contentNode = $('#' + contentID);

  var sellingPointsListItems = '';
  obj.selling_points.forEach( function(sellingPoint){
    sellingPointsListItems += "<li>" + sellingPoint + "</li>";
  } );


  $contentNode.append($('<div class="name">').text(obj.name));
  $contentNode.append($('<div class="author">').text(obj.author));
  $contentNode.append($('<div class ="bookpicture">').html("<img class='bookpic' src='" + obj.picture_url + "'>"));
  $contentNode.append($('<div class="price">').text(obj.price));

  $contentNode.append($('<div class="selling">').html("<ol>" + sellingPointsListItems + '</ol>'));
};

add_to_page(book1);
add_to_page(book2);
add_to_page(book3);

var count = 2;

    $("form").on("submit", function(event) {
        event.preventDefault();

        var data = $(this).serializeArray();
        var formObject = {};

        formObject.id = ++count;
        data.forEach( function(field){
            formObject[field.name] = field.value;
        } );

        if(formObject.password === "banana"){
            add_to_page(formObject);
        } else {
            alert( "Sorry, you didn't enter the correct password" );
        }
    });
