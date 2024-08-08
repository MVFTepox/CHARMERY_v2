<template>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-col space-y-2 w-full md:w-3/5 lg:w-1/2">
      <textarea
        v-model="newComment"
        placeholder="Escribe un comentario..."
        class="p-3 border-4 border-[#eddaab] rounded-bl-lg text-lg"
      ></textarea>
      <button @click="addComment" class="text-2xl p-2 btn bg-[#B66141] rounded-3xl text-white">
        Agregar un Comentario!!
      </button>
    </div>
    <div class="mx-auto">
      <transition-group
        name="fade"
        tag="div"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1"
      >
        <ReviewCard
          v-for="(comment, index) in displayedComments"
          :key="index"
          :reviewContent="comment.content"
          :reviewDate="comment.date"
          username="User"
        />
      </transition-group>
      <div v-if="comments.length > 3" class="flex justify-center mt-4">
        <button @click="toggleShowMore" class="p-2 bg-blue-500 text-white rounded">
          {{ showMore ? 'Show Less' : 'Show More' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import ReviewCard from './ReviewCard.vue'

export default defineComponent({
  name: 'CommentSection',
  components: {
    ReviewCard
  },
  setup() {
    const newComment = ref('')
    const comments = ref<{ content: string; date: string }[]>([])
    const showMore = ref(false)

    const addComment = () => {
      if (newComment.value) {
        comments.value.push({
          content: newComment.value,
          date: new Date().toLocaleDateString()
        })
        newComment.value = ''
      }
    }

    const toggleShowMore = () => {
      showMore.value = !showMore.value
    }

    const displayedComments = computed(() =>
      showMore.value ? comments.value : comments.value.slice(0, 3)
    )

    return {
      newComment,
      comments,
      showMore,
      displayedComments,
      addComment,
      toggleShowMore
    }
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
