Planet’s Quiz by Merdad Karkudi;
project repository link : https://github.com/mkarkuody/CodeQuiz
project link : https://mkarkuody.github.io/CodeQuiz/
Demo video link address : https://github.com/mkarkuody/CodeQuiz/blob/master/Planets%20Quiz%20by%20Merdad%20Karkudi.mp4?raw=true
For making this quiz application I used HTML, CSS and JavaScript.
In VS code I created index HTML file added title and added style.css link inside HTML head.
Added container class, created first h1 tag for first the first interaction with user. 
Added start button and added game.HTML link in that. And also high score button with hiscore.HTML tagged.
Started style.css with body tag change background image. (I added a gif file)
Changed h1 font color, font size and font family, and changed .container size, display and aligned it.
I changed .btn font size font family and background color. Added hover on it, with box shadow and pointer. Also some changes for high score button.
Created game.html, game.css and also gam.js.
In game.html added title and two links of CSS made container in the body of the file, made some divisions to manipulate in JavaScript. I wanted to write score board and question part and also the answers. All the div’s got style in css I added one of the solar system spinning planet’s gif to make the pages more pretty and added some changes in css. Added some hover motions and shadows in css for the answers . made correct and incorrect classes to change color in case of being clicked. Added a green background for correct class and red for incorrect class. Added progress bar and made some changes in css.i made one question and four (a, b, c , d) answers.
Started my game.JS file created const’s and target my classes and ID’s . made some let’s for example “currectQuestion”, ‘score”.  And made another variable “question” for question tab (all my question and answers are in that part). Made const’s for scores and the number of questions. Made a function named startGame  a function named getNewQuestion and choices.foreach(Choice).  to set the HTML file functionality. Added another function for a one second gap for correct or incorrect change colored answer.
Started my end.HTML and changed the title and linked my style.css . in body made a container form and h1. Made three buttons “save” that is disabled in HTML, “play again” and “Home” to save our score and name, play again, or start over again in first page. Styled these tags and classes in style.css. added different font sizes and colors and gif in that page. Note:save button is disabled till it get data in the form.
Started my end.js file to manipulate HTML for and file functionality. created const’s and target my classes and ID’s . made a const to put user Data in local storage with Json.parse (window.location.assign(‘/’) and made a const to have only 5 lines in highscore HTML page enabled save button with “Keyup” in eventlistener. 
Added a new file “highscore.HTML” and added a container in the body and added “leader board” and go home Button, and styled it in css and also added a spinning planet gif.
Aaded the last JS file with highScoreList, highScores Variables and innerHTML to add the high scores.
• Usage: 
1-	tps://validator.w3.org/  helps to check and fix the HTML fils
2-	https://www.w3schools.com/ provides prepared executive codes to safe time for coders.

• Credits:
Got help Online from : 
•	https://www.google.com/
•	https://www.w3schools.com/  
•	www.YouTube.com  ( https://www.youtube.com/user/codeandcreative )
 Thanks to John Young my class instructor and Ben Vaagen my TA. special Thank to Dan Mont-Eton my TA , and Amanda Crawford My Tutor for helping me to understand the class and homework contents.
