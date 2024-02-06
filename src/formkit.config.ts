import { createInput } from '@formkit/vue';
import type { DefaultConfigOptions } from '@formkit/vue';

import MyInputRadio from '@/components/inputs/inputRadio/ui/MyInputRadio.vue';
import MyInputSwitcher from '@/components/inputs/inputSwitcher/ui/MyInputSwitcher.vue';
import MyInputCheckbox from '@/components/inputs/inputCheckbox/ui/MyInputCheckbox.vue';

export const formkitConfig: DefaultConfigOptions = {
    inputs: {
        myRadio: createInput(MyInputRadio, {
            type: 'input',
            props: ['myOptions', 'period']
        }),
        switcher: createInput(MyInputSwitcher, {
            type: 'input',
        }),
        myCheckbox: createInput(MyInputCheckbox, {
            type: 'input',
            props: ['myOptions', 'period']
        })
    }
}