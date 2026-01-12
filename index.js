
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

document.getElementById("btn-fire-blank-heart").addEventListener("click" , function(e){
    e.preventDefault()



const availableRedHeartNum = parseInt(document.getElementById("red-heart-number").innerText)

const total = availableRedHeartNum + 1

 document.getElementById("red-heart-number").innerText = total

})



document.getElementById("btn-ambulance-blank-heart").addEventListener("click" , function(e){
    e.preventDefault()



const availableRedHeartNum = parseInt(document.getElementById("red-heart-number").innerText)

const total = availableRedHeartNum + 1

 document.getElementById("red-heart-number").innerText = total

})



document.getElementById("btn-women-blank-heart").addEventListener("click" , function(e){
    e.preventDefault()



const availableRedHeartNum = parseInt(document.getElementById("red-heart-number").innerText)

const total = availableRedHeartNum + 1

 document.getElementById("red-heart-number").innerText = total

})



document.getElementById("btn-acc-blank-heart").addEventListener("click" , function(e){
    e.preventDefault()



const availableRedHeartNum = parseInt(document.getElementById("red-heart-number").innerText)

const total = availableRedHeartNum + 1

 document.getElementById("red-heart-number").innerText = total

})

// save transaction data
const transactionHistory = []



// coin features

const callBtn = document.getElementsByClassName("btn-call-action")[0]; callBtn.addEventListener("click", function(e) { e.preventDefault(); alert("National Emergency"); 
    
    
    const availableCoin = parseInt(document.getElementById("btn-100-cions").innerText); const totalCoins = availableCoin - 20; document.getElementById("btn-100-cions").innerText = totalCoins; 

const data = {
    name : "National Emergency",
    date : new Date().toLocaleTimeString()
}
transactionHistory.push(data);
renderTransactionHistory();

});



const callBtn2 = document.getElementsByClassName("btn-call-action")[1]; callBtn2.addEventListener("click", function(e) { e.preventDefault(); alert("Police Helpline Number"); 
    
    const availableCoin = parseInt(document.getElementById("btn-100-cions").innerText); const totalCoins = availableCoin - 20; document.getElementById("btn-100-cions").innerText = totalCoins; 
const data = {
    name : "Police Helpline",
    date : new Date().toLocaleTimeString()
}
transactionHistory.push(data);
renderTransactionHistory();

});



    const callBtn3 = document.getElementsByClassName("btn-call-action")[2]; callBtn3.addEventListener("click", function(e) { e.preventDefault(); alert("Fire Service Number"); 
    
    const availableCoin = parseInt(document.getElementById("btn-100-cions").innerText); const totalCoins = availableCoin - 20; document.getElementById("btn-100-cions").innerText = totalCoins; 

const data = {
    name : "Fire Service",
    date : new Date().toLocaleTimeString()
}
transactionHistory.push(data);
renderTransactionHistory();

});


 const callBtn4 = document.getElementsByClassName("btn-call-action")[3]; callBtn4.addEventListener("click", function(e) { e.preventDefault(); alert("Ambulance Service"); 
    
    const availableCoin = parseInt(document.getElementById("btn-100-cions").innerText); const totalCoins = availableCoin - 20; document.getElementById("btn-100-cions").innerText = totalCoins; 

const data = {
    name : "Ambulance Service",
    date : new Date().toLocaleTimeString()
}
transactionHistory.push(data);
renderTransactionHistory();
});

 const callBtn5 = document.getElementsByClassName("btn-call-action")[4]; callBtn5.addEventListener("click", function(e) { e.preventDefault(); alert("Women & Child Helpline"); 
    
    const availableCoin = parseInt(document.getElementById("btn-100-cions").innerText); const totalCoins = availableCoin - 20; document.getElementById("btn-100-cions").innerText = totalCoins; 

const data = {
    name : "Women & Child Helpline",
    date : new Date().toLocaleTimeString()
}
transactionHistory.push(data);

renderTransactionHistory();

});   


 const callBtn6 = document.getElementsByClassName("btn-call-action")[5]; callBtn6.addEventListener("click", function(e) { e.preventDefault(); alert("Anti-Corruption Helpline"); 
    
    const availableCoin = parseInt(document.getElementById("btn-100-cions").innerText); const totalCoins = availableCoin - 20; document.getElementById("btn-100-cions").innerText = totalCoins; 

const data = {
    name : "Anti-Corruption",
    number : "106",
    date : new Date().toLocaleTimeString()
}
transactionHistory.push(data);
renderTransactionHistory();


});     




function renderTransactionHistory() {
    const transactionContainer = document.getElementById("transaction-container");
    
    
    transactionContainer.innerHTML = "";

    
    transactionHistory.forEach((data) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="flex justify-between items-center p-5 rounded-2xl bg-[#fafafa] mx-4 mb-3 border border-gray-100">
                <div>
                    <h2 class="font-semibold ">${data.name}</h2>
                    <p class=" text-gray-500">${data.number || '999'}</p>
                </div>
                <div>
                    <p class="text-[15px] text-gray-400">${data.date}</p>
                </div>
            </div>
        `;
        transactionContainer.appendChild(div);
    });
}

//   clear history
  
const clearBtn = document.getElementById("btn-clear-history");


clearBtn.addEventListener("click", function() {
    
    transactionHistory.length = 0;
    
   
    const transactionContainer = document.getElementById("transaction-container");
    transactionContainer.innerHTML = "";
    
   
    alert("Call history has been cleared.");
});


// copy section



const copyButtons = document.querySelectorAll(".btn-copy-action");
const copyCountDisplay = document.getElementById("copy-count");


copyButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
        
       
        const card = this.closest('.border-gray-400');
        
        if (!card) {
            console.error("Card container not found. Make sure your card has the class 'border-gray-400'");
            return;
        }

        
        const h1Element = card.querySelector('h1');
        if (!h1Element) return;
        
        const phoneNumber = h1Element.innerText;

      
        navigator.clipboard.writeText(phoneNumber).then(() => {
            
           
            alert("Number Copied: " + phoneNumber);

            if (copyCountDisplay) {
                let currentCount = parseInt(copyCountDisplay.innerText);
                copyCountDisplay.innerText = currentCount + 1;
            }
        })
        });
    });

  

  // transactionContainer.innerHTML = "";



//  ` 
//  <div  class=" p-3 bg-white rounded-xl flex justify-between items-center mt-3">
// <div class="flex items-center">
//     <div class="border-2 p-2 rounded-full">
//         <img src="./assets/wallet1.png" class="mx-auto bg-[#f4f5f7] " alt="">
// </div>
//     <div class="ml-2">
//         <h2 class=" text-black font-semibold">${data.name}</h2>
//         <p>${data.date}</p>
//     </div>
    
// </div>
// <i class="fa-solid fa-ellipsis-vertical"></i>
//     </div>
//     `
//   transactionContainer.appendChild(div)
  
// }
// })



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


        
        



