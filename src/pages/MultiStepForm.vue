<script setup lang="ts">
import MyLayout from '@/layout/MyLayout.vue'
import MySidebar from '@/layout/sidebar/MySidebar.vue';
import MyMain from '@/layout/main/MyMain.vue';
import MyFooter from '@/layout/footer/MyFooter.vue';
import MyStepper from '@/components/stepper/ui/MyStepper.vue';
import MyCardInfo from '@/components/cardInfo/ui/MyCardInfo.vue';
import UserInformationVue from '@/components/userInformation/ui/UserInformation.vue';
import MyInputRadio from '@/components/inputs/inputRadio/ui/MyInputRadio.vue';
import MyInputSwitcher from '@/components/inputs/inputSwitcher/ui/MyInputSwitcher.vue';
import MyInputCheckbox from '@/components/inputs/inputCheckbox/ui/MyInputCheckbox.vue';
import MyButtonGroup from '@/components/buttonGroup/ui/MyButtonGroup.vue';
import StepSummary from './StepSummary.vue';
import StepFinished from './StepFinished.vue';

import { subscriptions } from '@/components/inputs/inputRadio/model/subscription';
import { rules } from '@/utilities/validator';
import { PLACEHOLDER, removePlaceholder } from '@/utilities/maskito';

import { computed, reactive, ref, } from 'vue';
import { breakpointsTailwind, useBreakpoints, useStepper } from '@vueuse/core';
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'

import type { MultiStepForm, Touched } from '@/types/form';

const breakpoints = useBreakpoints(breakpointsTailwind)
const mdAndLarger = breakpoints.greaterOrEqual('md')

const form = reactive<MultiStepForm>({
  name: 'Stephen King',
  email: 'stephenking@lorem.com',
  phone: '+7 (333) 333-33-33',
  subscription: 'Arcade' as 'Arcade' | 'Advanced' | 'Pro',
  period: false,
  addons: [
    { name: 'Online service', description: 'Access to multiplayer games', price: 1, selected: false },
    { name: 'Larger storage', description: 'Extra 1TB of cloud save', price: 2, selected: false },
    { name: 'Customizable profile', description: 'Custom theme on your profile',  price: 2, selected: false }
  ]
})

const touched = ref<Touched>({
  name: false,
  email: false,
  phone: false
})

const currentStep = ref<number>(1)
const isFinished = ref<boolean>(false)

const periodDisplay = computed(() => form.period ? 'yr' : 'mo');

const sum = computed(() => {
  const addonSum = form.addons.reduce((sum, addon) => {
    const addonPrice = form.period ? addon.price * 10 : addon.price;
    return addon.selected ? sum + addonPrice : sum;
  }, 0);

  const subscriptionPrice = subscriptions.find(sub => sub.name === form.subscription)?.price || 0;
  const subscriptionSum = form.period ? subscriptionPrice * 10 : subscriptionPrice;

  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(addonSum + subscriptionSum);
});

const { pass, errorFields } = useAsyncValidator(form, rules)

const stepper = useStepper({
  'user-information': {
    title: 'User information',
    isValid: () => pass.value
  },
  'subscription': {
    title: 'Subscription',
    isValid: () => ['Arcade', 'Advanced', 'Pro'].includes(form.subscription),
  },
  'add-ons': {
    title: 'Add-ons',
    isValid: () => true,
  },
  'summary': {
    title: 'Summary',
    isValid: () => {
      return stepper.steps.value['user-information'].isValid() && stepper.steps.value.subscription.isValid()
    }
  },
})

function handleUpdate (fieldName: 'name' | 'email' | 'phone', updatedValue: string): void {
  form[fieldName] = updatedValue
}

function focus (): void {
  const initialValue = form.phone || '+7'

  form.phone = initialValue + PLACEHOLDER.slice(initialValue.length)
}

function blur (fieldName: 'name' | 'email' | 'phone'): void {
  touched.value[fieldName] = true

  if (fieldName === 'phone') {
    const cleanValue = removePlaceholder(form.phone)
    form.phone = cleanValue === '+7' ? '' : cleanValue
  }
}

function select (name: 'Arcade' | 'Advanced' | 'Pro'): void {
  form.subscription = name
}

function selectAddon (index: number): void {
  form.addons[index].selected = !form.addons[index].selected
}

function submit(): void {
  if (!pass.value) {
    touched.value.name = true
    touched.value.email = true
    touched.value.phone = true
  }

  if (stepper.current.value.isValid()) {
    if (stepper.isLast.value) {
      const formattedForm = {
        ...form,
        period: form.period ? 'yearly' : 'monthly',
        subscription: {
          name: form.subscription,
          price: subscriptions.find(sub => sub.name === form.subscription)?.price
        },
        addons: form.addons.map(addon => ({
          ...addon,
          price: form.period ? addon.price * 10 : addon.price,
        })),
      }
      isFinished.value = true
      console.log(JSON.stringify(formattedForm, null, 2));
    } else {
      stepper.goToNext();
      currentStep.value++
    }
  }
}

function back () {
  stepper.goToPrevious()
  currentStep.value--
}

function change () {
  stepper.goTo('subscription')
  currentStep.value = 2
}
console.log(mdAndLarger.value)
</script>

<template>
  <MyLayout>
    <div
      v-if="!mdAndLarger"
      :class="$style.stepper"
    >
      <MyStepper
        :current-step="currentStep"
        :md-and-larger="mdAndLarger"
      />
    </div>

    <component
      :is="MySidebar"
      v-else
    >
      <MyStepper
        :current-step="currentStep"
        :md-and-larger="mdAndLarger"
      />
    </component>
    <MyMain
      :class="$style.main"
    >
      <form
        v-if="!isFinished"
        :class="$style.form"
        @submit.prevent="submit"
      >
        <div v-show="stepper.isCurrent('user-information')">
          <MyCardInfo
            title="Personal info"
            description="Please provide your name, email address, and phone number."
          />
          <UserInformationVue
            :form="form"
            :touched="touched"
            :error-fields="errorFields"
            @update:form="handleUpdate"
            @focus:phone="focus"
            @blur="blur"
          />
        </div>

        <div v-show="stepper.isCurrent('subscription')">
          <MyCardInfo
            title="Select your plan"
            description="You have the option of monthly or yearly billing."
          />

          <MyInputRadio
            :form="form"
            :subscriptions="subscriptions"
            :period-display="periodDisplay"
            @select-subscription="select"
          />

          <MyInputSwitcher
            :form="form"
            @toggle="form.period = !form.period"
          />
        </div>

        <div v-show="stepper.isCurrent('add-ons')">
          <MyCardInfo
            title="Pick add-ons"
            description="Add-ons help enhance your gaming experience."
          />
          <MyInputCheckbox
            :form="form"
            :period-display="periodDisplay"
            @select-addon="selectAddon"
          />
        </div>

        <div v-show="stepper.isCurrent('summary')">
          <StepSummary
            :form="form"
            :period-display="periodDisplay"
            :sum="sum"
            @change="change"
          />
        </div>

        <MyButtonGroup
          v-if="mdAndLarger"
          :current-step="currentStep"
          @click:back="back"
          @click:submit="submit"
        />
      </form>

      <div
        v-if="isFinished"
        :class="$style.finished"
      >
        <StepFinished />
      </div>
    </MyMain>

    <MyFooter
      v-if="!mdAndLarger && !isFinished"
      :class="$style.footer"
    >
      <MyButtonGroup
        :current-step="currentStep"
        @click:back="back"
        @click:submit="submit"
      />
    </MyFooter>
  </MyLayout>
</template>

<style module>
.wrapper {
  background-image: url('@/assets/images/bg-sidebar-mobile.svg');
  background-size: contain;
  background-repeat: no-repeat;

  max-height: 173px;
}

.stepper {
  padding: 33px 97px;
}

.form {
  height: 100%;
  display: grid;
  grid:
    "content" 1fr
    "button-group" auto
    / 1fr;
  gap: 8px;
}

.finished {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 50px 0px;
}

@media screen and (min-width: 768px) {
  .finished {
    padding: 100px 0px;
  }
}
</style>