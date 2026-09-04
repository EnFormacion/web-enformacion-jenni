// ===== HAMBURGER MENU =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Cerrar menú al hacer click en un link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});

// ===== FILTROS CURSOS =====
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cursoCards = document.querySelectorAll('.curso-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Quitar clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir clase active al botón clickeado
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            // Filtrar tarjetas
            cursoCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else if (card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });
});

// ===== FILTROS GALERIA =====
document.addEventListener('DOMContentLoaded', function() {
    const filterButtonsGaleria = document.querySelectorAll('.filter-btn-galeria');
    const galeriaItems = document.querySelectorAll('.galeria-item');

    filterButtonsGaleria.forEach(button => {
        button.addEventListener('click', function() {
            // Quitar clase active de todos los botones
            filterButtonsGaleria.forEach(btn => btn.classList.remove('active'));
            // Añadir clase active al botón clickeado
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter-galeria');

            // Filtrar items
            galeriaItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                    setTimeout(() => item.style.opacity = '1', 50);
                } else if (item.getAttribute('data-category-galeria') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => item.style.opacity = '1', 50);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => item.style.display = 'none', 300);
                }
            });
        });
    });
});

// ===== LIGHTBOX =====
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    
    if (lightbox) {
        lightbox.classList.add('active');
        lightboxImage.src = imageSrc;
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (lightbox) {
        // Cerrar lightbox al hacer click en la X
        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }

        // Cerrar lightbox al hacer click fuera de la imagen
        lightbox.addEventListener('click', function(event) {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });

        // Cerrar lightbox con tecla ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeLightbox();
            }
        });
    }
});

// ===== FORMULARIO CONTACTO =====
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioContacto');

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();

            // Obtener valores del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const asunto = document.getElementById('asunto').value;
            const curso = document.getElementById('curso').value;
            const mensaje = document.getElementById('mensaje').value;

            // Validación básica
            if (!nombre || !email || !asunto || !mensaje) {
                alert('Por favor, completa los campos requeridos.');
                return;
            }

            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un email válido.');
                return;
            }

            // Aquí irían los datos hacia un servidor
            // Por ahora mostramos un mensaje de éxito
            console.log('Formulario enviado:', {
                nombre,
                email,
                telefono,
                asunto,
                curso,
                mensaje
            });

            // Mensaje de éxito
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
            
            // Limpiar formulario
            formulario.reset();
        });
    }
});

// ===== SCROLL SUAVE PARA NAVEGACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ===== ANIMACIÓN AL SCROLL (Opcional) =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.feature-card, .blog-card, .curso-card, .value-card, .testimonio-card, .team-card, .facility-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== ACTIVO EN NAVBAR SEGÚN PÁGINA =====
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ===== FUNCIONES ÚTILES =====

// Función para agregar efecto hover a botones
function setupButtonEffects() {
    const buttons = document.querySelectorAll('.btn, .btn-curso, .btn-lightbox');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

document.addEventListener('DOMContentLoaded', setupButtonEffects);

// Función para detectar dispositivo móvil
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ===== EFECTO PARALLAX (Opcional, solo en desktop) =====
if (!isMobileDevice()) {
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        
        // Efecto en hero
        const heroOverlay = document.querySelector('.hero-overlay');
        if (heroOverlay) {
            heroOverlay.style.transform = `translateY(${scrollTop * 0.5}px)`;
        }
    });
}

// ===== LOG DE CARGA =====
console.log('🚀 En-Formación - Página cargada correctamente');
console.log('📱 Dispositivo móvil:', isMobileDevice());
/* ===== FILTROS GALERIA ===== */
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn-galeria');
    const galeriaItems = document.querySelectorAll('.galeria-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter-galeria');

            // Filtrar y mostrar/ocultar imágenes
            galeriaItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.6s ease both';
                } else {
                    const category = item.getAttribute('data-category-galeria');
                    if (category === filterValue) {
                        item.style.display = 'block';
                        item.style.animation = 'fadeInUp 0.6s ease both';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
});

/* ===== LIGHTBOX ===== */
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    lightboxImage.src = imageSrc;
    lightbox.classList.add('active');
}

// Cerrar lightbox al hacer clic en la X
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.lightbox-close');

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            lightbox.classList.remove('active');
        });
    }

    // Cerrar lightbox si haces clic fuera de la imagen
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            lightbox.classList.remove('active');
        }
    });
});