import Recbook from '../components/recbook'
import React from 'react'
import image from '../../images/books/1526277561.jpg'

export default class Recbooks extends React.Component{
    render(){
        return(
            <div className='clear'>
                <Recbook bookname='中国近代史' image={image} price='50' />
            </div>
        )
    }
}