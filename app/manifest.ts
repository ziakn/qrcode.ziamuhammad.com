import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'QR Forge — Simple, High-Quality QR Codes',
    short_name: 'QR Forge',
    description: 'Generate precise, high-quality QR codes instantly. Editorial design meets technical utility. No sign-up, no tracking.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
