const baseConfig = require('./client.base');
const generateSourceMap = process.env.OMIT_SOURCEMAP === 'true' ? false : true;

const config = {
    ...baseConfig,
    mode: 'production',
    devtool: generateSourceMap ? 'source-map' : false,
};

config.output.filename = 'bundle.[hash:8].js';

module.exports = config;