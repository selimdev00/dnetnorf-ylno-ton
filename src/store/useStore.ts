import { create } from "zustand/react";
import type { SectionItem } from "@/types";

interface StoreState {
  sections: SectionItem[];
  activeSection: number;
  setActiveSection: (index: number) => void;
}

const useStore = create<StoreState>((set, get) => ({
  activeSection: 0,
  sections: [
    {
      id: 1,
      startYear: "1985",
      endYear: "1987",
      topic: "Новости",
      events: [
        {
          year: "1985",
          description:
            "19 марта — Первая версия Microsoft Windows была анонсирована.",
        },
        {
          year: "1986",
          description:
            "26 апреля — Чернобыльская авария, крупнейшая катастрофа в истории атомной энергетики.",
        },
        {
          year: "1987",
          description:
            "13 октября — Запущен первый эпизод мультсериала «Утиные истории».",
        },
      ],
    },
    {
      id: 2,
      startYear: "1989",
      endYear: "1993",
      topic: "Новости",
      events: [
        {
          year: "1989",
          description:
            "9 ноября — Падение Берлинской стены, символическое окончание Холодной войны.",
        },
        {
          year: "1990",
          description:
            "6 августа — Ирак оккупировал Кувейт, началась Персидская война.",
        },
        {
          year: "1991",
          description:
            "25 декабря — Распад СССР, Михай Горбачёв ушёл в отставку.",
        },
        {
          year: "1992",
          description:
            "3 декабря — Включён первый текстовый SMS-сообщение: «Merry Christmas».",
        },
        {
          year: "1993",
          description:
            "12 декабря — Принята новая Конституция Российской Федерации.",
        },
      ],
    },
    {
      id: 3,
      startYear: "1994",
      endYear: "2000",
      topic: "Новости",
      events: [
        {
          year: "1995",
          description: "16 июля — Амазон начал продавать первые книги онлайн.",
        },
        {
          year: "1997",
          description:
            "7 июля — Марсохот Pathfinder передал первые изображения с поверхности Марса.",
        },
        {
          year: "1999",
          description: "1 января — Введение евро как единой валюты Евросоюза.",
        },
      ],
    },
    {
      id: 4,
      startYear: "2001",
      endYear: "2008",
      topic: "Новости",
      events: [
        {
          year: "2001",
          description:
            "11 сентября — Теракт в Нью-Йорке на башнях Всемирного торгового центра.",
        },
        {
          year: "2004",
          description: "4 февраля — Основан Facebook Марком Цукербергом.",
        },
        {
          year: "2008",
          description: "2 октября — Первая версия Android выпущена Google.",
        },
      ],
    },
    {
      id: 5,
      startYear: "2009",
      endYear: "2012",
      topic: "Новости",
      events: [
        {
          year: "2009",
          description:
            "22 января — Барак Обама стал 44-м президентом США и первым афроамериканцем на этом посту.",
        },
        {
          year: "2010",
          description:
            "27 февраля — Землетрясение в Чили магнитудой 8,8 баллов.",
        },
        {
          year: "2011",
          description:
            "11 марта — Землетрясение в Японии и цунами, авария на АЭС Фукусима-1.",
        },
      ],
    },
    {
      id: 6,
      startYear: "2023",
      endYear: "2024",
      topic: "Новости",
      events: [
        {
          year: "2023",
          description:
            "13 сентября — Частное солнечное затмение, видимое в Южной Африке и части Антарктиды.",
        },
        {
          year: "2024",
          description:
            "8 апреля — Полное солнечное затмение, видимое в Северной Америке.",
        },
      ],
    },
  ],
  setActiveSection: (index: number): void => {
    if (index < 0) return;
    if (index >= get().sections.length) return;
    set({ activeSection: index });
  },
}));

export default useStore;
