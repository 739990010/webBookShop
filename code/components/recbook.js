import React from 'react'
import {Link} from 'react-router-dom'


export default class Recbook extends React.Component{
    render(){
        return(
            <div className='rec_book'>
                <Link to='detail'>
                    <img src={this.props.image}  alt={this.props.bookname} />
                    <span>{this.props.bookname}</span>
                    <span id='price'>{this.props.price}</span>
                </Link>
            </div>
        )
    }
}