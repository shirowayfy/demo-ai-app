<script setup lang="ts">
</script>

<template>
  <svg
    class="absolute inset-0 h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <defs>
      <!-- Gradient definitions -->
      <radialGradient id="blob1-grad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" class="blob-stop-inner-1" />
        <stop offset="100%" class="blob-stop-outer-1" />
      </radialGradient>

      <radialGradient id="blob2-grad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" class="blob-stop-inner-2" />
        <stop offset="100%" class="blob-stop-outer-2" />
      </radialGradient>

      <radialGradient id="blob3-grad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" class="blob-stop-inner-3" />
        <stop offset="100%" class="blob-stop-outer-3" />
      </radialGradient>

      <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" class="line-stop-start" />
        <stop offset="50%" class="line-stop-mid" />
        <stop offset="100%" class="line-stop-end" />
      </linearGradient>
    </defs>

    <!-- Floating gradient blobs -->
    <ellipse cx="20%" cy="30%" rx="180" ry="140" fill="url(#blob1-grad)">
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; 40,60; -20,80; 0,0"
        dur="20s"
        repeatCount="indefinite"
      />
      <animate attributeName="rx" values="180;220;160;180" dur="18s" repeatCount="indefinite" />
      <animate attributeName="ry" values="140;180;120;140" dur="22s" repeatCount="indefinite" />
    </ellipse>

    <ellipse cx="75%" cy="60%" rx="200" ry="160" fill="url(#blob2-grad)">
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; -60,40; 30,-50; 0,0"
        dur="24s"
        repeatCount="indefinite"
      />
      <animate attributeName="rx" values="200;160;240;200" dur="20s" repeatCount="indefinite" />
      <animate attributeName="ry" values="160;200;140;160" dur="26s" repeatCount="indefinite" />
    </ellipse>

    <ellipse cx="50%" cy="80%" rx="150" ry="120" fill="url(#blob3-grad)">
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; 50,-40; -40,-20; 0,0"
        dur="22s"
        repeatCount="indefinite"
      />
      <animate attributeName="rx" values="150;190;130;150" dur="16s" repeatCount="indefinite" />
      <animate attributeName="ry" values="120;100;160;120" dur="19s" repeatCount="indefinite" />
    </ellipse>

    <!-- Floating geometric shapes -->

    <!-- Rotating hexagon -->
    <polygon
      points="30,0 15,26 -15,26 -30,0 -15,-26 15,-26"
      class="shape-stroke"
      fill="none"
      stroke-width="1.5"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 200 120"
        to="360 200 120"
        dur="30s"
        repeatCount="indefinite"
        additive="sum"
      />
      <animateTransform
        attributeName="transform"
        type="translate"
        values="200,120; 220,100; 180,140; 200,120"
        dur="15s"
        repeatCount="indefinite"
        additive="sum"
      />
    </polygon>

    <!-- Rotating triangle -->
    <polygon
      points="0,-20 17,10 -17,10"
      class="shape-stroke"
      fill="none"
      stroke-width="1.5"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 700 200"
        to="-360 700 200"
        dur="25s"
        repeatCount="indefinite"
        additive="sum"
      />
      <animateTransform
        attributeName="transform"
        type="translate"
        values="700,200; 720,180; 680,220; 700,200"
        dur="18s"
        repeatCount="indefinite"
        additive="sum"
      />
    </polygon>

    <!-- Rotating square -->
    <rect
      x="-16"
      y="-16"
      width="32"
      height="32"
      rx="4"
      class="shape-stroke"
      fill="none"
      stroke-width="1.5"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 900 100"
        to="360 900 100"
        dur="35s"
        repeatCount="indefinite"
        additive="sum"
      />
      <animateTransform
        attributeName="transform"
        type="translate"
        values="900,100; 880,120; 920,80; 900,100"
        dur="20s"
        repeatCount="indefinite"
        additive="sum"
      />
    </rect>

    <!-- Small floating circles -->
    <circle r="4" class="dot-fill" opacity="0.6">
      <animate attributeName="cx" values="100;130;90;100" dur="12s" repeatCount="indefinite" />
      <animate attributeName="cy" values="80;50;110;80" dur="14s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;0.3;0.6" dur="8s" repeatCount="indefinite" />
    </circle>

    <circle r="3" class="dot-fill" opacity="0.5">
      <animate attributeName="cx" values="500;520;480;500" dur="10s" repeatCount="indefinite" />
      <animate attributeName="cy" values="60;90;40;60" dur="13s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.5;0.2;0.5" dur="7s" repeatCount="indefinite" />
    </circle>

    <circle r="5" class="dot-fill" opacity="0.4">
      <animate attributeName="cx" values="800;780;830;800" dur="16s" repeatCount="indefinite" />
      <animate attributeName="cy" values="250;220;280;250" dur="11s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="9s" repeatCount="indefinite" />
    </circle>

    <circle r="3" class="dot-fill" opacity="0.5">
      <animate attributeName="cx" values="350;370;330;350" dur="14s" repeatCount="indefinite" />
      <animate attributeName="cy" values="280;250;300;280" dur="12s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.5;0.3;0.5" dur="10s" repeatCount="indefinite" />
    </circle>

    <circle r="4" class="dot-fill" opacity="0.3">
      <animate attributeName="cx" values="650;680;630;650" dur="11s" repeatCount="indefinite" />
      <animate attributeName="cy" values="300;270;330;300" dur="15s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="8s" repeatCount="indefinite" />
    </circle>

    <!-- Animated flowing lines -->
    <path
      d="M 0,200 Q 250,150 500,200 T 1000,200"
      fill="none"
      stroke="url(#line-grad)"
      stroke-width="1"
      opacity="0.4"
    >
      <animate
        attributeName="d"
        values="M 0,200 Q 250,150 500,200 T 1000,200;
                M 0,200 Q 250,250 500,200 T 1000,200;
                M 0,200 Q 250,150 500,200 T 1000,200"
        dur="10s"
        repeatCount="indefinite"
      />
    </path>

    <path
      d="M 0,250 Q 300,200 600,250 T 1200,250"
      fill="none"
      stroke="url(#line-grad)"
      stroke-width="1"
      opacity="0.3"
    >
      <animate
        attributeName="d"
        values="M 0,250 Q 300,200 600,250 T 1200,250;
                M 0,250 Q 300,300 600,250 T 1200,250;
                M 0,250 Q 300,200 600,250 T 1200,250"
        dur="14s"
        repeatCount="indefinite"
      />
    </path>

    <!-- Floating diamond -->
    <polygon
      points="0,-18 12,0 0,18 -12,0"
      class="shape-stroke"
      fill="none"
      stroke-width="1.5"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 450 150"
        to="360 450 150"
        dur="28s"
        repeatCount="indefinite"
        additive="sum"
      />
      <animateTransform
        attributeName="transform"
        type="translate"
        values="450,150; 470,130; 430,170; 450,150"
        dur="16s"
        repeatCount="indefinite"
        additive="sum"
      />
    </polygon>

    <!-- Cross / Plus shape -->
    <g class="shape-stroke" fill="none" stroke-width="1.5">
      <line x1="-12" y1="0" x2="12" y2="0" />
      <line x1="0" y1="-12" x2="0" y2="12" />
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 150 280"
        to="360 150 280"
        dur="40s"
        repeatCount="indefinite"
        additive="sum"
      />
      <animateTransform
        attributeName="transform"
        type="translate"
        values="150,280; 170,260; 130,300; 150,280"
        dur="14s"
        repeatCount="indefinite"
        additive="sum"
      />
    </g>
  </svg>
</template>

<style scoped>
/* Light mode blob colors */
.blob-stop-inner-1 {
  stop-color: oklch(0.8 0.15 270);
  stop-opacity: 0.15;
}
.blob-stop-outer-1 {
  stop-color: oklch(0.8 0.15 270);
  stop-opacity: 0;
}

.blob-stop-inner-2 {
  stop-color: oklch(0.75 0.15 330);
  stop-opacity: 0.12;
}
.blob-stop-outer-2 {
  stop-color: oklch(0.75 0.15 330);
  stop-opacity: 0;
}

.blob-stop-inner-3 {
  stop-color: oklch(0.8 0.12 200);
  stop-opacity: 0.1;
}
.blob-stop-outer-3 {
  stop-color: oklch(0.8 0.12 200);
  stop-opacity: 0;
}

.shape-stroke {
  stroke: oklch(0.5 0 0 / 0.2);
}

.dot-fill {
  fill: oklch(0.4 0 0 / 0.3);
}

.line-stop-start {
  stop-color: oklch(0.7 0.1 270);
  stop-opacity: 0;
}
.line-stop-mid {
  stop-color: oklch(0.7 0.1 270);
  stop-opacity: 0.4;
}
.line-stop-end {
  stop-color: oklch(0.7 0.1 270);
  stop-opacity: 0;
}

/* Dark mode blob colors */
:global(.dark) .blob-stop-inner-1 {
  stop-color: oklch(0.5 0.2 270);
  stop-opacity: 0.2;
}
:global(.dark) .blob-stop-outer-1 {
  stop-color: oklch(0.5 0.2 270);
  stop-opacity: 0;
}

:global(.dark) .blob-stop-inner-2 {
  stop-color: oklch(0.45 0.2 330);
  stop-opacity: 0.15;
}
:global(.dark) .blob-stop-outer-2 {
  stop-color: oklch(0.45 0.2 330);
  stop-opacity: 0;
}

:global(.dark) .blob-stop-inner-3 {
  stop-color: oklch(0.5 0.15 200);
  stop-opacity: 0.12;
}
:global(.dark) .blob-stop-outer-3 {
  stop-color: oklch(0.5 0.15 200);
  stop-opacity: 0;
}

:global(.dark) .shape-stroke {
  stroke: oklch(0.8 0 0 / 0.15);
}

:global(.dark) .dot-fill {
  fill: oklch(0.85 0 0 / 0.25);
}

:global(.dark) .line-stop-start {
  stop-color: oklch(0.5 0.15 270);
  stop-opacity: 0;
}
:global(.dark) .line-stop-mid {
  stop-color: oklch(0.5 0.15 270);
  stop-opacity: 0.3;
}
:global(.dark) .line-stop-end {
  stop-color: oklch(0.5 0.15 270);
  stop-opacity: 0;
}
</style>
