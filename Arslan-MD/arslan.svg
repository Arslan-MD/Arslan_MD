<svg width="100%" height="100%" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Enhanced Rainbow Gradient -->
    <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ff0055">
        <animate attributeName="offset" values="0;1" dur="3.5s" repeatCount="indefinite"/>
      </stop>
      <stop offset="25%" stop-color="#ffcc00">
        <animate attributeName="offset" values="0.25;0" dur="3.5s" repeatCount="indefinite"/>
      </stop>
      <stop offset="50%" stop-color="#00ff99">
        <animate attributeName="offset" values="0.5;1" dur="3.5s" repeatCount="indefinite"/>
      </stop>
      <stop offset="75%" stop-color="#00ccff">
        <animate attributeName="offset" values="0.75;0.25" dur="3.5s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" stop-color="#cc00ff">
        <animate attributeName="offset" values="1;0.5" dur="3.5s" repeatCount="indefinite"/>
      </stop>
    </linearGradient>
    
    <!-- New gradient for 3D effect -->
    <linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.3"/>
      <stop offset="50%" stop-color="#ffffff" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    
    <!-- Enhanced Glow filter -->
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    
    <!-- Stronger Glow filter -->
    <filter id="strong-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    
    <!-- Grid pattern -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00ccff" stroke-width="0.5" opacity="0.3"/>
    </pattern>
    
    <!-- Bot image clip path -->
    <clipPath id="bot-clip">
      <circle cx="400" cy="230" r="80"/>
    </clipPath>
  </defs>

  <!-- Dark background with grid pattern -->
  <rect width="100%" height="100%" fill="#0a0a0a"/>
  <rect width="100%" height="100%" fill="url(#grid)" opacity="0.1"/>

  <!-- Enhanced Rainbow Dots Background with more dots -->
  <g>
    <circle cx="100" cy="100" r="4" fill="url(#rainbow)" filter="url(#glow)">
      <animate attributeName="cy" values="100;450;100" dur="6s" repeatCount="indefinite"/>
      <animate attributeName="cx" values="100;700;100" dur="12s" repeatCount="indefinite"/>
    </circle>
    <circle cx="500" cy="200" r="3" fill="url(#rainbow)" filter="url(#glow)">
      <animate attributeName="cy" values="200;50;200" dur="8s" repeatCount="indefinite"/>
      <animate attributeName="cx" values="500;100;500" dur="10s" repeatCount="indefinite"/>
    </circle>
    <circle cx="350" cy="350" r="5" fill="url(#rainbow)" filter="url(#glow)">
      <animate attributeName="cy" values="350;80;350" dur="7s" repeatCount="indefinite"/>
      <animate attributeName="cx" values="350;650;350" dur="9s" repeatCount="indefinite"/>
    </circle>
    <circle cx="650" cy="120" r="4" fill="url(#rainbow)" filter="url(#glow)">
      <animate attributeName="cy" values="120;400;120" dur="11s" repeatCount="indefinite"/>
      <animate attributeName="cx" values="650;200;650" dur="13s" repeatCount="indefinite"/>
    </circle>
    <!-- Additional dots -->
    <circle cx="150" cy="250" r="3" fill="url(#rainbow)" filter="url(#glow)">
      <animate attributeName="cy" values="250;100;250" dur="9s" repeatCount="indefinite"/>
      <animate attributeName="cx" values="150;550;150" dur="14s" repeatCount="indefinite"/>
    </circle>
    <circle cx="450" cy="80" r="4" fill="url(#rainbow)" filter="url(#glow)">
      <animate attributeName="cy" values="80;350;80" dur="10s" repeatCount="indefinite"/>
      <animate attributeName="cx" values="450;150;450" dur="11s" repeatCount="indefinite"/>
    </circle>
    <circle cx="550" cy="400" r="3" fill="url(#rainbow)" filter="url(#glow)">
      <animate attributeName="cy" values="400;120;400" dur="8s" repeatCount="indefinite"/>
      <animate attributeName="cx" values="550;250;550" dur="15s" repeatCount="indefinite"/>
    </circle>
    <circle cx="250" cy="180" r="4" fill="url(#rainbow)" filter="url(#glow)">
      <animate attributeName="cy" values="180;420;180" dur="7s" repeatCount="indefinite"/>
      <animate attributeName="cx" values="250;600;250" dur="12s" repeatCount="indefinite"/>
    </circle>
  </g>

  <!-- Enhanced outer rainbow border with glow -->
  <rect x="20" y="20" width="760" height="460" rx="25" stroke="url(#rainbow)" stroke-width="5" fill="transparent" filter="url(#strong-glow)">
    <animate attributeName="stroke-dasharray" values="20,10;50,5;10,20;20,10" dur="2s" repeatCount="indefinite"/>
    <animate attributeName="stroke-width" values="5;8;5" dur="3s" repeatCount="indefinite"/>
  </rect>

  <!-- Enhanced inner rainbow border with glow -->
  <rect x="30" y="30" width="740" height="440" rx="20" stroke="url(#rainbow)" stroke-width="4" fill="transparent" filter="url(#glow)">
    <animate attributeName="stroke-dasharray" values="10,5;30,10;5,15;10,5" dur="2s" repeatCount="indefinite"/>
    <animate attributeName="stroke-width" values="4;6;4" dur="3s" repeatCount="indefinite"/>
  </rect>

  <!-- Enhanced glass box with 3D effect -->
  <rect x="50" y="50" width="700" height="400" rx="25" fill="#1118" stroke="#fff2" stroke-width="1.5"/>
  <rect x="50" y="50" width="700" height="400" rx="25" fill="url(#shine)" stroke="none"/>

  <!-- Bot image with glow and animation -->
  <g>
    <circle cx="400" cy="230" r="85" fill="url(#rainbow)" filter="url(#glow)">
      <animate attributeName="r" values="85;90;85" dur="4s" repeatCount="indefinite"/>
    </circle>
    <image href="https://files.catbox.moe/16i1l7.jpg" x="320" y="150" width="160" height="160" clip-path="url(#bot-clip)" opacity="0.9">
      <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite"/>
    </image>
    <circle cx="400" cy="230" r="85" fill="none" stroke="url(#rainbow)" stroke-width="3" filter="url(#glow)">
      <animate attributeName="stroke-width" values="3;5;3" dur="2s" repeatCount="indefinite"/>
    </circle>
  </g>

  <!-- Enhanced title text with multiple animations -->
  <text x="50%" y="90" text-anchor="middle" font-size="48" font-family="Segoe UI, Verdana, sans-serif" fill="url(#rainbow)" filter="url(#strong-glow)">
    𓅓 ARSLAN-TECH-BOT 𓅓
    <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="1;0.8;1" dur="2s" repeatCount="indefinite"/>
  </text>

  <!-- Enhanced rotating circles with glow -->
  <circle cx="400" cy="230" r="110" fill="none" stroke="url(#rainbow)" stroke-width="3" filter="url(#glow)">
    <animateTransform attributeName="transform" type="rotate" from="0 400 230" to="360 400 230" dur="12s" repeatCount="indefinite"/>
    <animate attributeName="r" values="110;120;110" dur="5s" repeatCount="indefinite"/>
  </circle>

  <!-- Additional rotating circles -->
  <circle cx="400" cy="230" r="95" fill="none" stroke="url(#rainbow)" stroke-width="2" opacity="0.7" filter="url(#glow)">
    <animateTransform attributeName="transform" type="rotate" from="360 400 230" to="0 400 230" dur="10s" repeatCount="indefinite"/>
  </circle>
  
  <circle cx="400" cy="230" r="130" fill="none" stroke="url(#rainbow)" stroke-width="2" opacity="0.5" filter="url(#glow)">
    <animateTransform attributeName="transform" type="rotate" from="0 400 230" to="360 400 230" dur="15s" repeatCount="indefinite"/>
  </circle>

  <!-- Enhanced center text with glow -->
  <text x="400" y="350" text-anchor="middle" font-size="42" font-weight="bold" font-family="Segoe UI, Verdana, sans-serif" fill="url(#rainbow)" filter="url(#strong-glow)">
    ULTRA PRO MAX EDITION
    <animate attributeName="opacity" values="1;0.3;1" dur="4s" repeatCount="indefinite"/>
    <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="3s" repeatCount="indefinite"/>
  </text>

  <!-- Enhanced footer text -->
  <text x="50%" y="460" text-anchor="middle" font-size="22" font-family="Segoe UI, Verdana, sans-serif" fill="url(#rainbow)" filter="url(#glow)">
    ➪ CREATED BY ARSLAN-MD OFFICIAL ☢︎︎
    <animate attributeName="opacity" values="1;0.7;1" dur="2.5s" repeatCount="indefinite"/>
  </text>

  <!-- Additional decorative elements -->
  <polygon points="400,150 415,180 385,180" fill="url(#rainbow)" opacity="0.8" filter="url(#glow)">
    <animateTransform attributeName="transform" type="rotate" from="0 400 230" to="360 400 230" dur="18s" repeatCount="indefinite"/>
  </polygon>
  
  <polygon points="400,310 415,280 385,280" fill="url(#rainbow)" opacity="0.8" filter="url(#glow)">
    <animateTransform attributeName="transform" type="rotate" from="360 400 230" to="0 400 230" dur="18s" repeatCount="indefinite"/>
  </polygon>

  <!-- Floating particles around the bot -->
  <circle cx="320" cy="180" r="2" fill="url(#rainbow)" filter="url(#glow)">
    <animate attributeName="cy" values="180;160;180" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="320;310;320" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="480" cy="180" r="2" fill="url(#rainbow)" filter="url(#glow)">
    <animate attributeName="cy" values="180;160;180" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="480;490;480" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="320" cy="280" r="2" fill="url(#rainbow)" filter="url(#glow)">
    <animate attributeName="cy" values="280;300;280" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="320;310;320" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="480" cy="280" r="2" fill="url(#rainbow)" filter="url(#glow)">
    <animate attributeName="cy" values="280;300;280" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="cx" values="480;490;480" dur="4s" repeatCount="indefinite"/>
  </circle>
</svg>
