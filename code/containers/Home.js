import React from 'react'
import Title from '../components/title'
import Footer from './footer'
import Rotation from './rotation'
import Recbooks from './recbooks'
import Catelist from '../components/catelist'

export default class Home extends React.Component{
    render(){
        return(
            <div className='main comBar'>
                <Catelist />
                <Rotation />
                <Title title='推荐书籍' />
                <Recbooks />
                <Footer />
            </div>
            
        )
    }
}