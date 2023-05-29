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
            temperature:0.8,
            input: textArea.value,
            instruction: "Fix the spelling mistakes",
        })
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            
            textArea.value = data.choices[0]['text']
            let myString = data.choices[0]['text']
            let remText = myString.replace(/\s/g, "")
            let length = remText.length;
            totalCharacters.innerHTML = length
        })
})


