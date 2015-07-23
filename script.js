var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
  $('form').submit(function() {
    var text = $("#todo").val(),
        formatted_text = template(text);

    $(".list").append(formatted_text);

    $("#todo").val("");

    return false;
  });


  $(".list").on('click', '.glyphicon-star', function(){
    $(this).toggleClass("active");
  });

  $(".list").on('click', '.glyphicon-remove', function(){
    $(this).closest('p').remove();
  });


};

$(document).ready(main);
