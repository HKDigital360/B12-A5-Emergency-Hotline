
// life features
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


// coin features

const callBtn = document.getElementsByClassName("btn-call-action")[0]; callBtn.addEventListener("click", function(e) { e.preventDefault(); alert("National Emergency"); 
    
    
    const availableCoin = parseInt(document.getElementById("btn-100-cions").innerText); const totalCoins = availableCoin - 20; document.getElementById("btn-100-cions").innerText = totalCoins; });



const callBtn2 = document.getElementsByClassName("btn-call-action")[1]; callBtn2.addEventListener("click", function(e) { e.preventDefault(); alert("Police Helpline Number"); 
    
    const availableCoin = parseInt(document.getElementById("btn-100-cions").innerText); const totalCoins = availableCoin - 20; document.getElementById("btn-100-cions").innerText = totalCoins; });



    const callBtn3 = document.getElementsByClassName("btn-call-action")[2]; callBtn3.addEventListener("click", function(e) { e.preventDefault(); alert("Fire Service Number"); 
    
    const availableCoin = parseInt(document.getElementById("btn-100-cions").innerText); const totalCoins = availableCoin - 20; document.getElementById("btn-100-cions").innerText = totalCoins; });


 const callBtn4 = document.getElementsByClassName("btn-call-action")[3]; callBtn3.addEventListener("click", function(e) { e.preventDefault(); alert("Ambulance Service"); 
    
    const availableCoin = parseInt(document.getElementById("btn-100-cions").innerText); const totalCoins = availableCoin - 20; document.getElementById("btn-100-cions").innerText = totalCoins; });

 const callBtn5 = document.getElementsByClassName("btn-call-action")[4]; callBtn5.addEventListener("click", function(e) { e.preventDefault(); alert("Women & Child Helpline"); 
    
    const availableCoin = parseInt(document.getElementById("btn-100-cions").innerText); const totalCoins = availableCoin - 20; document.getElementById("btn-100-cions").innerText = totalCoins; });   


 const callBtn6 = document.getElementsByClassName("btn-call-action")[5]; callBtn6.addEventListener("click", function(e) { e.preventDefault(); alert("Anti-Corruption Helpline"); 
    
    const availableCoin = parseInt(document.getElementById("btn-100-cions").innerText); const totalCoins = availableCoin - 20; document.getElementById("btn-100-cions").innerText = totalCoins; });     



// const callButtons = document.querySelectorAll(".btn-call-action");

// callButtons.forEach((btn, index) => { btn.addEventListener("click", (e) => { e.preventDefault();

//     const message = btn.dataset.alert || `You clicked Call button #${index + 1}`; alert(message);


//     const coinElement = document.getElementById("btn-100-cions"); if (coinElement) { const availableCoin = parseInt(coinElement.innerText, 10); const totalCoins = availableCoin - 20; coinElement.innerText = totalCoins; } }); });








// const callButton = document.querySelectorAll(".btn-call-action")

// callButton.forEach(function(button){
//     button.addEventListener("click", function(){

//     //   const emergencyElement = document.getElementsByClassName('emergency')[0]; 
//     //   console.log(emergencyElement.innerText);

//     const allEmergencyElements = document.querySelectorAll('.emergency'); allEmergencyElements.forEach(function(el) {  
//         alert(el.textContent);
//         return;
//     });

//     // console.log(el.textContent);


        
        



