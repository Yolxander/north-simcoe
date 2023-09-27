<template>
  <form
          class="contact-us max-w-screen-xl p-10 md:p-32 mx-auto flex flex-col flex-wrap md:flex-nowrap md:items-center md:space-x-8 md:gap-5"
  >


    <div class="w-full relative">
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


          <!-- Applicant #1--------------------------------------------->
          <p class="mb-4 text-[20px] text-gray-700">
              Dependants:
          </p>
          <!-- Dependants Section -->
          <div class="relative z-0 w-full mb-4">
              <p class="mb-2 text-sm text-gray-700 font-medium">Dependants</p>

              <!-- This div will be repeated for each dependant -->
              <div v-for="(dependant, index) in dependants" :key="index" class="mb-4 group">

                  <!-- Dependant Name Field -->
                  <div class="relative z-0 w-1/2 mb-4 inline-block pr-2">
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
                  <div class="relative z-0 w-1/2 mb-4 inline-block pl-2">
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
              </div>

              <!-- Button to add another dependant -->
              <button @click.prevent="addDependant" class="text-teal hover:underline">Add</button>

          </div>

      </div>
      <div
        class="bg-teal w-[300px] h-[250px] absolute top-[-20px] right-[-20px] md:top-[-40px] md:right-[-40px] z-negative"
      ></div>

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
        };
    },
    methods: {
        addDependant() {
            this.dependants.push({});
        }
    }
};
</script>

<style></style>
