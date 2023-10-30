<template>
    <div v-for="(value, key) in form" :key="key" class="form-section form-row">
        <div class="label">{{ formatLabel(key) }}:</div>
        <div v-if="typeof value === 'object' && value !== null && !Array.isArray(value)">
                <recursive-form :form="value"></recursive-form>
        </div>
        <div v-else-if="Array.isArray(value)">
            <div v-for="(item, index) in value" :key="index" class="form-row">
                <recursive-form :form="item"></recursive-form>
            </div>
        </div>
        <div v-else>
            {{ value }}
        </div>
    </div>
</template>

<script>
export default {
    name: "RecursiveForm",
    props: {
        form: {
            type: Object,
            required: true
        }
    },
    methods: {
        formatLabel(key) {
            return key.replace(/_/g, ' ').charAt(0).toUpperCase() + key.slice(1);
        }
    }
};
</script>

<style>
.form-row {
    padding: 15px 0;
    border-bottom: 2px solid #93c3bf;
    margin-bottom: 15px;
}

.form-row:last-child {
    border-bottom: none;
}

.label {
    font-weight: normal;
    margin-bottom: 5px;
    color: #93c3bf;
}

</style>