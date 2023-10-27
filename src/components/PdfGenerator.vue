<template>
    <div>
        <vue3-html2pdf
            :show-layout="false"
            :float-layout="true"
            :enable-download="true"
            :preview-modal="true"
            :paginate-elements-by-height="1400"
            filename="example.pdf"
            :pdf-quality="2"
            :manual-pagination="false"
            pdf-format="a4"
            pdf-orientation="landscape"
            pdf-content-width="100%"
            pdf-content-height="100%"
            @progress="onProgress($event)"
            ref="html2Pdf"
        >
            <template v-slot:pdf-content>
                <div class="rental-application-form" id="form">
                    <div class="form-row">Address</div>
                    <div class="form-row">City, Province, Postal Code</div>
                    <div class="form-row">Date you require the unit</div>
                    <div class="form-row">Initial Monthly Rent will be</div>
                    <div class="form-row">Applicant #1:</div>
                    <div class="form-row">Name</div>
                    <div class="form-row">Current address</div>
                    <div class="form-row">Home phone</div>
                    <div class="form-row">Cell phone</div>
                    <div class="form-row">Email address</div>
                    <div class="form-row">Date of birth</div>
                    <div class="form-row">S.I.N.</div>
                    <div class="form-row">Employer Name</div>
                </div>
            </template>
        </vue3-html2pdf>
        <button @click="generateReport">Generate PDF</button>
    </div>
</template>

<script>
import Vue3Html2pdf from "vue3-html2pdf";
export default {
    name: "PdfGenerator",
    components: {
        Vue3Html2pdf,
    },
    methods: {
        onProgress(progress) {
            console.log("PDF generation progress:", progress);
        },
        generateReport() {
            this.$refs.html2Pdf.generatePdf();
        },
    },
};
</script>

<style>
.rental-application-form {
    font-family: Arial, sans-serif;
    width: 100%;
    border: 1px solid lightgreen;
    padding: 10px;
    box-sizing: border-box;
}

.form-row {
    padding: 10px 0;
    border-bottom: 1px solid lightgreen;
}

.form-row:last-child {
    border-bottom: none;
}
</style>
