import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../pages/Articulo.css'; // Importar el archivo CSS correctamente

const Articulo = () => {
    const { id } = useParams(); // Obtener el ID del artículo desde la URL.
    const [article, setArticle] = useState(null); // Estado para el artículo.

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/articles/${id}`);
                setArticle(response.data); // Asignar el artículo al estado.
            } catch (err) {
                console.error("Error al cargar el artículo:", err);
            }
        };

        fetchArticle();
    }, [id]);

    if (!article) {
        return <p>Cargando artículo...</p>; // Mostrar mientras se cargan los datos.
    }