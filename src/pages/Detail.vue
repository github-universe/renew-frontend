<template>
    <div class="detail flex">
        <div class="left">
            <template v-if="company">
                <table>
                    <tbody>
                        <tr>
                            <td>公司名称
                                <i @click="collect">s</i>
                            </td>
                            <td>{{company.companyName}}</td>
                            <td>账号数量</td>
                            <td>{{company.accountNum}}</td>
                        </tr>
                        <tr>
                            <td>开始时间</td>
                            <td>{{company.beginAt}}</td>
                            <td>结束时间</td>
                            <td>{{company.endAt}}</td>
                        </tr>
                        <tr>
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
                        </tr>
                        <tr>
                            <td>公司拥有角色</td>
                            <td colspan="3" style="max-width:450px">
                                <span v-for="key in roles" :key="key">
                                    <span>{{key}}:</span>
                                    <i>{{company[key]}}</i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>登录次数</td>
                            <td>{{company.loginNum}}</td>
                            <td>检索次数</td>
                            <td>{{company.searchNum}}</td>
                        </tr>
                        <tr>
                            <td>导出次数</td>
                            <td>{{company.exportNum}}</td>
                            <td>导出PDF次数</td>
                            <td>{{company.exportPdfNum}}</td>
                        </tr>
                        <tr>
                            <td>导出excel次数</td>
                            <td>{{company.exportXlsNum}}</td>
                            <td>分析次数</td>
                            <td>{{company.analysisNum}}</td>
                        </tr>
                        <tr>
                            <td>次数</td>
                            <td>{{company.exportXlsNum}}</td>
                            <td>次数</td>
                            <td>{{company.analysisNum}}</td>
                        </tr>
                        <tr>
                            <td>专利地图次数</td>
                            <td>{{company.landscapeNum}}</td>
                            <td>详情查看次数</td>
                            <td>{{company.viewNum}}</td>
                        </tr>
                        <tr>
                            <td>化学检索次数</td>
                            <td>{{company.chemicalNum}}</td>
                            <td>邮件提醒次数</td>
                            <td>{{company.alertCreatedNum}}</td>
                        </tr>
                        <tr>
                            <td>工作空间创建次数</td>
                            <td>{{company.workSpaceCreatedNum}}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div class="rete">续约率：
                    <span :class="{good:rate>69,bad:rate<50}">{{rate}}%</span>
                </div>
                <img :src="good" v-if="rate>69"/>
                <img :src="bad" v-if="rate<50" width="170"/>
            </template>
        </div>
        <right :company="company" v-if="company"></right>
    </div>
</template>

<script>
import {getCompanyInfo} from '../http'
import Right from '../components/Right'
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
            rate: 85,
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
        collect(row) {
            // this.warn('99090')
            // this.info('99090')
            this.success('收藏成功')
            this.collectionIds.push(row.companyId)
            localStorage.setItem('collectionIds', this.collectionIds.join('-'))
            // this.error('99090')
        },
        searchCompany() {
            const {id, company} = this.$route.params
            if (!company || company.companyId !== id) {
                this.company = null
                getCompanyInfo(id).then(e => {
                    this.company = e[0]
                    // const k = Object.keys(e[0])
                    // log(k, k.length, this.keys.length)
                })
            } else {
                this.company = company
            }
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
        Right
        // components ----- ----- ----- ----- components⥣ ----- ----- ----- ----- ----- -----
    },
    name: 'Detail',
}
</script>
<style lang="scss" scoped>
    .detail {
        align-items: flex-start;
        padding: 0 30px;
        table {
            width: 100%;
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
        .rete {
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
    }
</style>
