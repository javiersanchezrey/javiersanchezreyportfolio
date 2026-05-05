document.addEventListener('DOMContentLoaded', () => {

    const links = document.querySelectorAll('.links-imagenes');
    const overlays = document.querySelectorAll('.sobreponer-imagenes');
    const closeButtons = document.querySelectorAll('.boton-cerrar');

    // ABRIR PROYECTO
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();

        const id = link.dataset.project;
        const overlay = document.getElementById(id);

        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    // CERRAR PROYECTO
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        overlays.forEach(overlay => overlay.classList.remove('active'));
        document.body.style.overflow = '';
      });
    });

      overlays.forEach(overlay => {
        overlay.addEventListener('click', e => {
          if (e.target === overlay) {
              overlay.classList.remove('active');
              document.body.style.overflow = '';
        }
      });
});

  });


  document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const counter = document.getElementById('loader-count');

    let count = 0;

    const interval = setInterval(() => {
      count++;
      counter.textContent = count + '%';

      if (count >= 100) {
        clearInterval(interval);

        
        setTimeout(() => {
          loader.classList.add('hidden');
        }, 300);
      }
    }, 20); 
  });