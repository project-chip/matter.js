/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Device } from "./Device.js";
import { DeviceTypeDefinition } from "./DeviceTypes.js";
import { CodeModel } from "./CodeModel.js";
import { ClusterInterface } from "../cluster/Cluster.js";

const DEFINITION = Symbol("definition");

/**
 * Unify multiple server interfaces into a single type.
 */
type ServerType<T> =
    T extends [ClusterInterface<any, infer S>]
    ? S
    : T extends [ClusterInterface<any, infer S>, ...infer R]
    ? S & ServerType<R>
    : T extends []
    ? {}
    : never;

export type AutoDeviceOptions = {
    endpointId?: number;
}

/**
 * An extension of Device that offers automatic cluster implementation.
 */
export class AutoDevice extends Device {
    constructor(options: AutoDeviceOptions = {}) {
        const definition = (<any>options)[DEFINITION];
        super(definition, [], options.endpointId);
    }

    static with<Interfaces extends ClusterInterface<any, any>[]>(definition: DeviceTypeDefinition, ...interfaces: Interfaces) {
        return this.extendDeviceWithDefinition(this, definition, ...interfaces);
    }

    /**
     * Creates a new class that extends a base device type with additional
     * cluster implementations.
     * 
     * @param base the class to extend
     * @param interfaces the set of interfaces to implement
     * @returns the new class
     */
    protected static
        extendDevice<
            BaseT extends new (...args: any[]) => AutoDevice,
            Interfaces extends ClusterInterface<any, any>[]
        >(
            base: BaseT,
            ...interfaces: Interfaces
        ) {
        return this.extendDeviceWithDefinition(base, undefined, ...interfaces);
    }

    protected static
        extendDeviceWithDefinition<
            BaseT extends new (...args: any[]) => AutoDevice,
            Interfaces extends ClusterInterface<any, any>[]
        >(
            base: BaseT,
            definition?: DeviceTypeDefinition,
            ...interfaces: Interfaces
        ): new (...args: any[]) => InstanceType<BaseT> & ServerType<Interfaces> {
        class ExtendedDevice extends base {
            constructor(...args: any[]) {
                (<any>args)[DEFINITION] = definition;

                super(...args);

                initializers.forEach((initializer) => initializer.apply(this));
            }
        }
        const initializers = new Array<(this: ExtendedDevice) => void>;

        function implementCluster(definition: ClusterInterface<any, any>) {
            const model = CodeModel.forCluster(definition);
            model.attributes.forEach((attr) => {
                attr; // TODO
            });

            model.commands.forEach((command) => {
                command; // TODO
            });

            model.events.forEach((event) => {
                event; // TODO
            });
        }

        interfaces.forEach(implementCluster);

        return <any>ExtendedDevice;
    }
}
