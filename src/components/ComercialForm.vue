<template >
    <form
        class=" contact-us p-10 md:p-32 mx-auto flex flex-col flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5 "
        @submit.prevent="submitForm"
        id="form"   :style="{ width: this.isSubmitted ? '60vw' : 'auto' }">
        <PdfGenerator class="hidden" ref="pdfGenerator" :form="form"/>
        <h1 class="text-brown text-[30px]" v-if="showForm">COMMERCIAL RENTAL APPLICATION</h1>
        <div v-if="currentStep === 1 && showForm || showAll" class="w-full relative">
            <div
                class="flex flex-col mb-2 z-10 relative bg-white rounded-lg shadow-md p-4 border-4 border-solid border-teal"
            >
                <p class="mb-4 text-[25px] text-gray-700">Applicants Name (Corporation or Individual)</p>
                <!-- Applicant Name Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.applicant.name" type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Applicant Name</label>
                </div>
                <!-- Premises Address Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.applicant.premises_address" type="text" name="premises_address" id="premises_address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="premises_address" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Premises Address</label>
                </div>

                <!-- Required Date Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.applicant.required_date" type="date" name="required_date" id="required_date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" required />
                    <label for="required_date" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Required Date</label>
                </div>

                <!-- Unit Type Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.applicant.unit_type" type="text" name="unit_type" id="unit_type" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="unit_type" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Unit Type</label>
                </div>

                <!-- Business Name Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.applicant.business_name" type="text" name="business_name" id="business_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="business_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Business Name</label>
                </div>

                <!-- Business Type Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.applicant.business_type" type="text" name="business_type" id="business_type" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="business_type" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Business Type</label>
                </div>

                <!-- Business Duration Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.applicant.business_duration" type="text" name="business_duration" id="business_duration" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="business_duration" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Business Duration</label>
                </div>

                <p class="mb-4  text-[25px] text-gray-700">Guarantor Information</p>


                <!-- Guarantor Name Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.guarantor.name" type="text" name="guarantor_name" id="guarantor_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="guarantor_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Guarantor Name</label>
                </div>

                <!-- Driver License Number Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.guarantor.driver_license_number" type="text" name="driver_license_number" id="driver_license_number" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="driver_license_number" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Driver License Number</label>
                </div>

                <!-- Phone Number Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.guarantor.phone_number" type="tel" name="phone_number" id="phone_number" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="phone_number" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Phone Number</label>
                </div>

                <!-- Email Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.guarantor.email" type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="email" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Email</label>
                </div>

                <!-- Previous Address Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.guarantor.previous_address" type="text" name="previous_address" id="previous_address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="previous_address" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Previous Address</label>
                </div>

                <!-- Duration at Previous Address Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.guarantor.duration_at_previous_address" type="text" name="duration_at_previous_address" id="duration_at_previous_address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="duration_at_previous_address" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Duration at Previous Address</label>
                </div>

                <!-- Ownership Status Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.guarantor.ownership_status" type="text" name="ownership_status" id="ownership_status" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="ownership_status" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Ownership Status</label>
                </div>

                <!-- Eviction History Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <p class="text-sm text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-teal peer">Have you ever been evicted from a property?</p>
                    <input v-model="form.guarantor.eviction_history" type="radio" name="eviction_history" id="eviction_history_yes" value="Yes" required style="margin-top: 10px;" />
                    <label for="eviction_history_yes" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-teal peer">Yes</label>
                    <input v-model="form.guarantor.eviction_history" type="radio" name="eviction_history" id="eviction_history_no" value="No" required style="margin-top: 10px;" />
                    <label for="eviction_history_no" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer">No</label>
                </div>

                <div class="relative z-0 w-full mb-4 group">
                    <p class="text-sm text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-teal peer">Have you ever declared bankruptcy?</p>
                    <input v-model="form.guarantor.bankruptcy_history" type="radio" name="bankruptcy_history" id="bankruptcy_history_yes" value="Yes" required />
                    <label for="bankruptcy_history_yes" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-teal peer">Yes</label>
                    <input v-model="form.guarantor.bankruptcy_history" type="radio" name="bankruptcy_history" id="bankruptcy_history_no" value="No" required />
                    <label for="bankruptcy_history_no" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer">No</label>
                </div>


                <!-- Emergency Contact Name Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.guarantor.emergency_contact.name" type="text" name="emergency_contact_name" id="emergency_contact_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="emergency_contact_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Emergency Contact Name</label>
                </div>

                <!-- Emergency Contact Phone Number Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.guarantor.emergency_contact.phone_number" type="tel" name="emergency_contact_phone_number" id="emergency_contact_phone_number" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="emergency_contact_phone_number" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Emergency Contact Phone Number</label>
                </div>

                <!-- Emergency Contact Email Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.guarantor.emergency_contact.email" type="email" name="emergency_contact_email" id="emergency_contact_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="emergency_contact_email" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Emergency Contact Email</label>
                </div>


            </div>


            <button @click.prevent="nextStep" class="exclude-from-pdf text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Next
            </button>
        </div>
        <div v-if="currentStep === 2 && showForm || showAll" class="w-full relative">
            <div
                class="flex flex-col mb-2 z-10 relative bg-white rounded-lg shadow-md p-4 border-4 border-solid border-teal"
            >

                <p class="mb-4 text-[20px] text-gray-700">Information Needed for Credit Check</p>

                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.credit_check.applicant_birth_date" type="date" name="applicant_birth_date" id="applicant_birth_date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="applicant_birth_date" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Applicant’s Birth Date</label>
                </div>

                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.credit_check.social_insurance_number" type="text" name="social_insurance_number" id="social_insurance_number" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="social_insurance_number" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Social Insurance Number</label>
                </div>

                <!-- Co-Applicant Name Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.co_applicant.name" type="text" name="co_applicant_name" id="co_applicant_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="co_applicant_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Co-Applicant's Legal Name</label>
                </div>

                <!-- Co-Applicant Driver License Number Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.co_applicant.driver_license_number" type="text" name="co_applicant_driver_license_number" id="co_applicant_driver_license_number" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="co_applicant_driver_license_number" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Co-Applicant's DriverLicense Number</label>
                </div>

                <!-- Co-Applicant Phone Number Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.co_applicant.phone_number" type="tel" name="co_applicant_phone_number" id="co_applicant_phone_number" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="co_applicant_phone_number" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Co-Applicant's Phone Number</label>
                </div>

                <!-- Co-Applicant Email Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.co_applicant.email" type="email" name="co_applicant_email" id="co_applicant_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="co_applicant_email" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Co-Applicant's Email</label>
                </div>

                <!-- Co-Applicant Previous Address Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.co_applicant.previous_address" type="text" name="co_applicant_previous_address" id="co_applicant_previous_address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="co_applicant_previous_address" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Co-Applicant's Previous Address</label>
                </div>

                <!-- Co-Applicant Duration at Previous Address Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.co_applicant.duration_at_previous_address" type="text" name="co_applicant_duration_at_previous_address" id="co_applicant_duration_at_previous_address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="co_applicant_duration_at_previous_address" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Co-Applicant's Duration at Previous Address</label>
                </div>

                <!-- Co-Applicant Ownership Status Field -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.co_applicant.ownership_status" type="text" name="co_applicant_ownership_status" id="co_applicant_ownership_status" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="co_applicant_ownership_status" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Co-Applicant's Ownership Status</label>
                </div>

                <!-- Co-Applicant Eviction History Yes/No -->
                <div class="relative z-0 w-full mb-4 group">
                    <p class="text-sm text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-teal peer">Have you ever been evicted from a property?</p>
                    <input v-model="form.co_applicant.eviction_history" type="radio" name="co_applicant_eviction_history" id="co_applicant_eviction_history_yes" value="Yes" required />
                    <label for="co_applicant_eviction_history_yes" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-teal peer">Yes</label>

                    <input v-model="form.co_applicant.eviction_history" type="radio" name="co_applicant_eviction_history" id="co_applicant_eviction_history_no" value="No" required />
                    <label for="co_applicant_eviction_history_no" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer">No</label>
                </div>

                <!-- Co-Applicant Bankruptcy History Yes/No -->
                <div class="relative z-0 w-full mb-4 group">
                    <p class="text-sm text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-teal peer">Have you ever declared bankruptcy?</p>
                    <input v-model="form.co_applicant.bankruptcy_history" type="radio" name="co_applicant_bankruptcy_history" id="co_applicant_bankruptcy_history_yes" value="Yes" required />
                    <label for="co_applicant_bankruptcy_history_yes" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-teal peer">Yes</label>

                    <input v-model="form.co_applicant.bankruptcy_history" type="radio" name="co_applicant_bankruptcy_history" id="co_applicant_bankruptcy_history_no" value="No" required />
                    <label for="co_applicant_bankruptcy_history_no" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer">No</label>
                </div>

                <!-- Co-Applicant Emergency Contact Name -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.co_applicant.emergency_contact.name" type="text" name="co_applicant_emergency_contact_name" id="co_applicant_emergency_contact_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="co_applicant_emergency_contact_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Co-Applicant's Emergency Contact Name</label>
                </div>

                <!-- Co-Applicant Emergency Contact Phone -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.co_applicant.emergency_contact.phone_number" type="tel" name="co_applicant_emergency_contact_phone" id="co_applicant_emergency_contact_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="co_applicant_emergency_contact_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Co-Applicant's Emergency Contact Phone</label>
                </div>

                <!-- Co-Applicant Emergency Contact Email -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.co_applicant.emergency_contact.email" type="email" name="co_applicant_emergency_contact_email" id="co_applicant_emergency_contact_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="co_applicant_emergency_contact_email" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Co-Applicant's Emergency Contact Email</label>
                </div>

                <!-- Co-Applicant Birth Date -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.co_applicant.birth_date" type="date" name="co_applicant_birth_date" id="co_applicant_birth_date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" required />
                    <label for="co_applicant_birth_date" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Co-Applicant's Birth Date</label>
                </div>

                <!-- Co-Applicant SIN -->
                <div class="relative z-0 w-full mb-4 group">
                    <input v-model="form.co_applicant.social_insurance_number" type="text" name="co_applicant_social_insurance_number" id="co_applicant_social_insurance_number" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer" placeholder=" " required />
                    <label for="co_applicant_social_insurance_number" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Co-Applicant's Social Insurance Number</label>
                </div>

                <p class="mb-4 text-[16px] text-gray-700">References (Business, Bank, Client or Supplier)</p>

                <div v-for="(reference, index) in form.references" :key="index">

                    <p class="mb-4 text-[15px] text-gray-700">Reference {{ index + 1 }}</p>

                    <!-- Reference Name -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="reference.name"
                            type="text"
                            :name="'reference_' + index + '_name'"
                            :id="'reference_' + index + '_name'"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                            placeholder=" "
                            required
                        />

                        <label
                            :for="'reference_' + index + '_name'"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Name
                        </label>
                    </div>

                    <!-- Reference Relationship -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="reference.relationship"
                            type="text"
                            :name="'reference_' + index + '_relationship'"
                            :id="'reference_' + index + '_relationship'"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                            placeholder=" "
                            required
                        />

                        <label
                            :for="'reference_' + index + '_relationship'"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Relationship
                        </label>
                    </div>

                    <!-- Reference Phone -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="reference.phone_number"
                            type="tel"
                            :name="'reference_' + index + '_phone'"
                            :id="'reference_' + index + '_phone'"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                            placeholder=" "
                            required
                        />

                        <label
                            :for="'reference_' + index + '_phone'"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-0 peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Phone
                        </label>
                    </div>

                </div>

            </div>

            <button @click.prevent="previousStep" class="exclude-from-pdf text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mr-2">
                Back
            </button>
            <button
                type="submit"
                class="exclude-from-pdf text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
                Submit
            </button>
        </div>

        <progress-bar :value="progress" class="exclude-from-pdf" v-if="showForm"></progress-bar>
        <transition name="fade" class="transition" @before-enter="log" @enter="log">
            <success-component class="exclude-from-pdf" v-if="showSuccessComponent" />
        </transition>

    </form>

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

<script>
import ProgressBar from "@/components/ProgressBar.vue";
import "jspdf-autotable"
import SuccessComponent from "@/components/SuccessComponent.vue";
import PdfGenerator from "@/components/PdfGenerator.vue";

export default {
    name: "CommercialForm",
    components: {
        PdfGenerator,
        ProgressBar,
        SuccessComponent,
    },
    data() {
        return {
            progress: 0,
            showAll: false,
            isSubmitted:false,
            pdfData: null, // change this to null
            showSuccessComponent: false,
            showForm: true,
            currentStep: 1,
            form: {
                applicant: {
                    name: '',
                    premises_address: '',
                    required_date: '',
                    unit_type: '',
                    business_name: '',
                    business_type: '',
                    business_duration: '',
                },
                guarantor: {
                    name: '',
                    driver_license_number: '',
                    phone_number: '',
                    email: '',
                    previous_address: '',
                    duration_at_previous_address: '',
                    ownership_status: '',
                    eviction_history: '',
                    bankruptcy_history: '',
                    emergency_contact: {
                        name: '',
                        phone_number: '',
                        email: ''
                    }
                },
                credit_check: {
                    applicant_birth_date: '',
                    social_insurance_number: '',
                },
                co_applicant: {
                    name: '',
                    driver_license_number: '',
                    phone_number: '',
                    email: '',
                    previous_address: '',
                    duration_at_previous_address: '',
                    ownership_status: '',
                    eviction_history: '',
                    bankruptcy_history: '',
                    emergency_contact: {
                        name: '',
                        phone_number: '',
                        email: ''
                    },
                    birth_date: '',
                    social_insurance_number: '',
                },
                references: [
                    {
                        name: '',
                        relationship: '',
                        phone_number: ''
                    },
                    {
                        name: '',
                        relationship: '',
                        phone_number: ''
                    },
                    {
                        name: '',
                        relationship: '',
                        phone_number: ''
                    },
                    {
                        name: '',
                        relationship: '',
                        phone_number: ''
                    }
                ],
                //TODO::finish the signature
                lease_notes: '',
                applicant_signature: {
                    name: '',
                    signature: '',
                    business_title: '',
                    date: ''
                },
                // co_applicant_signature: {
                //     name: '',
                //     signature: '',
                //     business_title: '',
                //     date: ''
                // }
            }

        };
    },
    methods: {
        addDependant() {
            this.dependants.push({});
        },
        nextStep() {
            this.currentStep++; // Increment current step when Next is clicked
            if (this.progress < 100) {
                this.progress += 90;
            }
        },
        previousStep() {
            this.currentStep--; // Decrement current step when Back is clicked
            if (this.progress !== 0) {
                this.progress -= 90;
            }
        },

        handleFileChange(event) {
            this.pdfData = event.target.files[0];
        },
        submitForm() {
            this.isSubmitted = true;
            // Generate and send the email with the attached PDF
            // this.sendEmail();
            this.showSuccess()
            // console.log(this.form.witness_signature)
            this.showAll = true;

            // Use Vue.nextTick to wait until the DOM has been updated
            this.$nextTick(() => {
                // Now call the generateReport function
                this.$refs.pdfGenerator.generateReport().then(() => {
                    this.showAll = false;
                });
            });

        },

        showSuccess() {
            this.showForm = false;
            this.showSuccessComponent = true;
        },
    }

};
</script>

<style scoped>
.transition > div.fade-enter-active,
.transition > div.fade-leave-active {
    transition: opacity 2s;
}
.transition > div.fade-enter,
.transition > div.fade-leave-to {
    opacity: 0;
}

[type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 12;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: teal;
    position: absolute;
    top: 13px;
    left: 3px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}
[type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}
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

