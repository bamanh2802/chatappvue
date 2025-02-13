<script setup lang="ts">
import ChatHeader from './ChatHeader.vue';
import ChatInput from './ChatInput.vue';
import ChatMessage from './ChatMessage.vue';

const props = defineProps({
    toggleChatProfile: Function
})


</script>

<template>
    <div class="w-full h-full flex flex-col items-center">
        <ChatHeader :open-chat-information="toggleChatProfile"/>
        <ChatMessage/>
        <ChatInput />
    </div>

</template>