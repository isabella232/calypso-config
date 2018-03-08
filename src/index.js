const configPath = require( 'path' ).resolve( __dirname, '..', '..', 'config' );
const createConfig = require( './create-config' );

const { serverData, clientData } = require( './parser' )( configPath, {
	env: process.env.CALYPSO_ENV || process.env.NODE_ENV || 'development',
	enabledFeatures: process.env.ENABLE_FEATURES,
	disabledFeatures: process.env.DISABLE_FEATURES
} );

module.exports = createConfig( serverData );
module.exports.clientData = clientData;
