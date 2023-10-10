<template>
    <div class="cards-container pl-[40px]">
        <div v-for="(service, index) in services" :key="service.id" :ref="`service-${service.id}`" class="card mb-3" :style="{width: '1000px', marginTop: computeMarginTop(index), marginBottom: computeMarginTop(index)}">
            <div class="row g-0 flex">
                <!-- Render icon on the left for even indexed services -->
                <div v-if="index % 2 === 0" :style="{width: '40%'}" class="icon-container">
                    <div class="icon-content">
                        <font-awesome-icon :icon="['fas', service.icon]" class="text-5xl mb-2"/>
                        <h4 class="mb-2 text-3xl font-extrabold text-brown font-libre-baskerville">{{ service.title }}</h4>
                    </div>
                </div>
                <!-- Text content -->
                <div :style="{width: '100%', marginLeft: '10%', marginRight: '3%'}" class="ml-3">
                    <div class="card-body font-source-serif" style="height: 100%; overflow-y: scroll;">
                        <ul class="card-text-list">
                            <li v-for="(point, idx) in splitText(service.text)" :key="idx">
                                <span v-if="point.trim() !== '*Link to Commercial Application Form*'">{{ point }}</span>
                                <router-link v-else
                                             to="/forms-test"
                                             type="button"
                                             class="text-brown bg-teal font-bold rounded-full text-sm px-5 py-2.5 text-center mt-3 hover:bg-tealdark hover:text-white focus:outline-none focus:ring-4 focus:ring-tealdark uppercase"
                                >
                                    Start Application
                                </router-link>
                            </li>

                        </ul>
                    </div>
                </div>
                <!-- Render icon on the right for odd indexed services -->
                <div v-if="index % 2 === 1" :style="{width: '40%', marginLeft: '5%'}" class="icon-container">
                    <div class="icon-content">
                        <font-awesome-icon :icon="['fas', service.icon]" class="text-5xl mb-2"/>
                        <h4 class="mb-2 text-3xl font-extrabold text-brown font-libre-baskerville">{{ service.title }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServiceCard',
    props: {
        services: {
            type: Array,
            required: true
        }
    },
    methods: {
        computeMarginTop(index) {
            return index % 2 === 0 ? '' : '100px'; // Updated to match your request
        },
        splitText(text) {
            const segments = [];
            let segmentStart = 0;

            for (let i = 0; i < text.length; i++) {
                if (text[i] === '.' && i < text.length - 1 && text[i + 1] !== ' ') {
                    // When a period is found it's not at the end of the sentence
                    segments.push(text.substring(segmentStart, i + 1));
                    segmentStart = i + 1;
                } else if (i < text.length - 1 && text[i + 1] === '\n' && text[i] !== ' ') {
                    // When a dash is found at the start of a sentence
                    segments.push(text.substring(segmentStart, i + 1));
                    segmentStart = i + 1;
                }
            }

            // Add the last segment
            segments.push(text.substring(segmentStart));

            // Filter out empty strings
            return segments.filter(segment => segment.trim() !== '');
        }
    }
};
</script>

<style scoped>
/* ... your existing styles ... */
.row.g-0.flex {
    display: flex;
}

.icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border: solid 4px teal;
    border-radius: 0.5rem;
}

.icon-content {
    text-align: center;
}

.cards-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 100px;
}
.card {
    margin: 10px; /* Add margins between cards if needed */
}


/* Adjust these styles based on your design needs */
</style>
