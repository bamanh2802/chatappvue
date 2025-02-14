<script setup lang="ts">
import { ref, PropType, watch } from 'vue';
import OwnerMessage from './OwnerMessage.vue';
import UserMessage from './UserMessage.vue';
import ChatMessageLoading from '../Loading/ChatMessageLoading.vue';

import { Message } from '../../types/types';

const props = defineProps({
  messages: {
    type: Array as PropType<Message[]>
  }
})



</script>

<template>
  <div class="w-full h-full overflow-auto px-4 py-3 flex flex-col space-y-4">
    <div v-for="(msg, index) in props.messages" :key="index" class=" ">
      <div v-if="'user' === 'user'">
        <UserMessage :messsage="msg.content" :avatar="msg.sender" />
      </div>
      <div v-else>
        <OwnerMessage :messsage="msg.content" :avatar="msg.recipient" />
      </div>
    </div>
    <!-- <ChatMessageLoading /> -->
  </div>
</template>
