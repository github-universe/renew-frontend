<template>
    <div class="header flex">
        <router-link to="/" class="flex logo">
            <div>
                <img :src="logo" width="70"/>
            </div>
            <h2>续约宝</h2>
        </router-link>
        <i class="grow"></i>
        <div class="flex">
            <el-select v-model="companyId" filterable placeholder="请选择"
                       @change="change" @focus="focus"
                       :filter-method="filterMethod">
                <el-option
                        v-for="item in options"
                        :key="item.id"
                        :label="item.companyName"
                        :value="item.id">
                </el-option>
            </el-select>
            <!--<input type="text" v-model="companyName" placeholder="请输入公司名称"-->
            <!--@blur="blur"-->
            <!--/>-->
            <button @click="search">搜索</button>
            <!--<div class="collection pointer" @click="goCollection">-->
            <!--<i class="el-icon-collection"></i>-->
            <!--<span>我的收藏</span>-->
            <!--</div>-->
        </div>
        <!--<div class="favor">我的收藏</div>-->
    </div>
</template>

<script>
import mapping from '../assets/mapping'
import * as L from 'list'
import logo from '../assets/logo.jpg'

export default {
    // model: {
    //     prop: 'value',
    //     event: 'change'
    // },
    data() {
        return {
            logo,
            options: [],
            companyId: '',
            // data ----- ----- ----- ----- ----- data⥣ ----- ----- ----- ----- ----- ----- -----
        }
    },
    computed: {},
    created() {
        this.resetOption()
        // created ----- ----- ----- ----- ----- created⥣ ----- ----- ----- ----- ----- ----- -----
    },
    mounted() {
        // mounted ----- ----- ----- ----- ----- mounted⥣ ----- ----- ----- ----- ----- ----- -----
    },
    watch: {
        // watch ----- ----- ----- ----- ----- watch⥣ ----- ----- ----- ----- ----- ----- -----
    },
    methods: {
        resetOption() {
            this.options = []
            for (let i = 0; i < 5; i++) {
                this.options.push(mapping[i])
            }
        },
        goCollection() {
            this.$router.push('/')
        },
        filterMethod(e) {
            let str = e.trim().toLowerCase()
            const all = L.list(...mapping)
            let list = []
            const filtered = L.filter(
                p => p.companyName.toLowerCase().indexOf(str) > -1,
                all,
            )
            list = filtered.prefix.concat(filtered.suffix)
            this.options = list
        },
        focus(e) {
        },
        change(e) {
        },
        search() {
            if (this.companyId) {
                this.$router.push(`/detail/${this.companyId}`)
            }
        },
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
    name: 'Header',
}
</script>
<style lang="scss" scoped>
    .header {
        margin: 0 auto;
        padding: 12px 50px;
        .logo {
            align-items: center;
            height: 60px;
            img {
            }
        }
        h2 {
            color: rgb(12, 145, 239);
        }
        input, button {
            border: 2px solid rgb(12, 145, 239);
            font-size: 16px;
        }
        input::placeholder {
            font-size: 12px;
        }
        button {
            background: rgb(12, 145, 239);
            color: white;
            font-size: 16px;
        }
        .favor {
            cursor: pointer;
            margin-left: 24px;
            &:hover {
                color: rgb(12, 145, 239);
            }
        }
        .el-icon-collection {
            font-size: 24px;
            color: rgb(12, 145, 239);
            margin-left: 20px;
        }
        .collection {
            span {
                display: none;
                font-size: 12px;
                user-select: none;
            }
            &:hover span {
                position: absolute;
                display: inline-block;
                line-height: 24px;
                margin-left: 4px;
            }
        }
    }
</style>
<style lang="scss">
    .el-input input {
        height: 42px;
        border-radius: 0;
        border: 2px solid #0c91ef;
    }
</style>
