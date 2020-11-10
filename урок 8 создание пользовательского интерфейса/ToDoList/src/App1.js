import React, {useState} from 'react';
import NewItem1 from './components/NewItem1';
import ListItems1 from "./components/ListItems1";

function App1 () {
    const [arr, setArr] = useState([]);

    window.onload = getBody;

    const packed = arr.filter(item => !item.packed);
    const unpacked = arr.filter(item => item.packed);

    function getBody() {
        let mas = [];
        let keys = Object.keys(localStorage);
        for(let key of keys) {
            mas.push({value: localStorage.getItem(key),
                        packed: false,
                        id: key});
        }
        setArr(mas.map((item)=>item))
          }

   function toggleItem (id) {
        setArr(arr.map(item=>item.id !== id ? item : {...item,  packed: !item.packed}))
    };

   function markAllPacked () {
       setArr(arr.map(item=>({...item,  packed: true})))
  }

   function markAllUnPacked () {
       setArr(arr.map(item=>({...item,  packed: false})))
   }
return (
    <div className='container'>
        <div className='upper-col'>
            <h2>ToDo List:</h2>
        </div>
        <NewItem1 getBody={getBody}/>
        <ListItems1 toggleItem={toggleItem} getBody={getBody} insert={unpacked} title= "Выполненые" />
        <ListItems1 toggleItem={toggleItem} getBody={getBody} insert={packed} title="Не выполненые" />
        <button className='btn btn-success btn-lg btn-block' onClick={markAllPacked}>Mark all as packed</button>
        <button className='btn btn-danger btn-lg btn-block' onClick={markAllUnPacked}>Mark all as unpacked</button>
    </div>
        )
    }

export default App1;
