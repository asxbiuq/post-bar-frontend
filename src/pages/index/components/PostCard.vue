<script lang="ts" setup>
// data
interface Props {
  creatorId: string
  title: string
  author: string
  description: string
  imgUrl: string
  btnName: string
  isFav: boolean
}
const {
  creatorId = '创作者',
  title = '标题',
  author = '作者',
  description = '简介',
  imgUrl = 'https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg',
  btnName = '阅读',
  isFav = false,
} = defineProps<Props>()

const state = $(useSession())

// event
const emits = defineEmits(['clickBtn', 'clickStar', 'clickImage'])

// function
const handleClickBtn = () => {
  emits('clickBtn')
}
const handleClickStar = () => {
  emits('clickStar')
}
const handleClickImage = () => {
  emits('clickImage')
}
// console.log(state.userId,creatorId )
</script>

<template>
  <div class="bg-opacity-[20%]">
    <div class="img-shell" @click="handleClickImage">
      <img :src="imgUrl" alt="image" />
    </div>
    <main class="flex flex-col gap-5">
      <div class="flex justify-between">
        <div class="book-title">标题: {{ title }}</div>
        <div class="icon cursor-pointer" @click="handleClickStar">
          <div v-if="isFav">
            <i-emojione:star style="font-size: 2em" />
          </div>
          <div v-else>
            <i-codicon:star-full style="font-size: 2em" />
          </div>
        </div>
      </div>
      <div class="book-author">发帖人: {{ author }}</div>
      <!-- <div class="p-rating">
        <input
          type="radio"
          name="rating-2"
          class="p-mask p-mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          class="p-mask p-mask-star-2 bg-orange-400"
          checked
        />
        <input
          type="radio"
          name="rating-2"
          class="p-mask p-mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          class="p-mask p-mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          class="p-mask p-mask-star-2 bg-orange-400"
        />
      </div> -->
      <div class="book-description h-[5rem]">内容: {{ description }}</div>
      <div v-if="state.userId === creatorId">
        <div class="btn-danger" @click="handleClickBtn">{{ btnName }}</div>
      </div>
    </main>
  </div>
</template>
<style scoped>

</style>
