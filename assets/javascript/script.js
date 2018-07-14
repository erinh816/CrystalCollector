 //create variables
            $(document).ready(function(){
            var wins = 0;
            var losses = 0;
            var computerNum;
            var total = 0;

            //computer generate a random number (1-100)
            computerNum = Math.floor(Math.random() * 100) + 10;
            $("#ComputerNum").html("<h1>"+ computerNum + "</h1>");


            //generate 4 different numbers for buttons (1-9)
            var numBlue = Math.floor(Math.random() * 9) + 1;
            var numGreen = Math.floor(Math.random() * 9) + 1;
            var numRed = Math.floor(Math.random() * 9) + 1;
            var numYellow = Math.floor(Math.random() * 9) + 1;
            //PERFECT SO FAR
             
            //Win function
            function YouWin(){
                alert("You Won!");
                wins++;
                $("#wins").html(wins);
                startover();
            }
            //Lose function
            function YouLose(){
                alert("You Lost!");
                losses++;
                $("#losses").html(losses);
                startover();
            }

             //Reset game function
             function startover(){
                computerNum = Math.floor(Math.random() * 100) + 10;
                $("#ComputerNum").html("<h1>"+ computerNum + "</h1>");
                numBlue = Math.floor(Math.random() * 9) + 1;
                numGreen = Math.floor(Math.random() * 9) + 1;
                numRed = Math.floor(Math.random() * 9) + 1;
                numYellow = Math.floor(Math.random() * 9) + 1;   
                total= 0;
                $("#score").text(total);    
            }

            //Each button should have a function so it can be clicked and added to total multiply times
            $("#blue").click(function(){
                total = total + numBlue;
                $("#score").text(total);
                if(total === computerNum){
                    YouWin();
                }
                else if(total>computerNum){
                    YouLose();
                }
            });

             $("#green").click(function(){
                total = total + numGreen;
                $("#score").text(total);
                if(total === computerNum){
                    YouWin();
                }
                else if(total>computerNum){
                    YouLose();
                }
            });

              $("#red").click(function(){
                total = total + numRed;
                $("#score").text(total);
                if(total === computerNum){
                    YouWin();
                }
                else if(total>computerNum){
                    YouLose();
                }
            });

              $("#yellow").click(function(){
                total = total + numYellow;
                $("#score").text(total);
                if(total === computerNum){
                    YouWin();
                }
                else if(total>computerNum){
                    YouLose();
                }
            });
            
        });