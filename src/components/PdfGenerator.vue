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
            element.style.paddingLeft = '20px';

            // Adjust the width of the input fields
            const inputElements = element.querySelectorAll('input[type="text"]');
            console.log(inputElements)
            inputElements.forEach(inputElement => {
                inputElement.style.width = '100%'; // Adjust the width as needed
                inputElement.style.fontSize = '10px'; // Adjust the font size as needed
            });

            // Hide elements with the 'exclude-from-pdf' class
            const excludeElements = element.querySelectorAll('.exclude-from-pdf');
            excludeElements.forEach(excludeElement => {
                excludeElement.style.display = 'none';
            });

            // Generate PDF with adjusted page size and scale
            const pdfBlob = await html2pdf().set({
                format: 'A4', // Set the page size to A4
                orientation: 'portrait', // Set the orientation to portrait
                margin: [0, 0, 10, 1], // Set the margins (top, right, bottom, left)
                scale: 0.8
            }).from(element).outputPdf('blob', { compress: true });
            await this.sendEmail(pdfBlob);
        },
        async sendEmail(pdfBlob) {
            const serviceID = "default_service";
            //TOdo::remember that i change the template id
            const templateID = "template_9q3x4cv";
            const fileInput = document.querySelector('input[type="file"]');
            const pdfFile = new File([pdfBlob], "example.pdf", { type: "application/pdf" });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(pdfFile);
            fileInput.files = dataTransfer.files;

            const fileSize = pdfBlob.size / 1024; // size in KB
            console.log('Generated PDF size:', fileSize, 'KB');

            if (fileSize > 2000) {
                alert('File size exceeds the limit of 2000KB');
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
    border-radius: 10px;
    padding: 30px;
    margin-right: 20px;
    box-sizing: border-box;

    /* Add the following CSS properties */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
</style>