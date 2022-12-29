//Calculator Variables
const button = document.querySelectorAll('.btn');         //Buttons
const result = document.querySelector('.result');         //Result Screen
const operation = document.querySelector('.operation');   //Operation Screen

/*
To hide previus result obtained when entering a new operation
¨*/
function checkScreen(){
  if( !(operation.textContent === '') && !(result.textContent === '') ){
    result.classList.add('result--hide');
  } else if (operation.textContent === '' && !(result.textContent === '')){
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

  switch(e.target.textContent){
    //Clear all
    case 'CA':
      operation.textContent = '';
      result.textContent = '';
      break;
    //Erase last character entered
    case 'C':
      operation.textContent = operation.textContent.slice(0, -1);
      break;
    //Pick previous result to make a new operation
    case 'Ans':
      if(result.textContent === '')
        break;

      operation.textContent = result.textContent;
      result.textContent = 'Ans = '+result.textContent;
      break;
    //Solve the operation entered and show on the screen
    case '=':
      if(operation.textContent === '')
        break;

      try{
        result.textContent = eval(operation.textContent);
        operation.textContent = '';
      } catch {
        result.textContent = "Error!";
        operation.textContent = '';
      }
      break;
    //Enter a character in the operation screnn
    default:
      operation.textContent += btn.textContent;
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

