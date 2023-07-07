import styled from 'styled-components';
import React from 'react';

const Destinationstyles = styled.section`
   display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 60px;
    margin-bottom: 40px;

  div {
    background: blue;
    border: 1px solid var(--offWhite);
    box-shadow: var(--bs);
    position: relative;
    display: flex;
    transform: scale(1);
    transition: transform 800ms;
    flex-direction: column;
    &:hover {
      transform: scale(1.08);
      transition: transform 800ms;
      cursor: pointer;
    } 
  }
 
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const destinations = [
  {name: "Universal Studios", img: "https://visitburbank.com/wp-content/uploads/2022/07/sm-hero.jpg"},
  {name: "Griffith Observatory", img: "https://b1850159.smushcdn.com/1850159/wp-content/uploads/2023/01/griffith_observatory_guide_featured_image.jpg?lossy=1&strip=1&webp=1"},
  {name: "The Grove ", img: "https://media.gettyimages.com/id/478953911/photo/the-grove-shopping-mall-los-angeles.jpg?s=612x612&w=0&k=20&c=-rXJFTqFD-26Jo3rH8hX7KVQcCGdGWY_WMMsxIiXwm0="},
  {name: "Walk of Fame", img: "https://media.istockphoto.com/id/458723155/photo/hollywood-walk-of-fame.jpg?s=612x612&w=0&k=20&c=5mOqTX9hQmSVy8oAe4eaNHnBtZKT33WIbwlo9IK1bbU="},
  {name: "The Getty", img: "https://www.tripsavvy.com/thmb/D2YeHgJTrkDLRUgg-CNH8eE16d8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TheGettyCenter-839a4dbc76c44c63b9a075d7ce194eb1.jpg"},
  {name: "Venice Beach", img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/124000/124468-Venice.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh"}
];

export default function Events() {
  return (
    <>
      <h1>Popular Attractions</h1>
      <Destinationstyles>
        {destinations?.map(destination => (
              <div key={destination.name}>
                <img src={destination.img} alt={destination.name}/>
                <h2>{destination.name}</h2>
              </div>
        ))}
      </Destinationstyles>
    </>
  );
}
