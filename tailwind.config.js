/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                // sans: ["Quicksand"],
                // sans: ["Noto Sans Thai"],
                // sans: ["Itim"],
                sans: ["Mali"],
                // sans: ["Prompt"],
            },
            colors: {
                Primary: "#A872EE",
            },
        },
    },
    plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
