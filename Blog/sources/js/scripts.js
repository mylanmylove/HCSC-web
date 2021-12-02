$.get('sources/blog/blog1/title.txt', function(data) {
  $('#tt1').text(data)
}, 'text');

$.get('sources/blog/blog2/title.txt', function(data) {
  $('#tt2').text(data)
}, 'text');

$.get('sources/blog/blog3/title.txt', function(data) {
  $('#tt3').text(data)
}, 'text');

$.get('sources/blog/blog4/title.txt', function(data) {
  $('#tt4').text(data)
}, 'text');

$.get('sources/blog/blog1/content.txt', function(data) {
  var new_data = '';
  var i = 0;
  while(i < 475 || data[i] != ' ')
  {
    new_data += data[i];
    i++;
  }
 
  new_data += ' ...';

  $('#pc1').text(new_data)
}, 'text');

$.get('sources/blog/blog2/content.txt', function(data) {
  var new_data = '';
  var i = 0;
  while(i < 475 || data[i] != ' ')
  {
    new_data += data[i];
    i++;
  }
 
  new_data += ' ...';

  $('#pc2').text(new_data)
}, 'text');

$.get('sources/blog/blog3/content.txt', function(data) {
  var new_data = '';
  var i = 0;
  while(i < 475 || data[i] != ' ')
  {
    new_data += data[i];
    i++;
  }
 
  new_data += ' ...';

  $('#pc3').text(new_data)
}, 'text');

$.get('sources/blog/blog4/content.txt', function(data) {
  var new_data = '';
  var i = 0;
  while(i < 475 || data[i] != ' ')
  {
    new_data += data[i];
    i++;
  }
 
  new_data += ' ...';

  $('#pc4').text(new_data)
}, 'text');


  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = 75;

  function myFunction() {
    if (window.pageYOffset >= sticky)
    {
      navbar.classList.add("sticky")
    }
    else
    {
      ext = true;
      $('.nav').removeClass('sticky');
    }
  }
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position




$(document).ready(function() {
    $('#menu').click(function() {
      if (document.getElementById('menu-list').style.visibility === "visible")
      {
        document.getElementById('menu-list').style.visibility = "hidden";
      }
      else{
        document.getElementById('menu-list').style.visibility = "visible";
      }
    });
});



// $(document).ready(
//   function(){
//     $('.col').waypoint(
//       function(direction){
//         if(direction == 'down'){
//           $('nav').addClass('sticky');
//         }
//       },{
//         offset: '100px'
//       }
//     )
//   }
// )
