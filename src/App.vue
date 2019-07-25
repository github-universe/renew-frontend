<template>
    <div id="app" class="app">
        <r-header></r-header>
        <r-nav @tab="switchover" :tab="tab"></r-nav>
        <router-view></router-view>
        <!--<canvas ref="c" width="88" height="88"></canvas>-->
    </div>
</template>

<script>
import Nav from './components/Nav'
import Header from './components/Header'

export default {
    name: 'app',
    components: {
        'r-header': Header,
        'r-nav': Nav,
    },
    data() {
        return {
            tab: 1
        }
    },
    methods: {
        switchover(e) {
            this.tab = e
        },
        // search(e) {
        //     const c = this.$refs.c.getContext('2d')
        //     c.beginPath();
        //     c.arc(44, 44, 40, 0, 2 * Math.PI);
        //     c.strokeStyle = 'rgb(12, 130, 222)'
        //     c.lineWidth = 4
        //     c.stroke()
        //     c.font = "50px Georgia";
        //     c.fillStyle = 'rgb(12, 130, 222)'
        //     c.fillText('宝', 20, 60, 50);
        //     if (e) {
        //     }
        // },
    },
}
</script>

<style lang="scss">
    * {
        box-sizing: border-box;
        outline: none;
    }

    body {
        color: #555;
        font-family: "微软雅黑", "Helvetica Neue", Helvetica, Arial, sans-serif, "微软雅黑", "Microsoft YaHei";
        font-size: 14px;
        padding: 0;
        margin: 0;
    }

    .flex {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .flex > .grow {
        flex-grow: 1;
    }

    .app {
        min-width: 1000px;
    }

    input, button {
        min-height: 40px;
        border: 1px solid transparent;
        /*border-radius: 3px;*/
        line-height: 38px;
        padding: 0 16px;
    }

    button {
        cursor: pointer;
    }

    .pointer {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    i, em {
        font-style: normal;
    }

    table {
        border-collapse: collapse;
    }
</style>
