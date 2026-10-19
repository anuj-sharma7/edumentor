'use client';

import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'edumentor-study-progress-v1';
const EVENT = 'edumentor-study-progress';

export type TopicProgress = {
  /** Question indexes answered correctly on the first try. */
  correct: number[];
  /** Question indexes attempted (right or wrong). */
  attempted: number[];
  /** Theory marked as read. */
  read?: boolean;
};

type ProgressState = {
  /** Keyed by `${chapterSlug}::${topicName}`. */
  topics: Record<string, TopicProgress>;
  bookmarks: string[];
};

const empty: ProgressState = { topics: {}, bookmarks: [] };

function load(): ProgressState {
  if (typeof window === 'undefined') return empty;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? { ...empty, ...JSON.parse(raw) } : empty;
  } catch {
    return empty;
  }
}

function save(state: ProgressState) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  // Let other mounted hooks (e.g. the hub's progress bars) refresh.
  window.dispatchEvent(new Event(EVENT));
}

export const topicKey = (chapterSlug: string, topic: string) => `${chapterSlug}::${topic}`;

/** A topic counts as cleared once all its practice questions are answered correctly. */
export function isTopicCleared(p: TopicProgress | undefined, questionCount: number) {
  return !!p && p.correct.length >= questionCount;
}

/** Progress of topics and bookmarks, persisted in localStorage. */
export function useStudyProgress() {
  const [state, setState] = useState<ProgressState>(empty);

  useEffect(() => {
    setState(load());
    const refresh = () => setState(load());
    window.addEventListener(EVENT, refresh);
    window.addEventListener('storage', refresh);
    return () => {
      window.removeEventListener(EVENT, refresh);
      window.removeEventListener('storage', refresh);
    };
  }, []);

  const update = useCallback((fn: (s: ProgressState) => ProgressState) => {
    const next = fn(load());
    save(next);
    setState(next);
  }, []);

  const recordAnswer = useCallback(
    (key: string, index: number, correct: boolean) =>
      update(s => {
        const prev = s.topics[key] ?? { correct: [], attempted: [] };
        const attempted = prev.attempted.includes(index) ? prev.attempted : [...prev.attempted, index];
        const correctList =
          correct && !prev.correct.includes(index) ? [...prev.correct, index] : prev.correct;
        return { ...s, topics: { ...s.topics, [key]: { ...prev, attempted, correct: correctList } } };
      }),
    [update]
  );

  const markRead = useCallback(
    (key: string) =>
      update(s => {
        const prev = s.topics[key] ?? { correct: [], attempted: [] };
        return { ...s, topics: { ...s.topics, [key]: { ...prev, read: true } } };
      }),
    [update]
  );

  const resetTopic = useCallback(
    (key: string) =>
      update(s => {
        const topics = { ...s.topics };
        delete topics[key];
        return { ...s, topics };
      }),
    [update]
  );

  const toggleBookmark = useCallback(
    (key: string) =>
      update(s => ({
        ...s,
        bookmarks: s.bookmarks.includes(key)
          ? s.bookmarks.filter(b => b !== key)
          : [...s.bookmarks, key],
      })),
    [update]
  );

  return { state, recordAnswer, markRead, resetTopic, toggleBookmark };
}
