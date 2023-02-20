import Card from "../../src/components/Card.vue"
import { RouterLinkStub, shallowMount } from "@vue/test-utils";

describe("Card.vue", () => {
    const propsData = {
        imgSrc: "https://cdn2.thecatapi.com/images/FJ89mXP4p.jpg",
        breed: "Balinese",
        country: "US",
        description: "Affectionate, Intelligent, Playful",
        id: "FJ89mXP4p"
    }


    const wrapper = shallowMount(Card, {
        props: propsData,
        global: {
            stubs: {
                "router-link": RouterLinkStub,
            },
        }
    })

    test("renders image", async () => {
        const img = wrapper.get("img")
        expect(img.exists()).toBe(true)
    })

    test("renders breed name", async () => {
        const card = wrapper.get(".card-body")
        expect(card.text()).toContain(propsData.breed)
    })

    test("renders country code", async () => {
        const card = wrapper.get(".card-body")
        expect(card.text()).toContain(propsData.country)
    })

    test("renders temperament description", async () => {
        const card = wrapper.get(".card-body")
        expect(card.text()).toContain(propsData.description)
    })

    test("redirect user to selected cat", async () => {
        wrapper.vm.redirectToCatDetails = jest.fn()
        await wrapper.get("button").trigger("click")
        expect(wrapper.vm.redirectToCatDetails).toHaveBeenCalledWith(propsData.id)
    })
})