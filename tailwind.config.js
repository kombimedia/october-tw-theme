module.exports = {
    theme: {
        extend: {
            colors: {
                'primary': '#379583',
                'secondary': '#69d391',
                'tertiary': '#34454f',
                'text': '#34454f',
                'error': '#FF6363',
                'white': '#FFFFFF',
                'transparent': 'transparent'
            },
            fontFamily: {
                'body': ['Roboto','sans-serif'],
                'display': ['Rubik', 'Roboto', 'sans-serif']
            }
        },
        container: {
            center: true,
            padding: '1rem'
        },
    },
    plugins: [
        require('@tailwindcss/ui')({
            layout: 'sidebar',
        })
    ]
}
