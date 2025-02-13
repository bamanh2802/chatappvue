<script setup lang="ts">
import { Avatar, Button, ToggleSwitch  } from 'primevue';
import { ref } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import { ConfirmDialog, Toast } from 'primevue';

const confirm = useConfirm();
const toast = useToast();



const notificationChecked = ref<boolean>(true)
const soundChecked = ref<boolean>(true)

const props = defineProps ({
    isOpen: Boolean
})


const confirm2 = () => {
    confirm.require({
        message: 'Do you want to delete this conversation?',
        header: 'Danger Zone',
        icon: 'pi pi-info-circle',
        rejectLabel: 'Cancel',
        rejectProps: {
            label: 'Cancel',
            severity: 'secondary',
            outlined: true
        },
        acceptProps: {
            label: 'Delete',
            severity: 'danger'
        },
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
        },
    });
};


const images = [
    'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
    'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
    'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=',
];

const files = [
    { name: 'File 1.pdf', url: '/path/to/file1.pdf' },
    { name: 'File 2.jpg', url: '/path/to/file2.jpg' },
    { name: 'File 3.txt', url: '/path/to/file3.txt' },
];
</script>

<template>
    <Toast />
    <ConfirmDialog></ConfirmDialog>
    <div :class="props.isOpen ? 'w-[30%] px-3 border-l-1' : 'w-0 p-0'" class=" border-gray-200 transition-all pt-10 max-w-96 h-full overflow-auto">
        <div v-show="props.isOpen" class="w-full">
            <div class="w-full h-fit p-2 flex flex-col items-center gap-2">
                <Avatar label="A"  size="xlarge" shape="circle" />
                <h1 class="text-xl">PrimeTek</h1>
                <p class="text-gray-500 text-sm">@primetek</p>
            </div>
            <div class="w-full flex items-center justify-center">
                <div class="w-full mt-3 flex items-center justify-center">
                    <Button severity="secondary" icon="pi pi-user" rounded variant="text" size="small">
                    </Button>
                    <Button severity="secondary" icon="pi pi-search" rounded variant="text" size="small">
                    </Button>
                    <Button @click="confirm2()" severity="secondary" icon="pi pi-sign-out" rounded variant="text" size="small">
                    </Button>
                </div>
            </div>
            <div class="w-full">
                <ul class="w-full">
                    <li class="flex items-center mt-2 justify-between">
                        <div class="flex items-center">
                            <i class="mr-3 text-gray-700 pi pi-bell" style="font-size: 1rem"></i>
                            <span class="text-gray-700">
                                Notification
                            </span>
                        </div>
                        <ToggleSwitch v-model="notificationChecked" />
                    </li>
                    <li class="flex items-center mt-2 justify-between">
                        <div class="flex items-center">
                            <i class="mr-3 text-gray-700 pi pi-volume-down" style="font-size: 1rem"></i>
                            <span class="text-gray-700">
                                Sound
                            </span>
                        </div>
                        <ToggleSwitch v-model="soundChecked" />
                    </li>
                </ul>
            </div>
            <div class="w-full mt-5">
                <Accordion value="0">
                    <!-- Accordion for Images -->
                    <AccordionPanel class="accordion-p-config" value="0">
                        <AccordionHeader>
                        <div class="w-full flex items-center">
                            <i class="pi pi-image text-md mr-2">

                            </i>
                            <span>Image</span>
                        </div>
                        </AccordionHeader>
                        <AccordionContent class="accordion-content-p-config">
                            <div class="flex flex-wrap gap-4">
                                <div v-for="(image, index) in images" :key="index" class="w-1/4">
                                    <img :src="image" alt="image" class=" cursor-pointer w-full h-auto rounded-md" />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>

                <Accordion  value="1">
                    <!-- Accordion for Uploaded Files -->
                    <AccordionPanel class="accordion-p-config"  value="1">
                        <AccordionHeader>

                            <div class="w-full flex items-center">
                                <i class="pi pi-folder text-md mr-2">

                                </i>
                                <span>Folder</span>
                            </div>
                        </AccordionHeader>
                        <AccordionContent class="accordion-content-p-config">
                            <ul class="list-none p-0">
                                <li v-for="(file, index) in files" :key="index" class="flex cursor-pointer transition-all p-1 rounded-[4px] hover:bg-gray-200 justify-between items-center gap-2 py-2">
                                    <span class="text-sm">{{ file.name }}</span>
                                    <i class="pi pi-download transition-all text-sm hover:text-gray-500 cursor-pointer" > </i>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>

            </div>
        </div>
    </div>
</template>