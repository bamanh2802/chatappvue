<script setup lang="ts">
import ChatHeader from './ChatHeader.vue';
import ChatInput from './ChatInput.vue';
import ChatMessage from './ChatMessage.vue';

import { useChatStore } from '../../store/useChat';
import { computed, watch } from 'vue';

const useChat = useChatStore()
const conversation = computed(() => JSON.parse(JSON.stringify(useChat.conversations)))
const activeConversationId = computed(() => JSON.parse(JSON.stringify(useChat.activeConversationId)))

const message = computed(() => JSON.parse(JSON.stringify(useChat.messages) ))
 
const props = defineProps({
    toggleChatProfile: Function
})


</script>

<template>
    <div class="w-full h-full flex flex-col items-center">
        <ChatHeader 
        :open-chat-information="toggleChatProfile"/>
        <ChatMessage 
            :messages="message[activeConversationId]"
        />
        <ChatInput />
    </div>

</template>