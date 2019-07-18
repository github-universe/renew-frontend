<template>
    <div class="rate" :style="style">
        <div>当前续约概率：
            <span :class="{good:rate>69,bad:rate<50}">{{rate}}%</span>
        </div>
        <img :src="good" v-if="showImg&&rate>69"/>
        <img :src="bad" v-if="showImg&&rate<=69" width="170"/>
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
            style: null,
            bad,
            good,
            // data ----- ----- ----- ----- ----- data⥣ ----- ----- ----- ----- ----- ----- -----
        }
    },
    computed: {
        // vuexmap ----- ----- ----- computed⥣ ----- vuexmap⥥ ----- ----- ----- ----- -----
    },
    created() {
        const {rate} = this
        if (rate > 100) {
            this.style = null
        } else if (rate > 69) {
            this.style = {
                transition: '1s',
                height: '145px'
            }
            setTimeout(() => {
                this.style = {
                    transition: '.6s',
                    height: '220px'
                }
            }, 2000)
        } else {
            this.style = {
                transition: '1s',
                height: '260px'
            }
        }
        // created ----- ----- ----- ----- ----- created⥣ ----- ----- ----- ----- ----- ----- -----
    },
    mounted() {
        // mounted ----- ----- ----- ----- ----- mounted⥣ ----- ----- ----- ----- ----- ----- -----
    },
    watch: {
        rate(rate) {
            if (rate > 100) {
                this.style = null
            } else if (rate > 69) {
                this.style = {
                    transition: '1s',
                    height: '145px'
                }
                setTimeout(() => {
                    this.style = {
                        transition: '.6s',
                        height: '220px'
                    }
                }, 2000)
            } else {
                this.style = {
                    transition: '1s',
                    height: '260px'
                }
            }
        }
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
        height: 0;
        overflow: hidden;
        padding: 20px 0 0;
        font-size: 20px;
        transition: 0s;
        &.active {
            height: 200px;
            transition: 1s;
        }
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
