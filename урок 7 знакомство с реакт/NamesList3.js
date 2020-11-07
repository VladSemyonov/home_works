import React, {useState} from 'react'

function NamesList3() {
    const [arr, setArr]= useState([]);
    const [inputValue, setInputValue] = useState('');

    window.onload = getContent;

    async  function getContent(){
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then(result=>{return result.json()})
            .then(result=>setArr((result.map((i, index)=>(
                <h5 style={{border: '2px solid black', width:'100%'}} key={index}>{i.name}</h5>)))))
            .catch(e=>console.log(e))
    }

    function updateValue(e) {
        setInputValue(e.target.value)
    }

    function GetBody(){
        return arr.filter(item => item.props.children.toLowerCase().includes(inputValue))
    }

    return(
        <div>
            <div style={{width:'25%', margin:'auto'}}>
                <input style={{width:'100%', border:'3px solid red', padding:'0' }} onInput={updateValue}/>
                <GetBody />
            </div>

        </div>
    )
}

export default NamesList3