const path = require('path');

module.exports = ({ config }) => {
    // Add a custom loader to load and attach the source of the file
    // specified in a <include-source> custom block of a Vue file
    config.module.rules.push({
        // The block type: <include-source>
        resourceQuery: /blockType=include-source/,
        // The custom loader: source-loader.js file in the current directory
        loader: path.resolve(__dirname, 'source-loader.js'),
        // Pass the repo's root path in the loader options to resolve the
        // relative source file paths
        options: {
            rootPath: path.resolve(__dirname, '..'),
        },
    });

    return config;
};
