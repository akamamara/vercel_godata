// import adapter from '@sveltejs/adapter-static';

import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess({ postcss: true }),
    kit: {
        adapter: adapter()

        // Adapter for static website like regular hosting

        // adapter: adapter({
        //     pages: 'build',
        //     assets: 'build',
        //     fallback: null,
        //     precompress: false
        // }),
        // prerender: {
        //     // This can be false if you're using a fallback (i.e. SPA mode)
        //     default: true
        // }
    }
};

export default config;