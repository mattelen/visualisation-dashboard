<script>
// Using https://vue-chartjs.org/
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    mixins: [],
    props: {
        chartdata: {
            type: Object,
            default: null
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
                    }
                }
            },
        }
    },
    mounted () {
        this.renderChart(this.chartdata, this.options)
    }
}
</script>
