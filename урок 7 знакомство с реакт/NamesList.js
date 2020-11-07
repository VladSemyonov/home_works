import React, {Component} from 'react'


   class NamesList extends Component{
    constructor(props){
        super(props);
        this.findValue = this.findValue.bind(this);
        this.state = {
            names:'',
            findNames:'',
            value:''
        }
    }

    componentDidMount() {
       this.multi()
        this.findValue()
    }

       async multi(){
           fetch('https://jsonplaceholder.typicode.com/users')
               .then(result=>{return result.json()})
               .then(result=>this.setState({names:result.map((i, index)=>(
                   <h5 style={{border: '2px solid black', width:'100%'}} key={index}>{i.name}</h5>))}))
               .catch(e=>console.log(e));
    }

       findValue(e){
        let arr = [];
        let a = this.state.names;
        for( let i = 0; i < a.length; i++ ){
            let val = e.target.value;
            this.setState({value: val})
        if(a[i].props.children.indexOf(val)>=0)
        arr.push(a[i]);
        }
        this.setState({findNames:arr})
    }



  render() {

        return(
      <div>
          <div style={{width:'25%', margin:'auto'}}>
              <input style={{width:'100%', border:'3px solid red', padding:'0' }}
                   placeholder='Please enter name' onInput={this.findValue}/>
            <ul style={{padding:0}}>{(this.state.findNames.length==0&&this.state.value.length==0) ? this.state.names : this.state.findNames}</ul>
          </div>
      </div>
        )
    }
}

export default NamesList