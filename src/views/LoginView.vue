<template>
  <div class="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden font-sans">
    
    <div class="absolute top-[-10%] left-[-5%] w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse"></div>
    <div class="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse" style="animation-delay: 2s;"></div>

    <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl min-h-[650px] overflow-hidden z-10">

      <div class="hidden md:flex absolute top-0 left-0 w-5/12 h-full bg-gradient-to-br from-blue-600 to-indigo-900 p-12 text-white flex-col justify-center z-30 transition-transform duration-700 ease-in-out"
           :class="isRegistering ? 'translate-x-[140%]' : 'translate-x-0'">
        
        <div class="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full blur-2xl"></div>
        <div class="absolute -bottom-24 -left-24 w-64 h-64 bg-white opacity-5 rounded-full blur-2xl"></div>

        <div class="relative z-10 transition-all duration-500" :class="isRegistering ? 'opacity-0 scale-95 pointer-events-none absolute' : 'opacity-100 scale-100'">
          <div class="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20 mb-6">
            <svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h1 class="text-4xl font-extrabold tracking-tight mb-4">Zenith.</h1>
          <p class="text-blue-100 font-medium leading-relaxed text-lg">Master your money. Track your spending, set ambitious goals, and build your wealth all in one place.</p>
        </div>

        <div class="relative z-10 transition-all duration-500 delay-100" :class="isRegistering ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none absolute'">
          <div class="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20 mb-6">
            <svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
          </div>
          <h1 class="text-4xl font-extrabold tracking-tight mb-4">Join Us.</h1>
          <p class="text-blue-100 font-medium leading-relaxed text-lg">Create your account in seconds and take absolute control of your financial future.</p>
        </div>
      </div>

      <div class="absolute top-0 left-0 w-full md:w-7/12 h-full bg-white z-10 transition-transform duration-700 ease-in-out flex flex-col justify-center px-8 md:px-16"
           :class="isRegistering ? 'translate-x-0' : 'md:translate-x-[71.4285%]'">

        <transition name="fade">
          <div v-if="successMessage" class="absolute top-8 left-8 right-8 p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center text-emerald-600 text-sm font-bold shadow-sm z-50">
            <svg class="w-5 h-5 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{{ successMessage }}</span>
          </div>
        </transition>

        <div class="relative w-full max-w-sm mx-auto h-[480px]">
          <transition name="form-fade">
            
            <div v-if="!isRegistering" class="absolute inset-0 flex flex-col justify-center">
              <div class="mb-8 text-center md:text-left">
                <h2 class="text-3xl font-extrabold text-slate-900 mb-2">Welcome Back</h2>
                <p class="text-slate-500 font-medium">Enter your credentials to securely log in.</p>
              </div>
              
              <div v-if="errorMessage" class="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-100 flex items-start text-rose-600 text-sm font-bold shadow-sm">
                <svg class="w-5 h-5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span>{{ errorMessage }}</span>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-4">
                <div>
                  <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Login Username</label>
                  <input v-model="form.username" type="text" required class="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-slate-900 focus:ring-2 focus:ring-blue-500">
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Password</label>
                  <input v-model="form.password" type="password" required class="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-slate-900 focus:ring-2 focus:ring-blue-500">
                </div>
                <button type="submit" :disabled="isLoading" class="w-full py-4 mt-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all shadow-lg shadow-blue-600/30 flex justify-center items-center">
                  <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Sign In
                </button>
              </form>

              <div class="mt-8 text-center">
                <p class="text-sm font-medium text-slate-500">
                  Don't have an account? 
                  <button type="button" @click="toggleMode" class="font-bold text-blue-600 hover:text-blue-800 transition-colors ml-1">Sign Up</button>
                </p>
              </div>
            </div>

            <div v-else class="absolute inset-0 flex flex-col justify-center">
              <div class="mb-6 text-center md:text-left">
                <h2 class="text-3xl font-extrabold text-slate-900 mb-2">Create Account</h2>
                <p class="text-slate-500 font-medium">Join Zenith to master your finances.</p>
              </div>

              <div v-if="errorMessage" class="mb-4 p-4 rounded-xl bg-rose-50 border border-rose-100 flex items-start text-rose-600 text-sm font-bold shadow-sm">
                <svg class="w-5 h-5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span>{{ errorMessage }}</span>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Display Name</label>
                    <input v-model="form.display_name" type="text" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-slate-900 focus:ring-2 focus:ring-blue-500">
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                    <input v-model="form.email" type="email" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-slate-900 focus:ring-2 focus:ring-blue-500">
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Login Username</label>
                  <input v-model="form.username" type="text" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-slate-900 focus:ring-2 focus:ring-blue-500">
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Password</label>
                  <input v-model="form.password" type="password" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-slate-900 focus:ring-2 focus:ring-blue-500">
                </div>
                <button type="submit" :disabled="isLoading" class="w-full py-4 mt-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all shadow-lg shadow-blue-600/30 flex justify-center items-center">
                  <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Create Account
                </button>
              </form>

              <div class="mt-6 text-center">
                <p class="text-sm font-medium text-slate-500">
                  Already have an account? 
                  <button type="button" @click="toggleMode" class="font-bold text-blue-600 hover:text-blue-800 transition-colors ml-1">Sign In</button>
                </p>
              </div>
            </div>
          </transition>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isRegistering = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const form = reactive({ display_name: '', username: '', email: '', password: '' })

const toggleMode = () => {
  isRegistering.value = !isRegistering.value
  errorMessage.value = ''
  successMessage.value = ''
  form.password = ''
}

const handleSubmit = async () => {
  isLoading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  const endpoint = isRegistering.value 
      ? 'https://expense-manager-api.42web.io/backend/user/register.php' 
      : 'https://expense-manager-api.42web.io/backend/user/login.php'
      
  const payload = isRegistering.value 
      ? { display_name: form.display_name, username: form.username, email: form.email, password: form.password } 
      : { username: form.username, password: form.password }

  try {
    const res = await fetch(endpoint, { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
    })
    const data = await res.json()

    if (data.status === 'success') {
      if (isRegistering.value) {
        // Show success alert beautifully, clear form, and trigger the sliding animation back to Login!
        successMessage.value = "Account created! You can now log in."
        form.username = ''
        form.password = ''
        form.display_name = ''
        form.email = ''
        isRegistering.value = false
        
        // Hide success message after 5 seconds
        setTimeout(() => { successMessage.value = '' }, 5000)
      } else {
        localStorage.setItem('user', JSON.stringify(data.user))
        router.push('/dashboard')
      }
    } else {
      errorMessage.value = data.message || 'Authentication failed.'
    }
  } catch (error) { 
      errorMessage.value = 'Cannot connect to the server.' 
  } finally { 
      isLoading.value = false 
  }
}
</script>

<style scoped>
/* Cross-fade for the forms swapping within the panel */
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 0.4s ease;
}
.form-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.form-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Simple fade for the success banner */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>