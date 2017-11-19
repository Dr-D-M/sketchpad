// generate grid
$(document).ready(function(){
	


});
function createGrid(size = 30){
	for(var i =0; i < size; i++){
 for(var j = 0; j < size; j++){
 $('.container').append('<div class="exwife"></div>');
 }
 
 };
}
createGrid();

// eraser button
$('#eraser').on('click', function(){
$('.exwife').css('background-color', 'white');
});




// change size of grid-
$("#setGrid").on('click',function(){
 var userNum = 0;
   do{
   	userNum = prompt("Enter Grid size between 1 and 80")
   } while (userNum  < 1 || userNum > 80);

   var newGrid = parseInt(userNum);
   $('.container').empty();
   createGrid(newGrid);
  
});

// code for button randomColor

$('#randomColor').on('click', function(){
  
var style = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
color = style
$('.exwife').mouseenter(function(){
$(this).addClass('hover').css('background-color', style);

});

});

