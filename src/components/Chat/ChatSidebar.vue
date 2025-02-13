<script setup lang="ts">
import BlockItemConversation from './BlockItemConversation.vue';
import SearchUser from '../Global/SearchUser.vue';
import { Button } from 'primevue';
import { PlusIcon } from '@heroicons/vue/24/outline';
import {InputText} from 'primevue';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import { ref, onMounted } from 'vue';
import ChatSideLoading from '../Loading/ChatSideLoading.vue';

const Loadings = [1, 2, 3, 4, 5, 6]

const conversations = [
  {
    id: '1',
    avatar: 'A',
    name: 'Alice',
    message: 'Hi, how are you?',
    count: 2,
    time: '12:40',
  },
  {
    id: '2',
    avatar: 'B',
    name: 'Bob',
    message: 'Let\'s meet tomorrow!',
    count: 5,
    time: '13:05',
  },
  {
    id: '3',
    avatar: 'C',
    name: 'Charlie',
    message: 'I have a new project for us I have a new project for us.',
    count: 0,
    time: '14:30',
  },
  {
    id: '4',
    avatar: 'D',
    name: 'David',
    message: 'Check out the latest updates!',
    count: 3,
    time: '15:00',
  },
];

const isOpenSearch = ref<boolean>(false)
function toggleOpenSearch () {
  isOpenSearch.value = !isOpenSearch.value
}

const isLoadingChat = ref<boolean>(false)







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
                <div v-for="conversation in conversations" :key="conversation.name">
                  <BlockItemConversation 
                      :avatar="conversation.avatar"
                      :message="conversation.message"
                      :name="conversation.name"
                      :count="conversation.count"
                      :time="conversation.time"
                      :activeId="conversation.id"
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