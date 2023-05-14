import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { GeneralDiagnosticsCluster } from "../index.js";

export type NetworkInterfaces = {
    name: string,
    isOperational: boolean,
    offPremiseServicesReachableIPv4: boolean | undefined,
    offPremiseServicesReachableIPv6: boolean | undefined,
    hardwareAddress: string,
    iPv4Addresses: string[],
    iPv6Addresse: string[],
    type: number
};

export type TestEventTriggerRequest = {
    enableKey: string,
    eventTrigger: any
};

export type HardwareFaultChangeEvent = {
    current: number[],
    previous: number[]
};

export type BootReasonEvent = {
    bootReason: number
};

export interface GeneralDiagnosticsInterface {
    networkInterfaces: NetworkInterfaces[];
    addNetworkInterfacesListener(listener: (newValue: NetworkInterfaces[], oldValue: NetworkInterfaces[]) => void): void;
    removeNetworkInterfacesListener(listener: (newValue: NetworkInterfaces[], oldValue: NetworkInterfaces[]) => void): void;
    
    rebootCount: number;
    addRebootCountListener(listener: (newValue: number, oldValue: number) => void): void;
    removeRebootCountListener(listener: (newValue: number, oldValue: number) => void): void;
    
    upTime?: any;
    addUpTimeListener(listener: (newValue: any, oldValue: any) => void): void;
    removeUpTimeListener(listener: (newValue: any, oldValue: any) => void): void;
    
    totalOperationalHours?: number;
    addTotalOperationalHoursListener(listener: (newValue: number, oldValue: number) => void): void;
    removeTotalOperationalHoursListener(listener: (newValue: number, oldValue: number) => void): void;
    
    bootReason?: number;
    addBootReasonListener(listener: (newValue: number, oldValue: number) => void): void;
    removeBootReasonListener(listener: (newValue: number, oldValue: number) => void): void;
    
    activeHardwareFaults?: number[];
    addActiveHardwareFaultsListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeActiveHardwareFaultsListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
    activeRadioFaults?: number[];
    addActiveRadioFaultsListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeActiveRadioFaultsListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
    activeNetworkFaults?: number[];
    addActiveNetworkFaultsListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    removeActiveNetworkFaultsListener(listener: (newValue: number[], oldValue: number[]) => void): void;
    
    testEventTriggersEnabled: boolean;
    addTestEventTriggersEnabledListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeTestEventTriggersEnabledListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    
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
    
    sendTestEventTrigger(request: TestEventTriggerRequest): Promise<void>;
    
    addHardwareFaultChangeListener(listener: (event: HardwareFaultChangeEvent) => void): void;
    removeHardwareFaultChangeListener(listener: (event: HardwareFaultChangeEvent) => void): void;
    
    addRadioFaultChangeListener(listener: (event: HardwareFaultChangeEvent) => void): void;
    removeRadioFaultChangeListener(listener: (event: HardwareFaultChangeEvent) => void): void;
    
    addNetworkFaultChangeListener(listener: (event: HardwareFaultChangeEvent) => void): void;
    removeNetworkFaultChangeListener(listener: (event: HardwareFaultChangeEvent) => void): void;
    
    addBootReasonListener(listener: (event: BootReasonEvent) => void): void;
    removeBootReasonListener(listener: (event: BootReasonEvent) => void): void;
}

export const GeneralDiagnosticsClientImpl = ClientIfaceImpl<GeneralDiagnosticsInterface>(GeneralDiagnosticsCluster);
export const GeneralDiagnosticsServerImpl = ServerIfaceImpl<GeneralDiagnosticsInterface>(GeneralDiagnosticsCluster);
