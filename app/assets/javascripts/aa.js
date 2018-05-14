$(window).on('load', function() {
  var
  preFunc = null,
  preInput = '',
  input = '',
  ajaxSearch = function() {
    $.ajax({
      url: "search",
      type: "GET",
      data: ("keyword=" + input)
    });
  };
  $('#inc_search').on('keyup', function() {
    input = $.trim($(this).val());
   if(preInput !== input){
      clearTimeout(preFunc);
      preFunc = setTimeout(ajaxSearch, 500);
    }
    preInput = input;
  });
});
