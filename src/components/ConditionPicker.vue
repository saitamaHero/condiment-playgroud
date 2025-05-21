<template>
    <div class="field-picker">
        
        <select id="field">
            <option v-for="field in props.fields" :key="field.key" :value="field.key">
                {{ field.name }}
            </option>
        </select>
    </div>

    <div class="condition-picker">
        <select id="condition" v-model="selectedCondition" @change="handleConditionChange">
            <option v-for="condition in props.conditions" :key="condition.id" :value="condition">
                {{ condition.name }}
            </option>
        </select>
    </div>

    <div class="value-picker" v-if="inputType">
        <input :type="inputType"/>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { Condition } from '../interfaces/conditions';
import type { Field } from '../interfaces/fields';



const selectedCondition = ref<Condition>();
const inputType = ref<string>()

interface ConditionPickerProps {
    conditions: Condition[];
    fields: Field[]
}

const props = defineProps<ConditionPickerProps>();

const handleConditionChange = () => {
    const condition = selectedCondition.value
    
    if (!condition) {
        return;
    }
    // console.log(props.conditions.find(c => c.id === selectedCondition.value))
    if (!condition.requiredInput || condition.requiredInput === 'regex') {
        inputType.value = "text"
    }else {
        inputType.value = condition.requiredInput
    }
}
</script>