import React from 'react'
import Logo from '../components/logo'

export default class Footer extends React.Component{
    render(){
        return(
            <div className='footer'>
                <div className='main comBar clear'>
                    <Logo />
                    <div className='fbook_item '>
			            <h4>全部书籍分类</h4>
			                <ul>
			                	<li><a href="/">学习教育</a></li>
			                	<li><a href="/">儿童启蒙</a></li>
			                	<li><a href="/">动漫同人</a></li>
		                		<li><a href="/">历史文化</a></li>
		                		<li><a href="/">社会法律</a></li>
	                			<li><a href="book_classify.php?fclass_name=经营管理&sclass_name=">经营管理</a></li>
			                	<li><a href="book_classify.php?fclass_name=小说传记&sclass_name=">小说传记</a></li>
		                	</ul>
		            </div>
		            <span>
		            	竹书屋———I am yours
	            	</span>
                </div>
            </div>
        )
    }
}