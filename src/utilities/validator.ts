import type { InternalRuleItem, Rules } from "async-validator";

function validateName (rule: InternalRuleItem, value: string, callback: (error?: string | Error | undefined) => void) {
    if (value.match(/^(?=.*[^ ])[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я ]*$/)) {
      return true
    }
    if (!value.length) {
      callback('This field is required')
    }
    else {
      callback('Name must contain only letters and spaces');
    }
}

function validateEmail (rule: InternalRuleItem, value: string, callback: (error?: string | Error | undefined) => void) {
  if (value.match(/^[\w.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    return true
  }
  if (!value.length) {
    callback('This field is required')
  }
  else {
    callback('Email is not valid');
  }
}

function validatePhone (rule: InternalRuleItem, value: string, callback: (error?: string | Error | undefined) => void) {
  if (!value.length) {
    callback('This field is required')
  }
  if (value.length < 18) {
    callback('Phone must be 18 characters')
  }
  else {
    return true
  }
}

const rules: Rules = {
    name: { type: 'string', required: true, validator: validateName },
    email: { type: 'email', required: true, validator: validateEmail },
    phone: { type: 'string', required: true, min: 18, max: 18, validator: validatePhone},
}

export {rules, validateName, validateEmail, validatePhone}