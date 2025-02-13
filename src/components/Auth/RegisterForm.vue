<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';
import InputText from 'primevue/inputtext';
import { Form } from '@primevue/forms';
import Button from 'primevue/button';
import Message from 'primevue/message';
import { FloatLabel } from 'primevue';
import { UserIcon, LockClosedIcon, EnvelopeIcon, UserCircleIcon, LockOpenIcon } from '@heroicons/vue/24/outline';
import { Login } from '../../services/api';
import Checkbox from 'primevue/checkbox';


const toast = useToast();

interface Values {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    confirmPassword: string,
}

const initialValues = ref<Values>({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    confirmPassword:''
});
const isLoading = ref<boolean>(false)
const checked = ref<boolean>

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
    const errors: Record<string, { message: string }[]> = {};

    if (!values.values.username) {
        errors.username = [{ message: 'Username is required.' }];
    }

    if (!values.values.password) {
        errors.password = [{ message: 'Password is required.' }];
    } else if (values.values.password.length < 6) {
        errors.password = [{ message: 'Password must be at least 6 characters long.' }];
    }

    if (!values.values.confirmPassword) {
        errors.confirmPassword = [{ message: 'Confirm Password is required.' }];
    } else if (values.values.confirmPassword !== values.values.password) {
        errors.confirmPassword = [{ message: 'Passwords do not match.' }];
    }

    if (!values.values.firstName) {
        errors.firstName = [{ message: 'First name is required.' }];
    }

    if (!values.values.lastName) {
        errors.lastName = [{ message: 'Last name is required.' }];
    }

    if (!values.values.email) {
        errors.email = [{ message: 'Email is required.' }];
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.values.email)) {
        errors.email = [{ message: 'Invalid email format.' }];
    }

    return { errors };
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
            <h1 class="text-2xl font-bold mb-2 mt-5">
                Register
            </h1>
            <div class="w-full h-fit p-10">
                <Form v-slot="$form" :initialValues :resolver :validateOnValueUpdate="false" :validateOnBlur="true"  @submit="onFormSubmit" class="flex flex-col gap-4 w-full ">
                    <div class="flex flex-col gap-3">
                    <div class="flex items-center  bg-gray-50">
                        <div class=" border-b-1 flex items-center border-b-gray-300 mr-5">
                            <UserIcon class="w-5 h-5 ml-2"/>
                                <div class="w-full flex gap-2">
                                    <FloatLabel variant="on">
                                        <InputText class="border-none rounded-none shadow-none bg-gray-50 border-b" id="on_label" name="firstName" type="text" fluid />
                                        <label  for="on_label">First name</label>
                                    </FloatLabel>
                                </div>
                        </div>
                        <FloatLabel class="border-b-1 border-b-gray-300" variant="on">
                            <InputText class="border-none rounded-none shadow-none bg-gray-50 border-b" id="on_label6" name="lastName" type="text" fluid />
                            <label  for="on_label6">Last name</label>
                        </FloatLabel>
                    </div>
                        <Message v-if="$form.firstName?.invalid" severity="error" size="small" variant="simple">{{ $form.firstName.error.message }}</Message>
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="flex items-center border-b-1 border-b-gray-300 bg-gray-50">
                            <EnvelopeIcon class="w-5 h-5 ml-2"/>
                            <div class="w-full">
                                <FloatLabel variant="on">
                                    <InputText class="border-none rounded-none shadow-none bg-gray-50 border-b" id="on_label2" name="email" type="email" fluid :formControl="{ validateOnValueUpdate: true }" />
                                    <label for="on_label2">Type your email</label>
                                </FloatLabel>
                            </div>
                        </div>
                        <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error.message }}</Message>
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="flex items-center border-b-1 border-b-gray-300 bg-gray-50">
                            <UserCircleIcon class="w-5 h-5 ml-2"/>
                            <div class="w-full">
                                <FloatLabel variant="on">
                                    <InputText class="border-none rounded-none shadow-none bg-gray-50 border-b" id="on_label3" name="username" type="text" fluid :formControl="{ validateOnValueUpdate: true }" />
                                    <label for="on_label3">Type your username</label>
                                </FloatLabel>
                            </div>
                        </div>
                        <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error.message }}</Message>
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="flex items-center border-b-1 border-b-gray-300 bg-gray-50">
                            <LockOpenIcon class="w-5 h-5 ml-2"/>
                            <div class="w-full">
                                <FloatLabel variant="on">
                                    <InputText class="border-none rounded-none shadow-none bg-gray-50 border-b" id="on_label4" name="password" type="password" fluid :formControl="{ validateOnValueUpdate: true }" />
                                    <label for="on_label4">Type your password</label>
                                </FloatLabel>
                            </div>
                        </div>
                        <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">{{ $form.password.error.message }}</Message>
                    </div>
                    <div class="flex flex-col gap-1">
                        <div class="flex items-center border-b-1 border-b-gray-300 bg-gray-50">
                            <LockClosedIcon class="w-5 h-5 ml-2"/>
                            <div class="w-full">
                                <FloatLabel variant="on">
                                    <InputText class="border-none rounded-none shadow-none bg-gray-50 border-b" id="on_label5" name="confirmPassword" type="password" fluid :formControl="{ validateOnValueUpdate: true }" />
                                    <label for="on_label5">Confirm password</label>
                                </FloatLabel>
                            </div>
                        </div>
                        <Message v-if="$form.confirmPassword?.invalid" severity="error" size="small" variant="simple">{{ $form.confirmPassword.error.message }}</Message>
                    </div>
                    <div class="w-full flex items-center my-2 mt-7">
                        <Checkbox v-model="checked" binary /> 
                        <p class="ml-4 text-sm">Tôi đồng ý với các <span class="text-blue-500">điều khoản và dịch vụ</span></p>
                    </div>
                    <Button :disabled="isLoading" class="shadow rounded-full" type="submit" severity="info" label="Register">
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
                    <p>Or Login?</p>
                </div>
            </div>
        </div>
        
    </div>
</template>