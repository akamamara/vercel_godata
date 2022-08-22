import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */

const config = {
    plugins: [sveltekit()],
    define: {
        'process.env': process.env
    },
    optimizeDeps: { include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep'] }
};

export default config;