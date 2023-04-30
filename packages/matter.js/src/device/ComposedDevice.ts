/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { Endpoint } from "./Endpoint.js";
import { Device } from "./Device.js";
import { DeviceTypeDefinition } from "../common/DeviceTypes.js";
import { AtLeastOne } from "../util/Array.js";

export class ComposedDevice extends Endpoint {
    constructor(
        deviceTypes: AtLeastOne<DeviceTypeDefinition>,
        devices: Device[] = [],
        endpointId?: number
    ) {
        super(deviceTypes, [], endpointId);
        devices.forEach(device => this.addDevice(device));
    }

    addDevice(device: Device) {
        this.addChildEndpoint(device);
    }

    getDevices() {
        return this.getChildEndpoints();
    }

    override verifyRequiredClusters() {
        // TODO find out what to really check here
        return;
    }
}
