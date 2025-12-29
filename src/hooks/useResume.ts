import { useEffect, useState, useCallback } from "react";
import { fetchResumeDoc } from "@/services/googleDoc";
import { parseGoogleResume } from "@/utils/parseGoogleResume";
import { CVData } from "@/components/CVPreview";

const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes
const CACHE_KEY = "resume_cache_v1";

export function useResume() {
  const [data, setData] = useState<CVData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadResume = useCallback(async () => {
    try {
      setError(null);
      const doc = await fetchResumeDoc();
      const parsed = parseGoogleResume(doc);
      setData(parsed);
      localStorage.setItem(CACHE_KEY, JSON.stringify(parsed));
    } catch (e) {
      setError("Failed to load resume");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Load from cache instantly
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      setData(JSON.parse(cached));
      setLoading(false);
    }

    loadResume();

    const interval = setInterval(loadResume, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [loadResume]);

  return { data, loading, error, refresh: loadResume };
}