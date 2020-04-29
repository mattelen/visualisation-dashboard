import _ from 'lodash'


export const chartDataProcessingMixin = {
    name: 'chartDataProcessingMixin',
    methods: {
        /**
         * Organises the data ready for display in a Pie Chart
         * @param dataKey String The Key you want to graph
         * @param source Array Source of data to process
         * @return Object for Chart.js
         */
        prepareData: (dataKey, source) => {
            const processedData = [];

            // Loop through each person and get the data from each
            _.forEach(source, (person) => {
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

            let backgroundColours = ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477', '#66aa00', '#b82e2e', '#316395'];

            //If we are using colours as values, then we should that colour as the background of the pie chart
            if (dataKey.toLowerCase().includes('color')) {
                backgroundColours = keys
            }

            return {
                labels: keys,
                datasets: [{
                    data: values,
                    backgroundColor: backgroundColours
                }]
            }
        },
    }
}
