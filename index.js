

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



