import {shallowMount} from '@vue/test-utils'
import {chartDataProcessingMixin} from "../../src/components/mixins/chartDataProcessing";

test('prepareData Test', () => {
    // This tests the prepareData function in chartDataProcessing.js
    const Component = {
        render() {
        },
        mixins: [chartDataProcessingMixin]
    }
    const wrapper = shallowMount(Component);
    const sampleData = [
        {
            "gender": "female",
        },
        {
            "gender": "male",
        },
        {
            "gender": "male",
        }
    ];

    const results = wrapper.vm.prepareData('gender', sampleData);

    expect(results['labels'][0]).toMatch('female') // If the first gender is a Female
    expect(results["datasets"][0]['data'][0]).toEqual(1) // If there is one female
    expect(results["datasets"][0]['data'][1]).toEqual(2) // If there are two Males
    expect(results["datasets"][0]['data'][1]).not.toEqual(1) // If there are not two Males
})

