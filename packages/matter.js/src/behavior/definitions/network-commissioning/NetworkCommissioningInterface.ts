/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { NetworkCommissioning } from "../../../cluster/definitions/NetworkCommissioningCluster.js";

/**
 * This command shall scan on the Cluster instance’s associated network interface for either of:
 *
 *   • All available networks (non-directed scanning)
 *
 *   • Specific networks (directed scanning)
 *
 * Scanning for available networks detects all networks of the type corresponding to the cluster server instance’s
 * associated network interface that are possible to join, such as all visible Wi-Fi access points for Wi-Fi cluster
 * server instances, all Thread PANs for Thread cluster server instances, within bounds of the maximum response size.
 *
 * Scanning for a specific network (i.e. directed scanning) takes place if a network identifier (e.g. Wi-Fi SSID) is
 * provided in the command arguments. Directed scanning shall restrict the result set to the specified network only.
 *
 * The client shall NOT expect the server to be done scanning and have responded with ScanNetworksResponse before
 * ScanMaxTimeSeconds seconds have elapsed. Enough transport time affordances for retries SHOULD be expected before a
 * client determines the operation to have timed-out.
 *
 * This command shall fail with a status code of BUSY if the server determines that it will fail to reliably send a
 * response due to changes of networking interface configuration at runtime for the interface over which the command
 * was invoked, or if it is currently unable to proceed with such an operation.
 *
 * Clients shall be resilient to a server that either does not support or cannot proceed with the ScanNetworks command.
 *
 * @see {@link MatterSpecification.v11.Core} § 11.8.7.1
 */
export type ScanNetworksRequest = TypeFromSchema<typeof NetworkCommissioning.TlvScanNetworksRequest>;

/**
 * This command shall contain the status of the last ScanNetworks command, and the associated scan results if the
 * operation was successful.
 *
 * Results are valid only if NetworkingStatus is Success.
 *
 * Before generating a ScanNetworksResponse, the server shall set the LastNetworkingStatus attribute value to the
 * NetworkingStatus matching the response.
 *
 * @see {@link MatterSpecification.v11.Core} § 11.8.7.2
 */
export type ScanNetworksResponse = TypeFromSchema<typeof NetworkCommissioning.TlvScanNetworksResponse>;

/**
 * This command shall remove the network configuration from the Cluster if there was already a network configuration
 * with the same NetworkID. The relative order of the entries in the Networks attribute list shall remain unchanged,
 * except for the removal of the requested network configuration.
 *
 * If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe Command”), then
 * this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.
 *
 * If the Networks attribute does not contain a matching entry, the command shall immediately respond with
 * NetworkConfigResponse having NetworkingStatus status field set to NetworkIdNotFound.
 *
 * On success, the NetworkConfigResponse command shall have its NetworkIndex field set to the 0- based index of the
 * entry in the Networks attribute that was just removed, and a NetworkingStatus status field set to Success.
 *
 * @see {@link MatterSpecification.v11.Core} § 11.8.7.7
 */
export type RemoveNetworkRequest = TypeFromSchema<typeof NetworkCommissioning.TlvRemoveNetworkRequest>;

/**
 * This response command relates status information for some commands which require it as their response command. See
 * each individual cluster server command for the situations that may cause a NetworkingStatus different than Success.
 *
 * Before generating a NetworkConfigResponse, the server shall set the LastNetworkingStatus attribute value to the
 * NetworkingStatus matching the response.
 *
 * Before generating a NetworkConfigResponse, the server shall set the LastNetworkID attribute value to the NetworkID
 * that was used in the command for which an invocation caused the response to be generated.
 *
 * @see {@link MatterSpecification.v11.Core} § 11.8.7.8
 */
export type NetworkConfigResponse = TypeFromSchema<typeof NetworkCommissioning.TlvNetworkConfigResponse>;

/**
 * This command shall attempt to connect to a network whose configuration was previously added by either the
 * AddOrUpdateWiFiNetwork or AddOrUpdateThreadNetwork commands. Network is identified by its NetworkID.
 *
 * This command shall fail with a BUSY status code returned to the initiator if the server is currently unable to
 * proceed with such an operation, such as if it is currently attempting to connect in the background, or is already
 * proceeding with a prior ConnectNetwork.
 *
 * If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe Command”), then
 * this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.
 *
 * Success or failure of this command shall be communicated by the ConnectNetworkResponse command, unless some data
 * model validations caused a FAILURE status to be sent prior to finishing execution of the command. The
 * ConnectNetworkResponse shall indicate the value Success in the NetworkingStatus field on successful connection. On
 * failure to connect, the ConnectNetworkResponse shall contain an appropriate NetworkingStatus, DebugText and
 * ErrorValue indicating the reason for failure.
 *
 * The amount of time needed to determine successful or failing connectivity on the cluster server’s associated
 * interface is provided by the ConnectMaxTimeSeconds attribute. Clients shall NOT consider the connection to have
 * timed-out until at least that duration has taken place. For non-concurrent commissioning situations, the client
 * SHOULD allow additional margin of time to account for its delay in executing operational discovery of the Node once
 * it is connected to the new network.
 *
 * On successful connection, the entry associated with the given Network configuration in the Networks attribute shall
 * indicate its Connected field set to true, and all other entries, if any exist, shall indicate their Connected field
 * set to false.
 *
 * On failure to connect, the entry associated with the given Network configuration in the Networks attribute shall
 * indicate its Connected field set to false.
 *
 * The precedence order of any entry subject to ConnectNetwork shall NOT change within the Networks attribute.
 *
 * Even after successfully connecting to a network, the configuration shall revert to the prior state
 *
 * of configuration if the CommissioningComplete command (see Section 11.9.6.6, “CommissioningComplete Command”) is not
 * successfully invoked before expiry of the Fail-Safe timer.
 *
 * When non-concurrent commissioning is being used by a Commissioner or Administrator, it is possible that the only
 * method to determine success of the operation is operational discovery of the Node on the new operational network.
 * Therefore, before invoking the ConnectNetwork command, the client SHOULD re-invoke the Arm Fail-Safe command with a
 * duration that meets the following:
 *
 *   1. Sufficient time to meet the minimum required time (see Section 11.8.6.4, “ConnectMaxTimeSeconds Attribute”)
 *      that may be taken by the server to connect to the desired network.
 *
 *   2. Sufficient time to account for possible message-layer retries when a response is requested.
 *
 *   3. Sufficient time to allow operational discovery on the new network by a Commissioner or Administrator.
 *
 *   4. Sufficient time to establish a CASE session after operational discovery
 *
 *   5. Not so long that, in error situations, the delay to reverting back to being discoverable for commissioning with
 *      a previous configuration would cause significant user-perceived delay.
 *
 * Note as well that the CommissioningTimeout duration provided in a prior OpenCommissioningWindow or
 * OpenBasicCommissioningWindow command may impact the total time available to proceed with error recovery after a
 * connection failure.
 *
 * The LastNetworkingStatus, LastNetworkID and LastConnectErrorValue attributes may assist the client in determining
 * the reason for a failure after reconnecting over a Commissioning channel, especially in non-concurrent commissioning
 * situations.
 *
 * @see {@link MatterSpecification.v11.Core} § 11.8.7.9
 */
export type ConnectNetworkRequest = TypeFromSchema<typeof NetworkCommissioning.TlvConnectNetworkRequest>;

/**
 * Before generating a ConnectNetworkResponse, the server shall:
 *
 *   • Set the LastNetworkingStatus attribute value to the NetworkingStatus matching the response.
 *
 *   • Set the LastNetworkID attribute value to the NetworkID that was used in the ConnectNetwork command which caused
 *     the response to be generated.
 *
 *   • Set the LastConnectErrorValue attribute value to the ErrorValue matching the response, including setting it to
 *     null if the ErrorValue is not applicable.
 *
 * @see {@link MatterSpecification.v11.Core} § 11.8.7.10
 */
export type ConnectNetworkResponse = TypeFromSchema<typeof NetworkCommissioning.TlvConnectNetworkResponse>;

/**
 * This command shall set the specific order of the network configuration selected by its NetworkID in the Networks
 * attribute list to match the position given by NetworkIndex.
 *
 * @see {@link MatterSpecification.v11.Core} § 11.8.7.11
 */
export type ReorderNetworkRequest = TypeFromSchema<typeof NetworkCommissioning.TlvReorderNetworkRequest>;

/**
 * This command shall be used to add or modify Wi-Fi network configurations.
 *
 * If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe Command”), then
 * this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.
 *
 * The Credentials associated with the network are not readable after execution of this command, as they do not appear
 * in the Networks attribute list, for security reasons.
 *
 * See Section 11.8.7.5, “Common processing of AddOrUpdateWiFiNetwork and AddOrUpdateThreadNetwork” for behavior of
 * addition/update.
 *
 * @see {@link MatterSpecification.v11.Core} § 11.8.7.3
 */
export type AddOrUpdateWiFiNetworkRequest = TypeFromSchema<typeof NetworkCommissioning.TlvAddOrUpdateWiFiNetworkRequest>;

/**
 * This command shall be used to add or modify Thread network configurations.
 *
 * If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe Command”), then
 * this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.
 *
 * See Section 11.8.7.5, “Common processing of AddOrUpdateWiFiNetwork and AddOrUpdateThreadNetwork” for behavior of
 * addition/update.
 *
 * The XPAN ID in the OperationalDataset serves as the NetworkID for the network configuration to be added or updated.
 *
 * If the Networks attribute list does not contain an entry with the same NetworkID as the one provided in the
 * OperationalDataset, the operation shall be considered an addition, otherwise, it shall be considered an update.
 *
 * @see {@link MatterSpecification.v11.Core} § 11.8.7.4
 */
export type AddOrUpdateThreadNetworkRequest = TypeFromSchema<typeof NetworkCommissioning.TlvAddOrUpdateThreadNetworkRequest>;

export namespace NetworkCommissioningInterface {
    export interface WiFiNetworkInterfaceOrThreadNetworkInterface {
        /**
         * This command shall scan on the Cluster instance’s associated network interface for either of:
         *
         *   • All available networks (non-directed scanning)
         *
         *   • Specific networks (directed scanning)
         *
         * Scanning for available networks detects all networks of the type corresponding to the cluster server
         * instance’s associated network interface that are possible to join, such as all visible Wi-Fi access points
         * for Wi-Fi cluster server instances, all Thread PANs for Thread cluster server instances, within bounds of
         * the maximum response size.
         *
         * Scanning for a specific network (i.e. directed scanning) takes place if a network identifier (e.g. Wi-Fi
         * SSID) is provided in the command arguments. Directed scanning shall restrict the result set to the specified
         * network only.
         *
         * The client shall NOT expect the server to be done scanning and have responded with ScanNetworksResponse
         * before ScanMaxTimeSeconds seconds have elapsed. Enough transport time affordances for retries SHOULD be
         * expected before a client determines the operation to have timed-out.
         *
         * This command shall fail with a status code of BUSY if the server determines that it will fail to reliably
         * send a response due to changes of networking interface configuration at runtime for the interface over which
         * the command was invoked, or if it is currently unable to proceed with such an operation.
         *
         * Clients shall be resilient to a server that either does not support or cannot proceed with the ScanNetworks
         * command.
         *
         * @see {@link MatterSpecification.v11.Core} § 11.8.7.1
         */
        scanNetworks(request: ScanNetworksRequest): MaybePromise<ScanNetworksResponse>;

        /**
         * This command shall remove the network configuration from the Cluster if there was already a network
         * configuration with the same NetworkID. The relative order of the entries in the Networks attribute list
         * shall remain unchanged, except for the removal of the requested network configuration.
         *
         * If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
         * Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.
         *
         * If the Networks attribute does not contain a matching entry, the command shall immediately respond with
         * NetworkConfigResponse having NetworkingStatus status field set to NetworkIdNotFound.
         *
         * On success, the NetworkConfigResponse command shall have its NetworkIndex field set to the 0- based index of
         * the entry in the Networks attribute that was just removed, and a NetworkingStatus status field set to
         * Success.
         *
         * @see {@link MatterSpecification.v11.Core} § 11.8.7.7
         */
        removeNetwork(request: RemoveNetworkRequest): MaybePromise<NetworkConfigResponse>;

        /**
         * This command shall attempt to connect to a network whose configuration was previously added by either the
         * AddOrUpdateWiFiNetwork or AddOrUpdateThreadNetwork commands. Network is identified by its NetworkID.
         *
         * This command shall fail with a BUSY status code returned to the initiator if the server is currently unable
         * to proceed with such an operation, such as if it is currently attempting to connect in the background, or is
         * already proceeding with a prior ConnectNetwork.
         *
         * If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
         * Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.
         *
         * Success or failure of this command shall be communicated by the ConnectNetworkResponse command, unless some
         * data model validations caused a FAILURE status to be sent prior to finishing execution of the command. The
         * ConnectNetworkResponse shall indicate the value Success in the NetworkingStatus field on successful
         * connection. On failure to connect, the ConnectNetworkResponse shall contain an appropriate NetworkingStatus,
         * DebugText and ErrorValue indicating the reason for failure.
         *
         * The amount of time needed to determine successful or failing connectivity on the cluster server’s associated
         * interface is provided by the ConnectMaxTimeSeconds attribute. Clients shall NOT consider the connection to
         * have timed-out until at least that duration has taken place. For non-concurrent commissioning situations,
         * the client SHOULD allow additional margin of time to account for its delay in executing operational
         * discovery of the Node once it is connected to the new network.
         *
         * On successful connection, the entry associated with the given Network configuration in the Networks
         * attribute shall indicate its Connected field set to true, and all other entries, if any exist, shall
         * indicate their Connected field set to false.
         *
         * On failure to connect, the entry associated with the given Network configuration in the Networks attribute
         * shall indicate its Connected field set to false.
         *
         * The precedence order of any entry subject to ConnectNetwork shall NOT change within the Networks attribute.
         *
         * Even after successfully connecting to a network, the configuration shall revert to the prior state
         *
         * of configuration if the CommissioningComplete command (see Section 11.9.6.6, “CommissioningComplete
         * Command”) is not successfully invoked before expiry of the Fail-Safe timer.
         *
         * When non-concurrent commissioning is being used by a Commissioner or Administrator, it is possible that the
         * only method to determine success of the operation is operational discovery of the Node on the new
         * operational network. Therefore, before invoking the ConnectNetwork command, the client SHOULD re-invoke the
         * Arm Fail-Safe command with a duration that meets the following:
         *
         *   1. Sufficient time to meet the minimum required time (see Section 11.8.6.4, “ConnectMaxTimeSeconds
         *      Attribute”) that may be taken by the server to connect to the desired network.
         *
         *   2. Sufficient time to account for possible message-layer retries when a response is requested.
         *
         *   3. Sufficient time to allow operational discovery on the new network by a Commissioner or Administrator.
         *
         *   4. Sufficient time to establish a CASE session after operational discovery
         *
         *   5. Not so long that, in error situations, the delay to reverting back to being discoverable for
         *      commissioning with a previous configuration would cause significant user-perceived delay.
         *
         * Note as well that the CommissioningTimeout duration provided in a prior OpenCommissioningWindow or
         * OpenBasicCommissioningWindow command may impact the total time available to proceed with error recovery
         * after a connection failure.
         *
         * The LastNetworkingStatus, LastNetworkID and LastConnectErrorValue attributes may assist the client in
         * determining the reason for a failure after reconnecting over a Commissioning channel, especially in
         * non-concurrent commissioning situations.
         *
         * @see {@link MatterSpecification.v11.Core} § 11.8.7.9
         */
        connectNetwork(request: ConnectNetworkRequest): MaybePromise<ConnectNetworkResponse>;

        /**
         * This command shall set the specific order of the network configuration selected by its NetworkID in the
         * Networks attribute list to match the position given by NetworkIndex.
         *
         * @see {@link MatterSpecification.v11.Core} § 11.8.7.11
         */
        reorderNetwork(request: ReorderNetworkRequest): MaybePromise<NetworkConfigResponse>;
    }

    export interface WiFiNetworkInterface {
        /**
         * This command shall be used to add or modify Wi-Fi network configurations.
         *
         * If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
         * Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.
         *
         * The Credentials associated with the network are not readable after execution of this command, as they do not
         * appear in the Networks attribute list, for security reasons.
         *
         * See Section 11.8.7.5, “Common processing of AddOrUpdateWiFiNetwork and AddOrUpdateThreadNetwork” for
         * behavior of addition/update.
         *
         * @see {@link MatterSpecification.v11.Core} § 11.8.7.3
         */
        addOrUpdateWiFiNetwork(request: AddOrUpdateWiFiNetworkRequest): MaybePromise<NetworkConfigResponse>;
    }

    export interface ThreadNetworkInterface {
        /**
         * This command shall be used to add or modify Thread network configurations.
         *
         * If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
         * Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.
         *
         * See Section 11.8.7.5, “Common processing of AddOrUpdateWiFiNetwork and AddOrUpdateThreadNetwork” for
         * behavior of addition/update.
         *
         * The XPAN ID in the OperationalDataset serves as the NetworkID for the network configuration to be added or
         * updated.
         *
         * If the Networks attribute list does not contain an entry with the same NetworkID as the one provided in the
         * OperationalDataset, the operation shall be considered an addition, otherwise, it shall be considered an
         * update.
         *
         * @see {@link MatterSpecification.v11.Core} § 11.8.7.4
         */
        addOrUpdateThreadNetwork(request: AddOrUpdateThreadNetworkRequest): MaybePromise<NetworkConfigResponse>;
    }
}

export type NetworkCommissioningInterface = {
    components: [
        {
            flags: { wiFiNetworkInterface: true },
            methods: NetworkCommissioningInterface.WiFiNetworkInterfaceOrThreadNetworkInterface
        },
        {
            flags: { threadNetworkInterface: true },
            methods: NetworkCommissioningInterface.WiFiNetworkInterfaceOrThreadNetworkInterface
        },
        { flags: { wiFiNetworkInterface: true }, methods: NetworkCommissioningInterface.WiFiNetworkInterface },
        { flags: { threadNetworkInterface: true }, methods: NetworkCommissioningInterface.ThreadNetworkInterface }
    ]
};
