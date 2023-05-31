import { ThermostatCluster, SetpointMode, ControlSequenceOfOperation, ThermostatSystemMode, ThermostatRunningMode } from "../ThermostatCluster.js";
import { AttributeInitialValues, ClusterServerHandlers } from "./ClusterServer.js";
import { ClusterServer } from "../../protocol/interaction/InteractionServer.js";

export const ThermostatClusterHandler: () => ClusterServerHandlers<typeof ThermostatCluster> = () => ({

    setpointRaiseLower: async ({ request: { mode, amount }, attributes: { occupiedCoolingSetpoint, occupiedHeatingSetpoint, maxCoolSetpointLimit, maxHeatSetpointLimit, minCoolSetpointLimit, minHeatSetpointLimit } }) => {

        let updatedHeatingSetpoint = occupiedHeatingSetpoint?.get() ?? occupiedHeatingSetpoint?.defaultValue ?? 2600;
        let updatedCoolingSetpoint = occupiedCoolingSetpoint?.get() ?? occupiedCoolingSetpoint?.defaultValue ?? 2000;

        if (mode === SetpointMode.Heat) {
            updatedHeatingSetpoint += amount;
        } else if (mode === SetpointMode.Cool) {
            updatedCoolingSetpoint += amount;
        } else if (mode === SetpointMode.Both) {
            updatedHeatingSetpoint += amount;
            updatedCoolingSetpoint += amount;
        }

        // Ensure the setpoints are within the allowed limits
        updatedHeatingSetpoint = Math.max(
            Math.min(updatedHeatingSetpoint,
                maxHeatSetpointLimit?.get() ?? maxHeatSetpointLimit?.defaultValue ?? 3000),
            minHeatSetpointLimit?.get() ?? minHeatSetpointLimit?.defaultValue ?? 700
        );

        updatedCoolingSetpoint = Math.max(
            Math.min(updatedCoolingSetpoint,
                maxCoolSetpointLimit?.get() ?? maxCoolSetpointLimit?.defaultValue ?? 3000),
            minCoolSetpointLimit?.get() ?? minCoolSetpointLimit?.defaultValue ?? 1600
        );

        // Update the attribute values
        occupiedHeatingSetpoint?.set(updatedHeatingSetpoint);
        occupiedCoolingSetpoint?.set(updatedCoolingSetpoint);

    },

    getRelayStatusLog: async ({ attributes: { localTemperature, occupiedCoolingSetpoint, occupiedHeatingSetpoint, runningMode } }) => {

        let setPointTemp = 0;
        if (runningMode?.get() === ThermostatRunningMode.Cool) {
            setPointTemp = occupiedCoolingSetpoint?.get() ?? occupiedCoolingSetpoint?.defaultValue ?? 2000;
        } else if (runningMode?.get() === ThermostatRunningMode.Heat) {
            setPointTemp = occupiedHeatingSetpoint?.get() ?? occupiedHeatingSetpoint?.defaultValue ?? 2600;
        }

        const currentDate = new Date();

        return {
            timeOfDay: (currentDate.getHours() * 60) + currentDate.getMinutes(),
            humidityInPercentage: 10, //TODO
            localTemperature: localTemperature?.get() ?? 0,
            relayStatus: { unknown_1: true, unknown_2: false, unknown_3: false, unknown_4: false }, //??? nothing in specs
            setpoint: setPointTemp,
            unreadEntries: 0, //TODO if necessary
        };
    }

});

export const createDefaultThermostatClusterServer = (attributeInitialValues?: AttributeInitialValues<typeof ThermostatCluster.attributes>) => ClusterServer(
    ThermostatCluster,
    attributeInitialValues ?? {
        localTemperature: 2500,
        minHeatSetpointLimit: 700,
        maxHeatSetpointLimit: 3000,
        minCoolSetpointLimit: 1600,
        maxCoolSetpointLimit: 3000,
        occupiedCoolingSetpoint: 2000,
        occupiedHeatingSetpoint: 2600,
        minSetpointDeadBand: 1,
        controlSequenceOfOperation: ControlSequenceOfOperation.CoolingAndHeating4Pipes,
        systemMode: ThermostatSystemMode.Off,
        runningMode: ThermostatRunningMode.Off,
    },
    ThermostatClusterHandler()
);