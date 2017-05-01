$(document).ready(function () {

    /* Your code goes here */
  $('#step12').on('click', function() {
    console.log('Before .ajax');

    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'html',
    });
  });

  $('#step3456').on('click', function() {
    $.ajax({
    url:'http://first-ajax-api.herokuapp.com/pong',
    method: 'GET',
    dataType: 'html',
    }).done(function(data) {
      console.log('.ajax done');
      $('#step3456').append('<p>' + data + '</p>' );
    }).fail(function() {
      $('#step3456').append('<p> ERROR: Could not connect to Pong </p>');
    }).always(function() {
      console.log('Hey the request finished!');
    });
  });
});
