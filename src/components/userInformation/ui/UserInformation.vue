<script setup lang="ts">
import { maskitoOptions } from '@/utilities/maskito';

import type { ValidateError } from 'async-validator';
import type { MultiStepForm, Touched } from '@/types/form';

defineProps<{
  form: MultiStepForm
  touched: Touched
  errorFields: Record<string, ValidateError[]> | undefined
}>()

const emit = defineEmits<{
  (e: 'update:form', fieldName: 'name' | 'email' | 'phone', value: string ): void
  (e: 'focus:phone'): void
  (e: 'blur', fieldName: 'name' | 'email' | 'phone'): void
}>()

function handleChange (field: 'name' | 'email' | 'phone', value: string): void {
  emit('update:form', field, value)
}

function handleBlur (field: 'name' | 'email' | 'phone'): void {
  emit(`blur`, field)
}
</script>

<template>
  <fieldset :class="$style.fieldset">
    <div>
      <div :class="$style['field-wrapper']">
        <label
          for="name"
          :class="$style.label"
        >
          Name
        </label>
        <p
          v-if="touched.name && errorFields?.name?.length"
          :class="$style.error"
        >
          {{ errorFields.name[0].message }}
        </p>
      </div>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="e.g. Stephen King"
        :class="[$style.input, {[$style['input--error']]: touched.name && errorFields?.name?.length}]"
        :value="form.name"
        @input="handleChange('name', ($event.target as HTMLInputElement).value)"
        @blur="handleBlur('name')"
      >
    </div>

    <div>
      <div :class="$style['field-wrapper']">
        <label
          for="email"
          :class="$style.label"
        >
          Email Address
        </label>

        <p
          v-if="touched.email && errorFields?.email?.length"
          :class="$style.error"
        >
          {{ errorFields.email[0].message }}
        </p>
      </div>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="e.g. stephenking@lorem.com"
        :class="[$style.input, {[$style['input--error']]: touched.email && errorFields?.email?.length}]"
        :value="form.email"
        @input="handleChange('email', ($event.target as HTMLInputElement).value)"
        @blur="handleBlur('email')"
      >
    </div>

    <div>
      <div :class="$style['field-wrapper']">
        <label
          for="phone"
          :class="$style.label"
        >
          Phone Number
        </label>

        <p
          v-if="touched.phone && errorFields?.phone?.length"
          :class="$style.error"
        >
          {{ errorFields.phone[0].message }}
        </p>
      </div>
      <input
        id="phone"
        v-maskito="maskitoOptions"
        name="phone"
        type="text"
        placeholder="e.g. +1 234 567 890"
        :class="[$style.input, {[$style['input--error']]: touched.phone && errorFields?.phone?.length}]"
        :value="form.phone"
        @input="handleChange('phone', ($event.target as HTMLInputElement).value)"
        @focus="$emit('focus:phone')"
        @blur="handleBlur('phone')"
      >
    </div>
  </fieldset>
</template>

<style module>
.fieldset {
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.field-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.label {
  color: var(--Maribe-blue);

  font-size: 12px;
}

.error {
  color: var(--Strawberry-red);
}

.input {
  border: 1px solid var(--Lightgray);
  border-radius: 4px;

  color: var(--Maribe-blue);

  font-family: 'Ubuntu';
  font-size: 14px;
  font-weight: 600;

  padding: 12px 14px;

  width: 100%;
}

.input:hover {
  border-color: var(--Purplish-blue);

  transition: border-color 0.5s;
}

.input:focus-visible {
  outline-color: var(--Purplish-blue);
}

.input--error {
  border-color: var(--Strawberry-red);
}
</style>