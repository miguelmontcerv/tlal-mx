import React from "react";
import './styles.css';

function App() {
  return (
    <div style={{ fontFamily: "'Arial', sans-serif", lineHeight: 1.6, margin: 0, padding: 0 }}>
      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "4rem 2rem",
          backgroundColor: "#000000",
          color: "#fff",
          backgroundImage: "url('/images/hero-banner-2.jpg')", // Imagen de fondo para el Hero
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Te ayudamos a viajar, estudiar y vivir en la Ciudad de México</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Encuentra universidades, hospedaje, seguros y todo lo que necesitas para disfrutar tu experiencia de intercambio en la ciudad.
        </p>
        <button
          style={{
            padding: "1rem 2rem",
            fontSize: "1rem",
            backgroundColor: "#fff",
            color: "#000000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ¡Contáctanos!
        </button>
      </section>

      {/* Servicios Section */}
      <section style={{ padding: "4rem 2rem", backgroundColor: "#f5f5f5" }}>
        <h2 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "2rem" }}>Nuestros Servicios</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
          {[
            "Universidades",
            "Hospedaje",
            "Seguros",
            "Trámites de Visa",
            "Recomendaciones de restaurantes",
            "Viajes y turismo",
            "Disfruta al máximo la CDMX",
          ].map((service, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 200px",
                margin: "1rem",
                padding: "1rem",
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                backgroundImage: `url('/images/service-${index + 1}.jpg')`, // Imagen para cada servicio
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#fff",
              }}
            >
              <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>{service}</h3>
              <p style={{ fontSize: "0.9rem" }}>
                Conoce más sobre cómo te ayudamos con {service.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Beneficios Section */}
      <section style={{ padding: "4rem 2rem", backgroundColor: "#fff" }}>
        <h2 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "2rem" }}>¿Por qué elegirnos?</h2>
        <ul style={{ maxWidth: "800px", margin: "0 auto", padding: "0", listStyle: "none" }}>
          {[
            "Acompañamiento personalizado en cada paso.",
            "Red de contactos confiables en la CDMX.",
            "Experiencia inigualable en el extranjero.",
          ].map((benefit, index) => (
            <li
              key={index}
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                backgroundColor: "#000000",
                borderRadius: "10px",
                //backgroundImage: `url('/images/benefit-${index + 1}.jpg')`, // Imagen para cada beneficio
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#fff",
              }}
            >
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonios Section */}
      <section
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#000000",
          color: "#fff",
          backgroundImage: "url('/images/testimonials-banner.jpg')", // Imagen de fondo para testimonios
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "2rem" }}>Lo que dicen nuestros estudiantes</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
          {[
            { name: "John Doe", comment: "¡Gracias a ustedes encontré mi universidad ideal en México!" },
            { name: "Jane Smith", comment: "El proceso de visa fue súper fácil con su ayuda." },
            { name: "Carlos López", comment: "La CDMX se siente como mi segunda casa gracias a sus recomendaciones." },
          ].map((testimonial, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 300px",
                margin: "1rem",
                padding: "1rem",
                backgroundColor: "#fff",
                color: "#000000",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p style={{ fontStyle: "italic" }}>"{testimonial.comment}"</p>
              <p style={{ textAlign: "right", fontWeight: "bold", marginTop: "1rem" }}>- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto Section */}
      <section style={{ padding: "4rem 2rem", backgroundColor: "#f5f5f5" }}>
        <h2 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "2rem" }}>¡Contáctanos!</h2>
        <form style={{ maxWidth: "600px", margin: "0 auto" }}>
          <input
            type="text"
            placeholder="Tu nombre"
            style={{
              width: "100%",
              padding: "1rem",
              margin: "0.5rem 0",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />
          <input
            type="email"
            placeholder="Tu correo"
            style={{
              width: "100%",
              padding: "1rem",
              margin: "0.5rem 0",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />
          <textarea
            placeholder="Tu mensaje"
            style={{
              width: "100%",
              padding: "1rem",
              margin: "0.5rem 0",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
            rows="5"
          ></textarea>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "1rem",
              backgroundColor: "#000000",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;