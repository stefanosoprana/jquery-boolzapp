$('.fa-chevron-right').click(function(){

  var text = $('.main-down input').val();

  var newMessage = $('.main-up .message-user').clone();

  newMessage.text(text);

  $('.main-up .space-message-user').append(newMessage)
});
