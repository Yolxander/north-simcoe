<template>
    <div>
        <div class="rental-application-form" id="form">
            <recursive-form :form="form"></recursive-form>
        </div>
        <button @click="generateReport">Generate PDF</button>
    </div>
</template>

<script>
import html2pdf from 'html2pdf.js';
import RecursiveForm from "./RecursiveForm.vue";
import emailjs from "emailjs-com";

export default {
    name: "PdfGenerator",
    components: {
        RecursiveForm
    },
    props: {
        form: {
            type: Object,
            required: true
        }
    },
    methods: {
        async generateReport() {
            const element = document.getElementById('form');
            const pdfBlob = await html2pdf().from(element).outputPdf('blob');
            await this.sendEmail(pdfBlob);
        },
        async sendEmail(pdfBlob) {
            const serviceID = "default_service";
            const templateID = "template_vyzsaql";
            const fileInput = document.querySelector('input[type="file"]');
            const pdfFile = new File([pdfBlob], "example.pdf", { type: "application/pdf" });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(pdfFile);
            fileInput.files = dataTransfer.files;

            const fileSize = pdfBlob.size / 1024; // size in KB
            console.log('Generated PDF size:', fileSize, 'KB');

            if (fileSize > 500) {
                alert('File size exceeds the limit of 500KB');
            } else {
                await this.sendEmail(pdfBlob);
            }

            emailjs
                .sendForm(serviceID, templateID, "#form2", "NxLLnhlEW3KDj2zPO")
                .then(() => {
                    this.pdfData = "";
                    console.log("Finish email");
                })
                .catch((err) => {
                    alert(JSON.stringify(err));
                });
        },
        formatLabel(key) {
            return key.replace(/_/g, " ").charAt(0).toUpperCase() + key.slice(1);
        },
    },
};
</script>

<style>
.rental-application-form {
    font-family: Arial, sans-serif;
    width: 95%;
    border: 4px solid #93c3bf;
    border-radius: 10px;
    padding: 30px;
    margin: 20px auto;
    box-sizing: border-box;
}
</style>