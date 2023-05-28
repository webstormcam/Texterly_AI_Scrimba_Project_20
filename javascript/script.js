const textArea = document.getElementById('userInput')
const processButton = document.getElementById('processButton')

processButton.addEventListener('click',function(){
    fetch('https://api.openai.com/v1/edits',{
        method:"POST",
        headers:{
            'Authorization': ''
            ,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model:"text-davinci-edit-001",
            temperature:0.5,
            input: textArea.value,
            instruction: "Fix the spelling mistakes",
        })
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            textArea.value = data.choices[0]['text']
        })
})


