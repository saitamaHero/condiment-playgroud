import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { objectToFields } from './interfaces/fields'

createApp(App).mount('#app')


console.log(objectToFields({hello: "a", other: 2, nested: {
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
}}));