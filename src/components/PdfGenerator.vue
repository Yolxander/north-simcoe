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
                    <recursive-form :form="form"></recursive-form>
                </div>
                <form class="hidden contact-us max-w-screen-xl p-10 md:p-32 mx-auto flex flex-col flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5" @submit.prevent="submitForm" id="form2">

                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            @change="handleFileChange"
                            type="file"
                            name="pdfData"
                            id="pdfData"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                        />
                        <label
                            for="pdfData"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            PDF Data
                        </label>
                    </div>

                </form>
            </template>
        </vue3-html2pdf>
        <button @click="generateReport">Generate PDF</button>
    </div>
</template>

<script>
import Vue3Html2pdf from "vue3-html2pdf";
import RecursiveForm from "./RecursiveForm.vue";
import emailjs from "emailjs-com";
export default {
    name: "PdfGenerator",
    components: {
        Vue3Html2pdf,
        RecursiveForm
    },
    props: {
        form: {
            type: Object,
            required: true
        }
    },
    methods: {
        //Todo::try adding the pdf generated here to the form2 pdfData, that way u can either send the email from here or know what file pdf format to retunrto the form component and send it in the email there

        async generateReport() {
            let pdf = await this.$refs.html2Pdf.generatePdf();
            await this.sendEmail(pdf);
        },
        async sendEmail(pdf) {
            const serviceID = "default_service";
            const templateID = "template_vyzsaql";

            const fileInput = document.querySelector('input[type="file"]');
            const pdfBlob = new Blob([pdf], { type: "application/pdf" });

            // Now let's create a DataTransfer to get a FileList
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(pdfBlob);
            fileInput.files = dataTransfer.files;

            // Send the email with the attached PDF
            emailjs
                .sendForm(serviceID, templateID, "#form2",'NxLLnhlEW3KDj2zPO')
                .then(() => {
                    this.pdfData = "";
                    console.log("Finish email");
                })
                .catch((err) => {
                    alert(JSON.stringify(err));
                });
        },

        sendFormWithPDF(serviceID, templateID) {
            // Send the email with the attached PDF
            emailjs.sendForm(serviceID, templateID, '#form2','NxLLnhlEW3KDj2zPO')
                .then(() => {
                    this.pdfData = "";
                    console.log('finish email');
                })
                .catch((err) => {
                    alert(JSON.stringify(err));
                });
        },
        formatLabel(key) {
            return key.replace(/_/g, ' ').charAt(0).toUpperCase() + key.slice(1);
        },
        onProgress(progress) {
            console.log("PDF generation progress:", progress);
        },
    },
};
</script>

<style>
.rental-application-form {
    font-family: Arial, sans-serif;
    width: 95%; /* Reduced width for spacing on the sides */
    border: 4px solid #93c3bf;
    border-radius: 10px;
    padding: 30px; /* Increased padding for spacing inside */
    margin: 20px auto; /* Added margin for spacing outside */
    box-sizing: border-box;
}
</style>
