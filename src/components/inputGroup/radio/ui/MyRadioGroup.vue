<script setup lang="ts">
import ArcadeIcon from '@/components/icons/ArcadeIcon.vue';
import AdvancedIcon from '@/components/icons/AdvancedIcon.vue';
import ProIcon from '@/components/icons/ProIcon.vue';

import { FormKit } from '@formkit/vue';
import type { Options } from '@/types/inputRadio';

const options: Options[] = [
    { icon: ArcadeIcon, title: 'Arcade', price: 9 },
    { icon: AdvancedIcon, title: 'Advanced', price: 12 },
    { icon: ProIcon, title: 'Pro', price: 15}
    ]
</script>

<template>
  <fieldset :class="$style.list">
    <FormKit
      type="myRadio"
      name="myRadio"
      :my-options="options"
      :inner-class="$style.inner"
    />
  </fieldset>
</template>

<style module>
.list {
    all: unset;

    display: flex;
    flex-direction: column;
    gap: 11px;

    padding: 7px 0px;

    list-style: none;

}

.inner {
  display: flex;
  flex-direction: column;
  gap: 11px;
}

@media screen and (min-width: 768px) {
    .list {
        flex-grow: 1;
        gap: 20px
    }
}
</style>