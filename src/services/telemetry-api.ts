import type { RoomDetail, RoomSession, RoomStats } from '@/models/telemetry';

const API_BASE = import.meta.env.PUBLIC_TELEMETRY_API_URL ?? 'http://localhost:4020/api';

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
  fetchJson<RoomStats>('/rooms/stats');

export const fetchRecentSessions = (): Promise<readonly RoomSession[] | undefined> =>
  fetchJson<readonly RoomSession[]>('/rooms/sessions?limit=10');

export const fetchRoomDetail = (roomId: string): Promise<RoomDetail | undefined> =>
  fetchJson<RoomDetail>(`/rooms/${encodeURIComponent(roomId)}`);
