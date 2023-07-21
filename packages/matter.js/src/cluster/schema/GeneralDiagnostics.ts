/**
 * @license
 * Copyright 2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */


import { Command, Attribute, Cluster, Event, EventPriority, OptionalAttribute, OptionalEvent, TlvNoResponse } from "../Cluster.js";
import { TlvField, TlvObject } from "../../tlv/TlvObject.js";
import { TlvString, TlvString32max } from "../../tlv/TlvString.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvEnum, TlvUInt16, TlvUInt32, TlvUInt64 } from "../../tlv/TlvNumber.js";
import { MatterCoreSpecificationV1_0 } from "../../spec/Specifications.js";

/** @see {@link MatterCoreSpecificationV1_0} § 11.11.6.1 */
export const enum HardwareFault {
    Unspecified = 0x00,
    Radio = 0x01,
    Sensor = 0x02,
    ResettableOverTemp = 0x03,
    NonResettableOverTemp = 0x04,
    PowerSource = 0x05,
    VisualDisplayFault = 0x06,
    AudioOutputFault = 0x07,
    UserInterfaceFault = 0x08,
    NonVolatileMemoryError = 0x09,
    TamperDetected = 0x0A,
}

/** @see {@link MatterCoreSpecificationV1_0} § 11.11.6.2 */
export const enum RadioFault {
    Unspecified = 0x00,
    WiFiFault = 0x01,
    CellularFault = 0x02,
    ThreadFault = 0x03,
    NFCFault = 0x04,
    BLEFault = 0x05,
    EthernetFault = 0x06,
}

/** @see {@link MatterCoreSpecificationV1_0} § 11.11.6.3 */
export const enum NetworkFault {
    Unspecified = 0x00,
    HardwareFailure = 0x01,
    NetworkJammed = 0x02,
    ConnectionFailed = 0x03,
}

/** @see {@link MatterCoreSpecificationV1_0} § 11.11.6.4 */
export const enum InterfaceType {
    Unspecified = 0x00,
    WiFi = 0x01,
    Ethernet = 0x02,
    Cellular = 0x03,
    Thread = 0x04,
}

/** @see {@link MatterCoreSpecificationV1_0} § 11.11.7.5 */
export const enum BootReason {
    Unspecified = 0x00,
    PowerOnReboot = 0x01,
    BrownOutReset = 0x02,
    SoftwareWatchdogReset = 0x03,
    HardwareWatchdogReset = 0x04,
    SoftwareUpdateCompleted = 0x05,
    SoftwareReset = 0x06,
}

/**
 * Describes a network interface supported by the Node, as provided in the NetworkInterfaces attribute.
 * @see {@link MatterCoreSpecificationV1_0} § 11.11.6.5
 */
const TlvNetworkInterface = TlvObject({
    /** Human-readable (displayable) name for the network interface. */
    name: TlvField(0, TlvString32max),

    /** Indicates if the Node is currently advertising itself operationally on this network interface. */
    isOperational: TlvField(1, TlvBoolean),

    /** Indicates whether the Node is currently able to reach off-premise services it uses by utilizing IPv4. */
    offPremiseServicesReachableIPv4: TlvField(2, TlvNullable(TlvBoolean)), /* default null */

    /** Indicates whether the Node is currently able to reach off-premise services it uses by utilizing IPv6. */
    offPremiseServicesReachableIPv6: TlvField(3, TlvNullable(TlvBoolean)),  /* default null */

    /**
     * Contains the current link-layer address for a 802.3 or IEEE 802.11-2020 network interface and
     * contains the current extended MAC address for a 802.15.4 interface.
     */
    hardwareAddress: TlvField(4, TlvString.bound({ maxLength: 8 })),

    /** List of the IPv4 addresses that are currently assigned to the network interface. */
    iPv4Addresses: TlvField(5, TlvArray(TlvString.bound({ maxLength: 4 }))),

    /** List of the unicast IPv6 addresses that are currently assigned to the network interface. */
    iPv6Addresses: TlvField(6, TlvArray(TlvString.bound({ maxLength: 8 }))),

    /** Indicates the type of the interface. */
    type: TlvField(7, TlvEnum<InterfaceType>()),
});

/**
 * Indicates a change in the set of hardware faults currently detected by the Node.
 * @see {@link MatterCoreSpecificationV1_0} §11.11.9.1
 */
const TlvHardwareFaultChangeEventData = {
    current: TlvField(0, TlvArray(TlvEnum<HardwareFault>(), { maxLength: 11 })),
    previous: TlvField(1, TlvArray(TlvEnum<HardwareFault>(), { maxLength: 11 })),
};

/**
 * Indicates a change in the set of radio faults currently detected by the Node.
 * @see {@link MatterCoreSpecificationV1_0} § 11.11.9.2
 */
const TlvRadioFaultChangeEventData = {
    current: TlvField(0, TlvArray(TlvEnum<HardwareFault>(), { maxLength: 7 })),
    previous: TlvField(1, TlvArray(TlvEnum<HardwareFault>(), { maxLength: 7 })),
};

/**
 * Indicates a change in the set of network faults currently detected by the Node.
 * @see {@link MatterCoreSpecificationV1_0} § 11.11.9.3
 */
const TlvNetworkFaultChangeEventData = {
    current: TlvField(0, TlvArray(TlvEnum<HardwareFault>(), { maxLength: 4 })),
    previous: TlvField(1, TlvArray(TlvEnum<HardwareFault>(), { maxLength: 4 })),
};

/**
 * Indicates the reason that caused the device to start-up.
 * @see {@link MatterCoreSpecificationV1_0} § 11.11.7.4
 */
const TlvBootReasonEvent = {
    bootReason: TlvField(0, TlvEnum<BootReason>()),
};

/**
 * Provides a means for certification tests to trigger some test-plan-specific events.
 * @see {@link MatterCoreSpecificationV1_0} § 11.11.8.1
 */
const TlvTestEventTriggerRequest = TlvObject({
    enableKey: TlvField(0, TlvString.bound({ length: 16 })),
    eventTrigger: TlvField(0, TlvUInt64)
});

/**
 * The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire
 * standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrator in
 * diagnosing potential problems. The General Diagnostics Cluster attempts to centralize all metrics
 * that are broadly relevant to the majority of Nodes.
 * @see {@link MatterCoreSpecificationV1_0} § 11.11
 */
export const GeneralDiagnosticsClusterSchema = Cluster({
    id: 0x033,
    name: "GeneralDiagnostics",
    revision: 1,

    /** @see {@link MatterCoreSpecificationV1_0} § 11.11.7 */
    attributes: {

        /** List of NetworkInterface structs. */
        networkInterfaces: Attribute(0, TlvArray(TlvNetworkInterface, { maxLength: 8 })),

        /** Indicates a best-effort count of the number of times the Node has rebooted. */
        rebootCount: Attribute(1, TlvUInt16, { default: 0, persistent: true }),

        /** Indicates a best-effort assessment of the length of time, in seconds, since the Node’s last reboot. */
        upTime: OptionalAttribute(2, TlvUInt64, { default: 0 }),

        /** Indicates a best-effort attempt at time in hours the Node has been operational. */
        totalOperationalHours: OptionalAttribute(3, TlvUInt32, { default: 0, persistent: true }),

        /** Indicates the reason for the Node’s most recent boot. */
        bootReason: OptionalAttribute(4, TlvEnum<BootReason>()),

        /** Indicates the set of faults currently detected by the Node. */
        activeHardwareFaults: OptionalAttribute(5, TlvArray(TlvEnum<HardwareFault>(), { maxLength: 11 })),

        /** Indicates the set of faults currently detected by the Node. */
        activeRadioFaults: OptionalAttribute(6, TlvArray(TlvEnum<RadioFault>(), { maxLength: 7 })),

        /** Indicates the set of faults currently detected by the Node. */
        activeNetworkFaults: OptionalAttribute(7, TlvArray(TlvEnum<NetworkFault>(), { maxLength: 4 })),

        /** Indicates whether the Node has any TestEventTrigger configured. */
        testEventTriggersEnabled: Attribute(8, TlvBoolean),
    },

    /** @see {@link MatterCoreSpecificationV1_0} § 11.11.8 */
    commands: {
        /** Provide a means for certification tests to trigger some test-plan-specific events. */
        testEventTrigger: Command(0, TlvTestEventTriggerRequest, 0, TlvNoResponse),
    },

    /** @see {@link MatterCoreSpecificationV1_0} § 11.11.9 */
    events: {
        /** Indicates a change in the set of hardware faults currently detected by the Node. */
        hardwareFaultChange: OptionalEvent(0, EventPriority.Critical, TlvObject(TlvHardwareFaultChangeEventData)),

        /** Indicates a change in the set of radio faults currently detected by the Node. */
        radioFaultChange: OptionalEvent(1, EventPriority.Critical, TlvObject(TlvRadioFaultChangeEventData)),

        /** Indicates a change in the set of network faults currently detected by the Node. */
        networkFaultChange: OptionalEvent(2, EventPriority.Critical, TlvObject(TlvNetworkFaultChangeEventData)),

        /** Indicate the reason that caused the device to start-up. */
        bootReason: Event(3, EventPriority.Critical, TlvObject(TlvBootReasonEvent)),
    }
});
