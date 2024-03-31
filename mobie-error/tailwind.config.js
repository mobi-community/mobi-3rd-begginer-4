/** @type {import('tailwindcss').Config} */
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "./src/consts/design-token"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...COLORS,
      },
      fontSize: FONT_SIZE,
      fontWeight: FONT_WEIGHT,
    },
  },
  plugins: [],
}
