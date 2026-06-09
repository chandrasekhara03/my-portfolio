import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import emailjs from '@emailjs/browser'; // Import EmailJS

function App() {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending message...');

    // ID Resmi milik akun EmailJS Chandra
    const serviceID = 'service_88yevk9';
    const templateID = 'template_5ou6dyi';
    
    const publicKey = 'mPD-Aa-MT0trml2y1';

    // Menyusun data sesuai dengan variabel {{ }} di template EmailJS
    const templateParams = {
      from_name: formData.name, // Mengisi {{from_name}} di template EmailJS
      message: formData.message,   // Mengisi {{message}} di template EmailJS
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Message sent successfully to Chandra! 🚀');
        setFormData({ name: '', message: '' });
      }, (error) => {
        console.log('FAILED...', error);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">CS<span>.</span></div>
        <div className="nav-links">
          <a href="#about" className="nav-item">About</a>
          <a href="#projects" className="nav-item">Projects</a>
          <a href="#contact" className="nav-item">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero entry-animation">
        <p className="hero-sub">Hi, my name is</p>
        <h1 className="hero-title">Chandra Sekhara<span>.</span></h1>
        <h2 className="hero-tagline">Full-Stack Programmer</h2>
        <p className="hero-desc">
          I build efficient, interactive, and impactful end-to-end digital solutions. Experienced in developing modern web architectures 
          handling both client-side presentation and robust server backend logic.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">Explore My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section entry-animation animate-delay-1">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I am a software engineering enthusiast dedicated to creating structured and optimized web technologies. 
            Notably, I completed a **6-month internship at PT Kanisius Yogyakarta as a Full Stack Programmer**, 
            where I gained valuable hands-on corporate experience designing and maintaining core corporate workflow platforms.
          </p>
          
          <div className="fun-facts">
            <h3>Fun Facts & Core Values ✨</h3>
            <ul>
              <li>Passionate about complex logic structures and system computational optimization rather than just static design layouts.</li>
              <li>Thrive in active development environments and open collaborative open-source team pipelines.</li>
              <li>Prioritize writing highly maintainable, clean, and easily expandable software architectures.</li>
            </ul>
          </div>
        </div>

        <div className="skills-container">
          <span className="skill-tag">JavaScript (ES6+)</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">Node.js</span>
          <span className="skill-tag">Express</span>
          <span className="skill-tag">PHP / CodeIgniter</span>
          <span className="skill-tag">Laravel</span>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-card-dark entry-animation animate-delay-2">
        <h2 className="section-title">Featured Projects</h2>
        <div className="project-grid">
          
          {/* Project 1: USDGetJob */}
          <div className="project-card">
            <div className="project-icon">🚀</div>
            <h3>USDGetJob</h3>
            <p className="project-place">Job Vacancy Platform</p>
            <p>Built a modern job directory application utilizing React for interactive layout state management and Node.js backend integration for dynamic job posting feeds.</p>
            <div className="project-tags">
              <span>React</span>
              <span>Node.js</span>
            </div>
          </div>

          {/* Project 2: CRM */}
          <div className="project-card">
            <div className="project-icon">💼</div>
            <h3>Client Relationship Management (CRM)</h3>
            <p className="project-place">PT Kanisius Yogyakarta (Internship Project)</p>
            <p>Developed a dedicated CRM framework architecture to centralize business data management pipelines, consumer communication touchpoints, and transaction histories.</p>
            <div className="project-tags">
              <span>PHP</span>
              <span>CodeIgniter</span>
            </div>
          </div>

          {/* Project 3: Helpdesk */}
          <div className="project-card">
            <div className="project-icon">🛠️</div>
            <h3>Infrastructure Helpdesk System</h3>
            <p className="project-place">PT Kanisius Yogyakarta (Internship Project)</p>
            <p>Designed and deployed an internal reporting ticket mechanism supporting company facility monitoring, structural inventory tracking, and swift engineering task distribution.</p>
            <div className="project-tags">
              <span>PHP</span>
              <span>CodeIgniter</span>
            </div>
          </div>

          {/* Project 4: Web Komik */}
          <div className="project-card">
            <div className="project-icon">🎨</div>
            <h3>Web Comic Platform</h3>
            <p className="project-place">Independent Project</p>
            <p>Programmed an intuitive content delivery hub showcasing illustrations and sequential graphic story pages, heavily structured on robust Laravel MVC protocols.</p>
            <div className="project-tags">
              <span>Laravel</span>
              <span>MVC Architecture</span>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section entry-animation animate-delay-3">
        <h2 className="section-title">Contact</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>Looking for a dependable developer or interested in collaborating on a future build? Reach out anytime via the channels below:</p>
            
            <div className="social-icons-grid">
              <a href="https://wa.me/6285727120659" target="_blank" rel="noopener noreferrer" className="icon-box" title="WhatsApp">
                <FaWhatsapp className="icon-graphic" />
                <span>085727120659</span>
              </a>
              
              <a href="mailto:chandrasekhara176@gmail.com" className="icon-box" title="Email">
                <FiMail className="icon-graphic" />
                <span>chandrasekhara176@gmail.com</span>
              </a>

              <a href="https://www.instagram.com/decandraa.s/" target="_blank" rel="noopener noreferrer" className="icon-box" title="Instagram">
                <FaInstagram className="icon-graphic" />
                <span>@decandraa.s</span>
              </a>

              <a href="https://www.linkedin.com/in/chandra-sekhara-97a2ba296" target="_blank" rel="noopener noreferrer" className="icon-box" title="LinkedIn">
                <FaLinkedin className="icon-graphic" />
                <span>Chandra Sekhara</span>
              </a>

              <a href="https://www.tiktok.com/@decanacu?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="icon-box" title="TikTok">
                <FaTiktok className="icon-graphic" />
                <span>@decanacu</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <input 
              type="text" 
              placeholder="Your Name / Institution" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required 
            />
            <textarea 
              placeholder="Write your message here..." 
              rows="6"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary btn-submit">Send Message</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Chandra Sekhara. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;