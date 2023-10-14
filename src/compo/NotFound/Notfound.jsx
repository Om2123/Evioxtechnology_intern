import React, { useEffect } from 'react'
import { a } from '../../firebase/backUpDb'

export default function Notfound() {
  useEffect(()=>{
    const h = a()
    var link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/x-icon';
    link.href = h.href; // Replace with the path to your favicon image
    
    // Get the head element and append the link element to it
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(link);  },[])
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-4">Sorry, the page you're looking for does not exist !</p>
      <a href="/Amazon-Clone" className="text-blue-500 hover:underline">Go back to the home page</a>
    </div>
  )
}
