import Vue from 'vue'

Vue.mixin({
    methods: {
        success(rest){
            return this.$message.success(rest)
        },
        warn(rest){
            return this.$message.warning(rest)
        },
        error(rest){
            return this.$message.error(rest)
        },
        info(rest){
            return this.$message(rest)
        },
    }
})
