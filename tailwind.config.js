/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        "slide-in-bottom": "slide-in-bottom 2s cubic-bezier(0.550, 0.085, 0.680, 0.530) 3s   ",
        "fade-in-bck": "fade-in-bck 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s  both",
        "fade-in-top_text": "fade-in-bck 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 2s  both"
      },
      keyframes: {
        "slide-in-bottom": {
          "0%": {
            transform: "translateY(1000px)",
            opacity: "0"
          },
          to: {
            transform: "translateY(0)",
            opacity: "1"
          }
        },
        "fade-in-bck": {
                    "0%": {
                        transform: "translateZ(80px)",
                        opacity: "0"
                    },
                    to: {
                        transform: "translateZ(0)",
                        opacity: "1"
                    }
                },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      
      },
    },
    plugins: [],
  }
}