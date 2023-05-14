import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { PressureMeasurementCluster } from "../index.js";

export interface PressureMeasurementInterface {
    measuredValue: number | undefined;
    addMeasuredValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeMeasuredValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    
    minMeasuredValue: number | undefined;
    addMinMeasuredValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeMinMeasuredValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    
    maxMeasuredValue: number | undefined;
    addMaxMeasuredValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeMaxMeasuredValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    
    tolerance?: number;
    addToleranceListener(listener: (newValue: number, oldValue: number) => void): void;
    removeToleranceListener(listener: (newValue: number, oldValue: number) => void): void;
    
    scaledValue?: number | undefined;
    addScaledValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeScaledValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    
    minScaledValue?: number | undefined;
    addMinScaledValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeMinScaledValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    
    maxScaledValue?: number | undefined;
    addMaxScaledValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeMaxScaledValueListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    
    scaledTolerance?: number;
    addScaledToleranceListener(listener: (newValue: number, oldValue: number) => void): void;
    removeScaledToleranceListener(listener: (newValue: number, oldValue: number) => void): void;
    
    scale?: number;
    addScaleListener(listener: (newValue: number, oldValue: number) => void): void;
    removeScaleListener(listener: (newValue: number, oldValue: number) => void): void;
    
    clusterRevision: number;
    addClusterRevisionListener(listener: (newValue: number, oldValue: number) => void): void;
    removeClusterRevisionListener(listener: (newValue: number, oldValue: number) => void): void;
    
    featureMap: number;
    addFeatureMapListener(listener: (newValue: number, oldValue: number) => void): void;
    removeFeatureMapListener(listener: (newValue: number, oldValue: number) => void): void;
    
    attributeList: number[];
    addAttributeListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeAttributeListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
    eventList: number[];
    addEventListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeEventListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
    acceptedCommandList: number[];
    addAcceptedCommandListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeAcceptedCommandListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
    generatedCommandList: number[];
    addGeneratedCommandListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeGeneratedCommandListListener(listener: (newValue: number[], oldValue: number[]) => void): void;
}

export const PressureMeasurementClientImpl = ClientIfaceImpl<PressureMeasurementInterface>(PressureMeasurementCluster);
export const PressureMeasurementServerImpl = ServerIfaceImpl<PressureMeasurementInterface>(PressureMeasurementCluster);
