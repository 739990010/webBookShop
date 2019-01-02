import React from 'react'


export default class Search extends React.Component{
    render(){
        return(
            <div className='search'>
					{/* <form action="search.php" method="post"> */}
						<input name='key' type="text" className='search_text'/>
						<input type="submit" value='搜  索' className='search_btn'/>
				    {/* </form> */}
			</div>
        )
    }
}