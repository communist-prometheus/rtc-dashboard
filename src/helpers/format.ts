export const formatDateTime = (iso: string): string => {
  const date = new Date(iso);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(date);
};

export const formatDuration = (startIso: string, endIso: string | undefined): string => {
  const start = new Date(startIso).getTime();
  const end = endIso ? new Date(endIso).getTime() : Date.now();
  const diffMs = end - start;

  const seconds = Math.floor(diffMs / 1000) % 60;
  const minutes = Math.floor(diffMs / 60000) % 60;
  const hours = Math.floor(diffMs / 3600000);

  if (hours > 0) return `${String(hours)}h ${String(minutes)}m`;
  if (minutes > 0) return `${String(minutes)}m ${String(seconds)}s`;
  return `${String(seconds)}s`;
};

export const formatNumber = (value: number): string =>
  new Intl.NumberFormat('en-US').format(value);
