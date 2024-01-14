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
            // Ensure the DOM updates are completed before capturing the form
            await this.$nextTick();

            // Clone the form element to modify its style for PDF rendering
            const originalElement = document.getElementById('form');
            const clonedElement = originalElement.cloneNode(true);

            // Apply styles needed for PDF rendering
            clonedElement.style.width = 'auto';
            clonedElement.style.paddingLeft = '20px';
            clonedElement.querySelectorAll('input').forEach(inputElement => {
                inputElement.style.width = '100%';
                inputElement.style.fontSize = '12px';
                inputElement.style.height = '50px';
                inputElement.style.lineHeight = '50px';
            });
            clonedElement.querySelectorAll('.exclude-from-pdf').forEach(excludeElement => {
                excludeElement.style.display = 'none';
            });

            // Append cloned element to the body temporarily
            document.body.appendChild(clonedElement);

            // Generate PDF
            const pdfBlob = await html2pdf().set({
                format: 'A4',
                orientation: 'portrait',
                margin: [0, 0, 10, 1],
                scale: 0.8,
                image: { type: 'jpeg', quality: 0.2 }
            }).from(clonedElement).outputPdf('blob', { compress: true });

            // Clean up: remove the cloned element
            document.body.removeChild(clonedElement);

            await this.sendEmail(pdfBlob, "Report_Name"); // Replace "Report_Name" as needed
        },
        async sendEmail(pdfBlob,name) {
            this.$router.push('/success');
            const serviceID = "default_service";
            const templateID = "template_vyzsaql";
            const fileInput = document.querySelector('input[type="file"]');
            const pdfFile = new File([pdfBlob], name+".pdf", { type: "application/pdf" });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(pdfFile);
            fileInput.files = dataTransfer.files;

                emailjs
                    .sendForm(serviceID, templateID, "#form2", "NxLLnhlEW3KDj2zPO")
                    .then(() => {
                        this.pdfData = "";
                        console.log("Finish email");
                    })
                    .catch((err) => {
                        console.log(JSON.stringify(err));
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