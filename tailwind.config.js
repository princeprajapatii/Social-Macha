module.exports = {
  theme: {
    extend: {
      keyframes: {
        marqueeRightToLeft: {
          '0%': { transform: 'translateX(100%)' },   // ⬅ start off-screen right
          '100%': { transform: 'translateX(-100%)' } // ⬅ exit off-screen left
        },
      },
      animation: {
        marquee: 'marqueeRightToLeft 25s linear infinite',
      },
    },
  },
};
