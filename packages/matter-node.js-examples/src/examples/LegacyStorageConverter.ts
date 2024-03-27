/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import "@project-chip/matter-node.js";
import { StorageBackendDisk } from "@project-chip/matter-node.js/storage";
import { Environment, StorageService } from "@project-chip/matter.js/environment";
import { Time } from "@project-chip/matter.js/time";
import { LocalStorage } from "node-localstorage";

const environment = Environment.default;

const legacyStoragePath = environment.vars.string("legacy.storage.path");
const newStoragePath = environment.vars.string("storage.path");

if (!legacyStoragePath || !newStoragePath) {
    console.error("Usage: node LegacyStorageConverter.js --legacy-storage-path=<path> --storage-path=<path>");
    process.exit(1);
}

const legacyLocalStorage = new LocalStorage(legacyStoragePath);

const legacyNodes = new Array<string>();
Object.keys(legacyLocalStorage).forEach(key => {
    const firstLevel = key.split(".")[0];
    if (!legacyNodes.includes(firstLevel)) {
        legacyNodes.push(firstLevel);
    }
});

const storageService = environment.get(StorageService);

const legacyStorage = new StorageBackendDisk(legacyStoragePath);
legacyStorage.initialize();

const uniqueIds: Record<string, string> = {};
if (legacyNodes.includes("Device")) {
    console.log("Example Device found ...");
    legacyNodes.splice(legacyNodes.indexOf("Device"), 1);

    const newDeviceStorage = (await storageService.open("device")).createContext("data");

    for (const key of legacyStorage.keys(["Device"])) {
        console.log("Migrate Device.", key);
        const value = legacyStorage.get(["Device"], key);
        await newDeviceStorage.set(key, value);
        if (key === "uniqueid") {
            uniqueIds["0"] = String(value);
            await newDeviceStorage.set(key, String(value));
        } else if (key.startsWith("uniqueid")) {
            const id = parseInt(key.substring(8));
            uniqueIds[id - 1] = String(value);
            await newDeviceStorage.set(key, String(value));
        }
    }
}

if (legacyNodes.includes("Controller")) {
    console.log("Example Controller found ...");
    legacyNodes.splice(legacyNodes.indexOf("Controller"), 1);

    const newControllerStorage = (await storageService.open("controller")).createContext("data");

    for (const key of legacyStorage.keys(["Controller"])) {
        console.log("Migrate Controller.", key);
        const value = legacyStorage.get(["Controller"], key);
        await newControllerStorage.set(key, value);
        if (key === "uniqueid") {
            uniqueIds["0"] = String(value);
            await newControllerStorage.set(key, String(value));
        }
    }
}

console.log(uniqueIds);

if (!Object.keys(uniqueIds).length) {
    console.error("No uniqueId(s) found in legacy storage. Can not convert the node storage.");
    process.exit(1);
}

for (const nodeId of legacyNodes) {
    if (!uniqueIds[nodeId]) {
        const rootCertId = legacyStorage.get(["0", "RootCertificateManager"], "rootCertId");

        if (nodeId !== "0" || rootCertId === undefined) {
            console.error(`No uniqueId found for node ${nodeId}. Can not convert the node storage.`);
            continue;
        }

        // Migrate the controller storage
        const newControllerStorage = (await storageService.open("controller")).createContext("data");
        const uniqueId = Time.nowMs().toString();
        await newControllerStorage.set("uniqueid", uniqueId);

        const newNodeStorage = await storageService.open(uniqueId);

        const credentialsStorage = newNodeStorage.createContext("credentials");
        await credentialsStorage.set("rootCertId", rootCertId);
        await credentialsStorage.set(
            "nextCertificateId",
            legacyStorage.get(["0", "RootCertificateManager"], "nextCertificateId"),
        );
        await credentialsStorage.set(
            "rootCertBytes",
            legacyStorage.get(["0", "RootCertificateManager"], "rootCertBytes"),
        );
        await credentialsStorage.set(
            "rootKeyIdentifier",
            legacyStorage.get(["0", "RootCertificateManager"], "rootKeyIdentifier"),
        );
        await credentialsStorage.set("rootKeyPair", legacyStorage.get(["0", "RootCertificateManager"], "rootKeyPair"));
        await credentialsStorage.set("fabric", legacyStorage.get(["0", "MatterController"], "fabric"));

        const sessionsStorage = newNodeStorage.createContext("sessions");
        await sessionsStorage.set(
            "resumptionRecords",
            legacyStorage.get([nodeId, "SessionManager"], "resumptionRecords"),
        );

        const nodesStorage = newNodeStorage.createContext("nodes");
        await nodesStorage.set(
            "resumptionRecords",
            legacyStorage.get([nodeId, "MatterController"], "commissionedNodes"),
        );

        console.log(`Controller Node ${nodeId} with new unique id ${uniqueId} migrated successfully.`);
    } else {
        // Migrate the device storage
        const newNodeStorage = await storageService.open(uniqueIds[nodeId]);

        const nextEndpointNumber = legacyStorage.get<number>([nodeId, "EndpointStructure"], "nextEndpointId");
        if (nextEndpointNumber !== undefined && nextEndpointNumber > 2) {
            console.log(
                "It seems you used a bridged or composed example before, please make sure to use all details (type, ids,...) in the parameters when starting the new example. When using a bridge and you had changed devices after pairing it could happen that the new example introduces new devices to the controller. If you are unsure unpair the old example and start fresh.",
            );
        }

        const eventsStorage = newNodeStorage.createContext("events");
        await eventsStorage.set("lastEventNumber", legacyStorage.get([nodeId, "EventHandler"], "lastEventNumber"));

        const fabricsStorage = newNodeStorage.createContext("fabrics");
        await fabricsStorage.set("fabrics", legacyStorage.get([nodeId, "FabricManager"], "fabrics"));
        await fabricsStorage.set("nextFabricIndex", legacyStorage.get([nodeId, "FabricManager"], "nextFabricIndex"));

        const sessionsStorage = newNodeStorage.createContext("sessions");
        await sessionsStorage.set(
            "resumptionRecords",
            legacyStorage.get([nodeId, "SessionManager"], "resumptionRecords"),
        );

        console.log(`Device Node ${nodeId} with unique id ${uniqueIds[nodeId]} migrated successfully.`);
    }
}
