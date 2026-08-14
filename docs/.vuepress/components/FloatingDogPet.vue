<template>
  <div
    class="floating-dog-pet"
    :style="{ left: petX + 'px' }"
    aria-hidden="true"
  >
    <div
      class="floating-dog-pet__sprite"
      :style="spriteStyle"
    />
  </div>
</template>

<script>
const PET_SIZE = 256
const BOTTOM_GAP = 20
const ROLE_ANCHOR = { x: 128, y: 206 }
const DIRECTION_SMOOTHING = 0.5
const RUN_SPEED = 240

const animations = {
  idleLook: {
    image: '/pet/dog-direction-loop96-v3-spritesheet-256.webp',
    sheetWidth: 4096,
    sheetHeight: 1536,
    frameWidth: 256,
    frameHeight: 256,
    frameCount: 96,
    columns: 16,
    scale: 1,
    anchor: { x: 128, y: 206 },
  },
  sitToRun: {
    image: '/pet/dog-action-spritesheet.webp',
    sheetWidth: 1920,
    sheetHeight: 1920,
    frameWidth: 640,
    frameHeight: 640,
    columns: 3,
    fps: 10,
    frames: [2, 3],
    scale: 0.255,
    anchor: { x: 325.5, y: 596.5 },
    mirrorForRight: true,
  },
  running: {
    image: '/pet/dog-action-spritesheet.webp',
    sheetWidth: 1920,
    sheetHeight: 1920,
    frameWidth: 640,
    frameHeight: 640,
    columns: 3,
    fps: 10,
    frames: [4, 5, 6, 7],
    scale: 0.255,
    anchor: { x: 310.875, y: 572.5 },
    mirrorForRight: true,
  },
}

function positiveModulo(value, size) {
  return ((value % size) + size) % size
}

function lerp(from, to, t) {
  return from + (to - from) * Math.min(Math.max(t, 0), 1)
}

function shortestDirectionFrameDelta(from, to) {
  let delta = to - from
  if (delta > animations.idleLook.frameCount / 2) delta -= animations.idleLook.frameCount
  if (delta < -animations.idleLook.frameCount / 2) delta += animations.idleLook.frameCount
  return delta
}

function angleToDirectionFrame(degrees) {
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
      state: 'idleLook',
      petX: 0,
      moveDirection: 0,
      idleFrame: 0,
      targetIdleFrame: 0,
      sequenceIndex: 0,
      pointer: {
        x: 0,
        y: 0,
      },
      lastAnimationAt: 0,
      lastSequenceStepAt: 0,
      rafId: null,
    }
  },
  computed: {
    animation() {
      return animations[this.state]
    },
    frame() {
      if (this.state === 'idleLook') {
        return positiveModulo(Math.round(this.idleFrame), animations.idleLook.frameCount)
      }

      return this.animation.frames[this.sequenceIndex] || this.animation.frames[0]
    },
    spriteStyle() {
      const animation = this.animation
      const col = this.frame % animation.columns
      const row = Math.floor(this.frame / animation.columns)
      const width = animation.frameWidth * animation.scale
      const height = animation.frameHeight * animation.scale
      const mirrored = animation.mirrorForRight && this.moveDirection > 0
      const anchorX = mirrored ? animation.frameWidth - animation.anchor.x : animation.anchor.x
      const left = ROLE_ANCHOR.x - anchorX * animation.scale
      const top = ROLE_ANCHOR.y - animation.anchor.y * animation.scale

      return {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url('${animation.image}')`,
        backgroundSize: `${animation.sheetWidth * animation.scale}px ${animation.sheetHeight * animation.scale}px`,
        backgroundPosition: `-${col * width}px -${row * height}px`,
        transform: mirrored ? 'scaleX(-1)' : 'none',
      }
    },
  },
  mounted() {
    this.petX = Math.max(0, window.innerWidth - PET_SIZE - BOTTOM_GAP)
    this.pointer = {
      x: window.innerWidth,
      y: window.innerHeight,
    }
    this.lastAnimationAt = performance.now()
    this.lastSequenceStepAt = this.lastAnimationAt

    window.addEventListener('mousemove', this.handleMouseMove, { passive: true })
    window.addEventListener('keydown', this.handleKeyDown)
    window.addEventListener('keyup', this.handleKeyUp)
    window.addEventListener('resize', this.handleResize, { passive: true })

    this.rafId = window.requestAnimationFrame(this.tick)
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.handleMouseMove)
    window.removeEventListener('keydown', this.handleKeyDown)
    window.removeEventListener('keyup', this.handleKeyUp)
    window.removeEventListener('resize', this.handleResize)
    if (this.rafId) window.cancelAnimationFrame(this.rafId)
  },
  methods: {
    handleMouseMove(event) {
      this.pointer = {
        x: event.clientX,
        y: event.clientY,
      }
    },
    handleKeyDown(event) {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return

      event.preventDefault()
      const nextDirection = event.key === 'ArrowLeft' ? -1 : 1
      if (this.moveDirection === nextDirection && this.state !== 'idleLook') return

      this.moveDirection = nextDirection
      this.setState('sitToRun')
    },
    handleKeyUp(event) {
      if (
        (event.key === 'ArrowLeft' && this.moveDirection < 0) ||
        (event.key === 'ArrowRight' && this.moveDirection > 0)
      ) {
        event.preventDefault()
        this.moveDirection = 0
        this.setState('idleLook')
      }
    },
    handleResize() {
      this.petX = Math.min(this.petX, this.maxPetX())
    },
    maxPetX() {
      return Math.max(0, window.innerWidth - PET_SIZE - BOTTOM_GAP)
    },
    setState(state) {
      if (this.state === state) return

      this.state = state
      this.sequenceIndex = 0
      this.lastSequenceStepAt = performance.now()
    },
    updateIdleFrame() {
      const rect = this.$el.getBoundingClientRect()
      const centerX = rect.left + ROLE_ANCHOR.x
      const centerY = rect.top + ROLE_ANCHOR.y
      const dx = this.pointer.x - centerX
      const dy = this.pointer.y - centerY
      const distance = Math.hypot(dx, dy)

      if (distance < 40) {
        this.targetIdleFrame = 0
      } else {
        const angle = positiveModulo((Math.atan2(dy, dx) * 180) / Math.PI, 360)
        this.targetIdleFrame = angleToDirectionFrame(angle)
      }

      const step = Math.max(0.08, 1 - DIRECTION_SMOOTHING)
      this.idleFrame = positiveModulo(
        this.idleFrame + shortestDirectionFrameDelta(this.idleFrame, this.targetIdleFrame) * step,
        animations.idleLook.frameCount
      )
    },
    updateSequence(now) {
      if (this.state === 'idleLook') return

      if (now - this.lastSequenceStepAt < 1000 / this.animation.fps) return

      this.sequenceIndex += 1
      if (this.state === 'sitToRun' && this.sequenceIndex >= this.animation.frames.length) {
        this.setState('running')
      } else {
        this.sequenceIndex %= this.animation.frames.length
      }
      this.lastSequenceStepAt = now
    },
    updatePosition(deltaSeconds) {
      if (!this.moveDirection) return

      this.petX = Math.min(
        this.maxPetX(),
        Math.max(0, this.petX + this.moveDirection * RUN_SPEED * deltaSeconds)
      )
    },
    tick(now) {
      const deltaSeconds = Math.min((now - this.lastAnimationAt) / 1000, 0.05)
      this.lastAnimationAt = now

      if (this.state === 'idleLook') {
        this.updateIdleFrame()
      } else {
        this.updatePosition(deltaSeconds)
        this.updateSequence(now)
      }

      this.rafId = window.requestAnimationFrame(this.tick)
    },
  },
}
</script>

<style scoped>
.floating-dog-pet {
  position: fixed;
  bottom: 20px;
  z-index: 9999;
  width: 256px;
  height: 256px;
  pointer-events: none;
  transform: scale(1);
  transform-origin: right bottom;
}

.floating-dog-pet__sprite {
  position: absolute;
  background-repeat: no-repeat;
  filter: drop-shadow(0 14px 18px rgba(0, 0, 0, 0.14));
  transform-origin: center;
}

@media (max-width: 719px) {
  .floating-dog-pet {
    bottom: 8px;
  }
}
</style>
