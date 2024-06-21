import React, { useEffect, useState } from 'react'
import './AdvancedFilter.css'

const getUniqueValues = (list, key) => {
  return [...new Set(list.map(item => item[key]))];
};

const AdvanceFilter = ({ data, onFilterUpdate }) => {
  const [location, setLocationChange] = useState("");
  const [property, setPropertyChange] = useState("");
  const [bedrooms, setBedroomsChange] = useState("");
  const [sliderValue, setSliderValue] = useState("");
  const [activeTenure, setActiveTenure]=useState('');
  const [priceMin, setPriceMin]=useState(0);

  const propertyTypes = getUniqueValues(data, "type");
  const locations = getUniqueValues(data, "city");
  const bedrooms_data = getUniqueValues(data, "bedrooms");


  const handlePropertyChange = (event) => {
    setPropertyChange(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocationChange(event.target.value);
  };

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value));
  };

  const handleTenureClick=(tenure)=>{
    setActiveTenure(tenure);
  }

  const handleMinPrice=(event)=>{
    setPriceMin(parseInt(event.target.value));
  }
  const handleMaxPrice=(event)=>{
    setSliderValue(parseInt(event.target.value));
  }

  const handleBedroomsChange=(event)=>{
    setBedroomsChange(event.target.value);
  }

  useEffect(() => {
    const filtered = data.filter(item => {
      const matchesCategory = !activeTenure || item.category === activeTenure;
      const matchesType = !property || item.type === property;
      const matchesLocation = !location || item.city === location;
      const matchesBedrooms = !bedrooms || item.bedrooms === parseInt(bedrooms); // Ensure bedrooms are compared as numbers
      const matchesMinPrice = !priceMin || item.price >= priceMin;
      const matchesMaxPrice=  !sliderValue || item.price <= sliderValue;
      return matchesCategory && matchesType&&matchesLocation&&matchesLocation&&matchesBedrooms&&matchesMinPrice&&matchesMaxPrice;
    });

    onFilterUpdate(filtered);
  }, [location, property, bedrooms, sliderValue, activeTenure, priceMin, data, onFilterUpdate]);

  return (
    <div className="card">
      <div className='tenure-filter'>
        <ul>
          <li
          className={activeTenure === 'rent' ? 'active' : ''}
          value="rent"
          onClick={()=>handleTenureClick('rent')}
          >For Rent</li>
          <li
          className={activeTenure === 'sale' ? 'active' : ''}
          value="buy"
          onClick={()=>handleTenureClick('sale')}
          >For Buy</li>
          <li
          className={activeTenure === 'land' ? 'active' : ''}
          value="land"
          onClick={()=>handleTenureClick('land')}
          >Land</li>
        </ul>
      </div>
      <div className="dropdown-container">
      <select value={property} onChange={handlePropertyChange}>
      <option value="" >Select Property type</option>
        {propertyTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>

        <select value={location} onChange={handleLocationChange} >
          <option value="">Select Location</option>
         
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
        <select value={bedrooms} onChange={handleBedroomsChange} >
          <option value="">No of Bedrooms</option>
          {bedrooms_data.map((bedroom, index)=>(
            <option key={index} value={bedroom}>
              {bedroom}
            </option>
          ))}
        </select>
      </div>

      <div className="slider-container">
      <span className="slider-value"> price:  Ksh {priceMin} - {sliderValue}</span>

        <input
          type="range"
          min="20000"
          max="1000000000"
          value={sliderValue}
          onChange={handleSliderChange}
          className="size-slider"
        />
      </div>
      <div className='price-container' >
        <div className='price-input'>
        <label for='min-price'>Min Price:</label>
        <input
        name='min-price'
        type='number'
        value={priceMin}
        onChange={handleMinPrice}
        />
        </div>
        
        <div className='price-input'>
        <label htmlFor="max-price">Max Price:</label>
        <input
        name='max-price'
        type='number'
        value={sliderValue}
        onChange={handleMaxPrice}
        />
        </div>
        
      </div>
    </div>
  );
};




export default AdvanceFilter