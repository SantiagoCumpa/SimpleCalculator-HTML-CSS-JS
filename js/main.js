//Calculator Variables
const button = document.querySelectorAll('.btn');         //Buttons
const result = document.querySelector('.result');         //Result Screen
const operation = document.querySelector('.operation');   //Operation Screen

/*
To hide previus result obtained when entering a new operation
¨*/
function checkScreen(){
  if( !(operation.innerText === '') && !(result.innerText === '') ){
    result.classList.add('result--hide');
  } else if (operation.innerText === '' && !(result.innerText === '')){
    result.classList.remove("result--hide")
  }
}
//Call function checkScreen()
checkScreen();

/*
Event listener when clicking a button
¨*/
button.forEach( btn => {
  btn.addEventListener('click', (e) => {

  switch(e.target.innerText){
    //Clear all
    case 'CA':
      operation.innerText = '';
      result.innerText = '';
      break;
    //Erase last character entered
    case 'C':
      operation.innerText = operation.innerText.slice(0, -1);
      break;
    //Pick previous result to make a new operation
    case 'Ans':
      if(result.innerText === '')
        break;

      operation.innerText = result.innerText;
      result.innerText = 'Ans = '+result.innerText;
      break;
    //Solve the operation entered and show on the screen
    case '=':
      if(operation.innerText === '')
        break;

      try{
        result.innerText = eval(operation.innerText);
        operation.innerText = '';
      } catch {
        result.innerText = "Error!";
        operation.innerText = '';
      }
      break;
    //Enter a character in the operation screnn
    default:
      operation.innerText += btn.innerText;
      break;
  }

  //Call function checkScreen()
  checkScreen();

  });
});

//Dark Theme Variables
const themeToggleButton = document.querySelector(".theme-toggler");
const darkTheme = document.querySelector(".container");

//To change theme to dark and vice versa
themeToggleButton.addEventListener("click", () => {
  darkTheme.classList.toggle("dark");
});

