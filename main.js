$(document).ready(function(){

  $('#newMessage').keypress(function(event){

    if (event.which == 13) {

      var newMessageValue = $('#newMessage').val();
      var newmessageTemplate = $('.template .message.sent').clone();
      var clearTemplate = $('.template .clear').clone();

      newmessageTemplate.text(newMessageValue);

      $('.main-up').append(newmessageTemplate);
      $('.main-up').append(clearTemplate);

      setTimeout(function() {

        var newmessageTemplateBot = $('.template .message.received').clone();
        var clearTemplateBot = $('.template .clear').clone();
        newmessageTemplateBot.text('ok');
        $('.main-up').append(newmessageTemplateBot);
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
