import path from 'path';

export default (config, env, helpers) => {
	if(env.production) {
		config.output.libraryTarget = 'umd';
	}
};