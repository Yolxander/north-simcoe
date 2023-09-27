<template>
  <form
          class="contact-us max-w-screen-xl p-10 md:p-32 mx-auto flex flex-col flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5"
  >


    <div v-if="currentStep === 1" class="w-full relative">
      <div
        class="flex flex-col mb-2 z-10 relative bg-white rounded-lg shadow-md p-4 border-4 border-solid border-teal"
      >
          <!-- Address Field -->
          <div class="relative z-0 w-full mb-4 group">
              <input
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

          <!-- Note about First and Last Month's Rent -->
          <p class="mb-4 text-sm text-gray-700">
              *FIRST AND LAST MONTHS RENT REQUIRED BEFORE COMMENCEMENT OF TENANCY*
          </p>

          <!-- Initial Monthly Rent Field -->
          <div class="relative z-0 w-full mb-4 group">
              <input
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
                      type="text"
                      name="name"
                      id="name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      placeholder=" "
                      required
              />
              <label
                      for="name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Name</label>
          </div>

          <!-- Current Address Field -->
          <div class="relative z-0 w-full mb-4 group">
              <input
                      type="text"
                      name="current_address"
                      id="current_address"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      placeholder=" "
                      required
              />
              <label
                      for="current_address"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Current address</label>
          </div>

          <!-- Home Phone Field -->
          <div class="relative z-0 w-full mb-4 group">
              <input
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
                      type="tel"
                      name="cell_phone"
                      id="cell_phone"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      placeholder=" "
                      required
              />
              <label
                      for="cell_phone"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Cell phone</label>
          </div>

          <!-- Email Address Field -->
          <div class="relative z-0 w-full mb-4 group">
              <input
                      type="email"
                      name="email_address"
                      id="email_address"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      placeholder=" "
                      required
              />
              <label
                      for="email_address"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Email address</label>
          </div>

          <!-- Date of Birth Field -->
          <div class="relative z-0 w-full mb-4 group">
              <input
                      type="date"
                      name="date_of_birth"
                      id="date_of_birth"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      required
              />
              <label
                      for="date_of_birth"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Date of birth</label>
          </div>

          <!-- S.I.N. Field -->
          <div class="relative z-0 w-full mb-4 group">
              <input
                      type="text"
                      name="sin"
                      id="sin"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      placeholder=" "
                      required
              />
              <label
                      for="sin"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >S.I.N.</label>
          </div>

          <!-- Applicant #1--------------------------------------------->
          <p class="mb-4 text-[20px] text-gray-700">
              Applicant #2:
          </p>
          <!-- Name Field -->
          <div class="relative z-0 w-full mb-4 group">
              <input
                  type="text"
                  name="name"
                  id="name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                  placeholder=" "
                  required
              />
              <label
                  for="name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Name</label>
          </div>

          <!-- Current Address Field -->
          <div class="relative z-0 w-full mb-4 group">
              <input
                  type="text"
                  name="current_address"
                  id="current_address"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                  placeholder=" "
                  required
              />
              <label
                  for="current_address"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Current address</label>
          </div>

          <!-- Home Phone Field -->
          <div class="relative z-0 w-full mb-4 group">
              <input
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
                  type="tel"
                  name="cell_phone"
                  id="cell_phone"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                  placeholder=" "
                  required
              />
              <label
                  for="cell_phone"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Cell phone</label>
          </div>

          <!-- Email Address Field -->
          <div class="relative z-0 w-full mb-4 group">
              <input
                  type="email"
                  name="email_address"
                  id="email_address"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                  placeholder=" "
                  required
              />
              <label
                  for="email_address"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Email address</label>
          </div>

          <!-- Date of Birth Field -->
          <div class="relative z-0 w-full mb-4 group">
              <input
                  type="date"
                  name="date_of_birth"
                  id="date_of_birth"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                  required
              />
              <label
                  for="date_of_birth"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Date of birth</label>
          </div>

          <!-- S.I.N. Field -->
          <div class="relative z-0 w-full mb-4 group">
              <input
                  type="text"
                  name="sin"
                  id="sin"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                  placeholder=" "
                  required
              />
              <label
                  for="sin"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >S.I.N.</label>
          </div>


          <!-- Dependants Section ------------------------------------>
          <div class="relative z-0 w-full mb-4">
              <p class="mb-2 text-sm text-gray-700 font-medium">Dependants</p>

              <!-- This div will be repeated for each dependant -->
              <div v-for="(dependant, index) in dependants" :key="index" class="mb-4 group flex items-center">

                  <!-- Dependant Name Field -->
                  <div class="relative z-0 w-1/2 mb-4 inline-block pr-2 flex-grow">
                      <input
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
                  v-model="selectedPetOption"
                  name="have_pet"
                  id="have_pet"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                  required
              >
                  <option value="" disabled selected>Select an option</option>
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

      <div v-if="currentStep === 2" class="w-full relative">
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
                      type="text"
                      name="postal_code"
                      id="postal_code"
                      pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"
                      title="Please enter a valid Canadian postal code (e.g., A1A 1A1)"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      placeholder=" "
                      required
                  />
                  <label
                      for="postal_code"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Postal Code</label>
              </div>

              <!-- How Long at This Address Field -->
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
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >How long at this address</label>
              </div>

              <!-- Landlord/Lessor Name Field -->
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
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Landlord/Lessor Name</label>
              </div>

              <!-- Landlord/Lessor Phone # Field -->
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
              <!-- Include the Postal Code Field code from the previous response -->

              <!-- How Long at This Address Field -->
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
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >How long at this address</label>
              </div>

              <!-- Landlord/Lessor Name Field -->
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
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Landlord/Lessor Name</label>
              </div>

              <!-- Landlord/Lessor Phone # Field -->
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
              <!-- Include the Postal Code Field code from the previous response -->

              <!-- How Long at This Address Field -->
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
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >How long at this address</label>
              </div>

              <!-- Landlord/Lessor Name Field -->
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
                      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Landlord/Lessor Name</label>
              </div>

              <!-- Landlord/Lessor Phone # Field -->
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
                      type="text"
                      name="employer_name"
                      id="employer_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-teal appearance-none focus:outline-none focus:ring-0 focus:border-teal peer"
                      placeholder=" "
                      required
                  />
                  <label
                      for="employer_name"
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
  </form>
</template>

<script>
export default {
  name: "FormsList",
    data() {
        return {
            dependants: [{}], // Start with one empty dependant
            selectedPetOption: '',
            currentStep: 1,
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
        }
    }
};
</script>

<style></style>
