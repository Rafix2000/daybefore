/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: { // C'est ici qu'on ajoute nos personnalisations
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], 
        heading: ['Bebas Neue', 'serif'],
        subheading: ['Ballet', 'cursive'],
      }, // ferme fontFamily
      colors: {
        'brand-primary': '#B40000',
        'brand-secondary': '#F50000',
        'brand-accent': '#8F0000',
        'brand-alternativepurple': '#631d76',
        'brand-alternativedark': '#201a23',
        'brand-yellow': '#FFD800',
      },
      animation: { // Nouvelle section
          marquee: 'marquee 30s linear infinite', // Nom de l'animation, durée, type, répétition
        },
        keyframes: { // Nouvelle section
          marquee: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-50%)' }, // Déplace de la moitié de la largeur (car on a dupliqué le contenu)
          }
        }
      },
    },
    plugins: [],
  }

