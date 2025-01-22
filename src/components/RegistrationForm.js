import React, { useState } from 'react';
import { RegionDropdown } from 'react-country-region-selector';
import './RegistrationForm.css';
import { useNavigate } from 'react-router-dom';

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

const RegistrationForm = ({ webinarTitle }) => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedInterests, setSelectedInterests] = useState([]); // Para múltiples intereses
  const [webinarId, setWebinarId] = useState(''); // Asignar el ID del webinar
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
  
  // Función para seleccionar país
  const selectCountry = (e) => {
    setCountry(e.target.value);
  };

  // Función para seleccionar región
  const selectRegion = (val) => {
    setRegion(val);
  };

  // Actualiza los intereses seleccionados
  const handleInterestsChange = (e) => {
    const interest = e.target.value;
    if (e.target.checked) {
      setSelectedInterests((prev) => [...prev, interest]); // Añadir al arraydo
    } else {
      setSelectedInterests((prev) => prev.filter((item) => item !== interest)); // Quitar del array
    }
  };
  
  // Cambia entre mostrar/ocultar la lista de intereses
  const toggleInterests = () => {
    setShowInterests(!showInterests);
  };

  const navigate = useNavigate(); // Inicializa useNavigate


   // Función para limpiar el formulario
  const limpiarFormulario = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setCountry('');
    setRegion('');
    setSelectedInterests([]);
    setShowInterests(false);
  };

  // Validación de campos antes de enviar
  const validarFormulario = () => {
    if (!firstName || !lastName || !email || !country || !region) {
      setStatusMessage('Todos los campos son obligatorios.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatusMessage('Por favor, ingresa un correo electrónico válido.');
      return false;
    }
    return true;
  };

  // Manejo de envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
	console.log("Intereses seleccionados:", selectedInterests); // Verificar intereses

    if (!validarFormulario()) {
      return;
    }

    try {
      const registrationData = {
        firstName,
        lastName,
        email,
        country,
        region,
        interests: selectedInterests,
      };

      console.log("Datos de registro enviados:", registrationData);

      const response = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registrationData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setStatusMessage(`Error: ${errorData.error || 'Hubo un problema al registrar el usuario'}`);
        throw new Error('Error al registrar el usuario');
      }

      // Mensaje de éxito
      setStatusMessage(`¡Gracias por registrarte en el webinar "${webinarTitle}"!`);
      limpiarFormulario();
      navigate('/thank-you');
    } catch (error) {
      console.error('Error durante el registro:', error);
      setStatusMessage('Hubo un problema al procesar tu registro. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h3>Registro para el Webinar: {webinarTitle}</h3> {/* Mostrar título del webinar */}
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









