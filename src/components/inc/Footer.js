import React from 'react';


function Footer () {
    return (
      <footer className="bg-light text-center text-black">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="https://www.facebook.com/profile.php?id=100017343541063"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            
            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="https://www.instagram.com/sirotilov/"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="https://www.linkedin.com/in/victor-sirotilo-201159124/"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="https://github.com/vVictoRras?tab=repositories"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          class="text-center p-1 bg-light">
         
          © 2021 Copyright by Victor Sirotilo
          
        </div>
      </footer>
    );
    
};
export default Footer;