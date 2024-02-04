import type { Component } from "vue"

export type Options = {
    icon: Component
    title: string
    price: number
}

export type MyInputRadioProps = {
    type: 'myRadio'
    myOptions: Options[]
}