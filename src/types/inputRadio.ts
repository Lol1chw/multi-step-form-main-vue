import type { Component, ComputedRef } from "vue"

export type Options = {
    icon: Component
    title: string
    price: ComputedRef<number>
}

export type MyInputRadioProps = {
    type: 'myRadio'
    myOptions: Options[]
    period: boolean
}