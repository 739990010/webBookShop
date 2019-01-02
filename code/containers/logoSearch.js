import React from 'react'
import Logo from '../components/logo'
import Search from '../components/search'

export default class Logosearch extends React.Component{
    render(){
        return(
            <div className='logoBar comBar main'>
                <Logo />
                <Search />
            </div>
        )
    }
}