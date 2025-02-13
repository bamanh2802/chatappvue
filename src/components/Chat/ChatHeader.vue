<script setup lang="ts">
import { Avatar, Button } from 'primevue';

const props = defineProps({
    openChatInformation: Function
})

</script>

<template>
    <div class="w-full flex items-center border-b-1  border-gray-300 p-3">
        <div>
            <Avatar label="M"  size="large" shape="circle" />
        </div>
        <div class="w-full ml-4">
            <h2 class="text-xl font-medium ">Name</h2>
            <p class="text-md w-full truncate text-gray-700">Member</p>
        </div>
        <div>
            <Button @click="openChatInformation" variant="text" icon="pi pi-info-circle"  rounded aria-label="Filter">
            </Button>
        </div>
    </div>
</template>