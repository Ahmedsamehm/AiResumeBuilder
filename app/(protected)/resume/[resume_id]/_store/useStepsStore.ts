import { create } from "zustand";

interface StepsStore {
  steps: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}
export const useStepsStore = create<StepsStore>((set) => ({
  steps: 0,
  increment: () => set((state) => ({ steps: state.steps + 1 })),
  decrement: () => set((state) => ({ steps: state.steps - 1 })),
  reset: () => set({ steps: 0 }),
}));
