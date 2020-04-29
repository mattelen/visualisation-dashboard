<script>
// Using https://vue-chartjs.org/
import { Pie } from 'vue-chartjs'

export default {
    extends: Pie,
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
                    maintainAspectRatio: false
                }
            },
        }
    },
    mounted () {
        this.renderChart(this.chartdata, this.options)
    }
}
</script>
