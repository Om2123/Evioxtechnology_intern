import React from 'react'

export default function Notfound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-4">Sorry, the page you're looking for does not exist.</p>
      <a href="/Amazon-Clone" className="text-blue-500 hover:underline">Go back to the home page</a>
    </div>
  )
}
