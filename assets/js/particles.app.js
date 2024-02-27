
Particles.
init
({

    selector:
        '.background'
    ,
    maxParticles:
        450
    ,

    responsive: [
        {
            breakpoint: 5000,
            options: {
                maxParticles: 120,
                color: '#FFFFFF',
                connectParticles: true
            }
        },
        {
            breakpoint: 768,
            options: {
                maxParticles: 80,
                color: '#FFFFFF',
                connectParticles: true
            }
        }, {
            breakpoint: 425,
            options: {
                maxParticles: 50,
                connectParticles: true
            }
        }, {
            breakpoint: 320,
            options: {
                maxParticles: 0

// disables particles.js
            }
        }
    ]
});