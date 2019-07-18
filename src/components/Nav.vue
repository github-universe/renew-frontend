<template>
    <div class="nav">
        <!--<div class="wrap flex">-->
            <!--<span @click="click(1)" :class="{active:index==1}">我的收藏</span>-->
            <!--<span @click="click(2)" :class="{active:index==2}">公司列表</span>-->
            <!--<span @click="click(3)" :class="{active:index==3}">分析提高</span>-->
        <!--</div>-->
    </div>
</template>

<script>

export default {
    // model: {
    //     prop: 'value',
    //     event: 'change'
    // },
    data() {
        return {
            index: 1,
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
        // mounted ----- ----- ----- ----- ----- mounted⥣ ----- ----- ----- ----- ----- ----- -----
    },
    watch: {
        // watch ----- ----- ----- ----- ----- watch⥣ ----- ----- ----- ----- ----- ----- -----
    },
    methods: {
        click(i) {
            this.index = i
            this.$emit('tab', i)
        },
        demoMethod() {
        },
        stop() {
        },
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
    name: 'Nav',
}
</script>
<style lang="scss" scoped>
    .nav {
        min-width: 800px;
        min-height: 4px;
        background: rgb(12, 145, 239);
        .wrap {
            margin: 0 auto;
            width: 800px;
            justify-content: center;
            span {
                font-size: 15px;
                line-height: 50px;
                color: white;
                padding: 0 20px;
                cursor: pointer;
                &:hover, &.active {
                    background: rgba(255, 255, 255, .3);
                }
            }
        }
    }
</style>
