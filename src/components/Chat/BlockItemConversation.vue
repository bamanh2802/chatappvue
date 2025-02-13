<script setup lang="ts">
import { Avatar, Chip } from 'primevue';
const props = defineProps({
    avatar: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    count: {
        type: Number,
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

</script>

<template>
    <div :class="{'bg-gray-200 rounded-none' : activeId === '1'}" class="rounded-2xl transition-colors cursor-pointer hover:bg-gray-200 w-full h-[80px] flex items-center px-4 py-3">
        <div class="mr-3 w-fit h-fit">
            <Avatar :label="props.avatar"  size="large" shape="circle" />
        </div>
        <div class="w-full h-fit flex flex-col gap-1 overflow-hidden">
            <h2 class="text-xl font-medium truncate">{{ props.name }}</h2>
            <p class="text-md w-full truncate text-gray-700">{{ props.message }}</p>
        </div>
        <div class="w-7 flex flex-col items-end justify-between h-full">
            <span class="text-gray-700 text-sm">{{ props.time }}</span>
            <span v-if="props.count !== 0" class="bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{{ props.count }}</span>
        </div>
    </div>
</template>