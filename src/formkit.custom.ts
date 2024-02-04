import type { FormKitInputs } from '@formkit/inputs'
import type { MyInputRadioProps } from '@/types/inputRadio'

declare module '@formkit/inputs' {
  interface FormKitInputProps<Props extends FormKitInputs<Props>> {
    myRadio: MyInputRadioProps
  }
}