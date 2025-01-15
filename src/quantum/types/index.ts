// src/quantum/types/index.ts

export interface QuantumState {
    exists: boolean;
    currentTimeline: TimelineVector;
    freshnessCoefficient: number;
    observedState: string | null;
    quantumPosition: QuantumPosition;
    catStatus: 'unknown' | 'alive' | 'dead' | 'both';
  }
  
  export interface Timeline {
    dimension: number;
    probability: number;
    paradoxLevel: number;
  }
  
  export interface TimelineBranchParams {
    baseState: string;
    uncertainty: number;
    divergenceProbability: number;
    quantumConstant: number;
  }
  
  export interface EntropyParams {
    temporalMomentum: number;
    realityHarmony: number;
    quantumUncertainty: number;
  }
  
  export interface EntropyMetrics {
    efficiency: number;
    perfectEntropyRatio: number;
    quantumUncertainty: number;
    timelineResonance: number;
  }
  
  export interface IQuantumTimeline {
    paradox: number;
    quantumState?: string;
  }
  
  export interface IQuantumMatrix {
    type: string;
    // Add other matrix properties
  }
  
  export class TimelineVector {
    constructor(
      public coordinates: number[],
      public dimensions: number
    ) {}
  }
  
  export class QuantumPosition {
    constructor(
      public branches: Timeline[],
      public probability: number
    ) {}
  
    public collapse(): number[] {
      // Implementation for collapsing quantum position
      return [0, 0, 0]; // Placeholder
    }
  }
  
  export interface FoodState {
    id?: string;
    freshnessCoefficient: number;
    currentDimension: number;
    currentState: string;
    position: number[];
    lastObserved: number;
    currentTimeline?: Timeline;
  }
  
  export class TemporalParadoxError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'TemporalParadoxError';
    }
  }