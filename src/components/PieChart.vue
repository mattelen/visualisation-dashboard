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
                    maintainAspectRatio: false,
                    title : {
                        text : ""
                    }
                }
            },
        },
        title: {
            type: String,
            default: function () {
                return ""
            }
        }
    },
    mounted () {
        const options = this.options
        if(this.title.length > 0) {
            options['title']['text'] = this.title
            options['title']['display'] = true
        }
        this.renderChart(this.chartdata, options)
    }
}
</script>
