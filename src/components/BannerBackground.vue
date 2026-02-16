<script setup lang="ts">
</script>

<template>
  <!-- Top curves -->
  <svg
    class="absolute inset-x-0 top-0 h-1/3 w-full"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    viewBox="0 0 1200 150"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="top-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" class="line-stop" stop-opacity="0" />
        <stop offset="50%" class="line-stop" stop-opacity="0.6" />
        <stop offset="100%" class="line-stop" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="top-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" class="line-stop-alt" stop-opacity="0" />
        <stop offset="50%" class="line-stop-alt" stop-opacity="0.5" />
        <stop offset="100%" class="line-stop-alt" stop-opacity="0" />
      </linearGradient>

      <clipPath id="clip-top-1">
        <rect x="-300" y="0" width="300" height="150">
          <animate attributeName="x" values="-300;1400" dur="6s" repeatCount="indefinite" />
        </rect>
      </clipPath>
      <clipPath id="clip-top-2">
        <rect x="-350" y="0" width="350" height="150">
          <animate attributeName="x" values="-350;1400" dur="8s" repeatCount="indefinite" />
        </rect>
      </clipPath>
      <clipPath id="clip-top-3">
        <rect x="-280" y="0" width="280" height="150">
          <animate attributeName="x" values="-280;1400" dur="7s" begin="1s" repeatCount="indefinite" />
        </rect>
      </clipPath>
    </defs>

    <!-- Top curve 1 -->
    <path d="M -50,40 C 200,90 400,10 600,60 S 1000,30 1250,80" fill="none" class="line-stroke" stroke-width="1.5" stroke-linecap="round" opacity="0.15" />
    <path d="M -50,40 C 200,90 400,10 600,60 S 1000,30 1250,80" fill="none" stroke="url(#top-grad-1)" stroke-width="2" stroke-linecap="round" clip-path="url(#clip-top-1)" />

    <!-- Top curve 2 -->
    <path d="M -50,90 C 250,130 500,50 750,110 S 1050,60 1250,100" fill="none" class="line-stroke" stroke-width="1" stroke-linecap="round" opacity="0.1" />
    <path d="M -50,90 C 250,130 500,50 750,110 S 1050,60 1250,100" fill="none" stroke="url(#top-grad-2)" stroke-width="1.5" stroke-linecap="round" clip-path="url(#clip-top-2)" />

    <!-- Top curve 3 -->
    <path d="M -50,130 C 150,80 350,140 550,100 S 850,135 1250,110" fill="none" class="line-stroke" stroke-width="1" stroke-linecap="round" opacity="0.08" />
    <path d="M -50,130 C 150,80 350,140 550,100 S 850,135 1250,110" fill="none" stroke="url(#top-grad-1)" stroke-width="1.5" stroke-linecap="round" clip-path="url(#clip-top-3)" />
  </svg>

  <!-- Bottom curves -->
  <svg
    class="absolute inset-x-0 bottom-0 h-1/3 w-full"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    viewBox="0 0 1200 150"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="bot-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" class="line-stop" stop-opacity="0" />
        <stop offset="50%" class="line-stop" stop-opacity="0.6" />
        <stop offset="100%" class="line-stop" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="bot-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" class="line-stop-alt" stop-opacity="0" />
        <stop offset="50%" class="line-stop-alt" stop-opacity="0.5" />
        <stop offset="100%" class="line-stop-alt" stop-opacity="0" />
      </linearGradient>

      <clipPath id="clip-bot-1">
        <rect x="-250" y="0" width="250" height="150">
          <animate attributeName="x" values="-250;1400" dur="5s" begin="2s" repeatCount="indefinite" />
        </rect>
      </clipPath>
      <clipPath id="clip-bot-2">
        <rect x="-320" y="0" width="320" height="150">
          <animate attributeName="x" values="-320;1400" dur="9s" begin="3s" repeatCount="indefinite" />
        </rect>
      </clipPath>
      <clipPath id="clip-bot-3">
        <rect x="-300" y="0" width="300" height="150">
          <animate attributeName="x" values="-300;1400" dur="7s" repeatCount="indefinite" />
        </rect>
      </clipPath>
    </defs>

    <!-- Bottom curve 1 -->
    <path d="M -50,20 C 200,70 350,10 600,50 S 900,30 1250,60" fill="none" class="line-stroke" stroke-width="1.5" stroke-linecap="round" opacity="0.15" />
    <path d="M -50,20 C 200,70 350,10 600,50 S 900,30 1250,60" fill="none" stroke="url(#bot-grad-1)" stroke-width="2" stroke-linecap="round" clip-path="url(#clip-bot-1)" />

    <!-- Bottom curve 2 -->
    <path d="M -50,70 C 150,30 400,100 650,60 S 950,90 1250,50" fill="none" class="line-stroke" stroke-width="1" stroke-linecap="round" opacity="0.1" />
    <path d="M -50,70 C 150,30 400,100 650,60 S 950,90 1250,50" fill="none" stroke="url(#bot-grad-2)" stroke-width="1.5" stroke-linecap="round" clip-path="url(#clip-bot-2)" />

    <!-- Bottom curve 3 -->
    <path d="M -50,110 C 250,140 500,80 750,120 S 1050,100 1250,130" fill="none" class="line-stroke" stroke-width="1" stroke-linecap="round" opacity="0.08" />
    <path d="M -50,110 C 250,140 500,80 750,120 S 1050,100 1250,130" fill="none" stroke="url(#bot-grad-1)" stroke-width="1.5" stroke-linecap="round" clip-path="url(#clip-bot-3)" />
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
