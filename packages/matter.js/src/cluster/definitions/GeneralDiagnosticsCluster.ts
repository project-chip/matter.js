/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    Cluster as CreateCluster,
    Attribute,
    OptionalAttribute,
    Command,
    TlvNoResponse,
    AccessLevel,
    OptionalEvent,
    EventPriority,
    Event
} from "../../cluster/Cluster.js";
import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvEnum, TlvUInt16, TlvUInt64, TlvUInt32 } from "../../tlv/TlvNumber.js";

export namespace GeneralDiagnostics {
    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.4
     */
    export const enum InterfaceType {
        /**
         * Indicates an interface of an unspecified type.
         */
        Unspecified = 0,

        /**
         * Indicates a Wi-Fi interface.
         */
        WiFi = 1,

        /**
         * Indicates a Ethernet interface.
         */
        Ethernet = 2,

        /**
         * Indicates a Cellular interface.
         */
        Cellular = 3,

        /**
         * Indicates a Thread interface.
         */
        Thread = 4
    }

    /**
     * This structure describes a network interface supported by the Node, as provided in the NetworkInterfaces
     * attribute.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.6
     */
    export const TlvNetworkInterface = TlvObject({
        /**
         * This field shall indicate a human-readable (displayable) name for the network interface, that is different
         * from all other interfaces.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.6.1
         */
        name: TlvField(0, TlvString.bound({ maxLength: 32 })),

        /**
         * This field shall indicate if the Node is currently advertising itself operationally on this network
         * interface and is capable of successfully receiving incoming traffic from other Nodes.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.6.2
         */
        isOperational: TlvField(1, TlvBoolean),

        /**
         * This field shall indicate whether the Node is currently able to reach off-premise services it uses by
         * utilizing IPv4. The value shall be null if the Node does not use such services or does not know whether it
         * can reach them.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.6.3
         */
        offPremiseServicesReachableIPv4: TlvField(2, TlvNullable(TlvBoolean)),

        /**
         * This field shall indicate whether the Node is currently able to reach off-premise services it uses by
         * utilizing IPv6. The value shall be null if the Node does not use such services or does not know whether it
         * can reach them.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.6.4
         */
        offPremiseServicesReachableIPv6: TlvField(3, TlvNullable(TlvBoolean)),

        /**
         * This field shall contain the current link-layer address for a 802.3 or IEEE 802.11-2020 network interface
         * and contain the current extended MAC address for a 802.15.4 interface. The byte order of the octstr shall be
         * in wire byte order. For addresses values less than 64 bits, the first two bytes shall be zero.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.6.5
         */
        hardwareAddress: TlvField(4, TlvByteString.bound({ minLength: 6, maxLength: 8 })),

        /**
         * This field shall provide a list of the IPv4 addresses that are currently assigned to the network interface.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.6.6
         */
        iPv4Addresses: TlvField(5, TlvArray(TlvByteString.bound({ length: 4 }), { maxLength: 4 })),

        /**
         * This field shall provide a list of the unicast IPv6 addresses that are currently assigned to the network
         * interface. This list shall include the Node’s link-local address and SHOULD include any assigned GUA and ULA
         * addresses. This list shall NOT include any multicast group addresses to which the Node is subscribed.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.6.7
         */
        iPv6Addresses: TlvField(6, TlvArray(TlvByteString.bound({ length: 16 }), { maxLength: 8 })),

        /**
         * This field shall indicate the type of the interface using the InterfaceTypeEnum.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.6.8
         */
        type: TlvField(7, TlvEnum<InterfaceType>())
    });

    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.5
     */
    export const enum BootReason {
        /**
         * The Node is unable to identify the Power-On reason as one of the other provided enumeration values.
         */
        Unspecified = 0,

        /**
         * The Node has booted as the result of physical interaction with the device resulting in a reboot.
         */
        PowerOnReboot = 1,

        /**
         * The Node has rebooted as the result of a brown-out of the Node’s power supply.
         */
        BrownOutReset = 2,

        /**
         * The Node has rebooted as the result of a software watchdog timer.
         */
        SoftwareWatchdogReset = 3,

        /**
         * The Node has rebooted as the result of a hardware watchdog timer.
         */
        HardwareWatchdogReset = 4,

        /**
         * The Node has rebooted as the result of a completed software update.
         */
        SoftwareUpdateCompleted = 5,

        /**
         * The Node has rebooted as the result of a software initiated reboot.
         */
        SoftwareReset = 6
    }

    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.1
     */
    export const enum HardwareFault {
        /**
         * The Node has encountered an unspecified fault.
         */
        Unspecified = 0,

        /**
         * The Node has encountered a fault with at least one of its radios.
         */
        Radio = 1,

        /**
         * The Node has encountered a fault with at least one of its sensors.
         */
        Sensor = 2,

        /**
         * The Node has encountered an over-temperature fault that is resettable.
         */
        ResettableOverTemp = 3,

        /**
         * The Node has encountered an over-temperature fault that is not resettable.
         */
        NonResettableOverTemp = 4,

        /**
         * The Node has encountered a fault with at least one of its power sources.
         */
        PowerSource = 5,

        /**
         * The Node has encountered a fault with at least one of its visual displays.
         */
        VisualDisplayFault = 6,

        /**
         * The Node has encountered a fault with at least one of its audio outputs.
         */
        AudioOutputFault = 7,

        /**
         * The Node has encountered a fault with at least one of its user interfaces.
         */
        UserInterfaceFault = 8,

        /**
         * The Node has encountered a fault with its non-volatile memory.
         */
        NonVolatileMemoryError = 9,

        /**
         * The Node has encountered disallowed physical tampering.
         */
        TamperDetected = 10
    }

    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.2
     */
    export const enum RadioFault {
        /**
         * The Node has encountered an unspecified radio fault.
         */
        Unspecified = 0,

        /**
         * The Node has encountered a fault with its Wi-Fi radio.
         */
        WiFiFault = 1,

        /**
         * The Node has encountered a fault with its cellular radio.
         */
        CellularFault = 2,

        /**
         * The Node has encountered a fault with its802.15.4 radio.
         */
        ThreadFault = 3,

        /**
         * The Node has encountered a fault with its NFC radio.
         */
        NfcFault = 4,

        /**
         * The Node has encountered a fault with its BLE radio.
         */
        BleFault = 5,

        /**
         * The Node has encountered a fault with its Ethernet controller.
         */
        EthernetFault = 6
    }

    /**
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.4.3
     */
    export const enum NetworkFault {
        /**
         * The Node has encountered an unspecified fault.
         */
        Unspecified = 0,

        /**
         * The Node has encountered a network fault as a result of a hardware failure.
         */
        HardwareFailure = 1,

        /**
         * The Node has encountered a network fault as a result of a jammed network.
         */
        NetworkJammed = 2,

        /**
         * The Node has encountered a network fault as a result of a failure to establish a connection.
         */
        ConnectionFailed = 3
    }

    /**
     * Input to the GeneralDiagnostics testEventTrigger command
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.7.1
     */
    export const TlvTestEventTriggerRequest = TlvObject({
        /**
         * The EnableKey is a 128 bit value provided by the client in this command, which needs to match a value chosen
         * by the manufacturer and configured on the server using manufacturer-specific means, such as
         * pre-provisioning. The value of all zeroes is reserved to indicate that no EnableKey is set. Therefore, if
         * the EnableKey field is received with all zeroes, this command shall FAIL with a response status of
         * CONSTRAINT_ERROR.
         *
         * The EnableKey SHOULD be unique per exact set of devices going to a certification test.
         *
         * Devices not targeted towards going to a certification test event shall NOT have a non-zero EnableKey value
         * configured, so that only devices in test environments are responsive to this command.
         *
         * In order to prevent unwittingly actuating a particular trigger, this command shall respond with the
         * cluster-specific error status code EnableKeyMismatch if the EnableKey field does not match the a-priori
         * value configured on the device.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.11.7.1.1
         */
        enableKey: TlvField(0, TlvByteString.bound({ length: 16 })),

        /**
         * This field shall indicate the test or test mode which the client wants to trigger.
         *
         * The expected side-effects of EventTrigger values are out of scope of this specification and will be
         * described within appropriate certification test literature provided to manufacturers by the Connectivity
         * Standards Alliance, in conjunction with certification test cases documentation.
         *
         * Values of EventTrigger in the range 0xFFFF_FFFF_0000_0000 through 0xFFFF_FFFF_FFFF_FFFF are reserved for
         * testing use by manufacturers and will not appear in CSA certification test literature.
         *
         * If the value of EventTrigger received is not supported by the receiving Node, this command shall fail with a
         * status code of INVALID_COMMAND.
         *
         * Otherwise, if the EnableKey value matches the configured internal value for a particular Node, and the
         * EventTrigger value matches a supported test event trigger value, the command shall succeed and execute the
         * expected trigger action.
         *
         * If no specific test event triggers are required to be supported by certification test requirements for the
         * features that a given product will be certified against, this command may always fail with the
         * INVALID_COMMAND status, equivalent to the situation of receiving an unknown EventTrigger, for all possible
         * EventTrigger values.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.11.7.1.2
         */
        eventTrigger: TlvField(1, TlvUInt64)
    });

    /**
     * Body of the GeneralDiagnostics hardwareFaultChange event
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.1
     */
    export const TlvHardwareFaultChangeEvent = TlvObject({
        /**
         * This field shall represent the set of faults currently detected, as per Section 11.11.4.1,
         * “HardwareFaultEnum”.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.1.1
         */
        current: TlvField(0, TlvArray(TlvEnum<HardwareFault>(), { maxLength: 11 })),

        /**
         * This field shall represent the set of faults detected prior to this change event, as per Section
         *
         * 11.11.4.1, “HardwareFaultEnum”.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.1.2
         */
        previous: TlvField(1, TlvArray(TlvEnum<HardwareFault>(), { maxLength: 11 }))
    });

    /**
     * Body of the GeneralDiagnostics radioFaultChange event
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.2
     */
    export const TlvRadioFaultChangeEvent = TlvObject({
        current: TlvField(0, TlvArray(TlvEnum<RadioFault>(), { maxLength: 7 })),
        previous: TlvField(1, TlvArray(TlvEnum<RadioFault>(), { maxLength: 7 }))
    });

    /**
     * Body of the GeneralDiagnostics networkFaultChange event
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.3
     */
    export const TlvNetworkFaultChangeEvent = TlvObject({
        current: TlvField(0, TlvArray(TlvEnum<NetworkFault>(), { maxLength: 4 })),
        previous: TlvField(1, TlvArray(TlvEnum<NetworkFault>(), { maxLength: 4 }))
    });

    /**
     * Body of the GeneralDiagnostics bootReason event
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.4
     */
    export const TlvBootReasonEvent = TlvObject({
        /**
         * This field shall contain the reason for this BootReason event.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.4.1
         */
        bootReason: TlvField(0, TlvEnum<BootReason>())
    });

    /**
     * General Diagnostics
     *
     * The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire standardized
     * diagnostics metrics that may be used by a Node to assist a user or Administrator in diagnosing potential
     * problems. The General Diagnostics Cluster attempts to centralize all metrics that are broadly relevant to the
     * majority of Nodes.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.11
     */
    export const Cluster = CreateCluster({
        id: 0x33,
        name: "GeneralDiagnostics",
        revision: 1,

        attributes: {
            /**
             * The NetworkInterfaces attribute shall be a list of NetworkInterface structs. Each logical network
             * interface on the Node shall be represented by a single entry within the NetworkInterfaces attribute.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.6.1
             */
            networkInterfaces: Attribute(0x0, TlvArray(TlvNetworkInterface, { maxLength: 8 }), { default: [] }),

            /**
             * The RebootCount attribute shall indicate a best-effort count of the number of times the Node has
             * rebooted. The RebootCount attribute SHOULD be incremented each time the Node reboots. The RebootCount
             * attribute shall NOT be incremented when a Node wakes from a low-power or sleep state. The RebootCount
             * attribute shall only be reset to 0 upon a factory reset of the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.6.2
             */
            rebootCount: Attribute(0x1, TlvUInt16, { persistent: true, default: 0 }),

            /**
             * The UpTime attribute shall indicate a best-effort assessment of the length of time, in seconds, since
             * the Node’s last reboot. The UpTime attribute SHOULD be incremented to account for the periods of time
             * that a Node is in a low-power or sleep state. The UpTime attribute shall only be reset upon a device
             * reboot.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.6.3
             */
            upTime: OptionalAttribute(0x2, TlvUInt64, { omitChanges: true, default: 0 }),

            /**
             * The TotalOperationalHours attribute shall indicate a best-effort attempt at tracking the length of time,
             * in hours, that the Node has been operational. The TotalOperationalHours attribute SHOULD be incremented
             * to account for the periods of time that a Node is in a low-power or sleep state. The
             *
             * TotalOperationalHours attribute shall only be reset upon a factory reset of the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.6.4
             */
            totalOperationalHours: OptionalAttribute(
                0x3,
                TlvUInt32,
                { persistent: true, omitChanges: true, default: 0 }
            ),

            /**
             * The BootReason attribute shall indicate the reason for the Node’s most recent boot.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.6.5
             */
            bootReason: OptionalAttribute(0x4, TlvEnum<BootReason>()),

            /**
             * The ActiveHardwareFaults attribute shall indicate the set of faults currently detected by the Node. When
             * the Node detects a fault has been raised, the appropriate HardwareFaultEnum value shall be added to this
             * list. This list shall NOT contain more than one instance of a specific HardwareFaultEnum value. When the
             * Node detects that all conditions contributing to a fault has been cleared, the corresponding
             * HardwareFaultEnum value shall be removed from this list. An empty list shall indicate there are
             * currently no active faults. The order of this list SHOULD have no significance. Clients interested in
             * monitoring changes in active faults may subscribe to this attribute, or they may subscribe to
             * HardwareFaultChange.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.6.6
             */
            activeHardwareFaults: OptionalAttribute(
                0x5,
                TlvArray(TlvEnum<HardwareFault>(), { maxLength: 11 }),
                { default: [] }
            ),

            /**
             * The ActiveRadioFaults attribute shall indicate the set of faults currently detected by the Node. When
             * the Node detects a fault has been raised, the appropriate RadioFaultEnum value shall be added to this
             * list. This list shall NOT contain more than one instance of a specific RadioFaultEnum value. When the
             * Node detects that all conditions contributing to a fault has been cleared, the corresponding
             * RadioFaultEnum value shall be removed from this list. An empty list shall indicate there are currently
             * no active faults. The order of this list SHOULD have no significance. Clients interested in monitoring
             * changes in active faults may subscribe to this attribute, or they may subscribe to RadioFaultChange.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.6.7
             */
            activeRadioFaults: OptionalAttribute(
                0x6,
                TlvArray(TlvEnum<RadioFault>(), { maxLength: 7 }),
                { default: [] }
            ),

            /**
             * The ActiveNetworkFaults attribute shall indicate the set of faults currently detected by the Node. When
             * the Node detects a fault has been raised, the appropriate NetworkFaultEnum value shall be added to this
             * list. This list shall NOT contain more than one instance of a specific NetworkFaultEnum value. When the
             * Node detects that all conditions contributing to a fault has been cleared, the corresponding
             * NetworkFaultEnum value shall be removed from this list. An empty list shall indicate there are currently
             * no active faults. The order of this list SHOULD have no significance. Clients interested in monitoring
             * changes in active faults may subscribe to this attribute, or they may subscribe to NetworkFaultChange.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.6.8
             */
            activeNetworkFaults: OptionalAttribute(
                0x7,
                TlvArray(TlvEnum<NetworkFault>(), { maxLength: 4 }),
                { default: [] }
            ),

            /**
             * The TestEventTriggersEnabled attribute shall indicate whether the Node has any TestEventTrigger
             * configured. When this attribute is true, the Node has been configured with one or more test event
             * triggers by virtue of the internally programmed EnableKey value (see Section 11.11.7.1,
             * “TestEventTrigger Command”) being set to a non-zero value. This attribute can be used by Administrators
             * to detect if a device was inadvertently commissioned with test event trigger mode enabled, and take
             * appropriate action (e.g. warn the user and/or offer to remove all fabrics on the Node).
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.6.9
             */
            testEventTriggersEnabled: Attribute(0x8, TlvBoolean)
        },

        commands: {
            /**
             * This command shall be supported to provide a means for certification tests to trigger some test-
             * plan-specific events, necessary to assist in automation of device interactions for some certification
             * test cases. This command shall NOT cause any changes to the state of the device that persist after the
             * last fabric is removed.
             *
             * The fields for the TestEventTrigger command are as follows:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.7.1
             */
            testEventTrigger: Command(
                0x0,
                TlvTestEventTriggerRequest,
                0x0,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Manage }
            )
        },

        events: {
            /**
             * The HardwareFaultChange Event shall indicate a change in the set of hardware faults currently detected
             * by the Node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.1
             */
            hardwareFaultChange: OptionalEvent(0x0, EventPriority.Critical, TlvHardwareFaultChangeEvent),

            /**
             * The RadioFaultChange Event shall indicate a change in the set of radio faults currently detected by the
             * Node.
             *
             * This field shall represent the set of faults currently detected, as per Section 11.11.4.2,
             * “RadioFaultEnum”.
             *
             * This field shall represent the set of faults detected prior to this change event, as per Section
             * 11.11.4.2, “RadioFaultEnum”.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.2
             */
            radioFaultChange: OptionalEvent(0x1, EventPriority.Critical, TlvRadioFaultChangeEvent),

            /**
             * The NetworkFaultChange Event shall indicate a change in the set of network faults currently detected by
             * the Node.
             *
             * This field shall represent the set of faults currently detected, as per Section 11.11.4.3,
             * “NetworkFaultEnum”.
             *
             * This field shall represent the set of faults detected prior to this change event, as per Section
             * 11.11.4.3, “NetworkFaultEnum”.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.3
             */
            networkFaultChange: OptionalEvent(0x2, EventPriority.Critical, TlvNetworkFaultChangeEvent),

            /**
             * The BootReason Event shall indicate the reason that caused the device to start-up.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.11.8.4
             */
            bootReason: Event(0x3, EventPriority.Critical, TlvBootReasonEvent)
        }
    });
}

export type GeneralDiagnosticsCluster = typeof GeneralDiagnostics.Cluster;
export const GeneralDiagnosticsCluster = GeneralDiagnostics.Cluster;
