<template>
    <div class="pie-charts">
        <PieChart :chartdata="getPieChartData('gender')"/>
        <PieChart :chartdata="getPieChartData('eyeColor')"/>
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
    import _ from 'lodash'

    export default {
        name: 'PieCharts',
        components: {
            PieChart
        },
        data: function () {
            return {
                readyState: false
            }
        },
        computed: {
            getPeopleData() {
                return this.$store.state.people;
            }
        },
        methods:{
            /**
             * Organises the data ready for display in a Pie Chart
             * @param dataKey String The Key you want to graph
             * @return {{datasets: [{backgroundColor: methods.$store.state.defaultColours, data: []}], labels: []}}
             */
            getPieChartData(dataKey) {
                const processedData = [];
                const people = this.getPeopleData

                // Loop through each person and get the data from each
                _.forEach(people, (person) => {
                    const results = person[dataKey]

                    // If we haven't encountered this value before, then we need to add it to the mix
                    if (typeof processedData[results] === 'undefined') {
                        processedData[results] = 1;
                    } else {
                        processedData[results] = processedData[results] + 1;
                    }
                })

                //Format the data for Chart.js
                let keys = [];
                let values = [];
                _.forIn(processedData, function (amount, result) {
                    keys.push(result)
                    values.push(amount);
                });

                let backgroundColours = this.$store.state.defaultColours;

                //If we are using colours as values, then we should that colour as the background of the pie chart
                if(dataKey.toLowerCase().includes('color')) {
                    backgroundColours = keys
                }

                const returnData = {
                    labels: keys,
                    datasets: [{
                        data: values,
                        backgroundColor: backgroundColours
                    }]
                }

                return returnData
            }
        }
    }
</script>
