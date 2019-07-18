<template>
    <div class="table">
        <el-table :data="rData" style="width: 100%">
            <el-table-column prop="companyName" label="公司名称" min-width="200" fixed="left"></el-table-column>
            <el-table-column :prop="key" :label="label" min-width="180"
                             v-for="(label,key) in labels" :key="key"
            ></el-table-column>
            <el-table-column label="签约状态">
                <template slot-scope="{row}">
                    <span>{{status[row.renew]}}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" fixed="right" width="240">
                <template slot-scope="{row}">
                    <div @click="click(row)" class="pointer">
                        <span class="el-icon-thumb"></span>
                        <span>分析提高</span>
                    </div>
                    <div @click="collect(row)" class="pointer" v-if="!collectionIds.includes(row.companyId)">
                        <span class="el-icon-collection"></span>
                        <span>收藏</span>
                    </div>
                    <div @click="removeCollect(row)" class="pointer" v-else>
                        <span class="el-icon-collection remove"></span>
                        <span>取消收藏</span>
                    </div>
                </template>
            </el-table-column>
        </el-table>
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
            show: {
                companyName: true,
                beginAt: true,
                endAt: true,
                accountNum: true,
                ipLogin: true,
                seats: true,
                ruleIndependentNum: true,
            },
            status: {
                0: '未签约',
                1: '已签约',
                2: '待签约',
            },
            labels: {
                beginAt: '开始时间',
                endAt: '结束时间',
                accountNum: '账号数',
                ipLogin: 'IP登录数',
                seats: '席位',
                ruleIndependentNum: '独立规则',
                loginNum: '登录次数',
                searchNum: '检索次数',
                exportNum: '导出次数',
                exportPdfNum: '导出pdf次数',
                exportXlsNum: '导出excel次数',
                analysisNum: '分析次数',
                landscapeNum: '专利地图次数',
                viewNum: '详情查看次数',
                chemicalNum: '化学检索次数',
                alertCreatedNum: '邮件提醒次数',
                workSpaceCreatedNum: '工作空间创建次数',
            },
            // renew: '续约状态', // 0=未签约，1=已签约，2=待签约
            keys: ['companyName', 'accountNum', 'ipLogin', 'timeZoneId', 'seats',
                'loginNum', 'ruleIndependentNum', 'ays', 'dbAys', 'dbSearch', 'dbSuper',
                'dbTrial', 'pro', 'landscape', 'npl', 'smeBasic', 'workspace', 'chemicalMoc',
                'ipreportPro', 'insights', 'searchNum', 'exportNum', 'exportPdfNum',
                'exportXlsNum', 'analysisNum', 'landscapeNum', 'viewNum', 'chemicalNum',
                'alertCreatedNum', 'workSpaceCreatedNum', 'renew', 'beginAt', 'endAt'],
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
        collect(row) {
            // this.warn('99090')
            // this.info('99090')
            this.success('收藏成功')
            this.collectionIds.push(row.companyId)
            localStorage.setItem('collectionIds', this.collectionIds.join('-'))
            // this.error('99090')
        },
        removeCollect(row) {
            const i = this.collectionIds.indexOf(row.companyId)
            this.collectionIds.splice(i, 1)
            localStorage.setItem('collectionIds', this.collectionIds.join('-'))
            this.success('取消收藏成功')
        },
        click(row) {
            this.$router.push({
                name: 'Detail',
                params: {
                    id: row.companyId,
                    company: row,
                },
            })
        },
        demoMethod() {
        },
        stop() {
        },
        // methods ----- ----- ----- methods⥣ ----- vuexmap⥥ ----- ----- ----- ----- -----
    },
    props: {
        collectionIds: {
            type: Array,
            default() {
            },
        },
        rData: {
            type: Array,
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
    name: 'Table',
}
</script>
<style lang="scss">
    .table {
        margin-left: auto;
        margin-right: auto;
        th:nth-of-type(1), td:nth-of-type(1) {
            padding-left: 50px;
        }
        th:nth-last-of-type(1), td:nth-last-of-type(1) {
            padding-right: 50px;
        }
        div {
            display: inline-block;
            vertical-align: middle;
        }
        .pointer + .pointer {
            margin-left: 12px;
        }
        .el-icon-collection, .el-icon-thumb {
            font-size: 20px;
            color: rgb(12, 145, 239);
            border: 2px solid transparent;
            border-radius: 50%;
            padding: 2px;
            vertical-align: middle;
            & + span {
                line-height: 34px;
                font-size: 12px;
            }
        }
        .el-icon-collection.remove {
            color: rgba(12, 145, 239, .8);
            border: 2px solid rgba(12, 145, 239, .7);
            font-size: 18px;
            overflow: hidden;
            position: relative;
            &:after {
                transform: translate(-50%, -50%) rotateZ(45deg);
                background: rgba(12, 145, 239, .7);
                width: 2px;
                height: 100px;
                content: "";
                left: 50%;
                top: 50%;
                position: absolute;
            }
            & + span {
                margin-left: 2px;
                line-height: 34px;
            }
        }
    }
</style>
