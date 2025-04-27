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
        async generateReportMobile() {
            // Ensure the DOM updates are completed before capturing the form
            await this.$nextTick();

            // Create a new container element for the PDF content
            const containerElement = document.createElement('div');

            // Create a table element
            const table = document.createElement('table');
            table.style.width = '100%';
            table.style.borderCollapse = 'collapse';

            // Function to add rows to the table
            const addRow = (key, value) => {
                const row = table.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                cell1.style.border = '1px solid black';
                cell2.style.border = '1px solid black';
                cell1.style.padding = '8px';
                cell2.style.padding = '8px';
                cell1.textContent = key;
                cell2.textContent = value;
            };

            // Function to recursively process form object
            const processObject = (obj, prefix = '') => {
                Object.entries(obj).forEach(([key, value]) => {
                    const formattedKey = prefix + key.replace(/_/g, ' ').charAt(0).toUpperCase() + key.slice(1);
                    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
                        processObject(value, formattedKey + ' - ');
                    } else {
                        addRow(formattedKey, value);
                    }
                });
            };

            // Process the form object
            processObject(this.form);

            // Append the table to the container element
            containerElement.appendChild(table);

            // Append container element to the body temporarily
            document.body.appendChild(containerElement);

            // Define PDF options
            const pdfOptions = {
                format: 'A4',
                orientation: 'portrait',
                margin: [0, 0, 10, 1],
                scale: 0.8,
                image: { type: 'jpeg', quality: 0.1 }
            };

            // Generate and finalize the PDF
            const pdfBlob = await html2pdf().set(pdfOptions).from(containerElement).outputPdf('blob', { compress: true });

            // Clean up: remove the container element
            document.body.removeChild(containerElement);

            // Send the generated PDF by email
            await this.sendEmail(pdfBlob, "Report_Name");
        },


        async sendEmail(pdfBlob, name) {
            this.$router.push('/success');
            const serviceID = "service_v98lvdp";
            const templateID = "template_1d5ijcf";
            
            // Create a minimal form data object with only essential information
            const formData = new FormData();
            formData.append('pdf_file', pdfBlob, `${name}.pdf`);
            
            // Add only essential form data
            const essentialData = {
                name: this.form.name || '',
                email: this.form.email || '',
                subject: `PDF Report - ${name}`
            };
            
            Object.entries(essentialData).forEach(([key, value]) => {
                formData.append(key, value);
            });

            try {
                await emailjs.send(serviceID, templateID, essentialData, "NxLLnhlEW3KDj2zPO");
                this.pdfData = "";
                console.log("Email sent successfully");
            } catch (err) {
                console.error("Email sending failed:", err);
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