$(document).ready(function(){

  $('#newMessage').keypress(function(event){

    if (event.which == 13) {

      var newMessageValue = $('#newMessage').val();
      var newmessageTemplate = $('.template .message.sent');
      var clearTemplate = $('.template .clear')


      newmessageTemplate.text(newMessageValue)

      $('.main-up').append(newmessageTemplate);
      $('.main-up').append(clearTemplate);


      setTimeout(countDown, 1000);
      function countDown() {

        var newmessageTemplateBot = $('.template .message.received');
        var clearTemplateBot = $('.template .clearBot')
        newmessageTemplateBot.text('ok')
        $('.main-up').append(newmessageTemplateBot);
        $('.main-up').append(clearTemplateBot);

      }
      
      $('#newMessage').val('');


    }
  });
});
