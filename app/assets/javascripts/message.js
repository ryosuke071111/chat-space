$(function(){
  function buildHTML(message){
    var img ="";
    if (message.image){
    var img = `<img src = ${message.image} class: "lower-message_image">`
    }
    var html = `<div class=" right-content__messages__box data-message-id="${message.id}">
                  <div class= "right-content__messages__box__username">
                    <h4>${message.user_name}</h4>
                   </div>
                  <div class= "right-content__messages__box__time">
                    <p>${message.created_at}</p>
                  </div>
                  <div class= "right-content__messages__box__content">
                    <p>${message.content}</p>
                       ${img}
                   </div>
                </div>`
    return html;
  }

  $("#new_message").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
  .done(function(data){
      var html = buildHTML(data);
      $('.right-content__messages__container').append(html)
      $('.right-content__messages__container').animate({scrollTop: $('.right-content__messages__container')[0].scrollHeight},'fasts')
      $('.submit').prop("disabled", false)
      $('#message_content').val("");
      $('#message_image').val("");
    })
  .fail(function(){
    alert('error');
    })
  })

  var last_message_id = $(".right-content__messages__box").last().data("messageId");
  var interval = setInterval(function(){
    if (location.pathname.match(/\/groups\/\d+\/messages/)){
    $.ajax({
      url: location.pathname,
      data: {id: last_message_id},
      type: "GET",
      dataType: "json"
    })
    .done(function(json){
      if (json.length !== 0){
      var insertHTML = "";
      json.forEach(function(message){
        insertHTML = buildHTML(message);
        $(".right-content__messages__container").append(insertHTML);
    });
  }
    })
    .fail(function(json){
      alert("自動更新に失敗しました");
   });
   } else{
    clearInterval(interval);
  }}, 5000 );
});
