const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

const fontsConfig = new GoogleFontsPlugin({
    fonts: [
        { family: 'Roboto', variants: ['400', '700'] },
        // Add more fonts and variants as needed
    ],
});

module.exports = fontsConfig;