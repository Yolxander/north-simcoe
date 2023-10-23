<template>
    <div class="progress-bar sm:mt-3">
        <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            required: true,
            default: 0,
            validator: (value) => value >= 0 && value <= 100,
        },
    },
    computed: {
        progress() {
            return this.value;
        },
    },
};
</script>

<style scoped>
.progress-bar {
    width: 100%;
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 4px;
    overflow: hidden;
}

.progress {
    height: 100%;
    background-color: teal;
    transition: width 0.3s;
}
</style>
