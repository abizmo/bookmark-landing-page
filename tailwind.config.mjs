/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    },
    extend: {
      colors: {
        primary: {
          400: 'hsl(var(--clr-primary-400) / <alpha-value>)'
        },
        accent: {
          400: 'hsl(var(--clr-accent-400) / <alpha-value>)'
        },
        neutral: {
          100: 'hsl(var(--clr-neutral-100) / <alpha-value>)',
          400: 'hsl(var(--clr-neutral-400) / <alpha-value>)',
          900: 'hsl(var(--clr-neutral-900) / <alpha-value>)'
        }
      },
      fontFamily: {
        sans: 'var(--ff-sans)'
      },
      fontSize: {
        xs: '.8125rem',
        '4xl': '2rem'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
