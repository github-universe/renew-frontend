<template>
    <div class="right">
        <div>
            <div class="chart" ref="chart">{{company}}</div>
        </div>
        <p>(๑•̀ㅂ•́)و✧</p>
    </div>
</template>

<script>
import echarts from 'echarts'

export default {
    // model: {
    //     prop: 'value',
    //     event: 'change'
    // },
    data() {
        return {
            chart: null,
            options: null,
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
        this.chart = echarts.init(this.$refs.chart) // .setOption(this.options)
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
        > div {
            padding-top: 75%;
            position: relative;
        }
        .chart {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: red;
            position: absolute;
        }
        p {
            font-size: 40px;
            margin: 0;
        }
    }
</style>
