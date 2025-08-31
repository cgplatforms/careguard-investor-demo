import React, { useState } from 'react'

function Badge({children}){
  return <span className="bg-blue-50 text-blue-700 ring-1 ring-blue-200 rounded-full px-2 py-0.5 text-xs">{children}</span>
}

export default function App(){
  const [tab,setTab]=useState('Shop Plans')
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-gray-900">
      <header className="bg-white border-b px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-semibold">CareGuard — Investor Demo</h1>
        <nav className="flex gap-2">
          {['Shop Plans','Agent Dashboard','Member Portal','Admin Overview'].map(t=>(
            <button key={t} onClick={()=>setTab(t)} className={\`px-3 py-1 rounded-full text-sm ring-1 \${tab===t?'bg-blue-600 text-white ring-blue-600':'bg-white text-blue-700 ring-blue-600'}\`}>{t}</button>
          ))}
        </nav>
      </header>
      <main className="p-6 max-w-4xl mx-auto">
        {tab==='Shop Plans' && <div>
          <h2 className="text-xl font-bold mb-2">Quick Shopper</h2>
          <p className="text-gray-600 mb-4">Demo flow for Marketplace and Off-Marketplace quoting.</p>
          <div className="rounded-xl border p-4">Example Plan Card <Badge>Bronze</Badge></div>
        </div>}
        {tab!=='Shop Plans' && <div className="rounded-xl border p-6">Placeholder for {tab}</div>}
      </main>
      <footer className="text-xs text-gray-500 text-center py-4">© {new Date().getFullYear()} CareGuard Platform Technologies — Demo Prototype</footer>
    </div>
  )
}
