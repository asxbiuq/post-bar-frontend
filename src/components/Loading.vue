<script lang="ts" setup>
// 父组件传来的Props值为只读,无法更改
const { loadingState } = $(useLoading())
// interface Props {
//   text?: string
//   confirmBtnText?: string
//   cancelBtnText?: string
//   isModelOpen?: Boolean
// }
// const {
//   text = '',
//   confirmBtnText = '确定',
//   cancelBtnText = '取消',
//   isModelOpen = false,
// } = defineProps<Props>()

// const emit = defineEmits(['confirm', 'cancel'])

// const confirm = () => {
//   emit('confirm')
//   console.log('emit(confirm)')
// }
// // 取消
// const cancel = () => {
//   emit('cancel')
//   console.log('emit(cancel)')
// }
// watch(loadingState,()=>{
//   console.log(loadingState.isLoading)
// })
</script>
<template>
  <teleport to="body">
    <div v-if="loadingState.isLoading">
      <!-- 最外面的div起到遮罩作用 -->
      <div
        class="fixed top-[7%] left-[0%] flex justify-center items-center py-[50vh] px-[50vw] overflow-visible"
      >
        <div class="loadingio-spinner-bars-544xk61qn0j absolute top-[20vh]">
          <div class="ldio-1ihc0eb0wqs">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <!-- <div class="btn-danger">取消</div> -->
      </div>
    </div>
  </teleport>
</template>

<style scoped type="text/css">
@keyframes ldio-1ihc0eb0wqs {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}
.ldio-1ihc0eb0wqs {
  background: rgba(24, 22, 22, 0.227);
}
.ldio-1ihc0eb0wqs div {
  position: absolute;
  width: 20px;
  height: 80px;
  top: 60px;
  animation: ldio-1ihc0eb0wqs 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}

.ldio-1ihc0eb0wqs div:nth-child(1) {
  transform: translate(30px, 0);
  background: #93dbe9;
  animation-delay: -0.6s;
}

.ldio-1ihc0eb0wqs div:nth-child(2) {
  transform: translate(70px, 0);
  background: #689cc5;
  animation-delay: -0.4s;
}

.ldio-1ihc0eb0wqs div:nth-child(3) {
  transform: translate(110px, 0);
  background: #5e6fa3;
  animation-delay: -0.2s;
}

.ldio-1ihc0eb0wqs div:nth-child(4) {
  transform: translate(150px, 0);
  background: #3b4368;
  animation-delay: -1s;
}

.loadingio-spinner-bars-544xk61qn0j {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #0be3e300;
  box-shadow: 0 0 0 999px rgba(24, 22, 22, 0.227);
}

.ldio-1ihc0eb0wqs {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
  /* see note above */
}

.ldio-1ihc0eb0wqs div {
  box-sizing: content-box;
}

/* generated by https://loading.io/ */
</style>
