'use client'

// Packages
import { useEffect, useState } from 'react'

// Custom Imports
import AuthModal from '@/components/AuthModal'
import UploadModal from '@/components/UploadModal'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  )
}
export default ModalProvider
