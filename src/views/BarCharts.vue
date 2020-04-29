<template>
    <div class="bar-charts">
        <BarChart :chartdata="prepareData('gender', this.$store.state.people)"/>
        <BarChart :chartdata="prepareData('eyeColor', this.$store.state.people)"/>
    </div>
</template>

<style scoped lang="scss">
  .bar-charts{
    display: flex;
    justify-content: center;
  }
</style>


<script>
    import BarChart from "@/components/BarChart";
    import {chartDataProcessingMixin} from "@/components/mixins/chartDataProcessing";

    export default {
        components: {BarChart},
        mixins: [chartDataProcessingMixin]
    }
</script>
