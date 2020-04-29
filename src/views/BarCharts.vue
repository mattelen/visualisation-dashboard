<template>
    <div class="bar-charts">
        <BarChart :chartdata="prepareData('gender', this.$store.state.people)" title="Gender"/>
        <BarChart :chartdata="prepareData('eyeColor', this.$store.state.people)" title="Eye Colour"/>
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
