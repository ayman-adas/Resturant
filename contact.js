const email=document.getElementById("exampleFormControlInput1")
const message=document.getElementById("exampleFormControlTextarea1")
const submit=document.getElementById("submit")
const form=document.getElementById("form")

function checkValidation(){
    if (email.value.trim() === '' || message.value.trim() === '') {
        alert('All field is required')
    }
    else{
 element=document.createElement('p')
 element.textContent = "Submit Successful";
 form.appendChild(element);
}

}

function upperText(){
    email.value = email.value.toUpperCase();  
    message.value = message.value.toUpperCase(); 
}

function changeColor(){
    email.style.color='green'
    message.style.color='red'

}
function changeText(){
    upperText()
    changeColor()   
}