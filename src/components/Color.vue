<template>
  <div class="w100 h100 color" :style="containerStyle">
    <div class="color-wrapper"></div>
    <div class="w100 h100 color-container">
      <div class="h100 color-container-color">
        <div
          class="color-container-color-item"
          v-for="(color, index) in colorData"
          :key="index"
        >
          <div class="color-container-color-item-solarterm">
            {{ color[0].category }}
          </div>
          <div class="color-container-color-item-block">
            <div
              v-for="(item, i) in color"
              :key="`${index}_${i}`"
              @click="setColor(item)"
            >
              <span>
                {{ item.name }} 
               </span>
               <i :style="{ background: item.hex }" />
            </div> 
          </div>
        </div>
      </div>
      <div :class="['color-container-name', isActive ? 'active' : '']">
        <h2>
          <span
            v-for="(item, index) in colorObj.name.split('')"
            :key="index"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            {{ item }}
          </span>
        </h2>
      </div>

      <div class="color-container-sentence">
        <div class="sentence">
          <span
            :class="[isActive ? 'active' : '']"
            v-for="(item, index) in colorObj.sentence.split('')"
            :key="index"
            :style="{ animationDelay: `${getTime(index)}s` }"
          >
            {{ item }}
            <br
              v-if="
                item === '，' || item === '。' || item === '；' || item === '、'
              "
            />
          </span>
        </div>
        <div class="sentenceFrom">
          <span
            :class="[isActive ? 'active' : '']"
            v-for="(item, index) in colorObj.sentenceFrom.split('')"
            :key="index"
            :style="{ animationDelay: `${getTime(index)}s` }"
          >
            {{ item }}
            <br v-if="item === ' '" />
          </span>
        </div>
      </div>
    </div>
    <p class="color-copyright">中國傳統色 故宮裡的色彩美學 二十字節氣 七十二物候 東方審美</p>
  </div>
</template>

<script>
import ColorJson from '@/global/color.json'
export default {
  data() {
    return {
      colorData: [],
      colorArr: [],
      isActive: false,
      colorObj: {
        name: '',
        fontColor: '#343333',
        r: 0,
        g: 0,
        b: 0,
        hex: '',
        category: '',
        sentenceFrom: '',
        sentence: ''
      }
    }
  },
  computed: {
    containerStyle() {
      let { r, g, b, fontColor } = this.colorObj
      return {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        transition: 'all 0.5s linear',
        color: fontColor || '#ffffff'
      }
    }
  },
  mounted() {
    this.colorData = ColorJson
    let defaultData = this.colorData[0][0]
    this.setColor(defaultData)
  },
  methods: {
    getTime(index) {
      let exec = index % 8
      let time = 0
      switch (exec) {
      case 0:
        time = 0.18
        break
      case 1:
      case 7:
        time = 0.3
        break
      case 2:
        time = 0.9
        break
      case 3:
      case 6:
        time = 0.6
        break
      case 4:
        time = 0.4
        break
      case 5:
        time = 1
        break
      }
      return time * Math.random() + 0.4
    },
    setColor(color) {
      if (color.name === this.colorObj.name){
        return
      }
      this.isActive = false
      setTimeout(() => {
        let {
          name,
          r,
          g,
          b,
          hex,
          sentence,
          sentenceFrom,
          category,
          fontColor
        } = color
        this.colorObj = {
          name,
          r,
          g,
          b,
          hex,
          sentence,
          sentenceFrom,
          category,
          fontColor
        }
        this.isActive = true
      }, 50)
    }
  }
}
</script>

<style scoped lang="less">
@import "@/assets/css/common.less";
.color {
  &-wrapper{
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: url('../assets/imgs/grain.png');
  }
  &-container {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    &-color {
      position: absolute;
      top: 0;
      left: 0;
      height: calc(100vh - 2em);
      overflow-y: scroll;
      .scrollbar-hide();
      &-item {
        position: relative;
        top: 3.125em;
        display: flex;
        letter-spacing: 0.1825em;
        &-block {
          left: 0;
          width: 23.1em;
          padding-bottom: 2em;
          display: flex;
          flex-wrap: wrap;
          div {
            writing-mode: vertical-lr;
            padding: 0 0.85em 1em;
            display: inline-block;
            cursor: pointer;
            letter-spacing: 0.25em;
            position: relative;
            span {
              position: relative;
              z-index: 2;
              font-size: 1.125em;
              font-size: 1em;
            }
            i {
              display: inline-block;
              position: absolute;
              right: 0.96em;
              top: -0.125em;
              width: 0.375em;
              height: 1.5625em;
              z-index: 1;
              border-radius: 0.125em;
            }
          }
        }
        &-solarterm {
          writing-mode: vertical-lr;
          padding-right: 1em;
        }
      }
    }
    &-name {
      position: absolute;
      top: 14vh;
      right: 0;
      display: block;
      h2 {
        font-size: 5em;
        writing-mode: vertical-lr;
      }
      &.active {
        span {
          opacity: 0;
          animation: show 1.5s ease-out forwards;
        }
      }
    }
    &-sentence {
      writing-mode: vertical-rl;
      position: absolute;
      bottom: 2.1em;
      right: 0;
      span {
        &.active {
          opacity: 0;
          animation: show 1.5s linear forwards;
        }
      }
      .sentence {
        display: block;
        span {
          font-size: 1.375em;
        }
      }
      .sentenceFrom {
        padding-right: 1.25em;
        span {
          &:first-child {
            &:before {
              content: "「";
              position: relative;
              top: 0.375em
            }
          }
          &:last-child {
            &:after {
              content: "」";
              position: relative;
              bottom: 0.375em
            }
          }
        }
      }
    }
  }
  &-copyright{
    writing-mode: vertical-lr;
    position: absolute;
    right: 0.3125em;
    top: 50%;
    font-size: 0.875em;
    opacity: 0.5;
    transform: translateY(-50%);
    letter-spacing: 0.625em;
    height: max-content;
  }
}

@keyframes show {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media screen and (max-width:780px){
  .color-container{
    max-width: 100vw;
    position: relative;
  }
    .color-container-color{
      position: fixed;
      top:0;
      left:0;
      background-color: rgba(255,255,255, 0.7);
      z-index: 10;
    }
    .color-container-name{
      width: 100vw;
      display: flex;
      justify-content: center;
    }
    .color-container-sentence{
      width: 100vw;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .color-copyright{
      display: none;
    }
}
@media screen and (min-width: 781px) and (max-width: 1500px){
  .color-container{
    max-width: 75vw;
    position: relative;
  }
}
</style>
