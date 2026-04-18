<template>
  <div class="flex h-screen bg-slate-50 font-sans text-slate-800 overflow-hidden w-full relative">
    
    <div v-if="isMobileMenuOpen" @click="isMobileMenuOpen = false" class="fixed inset-0 bg-slate-900/60 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300"></div>

    <aside :class="['fixed inset-y-0 left-0 z-50 w-[280px] shrink-0 bg-slate-900 text-slate-300 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out md:relative md:translate-x-0', isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full']">
      <div @click="switchTab('overview')" class="h-20 flex items-center px-8 border-b border-white/10 shrink-0 cursor-pointer group transition-all">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 mr-3 group-hover:scale-105 transition-transform">
          <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <h2 class="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">Zenith.</h2>
      </div>

      <nav class="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        <p class="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Main Menu</p>
        
        <button @click="switchTab('overview')" :class="['w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group', activeTab === 'overview' ? 'bg-blue-600/10 text-blue-400 translate-x-2' : 'hover:bg-white/5 hover:text-white hover:translate-x-2']">
          <svg :class="['w-5 h-5 mr-3 transition-colors', activeTab === 'overview' ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300']" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg> Overview
        </button>

        <button @click="switchTab('analytics')" :class="['w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group', activeTab === 'analytics' ? 'bg-blue-600/10 text-blue-400 translate-x-2' : 'hover:bg-white/5 hover:text-white hover:translate-x-2']">
          <svg :class="['w-5 h-5 mr-3 transition-colors', activeTab === 'analytics' ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300']" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> Analytics
        </button>

        <button @click="switchTab('balances')" :class="['w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group', activeTab === 'balances' ? 'bg-blue-600/10 text-blue-400 translate-x-2' : 'hover:bg-white/5 hover:text-white hover:translate-x-2']">
          <svg :class="['w-5 h-5 mr-3 transition-colors', activeTab === 'balances' ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300']" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg> Budgets
        </button>

        <button @click="switchTab('goals')" :class="['w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group', activeTab === 'goals' ? 'bg-blue-600/10 text-blue-400 translate-x-2' : 'hover:bg-white/5 hover:text-white hover:translate-x-2']">
          <svg :class="['w-5 h-5 mr-3 transition-colors', activeTab === 'goals' ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300']" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg> Savings Goals
        </button>

        <button @click="switchTab('bills')" :class="['w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group', activeTab === 'bills' ? 'bg-blue-600/10 text-blue-400 translate-x-2' : 'hover:bg-white/5 hover:text-white hover:translate-x-2']">
          <svg :class="['w-5 h-5 mr-3 transition-colors', activeTab === 'bills' ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300']" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> Subscriptions
        </button>

        <button @click="switchTab('transactions')" :class="['w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group', activeTab === 'transactions' ? 'bg-blue-600/10 text-blue-400 translate-x-2' : 'hover:bg-white/5 hover:text-white hover:translate-x-2']">
          <svg :class="['w-5 h-5 mr-3 transition-colors', activeTab === 'transactions' ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300']" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg> Transactions
        </button>

        <p class="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 mt-6">Account</p>
        
        <button @click="switchTab('settings')" :class="['w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group', activeTab === 'settings' ? 'bg-blue-600/10 text-blue-400 translate-x-2' : 'hover:bg-white/5 hover:text-white hover:translate-x-2']">
          <svg :class="['w-5 h-5 mr-3 transition-colors', activeTab === 'settings' ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300']" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> Settings
        </button>
      </nav>

      <div class="p-6 border-t border-white/10 bg-slate-950/30 shrink-0">
        <button @click="logout" class="w-full flex items-center justify-center px-4 py-2.5 border border-slate-700/50 rounded-xl text-sm font-semibold hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 active:scale-[0.98] transition-all duration-300 text-slate-400">
          <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Sign Out
        </button>
      </div>
    </aside>

    <main class="flex-1 flex flex-col h-screen overflow-x-hidden relative bg-slate-50/50 min-w-0">
      
      <transition name="toast-fade">
        <div v-if="toast.show" class="fixed top-6 right-6 md:right-10 z-[100] px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 font-bold text-sm shadow-blue-900/10 border border-white/20 backdrop-blur-md"
             :class="toast.type === 'success' ? 'bg-emerald-600/90 text-white' : 'bg-rose-600/90 text-white'">
          <svg v-if="toast.type === 'success'" class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
          <svg v-else class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          {{ toast.message }}
        </div>
      </transition>

      <header class="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 md:px-10 z-10 shrink-0">
        <div class="flex items-center">
          <button @click="isMobileMenuOpen = true" class="md:hidden mr-4 p-2 -ml-2 text-slate-500 hover:text-slate-900 focus:outline-none rounded-lg hover:bg-slate-100 transition-colors">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <div>
            <h1 class="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
              <span v-if="activeTab === 'overview'">Overview</span>
              <span v-if="activeTab === 'analytics'">Analytics</span>
              <span v-if="activeTab === 'balances'">Budgets</span>
              <span v-if="activeTab === 'goals'">Goals</span>
              <span v-if="activeTab === 'bills'">Bills</span>
              <span v-if="activeTab === 'transactions'">Transactions</span>
              <span v-if="activeTab === 'settings'">Settings</span>
            </h1>
          </div>
        </div>
        
        <div class="flex items-center pl-4 md:pl-6 border-l border-slate-200">
          <div class="w-9 h-9 md:w-10 md:h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold text-lg md:mr-3 shadow-sm overflow-hidden shrink-0">
            <img v-if="user?.profile_picture" :src="'/backend/uploads/' + user.profile_picture" class="w-full h-full object-cover">
            <span v-else class="uppercase">{{ (user?.display_name || user?.username)?.charAt(0) || 'U' }}</span>
          </div>
          <div class="hidden md:block">
            <p class="text-sm font-bold text-slate-800">{{ user?.display_name || user?.username || 'Guest' }}</p>
            <p class="text-xs text-slate-500 font-medium">Pro Member</p>
          </div>
        </div>
      </header>

      <div class="flex-1 overflow-y-auto p-4 md:p-10 pb-24 w-full">
        
        <transition name="slide-fade" mode="out-in">
          
          <div v-if="activeTab === 'overview'" key="overview" class="max-w-7xl mx-auto space-y-6 md:space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div class="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-3xl shadow-xl shadow-blue-500/30 relative overflow-hidden group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <svg class="absolute right-0 bottom-0 text-white/10 w-40 h-40 -mr-10 -mb-10 transform group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.64-2.25 1.64-1.74 0-2.1-.96-2.15-1.92H8.05c.06 1.75 1.42 2.87 2.85 3.22V19h2.38v-1.65c1.78-.34 2.94-1.4 2.94-3.07 0-2.3-1.91-2.98-3.91-3.48z"/></svg>
                <div class="relative">
                  <p class="text-blue-100 text-sm font-medium mb-1">Total Balance</p>
                  <h3 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight break-words">{{ isLoading ? '...' : formatCurrency(stats.total_balance) }}</h3>
                </div>
              </div>
              <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-all duration-300">
                <div class="flex justify-between items-start">
                  <div>
                    <p class="text-sm font-semibold text-slate-500 mb-1">Monthly Income</p>
                    <h3 class="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight break-words">{{ isLoading ? '...' : formatCurrency(stats.monthly_income) }}</h3>
                  </div>
                  <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm shrink-0 ml-2"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg></div>
                </div>
              </div>
              <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-all duration-300">
                <div class="flex justify-between items-start">
                  <div>
                    <p class="text-sm font-semibold text-slate-500 mb-1">Monthly Expenses</p>
                    <h3 class="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight break-words">{{ isLoading ? '...' : formatCurrency(stats.monthly_expenses) }}</h3>
                  </div>
                  <div class="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shadow-sm shrink-0 ml-2"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg></div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mt-8">
              <div class="px-6 md:px-8 py-4 md:py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h3 class="text-lg font-bold text-slate-900">Recent</h3>
                <button @click="openTxModal()" class="px-4 py-2 bg-blue-600 text-white text-xs md:text-sm font-bold rounded-xl hover:bg-blue-700 hover:scale-105 active:scale-[0.98] shadow-md transition-all flex items-center">
                  <svg class="w-4 h-4 mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path d="M12 4v16m8-8H4" /></svg> New
                </button>
              </div>
              <div class="overflow-x-auto w-full">
                <table class="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr class="bg-white border-b border-slate-100">
                      <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                      <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Category</th>
                      <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Note</th>
                      <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-50 bg-slate-50/20">
                    <tr v-for="tx in transactions" :key="tx.id" class="hover:bg-white hover:shadow-sm transition-all duration-200">
                      <td class="px-6 py-4 text-sm text-slate-600 font-medium whitespace-nowrap">{{ tx.date }}</td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span :class="['inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider', tx.category_type === 'income' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600']">
                          <svg class="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" :d="getCategoryIcon(tx.category_name)" /></svg>{{ tx.category_name || 'Uncategorized' }}
                        </span>
                      </td>
                      <td class="px-6 py-4 text-sm text-slate-500 italic max-w-[150px] truncate">{{ tx.note || '-' }}</td>
                      <td :class="['px-6 py-4 text-sm font-bold text-right whitespace-nowrap', tx.category_type === 'income' ? 'text-emerald-600' : 'text-slate-900']">
                        {{ tx.category_type === 'income' ? '+' : '-' }}{{ formatCurrency(tx.amount) }}
                      </td>
                    </tr>
                    <tr v-if="transactions.length === 0"><td colspan="4" class="px-6 py-10 text-center text-slate-400 font-medium">No transactions found.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div v-else-if="activeTab === 'analytics'" key="analytics" class="max-w-7xl mx-auto space-y-6">
            <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 md:p-8">
              <div class="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
                <h2 class="text-xl font-bold text-slate-900">Expense Breakdown</h2>
                <input type="month" v-model="selectedMonth" @change="fetchAnalytics" class="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-slate-700 cursor-pointer focus:ring-2 focus:ring-blue-500 w-full md:w-auto">
              </div>
              <div class="space-y-6">
                <div v-for="item in analytics" :key="item.category_name">
                  <div class="flex justify-between items-end mb-2">
                    <div class="flex items-center">
                      <div class="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center mr-3 shrink-0"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" :d="getCategoryIcon(item.category_name)" /></svg></div>
                      <span class="font-bold text-slate-800">{{ item.category_name || 'Uncategorized' }}</span>
                    </div>
                    <span class="font-bold text-slate-900">{{ formatCurrency(item.total) }}</span>
                  </div>
                  <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div class="bg-blue-600 h-2 rounded-full transition-all duration-1000" :style="{ width: getAnalyticsPercentage(item.total) + '%' }"></div>
                  </div>
                </div>
                <div v-if="analytics.length === 0" class="py-10 text-center text-slate-400 font-medium">
                  No expenses logged for {{ selectedMonth }}.
                </div>
              </div>
            </div>
          </div>

          <div v-else-if="activeTab === 'balances'" key="balances" class="max-w-7xl mx-auto space-y-6">
            <div class="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
              <h2 class="text-xl font-bold text-slate-900">Monthly Budgets</h2>
              <input type="month" v-model="selectedMonth" @change="fetchBudgets" class="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-slate-700 cursor-pointer focus:ring-2 focus:ring-blue-500 w-full md:w-auto">
            </div>

            <div v-if="budgets.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div v-for="budget in budgets" :key="budget.category_id" class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden transition-all">
                <div class="flex justify-between items-start mb-4">
                  <div class="flex items-center">
                    <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mr-3 shrink-0"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" :d="getCategoryIcon(budget.category_name)" /></svg></div>
                    <h3 class="font-bold text-slate-800">{{ budget.category_name || 'Uncategorized' }}</h3>
                  </div>
                  <button @click="openBudgetModal(budget)" class="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors active:scale-95">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                  </button>
                </div>
                <div class="mb-2 flex justify-between items-end flex-wrap">
                  <span class="text-2xl font-extrabold text-slate-900 mr-2">{{ formatCurrency(budget.spent_amount) }}</span>
                  <span class="text-sm font-medium text-slate-500 mb-1">of {{ formatCurrency(budget.budget_amount) }}</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div :class="['h-2.5 rounded-full transition-all duration-500', getBudgetPercentage(budget) > 100 ? 'bg-rose-500' : 'bg-blue-600']" :style="{ width: Math.min(getBudgetPercentage(budget), 100) + '%' }"></div>
                </div>
                <p v-if="getBudgetPercentage(budget) > 100" class="mt-2 text-xs font-bold text-rose-500 flex items-center">
                  <svg class="w-3.5 h-3.5 mr-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  Over budget by {{ formatCurrency(budget.spent_amount - budget.budget_amount) }}
                </p>
              </div>
            </div>
            
            <div v-else class="py-16 text-center border-2 border-dashed border-slate-200 rounded-3xl mx-2">
               <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                 <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
               </div>
               <h3 class="text-lg font-bold text-slate-700 mb-1">No Budgets Found</h3>
               <p class="text-sm text-slate-500 mb-4 px-4">Budgets are automatically generated based on your expense categories.</p>
            </div>
          </div>

          <div v-else-if="activeTab === 'goals'" key="goals" class="max-w-7xl mx-auto space-y-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-bold text-slate-900">Savings Targets</h2>
              <button @click="openGoalModal()" class="px-4 py-2 bg-emerald-600 text-white text-sm font-bold rounded-xl hover:bg-emerald-700 active:scale-[0.98] shadow-md transition-all flex items-center">
                <svg class="w-4 h-4 mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path d="M12 4v16m8-8H4" /></svg> Create
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div v-for="goal in goals" :key="goal.id" class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm transition-all group relative overflow-hidden">
                <div class="flex justify-between items-start mb-4">
                  <div class="flex items-center">
                    <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mr-3 shrink-0"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg></div>
                    <div>
                      <h3 class="font-bold text-slate-800 leading-tight">{{ goal.name }}</h3>
                      <p v-if="goal.deadline" class="text-xs text-slate-400 font-medium mt-0.5">By {{ goal.deadline }}</p>
                    </div>
                  </div>
                  <div class="flex space-x-1 md:opacity-0 group-hover:opacity-100 transition-opacity">
                    <button @click="openGoalModal(goal)" class="p-1.5 text-slate-300 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all" title="Edit"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></button>
                    <button @click="deleteGoal(goal.id)" class="p-1.5 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all" title="Delete"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                  </div>
                </div>
                <div class="mb-2 flex justify-between items-end flex-wrap">
                  <span class="text-2xl font-extrabold text-slate-900 mr-2">{{ formatCurrency(goal.current_amount || goal.saved_amount) }}</span>
                  <span class="text-sm font-medium text-slate-500 mb-1">of {{ formatCurrency(goal.target_amount) }}</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-3 overflow-hidden mb-5">
                  <div class="bg-emerald-500 h-3 rounded-full transition-all duration-1000 relative" :style="{ width: Math.min(((goal.current_amount || goal.saved_amount) / goal.target_amount) * 100, 100) + '%' }"></div>
                </div>
                <div class="flex justify-between items-center border-t border-slate-100 pt-4">
                  <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">{{ Math.round(((goal.current_amount || goal.saved_amount) / goal.target_amount) * 100) }}%</span>
                  <button @click="openContribModal(goal)" class="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg hover:bg-emerald-100 active:scale-95 transition-all">
                    + Add Funds
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div v-else-if="activeTab === 'bills'" key="bills" class="max-w-7xl mx-auto space-y-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-bold text-slate-900">Upcoming Bills</h2>
              <button @click="openBillModal()" class="px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-indigo-700 active:scale-[0.98] shadow-md transition-all flex items-center">
                <svg class="w-4 h-4 mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path d="M12 4v16m8-8H4" /></svg> Add Bill
              </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div v-for="bill in bills" :key="bill.id" class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden transition-all group">
                <div class="flex justify-between items-start mb-4">
                  <div class="flex items-center">
                    <div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mr-3 shrink-0"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>
                    <div>
                      <h3 class="font-bold text-slate-800 leading-tight">{{ bill.name }}</h3>
                      <p class="text-xs font-bold text-rose-500 mt-0.5">Due on the {{ bill.due_date }}th</p>
                    </div>
                  </div>
                </div>
                <div class="mb-4"><span class="text-3xl font-extrabold text-slate-900">{{ formatCurrency(bill.amount) }}</span></div>
                <div class="flex justify-between items-center border-t border-slate-100 pt-4">
                  <span v-if="bill.last_paid_month === selectedMonth" class="px-3 py-1.5 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-lg flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg> Paid
                  </span>
                  <button v-else @click="payBill(bill.id)" class="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg hover:bg-indigo-600 hover:text-white active:scale-95 transition-all shadow-sm">Mark Paid</button>
                  <button @click="deleteBill(bill.id)" class="p-1.5 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                </div>
              </div>
            </div>
          </div>

          <div v-else-if="activeTab === 'transactions'" key="transactions" class="max-w-7xl mx-auto">
            <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div class="px-6 py-4 md:py-6 border-b border-slate-100 flex flex-col md:flex-row justify-between md:items-center bg-slate-50/50 gap-4">
                <h3 class="text-lg font-bold text-slate-900">All Transactions</h3>
                <div class="flex space-x-2 md:space-x-3 w-full md:w-auto">
                  <button @click="exportToCSV" class="flex-1 md:flex-none px-3 md:px-4 py-2.5 bg-emerald-50 text-emerald-600 text-xs md:text-sm font-bold rounded-xl hover:bg-emerald-100 active:scale-[0.98] transition-all flex justify-center items-center">
                    <svg class="w-4 h-4 mr-1 md:mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> CSV
                  </button>
                  <button @click="openTxModal()" class="flex-1 md:flex-none px-4 md:px-5 py-2.5 bg-blue-600 text-white text-xs md:text-sm font-bold rounded-xl hover:bg-blue-700 active:scale-[0.98] shadow-md transition-all flex justify-center items-center">
                    <svg class="w-4 h-4 mr-1 md:mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path d="M12 4v16m8-8H4" /></svg> New
                  </button>
                </div>
              </div>
              <div class="overflow-x-auto w-full">
                <table class="w-full text-left border-collapse min-w-[650px]">
                  <thead>
                    <tr class="bg-white border-b border-slate-100">
                      <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                      <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Category</th>
                      <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Note</th>
                      <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Amount</th>
                      <th class="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-50 bg-slate-50/20">
                    <tr v-for="tx in allTransactions" :key="tx.id" class="hover:bg-white hover:shadow-sm transition-all duration-200">
                      <td class="px-6 py-4 text-sm text-slate-600 font-medium whitespace-nowrap">{{ tx.date }}</td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <span :class="['inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider', tx.category_type === 'income' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600']">
                          <svg class="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" :d="getCategoryIcon(tx.category_name)" /></svg>{{ tx.category_name || 'Uncategorized' }}
                        </span>
                      </td>
                      <td class="px-6 py-4 text-sm text-slate-500 italic max-w-[150px] truncate">{{ tx.note || '-' }}</td>
                      <td :class="['px-6 py-4 text-sm font-bold text-right whitespace-nowrap', tx.category_type === 'income' ? 'text-emerald-600' : 'text-slate-900']">
                        {{ tx.category_type === 'income' ? '+' : '-' }}{{ formatCurrency(tx.amount) }}
                      </td>
                      <td class="px-6 py-4 text-center whitespace-nowrap">
                        <button @click="openTxModal(tx)" class="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all mr-1" title="Edit"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></button>
                        <button @click="deleteTransaction(tx.id)" class="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all" title="Delete"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                      </td>
                    </tr>
                    <tr v-if="allTransactions.length === 0"><td colspan="5" class="px-6 py-10 text-center text-slate-400 font-medium">No transactions found.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div v-else-if="activeTab === 'settings'" key="settings" class="max-w-2xl mx-auto space-y-6">
            <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 md:p-8">
              <h2 class="text-xl font-bold text-slate-900 mb-8">Profile Settings</h2>
              
              <div class="flex flex-col items-center justify-center mb-8">
                <div class="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-slate-100 group cursor-pointer border-4 border-white shadow-xl mb-3">
                  <img v-if="user?.profile_picture" :src="'/backend/uploads/' + user.profile_picture" class="w-full h-full object-cover">
                  <div v-else class="w-full h-full flex items-center justify-center text-slate-400 text-3xl md:text-4xl font-bold uppercase">{{ (user?.display_name || user?.username)?.charAt(0) || 'U' }}</div>
                  <div class="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <input type="file" @change="uploadAvatar" accept="image/*" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" title="Change Avatar">
                </div>
                <p class="text-xs text-slate-400 font-medium text-center">Click to upload a new picture (Max 5MB)</p>
                <button v-if="user?.profile_picture" @click="removeAvatar" class="mt-3 text-xs font-bold text-rose-500 hover:text-rose-600 transition-colors bg-rose-50 px-3 py-1.5 rounded-lg">
                  Remove Picture
                </button>
              </div>

              <form @submit.prevent="updateProfile" class="space-y-5 border-t border-slate-100 pt-6">
                <div>
                  <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Display Name</label>
                  <input v-model="profileForm.display_name" type="text" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-slate-900 focus:ring-2 focus:ring-blue-500">
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Login Username</label>
                  <input v-model="profileForm.username" type="text" required class="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl outline-none font-bold text-slate-500 cursor-not-allowed" readonly>
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                  <input v-model="profileForm.email" type="email" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium text-slate-700 focus:ring-2 focus:ring-blue-500">
                </div>
                <div class="pt-2">
                  <button type="submit" :disabled="isSubmitting" class="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md disabled:opacity-70">
                    Save Profile Changes
                  </button>
                </div>
              </form>

              <div class="border-t border-slate-100 pt-8 mt-8">
                <h3 class="text-lg font-bold text-slate-900 mb-4">Localization Preferences</h3>
                <div>
                  <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Display Currency</label>
                  <select v-model="userCurrency" @change="saveCurrency" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium text-slate-700 focus:ring-2 focus:ring-blue-500">
                    <option value="USD">USD ($)</option>
                    <option value="VND">VND (₫)</option>
                  </select>
                  <p class="text-xs text-slate-400 mt-2">Selecting VND automatically applies the standard exchange rate to your stored balances.</p>
                </div>
              </div>

              <div class="border-t border-slate-100 pt-8 mt-8">
                <h3 class="text-lg font-bold text-slate-900 mb-4">Change Password</h3>
                <form @submit.prevent="updatePassword" class="space-y-5">
                  <div>
                    <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Current Password</label>
                    <input v-model="passForm.current" type="password" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium text-slate-700 focus:ring-2 focus:ring-blue-500">
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">New Password</label>
                      <input v-model="passForm.new" type="password" required minlength="6" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium text-slate-700 focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div>
                      <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Confirm New</label>
                      <input v-model="passForm.confirm" type="password" required minlength="6" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium text-slate-700 focus:ring-2 focus:ring-blue-500">
                    </div>
                  </div>
                  <div class="pt-2">
                    <button type="submit" :disabled="isSubmitting" class="w-full py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-900 active:scale-[0.98] transition-all shadow-md disabled:opacity-70">
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
        </transition>

      </div>
    </main>

    <div v-if="confirmModal.isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-all">
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden transform scale-100 mx-4">
        <div class="p-6 text-center">
          <div class="w-16 h-16 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">{{ confirmModal.title }}</h3>
          <p class="text-sm text-slate-500 mb-6">{{ confirmModal.message }}</p>
          <div class="flex space-x-3">
            <button @click="confirmModal.isOpen = false" class="flex-1 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-all">Cancel</button>
            <button @click="executeConfirm" class="flex-1 py-3 bg-rose-500 text-white font-bold rounded-xl hover:bg-rose-600 shadow-md shadow-rose-500/20 transition-all">Delete</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isTxModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden mx-4">
        <div class="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 class="text-lg font-bold text-slate-900">{{ isEditMode ? 'Edit Transaction' : 'New Transaction' }}</h3>
          <button @click="isTxModalOpen = false" class="text-slate-400 hover:text-rose-500 transition-colors"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></button>
        </div>
        <form @submit.prevent="submitTransaction" class="p-4 md:p-6 space-y-4 md:space-y-5">
          <div class="flex p-1 bg-slate-100 rounded-xl">
            <button type="button" @click="txForm.type = 'expense'; txForm.category_id = ''" :class="['flex-1 py-2 text-sm font-bold rounded-lg transition-all', txForm.type === 'expense' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-500']">Expense</button>
            <button type="button" @click="txForm.type = 'income'; txForm.category_id = ''" :class="['flex-1 py-2 text-sm font-bold rounded-lg transition-all', txForm.type === 'income' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500']">Income</button>
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Category</label>
            <select v-model="txForm.category_id" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium text-slate-700">
              <option value="" disabled>Select...</option>
              <option v-for="cat in filteredCategories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Amount (USD)</label>
            <input v-model="txForm.amount" type="number" step="0.01" required placeholder="0.00" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-slate-900">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Date</label>
            <input v-model="txForm.date" type="date" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium text-slate-700">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Note</label>
            <input v-model="txForm.note" type="text" placeholder="Optional" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium text-slate-700">
          </div>
          <button type="submit" :disabled="isSubmitting" class="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md">{{ isEditMode ? 'Update' : 'Save' }}</button>
        </form>
      </div>
    </div>

    <div v-if="isGoalModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden mx-4">
        <div class="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-emerald-50">
          <h3 class="text-lg font-bold text-emerald-800">{{ isGoalEditMode ? 'Edit Goal' : 'New Savings Goal' }}</h3>
          <button @click="isGoalModalOpen = false" class="text-emerald-400 hover:text-emerald-700"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 18L18 6M6 6l12 12" /></svg></button>
        </div>
        <form @submit.prevent="submitGoal" class="p-4 md:p-6 space-y-4 md:space-y-5">
          <div>
            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Goal Name</label>
            <input v-model="goalForm.name" type="text" required placeholder="e.g. New Laptop" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium text-slate-700">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Target Amount (USD)</label>
            <input v-model="goalForm.target_amount" type="number" step="0.01" required placeholder="0.00" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-slate-900">
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Deadline (Optional)</label>
            <input v-model="goalForm.deadline" type="date" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium text-slate-700">
          </div>
          <button type="submit" :disabled="isSubmitting" class="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-md">{{ isGoalEditMode ? 'Update Goal' : 'Create Goal' }}</button>
        </form>
      </div>
    </div>

    <div v-if="isContribModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden mx-4">
        <div class="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-emerald-50">
          <h3 class="text-lg font-bold text-emerald-800">Add to {{ activeGoal?.name }}</h3>
          <button @click="isContribModalOpen = false" class="text-emerald-400 hover:text-emerald-700"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 18L18 6M6 6l12 12" /></svg></button>
        </div>
        <form @submit.prevent="submitContribution" class="p-6 space-y-5">
          <div>
            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Amount to Add (USD)</label>
            <input v-model="contribForm.amount" type="number" step="0.01" required placeholder="0.00" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-slate-900">
          </div>
          <button type="submit" :disabled="isSubmitting" class="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-md">Add Funds</button>
        </form>
      </div>
    </div>

    <div v-if="isBudgetModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden mx-4">
        <div class="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-blue-50">
          <h3 class="text-lg font-bold text-blue-800">Set Budget</h3>
          <button @click="isBudgetModalOpen = false" class="text-blue-400 hover:text-blue-700"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 18L18 6M6 6l12 12" /></svg></button>
        </div>
        <form @submit.prevent="submitBudget" class="p-6 space-y-5">
          <div>
            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Monthly Limit (USD)</label>
            <input v-model="budgetForm.amount" type="number" step="0.01" required placeholder="0.00" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-slate-900">
          </div>
          <button type="submit" :disabled="isSubmitting" class="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md">Save Budget</button>
        </form>
      </div>
    </div>

    <div v-if="isBillModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden mx-4">
        <div class="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-indigo-50">
          <h3 class="text-lg font-bold text-indigo-800">Add Subscription</h3>
          <button @click="isBillModalOpen = false" class="text-indigo-400 hover:text-indigo-700"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></button>
        </div>
        <form @submit.prevent="submitBill" class="p-4 md:p-6 space-y-4 md:space-y-5">
          <div>
            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Bill Name</label>
            <input v-model="billForm.name" type="text" required placeholder="e.g. Netflix" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium text-slate-700">
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Amount (USD)</label>
              <input v-model="billForm.amount" type="number" step="0.01" required placeholder="0.00" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-slate-900">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Day Due</label>
              <input v-model="billForm.due_date" type="number" min="1" max="31" required placeholder="15" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-bold text-slate-900">
            </div>
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Link Category</label>
            <select v-model="billForm.category_id" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium text-slate-700">
              <option value="">None</option>
              <option v-for="cat in categories.filter(c => c.type === 'expense')" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
            </select>
          </div>
          <button type="submit" :disabled="isSubmitting" class="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-md">Save Subscription</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = ref(null)
const activeTab = ref('overview')
const isLoading = ref(true)

// Currency Preferences
const userCurrency = ref(localStorage.getItem('zenith_currency') || 'USD')
const saveCurrency = () => { localStorage.setItem('zenith_currency', userCurrency.value) }

// Toast Notification State
const toast = reactive({ show: false, message: '', type: 'success' })
const showToast = (message, type = 'success') => {
  toast.message = message
  toast.type = type
  toast.show = true
  setTimeout(() => { toast.show = false }, 3500)
}

// Mobile Menu State
const isMobileMenuOpen = ref(false)

// State
const stats = ref({ total_balance: 0, monthly_income: 0, monthly_expenses: 0 })
const transactions = ref([])
const allTransactions = ref([])
const categories = ref([])
const budgets = ref([])
const goals = ref([])
const analytics = ref([])
const bills = ref([])

const selectedMonth = ref(new Date().toISOString().slice(0, 7))

// Custom Confirmation Modal Logic
const confirmModal = reactive({
  isOpen: false,
  title: '',
  message: '',
  onConfirm: null
})

const requireConfirmation = (title, message, callback) => {
  confirmModal.title = title
  confirmModal.message = message
  confirmModal.onConfirm = callback
  confirmModal.isOpen = true
}

const executeConfirm = () => {
  if (confirmModal.onConfirm) confirmModal.onConfirm()
  confirmModal.isOpen = false
}

// Modal states
const isSubmitting = ref(false)
const isTxModalOpen = ref(false)
const isEditMode = ref(false)
const editingId = ref(null)

const isGoalModalOpen = ref(false)
const isGoalEditMode = ref(false)
const activeGoalId = ref(null)

const isContribModalOpen = ref(false)
const activeGoal = ref(null)

const isBudgetModalOpen = ref(false)
const activeBudget = ref(null)

const isBillModalOpen = ref(false)

// Forms
const txForm = reactive({ type: 'expense', category_id: '', amount: '', date: new Date().toISOString().split('T')[0], note: '' })
const goalForm = reactive({ name: '', target_amount: '', deadline: '' })
const contribForm = reactive({ amount: '' })
const budgetForm = reactive({ amount: '' })
const profileForm = reactive({ display_name: '', username: '', email: '' })
const passForm = reactive({ current: '', new: '', confirm: '' })
const billForm = reactive({ name: '', amount: '', due_date: '', category_id: '' })

// Advanced Dynamic Currency Formatter
const formatCurrency = (value) => {
  const num = parseFloat(value || 0)
  if (userCurrency.value === 'VND') {
    // Current rough standard conversion rate (1 USD = 25,400 VND)
    const converted = num * 25400
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(converted)
  }
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num)
}

const getCategoryIcon = (category) => {
  const icons = {
    'Salary': 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', 
    'Freelance': 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', 
    'Food & Groceries': 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z', 
    'Rent': 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', 
    'Utilities': 'M13 10V3L4 14h7v7l9-11h-7z', 
    'Entertainment': 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z', 
    'Transportation': 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    'Bills': 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    'Goals': 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    'Other': 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
  }
  return icons[category] || 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'
}

const filteredCategories = computed(() => categories.value.filter(c => c.type === txForm.type))

const getAnalyticsPercentage = (total) => {
  const totalMonthExpenses = analytics.value.reduce((sum, item) => sum + parseFloat(item.total), 0);
  if (totalMonthExpenses == 0) return 0;
  return (total / totalMonthExpenses) * 100;
}

const exportToCSV = () => {
  if (allTransactions.value.length === 0) { showToast("No transactions to export!", 'error'); return; }
  let csvContent = "data:text/csv;charset=utf-8,Date,Type,Category,Note,Amount\n";
  allTransactions.value.forEach(tx => {
    const safeNote = tx.note ? `"${tx.note.replace(/"/g, '""')}"` : '""';
    const row = `${tx.date},${tx.category_type.toUpperCase()},${tx.category_name || 'Uncategorized'},${safeNote},${tx.amount}`;
    csvContent += row + "\n";
  });
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `transactions_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

onMounted(() => {
  const userData = localStorage.getItem('user')
  if (userData) {
    user.value = JSON.parse(userData)
    fetchDashboardStats() 
    fetchCategories()
  } else router.push('/')
})

const switchTab = (tab) => {
  activeTab.value = tab
  isMobileMenuOpen.value = false // Auto-close the menu on mobile
  if (tab === 'transactions') fetchAllTransactions()
  if (tab === 'balances') fetchBudgets()
  if (tab === 'goals') fetchGoals()
  if (tab === 'analytics') fetchAnalytics()
  if (tab === 'settings') fetchProfile()
  if (tab === 'bills') fetchBills()
}

// ----- PROFILE & AVATAR LOGIC -----
const fetchProfile = async () => {
  try {
    const res = await fetch('/backend/user/get_user_details.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id }) })
    const data = await res.json()
    if (data.status === 'success') {
      profileForm.username = data.data.username
      profileForm.display_name = data.data.display_name || data.data.username
      profileForm.email = data.data.email
      if (data.data.profile_picture !== undefined) {
        user.value.profile_picture = data.data.profile_picture
        localStorage.setItem('user', JSON.stringify(user.value))
      }
    }
  } catch (e) { console.error(e) }
}

const updateProfile = async () => {
  isSubmitting.value = true
  try {
    const res = await fetch('/backend/user/update_profile.php', { 
        method: 'POST', 
        body: JSON.stringify({ user_id: user.value.id, username: profileForm.username, display_name: profileForm.display_name, email: profileForm.email }) 
    })
    const data = await res.json()
    if (data.status === 'success') {
      user.value = data.user; localStorage.setItem('user', JSON.stringify(data.user)); 
      showToast('Profile successfully updated!')
    } else showToast('Failed to update: ' + data.message, 'error')
  } catch (e) { showToast('Server error.', 'error') } finally { isSubmitting.value = false }
}

const uploadAvatar = async (event) => {
  const file = event.target.files[0]; if (!file) return;
  const formData = new FormData(); formData.append('user_id', user.value.id); formData.append('profile_picture', file)
  try {
    const res = await fetch('/backend/user/upload_profile_picture.php', { method: 'POST', body: formData })
    const data = await res.json()
    if (data.status === 'success') {
      user.value.profile_picture = data.filename; localStorage.setItem('user', JSON.stringify(user.value))
      showToast('Picture successfully uploaded!')
    } else showToast(data.message, 'error')
  } catch (error) { showToast("Upload failed.", 'error') }
}

const removeAvatar = () => {
  requireConfirmation('Remove Picture', 'Are you sure you want to remove your profile picture?', async () => {
    try {
      const res = await fetch('/backend/user/remove_profile_picture.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id }) })
      const data = await res.json()
      if (data.status === 'success') {
        user.value = data.user; localStorage.setItem('user', JSON.stringify(data.user))
        showToast('Picture removed!')
      }
    } catch (error) { showToast("Failed to remove picture.", 'error') }
  })
}

const updatePassword = async () => {
  if (passForm.new !== passForm.confirm) { showToast("New passwords don't match!", 'error'); return; }
  isSubmitting.value = true
  try {
    const res = await fetch('/backend/user/change_password.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id, current_password: passForm.current, new_password: passForm.new }) })
    const data = await res.json()
    if (data.status === 'success') {
      showToast('Password securely changed!')
      passForm.current = ''; passForm.new = ''; passForm.confirm = '';
    } else showToast('Failed: ' + data.message, 'error')
  } catch (e) { showToast('Server error.', 'error') } finally { isSubmitting.value = false }
}

// ----- BILLS LOGIC -----
const fetchBills = async () => {
  try {
    const res = await fetch('/backend/user/get_bills.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id }) })
    const data = await res.json()
    if (Array.isArray(data)) bills.value = data
  } catch (e) { console.error(e) }
}

const openBillModal = () => { billForm.name = ''; billForm.amount = ''; billForm.due_date = ''; billForm.category_id = ''; isBillModalOpen.value = true }
const submitBill = async () => {
  isSubmitting.value = true
  try {
    const res = await fetch('/backend/user/add_bill.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id, ...billForm }) })
    if ((await res.json()).status === 'success') { fetchBills(); isBillModalOpen.value = false; }
  } catch (e) { showToast('Server error.', 'error') } finally { isSubmitting.value = false }
}
const payBill = async (id) => {
  try {
    const res = await fetch('/backend/user/pay_bill.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id, bill_id: id, month: selectedMonth.value }) })
    if ((await res.json()).status === 'success') {
      fetchBills(); fetchDashboardStats(); fetchAllTransactions();
      showToast('Bill marked as paid!')
    }
  } catch (e) { showToast('Server error.', 'error') }
}
const deleteBill = (id) => {
  requireConfirmation('Delete Subscription', 'Are you sure you want to delete this bill?', async () => {
    try {
      const res = await fetch('/backend/user/delete_bill.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id, bill_id: id }) })
      if ((await res.json()).status === 'success') fetchBills()
    } catch (e) { showToast('Server error.', 'error') }
  })
}

// ----- OVERVIEW LOGIC -----
const fetchCategories = async () => {
  try {
    const res = await fetch('/backend/user/get_categories.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id }) })
    categories.value = await res.json()
  } catch (e) { console.error(e) }
}

const fetchDashboardStats = async () => {
  try {
    const statsRes = await fetch('/backend/user/get_overview_stats.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id }) })
    const statsData = await statsRes.json()
    if (statsData.status !== 'error') stats.value = statsData

    const transRes = await fetch('/backend/user/get_recent_transactions.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id }) })
    const transData = await transRes.json()
    if (Array.isArray(transData)) transactions.value = transData
  } catch (error) { console.error(error) } finally { isLoading.value = false }
}

const fetchAllTransactions = async () => {
  try {
    const res = await fetch('/backend/user/get_all_transactions.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id }) })
    const data = await res.json()
    if (Array.isArray(data)) allTransactions.value = data
  } catch (e) { console.error(e) }
}

const fetchAnalytics = async () => {
  try {
    const res = await fetch('/backend/user/get_expense_breakdown.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id, month: selectedMonth.value }) })
    const data = await res.json()
    if (Array.isArray(data)) analytics.value = data
    else analytics.value = []
  } catch (e) { console.error(e) }
}

// ----- BUDGET LOGIC -----
const fetchBudgets = async () => {
  try {
    const res = await fetch('/backend/user/get_budgets.php', { 
        method: 'POST', body: JSON.stringify({ user_id: user.value.id, month: selectedMonth.value }) 
    })
    const data = await res.json()
    if (Array.isArray(data)) {
        budgets.value = data
    }
  } catch (e) { console.error(e) }
}

const getBudgetPercentage = (budget) => {
  if (budget.budget_amount == 0) return 0;
  return (budget.spent_amount / budget.budget_amount) * 100;
}

const openBudgetModal = (budget) => {
  activeBudget.value = budget; budgetForm.amount = budget.budget_amount; isBudgetModalOpen.value = true
}

const submitBudget = async () => {
  isSubmitting.value = true
  try {
    const res = await fetch('/backend/user/set_budget.php', {
      method: 'POST', body: JSON.stringify({ user_id: user.value.id, category_id: activeBudget.value.category_id, month: selectedMonth.value, budget_amount: budgetForm.amount })
    })
    if ((await res.json()).status === 'success') { fetchBudgets(); isBudgetModalOpen.value = false; }
  } catch (e) { showToast('Server error.', 'error') } finally { isSubmitting.value = false }
}

// ----- GOALS LOGIC -----
const fetchGoals = async () => {
  try {
    const res = await fetch('/backend/user/get_goals.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id }) })
    const data = await res.json()
    if (Array.isArray(data)) goals.value = data
  } catch (e) { console.error(e) }
}

const openGoalModal = (goal = null) => {
  if (goal && goal.id) {
    isGoalEditMode.value = true; activeGoalId.value = goal.id;
    goalForm.name = goal.name; goalForm.target_amount = goal.target_amount; goalForm.deadline = goal.deadline || '';
  } else {
    isGoalEditMode.value = false; activeGoalId.value = null;
    goalForm.name = ''; goalForm.target_amount = ''; goalForm.deadline = '';
  }
  isGoalModalOpen.value = true
}

const submitGoal = async () => {
  isSubmitting.value = true
  const endpoint = isGoalEditMode.value ? '/backend/user/update_goal.php' : '/backend/user/add_goal.php'
  const payload = { user_id: user.value.id, name: goalForm.name, target_amount: goalForm.target_amount, deadline: goalForm.deadline }
  if (isGoalEditMode.value) payload.goal_id = activeGoalId.value

  try {
    const res = await fetch(endpoint, { method: 'POST', body: JSON.stringify(payload) })
    if ((await res.json()).status === 'success') { fetchGoals(); isGoalModalOpen.value = false; }
  } catch (e) { showToast('Server error.', 'error') } finally { isSubmitting.value = false }
}

const deleteGoal = (id) => {
  requireConfirmation('Delete Goal', 'Are you sure you want to delete this savings goal?', async () => {
    try {
      const res = await fetch('/backend/user/delete_goal.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id, goal_id: id }) })
      if ((await res.json()).status === 'success') fetchGoals()
    } catch (e) { showToast('Server error.', 'error') }
  })
}

const openContribModal = (goal) => { activeGoal.value = goal; contribForm.amount = ''; isContribModalOpen.value = true }

const submitContribution = async () => {
  isSubmitting.value = true
  try {
    const res = await fetch('/backend/user/add_contribution.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id, goal_id: activeGoal.value.id, amount: contribForm.amount }) })
    if ((await res.json()).status === 'success') { 
      fetchGoals(); fetchDashboardStats(); fetchAllTransactions();
      showToast('Funds added!')
      isContribModalOpen.value = false; 
    }
  } catch (e) { showToast('Server error.', 'error') } finally { isSubmitting.value = false }
}

// ----- TRANSACTION CRUD -----
const openTxModal = (tx = null) => {
  isTxModalOpen.value = true
  if (tx && tx.id) {
    isEditMode.value = true; editingId.value = tx.id; txForm.type = tx.category_type;
    txForm.category_id = tx.category_id; txForm.amount = tx.amount; txForm.date = tx.date; txForm.note = tx.note;
  } else {
    isEditMode.value = false; editingId.value = null; txForm.type = 'expense'; txForm.category_id = '';
    txForm.amount = ''; txForm.date = new Date().toISOString().split('T')[0]; txForm.note = ''
  }
}

const submitTransaction = async () => {
  isSubmitting.value = true
  const endpoint = isEditMode.value ? '/backend/user/update_transaction.php' : '/backend/user/add_transaction.php'
  const payload = { user_id: user.value.id, category_id: txForm.category_id, amount: txForm.amount, date: txForm.date, note: txForm.note }
  if (isEditMode.value) payload.transaction_id = editingId.value

  try {
    const res = await fetch(endpoint, { method: 'POST', body: JSON.stringify(payload) })
    if ((await res.json()).status === 'success') {
      await fetchDashboardStats()
      if (activeTab.value === 'transactions') await fetchAllTransactions()
      if (activeTab.value === 'balances') await fetchBudgets()
      if (activeTab.value === 'analytics') await fetchAnalytics()
      showToast('Transaction saved!')
      isTxModalOpen.value = false
    }
  } catch (e) { showToast('Server error.', 'error') } finally { isSubmitting.value = false }
}

const deleteTransaction = (id) => {
  requireConfirmation('Delete Transaction', 'Are you sure you want to delete this transaction?', async () => {
    try {
      const res = await fetch('/backend/user/delete_transaction.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id, transaction_id: id }) })
      if ((await res.json()).status === 'success') {
        await fetchDashboardStats()
        if (activeTab.value === 'transactions') await fetchAllTransactions()
        if (activeTab.value === 'balances') await fetchBudgets()
        if (activeTab.value === 'analytics') await fetchAnalytics()
        showToast('Transaction removed!')
      }
    } catch (e) { showToast('Server error.', 'error') }
  })
}

const logout = () => { localStorage.removeItem('user'); router.push('/'); }
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(15px);
  opacity: 0;
}

/* New Toast Transition */
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>