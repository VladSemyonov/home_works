import React from 'react'


function Item1(props){

    function removeItem (event){
        let id = event.target.id;
        localStorage.removeItem(id)
        props.getBody()
    };

        return (
            <div className='main-item'>
                <input
                type="checkbox"
                checked = {props.packed}
                id={props.id}
                onChange={()=>props.onChange(props.id)}
            />
                <li>{props.value}</li>
                <button className='item-btn' id={props.id} onClick={removeItem}>Удалить</button>
            </div>
        )
    }

export default Item1;
