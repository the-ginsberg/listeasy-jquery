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

};

$(document).ready(main);
