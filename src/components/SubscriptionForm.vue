// SubscriptionForm.vue

<template>

    <div class="container">

        <div class="content">

            <form class="subscription" :class="{ done: submitted }">

                <input
                        v-model="email"
                        class="add-email"
                        type="email"
                        placeholder="signmeup@email.com"
                >

                <button
                        @click.prevent="submit"
                        class="submit-email"
                >
                    <span class="before-submit">Join</span>
                    <span class="after-submit">Thank you!</span>
                </button>

            </form>

        </div>

    </div>

</template>


<script>
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'email-smtp.ca-central-1.amazonaws.com',
    port: 587,
    auth: {
        user: 'AKIATS6MDL7B3SXR2DDV',
        pass: 'BCQ+pZg+oIiVZcKToHJ1udo4wH1yU6tbXYu0f4QPWjyY'
    }
});

export default {

    data() {
        return {
            email: '',
            submitted: false
        }
    },

    methods: {

        submit() {
            transporter.sendMail({
                from: 'yolxanderjaca@gmail.com',
                to: 'jacacanada@gmail.com',
                subject: 'Test email',
                text: 'This is a test email sent using Amazon SES and Nodemailer in Vue.js'
            });
            // Submit logic
            this.submitted = true

            // Reset after delay
            setTimeout(() => {
                this.submitted = false
                this.email = ''
            }, 2000)
        }

    }

}
</script>


<style>
.container {
    position: relative; /* Changed to relative */
    top: auto;
    left: auto;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.content {
    position: absolute; /* Added */
   top: 20px; /* Position at bottom */
    left: 0; /* Position on left */
    width: 360px;
    height: 40px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, .2);
    border-radius: 60px;
    overflow: hidden;
}

.subscription {
    position: relative;
    width: 100%;
    height: 100%;
}

.subscription .add-email{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 20px;
}

.subscription .submit-email {
    position: absolute;
    top: 0;
    right: 0;
    height: calc(100% - 2px);
    width: 100px;
    border: none;
    border-radius: 60px;
    outline: none;
    margin: 1px;
    padding: 0 20px;
    cursor: pointer;
    background: #4ABEBB;
    color: #FFFFFF;
    transition: width .35s ease-in-out,
    background .35s ease-in-out;
}

.subscription.done .submit-email {
    width: calc(100% - 2px);
    background: #4ABEBB;
}

.subscription .submit-email .before-submit,
.subscription .submit-email .after-submit {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 38px;
    transition: visibility .35s ease-in-out,
    opacity .35s ease-in-out;
}

.subscription.done .submit-email .before-submit,
.subscription:not(.done) .submit-email .after-submit {
    visibility: hidden;
    opacity: 0;
}

.subscription .submit-email .after-submit {
    transition-delay: .35s;
}

.subscription:not(.done) .submit-email .before-submit,
.subscription.done .submit-email .after-submit {
    visibility: visible;
    opacity: 1;
}
</style>