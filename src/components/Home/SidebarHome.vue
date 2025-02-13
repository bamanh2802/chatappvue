<script setup lang="ts">
import { Button, Avatar } from 'primevue';
import { ref } from 'vue';
import { HomeIcon,ChatBubbleOvalLeftIcon, BuildingStorefrontIcon, ShoppingCartIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline';
const isActive = ref('home')

function handleActive (category: string) {
    isActive.value = category
}

</script>

<template>
    <div class="h-[calc(100vh-16px)] rounded-2xl m-2 bg- w-20 bg-gray-100 flex flex-col items-center justify-between">
        <div class="my-4">
            <div class="w-16 h-w-16">
              <img src="../../../public/img/logo.png" alt="">
            </div>
            <div class="flex items-center gap-3 flex-col mt-10">
                <div class="" @click="handleActive('home')">
                    <Button
                    v-tooltip.right="{
                        value: 'Home',
                        pt: {
                            arrow: {
                                style: {
                                    borderBottomColor: 'var(--p-primary-color)'
                                }
                            },
                            text: '!bg-primary !text-primary-contrast !font-light text-sm'
                        }
                    }"
                    :class="{ 'bg-zinc-800 text-gray-100': isActive === 'home' } "
                    severity="secondary" 
                    size="large"
                    class="p-4"
                    >
                    <HomeIcon class="w-4 h-4" />
                    </Button>
                </div>
                <div class="" @click="handleActive('chat')">
                    <Button 
                    v-tooltip.right="{
                        value: 'Chat',
                        pt: {
                            arrow: {
                                style: {
                                    borderBottomColor: 'var(--p-primary-color)'
                                }
                            },
                            text: '!bg-primary !text-primary-contrast !font-light text-sm'
                        }
                    }"
                    :class="{ 'bg-zinc-800 text-gray-100': isActive === 'chat' } "
                    severity="secondary" 
                    size="large"
                    class="p-4"
                    >
                    <ChatBubbleOvalLeftIcon class="w-4 h-4" />
                </Button>
                </div>
                <div class="" @click="handleActive('shop')">
                    <Button 
                    v-tooltip.right="{
                        value: 'Shop',
                        pt: {
                            arrow: {
                                style: {
                                    borderBottomColor: 'var(--p-primary-color)'
                                }
                            },
                            text: '!bg-primary !text-primary-contrast !font-light text-sm'
                        }
                    }"
                    :class="{ 'bg-zinc-800 text-gray-100': isActive === 'shop' } "
                    severity="secondary" 
                    size="large"
                    class="p-4">
                    
                    <BuildingStorefrontIcon class="w-4 h-4" />

                    </Button>
                </div>
                <div class="" @click="handleActive('cart')">
                    <Button 
                    v-tooltip.right="{
                        value: 'Cart',
                        pt: {
                            arrow: {
                                style: {
                                    borderBottomColor: 'var(--p-primary-color)'
                                }
                            },
                            text: '!bg-primary !text-primary-contrast !font-light text-sm'
                        }
                    }"
                    :class="{ 'bg-zinc-800 text-gray-100': isActive === 'cart' } "
                    severity="secondary" 
                    size="large"
                    class="p-4">
                    <ShoppingCartIcon class="w-4 h-4" />

                    </Button>
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col items-center">
            <div class="">
                <Button 
                v-tooltip.right="{
                    value: 'Cart',
                    pt: {
                        arrow: {
                            style: {
                                borderBottomColor: 'var(--p-primary-color)'
                            }
                        },
                        text: '!bg-primary !text-primary-contrast !font-light text-sm'
                    }
                }"
                :class="{ 'bg-zinc-800 text-gray-100': isActive === 'cart' } "
                severity="secondary" 
                size="large"
                class="p-4">
                <Cog6ToothIcon class="w-4 h-4" />

                </Button>
            </div>
            <div class="h-[1px] w-12 bg-gray-800 opacity-60"></div>
            <div class="p-2">
                <Avatar label="P"  size="large" shape="circle" />
            </div>
        </div>
    </div>
</template>