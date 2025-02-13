<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';
import InputText from 'primevue/inputtext';
import { Form } from '@primevue/forms';
import Button from 'primevue/button';
import Message from 'primevue/message';
import { FloatLabel } from 'primevue';
import { UserIcon, LockClosedIcon } from '@heroicons/vue/24/outline';
import { Login } from '../../services/api';


const toast = useToast();

interface Values {
    username: string,
    password: string,
}

const initialValues = ref<Values>({
    username: '',
    password: '',
});
const isLoading = ref<boolean>(false)

const handleLogin = async () => {

    isLoading.value = true
    try {
        const data = await Login(initialValues.value.username, initialValues.value.password)
        console.log(data)
        toast.add({ severity: 'success', summary: 'Login Successfully!', life: 3000 });

    } catch (e) {
        toast.add({ severity: 'error', summary: 'Login Failed!', life: 3000 });
    } finally {
        isLoading.value = false
    }
    initialValues.value.username = ''
    initialValues.value.password = ''
}

const resolver = (values: any) => {
    const errors = <any>{};

    if (!values.values.username) {
        errors.username = [{ message: 'Username is required.' }];
    }

    if (!values.values.password) {
        errors.password = [{ message: 'Password is required.' }];
    }
    if (values.values.username) {
        initialValues.value.username = values.values.username
    }
    if (values.values.password) {
        initialValues.value.password = values.values.password
    }

    return {
        errors
    };
};

const onFormSubmit = ({ valid }: { valid: boolean}) => {
    if (valid) {
        handleLogin()
    }
}

</script>

<template>
    <div class="w-full h-full flex items-center justify-center">
        <Toast />
        <div class="flex flex-col items-center w-[90%] max-w-[500px] h-[90%] max-h-[900px] shadow-2xl bg-gray-50 rounded-2xl">
            <h1 class="text-2xl font-bold my-10 mt-28">
                Login
            </h1>
            <div class="w-full h-fit p-10">
                <Form v-slot="$form" :initialValues :resolver :validateOnValueUpdate="false" :validateOnBlur="true"  @submit="onFormSubmit" class="flex flex-col gap-4 w-full ">
                    <div class="flex flex-col gap-3">
                    <div class="flex items-center border-b-1 border-b-gray-300 bg-gray-50">
                        <UserIcon class="w-5 h-5 ml-2"/>
                        <div class="w-full ">
                            <FloatLabel variant="on">
                                <InputText class="border-none rounded-none shadow-none bg-gray-50 border-b" id="on_label" name="username" type="text" fluid />
                                <label  for="on_label">Type your user name</label>
                            </FloatLabel>
                        </div>
                    </div>
                        <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error.message }}</Message>
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="flex items-center border-b-1 border-b-gray-300 bg-gray-50">
                            <LockClosedIcon class="w-5 h-5 ml-2"/>
                            <div class="w-full">
                                <FloatLabel variant="on">
                                    <InputText class="border-none rounded-none shadow-none bg-gray-50 border-b" id="on_label1" name="password" type="password" fluid :formControl="{ validateOnValueUpdate: true }" />
                                    <label for="on_label1">Type your password</label>
                                </FloatLabel>
                            </div>
                        </div>
                        <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">{{ $form.password.error.message }}</Message>
                    </div>
                    <div class="w-full text-right">
                        <a class="text-right text-xs opacity-75" href="#forgot">Forgot password?</a>
                    </div>
                    <Button :disabled="isLoading" class="shadow rounded-full" type="submit" severity="info" label="Login">
                        <i v-if="isLoading" class="pi pi-spin pi-spinner" style="font-size: 1.5rem"></i>
                    </Button>
                </Form>
            </div>

            <div class="flex flex-col justify-between h-full items-center">
                <div>
                    <p>Or Sign Up Using</p>
                    <div class="w-full mt-8 flex items-center justify-center gap-5">
                        <div class="rounded-full cursor-pointer text-gray-600 hover:text-gray-900 transition-all hover:shadow"><i class="hover:text-blue-700 transition-colors pi text-3xl pi-facebook"></i></div>
                        <div class="rounded-full cursor-pointer text-gray-600 hover:text-gray-900 transition-all hover:shadow"><i class="hover:text-red-600 transition-colors pi text-3xl pi-google"></i></div>
                        <div class="rounded-full cursor-pointer text-gray-600 hover:text-gray-900 transition-all hover:shadow"><i class="hover:text-gray-400 transition-colors pi text-3xl pi-apple"></i></div>
                    </div>
                </div>
                <div class="p-6">
                    <p>Or Register?</p>
                </div>
            </div>
        </div>
        
    </div>
</template>