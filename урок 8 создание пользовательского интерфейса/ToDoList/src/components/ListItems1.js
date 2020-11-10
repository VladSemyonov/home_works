import React, {useState} from 'react'
import Item1 from './Item1';
import Search from "./Search";

function ListItems1 (props) {

    const [findValue, setFindValue] = useState('');

    function updateValue(e) {
        setFindValue(e.target.value)
    }

    function getItem(arr){
    return arr.filter(item=>item.value.toLowerCase().includes(findValue.toLowerCase()))
                  .map(item=>(
                        <Item1 id={item.id}
                               value={item.value}
                               packed={item.packed}
                               onChange={props.toggleItem}
                                key={item.id}
                                getBody={props.getBody}/>
                    ))
        }

        return (
            <section>
                <Search searchTerm={findValue} onChange={updateValue}/>
                <h3 className='mb-3'>{props.title}</h3>
                <ul className='list-group mb-3'>{getItem(props.insert)}</ul>
            </section>
        )
    }


export default ListItems1;
