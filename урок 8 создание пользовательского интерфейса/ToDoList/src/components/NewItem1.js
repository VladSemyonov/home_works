import React, { useState} from 'react'
import './Item.css'

function NewItem1 (props){

    const [needToDo, setNeedToDO] = useState('');

    function add() {
        let id = localStorage.length;
        localStorage.setItem(id, needToDo)
        props.getBody();
        setNeedToDO('')
    }

    function updateDo(e) {
        setNeedToDO(e.target.value)
    }

return (
    <div className='new-div'>
    <h2>Добавить новое задание</h2>
    <div className='new-item-div'>

        <input className="new-item-input"
            type="text"
            onChange={updateDo}
            value={needToDo}
        />
        <button className="new-item-btn" onClick={add}>Добавить</button>
    </div>
    </div>
    )
}


export default NewItem1;
