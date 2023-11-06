/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PairRetransmissionLimitReachedError } from "../MatterController.js";
import { MatterError } from "../common/MatterError.js";
import { CommissionableDevice, CommissionableDeviceIdentifiers, Scanner } from "../common/Scanner.js";
import { ServerAddress, ServerAddressIp, serverAddressToString } from "../common/ServerAddress.js";
import { NodeId } from "../datatype/NodeId.js";
import { Fabric } from "../fabric/Fabric.js";
import { Logger } from "../log/Logger.js";
import { MdnsScanner } from "../mdns/MdnsScanner.js";
import { CommissioningError } from "../protocol/ControllerCommissioner.js";
import { isDeepEqual } from "../util/DeepEqual.js";
import { anyPromise } from "../util/Promises.js";
import { ClassExtends } from "../util/Type.js";

const logger = Logger.get("ControllerDiscovery");

export class DiscoveryError extends MatterError {}

export class ControllerDiscovery {
    /**
     * Discovers devices by a provided identifier and a list of scanners (e.g. IP and BLE in parallel).
     * It returns after the timeout or if at least one device was found.
     * The method returns a list of addresses of the discovered devices.
     */
    static async discoverDeviceAddressesByIdentifier(
        scanners: Array<Scanner>,
        identifier: CommissionableDeviceIdentifiers,
        timeoutSeconds = 30,
    ): Promise<ServerAddress[]> {
        logger.info(`Start Discovering devices using identifier ${Logger.toJSON(identifier)} ...`);

        const scanResults = scanners.map(async scanner => {
            const foundDevices = await scanner.findCommissionableDevices(identifier, timeoutSeconds);
            logger.info(`Found ${foundDevices.length} devices using identifier ${Logger.toJSON(identifier)}`);
            if (foundDevices.length === 0) {
                throw new CommissioningError(
                    `No device discovered using identifier ${Logger.toJSON(
                        identifier,
                    )}! Please check that the relevant device is online.`,
                );
            }

            const addresses = foundDevices.flatMap(device => device.addresses);
            if (addresses.length === 0) {
                throw new CommissioningError(
                    `Device discovered using identifier ${Logger.toJSON(
                        identifier,
                    )}, but no Network addresses discovered.`,
                );
            }
            return addresses;
        });

        return await anyPromise(scanResults);
    }

    static async discoverCommissionableDevices(
        scanners: Array<Scanner>,
        timeoutSeconds: number,
        identifier: CommissionableDeviceIdentifiers = {},
        discoveredCallback?: (device: CommissionableDevice) => void,
    ): Promise<CommissionableDevice[]> {
        const discoveredDevices = new Map<string, CommissionableDevice>();

        await Promise.all(
            scanners.map(async scanner => {
                await scanner.findCommissionableDevicesContinuously(
                    identifier,
                    device => {
                        const { deviceIdentifier } = device;
                        if (!discoveredDevices.has(deviceIdentifier)) {
                            discoveredDevices.set(deviceIdentifier, device);
                            discoveredCallback?.(device);
                        }
                    },
                    timeoutSeconds,
                );
            }),
        );

        // The final answer only consists the devices still left, so expired ones will be excluded
        const finalDiscoveredDevices = new Map<string, CommissionableDevice>();
        scanners.forEach(scanner => {
            const devices = scanner.getDiscoveredCommissionableDevices(identifier);
            devices.forEach(device => {
                const { deviceIdentifier } = device;
                if (!discoveredDevices.has(deviceIdentifier)) {
                    discoveredDevices.set(deviceIdentifier, device);
                    discoveredCallback?.(device);
                }
                if (!finalDiscoveredDevices.has(deviceIdentifier)) {
                    finalDiscoveredDevices.set(deviceIdentifier, device);
                }
            });
        });

        return Array.from(finalDiscoveredDevices.values());
    }

    static async discoverOperationalDevice(
        fabric: Fabric,
        peerNodeId: NodeId,
        scanner: MdnsScanner,
        timeoutSeconds?: number,
        ignoreExistingRecords?: boolean,
    ): Promise<ServerAddressIp[]> {
        const scanResult = await scanner.findOperationalDevice(
            fabric,
            peerNodeId,
            timeoutSeconds,
            ignoreExistingRecords,
        );
        if (!scanResult.length) {
            throw new DiscoveryError(
                "The operational device cannot be found on the network. Please make sure it is online.",
            );
        }
        return scanResult;
    }

    static cancelOperationalDeviceDiscovery(fabric: Fabric, peerNodeId: NodeId, scanner: MdnsScanner) {
        scanner.cancelOperationalDeviceDiscovery(fabric, peerNodeId);
    }

    static cancelCommissionableDeviceDiscovery(scanner: Scanner, identifier: CommissionableDeviceIdentifiers = {}) {
        scanner.cancelCommissionableDeviceDiscovery(identifier);
    }

    /**
     * Helper method to iterate through a list of server addresses and try to execute a method on each of them. If the
     * method throws a configurable error (or EHOSTUNREACH), the server address list is updated (to also add later
     * discovered addresses or devices) and then next server address is tried.The result of the first successful method
     * call is returned. The logic makes sure to only try each unique address (IP/port) once.
     */
    static async iterateServerAddresses<SA extends ServerAddress, T, E extends Error>(
        servers: SA[],
        errorType: ClassExtends<E>,
        updateNetworkInterfaceFunc: () => Promise<SA[]>,
        func: (server: SA) => Promise<T>,
        lastKnownServer?: SA,
    ): Promise<{ result: T; resultAddress: SA }> {
        if (lastKnownServer !== undefined) {
            servers = servers.filter(server => !isDeepEqual(server, lastKnownServer));
            servers.unshift(lastKnownServer);
        }
        const serversSet = new Set(servers);

        const triedServers = new Set<string>();
        while (true) {
            logger.debug(
                `Server addresses to try: ${Array.from(serversSet.values())
                    .map(server => serverAddressToString(server))
                    .join(",")}`,
            );

            let triedOne = false;
            for (const server of serversSet) {
                const serverKey = serverAddressToString(server);
                if (triedServers.has(serverKey)) continue;
                triedServers.add(serverKey);

                try {
                    triedOne = true;
                    logger.debug(`Try to communicate with ${serverKey} ...`);
                    return { result: await func(server), resultAddress: server };
                } catch (error) {
                    if (
                        error instanceof errorType ||
                        (error instanceof Error && error.message.includes("EHOSTUNREACH"))
                    ) {
                        logger.debug(`Failed to communicate with ${serverKey}, try next server ...`, error);
                        (await updateNetworkInterfaceFunc()).forEach(server => serversSet.add(server)); // Update list and add new
                        break;
                    } else {
                        throw error;
                    }
                }
            }
            if (!triedOne) {
                throw new PairRetransmissionLimitReachedError(`Failed to connect on any discovered server`);
            }
        }
    }
}
