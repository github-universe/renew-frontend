<template>
    <div class="detail">
        <div style="padding: 20px;">
            <!--<el-button @click="searchBase" type="primary">search base</el-button>-->
            <!--<el-button @click="searchTest" type="primary">search test</el-button>-->
        </div>
        <div class="left flex">
            <template v-if="company">
                <table>
                    <tbody>
                        <tr>
                            <td style="user-select: none">公司名称
                                <i @click="remove(company)" v-if="stared" class="heart el-icon-star-on"></i>
                                <i @click="collect(company)" v-else class="heart el-icon-star-off"></i>
                            </td>
                            <td>{{company.companyName}}</td>
                            <td>开始时间</td>
                            <td>{{company.beginAt}}</td>
                            <td>结束时间</td>
                            <td>{{company.endAt}}</td>
                        </tr>
                        <tr>
                            <td>账号数量</td>
                            <td>{{company.accountNum}}</td>
                            <td>IP登录数</td>
                            <td>{{company.ipLogin}}</td>
                            <td>时区</td>
                            <td>{{company.timeZoneId}}</td>
                        </tr>
                        <tr>
                            <td>席位</td>
                            <td>{{company.seats}}</td>
                            <td>独立规则</td>
                            <td>{{company.ruleIndependentNum}}</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>公司拥有角色</td>
                            <td colspan="5" style="max-width:450px">
                                <span v-for="key in roles" :key="key">
                                    <span>{{key}}:</span>
                                    <i>{{company[key]}}</i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>登录次数</td>
                            <td>{{company.loginNum}}</td>
                            <td>检索次数
                                <a style="color:#F56C6C;font-size:20px;">*</a>
                            </td>
                            <td>{{company.searchNum}}</td>
                            <td>导出次数
                                <a style="color:#E6A23C;font-size:20px;">*</a>
                            </td>
                            <td>{{company.exportNum}}</td>
                        </tr>
                        <tr>
                            <td>导出PDF次数</td>
                            <td>{{company.exportPdfNum}}</td>
                            <td>导出excel次数</td>
                            <td>{{company.exportXlsNum}}</td>
                            <td>分析次数</td>
                            <td>{{company.analysisNum}}</td>
                        </tr>
                        <tr>
                            <td>专利地图次数</td>
                            <td>{{company.landscapeNum}}</td>
                            <td>详情查看次数</td>
                            <td>{{company.viewNum}}</td>
                            <td>化学检索次数</td>
                            <td>{{company.chemicalNum}}</td>
                        </tr>
                        <tr>
                            <td>邮件提醒次数</td>
                            <td>{{company.alertCreatedNum}}</td>
                            <td>工作空间创建次数</td>
                            <td>{{company.workSpaceCreatedNum}}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div style="width:180px">
                    <rate :rate="rate" show-img></rate>
                </div>
            </template>
        </div>
        <right :company="company" v-if="company" :rates="rates" :origin="rate"></right>
    </div>
</template>

<script>
import * as ajax from '../http'
import Right from '../components/Right'

export default {
    // model: {
    //     prop: 'value',
    //     event: 'change'
    // },
    data() {
        return {
            rate: 1000,
            rates: [],
            roles: [
                'ays', 'dbAys', 'dbSearch', 'dbSuper', 'dbTrial', 'pro', 'landscape', 'npl',
                'smeBasic', 'workspace', 'chemicalMoc', 'ipreportPro', 'insights',
            ],
            statistics: [
                'loginNum', 'searchNum', 'exportNum', 'exportPdfNum', 'exportXlsNum', 'analysisNum',
                'landscapeNum', 'viewNum', 'chemicalNum', 'alertCreatedNum', 'workSpaceCreatedNum'
            ],
            keys: ['companyName', 'accountNum', 'ipLogin', 'timeZoneId', 'seats',
                'loginNum', 'ruleIndependentNum', 'ays', 'dbAys', 'dbSearch', 'dbSuper',
                'dbTrial', 'pro', 'landscape', 'npl', 'smeBasic', 'workspace', 'chemicalMoc',
                'ipreportPro', 'insights', 'searchNum', 'exportNum', 'exportPdfNum',
                'exportXlsNum', 'analysisNum', 'landscapeNum', 'viewNum', 'chemicalNum',
                'alertCreatedNum', 'workSpaceCreatedNum', 'renew', 'beginAt', 'endAt'],
            company: null,
            collectionIds: [],
            // data ----- ----- ----- ----- ----- data⥣ ----- ----- ----- ----- ----- ----- -----
        }
    },
    computed: {
        stared() {
            return this.collectionIds.includes(this.$route.params.id)
        },
        // vuexmap ----- ----- ----- computed⥣ ----- vuexmap⥥ ----- ----- ----- ----- -----
    },
    created() {
        const ids = localStorage.getItem('collectionIds')
        try {
            this.collectionIds = ids.split('-')
        } catch (e) {
        }
        this.searchCompany()
        // created ----- ----- ----- ----- ----- created⥣ ----- ----- ----- ----- ----- ----- -----
    },
    mounted() {
        // mounted ----- ----- ----- ----- ----- mounted⥣ ----- ----- ----- ----- ----- ----- -----
    },
    watch: {
        $route() {
            this.searchCompany()
        },
        // watch ----- ----- ----- ----- ----- watch⥣ ----- ----- ----- ----- ----- ----- -----
    },
    methods: {
        searchBase() {
            return this.get('https://www.easy-mock.com/mock/5d309f806fc90610f4b1562b/renew/base').then(e => {
                this.rate = Math.round(e.data.rate * 100)
            })
        },
        searchTest() {
            this.get('https://www.easy-mock.com/mock/5d309f806fc90610f4b1562b/renew/test').then(e => {
                this.rates = e.data.data
            })
        },
        remove(company) {
            this.success('取消收藏成功')
            const i = this.collectionIds.indexOf(company.companyId)
            this.collectionIds.splice(i, 1)
            localStorage.setItem('collectionIds', this.collectionIds.join('-'))
        },
        collect(company) {
            this.success('收藏成功')
            this.collectionIds.push(company.companyId)
            this.collectionIds = Array.from(new Set(this.collectionIds))
            localStorage.setItem('collectionIds', this.collectionIds.join('-'))
        },
        searchCompany() {
            this.get('https://www.easy-mock.com/mock/5d309f806fc90610f4b1562b/renew/company').then(e => {
                log('detail', e.data)
                this.company = e.data
                this.searchBase().then(() => {
                    this.searchTest()
                })
            })
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
        Right,
        // components ----- ----- ----- ----- components⥣ ----- ----- ----- ----- ----- -----
    },
    name: 'CompanyDetail',
}
</script>
<style lang="scss" scoped>
    .detail {
        align-items: flex-start;
        padding: 0 30px;
        table {
            flex: 1;
            margin-right: 30px;
        }
        .left {
            padding-right: 30px;
            flex-grow: 3;
            flex-basis: 630px;
            flex-wrap: wrap;
            td {
                border: 1px solid #eee;
                padding-left: 10px;
                padding-right: 10px;
                min-height: 34px;
                height: 34px;
                min-width: 110px;
                white-space: normal;
                word-break: break-word;
                > span {
                    padding: 4px 10px;
                    float: left;
                }
                i {
                    padding: 0 3px;
                    text-decoration: underline;
                }
            }
        }
        tr:nth-of-type(even) {
            background: #f5f5f5;
        }
        .heart {
            vertical-align: middle;
            cursor: pointer;
            text-decoration: none !important;
            font-size: 18px;
            color: #0c91ef;
        }
        .el-icon-star-on {
            font-size: 20px;
        }
    }
</style>
