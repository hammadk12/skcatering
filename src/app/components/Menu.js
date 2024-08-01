"use client"

import React from 'react'
import { FiMenu } from 'react-icons/fi'
  
function openMenu() {
    alert('hi')
}

export default function Menu() {
    return  <button onClick={() => openMenu()}><FiMenu size={30}/></button>
}