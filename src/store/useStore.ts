import {create} from "zustand";

interface Count {
    amount: number;
    actions: Actions;
}

interface Actions {
    increment: () => void;
    decrement: () => void;
}

export const useStore = create<Count>((set) => ({
    amount: 0,
    actions: {
        increment: () => set((state) => ({amount: state.amount + 1})),
        decrement: () => set((state) => ({amount: state.amount - 1})),
    }
}))

export const useAmount = () => useStore((state) => state.amount)
export const useAmountActions = () => useStore((state) => state.actions)