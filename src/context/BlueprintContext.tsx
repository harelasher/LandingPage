"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "blueprint-mode";

type BlueprintContextValue = {
  isBlueprintMode: boolean;
  toggleBlueprintMode: () => void;
  setBlueprintMode: (value: boolean) => void;
};

const BlueprintContext = createContext<BlueprintContextValue | null>(null);

export function BlueprintProvider({ children }: { children: React.ReactNode }) {
  const [isBlueprintMode, setIsBlueprintMode] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === "true") setIsBlueprintMode(true);
    setHydrated(true);
  }, []);

  const setBlueprintMode = useCallback((value: boolean) => {
    setIsBlueprintMode(value);
    sessionStorage.setItem(STORAGE_KEY, String(value));
  }, []);

  const toggleBlueprintMode = useCallback(() => {
    setIsBlueprintMode((prev) => {
      const next = !prev;
      sessionStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    sessionStorage.setItem(STORAGE_KEY, String(isBlueprintMode));
  }, [hydrated, isBlueprintMode]);

  const value = useMemo(
    () => ({ isBlueprintMode, toggleBlueprintMode, setBlueprintMode }),
    [isBlueprintMode, toggleBlueprintMode, setBlueprintMode],
  );

  return (
    <BlueprintContext.Provider value={value}>{children}</BlueprintContext.Provider>
  );
}

export function useBlueprint() {
  const ctx = useContext(BlueprintContext);
  if (!ctx) {
    throw new Error("useBlueprint must be used within BlueprintProvider");
  }
  return ctx;
}
