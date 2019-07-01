<template>
<div v-if="isLoaded" class="container-css">
    <!-- <i class="iconfont">&#xe612;</i> -->
    <div class="content-css">
      <div id="myChart">1</div>
      <div id="myChart0">2</div>
    </div>
    <div class="content-css1">
      <div id="myChart1">2</div>
      <div id="myChart3">3</div>
    </div>
    <div class="content-css2">
      <div id="myChart2">3</div>
    </div>
</div>
</template>

<script>
// import { batchQuery, warehouseQuery } from '../../api/account'
import { createNamespacedHelpers } from 'vuex'
// import hkJson from '@node_modules/echarts/map/js'
import hkJson from './api/HK'
// import DTJson from './api/DT'
import BMap from 'BMap'

const { mapGetters, mapActions } = createNamespacedHelpers(
  'directoryList/directoryList'
)

const weatherIcons = {
  'Sunny': './data/asset/img/weather/sunny_128.png',
  'Cloudy': './data/asset/img/weather/cloudy_128.png',
  'Showers': './data/asset/img/weather/showers_128.png'
}
const seriesLabel = {
  normal: {
    show: true,
    textBorderColor: '#333',
    textBorderWidth: 2
  }
}
// const objectCodes = [
//   'action_type',
//   'function_type',
//   'register_type',
//   'system_code'
// ]

export default {
  name: 'HelloWorld',
  data () {
    return {
      isLoaded: true,
      canvsWidth: 500,
      app: {}
    }
  },
  async created () {
    this.getBaseInfo().then(() => {
      this.isLoaded = true
      console.log(this.dict)
    })
  },
  computed: {
    ...mapGetters(['dict', 'drop'])
  },
  mounted () { // 初始化展示页面
    this.drawLine3()
    this.drawLine4()
    this.drawLine()
    this.drawLine1()
    this.drawLine2()
    // Promise.all([batchQuery({ objectCodes }), warehouseQuery({})])
    //   .then(resArr => {
    //     const [dict] = resArr
    //     const toCamel = e => e.replace(/_(\w)/g, ($0, $1) => $1.toUpperCase())
    //     // 字典
    //     const dictRet = {}
    //     Object.keys(dict.data).forEach(e => {
    //       dictRet[toCamel(e)] = dict.data[e].details
    //     })
    //   })
  },
  methods: {
    drawLine3 () {
      document.getElementById('myChart0').style.width = this.canvsWidth + 'px'
      document.getElementById('myChart0').style.height = this.canvsWidth + 'px'
      let myChart = this.$echarts.init(document.getElementById('myChart0'))
      // 绘制图表
      myChart.setOption({
        title: { text: '柱状图表' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {
        },
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
      myChart.on('click', function (params) {
        console.log(params.componentType)
      })
    },
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      document.getElementById('myChart').style.width = this.canvsWidth + 'px'
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // myChart.showLoading()

      // $.get('data/asset/geo/HK.json', function (geoJson) {
      // myChart.hideLoading()

      this.$echarts.registerMap('HK', hkJson)

      myChart.setOption({
        title: {
          text: '香港18区人口密度 （2011）',
          subtext: '人口密度数据来自Wikipedia',
          sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c} (p / km2)'
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        visualMap: {
          min: 800,
          max: 50000,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
        series: [
          {
            name: '香港18区人口密度',
            type: 'map',
            mapType: 'HK', // 自定义扩展图表类型
            itemStyle: {
              normal: {label: {show: true}},
              emphasis: {label: {show: true}}
            },
            data: [
              {name: '中西区', value: 20057.34},
              {name: '湾仔', value: 15477.48},
              {name: '东区', value: 31686.1},
              {name: '南区', value: 6992.6},
              {name: '油尖旺', value: 44045.49},
              {name: '深水埗', value: 40689.64},
              {name: '九龙城', value: 37659.78},
              {name: '黄大仙', value: 45180.97},
              {name: '观塘', value: 55204.26},
              {name: '葵青', value: 21900.9},
              {name: '荃湾', value: 4918.26},
              {name: '屯门', value: 5881.84},
              {name: '元朗', value: 4178.01},
              {name: '北区', value: 2227.92},
              {name: '大埔', value: 2180.98},
              {name: '沙田', value: 9172.94},
              {name: '西贡', value: 3368},
              {name: '离岛', value: 806.98}
            ],
            // 自定义名称映射
            nameMap: {
              'Central and Western': '中西区',
              'Eastern': '东区',
              'Islands': '离岛',
              'Kowloon City': '九龙城',
              'Kwai Tsing': '葵青',
              'Kwun Tong': '观塘',
              'North': '北区',
              'Sai Kung': '西贡',
              'Sha Tin': '沙田',
              'Sham Shui Po': '深水埗',
              'Southern': '南区',
              'Tai Po': '大埔',
              'Tsuen Wan': '荃湾',
              'Tuen Mun': '屯门',
              'Wan Chai': '湾仔',
              'Wong Tai Sin': '黄大仙',
              'Yau Tsim Mong': '油尖旺',
              'Yuen Long': '元朗'
            }
          }
        ]
      })
      // })
    },
    drawLine1 () {
      // 基于准备好的dom，初始化echarts实例
      document.getElementById('myChart1').style.width = this.canvsWidth + 'px'
      let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
      myChart1.resize()
      // 绘制图表
      myChart1.setOption({
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['City Alpha', 'City Beta', 'City Gamma']
        },
        grid: {
          left: 100
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'value',
          name: 'Days',
          axisLabel: {
            formatter: '{value}'
          }
        },
        yAxis: {
          type: 'category',
          inverse: true,
          data: ['Sunny', 'Cloudy', 'Showers'],
          axisLabel: {
            formatter: function (value) {
              return '{' + value + '| }\n{value|' + value + '}'
            },
            margin: 20,
            rich: {
              value: {
                lineHeight: 30,
                align: 'center'
              },
              Sunny: {
                height: 40,
                align: 'center',
                backgroundColor: {
                  image: weatherIcons.Sunny
                }
              },
              Cloudy: {
                height: 40,
                align: 'center',
                backgroundColor: {
                  image: weatherIcons.Cloudy
                }
              },
              Showers: {
                height: 40,
                align: 'center',
                backgroundColor: {
                  image: weatherIcons.Showers
                }
              }
            }
          }
        },
        series: [
          {
            name: 'City Alpha',
            type: 'bar',
            data: [165, 170, 30],
            label: seriesLabel,
            markPoint: {
              symbolSize: 1,
              symbolOffset: [0, '50%'],
              label: {
                normal: {
                  formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
                  backgroundColor: 'rgb(242,242,242)',
                  borderColor: '#aaa',
                  borderWidth: 1,
                  borderRadius: 4,
                  padding: [4, 10],
                  lineHeight: 26,
                  // shadowBlur: 5,
                  // shadowColor: '#000',
                  // shadowOffsetX: 0,
                  // shadowOffsetY: 1,
                  position: 'right',
                  distance: 20,
                  rich: {
                    a: {
                      align: 'center',
                      color: '#fff',
                      fontSize: 18,
                      textShadowBlur: 2,
                      textShadowColor: '#000',
                      textShadowOffsetX: 0,
                      textShadowOffsetY: 1,
                      textBorderColor: '#333',
                      textBorderWidth: 2
                    },
                    b: {
                      color: '#333'
                    },
                    c: {
                      color: '#ff8811',
                      textBorderColor: '#000',
                      textBorderWidth: 1,
                      fontSize: 22
                    }
                  }
                }
              },
              data: [
                {type: 'max', name: 'max days: '},
                {type: 'min', name: 'min days: '}
              ]
            }
          },
          {
            name: 'City Beta',
            type: 'bar',
            label: seriesLabel,
            data: [150, 105, 110]
          },
          {
            name: 'City Gamma',
            type: 'bar',
            label: seriesLabel,
            data: [220, 82, 63]
          }
        ]
      })
    },
    drawLine2 () {
      // 基于准备好的dom，初始化echarts实例
      document.getElementById('myChart2').style.width = this.canvsWidth + 'px'
      let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
      // 绘制图表
      myChart2.setOption({
        title: { text: '折线图表' },
        tooltip: {},
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [20, 80, 400, 934, 400, 110, 10],
          type: 'line',
          areaStyle: {}
        }]
      })
    },
    drawLine4 () {
      document.getElementById('myChart3').style.width = this.canvsWidth + 'px'
      document.getElementById('myChart3').style.height = this.canvsWidth + 'px'
      let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
      this.app.title = '热力图与百度地图扩展'
      // this.$http.get('static/DT.json', function (data) {
      //   debugger
      //   var points = [].concat.apply([], data.map(function (track) {
      //     return track.map(function (seg) {
      //       return seg.coord.concat([1])
      //     })
      //   }))
      this.$http.get('static/DT.json').then(res => {
        var points = [].concat.apply([], res.map(function (track) {
          return track.map(function (seg) {
            return seg.coord.concat([1])
          })
        }))
        myChart3.setOption({
          animation: false,
          bmap: {
            center: [120.13066322374, 30.240018034923],
            zoom: 14,
            roam: true
          },
          visualMap: {
            show: false,
            top: 'top',
            min: 0,
            max: 5,
            seriesIndex: 0,
            calculable: true,
            inRange: {
              color: ['blue', 'blue', 'green', 'yellow', 'red']
            }
          },
          series: [{
            type: 'heatmap',
            mapType: 'DT',
            coordinateSystem: 'bmap',
            data: points,
            pointSize: 5,
            blurSize: 6
          }]
        })
        console.log(myChart3)
        if (!this.app.inNode) {
          var bmap = myChart3.getModel().getComponent('bmap').getBMap()
          bmap.addControl(new BMap.MapTypeControl())
        }
        // debugger
        // var map = new BMap.Map('myChart3')
        // var point = new BMap.Point(116.390067, 39.922817)
        // var marker = new BMap.Marker(point)
        // map.addOverlay(marker)// 添加一个标注
        // map.centerAndZoom(point, 13)// 添加初始化中心点及地图层级
        // map.enableScrollWheelZoom()// 开启鼠标滚轮缩放功能。仅对PC上有效
        // map.enableContinuousZoom()// 启用连续缩放效果，默认禁用
        myChart3.on('click', function (params) {
          console.log(params.componentType)
        })
      })
    },
    ...mapActions(['getBaseInfo'])
  }
}
</script>

<style scoped>
.container-css{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:center;
}
.content-css #myChart,.content-css1 #myChart1,.content-css2 #myChart2{
  width: 30%;
  height: 500px;
}
.content-css1 #myChart1{
  margin: 0px 20px 0px 20px;
}
</style>
