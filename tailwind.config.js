/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Bebas Neue', 'serif'], // J'ai retiré le 'serif' en trop, Bebas Neue est sans-serif
        subheading: ['Ballet', 'cursive'],
      },
      colors: {
        'brand-primary': '#B40000',
        'brand-secondary': '#F50000',
        'brand-accent': '#8F0000', // C'est ce qui devrait colorer ton SVG loader si tu utilises currentColor
        'brand-alternativepurple': '#631d76',
        'brand-alternativedark': '#201a23',
        'brand-yellow': '#FFD800',
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'wobble-sticker': 'wobble-sticker-kf 4s ease-in-out infinite 1s', // Renommé le keyframe pour éviter conflit
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'wobble-sticker-kf': { // Renommé ici aussi
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-2deg)' },
          '75%': { transform: 'rotate(2deg)' },
        }
      }
    } // ferme extend
  }, // ferme theme
  plugins: [],
}