/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readdirSync, unlinkSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { Attributes, Commands, Events } from "../../src/cluster/Cluster.js";
import { DeviceTypeDefinition, DeviceTypes } from "../../src/device/DeviceTypes.js";
import * as clusterExports from "../../src/cluster/index.js";

const INTERNAL_CLUSTERS = [
    clusterExports.ScenesCluster,
    clusterExports.GroupsCluster,
    clusterExports.BindingCluster,
    clusterExports.BasicInformationCluster,
    clusterExports.AccessControlCluster,
    clusterExports.GroupKeyManagementCluster,
    clusterExports.GeneralCommissioningCluster,
    clusterExports.AdminCommissioningCluster,
    clusterExports.OperationalCredentialsCluster,
    clusterExports.GeneralDiagnosticsCluster,
];

const INTERNAL_DEVICE_TYPES = [
    DeviceTypes.ROOT
];

const HEADER =
    `/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/
`;

function targetPath(target: string) {
    return resolve(dirname(fileURLToPath(import.meta.url)), `../../src/${target}`);
}

export function clean(target: string, suffix: string) {
    const path = targetPath(target);
    readdirSync(targetPath(target)).forEach((f) => {
        if (f.endsWith(`${suffix}.ts`)) {
            unlinkSync(resolve(path, f));
        }
    });
}

export function camelize(name: string, upperFirst = true) {
    const pieces = new Array<string>();
    let pieceStart = 0;
    let sawLower = false;

    let i = 0;
    function addPiece() {
        if (pieceStart != i) pieces.push(name.slice(pieceStart, i));
        sawLower = false;
    }

    for (; i < name.length; i++) {

        if (name[i] == "-" || name[i] == "_") {
            addPiece();
            pieceStart = i + 1;
            continue;
        }

        if (name[i] >= "A" && name[i] <= "Z" && sawLower) {
            addPiece();
            pieceStart = i;
            continue;
        }

        if (name[i] >= "a" && name[i] <= "z") {
            sawLower = true;
        }
    }
    addPiece();

    let didFirst = false;
    return pieces.map((piece) => {
        let firstChar = piece[0];
        if (upperFirst || didFirst) {
            firstChar = firstChar.toUpperCase();
        } else {
            firstChar = firstChar.toLowerCase();
            didFirst = true;
        }
        return `${firstChar}${piece.slice(1).toLowerCase()}`;
    }).join("");
}

export function writeTS(target: string, source: string) {
    console.log(`Write ${target}.ts`);
    source = `${HEADER}\n${source}`
    writeFileSync(targetPath(`${target}.ts`), source);
}

export class ClusterDetail {
    public name!: string;
    public id!: number;
    public attributes!: Attributes;
    public commands!: Commands;
    public events!: Events;

    constructor(name: string, definition: unknown) {
        Object.assign(this, definition);
        this.name = name;
    }

    get interface() {
        return `${this.name}Interface`;
    }

    get definition() {
        return `${this.name}Cluster`;
    }
}

const availableClusters = new Map<number, ClusterDetail>();
const referencedClusters = new Set<ClusterDetail>();

for (const key in clusterExports) {
    if (key.match(/[a-z]Cluster$/i)) {
        const cluster = (<any>clusterExports)[key];
        if (INTERNAL_CLUSTERS.indexOf(cluster) !== -1) continue;
        availableClusters.set(cluster.id, new ClusterDetail(key.slice(0, key.length - 7), cluster));
    }
}

export class DeviceDetail {
    public requiredServerClusters: ClusterDetail[];
    public optionalServerClusters: ClusterDetail[];

    public constructor(public name: string, public definition: DeviceTypeDefinition) {
        const mapClusters = (list: number[]) => <ClusterDetail[]>list.map((id) => availableClusters.get(id)).filter((cluster) => cluster);

        this.requiredServerClusters = mapClusters(definition.requiredServerClusters);
        this.optionalServerClusters = mapClusters(definition.optionalServerClusters);
        this.requiredServerClusters.concat(this.optionalServerClusters).forEach((c) => referencedClusters.add(c));
    }
};

export const devices = new Array<DeviceDetail>;

for (const key in DeviceTypes) {
    const dt = DeviceTypes[key];
    if (INTERNAL_DEVICE_TYPES.indexOf(dt) == -1)
        devices.push(new DeviceDetail(key, DeviceTypes[key]));
}

export const clusters = new class extends Array<ClusterDetail> {
    constructor() {
        super(...referencedClusters);
    }
};
