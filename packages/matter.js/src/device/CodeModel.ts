/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Attributes, Cluster, Commands, Events, ClusterInterface } from "../cluster/index.js";
import { DeviceTypeDefinition, DeviceTypes } from "../../src/device/DeviceTypes.js";
import * as clusterExports from "../../src/cluster/index.js";

export { ClusterInterface };

const INTERNAL_CLUSTERS = [
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

/**
 * Converts identifiers of the form "foo-bar", "foo_bar" or "fooBar" into
 * "FooBar" or "fooBar".
 */
function camelize(name: string, upperFirst = true) {
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

class LeafModel<T> {
    constructor(public name: string, public definition: T, private parentSource: string) { }
    get typeName() { return camelize(this.name); }
    get fieldName() { return camelize(this.name, false); }
    get source() { return `${this.parentSource}.${camelize(this.fieldName, false)}` }
}

class LeafModels<T, ST> extends Array<T> {
    constructor(definitions: { [key: string]: ST }, Leaf: new (name: string, definition: ST, cluster: string) => T, cluster: string) {
        if (Leaf == undefined) throw new Error("whaaaaaaaaaaa?")
        const type = Leaf.name.slice(0, Leaf.name.length - 5).toLowerCase();
        super(...Object.entries(definitions).map(([k, v]) => new Leaf(k, v, `${cluster}.${type}s`)));
    }
}

export class AttributeModel extends LeafModel<clusterExports.Attribute<any>> {
    get writable() { return this.definition.writable; }
    get id() { return this.definition.id; }
    get schema() { return this.definition.schema; }
    get optional() { return this.definition.optional; }
    get default() { return this.definition.default }
    get handler() { return `on${this.typeName}Change` }
    get getter() { return `get${this.typeName}` }
    get fixed() { return false; /* TODO - update when metadata lands */ }
}

export class CommandModel extends LeafModel<clusterExports.Command<any, any>> {
    get requestSchema() { return this.definition.requestSchema; }
    get responseSchema() { return this.definition.responseSchema; }
    get invoker() { return `send${this.typeName}`; }
    get handler() { return `on${this.typeName}`; }
}

export class EventModel extends LeafModel<clusterExports.Event<any>> {
    get schema() { return this.definition.schema; }
    get handler() { return `on${this.typeName}`; }
    get invoker() { return `trigger${this.typeName}`; };
}

export type UntypedHandlers = { [key: string]: (...any: any[]) => any };
type UntypedHandlerFactory = () => UntypedHandlers;

function findDefaultHandlers(cluster: ClusterModel): UntypedHandlers {
    let handlers = <UntypedHandlerFactory>(<any>clusterExports)[`${cluster.name}ClusterHandler`];
    if (handlers && typeof handlers == "function") return handlers();
    return {};
}

function defaultState(cluster: ClusterModel) {
    const result = <{ [key: string]: any }>{};

    cluster.attributes.forEach((attr) => {
        if (attr.default !== undefined) {
            result[attr.name] = attr.default;
        }
    });

    return result;
}

/**
 * Information about a cluster.  Extracted from the cluster definition (a
 * Cluster instance).
 */
export class ClusterModel {
    get id() { return this.definition.id; }
    get name() { return this.definitionName.slice(0, this.definitionName.length - 7); }
    get interfaceName() { return `${this.name}Interface`; }
    public defaultServerHandlers: UntypedHandlers;
    public defaultState: { [key: string]: any };

    constructor(
        public readonly definitionName: string,
        public readonly definition: Cluster<any, any, Attributes, Commands, Events>,
        public readonly extensions: Array<ClusterModel>,
        public readonly attributes = new LeafModels(definition.attributes, AttributeModel, definitionName),
        public readonly commands = new LeafModels(definition.commands, CommandModel, definitionName),
        public readonly events = new LeafModels(definition.events, EventModel, definitionName))
    {
        this.defaultServerHandlers = findDefaultHandlers(this);
        this.defaultState = defaultState(this);
    }
}

/**
 * Information about a device.  Extract from the device definition (a
 * DeviceTypeDefinition instance).
 */
export class DeviceModel {
    public constructor(
        public readonly key: string,
        public readonly definition: DeviceTypeDefinition,
        public readonly requiredServerClusters: ClusterModel[],
        public readonly optionalServerClusters: ClusterModel[],
        public readonly name = camelize(key)) { }
}

/**
 * Internal model of high-level device API, used by code generation and runtime
 * interface implementation.
 */
export class CodeModel {
    static readonly devices = new Array<DeviceModel>;
    static readonly clusters = new Array<ClusterModel>;

    static forCluster(cluster: ClusterInterface<any, any, any>): ClusterModel {
        const model = this.clusters.find((detail) => detail.definition === cluster.definition);
        if (model) return model;
        throw new Error("Unsupported cluster");
    }

    static {
        const availableClusters = new Map<number, ClusterModel>();
        const referencedClusters = new Set<ClusterModel>();

        const extensions = new Map<number, ClusterModel[]>();
        for (const key in clusterExports) {
            if (!key.match(/[a-z]Cluster$/i)) continue;

            const cluster = (<any>clusterExports)[key];
            if (!cluster.id || !cluster.name || !cluster.revision) continue;
            if (INTERNAL_CLUSTERS.indexOf(cluster) !== -1) continue;

            let clusterExtensions = extensions.get(cluster.id);
            if (!clusterExtensions) {
                clusterExtensions = Array<ClusterModel>();
                extensions.set(cluster.id, clusterExtensions);
            }
            const detail = new ClusterModel(key, cluster, clusterExtensions);
            if (cluster.extension) {
                clusterExtensions.push(detail);
            } else {
                availableClusters.set(cluster.id, detail);
            }
        }

        for (const key in DeviceTypes) {
            const dt = DeviceTypes[key];
            const mapClusters = (list: number[]) => <ClusterModel[]>list.map((id) => availableClusters.get(id)).filter((cluster) => cluster);

            const requiredServerClusters = mapClusters(dt.requiredServerClusters);
            const optionalServerClusters = requiredServerClusters
                .map((c) => c.extensions)
                .flat()
                .concat(mapClusters(dt.optionalServerClusters));
            requiredServerClusters.concat(optionalServerClusters).forEach((c) => referencedClusters.add(c));
            if (INTERNAL_DEVICE_TYPES.indexOf(dt) == -1)
                this.devices.push(new DeviceModel(key, DeviceTypes[key], requiredServerClusters, optionalServerClusters));
        }

        this.clusters.push(...referencedClusters);
    }
}
