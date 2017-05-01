$(document).ready(function () {

    /* Your code goes here */
  $('#run-ajax').on('click', function() {
    console.log('Before .ajax');

    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'html',
    });
  });
});
