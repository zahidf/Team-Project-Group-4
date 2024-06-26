const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/admin.blade.php",
        "./resources/views/adminc.blade.php",
        "./resources/views/admino.blade.php",
        "./resources/views/adminp.blade.php",
        "./resources/views/Basket/ordersview.blade.php",
        "./resources/views/login.blade.php",
        "./resources/views/mail.blade.php",
        "./resources/views/admin/login.blade.php",
        "./resources/js/**/*.jsx",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
