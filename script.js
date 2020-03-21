// (function(context) {

// })(window);

var current = 0;

var clues = [
    {
        position: 0,
        message: "Let's start!",
        code: null
    },
    {
        position: 1,
        message: 'Try this',
        code: 'ABC'
    },
    {
        position: 2,
        message: 'do this other thing',
        code: 'DEF'
    }
];

function createClueBlock(clue) {

}

function updateClue(clue) {
    // var clueBlock = createClueBlock(clue);
    var clueBlock = '<div class="clue" id="' + clue.position + '"><p>' 
    + clue.message + '</p><button>Next clue!</button></div>';

    $('body').append(clueBlock);

    setupClueClick();

    // + '<p>' + clue.message + '</p><button>Next clue!</button></div>'
}

function removeCurrent() {
    $('#' + current).remove();
}

function goNext() {
    console.log('next!' , current);
    removeCurrent();
    current++;
    // var clue = clues[current];  
    updateClue(clues[current]);
}

function startClick() {
    goNext();
}

function setupStartButton() {
    // <button class="start">Start here!</button>
    $('body').append('<button class="start" id="0">Start here!</button>');
}

function clueCLick() {
    alert('a clue!');
    goNext();
}

function setupClueClick() {
    $('.clue').click(clueCLick);
}

function setupButtonClick() {
    $('.start').click(startClick);
}

var start = function() {
    // console.log('nora go');
    setupStartButton();
    setupButtonClick();
}

$(document).ready(start);