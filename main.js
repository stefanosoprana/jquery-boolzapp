$(document).ready(function(){

  $('#newMessage').keypress(function(event){

    if (event.which == 13) {

      var newMessageValue = $('#newMessage').val();
      var newmessageTemplate = $('.template .message');
      var clearTemplate = $('.template .clear')

      newmessageTemplate.text(newMessageValue)

      $('.main-up').append(newmessageTemplate);
      $('.main-up').append(clearTemplate);

      $('#newMessage').val('');
    }
  });
});














// $('.fa-chevron-right').click(function(){
//
//   $('.main-up .message-user').addClass('active')
//
//   var text = $('.main-down input').val();
//
//   var newMessage = $('.message-user-toClone .content-message').clone();
//
//   newMessage.text(text);
//
//   $('.main-up .message-user').append(newMessage)
// });
