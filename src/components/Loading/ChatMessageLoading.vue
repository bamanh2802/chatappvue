<script setup lang="ts">
    import { ref } from 'vue';
    import { Avatar, Skeleton } from 'primevue';
    const props = defineProps({
        messsage: String,
        avatar: String
    })

 

</script>

<template>
    <div class="w-full">
        <div class="w-full group mt-4 flex justify-start">
            <div>
                <Skeleton shape="circle" size="2.5rem" class="mr-2"></Skeleton>
            </div>
            <div class="w-[50%] max-w-96 bg-zinc-200 ml-3 p-2 px-3 rounded-2xl text-wrap text-gray-900">
                <Skeleton class="text-md w-full truncate text-gray-700"></Skeleton>
                <Skeleton class="text-md w-[50%] truncate text-gray-700"></Skeleton>
            </div>
        </div>
        <div class="w-full group mt-4 flex justify-end">
            <div class="w-[50%] max-w-96 bg-zinc-200 ml-3 p-2 px-3 rounded-2xl text-wrap text-gray-900">
                <Skeleton class="text-md w-full truncate text-gray-700"></Skeleton>
                <Skeleton class="text-md w-[50%] truncate text-gray-700"></Skeleton>
            </div>
            <div>
                <Skeleton shape="circle" size="2.5rem" class="mr-2"></Skeleton>
            </div>
        </div>
        <div class="w-full group mt-4 flex justify-start">
            <div>
                <Skeleton shape="circle" size="2.5rem" class="mr-2"></Skeleton>
            </div>
            <div class="w-[50%] max-w-96 bg-zinc-200 ml-3 p-2 px-3 rounded-2xl text-wrap text-gray-900">
                <Skeleton class="text-md w-full truncate text-gray-700"></Skeleton>
                <Skeleton class="text-md w-[50%] truncate text-gray-700"></Skeleton>
            </div>
        </div>
        <div class="w-full group mt-4 flex justify-end">
            <div class="w-[50%] max-w-96 bg-zinc-200 ml-3 p-2 px-3 rounded-2xl text-wrap text-gray-900">
                <Skeleton class="text-md w-full truncate text-gray-700"></Skeleton>
                <Skeleton class="text-md w-[50%] truncate text-gray-700"></Skeleton>
            </div>
            <div>
                <Skeleton shape="circle" size="2.5rem" class="mr-2"></Skeleton>
            </div>
        </div>
    </div>
</template>