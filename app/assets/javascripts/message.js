$(function(){
  function buildHTML(message){
    var img = "";
    if (message.img){
      img = `<img src = ${message.image} class: "right-content__messages__box__content-img">`
    }
    var html = `<div class="right-content__messages__box">
                  <div class="right-content__messages__box__username">
                    <h4>${message.user_name}</h4>
                   </div>
                  <div class="right-content__messages__box__time">
                    <p>${message.created_at}</p>
                  </div>
                  <div class="right-content__messages__box__content">
                    <p>${message.content}</p>
                    ${img}
                   </div>
                </div>
`
    return html;
  }
  $("#new_message").on("submit", function(e){
    console.log("aaa")
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url:url,
      type:"POST",
      data:formData,
      dataType:"json",
      processData:false,
      contentType:false
    })

 .done(function(data){
      var html = buildHTML(data);
      $('.right-content__messages__container').append(html)
      $('.right-content__messages__container').animate({scrollTop: $('.right-content__messages__container')[0].scrollHeight},'fasts')
      $('.submit').prop("disabled", false)
    })
    .fail(function(){
      alert('error');

    })
  })
});
