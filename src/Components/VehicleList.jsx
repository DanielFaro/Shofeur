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
  border: 1px dashed blue;
  margin-bottom: 30px;

`
const VehiclesListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;
  top: 80px;
`;




export default function VehiclesList({ vehicles }) {
  const [filteredVehicles, setFilteredVehicles] = useState(null);
  const [vehicle, setVehicle] = useState('Car');
  const [event, setEvent] = useState('Event');
  const [size, setSize] = useState(1);
  const [smoking, setSmoking] = useState(false);
  const handleVehicleChange = (e) => {setVehicle(e.target.value); filterByVehicle(e.target.value)};
  const handleEventChange = (e) => { setEvent(e.target.value); filterByEvent() }
  const handleSizeChange = (e) => setSize(e.target.value)
  const handleSize = (e) => {e.preventDefault()
    console.log("## handleSubmit clicked ==");
    filterBySize();
  };
  const handleSmokingChange = () => { 
    setSmoking(!smoking);
    filterBySmoking()
  };
  const handleReset = () => { setFilteredVehicles(vehicles); 
  setEvent('Event'); setVehicle('Car'); setSize(1); setSmoking(false)};

  useEffect(() => {
    setFilteredVehicles(vehicles);
  },[vehicles]);

// filtering might be hard to complets,
// for event type only include events which exist in vehicles
  const filterBySize = () => setFilteredVehicles(filteredVehicles.filter((vehicle) => vehicle.size >= size))
  const filterByVehicle = (type) => {console.log("#filterByVehicle", vehicle); setFilteredVehicles(filteredVehicles.filter((item) => item.vehicle_type === type))}
  const filterByEvent = () => {setFilteredVehicles(filteredVehicles.filter((vehicle) => vehicle.event_type.includes(event)))}
  const filterBySmoking = () => {setFilteredVehicles(filteredVehicles.filter((vehicle) => vehicle.smoking === smoking))}

  console.log("filtered vehicles =", filteredVehicles, vehicles);


  return (
    <>
      <h1>Rentals</h1>
      <FilterStyles onSubmit={handleSize}>
        <div className="dropdowns">
          <label>
            Vehicle Type
            <select value={vehicle} onChange={handleVehicleChange}>
            {
                vehicleTypes.map((vehicle) => <option value={vehicle}>{vehicle}</option>)
            }
            </select>
          </label>
          <label>
            Event Type
            <select value={event} onChange={handleEventChange}>
            {
                eventTypes.map((event) => <option value={event}>{event}</option>)
            }
            </select>
          </label>
          <label>
            Seats
            <input type="number" value={size} onChange={handleSizeChange} />
            <input type="submit" />
          </label>
          <label>
            Smoking
            <input type="checkbox" value={smoking} onClick={handleSmokingChange} />
          </label>
          <button type="button" onClick={handleReset}>
            Reset Filters
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
