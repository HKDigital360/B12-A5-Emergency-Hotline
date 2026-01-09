

document.getElementById("btn-nation-blank-heart").addEventListener("click" , function(e){
    e.preventDefault()



const availableRedHeartNum = parseInt(document.getElementById("red-heart-number").innerText)



const total = availableRedHeartNum + 1

 document.getElementById("red-heart-number").innerText = total


})


document.getElementById("btn-police-blank-heart").addEventListener("click" , function(e){
    e.preventDefault()



const availableRedHeartNum = parseInt(document.getElementById("red-heart-number").innerText)

const total = availableRedHeartNum + 1

 document.getElementById("red-heart-number").innerText = total

})




// const availableRedHeartNum = parseInt(document.getElementById("red-heart-number").innerText);

// const availableBlankHeartNum = document.getElementById("btn-blank-heart");



const callButton = document.querySelectorAll(".btn-call-action")

callButton.forEach(function(button){
    button.addEventListener("click", function(){

    //   const emergencyElement = document.getElementsByClassName('emergency')[0]; 
    //   console.log(emergencyElement.innerText);

    const allEmergencyElements = document.querySelectorAll('.emergency'); allEmergencyElements.forEach(function(el) {  
        alert(el.textContent);
        return;
    });

    // console.log(el.textContent);


        
        

const availableCoins = parseInt(document.getElementById("btn-100-cions").innerText)


const totalCoins = availableCoins - 20

document.getElementById("btn-100-cions").innerText = totalCoins

 


    })

    
})

