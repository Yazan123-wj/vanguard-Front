'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';

type LoaderContextValue = {
  isLoading: boolean;
  progress: number;
  skipFullLoader: boolean;
  setProgress: (value: number) => void;
  complete: () => void;
  dispatchHandoff: () => void;
  registerOnComplete: (callback: () => void) => () => void;
};

const LoaderContext = createContext<LoaderContextValue | null>(null);

export function useLoader() {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error('useLoader must be used within LoaderProvider');
  }
  return context;
}

type LoaderProviderProps = {
  children: ReactNode;
};

export function LoaderProvider({ children }: LoaderProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const listenersRef = useRef(new Set<() => void>());
  const handoffFiredRef = useRef(false);

  // Full loader on every load / refresh; always start at the top.
  useEffect(() => {
    try {
      sessionStorage.removeItem('vanguard-loader-seen');
    } catch {
      // ignore
    }

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const registerOnComplete = useCallback((callback: () => void) => {
    if (handoffFiredRef.current) {
      callback();
      return () => {};
    }

    listenersRef.current.add(callback);
    return () => {
      listenersRef.current.delete(callback);
    };
  }, []);

  const dispatchHandoff = useCallback(() => {
    if (handoffFiredRef.current) return;
    handoffFiredRef.current = true;
    listenersRef.current.forEach((callback) => callback());
    listenersRef.current.clear();
  }, []);

  const complete = useCallback(() => {
    dispatchHandoff();
    setIsLoading(false);
    window.scrollTo(0, 0);
  }, [dispatchHandoff]);

  const value = useMemo(
    () => ({
      isLoading,
      progress,
      skipFullLoader: false,
      setProgress,
      complete,
      dispatchHandoff,
      registerOnComplete,
    }),
    [complete, dispatchHandoff, isLoading, progress, registerOnComplete],
  );

  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
}
