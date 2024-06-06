<template>
  <div class="progress-container">
    <model-viewer
      :src="hero.src"
      disable-zoom
      shadow-intensity="1"
      :camera-orbit="hero.cameraOrbit"
      class="model-viewer"
      :style="heroPosition"
      :animation-name="animationName"
      :camera-target="hero.cameraTarget"
      autoplay
      ref="modelViewer"
    ></model-viewer>
    <div
      class="progress-bar"
      :style="{ height: strokeWidth + 'px', borderRadius: strokeWidth / 2 + 'px' }"
    >
      <div class="progress-percent" :style="currentPercentStyle"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch, type PropType } from 'vue'
import yasuo from './yasuo.glb'
import yi from './yi.glb'
import ms from './miss-fortune.glb'
/** 类型 */
interface Hero {
  src: string
  cameraOrbit: string
  progressAnimation: string
  finishAnimation: string
  finishAnimationIn: string
  cameraTarget: string
  finishDelay: number
}
type HeroName = 'yasuo' | 'yi' | 'missFortune'

type Heros = {
  [key in HeroName]: Hero
}
const props = defineProps({
  hero: {
    type: String as PropType<HeroName>,
    default: 'yasuo'
  },
  percentage: {
    type: Number,
    default: 100
  },
  strokeWidth: {
    type: Number,
    default: 10
  },
  heroSize: {
    type: Number,
    default: 150
  }
})

const modelViewer = ref(null)

const heros: Heros = {
  yasuo: {
    src: yasuo,
    cameraOrbit: '-90deg 90deg',
    progressAnimation: 'Run2',
    finishAnimationIn: 'yasuo_skin02_dance_in',
    finishAnimation: 'yasuo_skin02_dance_loop',
    cameraTarget: 'auto auto 0m',
    finishDelay: 2000
  },
  yi: {
    src: yi,
    cameraOrbit: '-90deg 90deg',
    progressAnimation: 'Run',
    finishAnimationIn: 'Dance',
    finishAnimation: 'Dance',
    cameraTarget: 'auto auto 0m',
    finishDelay: 500
  },
  missFortune: {
    src: ms,
    cameraOrbit: '-90deg 90deg',
    progressAnimation: 'Run',
    finishAnimationIn: 'Dance',
    finishAnimation: 'Dance',
    cameraTarget: 'auto auto 0m',
    finishDelay: 500
  }
}

const heroPosition = computed(() => {
  const percentage = props.percentage > 100 ? 100 : props.percentage
  return {
    left: `calc(${percentage + '%'} - ${props.heroSize / 2}px)`,
    bottom: -props.heroSize / 15 + 'px',
    height: props.heroSize + 'px',
    width: props.heroSize + 'px'
  }
})

const currentPercentStyle = computed(() => {
  const percentage = props.percentage > 100 ? 100 : props.percentage
  return { borderRadius: `calc(${props.strokeWidth / 2}px - 1px)`, width: percentage + '%' }
})

const hero = computed(() => {
  return heros[props.hero]
})

const animationName = ref('')

watch(
  () => props.percentage,
  (percentage) => {
    if (percentage < 100) {
      animationName.value = hero.value.progressAnimation
    } else if (percentage === 100) {
      animationName.value = hero.value.finishAnimationIn
      setTimeout(() => {
        animationName.value = hero.value.finishAnimation
      }, hero.value.finishDelay)
    }
  }
)
</script>
<style scoped>
.progress-container {
  position: relative;
  width: 100%;
}
.model-viewer {
  position: relative;
  background: transparent;
}
.progress-bar {
  border: 1px solid #fff;
  background-color: #666;
  width: 100%;
}
.progress-percent {
  background-color: aqua;
  height: 100%;
  transition: width 100ms ease;
}
</style>
