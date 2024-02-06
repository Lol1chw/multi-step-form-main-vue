export type MyInputCheckboxProps = {
    type: 'myCheckbox'
    myOptions: Options[]
    period: boolean
}

export type Options = {
    title: string
    description: string
    price: number
}