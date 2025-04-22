// src/types/roadmap.ts

// roadmap.ts
export enum RoadmapStatus {
  NotStarted = 'not-started',
  PlannedNotStarted = 'planned-not-started',
  InProgress = 'in-progress',
  Done = 'done',
}

export interface RoadmapStep {
  id: number
  title: string
  description: string
  status: RoadmapStatus
}
