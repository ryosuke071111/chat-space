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

  var interval = setInterval(function(){
    if (window.location.href.match(/\/groups\/\d+\/messages/)){ //リンクが今のリンクと会ってたら
    $.ajax({  //非同期通信データ取得
      url: location.href,
      type: "GET",
      dataType: "json"
    })
    .done(function(json){
      console.log(json)
      var id = $(".right-content__messages__box").last().data("messageId"); //チャットのデータ取得
      console.log(id)
      var insertHTML = ""; //元となる関数定義
      json.messages.forEach(function(message){ //指定機関で取得したjsonを配列で指定させる
        if(message.id > id){
        insertHTML += buildHTML(message); //id降順で表示させる（新しいメッセージのかたまいr）
      }
    });
    $(".right-content__messages__container").append(insertHTML); //塊を既存のタイムラインに添える
    })
    .fail(function(json){
      alert("自動更新に失敗しました");
   });
   } else{
    clearInterval(interval);
  }}, 5000 );
});
