<template>
  <form
    class="contact-us max-w-screen-xl pt-32 px-10 md:p-32 mx-auto flex flex-col flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5"
    @submit.prevent="submitForm"
    id="form"
  >
    <h2 class="text-brown text-[30px] text-center" v-if="showForm">
      TENANT RENTAL APPLICATION
    </h2>
    <div v-if="currentStep === 1 && showForm" class="w-full relative">
      <div
        class="flex flex-col mb-2 z-10 relative bg-white rounded-lg shadow-md p-4 border-4 border-solid border-teal"
      >
        <!-- Address Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.address"
            type="text"
            name="address"
            id="address"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="address"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Address</label
          >
        </div>

        <!-- City, Province, Postal Code Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.city_province_postal"
            type="text"
            name="city_province_postal"
            id="city_province_postal"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="city_province_postal"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >City, Province, Postal Code</label
          >
        </div>

        <!-- Date you require the unit Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.required_date"
            type="date"
            name="required_date"
            id="required_date"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            required
          />
          <label
            for="required_date"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Date you require the unit</label
          >
        </div>

        <!-- Initial Monthly Rent Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.initial_rent"
            type="text"
            name="initial_rent"
            id="initial_rent"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="initial_rent"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Initial Monthly Rent will be</label
          >
        </div>

        <!-- Applicant #1--------------------------------------------->
        <p class="mb-4 text-[20px] text-gray-700">Applicant #1:</p>
        <!-- Name Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant1.name"
            type="text"
            name="name"
            id="name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant1_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Name</label
          >
        </div>

        <!-- Current Address Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant1.current_address"
            type="text"
            name="current_address"
            id="applicant1_current_address"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant1_current_address"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Current address</label
          >
        </div>

        <!-- Home Phone Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant1.home_phone"
            type="tel"
            name="home_phone"
            id="applicant1_home_phone"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant1_home_phone"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Home phone</label
          >
        </div>

        <!-- Cell Phone Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant1.cellphone"
            type="tel"
            name="cellphone"
            id="applicant1_cellphone"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant1_cell_phone"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Cell phone</label
          >
        </div>

        <!-- Email Address Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant1.email_address"
            type="email"
            name="email_address"
            id="applicant1_email_address"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant1_email_address"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Email address</label
          >
        </div>

        <!-- Date of Birth Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant1.date_of_birth"
            type="date"
            name="date_of_birth"
            id="applicant1_date_of_birth"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            required
          />
          <label
            for="applicant1_date_of_birth"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Date of birth</label
          >
        </div>

        <!-- S.I.N. Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant1.sin"
            type="text"
            name="sin"
            id="applicant1_sin"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant1_sin"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >S.I.N.</label
          >
        </div>

        <!-- Employer Name Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant1.employer_name"
            type="text"
            name="employer_name"
            id="applicant1_employer_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant1_employer_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Employer Name</label
          >
        </div>

        <!-- Supervisor Name Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant1.supervisor_name"
            type="text"
            name="supervisor_name"
            id="applicant1_supervisor_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant1_supervisor_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Supervisor Name</label
          >
        </div>

        <!-- Employer Address Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant1.employer_address"
            type="text"
            name="employer_address"
            id="applicant1_employer_address"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant1_employer_address"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Employer Address</label
          >
        </div>

        <!-- Job Title Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant1.job_title"
            type="text"
            name="job_title"
            id="applicant1_job_title"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant1_job_title"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Job Title</label
          >
        </div>

        <!-- Employer Phone Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant1.employer_phone"
            type="tel"
            name="employer_phone"
            id="applicant1_employer_phone"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant1_employer_phone"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Employer Phone</label
          >
        </div>

        <!-- Employment Duration Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant1.employment_duration"
            type="text"
            name="employment_duration"
            id="applicant1_employment_duration"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant1_employment_duration"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Employment Duration</label
          >
        </div>

        <!-- Monthly Net Income Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant1.monthly_net_income"
            type="text"
            name="monthly_net_income"
            id="applicant1_monthly_net_income"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant1_monthly_net_income"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Monthly Net Income</label
          >
        </div>

        <!-- Applicant #2--------------------------------------------->
        <p class="mb-4 text-[20px] text-gray-700">Applicant #2:</p>
        <!-- Name Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant2.name"
            type="text"
            name="name"
            id="applicant2_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant2_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Name</label
          >
        </div>

        <!-- Current Address Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant2.current_address"
            type="text"
            name="current_address"
            id="applicant2_current_address"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant2_current_address"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Current address</label
          >
        </div>

        <!-- Home Phone Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant2.home_phone"
            type="tel"
            name="home_phone"
            id="home_phone"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="home_phone"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Home phone</label
          >
        </div>

        <!-- Cell Phone Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant2.cellphone"
            type="tel"
            name="cellphone"
            id="applicant2_cell_phone"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant2_cell_phone"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Cell phone</label
          >
        </div>

        <!-- Email Address Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant2.email_address"
            type="email"
            name="email_address"
            id="applicant2_email_address"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant2_email_address"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Email address</label
          >
        </div>

        <!-- Date of Birth Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant2.date_of_birth"
            type="date"
            name="date_of_birth"
            id="applicant2_date_of_birth"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            required
          />
          <label
            for="applicant2_date_of_birth"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Date of birth</label
          >
        </div>

        <!-- S.I.N. Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant2.sin"
            type="text"
            name="sin"
            id="applicant2_sin"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant2_sin"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >S.I.N.</label
          >
        </div>

        <!-- Do you have pets ?-->
        <div class="relative z-0 w-full mb-4 group">
          <select
            v-model="form.have_pet"
            name="have_pet"
            id="have_pet"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <label
            for="have_pet"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Do you have pets?</label
          >
        </div>

        <!-- Employer Name Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant2.employer_name"
            type="text"
            name="employer_name"
            id="applicant2_employer_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant2_employer_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Employer Name</label
          >
        </div>

        <!-- Supervisor Name Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant2.supervisor_name"
            type="text"
            name="supervisor_name"
            id="applicant2_supervisor_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant2_supervisor_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Supervisor Name</label
          >
        </div>

        <!-- Employer Address Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant2.employer_address"
            type="text"
            name="employer_address"
            id="applicant2_employer_address"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant2_employer_address"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Employer Address</label
          >
        </div>

        <!-- Job Title Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant2.job_title"
            type="text"
            name="job_title"
            id="applicant2_job_title"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant2_job_title"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Job Title</label
          >
        </div>

        <!-- Employer Phone Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant2.employer_phone"
            type="tel"
            name="employer_phone"
            id="applicant2_employer_phone"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant2_employer_phone"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Employer Phone</label
          >
        </div>

        <!-- Employment Duration Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant2.employment_duration"
            type="text"
            name="employment_duration"
            id="applicant2_employment_duration"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant2_employment_duration"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Employment Duration</label
          >
        </div>

        <!-- Monthly Net Income Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.applicant2.monthly_net_income"
            type="text"
            name="monthly_net_income"
            id="applicant2_monthly_net_income"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="applicant2_monthly_net_income"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Monthly Net Income</label
          >
        </div>
      </div>

      <button
        @click.prevent="nextStep"
        class="text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Next
      </button>
    </div>
    <div v-if="currentStep === 2 && showForm" class="w-full relative">
      <div
        class="flex flex-col mb-2 z-10 relative bg-white rounded-lg shadow-md p-4 border-4 border-solid border-teal"
      >
        <!-- Have Pet Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            type="text"
            name="have_pet"
            id="have_pet"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="have_pet"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Have Pet</label
          >
        </div>
        <!-- Pet Description Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            type="text"
            name="pet_description"
            id="pet_description"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="pet_description"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Pet Description</label
          >
        </div>
        <!-- Dependants Section ------------------------------------->
        <div class="relative z-0 w-full mb-4">
          <p class="mb-2 text-sm text-gray-700 font-medium">Dependants</p>

          <!-- This div will be repeated for each dependant -->
          <div
            v-for="(dependant, index) in dependants"
            :key="index"
            class="mb-4 group flex items-center"
          >
            <!-- Dependant Name Field -->
            <div class="relative z-0 w-1/2 mb-4 inline-block pr-2 flex-grow">
              <input
                v-model="dependant.name"
                type="text"
                :name="`dependant_name_${index}`"
                :id="`dependant_name_${index}`"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                placeholder=" "
                required
              />
              <label
                :for="`dependant_name_${index}`"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Name</label
              >
            </div>

            <!-- Dependant Date of Birth Field -->
            <div class="relative z-0 w-1/2 mb-4 inline-block pl-2 flex-grow">
              <input
                v-model="dependant.dob"
                type="date"
                :name="`dependant_dob_${index}`"
                :id="`dependant_dob_${index}`"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                required
              />
              <label
                :for="`dependant_dob_${index}`"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Date of birth</label
              >
            </div>

            <!-- Button to add another dependant -->
            <button
              @click.prevent="addDependant"
              class="text-teal hover:underline ml-4"
            >
              Add
            </button>
          </div>
        </div>

        <!-- Present Address Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            type="text"
            name="present_address"
            id="present_address"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="present_address"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Present Address</label
          >
        </div>
        <!-- City Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            type="text"
            name="city"
            id="city"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="city"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >City</label
          >
        </div>
        <!-- Province Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            type="text"
            name="province"
            id="province"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="province"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Province</label
          >
        </div>
        <!-- Postal Code Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            type="text"
            name="postal_code"
            id="postal_code"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="postal_code"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Postal Code</label
          >
        </div>
        <!-- Duration at Address Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            type="text"
            name="duration_at_address"
            id="duration_at_address"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="duration_at_address"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Duration at Address</label
          >
        </div>
        <!-- Landlord Name Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            type="text"
            name="landlord_name"
            id="landlord_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="landlord_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Landlord Name</label
          >
        </div>
        <!-- Landlord Phone Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            type="tel"
            name="landlord_phone"
            id="landlord_phone"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="landlord_phone"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Landlord Phone</label
          >
        </div>
      </div>

      <!-- Back Button -->
      <button
        @click.prevent="previousStep"
        class="text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mr-2"
      >
        Back
      </button>
      <button
        @click.prevent="nextStep"
        class="text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Next
      </button>
    </div>
    <div v-if="currentStep === 3 && showForm" class="w-full relative">
      <div
        class="flex flex-col mb-2 z-10 relative bg-white rounded-lg shadow-md p-4 border-4 border-solid border-teal"
      >
        <!-- Residential History--------------------------------------------->
        <p class="mb-4 text-[22px] text-gray-700">Residential History:</p>
        <!-- Present Address Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.present_address"
            type="text"
            name="present_address"
            id="present_address"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="present_address"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Present Address</label
          >
        </div>

        <!-- City Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.city"
            type="text"
            name="city"
            id="city"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="city"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >City</label
          >
        </div>

        <!-- Province Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.province"
            type="text"
            name="province"
            id="province"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="province"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Province</label
          >
        </div>

        <!-- Postal Code Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.postal_code"
            type="text"
            name="postal_code"
            id="postal_code"
            title="Please enter a valid Canadian postal code (e.g., A1A 1A1)"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
          />
          <label
            for="postal_code"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Postal Code</label
          >
        </div>

        <!-- How Long at This Address Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.duration_at_address"
            type="text"
            name="duration_at_address"
            id="duration_at_address"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="duration_at_address"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >How long at this address</label
          >
        </div>

        <!-- Landlord/Lessor Name Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.landlord_name"
            type="text"
            name="landlord_name"
            id="landlord_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="landlord_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Landlord/Lessor Name</label
          >
        </div>

        <!-- Landlord/Lessor Phone # Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.landlord_phone"
            type="tel"
            name="landlord_phone"
            id="landlord_phone"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="landlord_phone"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Landlord/Lessor Phone #</label
          >
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
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
              placeholder=" "
              required
            />
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
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
              placeholder=" "
              required
            />
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
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
              placeholder=" "
            />
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
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
              placeholder=" "
              required
            />
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
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
              placeholder=" "
              required
            />
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
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
              placeholder=" "
              required
            />
            <label
              :for="'phone' + index"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Landlord/Lessor Phone #
            </label>
          </div>
        </div>
      </div>
      <!-- Back Button -->
      <button
        @click.prevent="previousStep"
        class="text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mr-2"
      >
        Back
      </button>
      <button
        @click.prevent="nextStep"
        class="text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Next
      </button>
    </div>
    <div v-if="currentStep === 4 && showForm" class="w-full relative">
      <div
        class="flex flex-col mb-2 z-10 relative bg-white rounded-lg shadow-md p-4 border-4 border-solid border-teal"
      >
        <!-- Other Income Sources -->
        <p class="mb-4 text-[20px] text-gray-700">Other Income Sources:</p>

        <!-- Type of Income Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.other_income_sources.type_of_income"
            type="text"
            name="type_of_income"
            id="type_of_income"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="type_of_income"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Type of Income</label
          >
        </div>

        <!-- Monthly Net Income from Other Sources Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="
              form.other_income_sources.monthly_net_income_from_other_sources
            "
            type="text"
            name="monthly_net_income_from_other_sources"
            id="monthly_net_income_from_other_sources"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="monthly_net_income_from_other_sources"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Monthly Net Income from Other Sources</label
          >
        </div>

        <!-- Total Monthly Income Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.other_income_sources.total_monthly_income"
            type="text"
            name="total_monthly_income"
            id="total_monthly_income"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="total_monthly_income"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Total Monthly Income</label
          >
        </div>

        <!-- Vehicles -->
        <p class="mb-4 text-[20px] text-gray-700">Vehicles:</p>

        <!-- Vehicles loop -->
        <div v-for="(vehicle, index) in form.vehicles" :key="index">
          <p class="mb-2 text-sm text-gray-700 font-medium">
            Vehicle {{ index + 1 }}:
          </p>

          <!-- Year Field -->
          <div class="relative z-0 w-full mb-4 group">
            <input
              v-model="vehicle.year"
              type="text"
              :name="`vehicle_year_${index}`"
              :id="`vehicle_year_${index}`"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
              placeholder=" "
              required
            />
            <label
              :for="`vehicle_year_${index}`"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Year</label
            >
          </div>

          <!-- Make Field -->
          <div class="relative z-0 w-full mb-4 group">
            <input
              v-model="vehicle.make"
              type="text"
              :name="`vehicle_make_${index}`"
              :id="`vehicle_make_${index}`"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
              placeholder=" "
              required
            />
            <label
              :for="`vehicle_make_${index}`"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Make</label
            >
          </div>

          <!-- Model Field -->
          <div class="relative z-0 w-full mb-4 group">
            <input
              v-model="vehicle.model"
              type="text"
              :name="`vehicle_model_${index}`"
              :id="`vehicle_model_${index}`"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
              placeholder=" "
              required
            />
            <label
              :for="`vehicle_model_${index}`"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Model</label
            >
          </div>

          <!-- Plate Number Field -->
          <div class="relative z-0 w-full mb-4 group">
            <input
              v-model="vehicle.plate_number"
              type="text"
              :name="`vehicle_plate_number_${index}`"
              :id="`vehicle_plate_number_${index}`"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
              placeholder=" "
              required
            />
            <label
              :for="`vehicle_plate_number_${index}`"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Plate Number</label
            >
          </div>

          <!-- Driver's License No. Field -->
          <div class="relative z-0 w-full mb-4 group">
            <input
              v-model="vehicle.drivers_license_no"
              type="text"
              :name="`vehicle_drivers_license_no_${index}`"
              :id="`vehicle_drivers_license_no_${index}`"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
              placeholder=" "
              required
            />
            <label
              :for="`vehicle_drivers_license_no_${index}`"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Driver's License No.</label
            >
          </div>

          <!-- Parking Space Required Field -->
          <div class="relative z-0 w-full mb-4 group">
            <input
              v-model="vehicle.parking_space_required"
              type="text"
              :name="`vehicle_parking_space_required_${index}`"
              :id="`vehicle_parking_space_required_${index}`"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
              placeholder=" "
              required
            />
            <label
              :for="`vehicle_parking_space_required_${index}`"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Parking Space Required</label
            >
          </div>
        </div>

        <p class="mb-4 text-[20px] text-gray-700">Banking Info:</p>

        <!-- Banking Information Fields -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.banking_information.banking_institution"
            type="text"
            name="banking_institution"
            id="banking_institution"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="banking_institution"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Banking Institution</label
          >
        </div>

        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.banking_information.address"
            type="text"
            name="banking_address"
            id="banking_address"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="banking_address"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Banking Address</label
          >
        </div>

        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.banking_information.phone"
            type="tel"
            name="banking_phone"
            id="banking_phone"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="banking_phone"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Banking Phone</label
          >
        </div>

        <p class="mb-4 text-[20px] text-gray-700 uppercase">References:</p>
        <!-- References Fields -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.references[0].name"
            type="text"
            name="reference_name"
            id="reference_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="reference_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Reference Name</label
          >
        </div>
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.references[0].address"
            type="text"
            name="reference_name"
            id="reference_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="reference_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Reference Address</label
          >
        </div>
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.references[0].phone_number"
            type="text"
            name="reference_name"
            id="reference_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="reference_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Reference Phone Number</label
          >
        </div>
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.references[0].relationship"
            type="text"
            name="reference_relationship"
            id="reference_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="reference_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Reference Relationship</label
          >
        </div>

        <p class="mb-4 text-[15px] text-gray-700">Other Reference:</p>
        <!-- Repeat for other reference fields -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.references[1].name"
            type="text"
            name="reference_name"
            id="reference_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="reference_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Reference Name</label
          >
        </div>
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.references[1].address"
            type="text"
            name="reference_name"
            id="reference_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="reference_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Reference Address</label
          >
        </div>
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.references[1].phone_number"
            type="text"
            name="reference_name"
            id="reference_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="reference_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Reference Phone Number</label
          >
        </div>
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.references[1].relationship"
            type="text"
            name="reference_relationship"
            id="reference_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="reference_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Reference Relationship</label
          >
        </div>

        <p class="mb-4 text-[20px] text-gray-700">CRIMINAL AND CREDIT CHECK:</p>

        <div class="relative z-0 w-full mb-4 group">
          <!-- Criminal and Credit Check Comment Field -->
          <div>
            <textarea
              v-model="form.criminal_and_credit_check_comment"
              name="criminal_and_credit_check_comment"
              id="criminal_and_credit_check_comment"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
              placeholder=" "
              required
            ></textarea>
            <label
              for="criminal_and_credit_check_comment"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Is there anything that we may find in a criminal and/or credit
              check that you would like to comment on?</label
            >
          </div>

          <div class="flex items-center">
            <input
              v-model="form.agreed_to_conditions"
              type="checkbox"
              name="agreed_to_conditions"
              id="agreed_to_conditions"
              class="block py-2.5 px-2.5 text-sm text-gray-900 bg-transparent border-2 border-teal rounded-full appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
              required
            />
            <label
              for="agreed_to_conditions"
              class="mt-2 peer-focus:font-medium text-sm text-gray-500 duration-300 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 ml-1"
              style="white-space: normal; width: 95%"
            >
              I/we hereby declare that the information I have provided in this
              form is accurate. I/we hereby authorize the individual(s) or
              organization to whom this application is submitted to: a) contact
              my employer and all other references/previous landlords named in
              this application; b) perform a criminal check with the police; and
              c) obtain a credit report from an authorized Canadian credit
              bureau.
            </label>
          </div>
        </div>

        <!-- Applicant 1 Signature Field -->
        <!--                <div class="relative z-0 w-full mb-4 group">-->
        <!--                    <VueSignaturePad ref="applicant1_signature" />-->
        <!--                    <label class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- left-0 text-teal">Applicant 1 Signature</label>-->
        <!--                    <div>-->
        <!--                        <button @click.prevent="save('applicant1_signature')" class="link-light bg-teal-500 ml-1 mr-5">Save</button>-->
        <!--                        <button @click.prevent="undo('applicant1_signature')" class="link-light bg-teal-500">Undo</button>-->
        <!--                    </div>-->
        <!--                </div>-->

        <!-- Applicant 2 Signature Field -->
        <!--                <div class="relative z-0 w-full mb-4 group">-->
        <!--                    <VueSignaturePad ref="applicant2_signature" />-->
        <!--                    <label class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- left-0 text-teal">Applicant 2 Signature</label>-->
        <!--                    <div>-->
        <!--                        <button @click.prevent="save('applicant2_signature')" class="link-light bg-teal-500 ml-1 mr-5">Save</button>-->
        <!--                        <button @click.prevent="undo('applicant2_signature')" class="link-light bg-teal-500">Undo</button>-->
        <!--                    </div>-->
        <!--                </div>-->

        <!-- Witness Name Field -->
        <div class="relative z-0 w-full mb-4 group">
          <input
            v-model="form.witness_name"
            type="text"
            name="witness_name"
            id="witness_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
            placeholder=" "
            required
          />
          <label
            for="witness_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Witness Name</label
          >
        </div>

        <!-- Witness Signature Field -->
        <!--                <div class="relative z-0 w-full mb-4 group">-->
        <!--                    <VueSignaturePad ref="witness_signature" />-->
        <!--                    <label for="witness_signature" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin- peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Witness Signature</label>-->
        <!--                    <div>-->
        <!--                        <button @click.prevent="save('witness_signature')" class="link-light text-teal-600 bg-teal-500 ml-1 mr-5 cursor-pointer">Save</button>-->
        <!--                        <button @click.prevent="undo('witness_signature')" class="link-light text-teal-600 cursor-pointer">Undo</button>-->
        <!--                    </div>-->
        <!--                </div>-->
      </div>

      <!-- Back Button -->
      <button
        @click.prevent="previousStep"
        class="text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mr-2"
      >
        Back
      </button>
      <button
        type="submit"
        class="text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </div>

    <progress-bar :value="progress" v-if="showForm"></progress-bar>
    <transition name="fade" class="transition" @before-enter="log" @enter="log">
      <success-component v-if="showSuccessComponent" />
    </transition>
  </form>

  <form
    class="hidden contact-us max-w-screen-xl p-10 md:p-32 mx-auto flex flex-col flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5"
    @submit.prevent="submitForm"
    id="form2"
  >
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
~``;
import { jsPDF } from "jspdf";
import emailjs from "@emailjs/browser";
import "jspdf-autotable";
import SuccessComponent from "@/components/SuccessComponent.vue";
import ProgressBar from "@/components/ProgressBar.vue";
// Add FileSaver import
export default {
  name: "TenantApplicationForm",
  components: {
    SuccessComponent,
    ProgressBar,
  },
  data() {
    return {
      progress: 0,
      pdfData: null, // change this to null
      dependants: [{}], // Start with one empty dependant
      selectedPetOption: "",
      showSuccessComponent: false,
      showForm: true,
      currentStep: 1,
      form: {
        address: "",
        city_province_postal: "",
        required_date: "",
        initial_rent: "",
        applicant1: {
          name: "",
          current_address: "",
          home_phone: "",
          cellphone: "",
          email_address: "",
          date_of_birth: "",
          sin: "",
          employer_name: "",
          supervisor_name: "",
          employer_address: "",
          job_title: "",
          employer_phone: "",
          employment_duration: "",
          monthly_net_income: "",
        },
        applicant2: {
          name: "",
          current_address: "",
          home_phone: "",
          cellphone: "",
          email_address: "",
          date_of_birth: "",
          sin: "",
          employer_name: "",
          supervisor_name: "",
          employer_address: "",
          job_title: "",
          employer_phone: "",
          employment_duration: "",
          monthly_net_income: "",
        },
        have_pet: "",
        pet_description: "",
        dependants: [],
        present_address: "",
        city: "",
        province: "",
        postal_code: "",
        duration_at_address: "",
        landlord_name: "",
        landlord_phone: "",
        previous_addresses: [
          {
            city: "",
            province: "",
            code: "",
            duration: "",
            landlord: "",
            phone: "",
          },
          {
            city: "",
            province: "",
            code: "",
            duration: "",
            landlord: "",
            phone: "",
          },
        ],
        other_income_sources: {
          type_of_income: "",
          monthly_net_income_from_other_sources: "",
          total_monthly_income: "",
        },
        vehicles: [
          {
            year: "",
            make: "",
            model: "",
            plate_number: "",
            drivers_license_no: "",
            parking_space_required: "",
          },
          {
            year: "",
            make: "",
            model: "",
            plate_number: "",
            drivers_license_no: "",
            parking_space_required: "",
          },
        ],
        banking_information: {
          banking_institution: "",
          address: "",
          phone: "",
        },
        references: [
          {
            name: "",
            address: "",
            phone_number: "",
            relationship: "",
          },
          {
            name: "",
            address: "",
            phone_number: "",
            relationship: "",
          },
        ],
        criminal_and_credit_check_comment: "",
        // applicant1_signature: '',
        // applicant1_signature_date: '',
        // applicant2_signature: '',
        // applicant2_signature_date: '',
        // agreed_to_conditions:'',
        // witness_signature: '',
        witness_name: "",
      },
    };
  },
  methods: {
    undo(fieldRef) {
      this.$refs[fieldRef].undoSignature();
    },
    save(fieldRef) {
      const { isEmpty, data } = this.$refs[fieldRef].saveSignature();
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
      // Generate and send the email with the attached PDF
      this.sendEmail();
      this.showSuccess();
      // console.log(this.form.witness_signature)
    },
    handleFileChange(event) {
      this.pdfData = event.target.files[0];
    },
    generatePDF() {
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "in",
        format: "letter",
      });

      // Title
      const applicantName = this.this.form.applicant1.name;
      const title = applicantName + "Tenant Application Form";

      // Title
      doc.setFontSize(16).text(title, 0.5, 1.0);
      // Line under title
      doc.setLineWidth(0.01).line(0.5, 1.1, 8.0, 1.1);

      const body = this.prepareBody(this.form);
      doc.autoTable({
        columns: [
          { title: "Field", dataKey: "field" },
          { title: "Content", dataKey: "content" },
        ],
        body,
        margin: { left: 0.5, top: 1.25 },
        didDrawCell: (data) => {
          if (data.section === "body" && data.cell.raw.isHeader) {
            doc.setFont("helvetica", "bold");
          } else {
            doc.setFont("helvetica"); // You might need to reset to the normal style
          }
        },
      });

      return doc;
    },

    prepareBody(data, prefix = "") {
      let body = [];

      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          const value = data[key];
          let fullKey = prefix ? `${prefix}.${key}` : key;

          // Make replacements here
          // Applicant 1
          fullKey = fullKey.replace("applicant1.name", "Applicant #1 Name");
          fullKey = fullKey.replace(
            "applicant1.current_address",
            "Applicant #1 Current Address"
          );
          fullKey = fullKey.replace(
            "applicant1.home_phone",
            "Applicant #1 Home Phone"
          );
          fullKey = fullKey.replace(
            "applicant1.cellphone",
            "Applicant #1 Cell Phone"
          );
          fullKey = fullKey.replace(
            "applicant1.email_address",
            "Applicant #1 Email"
          );
          fullKey = fullKey.replace(
            "applicant1.date_of_birth",
            "Applicant #1 Date of Birth"
          );
          fullKey = fullKey.replace("applicant1.sin", "Applicant #1 SIN");

          // Applicant 2
          fullKey = fullKey.replace("applicant2.name", "Applicant #2 Name");
          fullKey = fullKey.replace(
            "applicant2.current_address",
            "Applicant #2 Current Address"
          );
          fullKey = fullKey.replace(
            "applicant2.home_phone",
            "Applicant #2 Home Phone"
          );
          fullKey = fullKey.replace(
            "applicant2.cellphone",
            "Applicant #2 Cell Phone"
          );
          fullKey = fullKey.replace(
            "applicant2.email_address",
            "Applicant #2 Email"
          );
          fullKey = fullKey.replace(
            "applicant2.date_of_birth",
            "Applicant #2 Date of Birth"
          );
          fullKey = fullKey.replace("applicant2.sin", "Applicant #2 SIN");

          // Residential History
          fullKey = fullKey.replace("present_address", "Present Address");
          fullKey = fullKey.replace("city", "City");
          fullKey = fullKey.replace("province", "Province");
          fullKey = fullKey.replace("postal_code", "Postal Code");
          fullKey = fullKey.replace(
            "duration_at_address",
            "Duration at Address"
          );
          fullKey = fullKey.replace("landlord_name", "Landlord Name");
          fullKey = fullKey.replace("landlord_phone", "Landlord Phone");

          // Employment
          fullKey = fullKey.replace(
            "applicant1.employer_name",
            "Applicant #1 Employer"
          );
          fullKey = fullKey.replace(
            "applicant1.supervisor_name",
            "Applicant #1 Supervisor"
          );
          fullKey = fullKey.replace(
            "applicant1.employer_address",
            "Applicant #1 Employer Address"
          );
          fullKey = fullKey.replace(
            "applicant1.job_title",
            "Applicant #1 Job Title"
          );
          fullKey = fullKey.replace(
            "applicant1.employer_phone",
            "Applicant #1 Employer Phone"
          );
          fullKey = fullKey.replace(
            "applicant1.employment_duration",
            "Applicant #1 Employment Duration"
          );
          fullKey = fullKey.replace(
            "applicant1.monthly_net_income",
            "Applicant #1 Monthly Income"
          );

          fullKey = fullKey.replace(
            "applicant2.employer_name",
            "Applicant #2 Employer"
          );
          fullKey = fullKey.replace(
            "applicant2.supervisor_name",
            "Applicant #2 Supervisor"
          );
          fullKey = fullKey.replace(
            "applicant2.employer_address",
            "Applicant #2 Employer Address"
          );
          fullKey = fullKey.replace(
            "applicant2.job_title",
            "Applicant #2 Job Title"
          );
          fullKey = fullKey.replace(
            "applicant2.employer_phone",
            "Applicant #2 Employer Phone"
          );
          fullKey = fullKey.replace(
            "applicant2.employment_duration",
            "Applicant #2 Employment Duration"
          );
          fullKey = fullKey.replace(
            "applicant2.monthly_net_income",
            "Applicant #2 Monthly Income"
          );

          // Vehicles
          fullKey = fullKey.replace("vehicles[0].year", "Vehicle 1 Year");
          fullKey = fullKey.replace("vehicles[0].make", "Vehicle 1 Make");
          fullKey = fullKey.replace("vehicles[0].model", "Vehicle 1 Model");
          fullKey = fullKey.replace(
            "vehicles[0].plate_number",
            "Vehicle 1 Plate Number"
          );
          fullKey = fullKey.replace(
            "vehicles[0].drivers_license_no",
            "Vehicle 1 Driver License"
          );
          fullKey = fullKey.replace(
            "vehicles[0].parking_space_required",
            "Vehicle 1 Parking Space Required"
          );

          fullKey = fullKey.replace("vehicles[1].year", "Vehicle 2 Year");
          fullKey = fullKey.replace("vehicles[1].make", "Vehicle 2 Make");
          fullKey = fullKey.replace("vehicles[1].model", "Vehicle 2 Model");
          fullKey = fullKey.replace(
            "vehicles[1].plate_number",
            "Vehicle 2 Plate Number"
          );
          fullKey = fullKey.replace(
            "vehicles[1].drivers_license_no",
            "Vehicle 2 Driver License"
          );
          fullKey = fullKey.replace(
            "vehicles[1].parking_space_required",
            "Vehicle 2 Parking Space Required"
          );

          // Previous Addresses
          fullKey = fullKey.replace(
            "previous_addresses[0].City",
            "Previous Address 1 City"
          );
          fullKey = fullKey.replace(
            "previous_addresses[0].Province",
            "Previous Address 1 Province"
          );
          fullKey = fullKey.replace(
            "previous_addresses[0].code",
            "Previous Address 1 Postal Code"
          );
          fullKey = fullKey.replace(
            "previous_addresses[0].duration",
            "Previous Address 1 Duration"
          );
          fullKey = fullKey.replace(
            "previous_addresses[0].landlord",
            "Previous Address 1 Landlord Name"
          );
          fullKey = fullKey.replace(
            "previous_addresses[0].phone",
            "Previous Address 1 Landlord Phone"
          );

          fullKey = fullKey.replace(
            "previous_addresses[1].City",
            "Previous Address 2 City"
          );
          fullKey = fullKey.replace(
            "previous_addresses[1].Province",
            "Previous Address 2 Province"
          );
          fullKey = fullKey.replace(
            "previous_addresses[1].code",
            "Previous Address 2 Postal Code"
          );
          fullKey = fullKey.replace(
            "previous_addresses[1].duration",
            "Previous Address 2 Duration"
          );
          fullKey = fullKey.replace(
            "previous_addresses[1].landlord",
            "Previous Address 2 Landlord Name"
          );
          fullKey = fullKey.replace(
            "previous_addresses[1].phone",
            "Previous Address 2 Landlord Phone"
          );

          // References
          fullKey = fullKey.replace("references[0].name", "Reference 1 Name");
          fullKey = fullKey.replace(
            "references[0].address",
            "Reference 1 Address"
          );
          fullKey = fullKey.replace(
            "references[0].phone_number",
            "Reference 1 Phone"
          );
          fullKey = fullKey.replace(
            "references[0].relationship",
            "Reference 1 Relationship"
          );

          fullKey = fullKey.replace("references[1].name", "Reference 2 Name");
          fullKey = fullKey.replace(
            "references[1].address",
            "Reference 2 Address"
          );
          fullKey = fullKey.replace(
            "references[1].phone_number",
            "Reference 2 Phone"
          );
          fullKey = fullKey.replace(
            "references[1].relationship",
            "Reference 2 Relationship"
          );

          // Criminal and Credit Check
          fullKey = fullKey.replace(
            "criminal_and_credit_check_comment",
            "Criminal and Credit Check Comment"
          );
          // Witness
          fullKey = fullKey.replace("witness_name", "Witness Name");
          // Conditions
          fullKey = fullKey.replace(
            "agreed_to_conditions",
            "Agreed to Conditions"
          );

          fullKey = fullKey.replace(
            "other_income_sources.type_of_income",
            "Income Type"
          );
          fullKey = fullKey.replace(
            "other_income_sources.monthly_net_income_from_other_sources",
            "Monthly Net Income"
          );
          fullKey = fullKey.replace(
            "other_income_sources.total_monthly_income",
            "Monthly Income"
          );

          fullKey = fullKey.replace(
            "banking_information.banking_institution",
            "Banking Institution"
          );
          fullKey = fullKey.replace(
            "banking_information.address",
            "Bank Address"
          );
          fullKey = fullKey.replace("banking_information.phone", "Bank Phone");

          if (value && typeof value === "object") {
            if (Array.isArray(value)) {
              value.forEach((item, index) => {
                body = body.concat(
                  this.prepareBody(item, `${fullKey}[${index}]`)
                );
              });
            } else {
              body = body.concat(this.prepareBody(value, fullKey));
            }
          } else {
            body.push({ field: fullKey + ":", content: value }); // Added ':' after the field
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
      const pdfBlob = doc.output("blob");

      const fileInput = document.querySelector('input[type="file"]');
      // create File object
      const pdfFile = new File([pdfBlob], `${this.form.applicant1.name}.pdf`, {
        type: "application/pdf",
      });

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
    },
    sendFormWithPDF(serviceID, templateID) {
      // Send the email with the attached PDF
      emailjs
        .sendForm(serviceID, templateID, "#form2", "NxLLnhlEW3KDj2zPO")
        .then(() => {
          this.pdfData = "";
          console.log("finish email");
        })
        .catch((err) => {
          alert(JSON.stringify(err));
        });
    },

    showSuccess() {
      this.showForm = false;
      this.showSuccessComponent = true;
    },
  },
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
</style>
