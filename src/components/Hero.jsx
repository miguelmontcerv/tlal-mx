import React from "react";

const Hero = () => {
  return (
    <section style={{ textAlign: "center", padding: "4rem 2rem", backgroundColor: "#f5f5f5" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Bienvenido a [Nombre de la Startup]</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        [Breve descripción del producto o servicio que ofrece tu startup].
      </p>
      <button style={{ padding: "1rem 2rem", fontSize: "1rem", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>
        Conócenos
      </button>
    </section>
  );
};

export default Hero;