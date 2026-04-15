<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
    
    <div class="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl relative z-10 border border-slate-100">
      <div>
        <h2 class="mt-2 text-center text-3xl font-extrabold text-slate-900">
          Expense Manager
        </h2>
        <p class="mt-2 text-center text-sm text-slate-600">
          Sign in to your account
        </p>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="space-y-4">
          <div>
            <label for="username" class="block text-sm font-medium text-slate-700">Username or Email</label>
            <input 
              id="username" 
              v-model="credentials.username" 
              type="text" 
              required 
              class="mt-1 appearance-none relative block w-full px-3 py-2 border border-slate-300 rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors" 
              placeholder="Enter your username"
            >
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-slate-700">Password</label>
            <input 
              id="password" 
              v-model="credentials.password" 
              type="password" 
              required 
              class="mt-1 appearance-none relative block w-full px-3 py-2 border border-slate-300 rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors" 
              placeholder="••••••••"
            >
          </div>
        </div>

        <div v-if="errorMessage" class="text-red-500 text-sm text-center font-medium bg-red-50 p-2 rounded-md border border-red-100">
          {{ errorMessage }}
        </div>

        <div>
          <button 
            type="submit" 
            :disabled="isLoading"
            class="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-70"
          >
            <span v-if="isLoading">Signing in...</span>
            <span v-else>Sign in</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Reactive state for the form
const credentials = reactive({
  username: '',
  password: ''
})

const isLoading = ref(false)
const errorMessage = ref('')

// The function that runs when you click submit
const handleLogin = async () => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    // Replace this URL with your actual PHP hosting URL later
const response = await fetch('http://localhost/expense_manager/backend/user/login.php', {  
    method: 'POST', // <--- This is the crucial line that went missing!    
    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    })

    const data = await response.json()

    if (data.status === 'success') {
      // If login is good, save the user info (or token) to localStorage
      localStorage.setItem('user', JSON.stringify(data.user))
      
      // Navigate to the dashboard
      router.push('/dashboard')
    } else {
      // Show the error from the PHP backend
      errorMessage.value = data.message || 'Login failed. Please check your credentials.'
    }
  } catch (error) {
    errorMessage.value = 'Could not connect to the server.'
    console.error('Login Error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>