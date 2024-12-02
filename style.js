function greetUser(name){
    document.getElementById ('output').innerText=("Hello "+ name)
   }
   greetUser("Ana")
   
   
   function changeMessage(){
       document.getElementById('message').innerText=("Hello, World!")
   }
   
   
   function addNumbers(){
       var val1 = document.getElementById('number1')
       var val2 = document.getElementById('number2')
      var result = (val1+val2)
   }
   
   
   function updateTitle() {
       const inputValue = document.getElementById('input').value;
       document.getElementById('title').innerText = inputValue
   }
   
   
   function concatenateStrings() {
       const str1 = document.getElementById('string1').value;
       const str2 = document.getElementById('string2').value;
       document.getElementById('combinedText').innerText = str1  + str2;
   }
   
   
   const colorBox = document.getElementById('colorBox');
   const changeColorButton = document.getElementById('changeColorButton');
   changeColorButton.addEventListener('click', function () {
   colorBox.style.backgroundColor = 'blue';})
   
   
