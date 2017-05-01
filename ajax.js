$(document).ready(function () {

  /* Your code goes here */
  $.ajax ({
    url:'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    dataType: 'html'
  });
});
