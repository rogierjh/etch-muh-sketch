function makeGrid(size){
    var grid = ''
    for (i = 0; i < size; i++){
        var row = '';
        for (j = 0; j < size; j++){
            row += '<div class="pix"></div>';
        };
        row += '<br/>';
        grid += row;
    }
    return grid;
}


$(document).ready(function(){
    $('#grid').append(makeGrid(16)).css({'width': 16*14});
//refactor this shit
    $('#reset').on('click', function(){
        var newSize = prompt("Give me a size!");
        $('#grid').empty().append(makeGrid(newSize)).css({'width': newSize*14});
        $('.pix').on('mouseenter', function(){
            $(this).css({'background-color': 'black'});
        });
    });

    $('.pix').on('mouseenter', function(){
        $(this).css({'background-color': 'black'});
    });
})
