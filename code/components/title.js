import React from 'react'

export default class Title extends React.Component{
    render(){
        return (
            <div className='rec'>
                <h4>{this.props.title}</h4>
            </div>
        )
    }
}