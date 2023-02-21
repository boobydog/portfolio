import React from "react";
// import Slider from "react-slick";
import StarRatings from 'react-star-ratings';
import Skills from "./json/skills.json";

export const SkillItems = () =>{

const skillItems = Skills.items.map( (item) => 
<div className="skill-background" key={item.sub_title}>
    <div className="skill skill-subtitle-black"><h1 >{item.sub_title}</h1><span className="skill-list">
        {/* 以下入れ子状態の子データを取得 */}
        { item.items.map((v) =>  v.rate ?  (
            <table className="skill-table" key={v.name}>
                <tbody>
                    <tr clss="skill-tr">
                   
                        <td className=" title"> <img src={v.icon} alt={v.name} /><span className="skill-title">{v.name}</span></td>
                        <td className=" star">
                            <span> <StarRatings rating={v.rate}
                                                numberOfStars={5}
                                                starRatedColor="rgba(255, 208, 0, 0.753)"
                                                starDimension="20px"
                                                starSpacing="0.5px"
                                                />
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            ):(
            <table className="skill-table" key={v.name}>
                <tbody>
                    <tr>{v.name}
                        <td className=" title"></td>
                        <td className=" star">
                            <span></span>
                        </td>
                    </tr>
                </tbody>
            </table>
            )
        )
        }
    </span></div></div>
    );

return  ( <div ><div id={Skills.id} className="subtitle-right"><span className="subtitle-h3 skill-subtitle-black">{Skills.name}</span><span className="subtitle-h1 subtitle-gray ">{Skills.title}</span></div>{skillItems}</div>);

}