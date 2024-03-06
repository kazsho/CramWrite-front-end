import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    environment: 'jsdom',
  }
})

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
