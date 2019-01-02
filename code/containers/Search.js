import React from 'react'
import Footer from './footer'
import Searchbooks from '../components/searchbooks'

export default class Home extends React.Component{
    render(){
        return(
            <div className='main comBar'>
                <Searchbooks />
                <Footer />
            </div>
            
        )
    }
}