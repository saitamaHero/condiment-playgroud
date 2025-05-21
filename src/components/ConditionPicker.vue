<template>
    <div class="field-picker">
        
        <select id="field">
            <option v-for="field in props.fields" :key="field.key" :value="field.key">
                {{ field.name }}
            </option>
        </select>
    </div>

    <div class="condition-picker">
        <select id="condition" v-model="selectedCondition">
            <option v-for="condition in props.conditions" :key="condition.id" :value="condition.name">
                {{ condition.name }}
            </option>
        </select>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { Condition } from '../interfaces/conditions';
import type { Field } from '../interfaces/fields';



const selectedCondition = ref<Condition>();


interface ConditionPickerProps {
    conditions: Condition[];
    fields: Field[]
}
const props = defineProps<ConditionPickerProps>();

</script>