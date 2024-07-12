const imagesDiv=document.getElementById("images")
console.log(imagesDiv)

let id =(Math.random() *6 +1) *10000 
id=Math.floor(id)

const fakeImg = "https://thispersondoesnotexist.com/"
const realImg = `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`

const rnd = Math.random()>0.5
const arr =[rnd,!rnd]
 
const resultDiv = document.getElementById("result")
const again = document.createElement("button")   
again.innerText = "play again"
again.onclick = function(){
    location.reload()
}

for (const x of arr)
{
    const i1 = document.createElement("img")
    i1.src =( x ? realImg : fakeImg)
    imagesDiv.append(i1)
   
     i1.onclick = function(){
        resultDiv.innerText = x ? "Correct" : "Incorrect"
        imagesDiv.style.pointerEvents="none"
        resultDiv.append(again)
    }
}


  

