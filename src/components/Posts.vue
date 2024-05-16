<script>
export default {
  name: "post-s"
}
</script>

<template>
  <div class="w-full max-md:mt-10 max-md:max-w-full center">
    <div class="flex gap-5 max-md:flex-col max-md:gap-0">
      <div class="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
        <div
            class="flex flex-col grow px-5 mt-20 font-semibold max-md:mt-10 max-md:max-w-full"
        >
          <div
              class="gap-2.5 items-center self-start text-3xl text-zinc-800">
            <div class="grow self-stretch my-auto">Nguyen Minh Thong</div>
            <p class="text-lg font-normal">Programing fullstack-Sai Gon University</p>
          </div>

          <h1 class="text-lg bold mt-10">Work</h1>
          <div class="border-b my-4"></div>
          <div
              class="mt-0 text-lg leading-9 text-justify text-neutral-500 max-md:mt-10 max-md:max-w-full">
            <span class="text-neutral-500">
             Hello, my name is Nguyen Minh Thong. I grew up living, studying and working in Ho Chi Minh City. Up to now,
            I am a 4th year student at Saigon University,
            department of information technology, majoring in software engineering.
            During my time and study, I worked on software projects on e-commerce Web services,
            image recognition and processing, and multi-platform applications connected to the Microservice API Gateway model.
            Iknowledgeable about
          </span
          ><span class="font-medium text-neutral-500"
          >JavaScipt, Trypescript, React.js, Next.js, Redux, CSS/SCSS,</span
          ><span class="text-neutral-500">
              and other CSS frameworks. I am comitted to writing clean, scalable
              and re-usable code.</span
          >
          </div>
        </div>
      </div>

      <div class="flex flex-col ml-5 w-[8%] h-[8%] max-md:ml-0 max-md:w-96 mt-10 rounded-full">
        <img
            loading="lazy"
            src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/329043802_843217480080042_6425159173909211888_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xxU7usgcqrYQ7kNvgFcaEai&_nc_ht=scontent.fsgn8-4.fna&oh=00_AYA7u_ZW0oKslzYpKqzaMsDsXNoat5PhJ30ZrgfzX6ZQnA&oe=664ADAAE"
            class="grow w-full aspect-[1.04] max-md:mt-10 max-md:max-w-full circle-icon"
            alt="icon"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.circle-icon {
  border-radius: 50%;
}

</style>
