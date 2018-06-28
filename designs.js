// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//$('#sizePicker').css('background','blue');



  var height=$("#inputHeight").val();

var col=$("#colorPicker").val();;
$("#colorPicker").on('change',function(){

console.log("colour changed to "+$("#colorPicker").val())
 col=$("#colorPicker").val();
}
);
$("#inputHeight").on('change',function(){

console.log("height changed to "+$("#inputHeight").val())
height=$("#inputHeight").val();
}
);


console.log("colour is "+col);
$('#sizePicker').on('submit',

function makeGrid(event) {


$('tr').remove();
  var weight=$("#inputWeight").val();

  for (var j = 1; j <= height; j++){
    $('#pixelCanvas').append('<tr></tr>')
    }
    for  (var i = 1; i <= weight; i++){
      $('tr').append('<td class="cell"> </td>');
  }



console.log("submitted!!");
// Your code goes here!
event.preventDefault();

$('.cell').on('click', function(){
  if($(this).css('background-color')==col){
    $(this).css('background-color', white);
    console.log("box reclicked");
  }
  else{
$(this).css('background-color', col);
console.log("box clicked");
console.log("color is "+$(this).css('background-color'));
}
}
);
});




/**<tr>
<td> </td>
<td> </td><td> </td>
</tr>**/
