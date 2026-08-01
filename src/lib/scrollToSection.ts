export const SCROLL_TO_KEY = 'vanguard-scroll-to';

export function rememberScrollTo(sectionId: string) {
  try {
    sessionStorage.setItem(SCROLL_TO_KEY, sectionId);
  } catch {
    // ignore
  }
}

export function consumeScrollTo(): string | null {
  try {
    const value = sessionStorage.getItem(SCROLL_TO_KEY);
    if (value) sessionStorage.removeItem(SCROLL_TO_KEY);
    return value;
  } catch {
    return null;
  }
}
