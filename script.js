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
    },
    {
        position: 3,
        message: 'The end!'
    }
];

function createClueBlock(clue) {
    var clueBlock = '<div class="clue" id="' + clue.position + '"><p>' 
    + clue.message + '</p>';

    (clue.code && clue.code.length) ? $('.code').removeClass('hide') : $('.code').addClass('hide');
    
    if (clue.position < clues.length-1) {
        clueBlock = clueBlock + '<button>Next clue!</button></div>';
    }

    return clueBlock;
}

function updateClue(clue) {
    $('body').append(createClueBlock(clue));

    if (clue.position < clues.length-1) {
        setupClueClick();
    }
}

function removeCurrent() {
    $('#' + current).remove();
}

function goNext() {
    console.log('next!' , current);
    removeCurrent();
    current++;
    updateClue(clues[current]);
}

function startClick() {
    goNext();
}

function setupStartButton() {
    $('body').append('<input class="code hide"></input>');
    $('body').append('<button class="start" id="0">Start here!</button>');
}

function clearCodeField(newVal = '') {
    $('input.code').val(newVal);
}

function clueClick() {
    var clue = clues[current];
    if (clue.code && clue.code.length) {
        if ($('input.code').val() == clue.code) {
            goNext();
            clearCodeField();
        } else {
            clearCodeField('Wrong code!')
            setTimeout(function() {
                clearCodeField()
            }, 2000);
        }
    }
}

function setupClueClick() {
    $('.clue').click(clueClick);
}

function setupButtonClick() {
    $('.start').click(startClick);
}

var start = function() {
    setupStartButton();
    setupButtonClick();
}

$(document).ready(start);