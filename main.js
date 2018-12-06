$(document).ready(function(){

  var now = new Date();

  var messageReceivedTimeSet = $('.message .message-time')
  messageReceivedTimeSet.text(now.getHours() + ':' + now.getMinutes());

  $('#newMessage').keypress(function(event){

    if (event.which == 13) {

      var newMessageValue = $('#newMessage').val();
      var newmessageTemplate = $('.template .message.sent').clone();
      newmessageTemplate.children('.message-text').text(newMessageValue);
      newmessageTemplate.children('.message-time').text(now.getHours() + ':' + now.getMinutes());

      $('.main-up').append(newmessageTemplate);


      var clearTemplate = $('.template .clear').clone();
      $('.main-up').append(clearTemplate);

      setTimeout(function() {

        var newmessageTemplateBot = $('.template .message.received').clone();
        newmessageTemplateBot.children('.message-text').text('Ok');
        newmessageTemplateBot.children('.message-time').text(now.getHours() + ':' + now.getMinutes());
        $('.main-up').append(newmessageTemplateBot);


        var clearTemplateBot = $('.template .clear').clone();
        $('.main-up').append(clearTemplateBot);

      }, 1000);

      $('#newMessage').val('');

    }
  });

    $('#newContact').keyup(function(){
      var thisValue = $(this).val().toLowerCase();
  		console.log(thisValue);

      $('.contacts li').each(function() {
      var contactName = $(this).find('.contact-name').text().toLowerCase();
      console.log(contactName);
        if (contactName.includes(thisValue)) {
          $(this).show();
        }
        else {
          $(this).hide();
        }
      });
    });

});
