<template>
    <form @submit.prevent="sendEmail" id="form" style="margin-left: 300px">
        <div class="field">
            <label for="pdfData">pdfData</label>
            <input type="file" name="pdfData" id="pdfData" @change="onFileChange" />
        </div>
        <input type="submit" id="button" value="Send Email" />
    </form>
</template>

<script>

import emailjs from "emailjs-com";
emailjs.init("NxLLnhlEW3KDj2zPO");

export default {
    data() {
        return {
            pdfData: null, // change this to null
        };
    },
    methods: {
        onFileChange(e) {
            this.pdfData = e.target.files[0];
        },
        sendEmail() {
            const serviceID = "service_v98lvdp";
            const templateID = "template_1d5ijcf";

            emailjs
                .sendForm(serviceID, templateID, "#form", "NxLLnhlEW3KDj2zPO")
                .then(
                    () => {
                        this.pdfData = "";
                        alert("Sent!");
                    },
                    (err) => {
                        alert(JSON.stringify(err));
                    }
                );
        },
    },
};
</script>
