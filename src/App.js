import { useEffect } from 'react';
import { animate } from 'animejs';

function App() {
  useEffect(() => {
    animate('polygon', {
      points: '64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100',
      alternate: true,
      loop: true
    });

    animate(['#turbulence', '#displacement'], {
      baseFrequency: .05,
      scale: 15,
      alternate: true,
      loop: true
    });
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: '#252423',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ color: 'white', fontWeight: 'bold', marginBottom: '16px' }}>
        Botvor er en bot
      </div>
      <div>
      <svg width="128" height="128" viewBox="0 0 128 128">
        <filter id="displacementFilter">
          <feTurbulence id= "turbulence" type="turbulence" numOctaves="2" baseFrequency="0" result="turbulence"/>
          <feDisplacementMap id="displacement" in2="turbulence" in="SourceGraphic" scale="1" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <polygon points="64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96"  fill="#FFFFFF" filter="url(#displacementFilter)"/>
      </svg>
      </div>
    </div>
  );
}

export default App;
