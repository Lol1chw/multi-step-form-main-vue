import ArcadeIcon from '@/components/icons/ArcadeIcon.vue';
import AdvancedIcon from '@/components/icons/AdvancedIcon.vue';
import ProIcon from '@/components/icons/ProIcon.vue';

import { computed } from "vue";

import type { MultiStepForm, Subscription } from '@/types/form';
import type { ComputedRef } from "vue";

export const subscriptions: Subscription[] = [
    { name: 'Arcade', icon: ArcadeIcon, price: 9 },
    { name: 'Advanced', icon: AdvancedIcon, price: 12 },
    { name: 'Pro', icon: ProIcon, price: 15 }
]

export function useSubscriptionCostDisplay (form: MultiStepForm): ComputedRef<string> {
    const subscriptionCostDisplay = computed(() => {
        const selectedSubscription = subscriptions.find(sub => sub.name === form.subscription);
        if (selectedSubscription) {
            const subscriptionPrice = form.period ? selectedSubscription.price * 10 : selectedSubscription.price;
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(subscriptionPrice)
        }
        return '';
    });

    return subscriptionCostDisplay;
}