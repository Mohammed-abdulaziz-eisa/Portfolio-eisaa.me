import React, { useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  useEffect(() => {
    const createStars = () => {
      const starsContainer = document.createElement('div');
      starsContainer.className = 'stars';
      for (let i = 0; i < 1000; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.animationDuration = `${Math.random() * 5 + Math.random() * 5}s`;
        starsContainer.appendChild(star);
      }
      document.body.appendChild(starsContainer);
    };

    createStars();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="content-wrapper">
        <div className="container mx-auto px-4 py-8">
          <main className="space-y-6">
            <h1 className="text-center text-xl text-gray-500 italic py-4">

              I'm a Machine Learning Engineer who transforms ideas into data-driven solutions and real-world software. I help founders take projects from concept to launch, building scalable products users love.
            </h1>
            
            <p className="text-lg text-center leading-relaxed">
              Jack of all trades, master of some. I explore new technologies and use the best tools for each problem.
            </p>
          </main>
          
          <footer className="text-center space-y-4 mt-8">
            <p className="text-lg leading-relaxed">
              Reach me at{' '}
              <a href="mailto:mohamed.abdulaziz.eisa@gmail.com" className="hover:underline">
              mohamed.abdulaziz.eisa@gmail.com
              </a>
              {' '}or {' '}
              <a href="https://www.linkedin.com/in/mohamedeisa100/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </p>
            
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/Mohammed-abdulaziz-eisa" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/mohamedeisa100/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:mohamed.abdulaziz.eisa@gmail.com" className="text-white hover:text-gray-300">
                <Mail size={24} />
              </a>
            </div>
          </footer>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500 italic py-4">
        So long, and thanks for all the fish! 🐬
      </div>
    </div>
  );
}

export default App;