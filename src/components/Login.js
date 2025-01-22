import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleLogin = async () => {
  try {
    const response = await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Token recibido:', data.token);  // Verifica en la consola que el token se recibe correctamente
      localStorage.setItem('token', data.token);   // Guarda el token en localStorage
      localStorage.setItem('role', data.role);     // Guarda el rol en localStorage
      navigate('/admin');                          // Redirige al panel de administración
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    alert('Error en el servidor');
  }
};

  
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center', padding: '20px' }}>
      <h1>Login Administrador</h1>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />
      <button
        onClick={handleLogin}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Ingresar
      </button>
    </div>
  );
};

export default Login;

