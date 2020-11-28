import React from 'react'

export default function LoginForm() {


    return(
        <form className='ui form' name='login'>
            <div className='ui grid'>
                <input type='text' placeholder='email'/>
                <input type='text' placeholder='password'/>
                <div className='ui fluid buttons'>
                    <button className='ui button primary' onClick={onchange}>Ok</button>
                    <button className='ui button secondary' onClick={onchange}>Cancel</button>
                </div>
            </div>
        </form>
    )
}