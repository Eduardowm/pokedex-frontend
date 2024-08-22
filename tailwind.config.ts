import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/modules/**/*.{js,ts,tsx}",
    "./src/shared/**/*.{js,ts,tsx}",
    "./src/app/**/*.{js,ts,tsx}",
  ],
  plugins: [],
};
export default config;
