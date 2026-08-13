<template>
  <div class="floating-dog-pet" aria-hidden="true">
    <div
      class="floating-dog-pet__sprite"
      :style="{ backgroundPosition: backgroundPosition }"
    />
  </div>
</template>

<script>
const FRAME_WIDTH = 256
const FRAME_HEIGHT = 256
const FRAME_COUNT = 96
const COLUMNS = 16
const START_FRAME = 0
const START_ANGLE = 225
const SMOOTHING = 0.5

function positiveModulo(value, size) {
  return ((value % size) + size) % size
}

function lerp(from, to, t) {
  return from + (to - from) * Math.min(Math.max(t, 0), 1)
}

function shortestFrameDelta(from, to) {
  let delta = to - from
  if (delta > FRAME_COUNT / 2) delta -= FRAME_COUNT
  if (delta < -FRAME_COUNT / 2) delta += FRAME_COUNT
  return delta
}

function angleToFrame(degrees) {
  const angle = positiveModulo(degrees, 360)

  if (angle >= 225 && angle < 315) {
    return lerp(0, 31, (angle - 225) / 90)
  }

  if (angle >= 315 || angle < 45) {
    const normalized = angle >= 315 ? angle : angle + 360
    return lerp(32, 47, (normalized - 315) / 90)
  }

  if (angle >= 45 && angle < 135) {
    return lerp(48, 63, (angle - 45) / 90)
  }

  if (angle >= 135 && angle < 180) {
    return lerp(64, 79, (angle - 135) / 45)
  }

  return lerp(80, 95, (angle - 180) / 45)
}

export default {
  name: 'FloatingDogPet',
  data() {
    return {
      currentFrame: START_FRAME,
      targetFrame: START_FRAME,
      rafId: null,
      pointer: {
        x: 0,
        y: 0,
      },
    }
  },
  computed: {
    backgroundPosition() {
      const frame = positiveModulo(Math.round(this.currentFrame), FRAME_COUNT)
      const col = frame % COLUMNS
      const row = Math.floor(frame / COLUMNS)
      return `-${col * FRAME_WIDTH}px -${row * FRAME_HEIGHT}px`
    },
  },
  mounted() {
    this.pointer = {
      x: window.innerWidth,
      y: window.innerHeight,
    }
    window.addEventListener('mousemove', this.handleMouseMove, { passive: true })
    this.rafId = window.requestAnimationFrame(this.tick)
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.handleMouseMove)
    if (this.rafId) window.cancelAnimationFrame(this.rafId)
  },
  methods: {
    handleMouseMove(event) {
      this.pointer = {
        x: event.clientX,
        y: event.clientY,
      }
    },
    updateTargetFrame() {
      const rect = this.$el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dx = this.pointer.x - centerX
      const dy = this.pointer.y - centerY
      const distance = Math.hypot(dx, dy)

      if (distance < 40) {
        this.targetFrame = START_FRAME
        return
      }

      const angle = positiveModulo((Math.atan2(dy, dx) * 180) / Math.PI, 360)
      this.targetFrame = angleToFrame(angle)
    },
    tick() {
      this.updateTargetFrame()
      const step = Math.max(0.08, 1 - SMOOTHING)
      this.currentFrame = positiveModulo(
        this.currentFrame +
          shortestFrameDelta(this.currentFrame, this.targetFrame) * step,
        FRAME_COUNT
      )
      this.rafId = window.requestAnimationFrame(this.tick)
    },
  },
}
</script>

<style scoped>
.floating-dog-pet {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 9999;
  width: 256px;
  height: 256px;
  pointer-events: none;
  transform: scale(1);
  transform-origin: right bottom;
}

.floating-dog-pet__sprite {
  width: 256px;
  height: 256px;
  background-image: url('/pet/dog-direction-loop96-v3-spritesheet-256.webp');
  background-repeat: no-repeat;
  background-size: 4096px 1536px;
  filter: drop-shadow(0 14px 18px rgba(0, 0, 0, 0.14));
}

@media (max-width: 719px) {
  .floating-dog-pet {
    right: 8px;
    bottom: 8px;
  }
}
</style>
