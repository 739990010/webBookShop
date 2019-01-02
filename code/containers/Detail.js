import React from 'react'


function Btns() {
    return (
      <ul id="btns">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    );
  }
  
  //方法Imgs 组件
  function Imgs() {
    return (
      <ul id="imgs">
          <li><img alt="图片1" src={require('../../images/ad1.jpg')} /></li>
          <li><img alt="图片1" src={require('../../images/ad2.jpg')} /></li>
          <li><img alt="图片1" src={require('../../images/ad3.jpg')} /></li>
      </ul>
    );
  }
  
  //es6 类组件
export default class Detail extends React.Component {
    constructor(props) {
      super(props);
      this.state =  {iNow: 0,bCheck: true};
      this.handleMouseover = this.handleMouseover.bind(this);
      this.handleMouseout = this.handleMouseout.bind(this);
    }
  
    handleMouseover() {
        this.setState({
            bCheck:false
        })
    }
  
  
    handleMouseout() {
      this.setState({
          bCheck:true
      })
    }
  
    //
    componentDidMount() {
        this.timerID = setInterval(
          () => this.timer(),
          3000
        );
      }
   
      componentWillUnmount() {
        clearInterval(this.timerID);
       }
  
     timer() {
       if(this.state.bCheck) {
         if(this.state.iNow === 2) {
            this.setState({
                iNow:0
            })
         }
         else {
            let i=this.state.iNow;
            this.setState({
                iNow:i+1
            })
         }
         this.iNowlistener();
       }
       else {
         return false;
       }
     }
  
  
     iNowlistener(){//改变的核心函数
       var oBtns=document.getElementById('btns');
       var aBtns=oBtns.getElementsByTagName('li');
       var oImgs=document.getElementById('imgs');
       var aImgsLi=oImgs.getElementsByTagName('li');
       aBtns[0].style.background = 'rgba(255,255,255,0.5)';
        var len = aBtns.length;
        for(var i =0; i < len; i++)
        {
            if(i === this.state.iNow) {
                aBtns[i].style.background = 'rgba(255,255,255,0.5)';
                aImgsLi[i].style.display = "block";
            }
            else {
              aBtns[i].style.background = 'rgba(0,0,0,0.3)';
              aImgsLi[i].style.display = "none";
            }
  
        }
      }
  
  
    //渲染组件模板
    render() {
      return (
        <div id={this.props.idNames} onMouseOver={this.handleMouseover} onMouseOut={this.handleMouseout}>
           <Btns />
           <Imgs />
        </div>
      );
    }
  
  }