import React, { useState } from 'react';
import axios from 'axios'; // for making HTTP requests, you may need to install it using npm or yarn
import './styles.css';

  


function App() {
  // const [selectedModel, setSelectedModel] = useState('Random Forest Regressor');
  const [kmDriven, setKmDriven] = useState(0);
  const [year, setYear] = useState(0);
  const [fuelType, setFuelType] = useState('Petrol');
  const [sellerType, setSellerType] = useState('Individual');
  const [owner, setOwner] = useState('First Owner');
  const [transmission, setTransmission] = useState('Manual');
  const [manufacturer, setManufacturer] = useState('Maruti');
  const [prediction, setPrediction] = useState(null);
  const maxYear = 30;
  const maxdriven = 1000000;
  const selectedModel = "AdaBoost Regressor"


  const handleSubmit = () => {
    // Construct the data object to be sent to the backend
    const data = {
      selectedModel,
      kmDriven,
      year,
      fuelType,
      sellerType,
      owner,
      transmission,
      manufacturer
    };

    // Make a POST request to the backend to get the prediction
    axios.post('http://localhost:5000/predict', data)
      .then(response => {
        setPrediction(response.data.prediction);
        window.alert(`Estimated selling price is: ${response.data.prediction}`);

      })
      .catch(error => {
        console.error('Error fetching prediction:', error);
      });
  };

  return (



    <div>


      <h1>Car Selling Price Prediction</h1>
      <div>
        {/* <label>
           Machine Learning model:AdaBoost Regressor 
          <select value={selectedModel} onChange={e => setSelectedModel(e.target.value)}>
            <option value="AdaBoost Regressor">AdaBoost Regressor</option>
            <option value="Random Forest Regressor">Random Forest Regressor</option>
            <option value="Bagging Regressor">Bagging Regressor</option>
            <option value="AdaBoost Regressor 2">AdaBoost Regressor 2</option>
          </select>
        </label> */}
      </div>
      <div>
        <label>
          Total KM Driven (Between  0-1000000 )
          <input
            type="number"
            value={kmDriven}
            onChange={e => setKmDriven(Math.min(parseInt(e.target.value), maxdriven))}
            max={maxdriven}
            min={0}
          />
        </label>
      </div>
      <div>
        <label>
          Year (Old):  maximum limit = 30
          <input
            type="number"
            value={year}
            onChange={e => setYear(Math.min(parseInt(e.target.value), maxYear))}
            max={maxYear}
            min={0}
          />
        </label>
      </div>
      <div>
        <label>
          Fuel Type:
          <select value={fuelType} onChange={e => setFuelType(e.target.value)}>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="CNG">CNG</option>
            <option value="LPG">LPG</option>
            <option value="Electric">Electric</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Seller Type:
          <select value={sellerType} onChange={e => setSellerType(e.target.value)}>
            <option value="Individual">Individual</option>
            <option value="Dealer">Dealer</option>
            <option value="Trustmark Dealer">Trustmark Dealer</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Owner:
          <select value={owner} onChange={e => setOwner(e.target.value)}>
            <option value="First Owner">First Owner</option>
            <option value="Second Owner">Second Owner</option>
            <option value="Third Owner">Third Owner</option>
            <option value="Fourth & Above Owner">Fourth & Above Owner</option>
            <option value="Test Drive Car">Test Drive Car</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Transmission:
          <select value={transmission} onChange={e => setTransmission(e.target.value)}>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Car Manufacturer:
          <select value={manufacturer} onChange={e => setManufacturer(e.target.value)}>
            <option value="Maruti">Maruti</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Mahindra">Mahindra</option>
            <option value="Tata">Tata</option>
            <option value="Ford">Ford</option>
            <option value="Honda">Honda</option>
            <option value="Toyota">Toyota</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Renault">Renault</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Nissan">Nissan</option>
            <option value="Skoda">Skoda</option>
            <option value="Fiat">Fiat</option>
            <option value="Audi">Audi</option>
            <option value="Datsun">Datsun</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
          </select>
        </label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {prediction && <p>Estimated selling price is: {prediction}</p>}
    </div>
  );
}

export default App;
