<script setup lang="ts">
import type { MultiStepForm } from '@/types/form';

defineProps<{
    form: MultiStepForm
    periodDisplay: string
}>()

defineEmits<{
    (e: 'selectAddon', index: number): void
}>()

</script>

<template>
  <fieldset :class="$style.fieldset">
    <template
      v-for="(addon, index) in form.addons"
      :key="addon.name"
    >
      <div
        :tabindex="index + 1"
        :class="[$style.checkbox, {[$style['checkbox--active']]: addon.selected}]"
        @click="$emit('selectAddon', index)"
      >
        <input
          :id="addon.name"
          tabindex="-1"
          type="checkbox"
          name="group"
          :value="addon.selected"
          :checked="addon.selected"
          :class="$style.input"
          @click="$emit('selectAddon', index)"
        >

        <span :class="$style.checkmark" />

        <div :class="$style.info">
          <label
            :for="addon.name"
            :class="$style.title"
          >
            {{ addon.name }}
          </label>

          <span :class="$style.description">{{ addon.description }}</span>
        </div>

        <span :class="$style.price">
          +${{ form.period ? addon.price * 10 : addon.price }}/{{ periodDisplay }}
        </span>
      </div>
    </template>
  </fieldset>
</template>

<style module>
.fieldset {
  display: flex;
  flex-direction: column;
  gap: 12px;

  border: none;

  padding: 0;

  margin-bottom: 27px;
}

.checkbox {
  display: flex;
  align-items: center;

  gap: 15px;

  padding: 9px 15px;


  border: 1px solid var(--Cool-gray);
  border-radius: 8px;
}

.checkbox:focus-visible {
  border: 3px solid var(--Cool-gray);
  border-radius: 6px;
}

.checkbox:hover {
  border-color: var(--Purplish-blue);

  cursor: pointer;

  transition: border-color 0.5s
}

.checkbox--active {
  border-color: var(--Purplish-blue);
}

.info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.title {
  color: var(--Maribe-blue);

  font-size: 14px;
  font-weight: 500;

  pointer-events:none;
}

.description {
  color: var(--Cool-gray);

  font-size: 12px;
}

.price {
  color: var(--Purplish-blue);

  font-size: 12px;
}

.input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: relative;

  height: 20px;
  width: 20px;

  border: 1px solid var(--Cool-gray);
  border-radius: 4px;
}

.checkbox input:checked ~ .checkmark {
  background-color: var(--Purplish-blue);
}

.checkmark:after {
  content: url('@/assets/images/icon-checkmark.svg');

  position: absolute;

  display: none;

  height: 24px;
  width: 10px;
}

.checkbox input:checked ~ .checkmark:after {
  display: block;
}

.checkbox .checkmark:after {
  top: 50%;
  transform: translate(4px,-50%);
}

@media screen and (min-width: 768px) {
  .checkbox {
    padding: 13px 22px;
    gap: 24px;
  }

  .title {
    font-size: 16px;
  }

  .description {
    font-size: 15px;
  }

  .price {
    font-size: 16px;
  }
}
</style>