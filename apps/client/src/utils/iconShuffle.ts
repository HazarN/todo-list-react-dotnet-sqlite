import {
  AlarmClock,
  Bolt,
  CalendarCheck,
  Check,
  ClipboardCheck,
  ClipboardList,
  Edit3,
  FileCheck,
  ListTodo,
  Notebook,
  PencilLine,
  Star,
  StickyNote,
  Target,
} from 'lucide-react';

const todoIcons = [
  Check,
  ClipboardList,
  AlarmClock,
  CalendarCheck,
  Target,
  Notebook,
  StickyNote,
  PencilLine,
  ListTodo,
  FileCheck,
  Edit3,
  ClipboardCheck,
  Star,
  Bolt,
];

function shuffle<T>(arr: T[]) {
  const shuffled = arr.slice();

  shuffled.forEach((_, i) => {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  });

  return shuffled;
}

export const shuffledIcons = shuffle(todoIcons);
