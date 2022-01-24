import React from "react";
import Slider from "react-slick";
import StarRatings from 'react-star-ratings';
import Skills from "./json/skills.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SkillItems = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
      const style = {
          margin: 100,
          color: "#fff",
          background: "#3ab60b"
      };  


const skillItems = Skills.items.map((item) => <div><h1 style={style}>{item.sub_title}</h1>
{/* 以下入れ子状態の子データを取得 */}
{ item.items.map((v) => <li>{v.name} <StarRatings
                                        rating={v.rate}
                                        numberOfStars={5}
                                        starRatedColor="#ffd700"
                                        starDimension="20px"
                                        starSpacing="0.5px"
                                        />
                        </li> 
                )
 }

</div> );

return  ( <div id={Skills.id}><div class="subtitle-right"><span class="subtitle-h3 subtitle-black">{Skills.name}</span><span class="subtitle-h1 subtitle-gray ">{Skills.title}</span></div><Slider {...settings}>{skillItems}</Slider></div>);

}