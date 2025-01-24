import { create } from "zustand/react";
import type { SectionItem } from "@/types";

interface StoreState {
  sections: SectionItem[];
  activeSection: number;
}

const useStore = create<StoreState>((set) => ({
  activeSection: 0,
  activeEvent: 0,
  sections: [
    {
      startYear: "2023",
      endYear: "2024",
      topic: "Новости",
      events: [
        {
          year: "2023",
          description:
            "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
        },
        {
          year: "2023",
          description:
            "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
        },
        {
          year: "2023",
          description:
            "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
        },
        {
          year: "2023",
          description:
            "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
        },
        {
          year: "2023",
          description:
            "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
        },
      ],
    },
  ],
  setActiveSection: (index: number) => set({ activeSection: index }),
}));

export default useStore;
