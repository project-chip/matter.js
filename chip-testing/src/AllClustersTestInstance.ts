/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AdministratorCommissioningServer } from "@project-chip/matter.js/behavior/definitions/administrator-commissioning";
import { BooleanStateServer } from "@project-chip/matter.js/behavior/definitions/boolean-state";
import { FixedLabelServer } from "@project-chip/matter.js/behavior/definitions/fixed-label";
import { FlowMeasurementServer } from "@project-chip/matter.js/behavior/definitions/flow-measurement";
import { IlluminanceMeasurementServer } from "@project-chip/matter.js/behavior/definitions/illuminance-measurement";
import { LevelControlServer } from "@project-chip/matter.js/behavior/definitions/level-control";
import { LocalizationConfigurationServer } from "@project-chip/matter.js/behavior/definitions/localization-configuration";
import { NetworkCommissioningServer } from "@project-chip/matter.js/behavior/definitions/network-commissioning";
import { OccupancySensingServer } from "@project-chip/matter.js/behavior/definitions/occupancy-sensing";
import { PowerSourceServer } from "@project-chip/matter.js/behavior/definitions/power-source";
import { PressureMeasurementServer } from "@project-chip/matter.js/behavior/definitions/pressure-measurement";
import { PumpConfigurationAndControlServer } from "@project-chip/matter.js/behavior/definitions/pump-configuration-and-control";
import { RelativeHumidityMeasurementServer } from "@project-chip/matter.js/behavior/definitions/relative-humidity-measurement";
import { SwitchServer } from "@project-chip/matter.js/behavior/definitions/switch";
import { TemperatureMeasurementServer } from "@project-chip/matter.js/behavior/definitions/temperature-measurement";
import { ThermostatUserInterfaceConfigurationServer } from "@project-chip/matter.js/behavior/definitions/thermostat-user-interface-configuration";
import { TimeFormatLocalizationServer } from "@project-chip/matter.js/behavior/definitions/time-format-localization";
import { UnitLocalizationServer } from "@project-chip/matter.js/behavior/definitions/unit-localization";
import { UserLabelServer } from "@project-chip/matter.js/behavior/definitions/user-label";
import {
    AdministratorCommissioning,
    BasicInformation,
    LevelControl,
    NetworkCommissioning,
    OccupancySensing,
    PowerSource,
    PumpConfigurationAndControl,
    Switch,
    ThermostatUserInterfaceConfiguration,
    TimeFormatLocalization,
} from "@project-chip/matter.js/cluster";
import { DeviceTypeId, EndpointNumber, VendorId } from "@project-chip/matter.js/datatype";
import { DimmableLightDevice } from "@project-chip/matter.js/devices/DimmableLightDevice";
import { Endpoint } from "@project-chip/matter.js/endpoint";
import { Environment, StorageService } from "@project-chip/matter.js/environment";
import { ServerNode } from "@project-chip/matter.js/node";
import { Storage } from "@project-chip/matter.js/storage";
import { ByteArray } from "@project-chip/matter.js/util";
import { TestInstance } from "./GenericTestApp.js";
import { TestIdentifyServer } from "./cluster/TestIdentifyServer.js";

export class AllClustersTestInstance implements TestInstance {
    serverNode: ServerNode | undefined;
    //storageManager: StorageManager;
    protected appName: string;

    constructor(
        public storage: Storage,
        protected options: {
            appName: string;
            discriminator?: number;
            passcode?: number;
        },
    ) {
        //this.storageManager = new StorageManager(storage);
        this.appName = options.appName;
    }

    /** Set up the test instance MatterServer. */
    async setup() {
        try {
            //await this.storageManager.initialize(); // hacky but works

            this.serverNode = await this.setupServer();
        } catch (error) {
            // Catch and log error, else the test framework hides issues here
            console.log(error);
            console.log((error as Error).stack);
            throw error;
        }
        console.log(`======> ${this.appName}: Setup done`);
    }

    /** Start the test instance MatterServer with the included device. */
    async start() {
        if (!this.serverNode) throw new Error("serverNode not initialized on start");

        const env = Environment.default;
        env.vars.set("mdns.networkInterface", "en0");

        try {
            await this.serverNode.bringOnline();
            const { qrPairingCode } = this.serverNode.state.commissioning.pairingCodes;
            // Magic logging chip testing waits for
            console.log(`SetupQRCode: [${qrPairingCode}]`);
            console.log();
            // Magic logging chip testing waits for
            console.log("mDNS service published:");
            console.log();

            console.log(`======> ${this.appName}: Instance started`);
        } catch (error) {
            // Catch and log error, else the test framework hides issues here
            console.log(error);
        }
        console.log("=====>>> STARTED");
    }

    /** Stop the test instance MatterServer and the device. */
    async stop() {
        if (!this.serverNode) throw new Error("serverNode not initialized on close");
        await this.serverNode.close();
        //this.serverNode.cancel();
        //await this.serverNode.lifecycle.act;
        this.serverNode = undefined;
        console.log(`======> ${this.appName}: Instance stopped`);
    }

    async setupServer(): Promise<ServerNode> {
        Environment.default.get(StorageService).factory = (_namespace: string) => this.storage;

        const networkId = new ByteArray(32);

        const serverNode = await ServerNode.create(
            ServerNode.RootEndpoint.with(
                //BasicInformationServer.enable({ events: { shutDown: true, leave: true } }),
                // We upgrade the AdminCommissioningCluster to also allow Basic Commissioning, so we can use for more testcases
                AdministratorCommissioningServer.with("Basic"),
                LocalizationConfigurationServer,

                NetworkCommissioningServer.with("EthernetNetworkInterface"), // Set the correct Ethernet network Commissioning cluster
                TimeFormatLocalizationServer.with("CalendarFormat"),
                UnitLocalizationServer.with("TemperatureUnit"),
                UserLabelServer,
            ),
            {
                id: "binford-6100",
                network: {
                    port: 5540,
                    //advertiseOnStartup: false,
                },
                commissioning: {
                    passcode: this.options.passcode ?? 20202021,
                    discriminator: this.options.discriminator ?? 3840,
                },
                productDescription: {
                    name: this.appName,
                    deviceType: DeviceTypeId(0xffff),
                },
                administratorCommissioning: {
                    windowStatus: AdministratorCommissioning.CommissioningWindowStatus.WindowNotOpen,
                },
                basicInformation: {
                    vendorName: "Binford",
                    vendorId: VendorId(0xfff1),
                    nodeLabel: "",
                    productName: "MorePowerPro 6100",
                    productLabel: "MorePowerPro 6100",
                    productId: 0x8001,
                    serialNumber: `9999-9999-9999`,
                    manufacturingDate: "20210101",
                    partNumber: "123456",
                    productUrl: "https://test.com",
                    uniqueId: `node-matter-unique`,
                    localConfigDisabled: false,
                    productAppearance: {
                        finish: BasicInformation.ProductFinish.Satin,
                        primaryColor: BasicInformation.Color.Purple,
                    },
                },
                localizationConfiguration: {
                    activeLocale: "en-US",
                    supportedLocales: ["en-US", "de-DE", "es-ES"],
                },
                networkCommissioning: {
                    maxNetworks: 1,
                    interfaceEnabled: true,
                    lastConnectErrorValue: 0,
                    lastNetworkId: networkId,
                    lastNetworkingStatus: NetworkCommissioning.NetworkCommissioningStatus.Success,
                    networks: [{ networkId: networkId, connected: true }],
                },
                timeFormatLocalization: {
                    hourFormat: TimeFormatLocalization.HourFormat["24Hr"],
                    activeCalendarType: TimeFormatLocalization.CalendarType.Gregorian,
                    supportedCalendarTypes: [TimeFormatLocalization.CalendarType.Gregorian],
                },
                userLabel: {
                    labelList: [{ label: "foo", value: "bar" }],
                },
            },
        );

        const endpoint1 = new Endpoint(
            DimmableLightDevice.with(
                BooleanStateServer.enable({ events: { stateChange: true } }),
                FixedLabelServer,
                FlowMeasurementServer,
                TestIdentifyServer,
                IlluminanceMeasurementServer,
                LevelControlServer.with(
                    LevelControl.Feature.OnOff,
                    LevelControl.Feature.Lighting,
                    LevelControl.Feature.Frequency,
                ),
                OccupancySensingServer,
                PowerSourceServer.with(PowerSource.Feature.Battery),
                PressureMeasurementServer,
                PumpConfigurationAndControlServer.with(PumpConfigurationAndControl.Feature.ConstantPressure),
                RelativeHumidityMeasurementServer,
                SwitchServer.with(Switch.Feature.LatchingSwitch),
                TemperatureMeasurementServer,
                ThermostatUserInterfaceConfigurationServer,
                UserLabelServer,
            ),
            {
                number: EndpointNumber(1),
                id: "onoff1",
                booleanState: {
                    stateValue: false,
                },
                fixedLabel: {
                    labelList: [
                        { label: "foo", value: "bar" },
                        { label: "foo2", value: "bar2" },
                    ],
                },
                flowMeasurement: {
                    measuredValue: 1,
                    minMeasuredValue: 0,
                    maxMeasuredValue: 100,
                    tolerance: 0,
                },
                illuminanceMeasurement: {
                    tolerance: 0,
                    lightSensorType: null,
                },
                levelControl: {
                    currentLevel: 0,
                    minLevel: 1,
                    maxLevel: 0xfe,
                    options: {},
                    onOffTransitionTime: 1000,
                    onLevel: 0x50,
                    onTransitionTime: 500,
                    offTransitionTime: 500,
                    defaultMoveRate: 100,
                    remainingTime: 0,
                    startUpCurrentLevel: 100,
                    currentFrequency: 50,
                    minFrequency: 50,
                    maxFrequency: 60,
                    simulateTransitionTimeHandling: true, // enable transition simulation
                },
                occupancySensing: {
                    occupancySensorType: OccupancySensing.OccupancySensorType.Pir,
                    occupancySensorTypeBitmap: { pir: true },
                    occupancy: { occupied: true },
                },
                powerSource: {
                    status: PowerSource.PowerSourceStatus.Active,
                    order: 1,
                    description: "Battery",
                    batChargeLevel: PowerSource.BatChargeLevel.Ok,
                    batReplacementNeeded: false,
                    batReplaceability: PowerSource.BatReplaceability.NotReplaceable,
                },
                pumpConfigurationAndControl: {
                    effectiveOperationMode: PumpConfigurationAndControl.OperationMode.Normal,
                    effectiveControlMode: PumpConfigurationAndControl.ControlMode.ConstantPressure,
                    minConstPressure: 0,
                    maxConstPressure: 100,
                    pumpStatus: {
                        deviceFault: true,
                    },
                    speed: 50,
                    lifetimeEnergyConsumed: 0,
                    lifetimeRunningHours: 0,
                    power: 50,
                    operationMode: PumpConfigurationAndControl.OperationMode.Normal,
                    controlMode: PumpConfigurationAndControl.ControlMode.ConstantPressure,
                },
                relativeHumidityMeasurement: {
                    tolerance: 0,
                    minMeasuredValue: 0,
                    maxMeasuredValue: 100,
                },
                temperatureMeasurement: {
                    tolerance: 0,
                },
                thermostatUserInterfaceConfiguration: {
                    scheduleProgrammingVisibility:
                        ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.ScheduleProgrammingPermitted,
                },
                userLabel: {
                    labelList: [{ label: "foo", value: "bar" }],
                },
            },
        );
        await serverNode.add(endpoint1);

        return serverNode;
    }
}
