fetch('https://api.openai.com/v1/edits',{
method:"POST",
headers:{
    'Authorization': '',
    'Content-Type': 'application/json'
},
body: JSON.stringify({
    model:"text-davinci-edit-001",
    temperature:0.8,
    input: "Hello my name is bob and I am a cool guy that likes to explore countires like Ecador and Mex and puru",
    instruction: "Fix the spelling mistakes",
})
})
.then(res=>res.json())
.then((data)=>{
    console.log(data)
})