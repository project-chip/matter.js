/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterType } from "../../../cluster/ClusterType.js";
import { PowerTopology } from "../../../cluster/definitions/PowerTopologyCluster.js";
import { ImplementationError } from "../../../common/MatterError.js";
import { EndpointNumber } from "../../../datatype/EndpointNumber.js";
import { DescriptorServer } from "../descriptor/DescriptorServer.js";
import { ElectricalEnergyMeasurementBehavior } from "../electrical-energy-measurement/ElectricalEnergyMeasurementBehavior.js";
import { ElectricalPowerMeasurementBehavior } from "../electrical-power-measurement/ElectricalPowerMeasurementBehavior.js";
import { PowerTopologyBehavior } from "./PowerTopologyBehavior.js";

const PowerTopologyBase = PowerTopologyBehavior.with(
    PowerTopology.Feature.SetTopology,
    PowerTopology.Feature.DynamicPowerFlow,
);

/**
 * This is the default server implementation of {@link PowerTopologyBehavior}.
 *
 * The Matter specification requires the PowerTopology cluster to support features we do not enable by default. You
 * should use {@link PowerTopologyServer.with} to specialize the class for the features your implementation supports.
 *
 * The default implementation verifies that the active endpoints are a subset of the available endpoints when
 * the SetTopology and DynamicPowerFlow features are used.
 */
export class PowerTopologyServerLogic extends PowerTopologyBase {
    override initialize(): void {
        if (this.agent.has(ElectricalPowerMeasurementBehavior) || this.agent.has(ElectricalEnergyMeasurementBehavior)) {
            this.agent.get(DescriptorServer).addDeviceTypes("ElectricalSensor");
        }

        this.#assertActiveEndpointsAllowed(this.state.activeEndpoints);

        this.reactTo(this.events.activeEndpoints$Changing, this.#assertActiveEndpointsAllowed);
    }

    #assertActiveEndpointsAllowed(list: EndpointNumber[]) {
        const availableEndpoints = this.state.availableEndpoints;
        list.forEach(endpoint => {
            if (!availableEndpoints.includes(endpoint)) {
                throw new ImplementationError(`Endpoint ${endpoint} is not in the list of available endpoints`);
            }
        });
    }
}

export class PowerTopologyServer extends PowerTopologyServerLogic.for(ClusterType(PowerTopology.Base)) {}
