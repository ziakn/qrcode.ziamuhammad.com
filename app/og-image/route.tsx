import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'QR Forge — Free QR Code Generator';
    const description = searchParams.get('description') || 'Generate precise, high-quality QR codes instantly. No sign-up required.';

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#F7F5EF',
            fontFamily: 'Inter, sans-serif',
            backgroundImage: 'linear-gradient(135deg, #F7F5EF 0%, #EFEDEA 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#C0603C',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                color: 'white',
              }}
            >
              ◆
            </div>
            <div
              style={{
                fontSize: '64px',
                fontWeight: 700,
                color: '#1C1C1A',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              QR FORGE
            </div>
          </div>

          <div
            style={{
              fontSize: '32px',
              fontWeight: 400,
              color: '#4A4A48',
              textAlign: 'center',
              maxWidth: '800px',
              padding: '0 40px',
              lineHeight: 1.4,
              marginBottom: '40px',
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: '20px',
              color: '#9E9C96',
              textAlign: 'center',
              maxWidth: '700px',
              padding: '0 40px',
              lineHeight: 1.5,
            }}
          >
            {description}
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              fontSize: '16px',
              color: '#C0603C',
              fontWeight: 600,
            }}
          >
            qrcode.ziamuhammad.com
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response('Failed to generate image', { status: 500 });
  }
}
