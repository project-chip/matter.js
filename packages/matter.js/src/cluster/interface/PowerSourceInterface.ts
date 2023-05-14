import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { PowerSourceCluster } from "../index.js";

export type WiredFaultChangeEvent = {
    current: number[],
    previous: number[]
};

export interface PowerSourceInterface {
    status: number;
    addStatusListener(listener: (newValue: number, oldValue: number) => void): void;
    removeStatusListener(listener: (newValue: number, oldValue: number) => void): void;
    
    order: number;
    addOrderListener(listener: (newValue: number, oldValue: number) => void): void;
    removeOrderListener(listener: (newValue: number, oldValue: number) => void): void;
    
    description: string;
    addDescriptionListener(listener: (newValue: string, oldValue: string) => void): void;
    removeDescriptionListener(listener: (newValue: string, oldValue: string) => void): void;
    
    wiredAssessedInputVoltage?: number | undefined;
    addWiredAssessedInputVoltageListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeWiredAssessedInputVoltageListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    
    wiredAssessedInputFrequency?: number | undefined;
    addWiredAssessedInputFrequencyListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeWiredAssessedInputFrequencyListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    
    wiredCurrentType?: number;
    addWiredCurrentTypeListener(listener: (newValue: number, oldValue: number) => void): void;
    removeWiredCurrentTypeListener(listener: (newValue: number, oldValue: number) => void): void;
    
    wiredAssessedCurrent?: number | undefined;
    addWiredAssessedCurrentListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeWiredAssessedCurrentListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    
    wiredNominalVoltage?: number;
    addWiredNominalVoltageListener(listener: (newValue: number, oldValue: number) => void): void;
    removeWiredNominalVoltageListener(listener: (newValue: number, oldValue: number) => void): void;
    
    wiredMaximumCurrent?: number;
    addWiredMaximumCurrentListener(listener: (newValue: number, oldValue: number) => void): void;
    removeWiredMaximumCurrentListener(listener: (newValue: number, oldValue: number) => void): void;
    
    wiredPresent?: boolean;
    addWiredPresentListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeWiredPresentListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    
    activeWiredFaults?: number[];
    addActiveWiredFaultsListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeActiveWiredFaultsListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
    batVoltage?: number | undefined;
    addBatVoltageListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeBatVoltageListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    
    batPercentRemaining?: number | undefined;
    addBatPercentRemainingListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeBatPercentRemainingListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    
    batTimeRemaining?: number | undefined;
    addBatTimeRemainingListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeBatTimeRemainingListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    
    batChargeLevel?: number;
    addBatChargeLevelListener(listener: (newValue: number, oldValue: number) => void): void;
    removeBatChargeLevelListener(listener: (newValue: number, oldValue: number) => void): void;
    
    batReplacementNeeded?: boolean;
    addBatReplacementNeededListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeBatReplacementNeededListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    
    batReplaceability?: number;
    addBatReplaceabilityListener(listener: (newValue: number, oldValue: number) => void): void;
    removeBatReplaceabilityListener(listener: (newValue: number, oldValue: number) => void): void;
    
    batPresent?: boolean;
    addBatPresentListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeBatPresentListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    
    activeBatFaults?: number[];
    addActiveBatFaultsListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeActiveBatFaultsListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
    batReplacementDescription?: string;
    addBatReplacementDescriptionListener(listener: (newValue: string, oldValue: string) => void): void;
    removeBatReplacementDescriptionListener(listener: (newValue: string, oldValue: string) => void): void;
    
    batCommonDesignation?: number;
    addBatCommonDesignationListener(listener: (newValue: number, oldValue: number) => void): void;
    removeBatCommonDesignationListener(listener: (newValue: number, oldValue: number) => void): void;
    
    batANSIDesignation?: string;
    addBatANSIDesignationListener(listener: (newValue: string, oldValue: string) => void): void;
    removeBatANSIDesignationListener(listener: (newValue: string, oldValue: string) => void): void;
    
    batIECDesignation?: string;
    addBatIECDesignationListener(listener: (newValue: string, oldValue: string) => void): void;
    removeBatIECDesignationListener(listener: (newValue: string, oldValue: string) => void): void;
    
    batApprovedChemistry?: number;
    addBatApprovedChemistryListener(listener: (newValue: number, oldValue: number) => void): void;
    removeBatApprovedChemistryListener(listener: (newValue: number, oldValue: number) => void): void;
    
    batCapacity?: number;
    addBatCapacityListener(listener: (newValue: number, oldValue: number) => void): void;
    removeBatCapacityListener(listener: (newValue: number, oldValue: number) => void): void;
    
    batQuantity?: number;
    addBatQuantityListener(listener: (newValue: number, oldValue: number) => void): void;
    removeBatQuantityListener(listener: (newValue: number, oldValue: number) => void): void;
    
    batChargeState?: number;
    addBatChargeStateListener(listener: (newValue: number, oldValue: number) => void): void;
    removeBatChargeStateListener(listener: (newValue: number, oldValue: number) => void): void;
    
    batTimeToFullCharge?: number | undefined;
    addBatTimeToFullChargeListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeBatTimeToFullChargeListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    
    batFunctionalWhileCharging?: boolean;
    addBatFunctionalWhileChargingListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeBatFunctionalWhileChargingListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    
    batChargingCurrent?: number | undefined;
    addBatChargingCurrentListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeBatChargingCurrentListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    
    activeBatChargeFaults?: number[];
    addActiveBatChargeFaultsListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeActiveBatChargeFaultsListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
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
    
    addWiredFaultChangeListener(listener: (event: WiredFaultChangeEvent) => void): void;
    removeWiredFaultChangeListener(listener: (event: WiredFaultChangeEvent) => void): void;
    
    addBatFaultChangeListener(listener: (event: WiredFaultChangeEvent) => void): void;
    removeBatFaultChangeListener(listener: (event: WiredFaultChangeEvent) => void): void;
    
    addBatChargeFaultChangeListener(listener: (event: WiredFaultChangeEvent) => void): void;
    removeBatChargeFaultChangeListener(listener: (event: WiredFaultChangeEvent) => void): void;
}

export const PowerSourceClientImpl = ClientIfaceImpl<PowerSourceInterface>(PowerSourceCluster);
export const PowerSourceServerImpl = ServerIfaceImpl<PowerSourceInterface>(PowerSourceCluster);
