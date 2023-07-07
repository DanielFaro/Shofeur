import styled from 'styled-components';
import React from 'react';
import priceIcon from '../lib/icons/icons8-price-50.png'
import personIcon from '../lib/icons/icons8-user-30.png';
import smokingIcon from '../lib/icons/icons8-smoking-50.png'

const VehicleStyles = styled.div`
  background: #30ad90;
  border: 1px solid black;
  box-shadow: var(--bs);
  font-weight: bold;
  font-size: 2rem;
  position: relative;
  width: 350px;
  display: flex;
  transform: scale(1);
  transition: transform 800ms;
  flex-direction: column;

  .icons, .icon-items {
    display: flex;
    justify-content: space-evenly;
    margin: 1rem 2rem;
  }
  &:hover {
    transform: scale(1.08);
    transition: transform 800ms;
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 250px;
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

// provides an individual Vehicle component for Rental section
export default function Vehicle({ vehicle }) {
  return (
    <VehicleStyles>
      <div className='vehicle'>
        <h3>{vehicle.name}</h3>
        <img src={vehicle.image} alt={vehicle.name} />
        <div className="icons">
          <div className='icon-items'>
            <img alt="priceIcon" src={priceIcon} style={{height: "40px", width: "40px" }} />
            <div className="price">{`$${vehicle.price}/hr`}</div>
          </div>
          <div className='icon-items'>
            <img alt="personIcon" src={personIcon} style={{height: "40px", width: "40px" }} />
            <div className="size">{vehicle.size}</div>
          </div>
          {vehicle.smoking &&
            <div className='icon-items'>
              <img alt="smokingIcon" src={smokingIcon} style={{height: "40px", width: "40px" }} />
            </div>
          }
        </div>
      </div>
    </VehicleStyles>
  );
}
