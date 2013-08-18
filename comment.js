$(document).ready(function() {
  $('#new_comment_button').on('click', function(e){
    e.preventDefault();
    $('#new_comment_button').hide();
    $('#user').val(' ');
    $('#comment').val(' ');
    $('#comment_box').fadeIn();

    $('form').on('submit', function(e) {
      e.preventDefault();
      var name = document.getElementById('user').value;
      var comment = document.getElementById('comment').value;
      $('#comment_box').fadeOut();
      $('#new_comment_button').fadeIn(2000);
      if (comment !== ' ') {
        $('#comment_list').append('<li>' + comment + '<span class="author">' + name + '</span></li>');
      }
      $('form').unbind();
    });
  });
});
