import {
  defineConfig,
  presetWebFonts,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import presetWind3 from '@unocss/preset-wind3'

export default defineConfig({
  presets: [
    presetWind3(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        inter: ['Inter', 'Inter:400,500,600,700'],
        mono: ['JetBrains Mono', 'JetBrains Mono:400,500,600'],
      },
    }),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  theme: {
    colors: {},
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
