import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts
} from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      fonts: {
        sans: 'Roboto:300,500'
      },
    }),    
  ],
  transformers: [
    transformerVariantGroup(),
  ]
})