<template>
    <div
        class=" contact-us main_modal p-10 md:p-32 mx-auto flex flex-col flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5 "
    style="height: 90vh"
    >
    <div id="myModal" class="modal fade">
        <div class="modal-dialog modal-confirm">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="icon-box">
                        <font-awesome-icon class="fa-check" :icon="['fas', 'check']" />
                    </div>
                    <h4 class="modal-title w-100">Application Submitted!</h4>
                </div>
                <div class="modal-body">
                    <p class="text-center">Thank you for submitting your application. Our team will review it and get back to you shortly.</p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-success btn-block p-5" @click="navigateToServicesPage"  id="modal-close-btn">OK</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

export default {
    name: "SuccessComponent",
    methods: {
        navigateToServicesPage() {
            this.$router.push({ name: 'ServicesPage' });
        },
    },
    mounted() {
        // Reset the body width to its original state
        document.body.style.width = '';
    }
};
</script>

<style scoped>
.fa-check{
    font-size: 40px
}
.modal-confirm {
    color: #636363;
    width: 80%;
    font-size: 14px;
    background: #FFFFFF; /* White background color for the modal */
    border-radius: 15px; /* Rounded corners */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Drop shadow for depth */
}
.modal-confirm .modal-content {
    padding: 30px 20px; /* Increased padding */
    border-radius: 15px;
    border: none;
}
.modal-confirm .modal-header {
    border-bottom: none;
    position: relative;
    padding: 20px;
}
.modal-confirm h4 {
    text-align: center;
    font-size: 26px;
    margin: 10px 0;
}
.modal-confirm .modal-body {
    padding: 20px 30px; /* Adjusted padding for body */
}
.modal-confirm .modal-footer {
    border: none;
    text-align: center;
    border-radius: 5px;
    font-size: 13px;
    padding: 20px 30px; /* Adjusted padding for footer */
}
.modal-confirm .icon-box {
    color: #fff;
    position: absolute;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%); /* Center the icon horizontally */
    top: -45px;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background: teal;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}
.modal-confirm .icon-box i {
    font-size: 58px;
    position: relative;
    top: 3px;
}
.modal-confirm .btn {
    color: #fff;
    border-radius: 4px;
    background: teal;
    text-decoration: none;
    transition: all 0.4s;
    line-height: normal;
    border: none;
    margin-top: 10px;
}
.modal-confirm .btn:hover, .modal-confirm .btn:focus {
    background: teal;
    outline: none;
}

.modal-content{
    display: flex;
    flex-direction: column;
}
#myModal{
    display: flex;
    justify-content: center;
}

@media only screen and (max-width: 767px) {
    /* Select the elements you want to change the font size for */
    .main_modal{
        margin-top: 150px;
    }
    .modal-confirm{
        width: 100%;
        font-size: 12px;
    }

    .modal-confirm h4{
        font-size: 15px;
    }
}


</style>
