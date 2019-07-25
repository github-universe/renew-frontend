<template>
    <div class="favorite">
        <r-table :r-data="list" :collection-ids="collectionIds"></r-table>
    </div>
</template>

<script>
import Table from '../components/Table'
import {getCompanyInfo} from '../http'

export default {
    // model: {
    //     prop: 'value',
    //     event: 'change'
    // },
    data() {
        return {
            collectionIds: [],
            list: [],
            // data ----- ----- ----- ----- ----- data⥣ ----- ----- ----- ----- ----- ----- -----
        }
    },
    computed: {
        // vuexmap ----- ----- ----- computed⥣ ----- vuexmap⥥ ----- ----- ----- ----- -----
    },
    created() {
        let ids = localStorage.getItem('collectionIds')
        try {
            ids = ids.replace(/(\-)+/g, '-')
            this.collectionIds = ids.split('-')
            this.collectionIds = Array.from(new Set(this.collectionIds))
        } catch (e) {
        }
        const len = this.collectionIds.length
        const list = Array(len).fill(undefined)
        this.collectionIds.forEach((id, index) => {
            id && getCompanyInfo(id).then(e => {
                list[index] = e
                if (list.every(e => e)) {
                    list.reduceRight((a, b) => {
                        this.list = this.list.concat(b)
                    }, undefined)
                }
            })
        })
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
        'r-table': Table,
        // components ----- ----- ----- ----- components⥣ ----- ----- ----- ----- ----- -----
    },
    name: 'Favorite',
}
</script>
<style lang="scss" scoped>
    .favorite {
    }
</style>
