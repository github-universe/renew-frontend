<template>
    <div class="charts" ref="chart"></div>
</template>

<script>
// import echarts from 'echarts'

export default {
    // model: {
    //     prop: 'value',
    //     event: 'change'
    // },
    data() {
        return {
            options: {
                title: {
                    text: '饼图程序调用高亮示例',
                    x: 'center'
                },
                // tooltip: {
                //     trigger: 'item',
                //     formatter: '{a} <br/>{b} : {c} ({d}%)'
                // },
                // legend: {
                //     orient: 'vertical',
                //     left: 'left',
                //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                // },
                series: [
                    {
                        // selectedMode: 'multiple',
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 335, name: '直接访问', selected: true},
                            {value: 310, name: '邮件营销', selected: true},
                            {value: 234, name: '联盟广告', selected: true},
                            {value: 135, name: '视频广告'},
                            {value: 1548, name: ''}
                        ],
                        labelLine: {
                            show: false,
                        },
                        itemStyle: {
                            // emphasis: {
                            //     shadowBlur: 10,
                            //     shadowOffsetX: 0,
                            //     shadowColor: 'rgba(0, 0, 0, 0.5)'
                            // }
                        },
                        hoverAnimation: false,
                        legendHoverLink: false,
                        emphasis: {
                            itemStyle: {
                                colors:['red','black']
                            }
                        },
                    }
                ]
            }
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
        // echarts.init(this.$refs.chart).setOption(this.options)
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
    name: 'Charts',
}
</script>
<style lang="scss" scoped>
    .charts {
        width: 800px;
        height: 600px;
    }
</style>
