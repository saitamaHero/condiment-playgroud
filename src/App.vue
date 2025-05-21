<script setup lang="ts">

import ConditionPicker from './components/ConditionPicker.vue';
import type { Condition } from './interfaces/conditions';
import { objectToFields, type Field } from './interfaces/fields';

const conditions: Condition[] = [
  { id: '1', name: 'Condition 1' },
  { id: '2', name: 'Condition 2' },
  { id: '3', name: 'Condition 3' },
];

const fields:Field[] = objectToFields({hello: "a", other: 2, nested: {
    property: 'value', 
    ppw: {
        value: 42.02
    },
    items: [
        {
            sun: 2,
            moon: "light"
        }
    ]
}})
</script>

<template>
  <!-- After -->
  <button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">Submit</button>
  <ConditionPicker :fields="fields" :conditions="conditions" class="condition-picker" />
</template>
