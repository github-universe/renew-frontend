<template>
    <div class="rate" v-if="rate<=100">
        <div>续约率：
            <span :class="{good:rate>69,bad:rate<50}">{{rate}}%</span>
        </div>
        <img :src="good" v-if="showImg&&rate>69"/>
        <img :src="bad" v-if="showImg&&rate<50" width="170"/>
    </div>
</template>

<script>
import good from '../assets/good.jpg'
import bad from '../assets/bad.jpg'

export default {
    // model: {
    //     prop: 'value',
    //     event: 'change'
    // },
    data() {
        return {
            bad,
            good,
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
        demoMethod() {
        },
        stop() {
        },
        // methods ----- ----- ----- methods⥣ ----- vuexmap⥥ ----- ----- ----- ----- -----
    },
    props: {
        showImg: {
            type: Boolean,
            default: false,
        },
        rate: {
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
    name: 'Rate',
}
</script>
<style lang="scss" scoped>
    .rate {
        padding: 30px 0 0;
        font-size: 20px;
        span {
            color: #E6A23C;
        }
        .good {
            color: #67C23A;
        }
        .bad {
            color: #F56C6C;
        }
    }
</style>
