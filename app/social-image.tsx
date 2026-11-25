import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

const [training, logo] = await Promise.all([
  readFile(join(process.cwd(), 'public/images/predators-training.jpg'), 'base64'),
  readFile(join(process.cwd(), 'public/images/predators-logo.png'), 'base64'),
]);

const trainingSrc = `data:image/jpeg;base64,${training}`;
const logoSrc = `data:image/png;base64,${logo}`;

export function renderSocialImage() {
  return new ImageResponse(
    <div style={{ position: 'relative', display: 'flex', width: '100%', height: '100%', background: '#24231e', color: '#f5f2e9', overflow: 'hidden' }}>
      <img src={trainingSrc} alt="" style={{ position: 'absolute', inset: 0, width: 1200, height: 630, objectFit: 'cover' }} />
      <div style={{ position: 'absolute', left: 0, top: 0, width: 1200, height: 630, background: 'linear-gradient(90deg, #24231e 0%, rgba(36,35,30,.96) 28%, rgba(36,35,30,.72) 52%, rgba(36,35,30,.25) 100%)' }} />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', width: '100%', height: '100%', padding: '48px 60px 38px' }}>
        <div style={{ display: 'flex', alignItems: 'center', width: 246, height: 106, padding: '9px 15px', borderRadius: 5, background: '#f5f2e9' }}>
          <img src={logoSrc} alt="Predators MMA and BJJ Academy" style={{ width: 216, height: 90, objectFit: 'contain' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 48 }}>
          <div style={{ fontSize: 21, fontWeight: 800, letterSpacing: 2, color: '#fff200' }}>BJJ · KICKBOXING · MMA</div>
          <div style={{ fontSize: 88, fontWeight: 900, lineHeight: 1.04, letterSpacing: -3, marginTop: 17 }}>COME TRAIN</div>
          <div style={{ fontSize: 88, fontWeight: 900, lineHeight: 1.04, letterSpacing: -3, color: '#fff200' }}>WITH US.</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: 'auto', paddingTop: 19, borderTop: '1px solid rgba(255,255,255,.5)', fontSize: 17, fontWeight: 800, letterSpacing: 1.2 }}>
          <span>MANCHESTER · EST. 2006</span><span>YOUR FIRST CLASS IS FREE</span>
        </div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
