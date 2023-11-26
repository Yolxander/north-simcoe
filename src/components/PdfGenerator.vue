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
        async generateReport(name) {
            const element = document.getElementById('form');
            // Set the cloned element to take the full width and height of the screen view
            element.style.paddingLeft = '20px';

            // Adjust the width of the input fields
            const inputElements = element.querySelectorAll('input');
            console.log(inputElements)
            inputElements.forEach(inputElement => {
                // Exclude radio type inputs from style adjustments
                if(inputElement.getAttribute('type') !== 'radio' && inputElement.getAttribute('type') !=='checkbox') {
                    inputElement.style.width = '100%'; // Adjust the width as needed
                    inputElement.style.fontSize = '12px'; // Adjust the font size as needed
                    inputElement.style.height = '50px'; // Adjust the height as needed
                    inputElement.style.lineHeight = '50px'; // Adjust the line-height as needed
                }else if(inputElement.getAttribute('type') === 'radio') {
                    inputElement.style.background = 'transparent';
                }else if(inputElement.getAttribute('type') === 'checkbox') {
                    inputElement.style.background = 'transparent';
                }
            });
            // Hide elements with the 'exclude-from-pdf' class
            const excludeElements = element.querySelectorAll('.exclude-from-pdf');
            excludeElements.forEach(excludeElement => {
                excludeElement.style.display = 'none';
            });

            // Generate PDF with adjusted page size, scale, and image quality
            const pdfBlob = await html2pdf().set({
                format: 'A4', // Set the page size to A4
                orientation: 'portrait', // Set the orientation to portrait
                margin: [0, 0, 10, 1], // Set the margins (top, right, bottom, left)
                scale: 0.8, // Adjust the scale to reduce file size
                image: { type: 'jpeg', quality: 0.2 } // Adjust the image quality to reduce file size
            }).from(element).outputPdf('blob', { compress: true });

            console.log(pdfBlob.size);
            await this.sendEmail(pdfBlob, name);

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