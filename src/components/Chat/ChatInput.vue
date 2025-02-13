<script setup lang="ts">
import { Button, InputText } from 'primevue';
import { FaceSmileIcon, PaperAirplaneIcon } from '@heroicons/vue/24/outline';

</script>

<template>
    <div class="w-full flex items-center border-t-1 border-gray-300 p-4">
        <Button variant="text" severity="secondary" rounded>
            <FaceSmileIcon class="w-5 h-5" />
        </Button>
        <div class="w-full mx-2">
            <InputText variant="filled" size="small" fluid type="text" placeholder="Type message"/>
        </div>
        <Button class="" severity="secondary">
            <PaperAirplaneIcon class="w-5 h-5" />
        </Button>
    </div>
</template>