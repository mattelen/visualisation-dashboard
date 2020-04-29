<template>
    <div class="pie-charts">
        <PieChart :chartdata="prepareData('gender', this.$store.state.people)" title="Gender"/>
        <PieChart :chartdata="prepareData('eyeColor', this.$store.state.people)" title="Eye Colour"/>
    </div>
</template>

<style scoped lang="scss">
    .pie-charts{
        display: flex;
        justify-content: center;
    }
</style>

<script>
    // @ is an alias to /src
    import PieChart from '@/components/PieChart.vue'
    import {chartDataProcessingMixin} from '@/components/mixins/chartDataProcessing.js'

    export default {
        name: 'PieCharts',
        mixins: [chartDataProcessingMixin],
        components: {
            PieChart
        },
    }
</script>
