import { create } from "zustand";
import type { User } from "@/types/auth";

interface AuthStore {
  user: User | null;
  token: string | null;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  setAuth: (user, token) => set(() => ({
    user,
    token,
    isAuthenticated: !!token,
  })),

  logout: () => set(() => ({
    user: null,
    token: null,
    isAuthenticated: false,
  })),
}));