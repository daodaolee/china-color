<template>
  <div class="w100 h100 color" :style="containerStyle">
    <div class="w100 h100 color-container">
      <div class="h100 color-container-color">
        <div v-for="(color, index) in colorData" :key="index">
          <div class="solarterm">{{ color[0].category }}</div>
          <div >
            <div
              v-for="(item, i) in color"
              :key="`${index}_${i}`"
              @click="setColor(item)"
            >
              <span>{{ item.name }}</span>
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
        <!-- <h4>
          <span
            v-for="(item, index) in colorObj.category.split('')"
            :key="index"
            :style="{ animationDelay: `${index * 0.1 + 0.5}s` }"
          >
            {{ item }}
          </span>
        </h4> -->
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
        background: `rgb(${r}, ${g}, ${b})`,
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
  &-container {
    width: 1100px;
    margin: 0 auto;
    position: relative;
    &-color {
      // width: 650px;
      position: absolute;
      top: 0;
      left: 0;
      height: calc(100vh - 20px);
      overflow-y: scroll;
      .scrollbar-hide();
      & > div {
        position: relative;
        top: 50px;
        display: flex;
        letter-spacing: 3px;
        & > div {
          left: 0;
          // display: flex;
          // flex-wrap: wrap;
          width: 380px;
          padding-bottom: 50px;
          display: flex;
          flex-wrap: wrap;
          div {
             
            writing-mode: vertical-lr;
            margin-bottom: 20px;
            margin-right: 20px;
            display: inline-block;
            padding-bottom: 20px;
            padding: 0px 5px 0 0px;
            cursor: pointer;
            letter-spacing: 4px;
            position: relative;

            span{
              position: relative;
              z-index: 2;
              font-size: 18px;
            }
            i {
              display: inline-block;
              position: absolute;
              right: 6px;
              top: -2px;
              width: 6px;
              height: 25px;
              z-index: 1;
              border-radius: 2px;
              // border-top-left-radius: 0;
              // border-top-left-radius: 0;
              // opacity: 0.5;
            }
          }
        }
      }

      .solarterm {
        writing-mode: vertical-lr;
        width: 65px;
      }
    }
    &-name {
      position: absolute;
      top: 20vh;
      right: 0;
      h2 {
        font-size: 80px;
        writing-mode: vertical-lr;
      }
      h4 {
        padding-top: 15px;
        font-size: 22px;
        text-align: right;
        padding-right: 10px;
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
      bottom: 35px;
      right: 0px;
      span {
        &.active {
          opacity: 0;
          animation: show 1.5s linear forwards;
        }
      }
      .sentence {
        span {
          font-size: 22px;
        }
      }
      .sentenceFrom {
        padding-right: 20px;
        // padding-top: 30px;
        span {
          &:first-child {
            &:before {
              content: "「";
              position: relative;
              top: 5px;
            }
          }
          &:last-child {
            &:after {
              content: "」";
              position: relative;
              bottom: 5px;
            }
          }
        }
      }
    }
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
</style>
