import React, { useState } from 'react';
import { RegionDropdown } from 'react-country-region-selector';
import './RegistrationForm.css';

const latamCountries = [
  { value: 'Argentina', label: 'Argentina' }, 
  { value: 'Belize', label: 'Belice' },
  { value: 'Bolivia', label: 'Bolivia' },
  { value: 'Brasil', label: 'Brasil' },
  { value: 'Chile', label: 'Chile' },
  { value: 'Colombia', label: 'Colombia' },
  { value: 'Costa Rica', label: 'Costa Rica' },
  { value: 'Ecuador', label: 'Ecuador' },
  { value: 'El Salvador', label: 'El Salvador' },
  { value: 'Guatemala', label: 'Guatemala' },
  { value: 'Guyana', label: 'Guyana' },
  { value: 'Honduras', label: 'Honduras' },
  { value: 'Mexico', label: 'México' },
  { value: 'Nicaragua', label: 'Nicaragua' },
  { value: 'Panama', label: 'Panamá' },
  { value: 'Paraguay', label: 'Paraguay' },
  { value: 'Peru', label: 'Perú' },
  { value: 'Suriname', label: 'Surinam' },
  { value: 'Uruguay', label: 'Uruguay' },
  { value: 'Venezuela', label: 'Venezuela' }
];

const RegistrationForm = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedInterests, setSelectedInterests] = useState([]); // Para múltiples intereses
  const [statusMessage, setStatusMessage] = useState('');  // Mensaje de éxito o error
  const [showInterests, setShowInterests] = useState(false);  // Controla si la lista de intereses es visible

  // Lista de intereses
  const interests = [
    "Desarrollo de Software", "Desarrollo Web", "Ciencia de Datos", 
    "Inteligencia Artificial y Machine Learning", "Ciberseguridad", "Blockchain",
    "Desarrollo de Aplicaciones Móviles", "Análisis de Datos", "Internet de las Cosas (IoT)",
    "Big Data", "Cloud Computing", "Realidad Virtual y Aumentada", "Gestión de Proyectos Tecnológicos",
    "DevOps", "Diseño UX/UI", "Bases de Datos y SQL", "Emprendimiento Tecnológico"
  ];

  const selectCountry = (e) => {
    setCountry(e.target.value);
  };

  const selectRegion = (val) => {
    setRegion(val);
  };

  // Actualiza los intereses seleccionados
  const handleInterestsChange = (e) => {
    const interest = e.target.value;
    if (e.target.checked) {
      setSelectedInterests([...selectedInterests, interest]); // Añadir si está marcado
    } else {
      setSelectedInterests(selectedInterests.filter(item => item !== interest)); // Quitar si está desmarcado
    }
  };
  
  const toggleInterests = () => {
    setShowInterests(!showInterests);  // Cambia entre mostrar/ocultar la lista
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://apetech-uruguay.org/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          country,
          region,
          interests: selectedInterests
        })
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const data = await response.json();
      setStatusMessage(data.message || 'Usuario registrado con éxito');
    } catch (error) {
      setStatusMessage('Error: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <label>Nombre:</label>
      <input 
        type="text" 
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)} 
        required 
      />

      <label>Apellido:</label>
      <input 
        type="text" 
        value={lastName}
        onChange={(e) => setLastName(e.target.value)} 
        required 
      />

      <label>Correo Electrónico:</label>
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />

      <label>País:</label>
      <select value={country} onChange={selectCountry} required>
        <option value="">Selecciona tu país</option>
        {latamCountries.map((country) => (
          <option key={country.value} value={country.value}>
            {country.label}
          </option>
        ))}
      </select>

      <label>Ciudad/Región:</label>
      <RegionDropdown
        country={country}
        value={region}
        onChange={selectRegion} 
        required
      />

      <button type="button" onClick={toggleInterests} className="toggle-interests">
        {showInterests ? 'Ocultar Intereses' : 'Mostrar Intereses'}
      </button>

      {showInterests && (
        <div className="interests-container">
          {interests.map((interest) => (
            <label key={interest} className="interest-item">
              <input type="checkbox" value={interest} onChange={handleInterestsChange} />
              {interest}
            </label>
          ))}
        </div>
      )}

      <button type="submit">Registrarse</button>
      
      {/* Mostrar mensaje de éxito o error */}
      {statusMessage && <p>{statusMessage}</p>}
    </form>
  );
};

export default RegistrationForm;






