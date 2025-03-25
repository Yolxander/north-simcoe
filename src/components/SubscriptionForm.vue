// SubscriptionForm.vue

<template>

    <div class="container">

        <div class="content">

            <form ref="form" class="subscription" :class="{ done: submitted }">

                <input
                        v-model="email"
                        class="add-email"
                        type="email"
                        placeholder="myemail@email.com"
                >

                <button
                        @click.prevent="submit"
                        class="submit-email"
                >
                    <span class="before-submit">Receive</span>
                    <span class="after-submit">Thank you!</span>
                </button>

            </form>

        </div>

    </div>

</template>


<script>
import emailjs from '@emailjs/browser';

export default {

    data() {
        return {
            email: '',
            submitted: false
        }
    },

    methods: {

        submit() {
            emailjs.send('service_v98lvdp', 'template_1d5ijcf', {
                email: this.email
            }, 'NxLLnhlEW3KDj2zPO')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                    console.log('INFO', this.email);
                })
                .catch((error) => {
                    console.log('FAILED...', error.text);
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

@media screen and (max-width: 612px) {
    .subscription {
        width: 80%;
    }

    .subscription .add-email{
        border-radius: 20px;
    }
}
</style>