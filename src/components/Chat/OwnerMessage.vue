<script setup lang="ts">
    import { ref } from 'vue';
    import { Avatar, Button, Popover } from 'primevue';
    const isOpenReact = ref()
    const isOpenMore = ref()
    const props = defineProps({
        messsage: String,
        avatar: String
    })

    function toggleReact (event: any) {
        isOpenReact.value.toggle(event);
    }
    function toogleMore (event: any) {
        isOpenMore.value.toggle(event)
    }

</script>

<template>
    <div class="group w-full flex justify-end">
        <div class="opacity-0 transition-all group-hover:opacity-100">
            <Button 
            @click="toggleReact"
            size="small" 
            severity="secondary" 
            rounded variant="text" 
            aria-label="react" 
            icon="pi pi-face-smile"
            >
          
            </Button>
            <Popover ref="isOpenReact" class="popover-p-0">
                <div class="flex p-0 gap-2 w-fit">
                    <Button 
                    class="hover:text-amber-300 transition-colors"
                    size="small" 
                    severity="secondary" 
                    rounded variant="text" 
                    aria-label="smile" 
                    icon="pi pi-face-smile"
                    >
                    </Button>
                    <Button 
                    class="hover:text-red-500 transition-colors"
                    size="small" 
                    severity="secondary" 
                    rounded variant="text" 
                    aria-label="smile" 
                    icon="pi pi-heart"
                    >
                    </Button>
                    <Button 
                    class="hover:text-blue-400 transition-colors"
                    size="small" 
                    severity="secondary" 
                    rounded variant="text" 
                    aria-label="smile" 
                    icon="pi pi-thumbs-up"
                    >
                    </Button>
                    <Button 
                    class="hover:text-gray-700 transition-colors"
                    size="small" 
                    severity="secondary" 
                    rounded variant="text" 
                    aria-label="smile" 
                    icon="pi pi-thumbs-down"
                    >
                    </Button>
                </div>
            </Popover>
            <Button 
            @click="toogleMore"
            size="small" 
            severity="secondary"
             rounded 
             variant="text" 
             aria-label="Bookmark" 
             icon="pi pi-ellipsis-v">
            </Button>
            <Popover ref="isOpenMore" class="popover-p-0">
                <ul class="gap-1 flex flex-col w-[100px] p-2">
                    <li class="flex items-center p-1 hover:bg-gray-300 transition-colors rounded-[4px] cursor-pointer">
                        <i class="mr-1 pi pi-reply" style="font-size: 0.75rem"></i>
                        <span>
                            Reply
                        </span>
                    </li>
                    <li class="flex items-center p-1 hover:bg-gray-300 transition-colors rounded-[4px] cursor-pointer">
                        
                        <i class="mr-1 pi pi-pen-to-square" style="font-size: 0.75rem"></i>
                        <span>
                            Edit
                        </span></li>
                    <li class="flex items-center p-1 hover:bg-gray-300 transition-colors rounded-[4px] cursor-pointer">
                        <i class="mr-1 pi pi-trash" style="font-size: 0.75rem"></i>
                        
                        <span>
                            Delete
                        </span></li>
                </ul>
            </Popover>
        </div>
        <div class="w-fit max-w-96 bg-zinc-800 mr-3 p-2 px-3 rounded-2xl text-wrap text-white">
            {{ props.messsage }}
        </div>
        <div>
            <Avatar :label="props.avatar"  size="normal" shape="circle" />

        </div>
        
    </div>
</template>