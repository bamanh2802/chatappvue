<script setup lang="ts">
import BlockItemConversation from './BlockItemConversation.vue';
import SearchUser from '../Global/SearchUser.vue';
import { Button } from 'primevue';
import { PlusIcon } from '@heroicons/vue/24/outline';
import {InputText} from 'primevue';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import { ref, onMounted, computed } from 'vue';
import ChatSideLoading from '../Loading/ChatSideLoading.vue';
import { store } from '../../store/store';
const Loadings = [1, 2, 3, 4, 5, 6]
import { useChatStore } from '../../store/useChat';
import { Conversation } from '../../types/types';
import { watch } from 'fs';

const useChat = useChatStore()
const conversations = computed(() => JSON.parse(JSON.stringify(useChat.conversations)))

const avatar = ref<string>('A')


const isOpenSearch = ref<boolean>(false)
function toggleOpenSearch () {
  isOpenSearch.value = !isOpenSearch.value
}

const isLoadingChat = ref<boolean>(false)


onMounted(async () => {
  await useChat.fetchConversations();
});

function handleSelectConversation (conversationId: string) {
  useChat.setActiveConversation(conversationId)
}



</script>

<template>

    <div class="max-w-96 overflow-auto w-[30%] h-full border-r-1 border-gray-200">
        <div class="w-full flex items-center justify-between px-3 py-4">
            <h1 class="text-3xl text-gray-700">Chats</h1>
            <Button 
              @click="toggleOpenSearch"
            severity="secondary">
                <PlusIcon  class="w-5 h-5" />
            </Button>
        </div>
        <div class="w-full px-4">
            <IconField class="w-full">
                <InputIcon class="pi pi-search"/>
                <InputText size="small" placeholder="Search" fluid/>
            </IconField>
        </div>
        <div  class="mt-4 overflow-auto">
         
            <div class="w-full">
              <div v-if="!isLoadingChat">
                <div @click="handleSelectConversation(conversation.conversationId)" v-for="conversation in conversations" :key="conversation.conversationId">
                  <BlockItemConversation 
                      :avatar="avatar"
                      :message="conversation.lastMessage"
                      :name="avatar"
                      :isSeen="conversation.isSeen"
                      :time="conversation.updatedAt"
                      :activeId="conversation.conversationId"
                      :conversation-id="conversation.conversationId"
                  />
              </div>
              </div>
              <div v-else>
                <div v-for="loading in Loadings" :key="loading">
             
                <ChatSideLoading />
            </div>
              </div>
            </div>

        </div>
        <SearchUser 
          :handleOpen="toggleOpenSearch"
          :isOpen="isOpenSearch"
        />
        
    </div>

</template>