import React from "react";
import Slider from "react-slick";
// import ReactStars from 'react-stars'
import StarRatings from 'react-star-ratings';
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
const SimpleSlider = () =>  {
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
  
    return (
      <Slider {...settings}>
        <div>
          <h1 style={style}>Frontend</h1>
          <li>HTML/CSS
          <StarRatings
        rating={4}
        numberOfStars={5}
        starRatedColor="#ffd700"
        starDimension="20px"
        starSpacing="0.5px"
      />
          </li>
          <li>Javascript
          <StarRatings
        rating={4}
        numberOfStars={5}
        starRatedColor="#ffd700"
        starDimension="20px"
        starSpacing="0.5px"
      />
          </li>
          <li>React
          <StarRatings
        rating={2}
        numberOfStars={5}
        starRatedColor="#ffd700"
        starDimension="20px"
        starSpacing="0.5px"
      />
          </li>
        </div>
        <div>
          <h1 style={style}>Backend</h1>
          <li>Java
          <StarRatings
        rating={3}
        numberOfStars={5}
        starRatedColor="#ffd700"
        starDimension="20px"
        starSpacing="0.5px"
      />

          </li>
          <li>Ruby on Rails
          <StarRatings
        rating={1}
        numberOfStars={5}
        starRatedColor="#ffd700"
        starDimension="20px"
        starSpacing="0.5px"
      />
          </li>
          <li>PHP
          <StarRatings
        rating={1}
        numberOfStars={5}
        starRatedColor="#ffd700"
        starDimension="20px"
        starSpacing="0.5px"
      />
          </li>
        </div>
        <div>
          <h1 style={style}>Database</h1>
          <li>Oracle
          <StarRatings
        rating={4}
        numberOfStars={5}
        starRatedColor="#ffd700"
        starDimension="20px"
        starSpacing="0.5px"
      />
          </li>
          <li>SQL Server
          <StarRatings
        rating={5}
        numberOfStars={5}
        starRatedColor="#ffd700"
        starDimension="20px"
        starSpacing="0.5px"
      />
          </li>
          <li>My SQL
          <StarRatings
        rating={3}
        numberOfStars={5}
        starRatedColor="#ffd700"
        starDimension="20px"
        starSpacing="0.5px"
      />
          </li>
          <li>SQLite
          <StarRatings
        rating={3}
        numberOfStars={5}
        starRatedColor="#ffd700"
        starDimension="20px"
        starSpacing="0.5px"
      />
          </li>
        </div>
        <div style>
          <h1 style={style}>Others</h1>
          <li>Backlog
          <StarRatings
        rating={5}
        numberOfStars={5}
        starRatedColor="#ffd700"
        starDimension="20px"
        starSpacing="0.5px"
      />
          </li>
          <li>SVN
          <StarRatings
        rating={5}
        numberOfStars={5}
        starRatedColor="#ffd700"
        starDimension="20px"
        starSpacing="0.5px"
      />
          </li>
          <li>Github
          <StarRatings
        rating={3}
        numberOfStars={5}
        starRatedColor="#ffd700"
        starDimension="20px"
        starSpacing="0.5px"
      />
          </li>
          <li>Eclipse
          <StarRatings
        rating={3}
        numberOfStars={5}
        starRatedColor="#ffd700"
        starDimension="20px"
        starSpacing="0.5px"
      />
          </li>
        </div>        
      </Slider>
    );
  }
 
  export default SimpleSlider;