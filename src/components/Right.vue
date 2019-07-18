<template>
    <div class="right">
        <div class="wrap">
            <div class="chart" id="chart" ref="chart"></div>
        </div>
        <rate :rate="rate"></rate>
        <p v-if="rate>70">(๑•̀ㅂ•́)و✧</p>
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
                        data: [
                            {value: 335, name: '直接访问', selected: true},
                            {value: 310, name: '邮件营销'},
                            {value: 234, name: '联盟广告'},
                            {value: 234, name: 'sdf'},
                            {value: 135, name: '视频广告'},
                            {value: 123, name: ''}
                        ]
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
        this.chart = echarts.init(this.$refs.chart).setOption(this.options)
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
        flex-grow: 1;
        flex-basis: 600px;
        > .wrap {
            padding-top: 65%;
            position: relative;
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
