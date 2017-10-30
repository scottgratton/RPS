var userScore = 0
var compScore = 0

console.log("Javascript working");
$(document).ready( function (){
//------------------------------------

$('.rock').click(function() {
  gameLogic("rock", compy());
});

$('.scissors').click(function() {
  gameLogic("scissors", compy());
});

$('.paper').click(function() {
  gameLogic("paper", compy());
});

$('.selector').hover(function(){
        $(this).css('background-color', '#5C9999');
    },
    function(){
        $(this).css('background-color', 'transparent');
        $( this ).css('transform', 'scale(1, 1)');
    });

    $( ".selector" )
  .mouseup(function() {
    $( this ).css('background-color', '#5C9999');
    $( this ).css('transform', 'scale(1, 1)');
    $( this ).css('top', '-30px');
    $( this ).animate({ top: "0px", }, 600 );

  })
  .mousedown(function() {
    $( this ).css('background-color', '#FFFFFF');
    $( this ).css('transform', 'scale(0.90, 0.90)');
  })

}); // document ready closer



// computer choice and icon logic
      var compy = function() {
      var random = Math.floor(Math.random() * 3);
      $('.compOptions').css('display', 'none');
      $('.computer').css('opacity', '0');
      $('.computer').animate({
    opacity: 1,
    }, 500 );

      if ( random === 0 ) {
      $('.comppaper').css('display', 'block');
      return "paper";

      } else if ( random === 1) {
      $('.compscissors').css('display', 'block');
      return "scissors";

      } else {
      $('.comprock').css('display', 'block');
      return "rock"
      }

      };

    var winner = function() {
      $('h2').html("You win!");
      $('.playingfield').css('background-color', '#7BCB7B');
      userScore = userScore + 1;
    };

    var loser = function() {
      $('h2').html("You lose :(");
      $('.playingfield').css('background-color', '#8E1616');
      compScore = compScore + 1;
    };

      var gameLogic = function(userchoice, compchoice) {
        console.log(`User: ${userchoice}`)
        console.log(`Comp: ${compchoice}`)

        if ( userchoice === compchoice ) {
        $('h2').html("Tie!");
        $('.playingfield').css('background-color', 'tan');

      }

      else if (userchoice === "rock") {
          if ( compchoice === "scissors" ) {
            winner();
          } else if ( compchoice === "paper" ) {
           loser();
      }}

      else if (userchoice === "paper") {
          if ( compchoice === "rock" ) {
            winner();
          }
          else if ( compchoice === "scissors") {
           loser();
      }}

      else if (userchoice === "scissors") {
           if ( compchoice === "paper" ) {
             winner();
           }
           else if ( compchoice === "rock") {
            loser();
          }}

      $('.compScoreboard').html(`Comp: ${compScore}`);
      $('.userScoreboard').html(`User: ${userScore}`);

        if ( userScore === 10 ) {
          $('.platform').css('filter', 'blur(7px)');
          $('.winner').css('display', 'block');
          $('.finalBG').css('display', 'block');
          $('h2').html("--Refresh to play again--");
        } else if (compScore === 10) {
          $('.platform').css('filter', 'blur(7px)');
          $('.loser').css('display', 'block');
          $('.finalBG').css('display', 'block');
          $('h2').html("--Refresh to play again--");
        };
      };
