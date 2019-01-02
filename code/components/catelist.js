import React from 'react'
import {get} from '../fetch/index';

export default class Catelist extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dataList:[]
        }
    }
    componentWillMount() {
        
        this.getListData()
    }
    getListData() {        
        get("./mock/cate.json").then((res) => {
            console.log(1);
            return res.json();
        }).then((json)=>{
            this.setState({
                dataList: json.data
            })
        }).catch(function (err) {
            console.log(err);
        })
    }
    
    
    render() {
        console.log(this.state.dataList);
        let data=this.state.dataList;
        function createListDom(item) {
                return (<li key={item.name}><a>{item.name}</a></li>)
        }
        let list=data.map(createListDom);
        return (
            <div className='book_itemL'>
                <ul >
                    {list}
                </ul>
            </div>
        );
    }

}