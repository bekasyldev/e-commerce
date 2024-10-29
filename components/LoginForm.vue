<script setup lang="ts">
import { ref } from "vue";
import { useSupabaseClient } from "#imports";

const client = useSupabaseClient();
const email = ref("");
const password = ref("");
const errorMsg = ref("");
const successMsg = ref("");
const loading = ref(false);

// Validation functions
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

const signIn = async () => {
  try {
    // Reset messages
    errorMsg.value = "";
    successMsg.value = "";

    // Validate inputs
    if (!email.value || !password.value) {
      errorMsg.value = "Please fill in all fields";
      return;
    }

    if (!validateEmail(email.value)) {
      errorMsg.value = "Please enter a valid email address";
      return;
    }

    loading.value = true;

    const { data, error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (error) throw error;

    successMsg.value = "Successfully signed in!";
    email.value = "";
    password.value = "";
  } catch (error: any) {
    errorMsg.value = error.message || "Invalid email or password";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <!-- Error Message -->
      <div
        v-if="errorMsg"
        class="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg"
        role="alert"
      >
        {{ errorMsg }}
      </div>

      <!-- Success Message -->
      <div
        v-if="successMsg"
        class="mb-4 p-4 text-sm text-green-700 bg-green-100 rounded-lg"
        role="alert"
      >
        {{ successMsg }}
      </div>

      <div class="space-y-6">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div class="mt-2">
            <input
              v-model="email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div class="text-sm">
              <a
                href="#"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div class="mt-2">
            <input
              v-model="password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <button
          @click="signIn"
          type="button"
          :disabled="loading"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
        >
          {{ loading ? "Loading..." : "Sign in" }}
        </button>
      </div>
    </div>
  </div>
</template>
