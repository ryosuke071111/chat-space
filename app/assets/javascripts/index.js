$(function(){

  var search_list= $("");

  function appendUser(user){
    var html = `<div class="chat-group-user clearfix" id="chat-group-user-${user.id}">
                  <input name="chat_group[user_ids][]" type="hidden" value="${user.id}">/</input>
                  <p class="chat-group-user__name">${user.name}</p>
                </div>`
  search_list.append(html);
}

$("#user-search-field").on("keyup",function(){
  var input = $("#user-search-field").val();
  $.ajax({
    type: "GET",
    url: "/users",
    data: {keyword:input},
    dataType: "json"
  })
      console.log("aaaa")

  .done(function(users){
    $("#user-search-result").empty();
    if(users.length !== 0){
      users.forEach(function(user){
        appendUser(user);
      });
    }
    else{
      appendNoUser("一致するユーザーはいません");
    }
  })
  //.fail(function(){
   // alert("ユーザー検索に失敗しました")
  });
})
//})

