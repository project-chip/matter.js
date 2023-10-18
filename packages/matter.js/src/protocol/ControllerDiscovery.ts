/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PairRetransmissionLimitReachedError } from "../MatterController.js";
import { CommissionableDeviceIdentifiers, Scanner } from "../common/Scanner.js";
import { ServerAddress, serverAddressToString } from "../common/ServerAddress.js";
import { Logger } from "../log/Logger.js";
import { CommissioningError } from "../protocol/ControllerCommissioner.js";
import { isDeepEqual } from "../util/DeepEqual.js";
import { ClassExtends } from "../util/Type.js";

const logger = Logger.get("ControllerDiscovery");

export class ControllerDiscovery {
    /**
     * Discovers devices by a provided identifier and a list of scanners (e.g. IP and BLE in parallel).
     * It returns after the timeout or if at least one device was found.
     * The method returns a list of addresses of the discovered devices.
     */
    static discoverDeviceAddressesByIdentifier(
        scanners: Array<Scanner>,
        identifier: CommissionableDeviceIdentifiers,
        timeoutSeconds = 30,
    ): Promise<ServerAddress[]> {
        logger.info(`Start Discovering devices using identifier ${Logger.toJSON(identifier)} ...`);

        const scanResults = scanners.map(scanner => async () => {
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

        // Work around unavailable Promise.any :-)
        return new Promise((resolve, reject) => {
            let numberRejected = 0;
            let wasResolved = false;

            for (const scanResult of scanResults) {
                scanResult()
                    .then(addresses => {
                        if (!wasResolved) {
                            wasResolved = true;
                            resolve(addresses);
                        }
                    })
                    .catch(error => {
                        numberRejected++;
                        if (!wasResolved && numberRejected === scanners.length) {
                            reject(error);
                        }
                    });
            }
        });
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
                throw new PairRetransmissionLimitReachedError(`Failed to connect on any found server`);
            }
        }
    }
}
