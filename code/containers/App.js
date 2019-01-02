import React from 'react'
import Header from './Header'
import Logosearch from './logoSearch'


export default class App extends React.Component{
    
    
    render(){
        return(
            <div>
                <Header />
                <Logosearch/>
            </div>
        )
    }
}