$(document).ready(function(){
  getIdeas();
});

function getIdeas(){
  $.get('/ideas', function(data){
    console.log(data);
    renderData(data);
  });
}

function DELETE(item){
  $.post( "/ideas", {idea:item}, function(){
    console.log("succes")
  })
}

function renderData(data){
  for (var i = 0; i < data.length; i++) {
    $('ul').append('<li><div class="fun fun'+i+'"></div>' + data[i].idea + '</li>');
  }
  $('.fun').on("click",function(){
      var test = event.path[1].innerText
      console.log(test, {idea:test})
      DELETE(event.path[1])
  })
}   