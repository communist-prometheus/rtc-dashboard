import type { RoomDetail, RoomSession, RoomStats } from '@/models/telemetry';

// Pinned default points at the production telemetry worker. Override
// at build time with PUBLIC_TELEMETRY_API_URL for staging or local.
const API_BASE =
  import.meta.env.PUBLIC_TELEMETRY_API_URL ??
  'https://telemetry.comprom.org';

const fetchJson = async <T>(path: string): Promise<T | undefined> => {
  try {
    const response = await fetch(`${API_BASE}${path}`);
    if (!response.ok) return undefined;
    return (await response.json()) as T;
  } catch {
    return undefined;
  }
};

export const fetchRoomStats = (): Promise<RoomStats | undefined> =>
  fetchJson<RoomStats>('/api/dashboard/stats');

export const fetchRecentSessions = (): Promise<readonly RoomSession[] | undefined> =>
  fetchJson<readonly RoomSession[]>('/api/dashboard/rooms?limit=10');

export const fetchRoomDetail = (roomId: string): Promise<RoomDetail | undefined> =>
  fetchJson<RoomDetail>(`/api/dashboard/rooms/${encodeURIComponent(roomId)}/detail`);
