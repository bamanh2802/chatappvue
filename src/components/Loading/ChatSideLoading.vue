<script setup lang="ts">
import Skeleton from 'primevue/skeleton';
</script>

<template>

<div class="rounded-2xl transition-colors cursor-pointer w-full h-[80px] flex items-center px-4 py-3">
        <div class="mr-3 w-fit h-fit">
            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
        </div>
        <div class="w-full h-fit flex flex-col gap-1 overflow-hidden">
            <Skeleton  class="text-xl font-medium truncate"></Skeleton >
            <Skeleton class="text-md w-full truncate text-gray-700"></Skeleton>
        </div>
        <div class="w-7 flex flex-col items-end justify-between h-full">
        </div>
    </div>

</template>