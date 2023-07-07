import styled from 'styled-components';
import React from 'react';

const VehicleStyles = styled.div`
  background: red;
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
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  title {
    color: black
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
`;

export default function Vehicle({ vehicle }) {
  const randReviews = Math.floor(Math.random()*100);
  return (
    <VehicleStyles>
      <div className='vehicle'>
        <h3>{vehicle.name}</h3>
        <img src={vehicle.image} alt={vehicle.name} />
        <div className='rating'>{randReviews} reviews {vehicle.rating} stars</div>
        <div className="size">{vehicle.size} people</div>
        <div className="price">{`$ ${vehicle.price}/hr`}</div>
      </div>
    </VehicleStyles>
  );
}
