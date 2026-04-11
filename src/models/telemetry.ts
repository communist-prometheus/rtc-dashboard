export interface RoomStats {
  readonly totalRooms: number;
  readonly activeRooms: number;
  readonly totalConnections: number;
}

export interface RoomSession {
  readonly id: string;
  readonly roomId: string;
  readonly createdAt: string;
  readonly closedAt: string | undefined;
  readonly participantCount: number;
}

export interface ConnectionEvent {
  readonly userId: string;
  readonly displayName: string;
  readonly joinedAt: string;
  readonly leftAt: string | undefined;
}

export interface IceEvent {
  readonly timestamp: string;
  readonly type: string;
  readonly candidateType: string;
  readonly protocol: string;
  readonly address: string;
}

export interface QualityMetric {
  readonly timestamp: string;
  readonly bitrate: number;
  readonly packetLoss: number;
  readonly roundTripTime: number;
  readonly jitter: number;
}

export interface RoomDetail {
  readonly roomId: string;
  readonly createdAt: string;
  readonly closedAt: string | undefined;
  readonly connections: readonly ConnectionEvent[];
  readonly iceEvents: readonly IceEvent[];
  readonly qualityMetrics: readonly QualityMetric[];
}
