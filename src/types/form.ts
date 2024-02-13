import type { Component } from "vue"

export type MultiStepForm = {
    name: string
    email: string
    phone: string
    subscription: 'Arcade' | 'Advanced' | 'Pro'
    period: boolean
    addons: {
      name: string
      description: string
      price: number
      selected: boolean
    }[]
}

export type Touched = {
  name: boolean
  email: boolean
  phone: boolean
}

export type Subscription = {
  name: 'Arcade' | 'Advanced' | 'Pro'
  icon: Component
  price: number
}