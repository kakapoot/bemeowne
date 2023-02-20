import { shallowMount } from "@vue/test-utils";
import App from "../../src/App.vue"

describe("App", () => {
    const wrapper = shallowMount(App)

    test('renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot()
    })
});