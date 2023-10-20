<template>
  <form
        class="contact-us max-w-screen-xl p-10 md:p-32 mx-auto flex flex-col flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5"
          @submit.prevent="submitForm"
        id="form"
  >


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
              >Address</label>
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
              >City, Province, Postal Code</label>
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
              >Date you require the unit</label>
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
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                  placeholder=" "
                  required
              />
              <label
                  for="applicant1_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Name</label>
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
              >Current address</label>
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
              >Home phone</label>
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
              >Cell phone</label>
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
              >Email address</label>
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
              >Date of birth</label>
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
              >S.I.N.</label>
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
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                  placeholder=" "
                  required
              />
              <label
                  for="applicant2_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Name</label>
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
              >Current address</label>
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
              >Home phone</label>
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
              >Cell phone</label>
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
              >Email address</label>
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
              >Date of birth</label>
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
              >S.I.N.</label>
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
                          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                          placeholder=" "
                          required
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
                          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                          required
                      />
                      <label
                          :for="`dependant_dob_${index}`"
                          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >Date of birth</label>
                  </div>

                  <!-- Button to add another dependant -->
                  <button @click.prevent="addDependant" class="text-teal hover:underline ml-4">Add</button>
              </div>
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
              >Do you have pets?</label>
          </div>


          <!-- Please describe your pet Field -->
          <div v-if="selectedPetOption === 'yes'" class="relative z-0 w-full mb-4 group">
            <textarea
                v-model="form.pet_description"
                name="pet_description"
                id="pet_description"
                rows="2"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                placeholder=" "
            ></textarea>
              <label
                  for="pet_description"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Please describe your pet</label>
          </div>



      </div>
      <div
        class="bg-teal w-[300px] h-[250px] absolute top-[-20px] right-[-20px] md:top-[-40px] md:right-[-40px] z-negative"
      ></div>

        <button @click.prevent="nextStep" class="text-brown bg-teal hover:bg-tealdark hover:text-white focus:ring-4 focus:outline-none focus:ring-teal font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Next
        </button>
    </div>

      <div v-if="currentStep === 2 && showForm" class="w-full relative">
          <div
              class="flex flex-col mb-2 z-10 relative bg-white rounded-lg shadow-md p-4 border-4 border-solid border-teal"
          >
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
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      placeholder=" "
                      required
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
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      placeholder=" "
                      required
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
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      placeholder=" "
                      required
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
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
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
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      placeholder=" "
                      required
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
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      placeholder=" "
                      required
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
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      placeholder=" "
                      required
                  />
                  <label
                      for="landlord_phone"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Landlord/Lessor Phone #</label>
              </div>


              <!-- Address #1--------------------------------------------->
              <p class="mb-4 text-[20px] text-gray-700">
                  Previous Address #1:
              </p>
              <!-- City Field -->
              <div class="relative z-0 w-full mb-4 group">
                  <input
                      v-model="form.previous_addresses[0].city"
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
                  >City</label>
              </div>

              <!-- Province Field -->
              <div class="relative z-0 w-full mb-4 group">
                  <input
                      v-model="form.previous_addresses[0].province"
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
                  >Province</label>
              </div>

              <!-- Include the Postal Code Field code from the previous response -->
              <!-- Postal Code Field -->
              <div class="relative z-0 w-full mb-4 group">
                  <input
                      v-model="form.previous_addresses[0].postal_code"
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
                  >Postal Code</label>
              </div>

              <!-- How Long at This Address Field -->
              <div class="relative z-0 w-full mb-4 group">
                  <input
                      v-model="form.previous_addresses[0].duration_at_address"
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
                  >How long at this address</label>
              </div>

              <!-- Landlord/Lessor Name Field -->
              <div class="relative z-0 w-full mb-4 group">
                  <input
                      v-model="form.previous_addresses[0].landlord_name"
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
                  >Landlord/Lessor Name</label>
              </div>

              <!-- Landlord/Lessor Phone # Field -->
              <div class="relative z-0 w-full mb-4 group">
                  <input
                      v-model="form.previous_addresses[0].landlord_phone"
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
                  >Landlord/Lessor Phone #</label>
              </div>


              <!-- Address #2--------------------------------------------->
              <p class="mb-4 text-[20px] text-gray-700">
                  Previous Address #2:
              </p>
              <!-- City Field -->
              <div class="relative z-0 w-full mb-4 group">
                  <input
                      v-model="form.previous_addresses[1].city"
                      type="text"
                      name="city2"
                      id="city2"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      placeholder=" "
                      required
                  />
                  <label
                      for="city2"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >City</label>
              </div>

              <!-- Province Field -->
              <div class="relative z-0 w-full mb-4 group">
                  <input
                      v-model="form.previous_addresses[1].province"
                      type="text"
                      name="province2"
                      id="province2"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      placeholder=" "
                      required
                  />
                  <label
                      for="province2"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Province</label>
              </div>

              <!-- Include the Postal Code Field code from the previous response with appropriate modifications -->
              <!-- Postal Code Field -->
              <div class="relative z-0 w-full mb-4 group">
                  <input
                      v-model="form.previous_addresses[1].postal_code"
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
                  >Postal Code</label>
              </div>
              <!-- How Long at This Address Field -->
              <div class="relative z-0 w-full mb-4 group">
                  <input
                      v-model="form.previous_addresses[1].duration_at_address"
                      type="text"
                      name="duration_at_address2"
                      id="duration_at_address2"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      placeholder=" "
                      required
                  />
                  <label
                      for="duration_at_address2"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >How long at this address</label>
              </div>

              <!-- Landlord/Lessor Name Field -->
              <div class="relative z-0 w-full mb-4 group">
                  <input
                      v-model="form.previous_addresses[1].landlord_name"
                      type="text"
                      name="landlord_name2"
                      id="landlord_name2"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      placeholder=" "
                      required
                  />
                  <label
                      for="landlord_name2"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Landlord/Lessor Name</label>
              </div>

              <!-- Landlord/Lessor Phone # Field -->
              <div class="relative z-0 w-full mb-4 group">
                  <input
                      v-model="form.previous_addresses[1].landlord_phone"
                      type="tel"
                      name="landlord_phone2"
                      id="landlord_phone2"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      placeholder=" "
                      required
                  />
                  <label
                      for="landlord_phone2"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Landlord/Lessor Phone #</label>
              </div>


              <!-- Applicant #1 Employment--------------------------------------------->
              <p class="mb-4 text-[20px] text-gray-700">
                  Applicant #1 Employment:
              </p>
              <!-- Employer Name Field -->
              <div class="relative z-0 w-full mb-4 group">
                  <input
                      v-model="form.applicant1_employer_name"
                      type="text"
                      name="applicant1_employer_name"
                      id="applicant1_employer_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      placeholder=" "
                      required
                  />
                  <label
                      for="applicant1_employer_name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Employer Name</label>
              </div>


          </div>
          <div
              class="bg-teal w-[300px] h-[250px] absolute top-[-20px] right-[-20px] md:top-[-40px] md:right-[-40px] z-negative"
          ></div>

          <!-- Back Button -->
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


</template>

<script>~``
import { jsPDF } from "jspdf";
import emailjs from '@emailjs/browser';
import "jspdf-autotable"
import SuccessComponent from "@/components/SuccessComponent.vue";
export default {
  name: "FormsList",
    components: {SuccessComponent},
    data() {
        return {
            pdfData: null, // change this to null
            dependants: [{}], // Start with one empty dependant
            selectedPetOption: '',
            showSuccessComponent: false,
            showForm: true,
            currentStep: 1,
            form: {
                address: '',
                city_province_postal: '',
                required_date: '',
                initial_rent: '',
                applicant1: {
                    name: '',
                    current_address: '',
                    home_phone: '',
                    cellphone: '',
                    email_address: '',
                    date_of_birth: '',
                    sin: ''
                },
                applicant2: {
                    name: '',
                    current_address: '',
                    home_phone: '', // Note: Adjust the field name if necessary
                    cellphone: '',
                    email_address: '',
                    date_of_birth: '',
                    sin: ''
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
                        postal_code: '',
                        duration_at_address: '',
                        landlord_name: '',
                        landlord_phone: ''
                    },
                    {
                        city: '',
                        province: '',
                        postal_code: '',
                        duration_at_address: '',
                        landlord_name: '',
                        landlord_phone: ''
                    }
                ],
                applicant1_employer_name: ''
            }
        };
    },
    methods: {
        log() {
            console.log('Transition event triggered!');
        },
        addDependant() {
            this.dependants.push({});
        },
        nextStep() {
            this.currentStep++; // Increment current step when Next is clicked
        },
        previousStep() {
            this.currentStep--; // Decrement current step when Back is clicked
        },
        async submitForm() {
            console.log('Application Form:', this.form);
            this.generatePDF(); // Call the PDF generation method
            await this.sendEmail();
        },
        generatePDF() {
            const doc = new jsPDF({ orientation: "portrait", unit: "in", format: "letter" });
            // Title
            const applicantName = this.form.applicant1 ? this.form.applicant1.name : 'Application Form';
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
            // Optional: Add more text, etc....
            const fileName = applicantName.replace(/ /g, ' ') + ' Application Form.pdf'; // replace spaces with underscores
            const pdfData = doc.output('blob'); // Generate PDF blob
            const pdfUrl = URL.createObjectURL(pdfData); // Create URL for the blob
            this.pdfData = pdfUrl; // Set the PDF URL to the pdfData property

            // Attach the generated PDF to the #form element
            const formElement = document.querySelector('#form');
            const linkElement = document.createElement('a');
            linkElement.href = pdfUrl;
            linkElement.download = fileName;
            linkElement.textContent = 'Download PDF';
            formElement.appendChild(linkElement);
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
                    fullKey = fullKey.replace('applicant1.', 'Applicant 1: ');
                    fullKey = fullKey.replace('applicant2.', 'Applicant 2: ');
                    fullKey = fullKey.replace('previous_addresses[0].', 'Previous Addresses (Applicant 1): ');
                    fullKey = fullKey.replace('previous_addresses[1].', 'Previous Addresses (Applicant 2): ');

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

            await emailjs
                .sendForm(serviceID, templateID, "#form", "NxLLnhlEW3KDj2zPO")
                .then(
                    () => {
                        this.pdfData = "";
                        console.log('sent email')
                    },
                    (err) => {
                        alert(JSON.stringify(err));
                    }

                );
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
</style>

