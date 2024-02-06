import type { FormKitInputs } from '@formkit/inputs'
import type { MyInputRadioProps } from '@/types/inputRadio'
import type { MyInputSwitcherProps } from '@/types/inputSwitcher'

declare module '@formkit/inputs' {
  interface FormKitInputProps<Props extends FormKitInputs<Props>> {
    myRadio: MyInputRadioProps
    switcher: MyInputSwitcherProps
  }
}