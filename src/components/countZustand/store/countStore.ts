import { create } from "zustand";
import {
  createJSONStorage,
  persist,
  subscribeWithSelector,
} from "zustand/middleware";

type CountStore = {
  count: number;
  increment: (amount: number, amount2: number) => void;
  decrement: () => void;
  reset: () => void;
};
// use***Store
export const useCountStore = create<CountStore>()(
  subscribeWithSelector(
    persist(
      (set) => ({
        count: 0,
        decrement: () => set((state) => ({ count: state.count - 1 })),
        increment: (amount: number, amount2: number) =>
          set((state) => ({ count: state.count + amount + amount2 })),
        // 비동기로 구현 방법
        // increment: async (amount: number, amount2: number) => {
        //   await new Promise((resolve) => setTimeout(resolve, 1000));
        //   set((state) => ({ count: state.count + amount + amount2 }));
        // },
        reset: () => set({ count: 0 }),
      }),
      {
        name: "count-storage",
        // localStorage가 아닌 세션 스토리지에 저장하고 싶을경우
        //storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
