/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */


import { Attribute, Cluster, Command, OptionalAttribute, OptionalCommand, WritableAttribute } from "./Cluster.js";
import { BitFlag } from "../schema/BitmapSchema.js";
import { TlvBitmap, TlvEnum, TlvInt32, TlvInt8, TlvUInt16, TlvUInt64, TlvUInt8 } from "../tlv/TlvNumber.js";
import { TlvField, TlvObject, TlvOptionalField } from "../tlv/TlvObject.js";
import { TlvByteString, TlvString } from "../tlv/TlvString.js";
import { TlvBoolean } from "../tlv/TlvBoolean.js";
import { TlvNullable } from "../tlv/TlvNullable.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { MatterApplicationClusterSpecificationV1_0 } from "../spec/Specifications.js";


/** @see {@link MatterApplicationClusterSpecificationV1_0} § 11.8.6.5 */
export const enum NetworkCommissioningStatus {
    /** OK, no error. */
    Success = 0,
    /** Value Outside Range. */
    OutOfRange = 1,

    /** A collection would exceed its size limit. */
    BoundsExceeded = 2,

    /** The NetworkID is not among the collection of added networks. */
    NetworkIDNotFound = 3,

    /** The NetworkID is already among the collection of added networks. */
    DuplicateNetworkID = 4,

    /** Cannot find AP: SSID Not found. */
    NetworkNotFound = 5,

    /** Cannot find AP: Mismatch on band/channels/regulatory domain / 2.4GHz vs 5GHz. */
    RegulatoryError = 6,

    /** Cannot associate due to authentication failure. */
    AuthFailure = 7,

    /** Cannot associate due to unsupported security mode. */
    UnsupportedSecurity = 8,

    /** Other association failure. */
    OtherConnectionFailure = 9,

    /** Failure to generate an IPv6 address. */
    IPV6Failed = 10,

    /** Failure to bind Wi-Fi <-> IP interfaces. */
    IPBindFailed = 11,

    /** Unknown error. */
    UnknownError = 12,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 11.8.6.2 */
export const enum WiFiBand {
    /** 2.4GHz - 2.401GHz to 2.495GHz (802.11b/g/n/ax) */
    '2G4' = 0,
    /** 3.65GHz - 3.655GHz to 3.695GHz (802.11y) */
    '3G65' = 1,
    /** 5GHz - 5.150GHz to 5.895GHz (802.11a/n/ac/ax) */
    '5G' = 2,
    /** 6GHz - 5.925GHz to 7.125GHz (802.11ax / WiFi 6E) */
    '6G' = 3,
    /** 60GHz - 57.24GHz to 70.20GHz (802.11ad/ay) */
    '60G' = 4,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 11.8.6.1 */
export const TlvWiFiSecurity = TlvBitmap(TlvUInt8, {
    Unencrypted: BitFlag(0),
    Wep: BitFlag(1),
    'WPA-PERSONAL': BitFlag(2),
    'WPA2-PERSONAL': BitFlag(3),
    'WPA3-PERSONAL': BitFlag(4),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.8.6.4 */
const TlvWiFiInterfaceScanResult = TlvObject({
    security: TlvField(0, TlvWiFiSecurity),
    ssid: TlvField(1, TlvByteString.bound({ maxLength: 32 })),
    bssid: TlvField(2, TlvByteString.bound({ length: 6 })),
    channel: TlvField(3, TlvUInt16),

    /** Used to differentiate overlapping channel number values across different Wi-Fi frequency bands. */
    wiFiBand: TlvOptionalField(4, TlvEnum<WiFiBand>()),

    /** Denote the signal strength in dBm of the associated scan result. */
    rssi: TlvOptionalField(5, TlvInt8),
});

// TODO: Move to TlvString.ts in matter.js!
const TlvHardwareAddress = TlvByteString.bound({ minLength: 6, maxLength: 8 });

/** @see {@link MatterCoreSpecificationV1_0} § 11.8.6.4 */
const TlThreadInterfaceScanResult = TlvObject({
    panId: TlvField(0, TlvUInt16.bound({ min: 0, max: 65534 })),
    extendedPanId: TlvField(1, TlvUInt64),
    networkName: TlvField(2, TlvString.bound({ minLength: 1, maxLength: 16 })),
    channel: TlvField(3, TlvUInt16),
    version: TlvField(4, TlvUInt8),

    /** IEEE 802.15.4 Extended Address */
    extendedAddress: TlvField(5, TlvHardwareAddress),
    rssi: TlvField(6, TlvInt8),
    lqi: TlvField(7, TlvUInt8),
});

/** @see {@link MatterCoreSpecificationV1_0} §  */
const TlvNetworkInfo = TlvObject({
    /** Unique identifier for the network. */
    networkId: TlvField(0, TlvByteString.bound({ minLength: 1, maxLength: 32 })),

    /** Connected status of the asscoiated network. */
    connected: TlvField(1, TlvBoolean),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.8.8.2 */
const TlvScanNetworksRequest = TlvObject({
    /** SSID for a directed scan of that particular Wi-Fi SSID. */
    ssid: TlvOptionalField(0, TlvNullable(TlvByteString.bound({ minLength: 1, maxLength: 32 }))), /* default: null */

    /** Sets the Breadcrumb attribute in the General Commissioning cluster on success of the associated command. */
    breadcrumb: TlvOptionalField(1, TlvUInt64),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.8.8.3 */
const TlvScanNetworksResponse = TlvObject({
    /** Status of the last scan operation. */
    networkingStatus: TlvField(0, TlvEnum<NetworkCommissioningStatus>()),

    /** Error information which can be communicated to the user in case the NetworkingStatus was not Success. */
    debugText: TlvOptionalField(1, TlvString.bound({ maxLength: 512 })),

    /** Wi-Fi network scan results. */
    wiFiScanResults: TlvOptionalField(2, TlvArray(TlvWiFiInterfaceScanResult)),

    /** Thread network scan results. */
    threadScanResults: TlvOptionalField(3, TlvArray(TlThreadInterfaceScanResult)),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.8.8.4 */
const TlvAddOrUpdateWiFiNetworkRequest = TlvObject({
    /** SSID to which to attempt connection. */
    ssid: TlvField(0, TlvByteString.bound({ maxLength: 32 })),

    /** Passphrase or PSK for the network (if any is needed). */
    credentials: TlvField(1, TlvByteString.bound({ maxLength: 64 })),

    /** Sets the Breadcrumb attribute in the General Commissioning cluster on success of the associated command. */
    breadcrumb: TlvOptionalField(2, TlvUInt64),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.8.8.5 */
const TlvAddOrUpdateThreadNetworkRequest = TlvObject({
    /** Thread Network Parameters. */
    OperationalDataset: TlvField(0, TlvByteString.bound({ length: 254 })),

    /** Sets the Breadcrumb attribute in the General Commissioning cluster on success of the associated command. */
    breadcrumb: TlvOptionalField(1, TlvUInt64),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.8.8.8 */
const TlvRemoveNetworkRequest = TlvObject({
    /** NetworkID for the entry to remove: the SSID for Wi-Fi and XPAN ID for Thread. */
    networkId: TlvField(0, TlvByteString.bound({ minLength: 1, maxLength: 32 })),

    /** Sets the Breadcrumb attribute in the General Commissioning cluster on success of the associated command. */
    breadcrumb: TlvOptionalField(1, TlvUInt64),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.8.8.9 */
const TlvNetworkConfigResponse = TlvObject({
    /** Status of the last operation attempting to modify the Networks attribute configuration. */
    networkingStatus: TlvField(0, TlvEnum<NetworkCommissioningStatus>()),

    /** Error information which can be communicated to the user in case the NetworkingStatus was not Success. */
    debugText: TlvOptionalField(1, TlvString.bound({ maxLength: 512 })),

    /** The 0-based index of the entry in the Networks attribute that was last added, updated or removed successfully. */
    networkIndex: TlvOptionalField(2, TlvUInt8),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.8.8.10 */
const TlvConnectNetworkRequest = TlvObject({
    /** NetworkID for the entry used to configure the connection: the SSID for Wi-Fi and XPAN ID for Thread. */
    networkId: TlvField(0, TlvByteString.bound({ minLength: 1, maxLength: 32 })),

    /** Sets the Breadcrumb attribute in the General Commissioning cluster on success of the associated command. */
    breadcrumb: TlvOptionalField(1, TlvUInt64),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.8.8.11 */
const TlvConnectNetworkResponse = TlvObject({
    /** Status of the last connection attempt. */
    networkingStatus: TlvField(0, TlvEnum<NetworkCommissioningStatus>()),

    /** Error information which can be communicated to the user in case the NetworkingStatus was not Success. */
    debugText: TlvOptionalField(1, TlvString),

    /** Wi-Fi association errors. */
    errorValue: TlvField(2, TlvNullable(TlvInt32)),
});

/** @see {@link MatterCoreSpecificationV1_0} § 11.8.8.12 */
const TlvReorderNetworkRequest = TlvObject({
    /** NetworkID for the entry to reorder: the SSID for Wi-Fi and XPAN ID for Thread. */
    networkId: TlvField(0, TlvByteString.bound({ minLength: 1, maxLength: 32 })),

    /** 0-based index of the new desired position of the entry in the Networks attribute. */
    networkIndex: TlvField(1, TlvUInt8),

    /** Sets the Breadcrumb attribute in the General Commissioning cluster on success of the associated command. */
    breadcrumb: TlvOptionalField(2, TlvUInt64),
});

/**
 * This cluster is used to associate a Node with or manage a Node’s one or more network interfaces.
 *
 * @see {@link MatterCoreSpecificationV1_0} § 11.8
 */
export const NetworkCommissioningCluster = Cluster({
    id: 0x31,
    name: "NetworkCommissioning",
    revision: 1,
    features: {
        wifi: BitFlag(0),
        thread: BitFlag(1),
        ethernet: BitFlag(2),
    },

    attributes: {
        /** Maximum number of network configuration entries that can be added, based on available device resources. */
        maxNetworks: Attribute(0, TlvUInt8.bound({ min: 1 })), /* read = admin */

        /** Network configurations that are usable on the network interface. */
        networks: Attribute(1, TlvArray(TlvNetworkInfo), { default: [] }), /* read = admin */

        /** Maximum duration taken, in seconds, to provide scan results. */
        scanMaxTimeSeconds: OptionalAttribute(2, TlvUInt8),

        /** Maximum duration taken, in seconds, to report a successful or failed network connection indication. */
        connectMaxTimeSeconds: OptionalAttribute(3, TlvUInt8),

        /** Indicates whether the associated network interface is enabled or not. */
        interfaceEnabled: WritableAttribute(4, TlvBoolean, { default: true }), /* write = admin */

        /** Status of the last attempt either scan or connect to an operational network. */
        lastNetworkingStatus: Attribute(5, TlvNullable(TlvEnum<NetworkCommissioningStatus>()), { default: null }), /* read = admin */

        /** NetworkID used in the last attempt to connect to an operational network. */
        lastNetworkId: Attribute(6, TlvNullable(TlvByteString.bound({ minLength: 1, maxLength: 32 })), { default: null }), /* read = admin */

        /** ErrorValue used in the last failed attempt to connect to an operational network. */
        lastConnectErrorValue: Attribute(7, TlvNullable(TlvInt32), { default: null }), /* read = admin */
    },

    commands: {
        /** Determine the set of networks the device sees as available. */
        scanNetworks: Command(0, TlvScanNetworksRequest, 1, TlvScanNetworksResponse),

        /** Add or update the credentials for a given Wi-Fi network. */
        addOrUpdateWiFiNetwork: OptionalCommand(2, TlvAddOrUpdateWiFiNetworkRequest, 5, TlvNetworkConfigResponse),

        /** Add or update the credentials for a given Thread network. */
        addOrUpdateThreadNetwork: OptionalCommand(3, TlvAddOrUpdateThreadNetworkRequest, 5, TlvNetworkConfigResponse),

        /** Remove the definition of a given network (including its credentials). */
        removeNetwork: Command(4, TlvRemoveNetworkRequest, 5, TlvNetworkConfigResponse),

        /** Connect to the specified network, using previously-defined credentials. */
        connectNetwork: Command(6, TlvConnectNetworkRequest, 7, TlvConnectNetworkResponse),

        /** Modify the order in which networks will be presented in the Networks attribute. */
        reorderNetwork: Command(8, TlvReorderNetworkRequest, 5, TlvNetworkConfigResponse),
    },
});
