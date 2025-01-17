<template>
    <div class="main_form_container">
        <form
            class="contact-us main_form max-w-screen-xl p-10 md:p-32 mx-auto flex flex-col flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5"
            @submit.prevent="submitForm"
            :class="{ submitted: isSubmitted }"
            id="form"
            :style="{ width: this.isSubmitted ? fromSize : '100w',display: this.isMobileScreen ? 'none' : 'block'  }"        >
            <PdfGenerator class="hidden" ref="pdfGenerator" :form="form"/>
           <h2 class="text-brown text-center" :class="isSubmitted ? 'text-[20px]' : 'text-[30px]'" v-if="showForm">NORTH SIMCOE PROPERTY MANAGEMENT</h2>
            <h2 class="text-brown pb-3 text-center" :class="isSubmitted ? 'text-[20px]' : 'text-[30px]'" v-if="showForm">TENANT RENTAL APPLICATION</h2>
            <div v-if="currentStep === 1 && showForm || showAll" class="w-full relative">

                <div
                    class="flex flex-col mb-2 z-10 relative bg-white rounded-lg shadow-md w-full  p-4 "
                >
                    <!-- Address Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.address_of_rental"
                            type="text"
                            name="address_of_rental"
                            id="address_of_rental"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="address_of_rental"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Address of Rental</label>
                    </div>

                    <!-- City, Province, Postal Code Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.city_province_postal"
                            type="text"
                            name="city_province_postal"
                            id="city_province_postal"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="city_province_postal"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >City, Province, Postal Code</label>
                    </div>

                    <!-- Date you require the unit Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.required_date"
                            type="date"
                            name="required_date"
                            id="required_date"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            required
                        />
                        <label
                            for="required_date"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Date you require the unit</label>
                    </div>

                    <!-- Initial Monthly Rent Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.initial_rent"
                            type="text"
                            name="initial_rent"
                            id="initial_rent"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="initial_rent"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Initial Monthly Rent will be</label>
                    </div>

                    <!-- Applicant #1--------------------------------------------->
                    <p class="mb-4 text-[20px] text-gray-700">
                        Applicant #1:
                    </p>
                    <!-- Name Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.applicant1.name"
                            type="text"
                            name="name"
                            id="name"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="applicant1_name"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Name</label>
                    </div>

                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.applicant1.previous_address"
                            type="text"
                            name="previous_address"
                            id="applicant1_previous_address"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="applicant1_previous_address"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Previous address</label>
                    </div>

                    <!-- Current Address Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.applicant1.current_address"
                            type="text"
                            name="current_address"
                            id="applicant1_current_address"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="applicant1_current_address"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Current address</label>
                    </div>

                    <!-- Home Phone Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.applicant1.home_phone"
                            type="tel"
                            name="home_phone"
                            id="applicant1_home_phone"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="applicant1_home_phone"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Home phone</label>
                    </div>

                    <!-- Cell Phone Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.applicant1.cellphone"
                            type="tel"
                            name="cellphone"
                            id="applicant1_cellphone"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="applicant1_cell_phone"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Cell phone</label>
                    </div>

                    <!-- Email Address Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.applicant1.email_address"
                            type="email"
                            name="email_address"
                            id="applicant1_email_address"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="applicant1_email_address"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Email address</label>
                    </div>

                    <!-- Date of Birth Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.applicant1.date_of_birth"
                            type="date"
                            name="date_of_birth"
                            id="applicant1_date_of_birth"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            required
                        />
                        <label
                            for="applicant1_date_of_birth"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Date of birth</label>
                    </div>

                    <!-- S.I.N. Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.applicant1.sin"
                            type="text"
                            name="sin"
                            id="applicant1_sin"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="applicant1_sin"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >S.I.N.</label>
                    </div>


                    <!-- Employer Name Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.applicant1.employer_name" type="text" name="employer_name" id="applicant1_employer_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                        <label for="applicant1_employer_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Employer Name</label>
                    </div>

                    <!-- Supervisor Name Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.applicant1.supervisor_name" type="text" name="supervisor_name" id="applicant1_supervisor_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                        <label for="applicant1_supervisor_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Supervisor Name</label>
                    </div>

                    <!-- Employer Address Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.applicant1.employer_address" type="text" name="employer_address" id="applicant1_employer_address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                        <label for="applicant1_employer_address" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Employer Address</label>
                    </div>

                    <!-- Job Title Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.applicant1.job_title" type="text" name="job_title" id="applicant1_job_title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                        <label for="applicant1_job_title" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Job Title</label>
                    </div>

                    <!-- Employer Phone Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.applicant1.employer_phone" type="tel" name="employer_phone" id="applicant1_employer_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                        <label for="applicant1_employer_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Employer Phone</label>
                    </div>

                    <!-- Employment Duration Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.applicant1.employment_duration" type="text" name="employment_duration" id="applicant1_employment_duration" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                        <label for="applicant1_employment_duration" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Employment Duration</label>
                    </div>

                    <!-- Monthly Net Income Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.applicant1.monthly_net_income" type="text" name="monthly_net_income" id="applicant1_monthly_net_income" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                        <label for="applicant1_monthly_net_income" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Monthly Net Income</label>
                    </div>



                    <!-- Applicant #2--------------------------------------------->
                    <p class="mb-4 text-[20px] text-gray-700">
                        Applicant #2:
                    </p>
                    <!-- Name Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.applicant2.name"
                            type="text"
                            name="name"
                            id="applicant2_name"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="applicant2_name"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Name</label>
                    </div>

                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.applicant2.previous_address"
                            type="text"
                            name="previous_address"
                            id="applicant2_previous_address"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="applicant2_previous_address"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Previous address</label>
                    </div>

                    <!-- Current Address Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.applicant2.current_address"
                            type="text"
                            name="current_address"
                            id="applicant2_current_address"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="applicant2_current_address"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Current address</label>
                    </div>

                    <!-- Home Phone Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.applicant2.home_phone"
                            type="tel"
                            name="home_phone"
                            id="home_phone"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "
                        />
                        <label
                            for="home_phone"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Home phone</label>
                    </div>

                    <!-- Cell Phone Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.applicant2.cellphone"
                            type="tel"
                            name="cellphone"
                            id="applicant2_cell_phone"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="applicant2_cell_phone"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Cell phone</label>
                    </div>

                    <!-- Email Address Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.applicant2.email_address"
                            type="email"
                            name="email_address"
                            id="applicant2_email_address"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "
                            required
                        />
                        <label
                            for="applicant2_email_address"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Email address</label>
                    </div>

                    <!-- Date of Birth Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.applicant2.date_of_birth"
                            type="date"
                            name="date_of_birth"
                            id="applicant2_date_of_birth"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            required
                        />
                        <label
                            for="applicant2_date_of_birth"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Date of birth</label>
                    </div>

                    <!-- S.I.N. Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.applicant2.sin"
                            type="text"
                            name="sin"
                            id="applicant2_sin"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "

                        />
                        <label
                            for="applicant2_sin"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >S.I.N.</label>
                    </div>


                    <!-- Employer Name Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.applicant2.employer_name" type="text" name="employer_name" id="applicant2_employer_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                        <label for="applicant2_employer_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Employer Name</label>
                    </div>

                    <!-- Supervisor Name Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.applicant2.supervisor_name" type="text" name="supervisor_name" id="applicant2_supervisor_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                        <label for="applicant2_supervisor_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Supervisor Name</label>
                    </div>

                    <!-- Employer Address Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.applicant2.employer_address" type="text" name="employer_address" id="applicant2_employer_address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                        <label for="applicant2_employer_address" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Employer Address</label>
                    </div>

                    <!-- Job Title Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.applicant2.job_title" type="text" name="job_title" id="applicant2_job_title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                        <label for="applicant2_job_title" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Job Title</label>
                    </div>

                    <!-- Employer Phone Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.applicant2.employer_phone" type="tel" name="employer_phone" id="applicant2_employer_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                        <label for="applicant2_employer_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Employer Phone</label>
                    </div>

                    <!-- Employment Duration Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.applicant2.employment_duration" type="text" name="employment_duration" id="applicant2_employment_duration" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                        <label for="applicant2_employment_duration" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Employment Duration</label>
                    </div>

                    <!-- Monthly Net Income Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.applicant2.monthly_net_income" type="text" name="monthly_net_income" id="applicant2_monthly_net_income" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
                        <label for="applicant2_monthly_net_income" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Monthly Net Income</label>
                    </div>

                    <!-- Do you have pets? Section with Conditional Check Mark -->
                    <div class="relative z-0 w-full mb-4 group">
                        <p class="text-sm text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-black peer">Do you have pets?</p>
                        <div class="flex items-center">
                            <input v-if="!isSubmitted" v-model="form.have_pet" type="radio" name="have_pet" id="have_pet_yes" value="Yes" required style="margin-top: 10px;" />
                            <label for="have_pet_yes" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-black peer">Yes</label>
                            <!-- Check Mark for Yes -->
                            <span v-if="isSubmitted && form.have_pet === 'Yes'" class="text-green-500">&#10004;</span> <!-- Replace with an appropriate check mark symbol or SVG -->
                        </div>
                        <div class="flex items-center">
                            <input v-if="!isSubmitted" v-model="form.have_pet" type="radio" name="have_pet" id="have_pet_no" value="No" required style="margin-top: 10px;" />
                            <label for="have_pet_no" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer">No</label>
                            <!-- Check Mark for No -->
                            <span v-if="isSubmitted && form.have_pet === 'No'" class="text-green-500">&#10004;</span> <!-- Replace with an appropriate check mark symbol or SVG -->
                        </div>
                    </div>


                    <!-- Dependants Section ------------------------------------->
                    <div class="relative z-0 w-full mb-4">
                        <p class="mb-2 text-sm text-gray-700 font-medium">Dependants</p>

                        <!-- This div will be repeated for each dependant -->
                        <div v-for="(dependant, index) in dependants" :key="index" class="mb-4 group flex items-center">

                            <!-- Dependant Name Field -->
                            <div class="relative z-0 w-1/2 mb-4 inline-block pr-2 flex-grow">
                                <input
                                    v-model="dependant.name"
                                    type="text"
                                    :name="`dependant_name_${index}`"
                                    :id="`dependant_name_${index}`"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                    placeholder=" "

                                />
                                <label
                                    :for="`dependant_name_${index}`"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >Name</label>
                            </div>

                            <!-- Dependant Date of Birth Field -->
                            <div class="relative z-0 w-1/2 mb-4 inline-block pl-2 flex-grow">
                                <input
                                    v-model="dependant.dob"
                                    type="date"
                                    :name="`dependant_dob_${index}`"
                                    :id="`dependant_dob_${index}`"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"

                                />
                                <label
                                    :for="`dependant_dob_${index}`"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >Date of birth</label>
                            </div>

                            <!-- Button to add another dependant -->
                            <button @click.prevent="addDependant" class="exclude-from-pdf text-teal hover:underline ml-4">Add</button>
                        </div>
                    </div>

                    <!-- Present Address Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.present_address"
                            type="text"
                            name="present_address"
                            id="present_address"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "

                        />
                        <label
                            for="present_address"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Present Address</label>
                    </div>
                    <!-- City Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.city"
                            type="text"
                            name="city"
                            id="city"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "

                        />
                        <label
                            for="city"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >City</label>
                    </div>

                    <!-- Province Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.province" type="text" name="province" id="province" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                        <label for="province" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Province</label>
                    </div>
                    <!-- Postal Code Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.postal_code" type="text" name="postal_code" id="postal_code" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                        <label for="postal_code" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Postal Code</label>
                    </div>
                    <!-- Duration at Address Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.duration_at_address" type="text" name="duration_at_address" id="duration_at_address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                        <label for="duration_at_address" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Duration at Address</label>
                    </div>
                    <!-- Landlord Name Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.landlord_name" type="text" name="landlord_name" id="landlord_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                        <label for="landlord_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Landlord Name</label>
                    </div>
                    <!-- Landlord Phone Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.landlord_phone" type="tel" name="landlord_phone" id="landlord_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                        <label for="landlord_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Landlord Phone</label>
                    </div>

                    <!-- Residential History--------------------------------------------->
                    <p class="mb-4 text-[22px] text-gray-700">
                        Residential History:
                    </p>
                    <!-- Present Address Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.present_address"
                            type="text"
                            name="present_address"
                            id="present_address"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "

                        />
                        <label
                            for="present_address"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Present Address</label>
                    </div>

                    <!-- City Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.city"
                            type="text"
                            name="city"
                            id="city"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "

                        />
                        <label
                            for="city"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >City</label>
                    </div>

                    <!-- Province Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.province"
                            type="text"
                            name="province"
                            id="province"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "

                        />
                        <label
                            for="province"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Province</label>
                    </div>

                    <!-- Postal Code Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.postal_code"
                            type="text"
                            name="postal_code"
                            id="postal_code"
                            title="Please enter a valid Canadian postal code (e.g., A1A 1A1)"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "
                        />
                        <label
                            for="postal_code"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Postal Code</label>
                    </div>

                    <!-- How Long at This Address Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.duration_at_address"
                            type="text"
                            name="duration_at_address"
                            id="duration_at_address"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "

                        />
                        <label
                            for="duration_at_address"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >How long at this address</label>
                    </div>

                    <!-- Landlord/Lessor Name Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.landlord_name"
                            type="text"
                            name="landlord_name"
                            id="landlord_name"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "

                        />
                        <label
                            for="landlord_name"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Landlord/Lessor Name</label>
                    </div>

                    <!-- Landlord/Lessor Phone # Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input
                            v-model="form.landlord_phone"
                            type="tel"
                            name="landlord_phone"
                            id="landlord_phone"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "

                        />
                        <label
                            for="landlord_phone"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Landlord/Lessor Phone #</label>
                    </div>


                    <div v-for="(address, index) in form.previous_addresses" :key="index">

                        <p class="mb-4 text-[20px] text-gray-700">
                            Previous Address #{{ index + 1 }}:
                        </p>

                        <!-- City Field -->
                        <div class="relative z-0 w-full mb-4 group">
                            <input
                                v-model="address.city"
                                type="text"
                                name="city"
                                :id="'city' + index"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                placeholder=" "

                            >
                            <label
                                :for="'city' + index"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                City
                            </label>
                        </div>

                        <!-- Province Field -->
                        <div class="relative z-0 w-full mb-4 group">
                            <input
                                v-model="address.province"
                                type="text"
                                name="province"
                                :id="'province' + index"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                placeholder=" "

                            >
                            <label
                                :for="'province' + index"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Province
                            </label>
                        </div>

                        <!-- Postal Code Field -->
                        <div class="relative z-0 w-full mb-4 group">
                            <input
                                v-model="address.code"
                                type="text"
                                name="code"
                                :id="'code' + index"
                                title="Please enter a valid Canadian postal code (e.g., A1A 1A1)"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                placeholder=" "
                            >
                            <label
                                :for="'code' + index"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Postal Code
                            </label>
                        </div>

                        <!-- How Long at This Address Field -->
                        <div class="relative z-0 w-full mb-4 group">
                            <input
                                v-model="address.duration"
                                type="text"
                                name="duration"
                                :id="'duration' + index"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                placeholder=" "

                            >
                            <label
                                :for="'duration' + index"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                How long at this address
                            </label>
                        </div>

                        <!-- Landlord/Lessor Name Field -->
                        <div class="relative z-0 w-full mb-4 group">
                            <input
                                v-model="address.landlord"
                                type="text"
                                name="landlord"
                                :id="'landlord' + index"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                placeholder=" "

                            >
                            <label
                                :for="'landlord' + index"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Landlord/Lessor Name
                            </label>
                        </div>

                        <!-- Landlord/Lessor Phone # Field -->
                        <div class="relative z-0 w-full mb-4 group">
                            <input
                                v-model="address.phone"
                                type="tel"
                                name="phone"
                                :id="'phone' + index"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                                placeholder=" "

                            >
                            <label
                                :for="'phone' + index"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Landlord/Lessor Phone #
                            </label>
                        </div>

                    </div>

                    <!-- Other Income Sources -->
                    <p class="mb-4 text-[20px] text-gray-700">Other Income Sources:</p>

                    <!-- Type of Income Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.other_income_sources.type_of_income" type="text" name="type_of_income" id="type_of_income" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                        <label for="type_of_income" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type of Income</label>
                    </div>

                    <!-- Monthly Net Income from Other Sources Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.other_income_sources.monthly_net_income_from_other_sources" type="text" name="monthly_net_income_from_other_sources" id="monthly_net_income_from_other_sources" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                        <label for="monthly_net_income_from_other_sources" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Monthly Net Income from Other Sources</label>
                    </div>

                    <!-- Total Monthly Income Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.other_income_sources.total_monthly_income" type="text" name="total_monthly_income" id="total_monthly_income" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                        <label for="total_monthly_income" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Total Monthly Income</label>
                    </div>

                    <!-- Vehicles -->
                    <p class="mb-4 text-[20px] text-gray-700">Vehicles:</p>

                    <!-- Vehicles loop -->
                    <div v-for="(vehicle, index) in form.vehicles" :key="index">
                        <p class="mb-2 text-sm text-gray-700 font-medium">Vehicle {{ index + 1 }}:</p>

                        <!-- Year Field -->
                        <div class="relative z-0 w-full mb-4 group">
                            <input v-model="vehicle.year" type="text" :name="`vehicle_year_${index}`" :id="`vehicle_year_${index}`" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                            <label :for="`vehicle_year_${index}`" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Year</label>
                        </div>

                        <!-- Make Field -->
                        <div class="relative z-0 w-full mb-4 group">
                            <input v-model="vehicle.make" type="text" :name="`vehicle_make_${index}`" :id="`vehicle_make_${index}`" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                            <label :for="`vehicle_make_${index}`" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Make</label>
                        </div>

                        <!-- Model Field -->
                        <div class="relative z-0 w-full mb-4 group">
                            <input v-model="vehicle.model" type="text" :name="`vehicle_model_${index}`" :id="`vehicle_model_${index}`" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                            <label :for="`vehicle_model_${index}`" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Model</label>
                        </div>

                        <!-- Plate Number Field -->
                        <div class="relative z-0 w-full mb-4 group">
                            <input v-model="vehicle.plate_number" type="text" :name="`vehicle_plate_number_${index}`" :id="`vehicle_plate_number_${index}`" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                            <label :for="`vehicle_plate_number_${index}`" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Plate Number</label>
                        </div>

                        <!-- Driver's License No. Field -->
                        <div class="relative z-0 w-full mb-4 group">
                            <input v-model="vehicle.drivers_license_no" type="text" :name="`vehicle_drivers_license_no_${index}`" :id="`vehicle_drivers_license_no_${index}`" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                            <label :for="`vehicle_drivers_license_no_${index}`" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Driver's License No.</label>
                        </div>

                        <!-- Parking Space  Field -->
                        <div class="relative z-0 w-full mb-4 group">
                            <input v-model="vehicle.parking_space_" type="text" :name="`vehicle_parking_space__${index}`" :id="`vehicle_parking_space__${index}`" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                            <label :for="`vehicle_parking_space__${index}`" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Parking Space</label>
                        </div>
                    </div>


                    <p class="mb-4 text-[20px] text-gray-700 uppercase">References:</p>
                    <!-- References Fields -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.references[0].name" type="text" name="reference_name" id="reference_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                        <label for="reference_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Reference Name</label>
                    </div>
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.references[0].address" type="text" name="reference_name" id="reference_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                        <label for="reference_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Reference Address</label>
                    </div>
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.references[0].phone_number" type="text" name="reference_name" id="reference_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                        <label for="reference_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Reference Phone Number</label>
                    </div>
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.references[0].relationship" type="text" name="reference_relationship" id="reference_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                        <label for="reference_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Reference Relationship</label>
                    </div>

                    <p class="mb-4 text-[15px] text-gray-700 ">Other Reference:</p>
                    <!-- Repeat for other reference fields -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.references[1].name" type="text" name="reference_name" id="reference_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                        <label for="reference_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Reference Name</label>
                    </div>
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.references[1].address" type="text" name="reference_name" id="reference_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                        <label for="reference_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Reference Address</label>
                    </div>
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.references[1].phone_number" type="text" name="reference_name" id="reference_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                        <label for="reference_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Reference Phone Number</label>
                    </div>
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.references[1].relationship" type="text" name="reference_relationship" id="reference_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                        <label for="reference_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Reference Relationship</label>
                    </div>

                    <p class="mb-4 text-[20px] text-gray-700">CRIMINAL AND CREDIT CHECK:</p>

                        <!-- Criminal and Credit Check Comment Field -->
                        <div class="relative z-0 w-full mb-4 group">
                            <input v-model="form.criminal_and_credit_check_comment" name="criminal_and_credit_check_comment" id="criminal_and_credit_check_comment" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required>
                            <label for="criminal_and_credit_check_comment" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Is there anything that we may find in a criminal and/or credit check that you would like to comment on?</label>
                        </div>

                    <div class="flex items-center z-0 w-full mb-4 group">
                        <!-- Checkbox for 'Agreed to Conditions', hidden after submission -->
                        <input v-if="!isSubmitted" v-model="form.agreed_to_conditions" type="checkbox" name="agreed_to_conditions" id="agreed_to_conditions" class="block py-2.5 px-2.5 text-sm text-gray-900 bg-transparent border-2 border-black rounded-full appearance-none focus:outline-none focus:ring-0 focus:border-black peer" required />

                        <!-- Label for the checkbox -->
                        <label v-if="!isSubmitted" for="agreed_to_conditions" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer">
                            I/we hereby declare that the information I have provided in this form is accurate. I/we hereby authorize the individual(s) or organization to whom this application is submitted to: a) contact my employer and all other references/previous landlords named in this application; b) perform a criminal check with the police; and c) obtain a credit report from an authorized Canadian credit bureau.
                        </label>

                        <!-- Display a check mark and shortened label after submission if the checkbox was checked -->
                         <!-- Check mark symbol -->
                        <label v-if="isSubmitted && form.agreed_to_conditions" for="agreed_to_conditions" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer">
                            <span v-if="isSubmitted && form.agreed_to_conditions" class="text-green-500 mr-2">&#10004;</span>  I/we hereby declare that the information....
                        </label>
                    </div>



                    <!-- Applicant 1 Signature Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <VueSignaturePad ref="applicant1_signature" />
                        <label class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- left-0 text-teal">Applicant 1 Signature</label>
                        <div>
                            <button @click.prevent="save('applicant1_signature')" class="link-light bg-teal-500 ml-1 mr-5">Save</button>
                            <button @click.prevent="undo('applicant1_signature')" class="link-light bg-teal-500">Undo</button>
                        </div>
                    </div>

                    <!-- Applicant 2 Signature Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <VueSignaturePad ref="applicant2_signature" />
                        <label class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- left-0 text-teal">Applicant 2 Signature</label>
                        <div>
                            <button @click.prevent="save('applicant2_signature')" class="link-light bg-teal-500 ml-1 mr-5">Save</button>
                            <button @click.prevent="undo('applicant2_signature')" class="link-light bg-teal-500">Undo</button>
                        </div>
                    </div>

                    <!-- Witness Name Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <input v-model="form.witness_name" type="text" name="witness_name" id="witness_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" "  />
                        <label for="witness_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Witness Name</label>
                    </div>

                    <!-- Witness Signature Field -->
                    <div class="relative z-0 w-full mb-4 group">
                        <VueSignaturePad ref="witness_signature" />
                        <label for="witness_signature" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Witness Signature</label>
                        <div>
                            <button @click.prevent="save('witness_signature')" class="link-light text-teal-600 bg-teal-500 ml-1 mr-5 cursor-pointer">Save</button>
                            <button @click.prevent="undo('witness_signature')" class="link-light text-teal-600 cursor-pointer">Undo</button>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    class="exclude-from-pdf text-brown border border-3 border-teal focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Submit
                </button>
            </div>

        </form>
    </div>


    <form class="hidden second_form max-w-screen-xl p-10 md:p-32 mx-auto flex flex-col flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5" @submit.prevent="submitForm" id="form2">
        <div class="relative z-0 w-full mb-4 group">
            <input
                @change="handleFileChange"
                type="file"
                name="pdfData"
                id="pdfData"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
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
import "jspdf-autotable"
import PdfGenerator from "@/components/PdfGenerator.vue";
// Add FileSaver import
export default {
    name: "TenantApplicationForm",
    components: {
        PdfGenerator
    },
    data() {
        return {
            fromSize: 0,
            isMobileScreen: false,
            progress: 0,
            isSubmitted: false,
            showAll:false,
            pdfData: null, // change this to null
            dependants: [{}], // Start with one empty dependant
            selectedPetOption: '',
            showSuccessComponent: false,
            showForm: true,
            currentStep: 1,
            form: {
                address_of_rental: '',
                city_province_postal: '',
                required_date: '',
                initial_rent: '',
                applicant1: {
                    name: '',
                    current_address: '',
                    previous_address: '',
                    home_phone: '',
                    cellphone: '',
                    email_address: '',
                    date_of_birth: '',
                    sin: '',
                    employer_name: '',
                    supervisor_name: '',
                    employer_address: '',
                    job_title: '',
                    employer_phone: '',
                    employment_duration: '',
                    monthly_net_income: ''
                },
                applicant2: {
                    name: '',
                    current_address: '',
                    previous_address: '',
                    home_phone: '',
                    cellphone: '',
                    email_address: '',
                    date_of_birth: '',
                    sin: '',
                    employer_name: '',
                    supervisor_name: '',
                    employer_address: '',
                    job_title: '',
                    employer_phone: '',
                    employment_duration: '',
                    monthly_net_income: ''
                },
                have_pet: '',
                pet_description: '',
                dependants: [],
                present_address: '',
                city: '',
                province: '',
                postal_code: '',
                duration_at_address: '',
                landlord_name: '',
                landlord_phone: '',
                previous_addresses: [
                    {
                        city: '',
                        province: '',
                        code: '',
                        duration: '',
                        landlord: '',
                        phone: ''
                    },
                    {
                        city: '',
                        province: '',
                        code: '',
                        duration: '',
                        landlord: '',
                        phone: ''
                    }
                ],
                other_income_sources: {
                    type_of_income: '',
                    monthly_net_income_from_other_sources: '',
                    total_monthly_income: ''
                },
                vehicles: [
                    {
                        year: '',
                        make: '',
                        model: '',
                        plate_number: '',
                        drivers_license_no: '',
                        parking_space_required: ''
                    },
                    {
                        year: '',
                        make: '',
                        model: '',
                        plate_number: '',
                        drivers_license_no: '',
                        parking_space_required: ''
                    }
                ],
                references: [
                    {
                        name: '',
                        address: '',
                        phone_number: '',
                        relationship: ''
                    },
                    {
                        name: '',
                        address: '',
                        phone_number: '',
                        relationship: ''
                    }
                ],
                applicant1_signature: '',
                applicant1_signature_date: '',
                applicant2_signature: '',
                applicant2_signature_date: '',
                agreed_to_conditions:'',
                witness_signature: '',
                witness_name: ''
            }

        };
    },
    methods: {
        // Existing methods
        openTenantRentalApplication() {
            window.open('https://form.jotform.com/240387727172057', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500');
        },
        undo(fieldRef) {
            this.$refs[fieldRef].undoSignature();
        },
        save(fieldRef) {
            const {isEmpty, data} = this.$refs[fieldRef].saveSignature();
            console.log(isEmpty);
            console.log(data);
        },
        addDependant() {
            this.dependants.push({});
        },
        nextStep() {
            this.currentStep++; // Increment current step when Next is clicked
            if (this.progress < 100) {
                this.progress += 30;
            }
        },
        previousStep() {
            this.currentStep--; // Decrement current step when Back is clicked
            if (this.progress !== 0) {
                this.progress -= 30;
            }
        },
        submitForm() {
            this.isSubmitted = true;

            // Debug: Log the current screen width
            console.log("Current window.innerWidth:", window.innerWidth);
            // Check if on a mobile device (typically consider < 768px as mobile)
            this.isMobileScreen = window.innerWidth < 768;

            // Debug: Log the value of isMobileScreen
            console.log("Is Mobile Screen:", this.isMobileScreen);

            let forms = document.getElementsByClassName('main_form');

            if (this.isMobileScreen) {
                // Adjust screen size for mobile
                this.fromSize = '80vw';

                for (let form of forms) {
                    form.style.marginLeft = '25px';
                }


                // Use Vue.nextTick to wait until the DOM has been updated
                this.$nextTick(() => {
                    // Now call the generateReport function
                    this.$refs.pdfGenerator.generateReportMobile('Tenant Application').then(() => {
                        this.showAll = false;
                    });
                });

            } else {
                this.fromSize = '80vw';

                // Generate and send the email with the attached PDF
                // this.sendEmail();
                this.showFakeForm()
                // console.log(this.form.witness_signature)
                this.showAll = true;

                // Use Vue.nextTick to wait until the DOM has been updated
                this.$nextTick(() => {
                    // Now call the generateReport function
                    this.$refs.pdfGenerator.generateReport('Tenant Application').then(() => {
                        this.showAll = false;
                    });
                });
            }


        },
        handleFileChange(event) {
            this.pdfData = event.target.files[0];
        },

        showFakeForm() {
            window.scrollTo(0, 0);
        },

        saveWitnessSignature(signature) {
            this.form.witness_signature = signature;
        },
    }
};
</script>

<style scoped>
/* Add styles for your link if needed */
.tenant-rental-application-link {
    /* Style your link here */
    color: blue; /* Example style */
    cursor: pointer;
}
.main_form{
    margin-left: 30px;
}
.submitted {
    width: 95%;;
}
.transition > div.fade-enter-active,
.transition > div.fade-leave-active {
    transition: opacity 2s;
}
.transition > div.fade-enter,
.transition > div.fade-leave-to {
    opacity: 0;
}
@media only screen and (max-width: 767px) {
    /* Select the elements you want to change the font size for */
    .text-sm {
        font-size: 12px;
    }

    .second_form{
        padding-right: 10px;
    }

    .second_form{
        margin-left: 0px;
    }

    .main_form_container{
        display: none;
    }
    h2{
        font-size: 15px;
    }

}



</style>

