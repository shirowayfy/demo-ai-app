<script setup lang="ts">
</script>

<template>
  <svg
    class="absolute inset-0 h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    viewBox="0 0 1200 400"
    aria-hidden="true"
  >
    <defs>
      <!-- Traveling dot gradient - fades in and out -->
      <linearGradient id="curve-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" class="line-stop" stop-opacity="0" />
        <stop offset="50%" class="line-stop" stop-opacity="0.6" />
        <stop offset="100%" class="line-stop" stop-opacity="0" />
      </linearGradient>

      <linearGradient id="curve-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" class="line-stop-alt" stop-opacity="0" />
        <stop offset="50%" class="line-stop-alt" stop-opacity="0.5" />
        <stop offset="100%" class="line-stop-alt" stop-opacity="0" />
      </linearGradient>

      <!-- Clip path for the traveling light effect -->
      <clipPath id="clip-travel-1">
        <rect x="-200" y="0" width="300" height="400">
          <animate
            attributeName="x"
            values="-300;1400"
            dur="6s"
            repeatCount="indefinite"
          />
        </rect>
      </clipPath>

      <clipPath id="clip-travel-2">
        <rect x="-200" y="0" width="350" height="400">
          <animate
            attributeName="x"
            values="-350;1400"
            dur="8s"
            repeatCount="indefinite"
          />
        </rect>
      </clipPath>

      <clipPath id="clip-travel-3">
        <rect x="-200" y="0" width="250" height="400">
          <animate
            attributeName="x"
            values="-250;1400"
            dur="5s"
            begin="2s"
            repeatCount="indefinite"
          />
        </rect>
      </clipPath>

      <clipPath id="clip-travel-4">
        <rect x="-200" y="0" width="280" height="400">
          <animate
            attributeName="x"
            values="-280;1400"
            dur="7s"
            begin="1s"
            repeatCount="indefinite"
          />
        </rect>
      </clipPath>

      <clipPath id="clip-travel-5">
        <rect x="-200" y="0" width="320" height="400">
          <animate
            attributeName="x"
            values="-320;1400"
            dur="9s"
            begin="3s"
            repeatCount="indefinite"
          />
        </rect>
      </clipPath>
    </defs>

    <!-- Curve 1 - gentle wave across the top third -->
    <path
      d="M -50,120 C 200,60 400,180 600,100 S 1000,140 1250,80"
      fill="none"
      class="line-stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      opacity="0.15"
    />
    <path
      d="M -50,120 C 200,60 400,180 600,100 S 1000,140 1250,80"
      fill="none"
      stroke="url(#curve-grad-1)"
      stroke-width="2"
      stroke-linecap="round"
      clip-path="url(#clip-travel-1)"
    />

    <!-- Curve 2 - deeper wave through the middle -->
    <path
      d="M -50,200 C 150,280 350,130 550,220 S 850,160 1050,240 L 1250,200"
      fill="none"
      class="line-stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      opacity="0.12"
    />
    <path
      d="M -50,200 C 150,280 350,130 550,220 S 850,160 1050,240 L 1250,200"
      fill="none"
      stroke="url(#curve-grad-2)"
      stroke-width="2"
      stroke-linecap="round"
      clip-path="url(#clip-travel-2)"
    />

    <!-- Curve 3 - lower sweep -->
    <path
      d="M -50,300 C 200,250 350,340 600,280 S 900,320 1250,260"
      fill="none"
      class="line-stroke"
      stroke-width="1.5"
      stroke-linecap="round"
      opacity="0.1"
    />
    <path
      d="M -50,300 C 200,250 350,340 600,280 S 900,320 1250,260"
      fill="none"
      stroke="url(#curve-grad-1)"
      stroke-width="2"
      stroke-linecap="round"
      clip-path="url(#clip-travel-3)"
    />

    <!-- Curve 4 - high arc -->
    <path
      d="M -50,60 C 250,130 500,20 750,90 S 1050,40 1250,110"
      fill="none"
      class="line-stroke"
      stroke-width="1"
      stroke-linecap="round"
      opacity="0.1"
    />
    <path
      d="M -50,60 C 250,130 500,20 750,90 S 1050,40 1250,110"
      fill="none"
      stroke="url(#curve-grad-2)"
      stroke-width="1.5"
      stroke-linecap="round"
      clip-path="url(#clip-travel-4)"
    />

    <!-- Curve 5 - bottom area -->
    <path
      d="M -50,350 C 200,310 450,380 700,330 S 1000,370 1250,340"
      fill="none"
      class="line-stroke"
      stroke-width="1"
      stroke-linecap="round"
      opacity="0.08"
    />
    <path
      d="M -50,350 C 200,310 450,380 700,330 S 1000,370 1250,340"
      fill="none"
      stroke="url(#curve-grad-1)"
      stroke-width="1.5"
      stroke-linecap="round"
      clip-path="url(#clip-travel-5)"
    />
  </svg>
</template>

<style scoped>
/* Light mode */
.line-stroke {
  stroke: oklch(0.6 0 0 / 0.3);
}

.line-stop {
  stop-color: oklch(0.55 0.15 270);
}

.line-stop-alt {
  stop-color: oklch(0.6 0.12 330);
}

/* Dark mode */
:global(body.dark) .line-stroke {
  stroke: oklch(0.75 0 0 / 0.2);
}

:global(body.dark) .line-stop {
  stop-color: oklch(0.7 0.18 270);
}

:global(body.dark) .line-stop-alt {
  stop-color: oklch(0.65 0.15 330);
}
</style>
