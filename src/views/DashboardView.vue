<template>
  <div class="flex h-screen bg-slate-50 font-sans text-slate-800 overflow-hidden relative">
    
    <aside class="w-[280px] shrink-0 bg-slate-900 text-slate-300 flex flex-col shadow-2xl z-20">
      <div class="h-20 flex items-center px-8 border-b border-white/10 shrink-0">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 mr-3">
          <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <h2 class="text-2xl font-bold text-white tracking-tight">Zenith.</h2>
      </div>

      <nav class="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        <p class="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Main Menu</p>
        
        <button @click="switchTab('overview')" :class="['w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group', activeTab === 'overview' ? 'bg-blue-600/10 text-blue-400 translate-x-2' : 'hover:bg-white/5 hover:text-white hover:translate-x-2']">
          <svg :class="['w-5 h-5 mr-3 transition-colors', activeTab === 'overview' ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300']" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
          Overview
        </button>

        <button @click="switchTab('balances')" :class="['w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group', activeTab === 'balances' ? 'bg-blue-600/10 text-blue-400 translate-x-2' : 'hover:bg-white/5 hover:text-white hover:translate-x-2']">
          <svg :class="['w-5 h-5 mr-3 transition-colors', activeTab === 'balances' ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300']" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
          Budgets
        </button>

        <button @click="switchTab('transactions')" :class="['w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group', activeTab === 'transactions' ? 'bg-blue-600/10 text-blue-400 translate-x-2' : 'hover:bg-white/5 hover:text-white hover:translate-x-2']">
          <svg :class="['w-5 h-5 mr-3 transition-colors', activeTab === 'transactions' ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300']" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
          Transactions
        </button>
      </nav>

      <div class="p-6 border-t border-white/10 bg-slate-950/30 shrink-0">
        <button @click="logout" class="w-full flex items-center justify-center px-4 py-2.5 border border-slate-700/50 rounded-xl text-sm font-semibold hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 active:scale-[0.98] transition-all duration-300 text-slate-400">
          <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          Sign Out
        </button>
      </div>
    </aside>

    <main class="flex-1 flex flex-col h-screen overflow-x-auto relative bg-slate-50/50">
      <header class="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-10 z-10 shrink-0 min-w-[850px]">
        <div>
          <h1 class="text-2xl font-bold text-slate-900 tracking-tight">
            <span v-if="activeTab === 'overview'">Overview</span>
            <span v-if="activeTab === 'balances'">Monthly Budgets</span>
            <span v-if="activeTab === 'transactions'">All Transactions</span>
          </h1>
          <p class="text-sm text-slate-500 font-medium mt-0.5">Track your financial journey.</p>
        </div>
        <div class="flex items-center space-x-6">
          <button class="relative p-2 text-slate-400 hover:text-slate-600 transition-colors hover:scale-110 active:scale-95">
            <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          </button>
          <div class="flex items-center pl-6 border-l border-slate-200">
            <div class="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold text-lg mr-3 shadow-sm">
              {{ user?.username?.charAt(0).toUpperCase() || 'U' }}
            </div>
            <div class="block">
              <p class="text-sm font-bold text-slate-800">{{ user?.username || 'Guest' }}</p>
              <p class="text-xs text-slate-500 font-medium">Pro Member</p>
            </div>
          </div>
        </div>
      </header>

      <div class="flex-1 overflow-y-auto p-10 min-w-[850px] pb-24">
        
        <div v-if="activeTab === 'overview'" class="max-w-7xl mx-auto space-y-8">
          <div class="grid grid-cols-3 gap-6">
            <div class="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-3xl shadow-xl shadow-blue-500/30 relative overflow-hidden group hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 cursor-default">
              <svg class="absolute right-0 bottom-0 text-white/10 w-40 h-40 -mr-10 -mb-10 transform group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.64-2.25 1.64-1.74 0-2.1-.96-2.15-1.92H8.05c.06 1.75 1.42 2.87 2.85 3.22V19h2.38v-1.65c1.78-.34 2.94-1.4 2.94-3.07 0-2.3-1.91-2.98-3.91-3.48z"/></svg>
              <div class="relative">
                <p class="text-blue-100 text-sm font-medium mb-1">Total Balance</p>
                <h3 class="text-4xl font-extrabold text-white tracking-tight">
                  {{ isLoading ? '...' : formatCurrency(stats.total_balance) }}
                </h3>
              </div>
            </div>
            <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default">
              <div class="flex justify-between items-start">
                <div>
                  <p class="text-sm font-semibold text-slate-500 mb-1">Monthly Income</p>
                  <h3 class="text-3xl font-extrabold text-slate-900 tracking-tight">
                    {{ isLoading ? '...' : formatCurrency(stats.monthly_income) }}
                  </h3>
                </div>
                <div class="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>
                </div>
              </div>
            </div>
            <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default">
              <div class="flex justify-between items-start">
                <div>
                  <p class="text-sm font-semibold text-slate-500 mb-1">Monthly Expenses</p>
                  <h3 class="text-3xl font-extrabold text-slate-900 tracking-tight">
                    {{ isLoading ? '...' : formatCurrency(stats.monthly_expenses) }}
                  </h3>
                </div>
                <div class="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mt-8">
            <div class="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 class="text-lg font-bold text-slate-900">Recent Transactions</h3>
              <button @click="openModal()" class="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 hover:scale-105 active:scale-[0.98] shadow-md shadow-blue-600/20 transition-all flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" /></svg>
                New Transaction
              </button>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-white border-b border-slate-100">
                    <th class="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                    <th class="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Category</th>
                    <th class="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Note</th>
                    <th class="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Amount</th>
                    <th class="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-50 bg-slate-50/20">
                  <tr v-for="tx in transactions" :key="tx.id" class="hover:bg-white hover:shadow-md hover:scale-[1.005] transition-all duration-200 relative z-10">
                    <td class="px-8 py-4 text-sm text-slate-600 font-medium whitespace-nowrap">
                      <div class="flex items-center"><svg class="w-4 h-4 mr-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>{{ tx.date }}</div>
                    </td>
                    <td class="px-8 py-4 whitespace-nowrap">
                      <span :class="['inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider', tx.category_type === 'income' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600']">
                        <svg class="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" :d="getCategoryIcon(tx.category_name)" /></svg>{{ tx.category_name }}
                      </span>
                    </td>
                    <td class="px-8 py-4 text-sm text-slate-500">
                      <div class="flex items-center"><svg class="w-4 h-4 mr-2 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg><span class="italic truncate max-w-[150px] lg:max-w-[250px]">{{ tx.note || 'No note provided' }}</span></div>
                    </td>
                    <td :class="['px-8 py-4 text-sm font-bold text-right whitespace-nowrap', tx.category_type === 'income' ? 'text-emerald-600' : 'text-slate-900']">
                      {{ tx.category_type === 'income' ? '+' : '-' }}{{ formatCurrency(tx.amount) }}
                    </td>
                    <td class="px-8 py-4 text-center whitespace-nowrap">
                      <button @click="openModal(tx)" class="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg hover:scale-110 active:scale-95 transition-all mr-1" title="Edit">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                      </button>
                      <button @click="deleteTransaction(tx.id)" class="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg hover:scale-110 active:scale-95 transition-all" title="Delete">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </td>
                  </tr>
                  <tr v-if="transactions.length === 0 && !isLoading"><td colspan="5" class="px-8 py-10 text-center text-slate-400 font-medium">No transactions found.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 'balances'" class="max-w-7xl mx-auto space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="budget in budgets" :key="budget.category_id" class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden transition-all">
              
              <div class="flex justify-between items-start mb-4">
                <div class="flex items-center">
                  <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mr-3">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" :d="getCategoryIcon(budget.category_name)" /></svg>
                  </div>
                  <h3 class="font-bold text-slate-800">{{ budget.category_name }}</h3>
                </div>
                <button @click="openBudgetPrompt(budget)" class="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors hover:scale-110 active:scale-95">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                </button>
              </div>

              <div class="mb-2 flex justify-between items-end">
                <span class="text-2xl font-extrabold text-slate-900">{{ formatCurrency(budget.spent_amount) }}</span>
                <span class="text-sm font-medium text-slate-500 mb-1">of {{ formatCurrency(budget.budget_amount) }}</span>
              </div>

              <div class="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div :class="['h-2.5 rounded-full transition-all duration-500', getBudgetPercentage(budget) > 100 ? 'bg-rose-500' : 'bg-blue-600']" :style="{ width: Math.min(getBudgetPercentage(budget), 100) + '%' }"></div>
              </div>
              <p v-if="getBudgetPercentage(budget) > 100" class="mt-2 text-xs font-bold text-rose-500 flex items-center">
                <svg class="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                Over budget by {{ formatCurrency(budget.spent_amount - budget.budget_amount) }}
              </p>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 'transactions'" class="max-w-7xl mx-auto">
          <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div class="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 class="text-lg font-bold text-slate-900">All Transaction History</h3>
              <button @click="openModal()" class="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 hover:scale-105 active:scale-[0.98] shadow-md shadow-blue-600/20 transition-all flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" /></svg>
                New Transaction
              </button>
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-white border-b border-slate-100">
                    <th class="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                    <th class="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Category</th>
                    <th class="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Note</th>
                    <th class="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Amount</th>
                    <th class="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-50 bg-slate-50/20">
                  <tr v-for="tx in allTransactions" :key="tx.id" class="hover:bg-white hover:shadow-md hover:scale-[1.005] transition-all duration-200 relative z-10">
                    <td class="px-8 py-4 text-sm text-slate-600 font-medium whitespace-nowrap">
                      <div class="flex items-center"><svg class="w-4 h-4 mr-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>{{ tx.date }}</div>
                    </td>
                    <td class="px-8 py-4 whitespace-nowrap">
                      <span :class="['inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider', tx.category_type === 'income' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600']">
                        <svg class="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" :d="getCategoryIcon(tx.category_name)" /></svg>{{ tx.category_name }}
                      </span>
                    </td>
                    <td class="px-8 py-4 text-sm text-slate-500">
                      <div class="flex items-center"><svg class="w-4 h-4 mr-2 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg><span class="italic truncate max-w-[150px] lg:max-w-[250px]">{{ tx.note || 'No note provided' }}</span></div>
                    </td>
                    <td :class="['px-8 py-4 text-sm font-bold text-right whitespace-nowrap', tx.category_type === 'income' ? 'text-emerald-600' : 'text-slate-900']">
                      {{ tx.category_type === 'income' ? '+' : '-' }}{{ formatCurrency(tx.amount) }}
                    </td>
                    <td class="px-8 py-4 text-center whitespace-nowrap">
                      <button @click="openModal(tx)" class="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg hover:scale-110 active:scale-95 transition-all mr-1" title="Edit">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                      </button>
                      <button @click="deleteTransaction(tx.id)" class="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg hover:scale-110 active:scale-95 transition-all" title="Delete">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </td>
                  </tr>
                  <tr v-if="allTransactions.length === 0 && !isLoading"><td colspan="5" class="px-8 py-10 text-center text-slate-400 font-medium">No transactions found.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </main>

    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
        <div class="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 class="text-lg font-bold text-slate-900">{{ isEditMode ? 'Edit Transaction' : 'New Transaction' }}</h3>
          <button @click="closeModal" class="text-slate-400 hover:text-rose-500 hover:rotate-90 hover:scale-110 transition-all duration-300">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <form @submit.prevent="submitTransaction" class="p-6 space-y-5">
          <div class="flex p-1 bg-slate-100 rounded-xl">
            <button type="button" @click="txForm.type = 'expense'; txForm.category_id = ''" :class="['flex-1 py-2 text-sm font-bold rounded-lg transition-all', txForm.type === 'expense' ? 'bg-white text-rose-600 shadow-sm' : 'text-slate-500 hover:text-slate-700']">Expense</button>
            <button type="button" @click="txForm.type = 'income'; txForm.category_id = ''" :class="['flex-1 py-2 text-sm font-bold rounded-lg transition-all', txForm.type === 'income' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700']">Income</button>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Category</label>
            <select v-model="txForm.category_id" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium text-slate-700">
              <option value="" disabled>Select a category...</option>
              <option v-for="cat in filteredCategories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Amount</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span class="text-slate-400 font-bold">$</span>
              </div>
              <input v-model="txForm.amount" type="number" step="0.01" required placeholder="0.00" class="w-full pl-8 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-bold text-slate-900">
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2">
              <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Date</label>
              <input v-model="txForm.date" type="date" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium text-slate-700">
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Note (Optional)</label>
            <input v-model="txForm.note" type="text" placeholder="What was this for?" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium text-slate-700">
          </div>

          <div class="pt-2">
            <button type="submit" :disabled="isSubmitting" class="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 hover:scale-105 active:scale-[0.98] transition-all shadow-md shadow-blue-600/20 disabled:opacity-70 flex justify-center items-center">
              <span v-if="isSubmitting">Saving...</span>
              <span v-else>{{ isEditMode ? 'Update Transaction' : 'Save Transaction' }}</span>
            </button>
          </div>
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

const stats = ref({ total_balance: 0, monthly_income: 0, monthly_expenses: 0 })
const transactions = ref([])
const allTransactions = ref([])
const categories = ref([])
const budgets = ref([])

const isModalOpen = ref(false)
const isSubmitting = ref(false)
const isEditMode = ref(false)
const editingId = ref(null)

const txForm = reactive({
  type: 'expense', category_id: '', amount: '',
  date: new Date().toISOString().split('T')[0], note: ''
})

const formatCurrency = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value || 0)

const getCategoryIcon = (category) => {
  const icons = {
    'Salary': 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', 
    'Freelance': 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', 
    'Food & Groceries': 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z', 
    'Rent': 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', 
    'Utilities': 'M13 10V3L4 14h7v7l9-11h-7z', 
    'Entertainment': 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z', 
    'Transportation': 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    'Other': 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
  }
  return icons[category] || 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'
}

const filteredCategories = computed(() => categories.value.filter(c => c.type === txForm.type))

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
  if (tab === 'transactions') fetchAllTransactions()
  if (tab === 'balances') fetchBudgets()
}

const fetchCategories = async () => {
  try {
    const res = await fetch('http://localhost/expense_manager/backend/user/get_categories.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id }) })
    categories.value = await res.json()
  } catch (e) { console.error(e) }
}

const fetchDashboardStats = async () => {
  try {
    const statsRes = await fetch('http://localhost/expense_manager/backend/user/get_overview_stats.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id }) })
    const statsData = await statsRes.json()
    if (statsData.status !== 'error') stats.value = statsData

    const transRes = await fetch('http://localhost/expense_manager/backend/user/get_recent_transactions.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id }) })
    const transData = await transRes.json()
    if (Array.isArray(transData)) transactions.value = transData
  } catch (error) { console.error(error) } finally { isLoading.value = false }
}

const fetchAllTransactions = async () => {
  isLoading.value = true
  try {
    const res = await fetch('http://localhost/expense_manager/backend/user/get_all_transactions.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id }) })
    const data = await res.json()
    if (Array.isArray(data)) allTransactions.value = data
  } catch (e) { console.error(e) } finally { isLoading.value = false }
}

// BUGET LOGIC
const fetchBudgets = async () => {
  try {
    const currentMonth = new Date().toISOString().slice(0, 7) // 'YYYY-MM'
    const res = await fetch('http://localhost/expense_manager/backend/user/get_budgets.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id, month: currentMonth }) })
    const data = await res.json()
    if (Array.isArray(data)) budgets.value = data
  } catch (e) { console.error(e) }
}

const getBudgetPercentage = (budget) => {
  if (budget.budget_amount == 0) return 0;
  return (budget.spent_amount / budget.budget_amount) * 100;
}

const openBudgetPrompt = async (budget) => {
  const newAmount = prompt(`Set monthly budget for ${budget.category_name}:`, budget.budget_amount)
  if (newAmount !== null && !isNaN(newAmount) && newAmount >= 0) {
    const currentMonth = new Date().toISOString().slice(0, 7)
    try {
      const res = await fetch('http://localhost/expense_manager/backend/user/set_budget.php', {
        method: 'POST',
        body: JSON.stringify({ user_id: user.value.id, category_id: budget.category_id, month: currentMonth, budget_amount: newAmount })
      })
      const data = await res.json()
      if (data.status === 'success') fetchBudgets()
      else alert('Failed to save budget.')
    } catch (e) { alert('Server error.') }
  }
}

const deleteTransaction = async (id) => {
  if (!confirm('Delete this transaction?')) return;
  try {
    const res = await fetch('http://localhost/expense_manager/backend/user/delete_transaction.php', { method: 'POST', body: JSON.stringify({ user_id: user.value.id, transaction_id: id }) })
    if ((await res.json()).status === 'success') {
      await fetchDashboardStats()
      if (activeTab.value === 'transactions') await fetchAllTransactions()
      if (activeTab.value === 'balances') await fetchBudgets()
    }
  } catch (e) { alert('Server error.') }
}

const openModal = (tx = null) => {
  isModalOpen.value = true
  if (tx) {
    isEditMode.value = true
    editingId.value = tx.id
    txForm.type = tx.category_type
    txForm.category_id = tx.category_id
    txForm.amount = tx.amount
    txForm.date = tx.date
    txForm.note = tx.note
  } else {
    isEditMode.value = false; editingId.value = null; txForm.type = 'expense'; txForm.category_id = '';
    txForm.amount = ''; txForm.date = new Date().toISOString().split('T')[0]; txForm.note = ''
  }
}

const closeModal = () => { isModalOpen.value = false }

const submitTransaction = async () => {
  isSubmitting.value = true
  const endpoint = isEditMode.value ? 'http://localhost/expense_manager/backend/user/update_transaction.php' : 'http://localhost/expense_manager/backend/user/add_transaction.php'
  const payload = { user_id: user.value.id, category_id: txForm.category_id, amount: txForm.amount, date: txForm.date, note: txForm.note }
  if (isEditMode.value) payload.transaction_id = editingId.value

  try {
    const res = await fetch(endpoint, { method: 'POST', body: JSON.stringify(payload) })
    if ((await res.json()).status === 'success') {
      await fetchDashboardStats()
      if (activeTab.value === 'transactions') await fetchAllTransactions()
      if (activeTab.value === 'balances') await fetchBudgets()
      closeModal()
    }
  } catch (e) { alert('Server error.') } finally { isSubmitting.value = false }
}

const logout = () => { localStorage.removeItem('user'); router.push('/'); }
</script>