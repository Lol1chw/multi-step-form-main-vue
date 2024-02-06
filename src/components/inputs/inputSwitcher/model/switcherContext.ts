import { provide, inject } from "vue"
import type { InjectionKey, Ref } from "vue"

const symbol = Symbol()

function useProvide(key: InjectionKey<Switch> | string, value: Switch): void {
    provide(key, value)
}

function useSwitcher (key: InjectionKey<Switch> | string): Switch {
    return inject(key) as Switch
}

type Switch = {
    period: Ref<boolean>
}

export { useProvide, useSwitcher, symbol }