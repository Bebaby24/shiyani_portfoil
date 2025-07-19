document.addEventListener('DOMContentLoaded', function() {
    // Enhanced glitch effect for headers
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(el => {
        el.setAttribute('data-text', el.textContent);
        
        // Random glitch effect
        setInterval(() => {
            if (Math.random() > 0.95) {
                el.classList.add('glitch-active');
                setTimeout(() => {
                    el.classList.remove('glitch-active');
                }, 200);
            }
        }, 3000);
        
        // Hover effect
        el.addEventListener('mouseenter', () => {
            el.style.animationPlayState = 'running';
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.animationPlayState = 'paused';
        });
    });

    // Add scanlines to all cyber cards
    document.querySelectorAll('.cyber-card').forEach(card => {
        const scanline = document.createElement('div');
        scanline.className = 'scanline';
        card.appendChild(scanline);
    });
});