import { provide, inject } from "vue"
import type { InjectionKey, Ref } from "vue"

const symbol = Symbol()

function useProvide(key: InjectionKey<Stepper> | string, value: Stepper): void {
  provide(key, value)
}

function useStepper (key: InjectionKey<Stepper> | string): Stepper {
  return inject(key) as Stepper
}

type Stepper = {
  currentStep: Ref<number>
  increment: () => void
  decrement: () => void
  confirm: () => void
}

export { useProvide, useStepper, symbol }
export type { Stepper }

