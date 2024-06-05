import { create } from "zustand"

interface AppStateStore {
  tab: string
  setTab: (tab: string) => void
}

export const useAppState = create<AppStateStore>((set) => ({
  tab: "",
  setTab: (tab: string) => set({ tab }),
}))
