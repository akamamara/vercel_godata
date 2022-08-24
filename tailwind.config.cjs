/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                white: {
                    DEFAULT: '#ffffff',
                    var: '#fbf4f1'
                },
                black: '#323232',
                yellow: {
                    DEFAULT: '#e0be59',
                    stroke: '#d5a71d'
                },
                primary: {
                    /* https://maketintsandshades.com/#2B6A66 */
                    DEFAULT: '#2b6a66',
                    darker: '#1e4a47'
                        // 'def-op10': '#2b6a660A',
                        // 'def-op95': '#2b6a665F',
                        // 'def-op90': '#2b6a665A'
                },

                secondary: {
                    /* https://maketintsandshades.com/#DB675A */
                    DEFAULT: '#db675a',
                    darker: '#c55d51'
                }
            }
        }
    },
    plugins: [
        require('@mertasan/tailwindcss-variables')({
            darkToRoot: false
        })
    ]
};