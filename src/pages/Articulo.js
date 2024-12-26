import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Para obtener el parámetro de la URL.
import "./Blog.css"; // Asegúrate de incluir estilos necesarios.

const Articulo = () => {
	const { id } = useParams(); // Obtén el id del artículo desde la URL.
    const [article, setArticle] = useState(null); // Estado para guardar el artículo.
    const [error, setError] = useState(null); // Estado para manejar errores.
    const [loading, setLoading] = useState(true); // Estado para mostrar un cargador.

    useEffect(() => {
        // Función para obtener el artículo desde el backend.
        const fetchArticle = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/articles/${id}`);
                if (!response.ok) {
                    throw new Error("Error al obtener el artículo");
                }
                const data = await response.json();
                setArticle(data); // Actualizamos el estado con los datos del artículo.
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // Finalizamos el proceso de carga.
            }
        };
		if (id) {
            fetchArticle();
        } else {
            setError("ID de artículo no proporcionado");
            setLoading(false);
        }

    }, [id]); // Ejecuta el efecto cuando cambia el id.

    if (loading) return <p>Cargando artículo...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!article) return <p>No se encontró el artículo.</p>;
    return (
        <div className="blog-article-container">
            <div className="article-banner">
                <img src="https://res.cloudinary.com/dfzzoaw9l/image/upload/v1732727342/featured-blog_hffg8c.jpg" alt="Transformando vidas con tecnología" />
            </div>
            <div className="article-content">
                <h1>Transformando Vidas a Través de la Educación Tecnológica: Conoce a APETECH</h1>
                <p>
                    En el dinámico mundo actual, la tecnología es el motor que impulsa el progreso y la innovación. Sin embargo, el acceso a una educación tecnológica de calidad sigue siendo un desafío para muchos. Es en este contexto que nace la Asociación APETECH, fundada en 2024 con la misión de democratizar el aprendizaje tecnológico y eliminar las barreras que impiden a las personas alcanzar su máximo potencial.
                </p>
                <h2>¿Quiénes Somos?</h2>
                <p>
                    APETECH es una organización comprometida con la educación disruptiva y la inclusión tecnológica. Nuestro objetivo es ser un puente para todos aquellos que, sin importar su contexto social o económico, desean acceder a oportunidades de formación tecnológica de calidad. Creemos firmemente que la educación no debe tener barreras ni restricciones, y estamos convencidos de que cada persona tiene el potencial de aprender y crecer si cuenta con el acceso adecuado a los recursos y a una comunidad que los apoye.
                </p>
                <h2>Nuestra Propuesta</h2>
                <p>
                    Desde nuestros inicios, hemos formado una comunidad diversa de estudiantes, profesionales y entusiastas de la tecnología que creen en el aprendizaje continuo y el apoyo mutuo. Para nosotros, aprender no es solo adquirir conocimientos, es también colaborar, compartir y construir en conjunto un futuro mejor para todos.
                </p>
                <h2>Nuestros Principios Fundamentales</h2>
                <ul>
                    <li><strong>Inclusión:</strong> Creemos que la tecnología es para todos. Por eso, trabajamos para eliminar las barreras al aprendizaje, ofreciendo educación accesible y gratuita para aquellos que lo necesitan.</li>
                    <li><strong>Autonomía:</strong> Fomentamos el aprendizaje autodirigido, permitiendo a cada persona avanzar a su propio ritmo, descubriendo su propio camino y desarrollando habilidades clave para el mundo digital de hoy y del mañana.</li>
                    <li><strong>Colaboración:</strong> Nadie crece solo. En nuestra comunidad, el aprendizaje ocurre a través del intercambio de conocimientos, la mentoría entre iguales y el apoyo mutuo. Creemos que aprender es tanto una experiencia individual como colectiva.</li>
                    <li><strong>Innovación:</strong> Estamos comprometidos con la innovación continua. A través de la curiosidad y la creatividad, buscamos nuevas formas de acercar la tecnología a las personas y de hacer que el aprendizaje sea una experiencia emocionante y transformadora.</li>
                </ul>
                <h2>Nuestro Compromiso</h2>
                <p>
                    Nos comprometemos a seguir colaborando con instituciones, organizaciones y comunidades locales e internacionales para expandir el acceso a la educación tecnológica de alta calidad. Creemos que, mediante la tecnología, podemos crear un futuro más inclusivo, equitativo y próspero. Sabemos que el conocimiento empodera y transforma, y estamos aquí para asegurarnos de que todas las personas tengan la oportunidad de aprender y crecer, sin importar de dónde vienen.
                </p>
                <p>
                    Nuestro compromiso es con cada persona que, llena de curiosidad y determinación, se une a nuestra comunidad para explorar el mundo de la tecnología. Estamos aquí para acompañarlos en cada paso de su viaje de aprendizaje, brindando no solo conocimientos, sino también un espacio donde puedan colaborar, compartir y crecer juntos.
                </p>
                <p>
                    En APETECH, creemos que la educación es la clave para un futuro mejor. Te invitamos a unirte a nosotros en este emocionante viaje y a ser parte de una comunidad que valora la inclusión, la autonomía, la colaboración y la innovación.
                </p>
                <p><strong>¡Bienvenidos a APETECH!</strong></p>
            </div>
        </div>
    );
};

export default Articulo;
