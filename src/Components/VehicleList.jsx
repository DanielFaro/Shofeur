import styled from 'styled-components';
import Vehicle from './Vehicle';
import { useState, useEffect } from 'react';
import { vehicleTypes } from '../types';
import { eventTypes } from '../types';

const FilterStyles = styled.form`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin-bottom: 30px;
  font-size: 2rem;
  margin: 20px 0px;
  select, input {
      margin-left: 10px;
      font-size: 2rem;
      border: 1px solid black;
      padding: 5px;
    }

  button {
    padding: 5px;
    font-size: 2rem;
  }


  .dropdowns {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
  
   
  }

`
const VehiclesListStyles = styled.div`
  top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 60px;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
  margin: 50px 0px;
`;

// VehiclesList displays available rentals per filter state
export default function VehiclesList({ vehicles }) {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [vehicle, setVehicle] = useState('All');
  const [event, setEvent] = useState('Any');
  const [size, setSize] = useState(1);
  const [smoking, setSmoking] = useState(false);
  const handleVehicleChange = (e) => {setVehicle(e.target.value); filterRentals(e.target.value, event, size, smoking)};
  const handleEventChange = (e) => { setEvent(e.target.value); filterRentals(vehicle, e.target.value, size, smoking ) }
  const handleSizeChange = (e) => { setSize(e.target.value);}
  const handleSize = (e) => {
    e.preventDefault();
    filterRentals(vehicle, event, size, smoking);
  };
  const handleSmokingChange = () => { 
    setSmoking(!smoking);
    filterRentals(vehicle, event, size, !smoking);
  };
  const handleReset = () => { 
    setFilteredVehicles(vehicles); 
  setEvent('Any'); setVehicle('All'); setSize(1); setSmoking(false)
};

// on initial load filteredVehicles is set to the complete available rental list i.e. vehicles
  useEffect(() => {
    setFilteredVehicles(vehicles);
  },[vehicles]);


  // filterFentals filters vehicles list based on user entry kept in component state above
  const filterRentals = (vehicle, event, size, smoking) => {
    let newFilteredVehicles;

   if (vehicle === 'All' && event === 'Any') {
    newFilteredVehicles = filteredVehicles.filter((mode) => {
      return mode.size >= size && mode.smoking === smoking
    })
  } else if (vehicle === 'All') {
      newFilteredVehicles = vehicles.filter((mode) => {
        return mode.size >= size && mode.smoking === smoking && mode.event_type.includes(event) 
      })
   } else if (event === 'Any') {
      newFilteredVehicles = vehicles.filter((mode) => {
        return mode.size >= size && mode.smoking === smoking && mode.vehicle_type === vehicle
      })
    } else {
      newFilteredVehicles = vehicles.filter((mode) => {
        return mode.size >= size && mode.smoking === smoking && mode.vehicle_type === vehicle && mode.event_type.includes(event)
      })
    }
    setFilteredVehicles(newFilteredVehicles);
  }

  return (
    <>
      <header>Vehicles</header>
      <FilterStyles onSubmit={handleSize}>
        <div className="dropdowns">
          <label>
            <b>Vehicle Type</b>
            <select value={vehicle} onChange={handleVehicleChange}>
            {
                vehicleTypes.map((vehicle) => <option value={vehicle}>{vehicle}</option>)
            }
            </select>
          </label>
          <label>
            <b>Event Type</b>
            <select value={event} onChange={handleEventChange}>
            {
                eventTypes.map((event) => <option value={event}>{event}</option>)
            }
            </select>
          </label>
          <label>
            <b>Seats</b>
            <input type="number" value={size} style={{width: "60px"}}onChange={handleSizeChange} />
            <input type="submit" />
          </label>
          <label>
            <b>Smoking</b>
            <input type="checkbox" checked={smoking} onClick={handleSmokingChange} />
          </label>
          <button type="button" onClick={handleReset}>
            <b>Reset</b>
          </button>
        </div>
      </FilterStyles>
      <VehiclesListStyles>
        {
        filteredVehicles?.map(vehicle => (
          <Vehicle key={vehicle.id} vehicle={vehicle} />
        ))}
      </VehiclesListStyles>
    </>
  );
}
