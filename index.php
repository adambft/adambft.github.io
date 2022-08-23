<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>This Website is a Scam!</title>
    <link rel="stylesheet" href="style.css" type="text/css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>

  <body>
      <!-- row1 -->
      <div id="main_div1">
        <h1>&#127927&#127843&#127790 Hello I'm Adam. &#127810&#127817&#128011</h1>
      </div>

      <!-- row 2 -->
      <div class="main_div2_container">
        <div class="main_div2" id="div2_1">
          <div id="adam_transition"></div>
          <h2>&#128070This is me</h2>
          <h5>(DO NOT hover over my picture thx)</h5>
        </div>

        <div class="main_div2" id="div2_2">
          <img class="circle_crop_1" src="imgs/oliver.jfif" alt="oliver">
          <h2>&#128070This is my cat, Oliver</h2>
        </div>

        <div class="main_div2" id="div2_3">
          <img class="circle_crop_1" src="imgs/coco.jfif" alt="coco">
          <h2>&#128070This is my other cat, Coco</h2>
        </div>

        <div class="main_div2" id="div2_4">
          <img class="circle_crop_1" src="imgs/tigger.jfif" alt="tigger">
          <h2>&#128070This is my other other cat, Tigger</h2>
        </div>
      </div>
      
      <!-- row 3 -->
      <div class="main_div3_container">

        <div id="main_div3_left">
          <h2>Fun Fact about me:</h2>
          <h3>I'm VERY generous</h3>
          <h2>&#128181&#128181&#128181&#128181&#128181&#128181&#128181&#128181</h2>
          <h2>&#128181&#128181&#128181&#128181&#128181&#128181&#128181&#128181</h2>
        </div>

        <div id="main_div3_right">
          <h2>So generous in fact, I'm giving away $1,000 to whoever fills out this form:</h2>
          <br>
          <h3>Limited to first 50 submissions, so hurry!</h3>
          <br>

          <form action="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <div class="main_div3_inputs">
              <p>Full name (as in NRIC)</p>
              <input type="text" class="div3_input_set_width">
            </div>

            <div class="main_div3_inputs">
              <p>First all digits of NRIC</p>
              <input type="text" class="div3_input_set_width">
            </div>
            
            <div class="main_div3_inputs">
              <p>Bank Account Number</p>
              <input type="text" class="div3_input_set_width">
            </div>

            <div class="main_div3_inputs">
              <p>Bank Password</p>
              <input type="password" class="div3_input_set_width">
            </div>

            <div class="main_div3_inputs">
              <p>Name of your first pet</p>
              <input type="text" class="div3_input_set_width">
            </div>

            <div class="main_div3_inputs">
              <p>Name & number of person most likely to pay a ransom if you got kidnapped</p>
              <input type="text" class="div3_input_set_width">
            </div>
          </form>

          <a id="rickroll_button" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <span>
              Get My FREE Money Now! (Not a scam, guaranteed)
            </span>
          </a>
        </div>
      </div>

      <!-- row 4 -->
      <div class="main_div4_container">
        <h3>Adam's Best Traits:</h3>

        <ul>
          <li>Handsome</li>
          <li>Charming</li>
          <li>Delusional</li>
        </ul>
      </div>

      <!-- row 5 -->
      <div class="main_div5_container">
        <div class="div5_block2">

          <?php
            echo("<table class='pretty_table_1'>");

            for ($i=0; $i<50; $i++) {
              echo("<tr>");
                for ($j=0; $j<95; $j++) {
                  echo("<td></td>");
                }
              echo("</tr>");
            }

            echo("</table>");
          ?>

        </div>

        <div class="div5_block1">
            <h2>&#128072Let's Draw Baby!</h2>
            <h3>You are NOT allowed to draw if you're not an infant</h3>
        </div>
      </div>

   </body>
</html>