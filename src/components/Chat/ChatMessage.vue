<script setup lang="ts">
import { ref } from 'vue';
import OwnerMessage from './OwnerMessage.vue';
import UserMessage from './UserMessage.vue';

const messages = ref([
  {
    type: 'user', // 'user' or 'owner'
    message: 'Hello! How are you?',
    avatar: 'U', // User avatar (you can use initials or image URLs)
  },
  {
    type: 'owner',
    message: 'I am doing great, thank you!',
    avatar: 'O', // Owner avatar (you can use initials or image URLs)
  },
  {
    type: 'user',
    message: 'What can I help you with today?',
    avatar: 'U',
  },
  {
    type: 'owner',
    message: 'I have a question about Vue.js!',
    avatar: 'O',
  },
  {
    type: 'user', // 'user' or 'owner'
    message: 'Hello! How are you?',
    avatar: 'U', // User avatar (you can use initials or image URLs)
  },
  {
    type: 'owner',
    message: 'I am doing great, thank you!',
    avatar: 'O', // Owner avatar (you can use initials or image URLs)
  },
  {
    type: 'user',
    message: 'What can I help you with today?',
    avatar: 'U',
  },
  {
    type: 'owner',
    message: 'I have a question about Vue.js!',
    avatar: 'O',
  },
  {
    type: 'user', // 'user' or 'owner'
    message: 'Hello! How are you?',
    avatar: 'U', // User avatar (you can use initials or image URLs)
  },
  {
    type: 'owner',
    message: 'I am doing great, thank you!',
    avatar: 'O', // Owner avatar (you can use initials or image URLs)
  },
  {
    type: 'user',
    message: 'What can I help you with today?',
    avatar: 'U',
  },
  {
    type: 'owner',
    message: 'I have a question about Vue.js!',
    avatar: 'O',
  },
  {
    type: 'user', // 'user' or 'owner'
    message: 'Hello! How are you?',
    avatar: 'U', // User avatar (you can use initials or image URLs)
  },
  {
    type: 'owner',
    message: 'I am doing great, thank you!',
    avatar: 'O', // Owner avatar (you can use initials or image URLs)
  },
  {
    type: 'user',
    message: 'What can I help you with today?',
    avatar: 'U',
  },
  {
    type: 'owner',
    message: 'I have a question about Vue.js!',
    avatar: 'O',
  },
  {
    type: 'user', // 'user' or 'owner'
    message: 'Hello! How are you?',
    avatar: 'U', // User avatar (you can use initials or image URLs)
  },
  {
    type: 'owner',
    message: 'I am doing great, thank you!',
    avatar: 'O', // Owner avatar (you can use initials or image URLs)
  },
  {
    type: 'user',
    message: 'What can I help you with today?',
    avatar: 'U',
  },
  {
    type: 'owner',
    message: 'I have a question about Vue.js!',
    avatar: 'O',
  },
  {
    type: 'user', // 'user' or 'owner'
    message: 'Hello! How are you?',
    avatar: 'U', // User avatar (you can use initials or image URLs)
  },
  {
    type: 'owner',
    message: 'I am doing great, thank you!',
    avatar: 'O', // Owner avatar (you can use initials or image URLs)
  },
  {
    type: 'user',
    message: 'What can I help you with today?',
    avatar: 'U',
  },
  {
    type: 'owner',
    message: 'I have a question about Vue.js!',
    avatar: 'O',
  },

]);
</script>

<template>
  <div class="w-full overflow-auto px-4 py-3 flex flex-col space-y-4">
    <div v-for="(msg, index) in messages" :key="index" class=" ">
      <div v-if="msg.type === 'user'">
        <UserMessage :messsage="msg.message" :avatar="msg.avatar" />
      </div>
      <div v-else>
        <OwnerMessage :messsage="msg.message" :avatar="msg.avatar" />
      </div>
    </div>
  </div>
</template>
