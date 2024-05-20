<script>
export default {
  name: "Work-task",
  data() {
    return {
      faqs: [
        {
          number: '#1.',
          image: 'https://bizflyportal.mediacdn.vn/thumb_wm/1000,100/bizflyportal/images/ent16194241809555.png',
          name: 'Hotel Management Window Form Application - MVC',
          year: '03/2023',
          description: 'Ứng dụng quản lý khách sạn được viết bằng ngôn ngữ C# với  Model View Control Architecture, sử dụng Entity Framework' +
              '. Chức năng đặt phòng đơn, đặt phòng theo đoàn, đăng nhập, xuất dữ liệu excel, thanh toán.',
          link: 'https://github.com/Kaicity/HOTELMANAGESYSTEM.git',
          isOpen: false
        },
      ]
    };
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen;
    }
  }
}
</script>

<template>
  <div class="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4 mt-10 ">
    <h1 class="lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold text-center">
      Works
    </h1>

    <div
        class="lg:mt-12 bg-gray-200 dark:bg-gray-800 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto">
      <div class="flex justify-between md:flex-row flex-col">
        <div class="md:mb-0 mb-8 md:text-left text-center">
          <h2 class="font-normal dark:text-white text-2xl leading-5 text-gray-800 lg:mb-2 mb-4">Các vấn đề liên
            quan</h2>
          <p class="font-normal dark:text-gray-300 text-md leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">
            Các công việc đã làm và đang thực hiện trong thời gian qua tính đến thời điểm hiện tại.
          </p>
        </div>

        <div class="flex justify-center items-center">
          <div
              class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-white md:justify-center justify-between items-center px-4 py-3 w-full">
            <input class="focus:outline-none bg-white" type="text" placeholder="Search"/>
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg1.svg" alt="search">
          </div>
        </div>
      </div>
    </div>

    <div class="lg:w-8/12 w-full mx-auto">
      <template v-for="(faq, index) in faqs" :key="index">
        <hr class="w-full lg:mt-10 md:mt-12 md:mb-8 my-8"/>
        <div class="w-full md:px-6">
          <div class="flex justify-between items-center w-full">
            <div class="flex flex-wrap">
              <img :src="faq.image" alt="image" class="object-cover rounded-lg lg:w-64"
                   style="width: 120px; height: 100px">
            </div>
            <div>
              <p class="flex justify-start items-start dark:text-white text-2xl font-bold leading-6 md:leading-4 text-gray-800">
                <span
                    class="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                  {{ faq.number }}</span>
                {{ faq.name }}
              </p>
              <p class="mt-3">{{ faq.year }}</p>
            </div>
            <button @click="toggleFaq(index)" aria-label="toggler"
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
              <img :class="{ 'rotate-180': faq.isOpen }" class="transform dark:hidden"
                   src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg" alt="toggler">
              <img :class="{ 'rotate-180': faq.isOpen }" class="transform dark:block hidden"
                   src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg" alt="toggler">
            </button>
          </div>
          <div v-show="faq.isOpen" class="mt-6 w-full">
            <p class="text-lg leading-6 text-gray-600 dark:text-gray-300 font-normal mt-2">{{ faq.description }}</p>
            <p class="text-lg leading-6 dark:text-gray-300 font-normal mt-2">
              <span>Link Project: </span><a class="text-blue-500 font-bold hover:text-blue-800"
                                            href="https://github.com/Kaicity/HOTELMANAGESYSTEM">https://github.com/Kaicity/HOTELMANAGESYSTEM</a>
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>
