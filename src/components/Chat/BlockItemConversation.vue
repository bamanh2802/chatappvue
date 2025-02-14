<script setup lang="ts">
import { Avatar, Chip } from 'primevue';
import { Message } from '../../types/types';
import { computed, PropType } from 'vue';
import { useChatStore } from '../../store/useChat';

const useChat = useChatStore()

const activeConversationId = computed(() => JSON.parse(JSON.stringify(useChat.activeConversationId)))

const props = defineProps({
    conversationId: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    message: {
        type: Object as PropType<Message>, 
        require: true
    },
    isSeen: {
        type: Boolean,
        require: true
    },
    time: {
        type: String,
        require: true
    },
    activeId: {
        type: String, 
        require: true
    }
})


function timeAgo(dateString: string) {
  const now = new Date();
  const date = new Date(dateString);

  // Tính sự khác biệt giữa thời gian hiện tại và thời gian trong dateString
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) {
    return days === 1 ? '1d' : `${days}d`;
  } else if (hours > 0) {
    return hours === 1 ? '1h' : `${hours}h`;
  } else if (minutes > 0) {
    return minutes === 1 ? '1m' : `${minutes}m`;
  } else {
    return seconds === 1 ? '1s' : `${seconds}s`;
  }
}



</script>

<template>
    <div :class="{'bg-gray-200 rounded-none' : activeConversationId === props.conversationId}" class="rounded-2xl transition-colors cursor-pointer hover:bg-gray-200 w-full h-[80px] flex items-center px-4 py-3">
        <div class="mr-3 w-fit h-fit">
            <Avatar :label="props.avatar"  size="large" shape="circle" />
        </div>
        <div class="w-full h-fit flex flex-col gap-1 overflow-hidden">
            <h2 class="text-xl font-medium truncate">{{ props.name }}</h2>
            <p class="text-md w-full truncate text-gray-700">{{ props.message?.content }}</p>
        </div>
        <div class="w-7 flex flex-col items-end justify-between h-full">
            <span v-if="!props.isSeen" class="bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">1</span>
            <span class="text-gray-700 text-sm">{{ timeAgo(props.time as string) }}</span>
        </div>
    </div>
</template>