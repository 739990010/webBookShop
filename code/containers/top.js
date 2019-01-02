import React from 'react'
import {Link} from 'react-router-dom'

export default class Top extends React.Component{
    render(){
        return(
            <div className='comBar main topBar clear'>
				<p>欢迎来到竹书屋</p>
					<span>欢迎您</span>
					<Link to='/cart'>购物车</Link>
					<Link to='/register'>[注册]</Link><Link to='login'>[登录]</Link>
			</div>
        )
    }
}