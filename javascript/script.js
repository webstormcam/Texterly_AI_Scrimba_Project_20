const textArea = document.getElementById('userInput')
const processButton = document.getElementById('processButton')
const totalCharacters = document.getElementById('totalCharacters')
const totalWords = document.getElementById('totalWords')

processButton.addEventListener('click',function(){
    fetch('https://api.openai.com/v1/edits',{
        method:"POST",
        headers:{
            'Authorization': '',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model:"text-davinci-edit-001",
            temperature:0.3,
            input: textArea.value,
            instruction: "Fix the spelling mistakes",
        })
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            
            textArea.value = data.choices[0]['text']
            let myString = data.choices[0]['text']
            
           console.log(myString)
           
           const Doug = countWords(myString)
           console.log(Doug)
           totalWords.innerHTML = Doug

            //This gets the total amount of characters
            let remText = myString.replace(/\s/g, "")
            let length = remText.length;
            totalCharacters.innerHTML = length
        })
})





function countWords(str){
    let arr = str.split(" ")
    return arr.length
}


