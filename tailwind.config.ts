import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-50': '#F9F5FF',
        'brand-100': '#F4EBFF',
        'brand-200': "#E9D7FE",
        'brand-600': '#7F56D9',
        'brand-700': '#6941C6',

        'gray-600': '#535862',

      }
    },
  },
  plugins: [],
} satisfies Config;
