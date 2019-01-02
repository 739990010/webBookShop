import Searchbook from '../components/searchbook'
import React from 'react'
import image from '../../images/books/1526277561.jpg'

export default class Searchbooks extends React.Component{
    render(){
        return(
            <div className='clear'>
                <Searchbook bookname='中国近代史' image={image} price='50' />
            </div>
        )
    }
}