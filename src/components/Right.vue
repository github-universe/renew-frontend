<template>
    <div class="right flex">
        <div class="wrap">
            <div>
                <div class="chart" id="chart" ref="chart"></div>
            </div>
        </div>
        <div>
            <rate :rate="rate"></rate>
            <p v-if="rate>70">(๑•̀ㅂ•́)و✧</p>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
// import Highcharts from 'highcharts'
// import config from './config'
// import Exporting from 'highcharts/modules/exporting'

// Exporting(Highcharts)

export default {
    // model: {
    //     prop: 'value',
    //     event: 'change'
    // },
    data() {
        return {
            rate: 73,
            chart: null,
            options: {
                tooltip: {
                    trigger: 'item',
                    formatter({data}) {
                        return data.name && (data.name + ': ' + data.value)
                    },
                },
                color: ['#0c91ef', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#ddd'],
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '50%',
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '18',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: []
                    }
                ]
            },
            // data ----- ----- ----- ----- ----- data⥣ ----- ----- ----- ----- ----- ----- -----
        }
    },
    computed: {
        // vuexmap ----- ----- ----- computed⥣ ----- vuexmap⥥ ----- ----- ----- ----- -----
    },
    created() {
        // created ----- ----- ----- ----- ----- created⥣ ----- ----- ----- ----- ----- ----- -----
    },
    mounted() {
        this.chart = echarts.init(this.$refs.chart) //.setOption(this.options)
        // let residue = 100
        // config.series[0].data.forEach(e => {
        //     residue -= e.y
        // })
        // config.series[0].data.push({
        //     name: '待提升',
        //     y: residue,
        //     sliced: true,
        // })
        // log(config.series[0].data[6])
        // Highcharts.chart(this.$refs.chart, config)
        // mounted ----- ----- ----- ----- ----- mounted⥣ ----- ----- ----- ----- ----- ----- -----
    },
    watch: {
        rates(rates) {
            this.options.series[0].data = [{value: this.origin, name: '目前续约率'}, ...rates]
            const {data} = this.options.series[0]
            const sum = data.reduce((a, b) => {
                return a + b.value
            }, 0)
            const len = data.length
            if (100 - sum > 0) {
                this.options.series[0].data.push({
                    name: '',
                    value: 100 - sum
                })
                log(100 - sum)
                this.options.color[len] = '#fff'
            }

            this.chart.setOption(this.options)
        },
        // watch ----- ----- ----- ----- ----- watch⥣ ----- ----- ----- ----- ----- ----- -----
    },
    methods: {
        demoMethod() {
        },
        stop() {
        },
        // methods ----- ----- ----- methods⥣ ----- vuexmap⥥ ----- ----- ----- ----- -----
    },
    props: {
        company: {
            type: Object,
            default() {
            },
        },
        rates: {
            type: Array,
            default() {
            },
        },
        origin: {
            type: Number,
            default: 0,
        },
        // props ----- ----- ----- using_props⥣----- demo_props⥥ ----- ----- ----- ----- -----
        // ----- demo_props⥥ ----- Array Boolean Function Number Object String
        propsArray: {
            type: Array,
            default() {
            },
        },
        propsObject: {
            type: Object,
            default() {
            },
        },
        propsFunction: {
            type: Function,
            default() {
            },
        },
        propsNumber: {
            type: Number,
            default: 0,
        },
        propsString: {
            type: String,
            default: '',
        },
        propsBoolean: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        // components ----- ----- ----- ----- components⥣ ----- ----- ----- ----- ----- -----
    },
    name: 'Right',
}
</script>
<style lang="scss" scoped>
    .right {
        justify-content: center;
        > .wrap {
            width: 800px;
            position: relative;
            margin-right: 40px;
            > div {
                padding-top: 65%;
                position: relative;
            }
        }
        .chart {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
        }
        p {
            text-align: center;
            font-size: 40px;
            margin: 0;
        }
    }
</style>
