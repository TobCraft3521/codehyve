"use client"

import ConfirmModal from "@/components/modals/confirm-modal"
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react"

type ConfirmModalContextType = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const ConfirmModalContext = createContext<ConfirmModalContextType>({
  open: false,
  setOpen: () => {},
})

export const useConfirmModal = () => {
  return useContext(ConfirmModalContext)
}

export const ConfirmModalProvider = () => {
  const [open, setOpen] = useState(false)

  return (
    <ConfirmModalContext.Provider value={{ open, setOpen }}>
      <ConfirmModal />
    </ConfirmModalContext.Provider>
  )
}
