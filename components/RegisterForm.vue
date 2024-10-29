<script setup lang="ts">
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

const signUp = async () => {
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

    if (!validatePassword(password.value)) {
      errorMsg.value = "Password must be at least 6 characters long";
      return;
    }

    loading.value = true;

    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    });

    if (error) throw error;

    successMsg.value = "Check your email to confirm your account";
    email.value = "";
    password.value = "";
  } catch (error: any) {
    errorMsg.value = error.message || "An error occurred during sign up";
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
        Registration Page
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
          @click="signUp"
          type="button"
          :disabled="loading"
          class="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-indigo-600 shadow-sm border border-indigo-600 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
        >
          {{ loading ? "Loading..." : "Sign up" }}
        </button>
      </div>
    </div>
  </div>
</template>
