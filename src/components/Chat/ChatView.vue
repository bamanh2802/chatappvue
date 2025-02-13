<script setup lang="ts">
import ChatSidebar from './ChatSidebar.vue';
import ChatWindow from './ChatWindow.vue';
import ChatProfile from './ChatProfile.vue';
import { ref } from 'vue';

const isOpenChatProfile = ref(true)

function toggleChatProfile () {
    isOpenChatProfile.value = !isOpenChatProfile.value
}

</script>

<template>
    <div class="w-[calc(100%-8px)] h-[calc(100vh-16px)] border-1 mr-2 border-gray-300 my-2 rounded-2xl flex">
        <ChatSidebar />
        <ChatWindow :toggle-chat-profile="toggleChatProfile"/>
        <ChatProfile :isOpen="isOpenChatProfile"/>
    </div>
</template>