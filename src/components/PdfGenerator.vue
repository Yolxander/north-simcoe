<template>
    <div>
        <button @click="generateReport">Generate PDF</button>
    </div>
</template>

<script>
import html2pdf from 'html2pdf.js';
import emailjs from "emailjs-com";

export default {
    name: "PdfGenerator",
    components: {

    },
    props: {
        form: {
            type: Object,
            required: true
        }
    },
    methods: {
        async generateReport() {
            const originalElement = document.getElementById('form');
            const element = originalElement.cloneNode(true); // Create a copy of the element

            // Set the cloned element to take the full width and height of the screen view
            element.style.paddingLeft = '18px';
            element.style.paddingRight = '20px';
            element.style.width = '100%';
            element.style.boxSizing = 'border-box';

            // Remove unwanted elements
            const unwantedElements = ['progress-bar', 'h1', 'transition', 'button.text-brown.bg-teal', 'button[type="submit"]', 'PdfGenerator.hidden'];
            unwantedElements.forEach(selector => {
                const elementToRemove = element.querySelector(selector);
                if (elementToRemove) elementToRemove.remove();
            });

            // Generate PDF
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
                emailjs
                    .sendForm(serviceID, templateID, "#form2", "NxLLnhlEW3KDj2zPO")
                    .then(() => {
                        this.pdfData = "";
                        console.log("Finish email");
                    })
                    .catch((err) => {
                        alert(JSON.stringify(err));
                    });
            }
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