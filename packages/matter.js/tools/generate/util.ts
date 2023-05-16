/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readdirSync, unlinkSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { Attributes, Commands, Events } from "../../src/cluster/Cluster.js";
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
        clustersByID[this.id] = this;
        this.name = name;
    }

    get interface() {
        return `${this.name}Interface`;
    }

    get definition() {
        return `${this.name}Cluster`;
    }
}

const clustersByID = new Array<ClusterDetail>;

export const clusters = new class extends Array<ClusterDetail> {
    forID(id: number) {
        return clustersByID[id];
    }
};

for (const key in clusterExports) {
    if (key.match(/[a-z]Cluster$/i)) {
        const cluster = (<any>clusterExports)[key];
        if (INTERNAL_CLUSTERS.indexOf(cluster) !== -1) continue;
        clusters.push(new ClusterDetail(key.slice(0, key.length - 7), (<any>clusterExports)[key]));
    }
}
