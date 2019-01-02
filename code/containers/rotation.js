import React from 'react'

export default class Rotation extends React.Component{
    componentDidMount(){
    //     /*广告图片轮流展示动画*/
    //     var $adImage=document.querySelector('.ad_imageBox');//获取滚动图片的展示div
    //     var l=-1000;//绝对定位的left距离
    //     var $adImgLi=document.querySelector('.ad_rollNum ul li');
    //     var adImgLiIndex=0;
    //  //   $adImgLi.eq(adImgLiIndex).find('a').css('background-color','#FF5000');//默认刚开始选取的是第一个
  
    //  /*点击小圆点停在相应的图片并且停止动画*/
    // //     $adImgLi.find('a').click(function(e){
    // //         $adImgLi.find('a').css('background-color','#FFF');
    // //   // console.log($adImgLi.index(this));
    // //         adImgLiIndex=$adImgLi.find('a').index(this);
    // //         this.css('background-color','#FF5000');
    // //         var liPosition=-(adImgLiIndex*1000)+'px';
    // //         $adImage.css('left',liPosition);
    // //         $adImage.stop();
    // //         e.stopPropagation(); 
    // //         e.preventDefault();
    // //     });
  
    //  /*设置定时器，让每张图片放映两秒然后进入下一张图片*/
    //     var time=setTimeout(function(){$adImage.animate(l,3000,loop);},2000);
    //     function loop(){
    //         if(l===-1000){
    //            // $adImgLi.find('a').css('background-color','#FFF');
    //             adImgLiIndex=1;
    //           //  $adImgLi.eq(adImgLiIndex).find('a').css('background-color','#FF5000');
    //             l.left='-2000px';

    //         }
    //         else if(l.left==='-2000px'){
    //          //   $adImgLi.find('a').css('background-color','#FFF');
    //             adImgLiIndex=2;
    //           //  $adImgLi.eq(adImgLiIndex).find('a').css('background-color','#FF5000');
    //             l.left='-3000px';
    //         }
    //         else if(l.left==='-3000px'){
    //             $adImage.css('left','0px');
    //             $adImgLi.find('a').css('background-color','#FFF');
    //             adImgLiIndex=0;
    //             $adImgLi.eq(adImgLiIndex).find('a').css('background-color','#FF5000');
    //             l.left='-1000px';
    //         }
    //     clearInterval(time);
    //     time=setTimeout(function(){$adImage.animate(l,3000,loop);},2000);
    //     }
    }
    render(){
        return(
            <div className='adBar'>
		    	<div className='ad_imageBox'>
		    		<div className='ad_image ad1'>
					
		    		</div>
		    		<div className='ad_image ad2'>
					
		    		</div>
		    		<div className='ad_image ad3'>
            
	    			</div>
	    			<div className='ad_image ad1'>
            
	    			</div>
	    		</div>
	    		{/* <div classNamess='ad_rollNum'>
	    			<ul>
	    				<li><a href="javascript:void(0)"></a></li>
		    			<li><a href="javascript:void(0)"></a></li>
			    		<li><a href="javascript:void(0)"></a></li>
			    	</ul>
			    </div> */}
	    	</div>
        )
    }
}
