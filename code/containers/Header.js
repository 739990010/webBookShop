import React from 'react'
import Top from './top'

export default class Header extends React.Component{
    render(){
        return(
            <div className='headerBar clear'>
                <Top />  
             </div>
        )     
    }
}