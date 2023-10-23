<template>
    <form
        class="contact-us max-w-screen-xl p-10 md:p-32 mx-auto flex flex-col flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5"
        @submit.prevent="submitForm"
        id="form"
    >
        <h2 class="text-brown text-[30px]">COMMERCIAL RENTAL APPLICATION</h2>
        <div v-if="currentStep === 1 && showForm" class="w-full relative">
            <div
                class="flex flex-col mb-2 z-10 relative bg-white rounded-lg shadow-md p-4 border-4 border-solid border-teal"
            >
                <p class="mb-4  text-[25px] text-gray-700">Applicants Name (Corporation or Individual)</p>
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


            <button @click.prevent="nextStep" class="text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Next
            </button>
        </div>
        <div v-if="currentStep === 2 && showForm" class="w-full relative">
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

                <p class="mb-4 text-[20px] text-gray-700">References (Business, Bank, Client or Supplier)</p>

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

            <button @click.prevent="previousStep" class="text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mr-2">
                Back
            </button>
            <button
                type="submit"
                class="text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
                Submit
            </button>
        </div>

        <transition name="fade" class="transition" @before-enter="log" @enter="log">
            <success-component v-if="showSuccessComponent" />
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

<script>~``
import { jsPDF } from "jspdf"
import emailjs from '@emailjs/browser';
import "jspdf-autotable"
import SuccessComponent from "@/components/SuccessComponent.vue";

export default {
    name: "CommercialForm",
    components: {
        SuccessComponent,
    },
    data() {
        return {
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
                // lease_notes: '',
                // applicant_signature: {
                //     name: '',
                //     signature: '',
                //     business_title: '',
                //     date: ''
                // },
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
        },
        previousStep() {
            this.currentStep--; // Decrement current step when Back is clicked
        },
        submitForm() {
            // Generate and send the email with the attached PDF
            this.sendEmail();
            this.showSuccess()
            // console.log(this.form.witness_signature)
        },
        handleFileChange(event) {
            this.pdfData = event.target.files[0];
        },
        generatePDF() {
            const doc = new jsPDF({
                orientation: "portrait",
                unit: "in",
                format: "letter"
            });

            // Title
            const applicantName = this.form.applicant1 ? this.form.applicant.name : 'Application Form';
            const title = applicantName + ' Application Form';

            // Title
            doc.setFontSize(16).text(title, 0.5, 1.0);
            // Line under title
            doc.setLineWidth(0.01).line(0.5, 1.1, 8.0, 1.1);

            const body = this.prepareBody(this.form);
            doc.autoTable({
                columns: [
                    { title: "Field", dataKey: "field" },
                    { title: "Content", dataKey: "content" }
                ],
                body,
                margin: { left: 0.5, top: 1.25 },
                didDrawCell: (data) => {
                    if (data.section === 'body' && data.cell.raw.isHeader) {
                        doc.setFont("helvetica", "bold");
                    } else {
                        doc.setFont("helvetica"); // You might need to reset to the normal style
                    }
                }
            });

            return doc
        },

        prepareBody(data, prefix = '') {
            let body = [];

            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const value = data[key];
                    let fullKey = prefix ? `${prefix}.${key}` : key;

                    // Check if this is the first previous address and insert header if it is
                    if (fullKey === 'previous_addresses[0].city') {
                        body.push({ field: 'Previous Addr #1:', content: '', isHeader: true }); // Added isHeader: true
                    }

                    // Make replacements here
                    // Applicant
                    fullKey = fullKey.replace('applicant.name', 'Applicant Name');
                    fullKey = fullKey.replace('applicant.premises_address', 'Address of Premises to be Rented');
                    fullKey = fullKey.replace('applicant.required_date', 'Date Premises Required');
                    fullKey = fullKey.replace('applicant.unit_type', 'Type of Unit Desired');
                    fullKey = fullKey.replace('applicant.business_name', 'Legal Name of Business');
                    fullKey = fullKey.replace('applicant.business_type', 'Type of Business');
                    fullKey = fullKey.replace('applicant.business_duration', 'Business Duration');

// Guarantor
                    fullKey = fullKey.replace('guarantor.name', 'Guarantor Name');
                    fullKey = fullKey.replace('guarantor.driver_license_number', "Driver's License Number");
                    fullKey = fullKey.replace('guarantor.phone_number', 'Phone Number');
                    fullKey = fullKey.replace('guarantor.email', 'Email');
                    fullKey = fullKey.replace('guarantor.previous_address', 'Previous Address');
                    fullKey = fullKey.replace('guarantor.duration_at_previous_address', 'Duration at Previous Address');
                    fullKey = fullKey.replace('guarantor.ownership_status', 'Ownership Status');
                    fullKey = fullKey.replace('guarantor.eviction_history', 'Eviction History');
                    fullKey = fullKey.replace('guarantor.bankruptcy_history', 'Bankruptcy History');
                    fullKey = fullKey.replace('guarantor.emergency_contact.name', 'Emergency Contact Name');
                    fullKey = fullKey.replace('guarantor.emergency_contact.phone_number', 'Emergency Contact Phone Number');
                    fullKey = fullKey.replace('guarantor.emergency_contact.email', 'Emergency Contact Email');

// Credit Check
                    fullKey = fullKey.replace('credit_check.applicant_birth_date', "Applicant's Birth Date");
                    fullKey = fullKey.replace('credit_check.social_insurance_number', 'Social Insurance Number');

// Co-Applicant
                    fullKey = fullKey.replace('co_applicant.name', 'Co-Applicant Name');
                    fullKey = fullKey.replace('co_applicant.driver_license_number', "Co-Applicant Driver's License Number");
                    fullKey = fullKey.replace('co_applicant.phone_number', 'Co-Applicant Phone Number');
                    fullKey = fullKey.replace('co_applicant.email', 'Co-Applicant Email');
                    fullKey = fullKey.replace('co_applicant.previous_address', 'Co-Applicant Previous Address');
                    fullKey = fullKey.replace('co_applicant.duration_at_previous_address', 'Co-Applicant Duration at Previous Address');
                    fullKey = fullKey.replace('co_applicant.ownership_status', 'Co-Applicant Ownership Status');
                    fullKey = fullKey.replace('co_applicant.eviction_history', 'Co-Applicant Eviction History');
                    fullKey = fullKey.replace('co_applicant.bankruptcy_history', 'Co-Applicant Bankruptcy History');
                    fullKey = fullKey.replace('co_applicant.emergency_contact.name', 'Co-Applicant Emergency Contact Name');
                    fullKey = fullKey.replace('co_applicant.emergency_contact.phone_number', 'Co-Applicant Emergency Contact Phone Number');
                    fullKey = fullKey.replace('co_applicant.emergency_contact.email', 'Co-Applicant Emergency Contact Email');
                    fullKey = fullKey.replace('co_applicant.birth_date', 'Co-Applicant Birth Date');
                    fullKey = fullKey.replace('co_applicant.social_insurance_number', 'Co-Applicant Social Insurance Number');

// References
                    fullKey = fullKey.replace('references.name', 'Reference 1 Name');
                    fullKey = fullKey.replace('references.relationship', 'Reference 1 Relationship');
                    fullKey = fullKey.replace('references.phone_number', 'Reference 1 Phone Number');

                    // References
                    fullKey = fullKey.replace('references[1].name', 'Reference 2 Name');
                    fullKey = fullKey.replace('references[1].relationship', 'Reference 2 Relationship');
                    fullKey = fullKey.replace('references[1].phone_number', 'Reference 2 Phone Number');

                    fullKey = fullKey.replace('references[2].name', 'Reference 3 Name');
                    fullKey = fullKey.replace('references[2].relationship', 'Reference 3 Relationship');
                    fullKey = fullKey.replace('references[2].phone_number', 'Reference 3 Phone Number');

                    fullKey = fullKey.replace('references[3].name', 'Reference 4 Name');
                    fullKey = fullKey.replace('references[3].relationship', 'Reference 4 Relationship');
                    fullKey = fullKey.replace('references[3].phone_number', 'Reference 4 Phone Number');


                    if (value && typeof value === 'object') {
                        if (Array.isArray(value)) {
                            value.forEach((item, index) => {
                                body = body.concat(this.prepareBody(item, `${fullKey}[${index}]`));
                            });
                        } else {
                            body = body.concat(this.prepareBody(value, fullKey));
                        }
                    } else {
                        body.push({ field: fullKey + ':', content: value }); // Added ':' after the field
                    }
                }
            }

            return body;
        },

        async sendEmail() {
            const serviceID = "default_service";
            const templateID = "template_vyzsaql";

            const doc = await this.generatePDF();
            // get the output as blob
            const pdfBlob = doc.output('blob');

            const fileInput = document.querySelector('input[type="file"]');
            // create File object
            const pdfFile = new File([pdfBlob], `${this.form.applicant.name}.pdf`, {type: 'application/pdf'});

            // Now let's create a DataTransfer to get a FileList
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(pdfFile);
            fileInput.files = dataTransfer.files;

            // Convert the PDF blob to a data URL
            const reader = new FileReader();
            reader.onloadend = () => {
                this.sendFormWithPDF(serviceID, templateID);
            };

            reader.readAsDataURL(pdfBlob);
        }
        ,

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
</style>

