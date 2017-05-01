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
    url:'http://first-ajax-api.herokuapp.com/ping',
    method: 'GET',
    dataType: 'html',
    }).done(function(data) {
      console.log('.ajax done');
      $('#step3456').append('<p>' + data + '</p>' );
    }).fail(function(jqXHR, textStatus) {
      console.log('.ajax FAILED with ' + jqXHR.status + ' ' + jqXHR.statusText);
      console.log(jqXHR);
    }).always(function() {
      console.log('.ajax request finished');
    });

    console.log('After .ajax');
  })


});
