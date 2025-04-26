import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

export default function LandingPage() {
  const [email, setEmail] = useState('');

  return (
    <main className="landing">
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Conectamos a estudiantes con la Ciudad de México 🌆
        </motion.h1>
        <p className="hero-subtitle">
          Una plataforma para ayudarte con alojamiento, eventos, trámites, cultura, universidades y vida social en CDMX.
        </p>
        <div className="hero-image">
          {/* Aquí puedes agregar tu imagen principal */}
          <img src="/images/estudiantes-cdmx.jpg" alt="Estudiantes explorando CDMX" />
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <img src="/icons/home.svg" alt="Alojamiento" className="feature-icon" />
          <div>
            <h3>Alojamiento seguro y accesible</h3>
            <p>Encuentra opciones confiables cerca de tu universidad.</p>
          </div>
        </div>
        <div className="feature">
          <img src="/icons/events.svg" alt="Eventos" className="feature-icon" />
          <div>
            <h3>Eventos y recomendaciones locales</h3>
            <p>Explora la ciudad y conoce nuevas personas.</p>
          </div>
        </div>
        <div className="feature">
          <img src="/icons/info.svg" alt="Trámites" className="feature-icon" />
          <div>
            <h3>Guías de universidades, trámites y seguros</h3>
            <p>Toda la información necesaria en un solo lugar.</p>
          </div>
        </div>
        <div className="feature">
          <img src="/icons/community.svg" alt="Comunidad" className="feature-icon" />
          <div>
            <h3>Comunidad activa y asesoría personalizada</h3>
            <p>Recibe apoyo de otros estudiantes y mentores.</p>
          </div>
        </div>
      </section>

      <section className="signup">
        <h2>¿Te interesa? Únete a nuestra lista de espera 📬</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Gracias por registrarte, ${email}`);
            setEmail('');
          }}
          className="signup-form"
        >
          <input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Unirme</button>
        </form>
      </section>

      <footer className="footer">
        © 2025 tlal.mx – Todos los derechos reservados
      </footer>
    </main>
  );
}
