<script>
    // Using https://vue-chartjs.org/
    import {Bar} from 'vue-chartjs'

    export default {
        extends: Bar,
        mixins: [],
        props: {
            chartdata: {
                type: Object,
                default: null
            },
            title: {
                type: String,
                default: function () {
                    return ""
                }
            },
            options: {
                type: Object,
                default: function () {
                    return {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        },
                        legend: {
                            display: false
                        },
                        title: {
                            text: ""
                        }
                    }
                },
            }
        },
        mounted() {
            const options = this.options
            if (this.title.length > 0) {
                options['title']['text'] = this.title
                options['title']['display'] = true
            }
            this.renderChart(this.chartdata, options)
        }
    }
</script>
