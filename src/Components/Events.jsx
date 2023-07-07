import styled from 'styled-components';
import React from 'react';

const EventSummaryStyles = styled.p`
   background: white;
    border: 1px solid var(--offWhite);
    box-shadow: var(--bs);
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 40px;
`

const Eventstyles = styled.section`
   display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;
  margin-bottom: 40px;
  div {
    background: green;
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

const eventTypes = [
  {type: "Wedding", img: "https://www.elegancetransportation.com/wp-content/uploads/2023/02/chrysler-e1356467008921.jpg"},
  {type: "Party", img: "https://www.mundilimos.com/wp-content/uploads/2021/09/on-what-occasions-is-a-limousine-appropriate.jpg"},
  {type: "Concert ", img: "https://lxmpls.com/wp-content/uploads/2020/03/concert-768722_1280-1024x682.jpg"},
  {type: "Airport", img: "https://data.awol.com.au/wp-content/uploads/2019/12/Singapore-Plaza-Premium-Lounge.jpg"},
  {type: "Brunch", img: "https://daxtonhotel.com/wp-content/uploads/2021/07/brunch-photo-1280x0-c-default.webp"},
  {type: "Wine Tasting", img: "https://s.hdnux.com/photos/01/30/77/61/23329894/5/1100x0.jpg"}
];

export default function Events() {
  return (
    <>
      <h1>Events</h1>
      <Eventstyles>
        {eventTypes?.map(event => (
          <div key={event.type}>
            <img src={event.img} alt={event.type}/>
            <h2>{event.type}</h2>
          </div>
        ))}
      </Eventstyles>
      <EventSummaryStyles>
        Pretium aenean pharetra magna ac placerat. Viverra maecenas accumsan lacus vel. Et tortor
        at risus viverra adipiscing at. Molestie ac feugiat sed lectus vestibulum. Libero justo laoreet 
        sit amet. Non pulvinar neque laoreet suspendisse interdum. Volutpat maecenas volutpat blandit 
        aliquam etiam erat. Vel eros donec ac odio tempor. At consectetur lorem donec massa sapien. In 
        tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Fusce ut placerat orci nulla 
        pellentesque dignissim enim sit. Duis convallis convallis tellus id interdum velit laoreet id
      </EventSummaryStyles>
    </>
  );
}
