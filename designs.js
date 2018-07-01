

let height, width, color; //declare variable  of height, width and color.

$('#sizePicker').submit(function (event) {  //calls the makeGrid function when values of the height and width in the form(id=sizePicker) is submitted.
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);

});


/**
* @description to iterate over the values inputed for the height and width to form the grid
* @param {number} n - height of the grid
* @param {number} m - width of the grid
*/


function makeGrid(n, m) {
   $('tr').remove();

   for(var i=1; i<=n; i++){
       $('#pixelCanvas').append('<tr id=grid'+i+'></tr>');
       for (var j = 1; j<= m; j++){
           $('#grid'+i).append('<td></td>');
       }
   }
// event listener that listens for click and passes a function to apply and remove colors on click.


    $('td').click(function addColor(){
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
   });

}

//removes the color on click.

$('#removeColor').click(function(event){
    event.preventDefault();
    $('td').removeAttr('style');
});

//removes the grid on click.

$('#refreshButton').click(function removeGrid(){
    let grid = $('tr'); 
    grid.remove(); 
});





