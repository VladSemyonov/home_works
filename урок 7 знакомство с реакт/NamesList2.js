import React, {useState} from 'react'

 function NamesList2() {
    const [arr, setArr]= useState([]);
    const [names, setNames] = useState([]);
    const [inputValue, setInputValue] = useState('')

    window.onload = getContent;

   async  function getContent(){
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(result=>{return result.json()})
        .then(result=>setArr((result.map((i, index)=>(
            <h5 style={{border: '2px solid black', width:'100%'}} key={index}>{i.name}</h5>)))))
        .catch(e=>console.log(e))
}

   function findValue(e) {
       let addArr = [];
         for (let i = 0; i < arr.length; i++){
                 let enteredValue = e.target.value;
                 setInputValue(enteredValue)
           if(arr[i].props.children.indexOf(enteredValue)>=0)
               addArr.push(arr[i])
           }
         setNames(addArr)
   }

    return(
        <div>
            <div style={{width:'25%', margin:'auto'}}>
            <input style={{width:'100%', border:'3px solid red', padding:'0' }} onInput={findValue}/>
            {arr.length !== 0 ? (
                <div style={{padding:0}}>{(names.length==0 &&  inputValue.length==0)? arr : names}</div>) : "please stand by.."}
            </div>
        </div>
    )
}

export default NamesList2