import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/logo.png'


export default class Logo extends React.Component{
    render(){
        return(
            <div className='logo'>
					<Link to='/'><img src={logo} alt="竹书屋" /></Link>
			</div>
        )
    }
}