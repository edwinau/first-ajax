$(document).ready(function () {

    /* Your code goes here */
  $('#step12').on('click', function() {
    console.log('Before .ajax');

    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text',
    });
  });

  $('#step3456').on('click', function() {
    $.ajax({
    url:'http://first-ajax-api.herokuapp.com/ping',
    method: 'GET',
    dataType: 'text',
    }).done(function(data) {
      console.log('.ajax done');
      $('#step3456').append('<p>' + data + '</p>' );
    }).fail(function() {
      $('#step3456').append('<p> ERROR: Could not connect to Pong </p>');
    }).always(function() {
      console.log('Hey the request finished!');
    });
  });

  $('#step7').on('click', function() {
    $.ajax({
    url:'http://first-ajax-api.herokuapp.com/count',
    method: 'GET',
    dataType: 'text',
    }).done(function(data) {
      console.log('.ajax done');
      $('#step7').append('<p>' + data + '</p>' );
    }).fail(function() {
      $('#step7').append('<p> ERROR: Could not connect to Pong </p>');
    }).always(function() {
      console.log('Hey the request finished!');
    });
  });

  $('#step8').on('click', function() {
    $.ajax({
    url:'http://first-ajax-api.herokuapp.com/time',
    method: 'GET',
    dataType: 'text',
    data: {timezone: 'Asia/Kolkata'}
    }).done(function(data) {
      console.log('.ajax done');
      $('#step8').append('<p>' + data + '</p>' );
    }).fail(function() {
      $('#step8').append("Operation failed");
    }).always(function() {
      console.log('Hey the request finished!');
    });
  });

  $('#step9').on('click', function() {
    $.ajax({
    url:'http://first-ajax-api.herokuapp.com/a_car',
    method: 'GET',
    dataType: 'html',
    }).done(function(data) {
      console.log('.ajax done');
      $('#ull').append('<p>' + data + '</p>' );
    }).fail(function() {
      $('#step9').append("Operation failed");
    }).always(function() {
      console.log('Hey the request finished!');
    });
  });

});
