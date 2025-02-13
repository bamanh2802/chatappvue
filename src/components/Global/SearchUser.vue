// SearchUser.vue
<script setup lang="ts">
import { ref, watch } from 'vue';
import Dialog from 'primevue/dialog';
import { InputText, Button } from 'primevue';
// import { useStore } from 'vuex';

const props = defineProps({
    isOpen: Boolean,
    handleOpen: Function
})

// const store = useStore();

// const incrementCount = () => {
//   store.commit('increment');
// };

const dialogVisible = ref<boolean>(false)

watch(() => props.isOpen, (newValue) => {
    dialogVisible.value = newValue
})

watch(dialogVisible, (newValue) => {
    if (!newValue && props.handleOpen) {
        props.handleOpen()
    }
})
</script>

<template>
    <div>
        <Dialog 
            v-model:visible="dialogVisible" 
            modal 
            header="New Chat" 
            :style="{ width: '25rem' }"
        >
        <div>
            <InputText variant="filled" size="small" fluid type="text" placeholder="Find someone"/>
        </div>

        <div class="my-3">
            <!-- <h2>Count: {{ store.state.count }}</h2> -->
        </div>

            <div class="flex justify-end gap-2">
                <Button 
                    type="button" 
                    label="Cancel" 
                    severity="secondary" 
                ></Button>
                <Button 
                    type="button" 
                    label="Save" 
                    @click="dialogVisible = false"
                ></Button>
            </div>
        </Dialog>
    </div>
</template>