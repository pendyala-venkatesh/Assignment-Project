function changeColor(){
    let web =document.getElementById("webpage")
    let inputbox=document.getElementById("inputbox")

    let color=inputbox.value
    web.style.backgroundColor=color
}
function workingWithCheckBox(){
    let inputbox =document.getElementById("pwd")
    // target checkbox 
    let checkbox=document.getElementById("check")
    // check whether it is selected or not 
    let status=checkbox.checked

    if(status==true){
        //show password
        inputbox.setAttribute("type","text")
    }
    else{
        //hide password
        inputbox.setAttribute("type","password")

    }
}
function verifyAnswer(){
    let allElements=document.getElementsByName("answer")
    let labels=document.getElementsByClassName("text")

    let radioButtonStatus=allElements[2].checked
    labels[2].style.color="green"

    if(radioButtonStatus==true){
        //print correct
        allElements[4].innerText="correct"
        labels[0].style.color="black"
        labels[1].style.color="black"    
        labels[3].style.color="black"
    }
    else{
        //print incorrect ,change wrong text color red
        allElements[4].innerText="incorrect"
        labels[0].style.color="red"
        labels[1].style.color="red"    
        labels[3].style.color="red"
    }
}