import { createInput } from '@formkit/vue';
import type { DefaultConfigOptions } from '@formkit/vue';

import MyInputRadio from '@/components/inputs/inputRadio/ui/MyInputRadio.vue';
import MySwitcher from '@/components/switcher/ui/MySwitcher.vue';

export const formkitConfig: DefaultConfigOptions = {
    inputs: {
        myRadio: createInput(MyInputRadio, {
            type: 'input',
            props: ['myOptions']
        }),
        switcher: createInput(MySwitcher, {
            type: 'input'
        })
    }
}