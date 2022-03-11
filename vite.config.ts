import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';
import { presetAttributify, presetWind } from 'unocss';
import transformerDirective from '@unocss/transformer-directives';

export default () => {
    return defineConfig({
        plugins: [
            Vue(),
            Unocss({
                presets: [
                    presetAttributify(),
                    presetWind(),
                ],
                transformers: [
                    transformerDirective(),
                ],
            }),
        ],
    });
};
