<script>
export default {
  name: "my-profile"
}
</script>

<template>
  <div class="w-full max-md:mt-10 max-md:max-w-full center">
    <div class="max-md:flex-col max-md:gap-0">
      <div class="w-[56%] max-md:ml-0 max-md:w-full">
        <div class="grow px-5 mt-20 font-semibold max-md:mt-10 max-md:max-w-full">
          <div class="gap-2.5 items-center self-start text-3xl text-zinc-800">
            <div class="grow self-stretch my-auto">Nguyen Minh Thong</div>
            <p class="text-lg font-normal">Lập trình viên Full-stack - Đại Học Sài Gòn</p>
          </div>
          <h1 class="text-lg bold mt-10">Công việc</h1>
          <div class="border-b my-4"></div>
          <div class="mt-0 text-md leading-9 text-justify font-normal text-black max-md:mt-10 max-md:max-w-full">
          <span class="text-black">
            Xin chào, tôi tên là Nguyễn Minh Thông. Tôi lớn lên sống, học tập và làm việc tại Thành phố Hồ Chí Minh.
            Đến nay, tôi là sinh viên năm thứ 4 trường Đại học Sài Gòn, khoa Công nghệ thông tin, chuyên ngành Công nghệ phần mềm.
            Trong thời gian và học tập, tôi đã làm việc trên các dự án phần mềm về dịch vụ Web thương mại điện tử,
            nhận dạng và xử lý hình ảnh cũng như các ứng dụng đa nền tảng được kết nối với mô hình Microservice API Gateway.
          </span>
            <p>Tôi đã làm việc với những ngôn ngữ lập trình sau</p>
            <span
                class="font-medium text-neutral-500">JavaScript, TypeScript, React.js, Next.js, Redux, CSS/SCSS,</span>
            <span class="text-neutral-500">and other CSS frameworks. Tôi cam kết viết mã sạch, có thể mở rộng và có thể tái sử dụng.</span>
          </div>
          <!-- Process content   -->
          <h1 class="text-lg bold mt-10">Quá trình</h1>
          <div class="border-b my-4"></div>

          <div class="mt-3 text-md leading-9">
            <ul class="list-item">
              <li>2018
                <span class="font-normal">
              Tôi đã làm producer export được những con beat thể loại R&B, Ballad cho âm nhạc hiện đại."
              </span>
              </li>
              <li>2019 "
                <span class="font-normal">
                Bắt tay vào học lập trình C cơ bản khi chưa vào đại học"
              </span>
              </li>
              <li>2020 "
                <span class="font-normal">
                Thi tốt nghiệp vào trường Đại Học Sài Gòn"
              </span>
              </li>
              <li>2021 "
                <span class="font-normal">
                Ở đầu năm nhất được học những kiến thức cơ bản về lập trình C cơ bản, thuật toán, hệ điều hành vân vân và mây mây."
              </span>
              </li>
              <li>2022 "
                <span class="font-normal">
                Tham gia cuộc thi Hackathon của TIKI tổ chức. Đạt được giải thưởng Hackathon ở Top 30"
              </span>
              </li>
              <li>2023 "
                <span class="font-normal">
                Dự án website thương mại điện tử về cửa hàng bán quần áo cùng với team tôi:
                <p>Tran Anh Tuan - leader</p>
                <p>Hoang Dinh Thinh - Devops</p>
                <p>Nguyen Minh Thong - full-stack</p>
                <p>Nguyen Quang Tien - front-end"</p>
              </span>
              </li>
              <li>2024 "
                <span class="font-normal">
                Hiện tại..."
              </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.circle-icon {
  border-radius: 50%;
}

</style>
