/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bytes, InternalError } from "@matter/general";
import { Endpoint, NumberTag, ServerNode } from "@matter/main";
import {
    AdministratorCommissioningServer,
    AirQualityServer,
    BooleanStateServer,
    CarbonDioxideConcentrationMeasurementServer,
    CarbonMonoxideConcentrationMeasurementServer,
    ColorControlServer,
    DescriptorServer,
    FixedLabelServer,
    FlowMeasurementServer,
    FormaldehydeConcentrationMeasurementServer,
    IlluminanceMeasurementServer,
    LocalizationConfigurationServer,
    ModeSelectServer,
    NetworkCommissioningServer,
    NitrogenDioxideConcentrationMeasurementServer,
    OccupancySensingServer,
    OzoneConcentrationMeasurementServer,
    Pm10ConcentrationMeasurementServer,
    Pm1ConcentrationMeasurementServer,
    Pm25ConcentrationMeasurementServer,
    PowerSourceServer,
    PowerTopologyServer,
    PressureMeasurementServer,
    PumpConfigurationAndControlServer,
    RadonConcentrationMeasurementServer,
    RelativeHumidityMeasurementServer,
    SwitchServer,
    TemperatureMeasurementServer,
    ThermostatUserInterfaceConfigurationServer,
    TimeFormatLocalizationServer,
    TotalVolatileOrganicCompoundsConcentrationMeasurementServer,
    UnitLocalizationServer,
    UserLabelServer,
} from "@matter/main/behaviors";
import {
    AdministratorCommissioning,
    AirQuality,
    BasicInformation,
    ColorControl,
    ConcentrationMeasurement,
    Descriptor,
    LevelControl,
    ModeSelect,
    OccupancySensing,
    PowerSource,
    PowerTopology,
    PumpConfigurationAndControl,
    ResourceMonitoring,
    Switch,
    ThermostatUserInterfaceConfiguration,
    TimeFormatLocalization,
    WindowCovering,
} from "@matter/main/clusters";
import { OnOffLightDevice } from "@matter/main/devices";
import { DeviceTypeId, EndpointNumber, VendorId } from "@matter/main/types";
import { BackchannelCommand } from "@matter/testing";
import { TestActivatedCarbonFilterMonitoringServer } from "./cluster/TestActivatedCarbonFilterMonitoringServer.js";
import { TestGeneralDiagnosticsServer } from "./cluster/TestGeneralDiagnosticsServer.js";
import { TestHepaFilterMonitoringServer } from "./cluster/TestHEPAFilterMonitoringServer.js";
import { TestIdentifyServer } from "./cluster/TestIdentifyServer.js";
import { TestLevelControlServer } from "./cluster/TestLevelControlServer.js";
import { TestWindowCoveringServer } from "./cluster/TestWindowCoveringServer.js";
import { TestInstanceConfig } from "./GenericTestApp.js";
import { NodeTestInstance } from "./NodeTestInstance.js";
import { SwitchSimulator } from "./simulators/SwitchSimulator.js";

export class AllClustersTestInstance extends NodeTestInstance {
    static override id = "binford-6100";

    constructor(config: TestInstanceConfig) {
        super(config);
    }

    /** Set up the test instance MatterServer. */
    override async initialize() {
        await this.activateCommandPipe("all_clusters");
        await super.initialize();
    }

    /** Process a backchannel command */
    override async backchannel(command: BackchannelCommand) {
        const name = command.name;

        const endpointId = "endpointId" in command ? command.endpointId : undefined;
        let endpoint: Endpoint | undefined;
        if (endpointId !== undefined) {
            // Find the endpoint instance if an EndpointId is set
            this.node?.visit(visitedEndpoint => {
                if (visitedEndpoint.number === endpointId) {
                    if (endpoint !== undefined) {
                        throw new InternalError("Duplicate endpoint number? Should never happen");
                    }
                    endpoint = visitedEndpoint;
                }
            });
        }

        switch (name) {
            case "simulateLongPress":
                if (endpoint === undefined) {
                    throw new Error(`Endpoint ${endpointId} not found`);
                }
                await SwitchSimulator.simulateLongPress(endpoint, command);
                break;
            case "simulateMultiPress":
                if (endpoint === undefined) {
                    throw new Error(`Endpoint ${endpointId} not found`);
                }
                await SwitchSimulator.simulateMultiPress(endpoint, command);
                break;
            case "simulateLatchPosition":
                if (endpoint === undefined) {
                    throw new Error(`Endpoint ${endpointId} not found`);
                }
                await endpoint.setStateOf(SwitchServer, { currentPosition: command.positionId });
                break;
            case "simulateSwitchIdle":
                if (endpoint === undefined) {
                    throw new Error(`Endpoint ${endpointId} not found`);
                }
                await endpoint.setStateOf(SwitchServer, { currentPosition: 0 });
                break;
            default:
                await super.backchannel(command);
        }
    }

    async setupServer(): Promise<ServerNode> {
        // Network ID is string "eth-app" in TC_CNET_4_3
        const networkId = Bytes.fromHex("6574682D617070");

        let deviceTestEnableKey = Bytes.fromHex(NodeTestInstance.testEnableKey);
        const argsEnableKeyIndex = process.argv.indexOf("--enable-key");
        if (argsEnableKeyIndex !== -1) {
            deviceTestEnableKey = Bytes.fromHex(process.argv[argsEnableKeyIndex + 1]);
        }

        const serverNode = await ServerNode.create(
            ServerNode.RootEndpoint.with(
                //BasicInformationServer.enable({ events: { shutDown: true, leave: true } }),
                // We upgrade the AdminCommissioningCluster to also allow Basic Commissioning, so we can use for more testcases
                AdministratorCommissioningServer.with("Basic"),
                TestGeneralDiagnosticsServer.enable({
                    events: { hardwareFaultChange: true, radioFaultChange: true, networkFaultChange: true },
                }),
                LocalizationConfigurationServer,

                NetworkCommissioningServer.with("EthernetNetworkInterface"), // Set the correct Ethernet network Commissioning cluster
                TimeFormatLocalizationServer.with("CalendarFormat"),
                UnitLocalizationServer.with("TemperatureUnit"),
                UserLabelServer,
            ),
            {
                id: this.id,
                environment: this.env,
                events: {
                    nonvolatile: NodeTestInstance.nonvolatileEvents,
                },
                network: {
                    port: 5540,
                    //advertiseOnStartup: false,
                },
                commissioning: {
                    passcode: this.config.passcode ?? 20202021,
                    discriminator: this.config.discriminator ?? 3840,
                },
                productDescription: {
                    name: this.appName,
                    deviceType: DeviceTypeId(0x0101),
                },
                accessControl: {
                    extension: [],
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
                    reachable: true,
                },
                generalDiagnostics: {
                    totalOperationalHours: 0, // set to enable it
                    activeHardwareFaults: [], // set to enable it
                    activeRadioFaults: [], // set to enable it
                    activeNetworkFaults: [], // set to enable it
                    testEventTriggersEnabled: true, // Enable Test events
                    deviceTestEnableKey,
                },
                localizationConfiguration: {
                    activeLocale: "en-US",
                    supportedLocales: ["en-US", "de-DE", "es-ES"],
                },
                networkCommissioning: {
                    maxNetworks: 1,
                    interfaceEnabled: true,
                    networks: [{ networkId: networkId, connected: true }],

                    // We fail TC_CNET_4_3 with these
                    //lastConnectErrorValue: 0,
                    //lastNetworkId: networkId,
                    //lastNetworkingStatus: NetworkCommissioning.NetworkCommissioningStatus.Success,
                },
                operationalCredentials: {
                    supportedFabrics: 16,
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
            OnOffLightDevice.with(
                AirQualityServer.with(
                    AirQuality.Feature.Fair,
                    AirQuality.Feature.Moderate,
                    AirQuality.Feature.VeryPoor,
                    AirQuality.Feature.ExtremelyPoor,
                ),
                TestActivatedCarbonFilterMonitoringServer,
                BooleanStateServer.enable({ events: { stateChange: true } }),
                CarbonDioxideConcentrationMeasurementServer.with(
                    "NumericMeasurement",
                    "PeakMeasurement",
                    "AverageMeasurement",
                ),
                CarbonMonoxideConcentrationMeasurementServer.with(
                    ConcentrationMeasurement.Feature.LevelIndication,
                    ConcentrationMeasurement.Feature.MediumLevel,
                    ConcentrationMeasurement.Feature.CriticalLevel,
                ),
                ColorControlServer.with(
                    ColorControl.Feature.HueSaturation,
                    ColorControl.Feature.EnhancedHue,
                    ColorControl.Feature.ColorLoop,
                    ColorControl.Feature.Xy,
                    ColorControl.Feature.ColorTemperature,
                ),
                DescriptorServer.with(Descriptor.Feature.TagList),
                FixedLabelServer,
                FlowMeasurementServer,
                FormaldehydeConcentrationMeasurementServer.with(
                    ConcentrationMeasurement.Feature.LevelIndication,
                    ConcentrationMeasurement.Feature.MediumLevel,
                    ConcentrationMeasurement.Feature.CriticalLevel,
                    ConcentrationMeasurement.Feature.NumericMeasurement,
                    ConcentrationMeasurement.Feature.PeakMeasurement,
                    ConcentrationMeasurement.Feature.AverageMeasurement,
                ),
                TestHepaFilterMonitoringServer,
                TestIdentifyServer,
                IlluminanceMeasurementServer,
                TestLevelControlServer.with(
                    LevelControl.Feature.OnOff,
                    LevelControl.Feature.Lighting,
                    LevelControl.Feature.Frequency,
                ),
                ModeSelectServer.with(ModeSelect.Feature.OnOff),
                NitrogenDioxideConcentrationMeasurementServer.with(
                    ConcentrationMeasurement.Feature.LevelIndication,
                    ConcentrationMeasurement.Feature.MediumLevel,
                    ConcentrationMeasurement.Feature.CriticalLevel,
                    ConcentrationMeasurement.Feature.NumericMeasurement,
                    ConcentrationMeasurement.Feature.PeakMeasurement,
                    ConcentrationMeasurement.Feature.AverageMeasurement,
                ),
                OccupancySensingServer,
                OzoneConcentrationMeasurementServer.with(
                    ConcentrationMeasurement.Feature.LevelIndication,
                    ConcentrationMeasurement.Feature.MediumLevel,
                    ConcentrationMeasurement.Feature.CriticalLevel,
                    ConcentrationMeasurement.Feature.NumericMeasurement,
                    ConcentrationMeasurement.Feature.PeakMeasurement,
                    ConcentrationMeasurement.Feature.AverageMeasurement,
                ),
                Pm1ConcentrationMeasurementServer.with(
                    ConcentrationMeasurement.Feature.LevelIndication,
                    ConcentrationMeasurement.Feature.MediumLevel,
                    ConcentrationMeasurement.Feature.CriticalLevel,
                    ConcentrationMeasurement.Feature.NumericMeasurement,
                    ConcentrationMeasurement.Feature.PeakMeasurement,
                    ConcentrationMeasurement.Feature.AverageMeasurement,
                ),
                Pm10ConcentrationMeasurementServer.with(
                    ConcentrationMeasurement.Feature.LevelIndication,
                    ConcentrationMeasurement.Feature.MediumLevel,
                    ConcentrationMeasurement.Feature.CriticalLevel,
                    ConcentrationMeasurement.Feature.NumericMeasurement,
                    ConcentrationMeasurement.Feature.PeakMeasurement,
                    ConcentrationMeasurement.Feature.AverageMeasurement,
                ),
                Pm25ConcentrationMeasurementServer.with(
                    ConcentrationMeasurement.Feature.LevelIndication,
                    ConcentrationMeasurement.Feature.MediumLevel,
                    ConcentrationMeasurement.Feature.CriticalLevel,
                    ConcentrationMeasurement.Feature.NumericMeasurement,
                    ConcentrationMeasurement.Feature.PeakMeasurement,
                    ConcentrationMeasurement.Feature.AverageMeasurement,
                ),
                PowerSourceServer.with(PowerSource.Feature.Battery),
                PowerTopologyServer.with(PowerTopology.Feature.SetTopology, PowerTopology.Feature.DynamicPowerFlow),
                PressureMeasurementServer,
                PumpConfigurationAndControlServer.with(
                    PumpConfigurationAndControl.Feature.ConstantPressure,

                    // PCC_2_1 doesn't specify proper PICS for attributes associated with these features so requires
                    // them event though we don't enable the feature
                    PumpConfigurationAndControl.Feature.ConstantFlow,
                    PumpConfigurationAndControl.Feature.ConstantTemperature,
                ),
                RadonConcentrationMeasurementServer.with(
                    ConcentrationMeasurement.Feature.LevelIndication,
                    ConcentrationMeasurement.Feature.MediumLevel,
                    ConcentrationMeasurement.Feature.CriticalLevel,
                    ConcentrationMeasurement.Feature.NumericMeasurement,
                    ConcentrationMeasurement.Feature.PeakMeasurement,
                    ConcentrationMeasurement.Feature.AverageMeasurement,
                ),
                RelativeHumidityMeasurementServer,
                SwitchServer.with(Switch.Feature.LatchingSwitch),
                TemperatureMeasurementServer,
                ThermostatUserInterfaceConfigurationServer,
                TotalVolatileOrganicCompoundsConcentrationMeasurementServer.with(
                    "LevelIndication",
                    "MediumLevel",
                    "CriticalLevel",
                    "NumericMeasurement",
                    "PeakMeasurement",
                    "AverageMeasurement",
                ),
                UserLabelServer,
                TestWindowCoveringServer,
            ),
            {
                number: EndpointNumber(1),
                id: "ep1",
                activatedCarbonFilterMonitoring: {
                    condition: 20,
                    degradationDirection: ResourceMonitoring.DegradationDirection.Down,
                    changeIndication: ResourceMonitoring.ChangeIndication.Critical,
                    inPlaceIndicator: true,
                    lastChangedTime: null,
                    replacementProductList: [
                        {
                            productIdentifierType: ResourceMonitoring.ProductIdentifierType.Ean,
                            productIdentifierValue: "1234567890123",
                        },
                    ],
                },
                airQuality: {
                    airQuality: AirQuality.AirQualityEnum.Fair,
                },
                booleanState: {
                    stateValue: false,
                },
                carbonDioxideConcentrationMeasurement: {
                    measuredValue: 12.34,
                    minMeasuredValue: 0,
                    maxMeasuredValue: 100,
                    peakMeasuredValue: 34.56,
                    peakMeasuredValueWindow: 10000,
                    averageMeasuredValue: 23.45,
                    averageMeasuredValueWindow: 1000,
                    uncertainty: 1.5,
                    measurementUnit: ConcentrationMeasurement.MeasurementUnit.Ppm,
                    measurementMedium: ConcentrationMeasurement.MeasurementMedium.Water,
                },
                carbonMonoxideConcentrationMeasurement: {
                    measurementMedium: ConcentrationMeasurement.MeasurementMedium.Air,
                    levelValue: ConcentrationMeasurement.LevelValue.Critical,
                },
                colorControl: {
                    coupleColorTempToLevelMinMireds: 1,
                    remainingTime: 0,
                    driftCompensation: 0,
                    compensationText: "foo",
                    startUpColorTemperatureMireds: 32639,
                    numberOfPrimaries: 6,
                    primary1X: 0,
                    primary1Y: 0,
                    primary1Intensity: 0,
                    primary2X: 0,
                    primary2Y: 0,
                    primary2Intensity: 0,
                    primary3X: 0,
                    primary3Y: 0,
                    primary3Intensity: 0,
                    primary4X: 0,
                    primary4Y: 0,
                    primary4Intensity: 0,
                    primary5X: 0,
                    primary5Y: 0,
                    primary5Intensity: 0,
                    primary6X: 0,
                    primary6Y: 0,
                    primary6Intensity: 0,
                    whitePointX: 0,
                    whitePointY: 0,
                    colorPointRx: 0,
                    colorPointRy: 0,
                    colorPointRIntensity: 0,
                    colorPointGx: 0,
                    colorPointGy: 0,
                    colorPointGIntensity: 0,
                    colorPointBx: 0,
                    colorPointBy: 0,
                    colorPointBIntensity: 0,
                    managedTransitionTimeHandling: true, // enable transition management
                },
                descriptor: {
                    tagList: [NumberTag.One],
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
                formaldehydeConcentrationMeasurement: {
                    measuredValue: 12.34,
                    minMeasuredValue: 0,
                    maxMeasuredValue: 100,
                    peakMeasuredValue: 34.56,
                    peakMeasuredValueWindow: 10000,
                    averageMeasuredValue: 23.45,
                    averageMeasuredValueWindow: 1000,
                    uncertainty: 1.5,
                    measurementUnit: ConcentrationMeasurement.MeasurementUnit.Ppm,
                    measurementMedium: ConcentrationMeasurement.MeasurementMedium.Water,
                    levelValue: ConcentrationMeasurement.LevelValue.Critical,
                },
                hepaFilterMonitoring: {
                    condition: 20,
                    degradationDirection: ResourceMonitoring.DegradationDirection.Down,
                    changeIndication: ResourceMonitoring.ChangeIndication.Warning,
                    inPlaceIndicator: true,
                    lastChangedTime: null,
                    replacementProductList: [
                        {
                            productIdentifierType: ResourceMonitoring.ProductIdentifierType.Ean,
                            productIdentifierValue: "1234567890123",
                        },
                    ],
                },
                illuminanceMeasurement: {
                    tolerance: 0,
                    lightSensorType: null,
                },
                levelControl: {
                    currentLevel: 1,
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
                    managedTransitionTimeHandling: true, // enable transition management
                },
                modeSelect: {
                    description: "ModeSelect",
                    standardNamespace: null,
                    supportedModes: [
                        { label: "Black", mode: 0, semanticTags: [{ mfgCode: 0, value: 0 }] },
                        { label: "Cappuccino", mode: 4, semanticTags: [{ mfgCode: 0, value: 0 }] },
                        { label: "Espresso", mode: 7, semanticTags: [{ mfgCode: 0, value: 0 }] },
                    ],
                    currentMode: 0,
                    startUpMode: 4,
                    onMode: 7,
                },
                nitrogenDioxideConcentrationMeasurement: {
                    measuredValue: 12.34,
                    minMeasuredValue: 0,
                    maxMeasuredValue: 100,
                    peakMeasuredValue: 34.56,
                    peakMeasuredValueWindow: 10000,
                    averageMeasuredValue: 23.45,
                    averageMeasuredValueWindow: 1000,
                    uncertainty: 1.5,
                    measurementUnit: ConcentrationMeasurement.MeasurementUnit.Ppm,
                    measurementMedium: ConcentrationMeasurement.MeasurementMedium.Water,
                    levelValue: ConcentrationMeasurement.LevelValue.Critical,
                },
                occupancySensing: {
                    occupancySensorType: OccupancySensing.OccupancySensorType.Pir,
                    occupancySensorTypeBitmap: { pir: true },
                    occupancy: { occupied: true },
                },
                ozoneConcentrationMeasurement: {
                    measuredValue: 12.34,
                    minMeasuredValue: 0,
                    maxMeasuredValue: 100,
                    peakMeasuredValue: 34.56,
                    peakMeasuredValueWindow: 10000,
                    averageMeasuredValue: 23.45,
                    averageMeasuredValueWindow: 1000,
                    uncertainty: 1.5,
                    measurementUnit: ConcentrationMeasurement.MeasurementUnit.Ppm,
                    measurementMedium: ConcentrationMeasurement.MeasurementMedium.Water,
                    levelValue: ConcentrationMeasurement.LevelValue.Critical,
                },
                pm1ConcentrationMeasurement: {
                    measuredValue: 12.34,
                    minMeasuredValue: 0,
                    maxMeasuredValue: 100,
                    peakMeasuredValue: 34.56,
                    peakMeasuredValueWindow: 10000,
                    averageMeasuredValue: 23.45,
                    averageMeasuredValueWindow: 1000,
                    uncertainty: 1.5,
                    measurementUnit: ConcentrationMeasurement.MeasurementUnit.Ppm,
                    measurementMedium: ConcentrationMeasurement.MeasurementMedium.Water,
                    levelValue: ConcentrationMeasurement.LevelValue.Critical,
                },
                pm10ConcentrationMeasurement: {
                    measuredValue: 12.34,
                    minMeasuredValue: 0,
                    maxMeasuredValue: 100,
                    peakMeasuredValue: 34.56,
                    peakMeasuredValueWindow: 10000,
                    averageMeasuredValue: 23.45,
                    averageMeasuredValueWindow: 1000,
                    uncertainty: 1.5,
                    measurementUnit: ConcentrationMeasurement.MeasurementUnit.Ppm,
                    measurementMedium: ConcentrationMeasurement.MeasurementMedium.Water,
                    levelValue: ConcentrationMeasurement.LevelValue.Critical,
                },
                pm25ConcentrationMeasurement: {
                    measuredValue: 12.34,
                    minMeasuredValue: 0,
                    maxMeasuredValue: 100,
                    peakMeasuredValue: 34.56,
                    peakMeasuredValueWindow: 10000,
                    averageMeasuredValue: 23.45,
                    averageMeasuredValueWindow: 1000,
                    uncertainty: 1.5,
                    measurementUnit: ConcentrationMeasurement.MeasurementUnit.Ppm,
                    measurementMedium: ConcentrationMeasurement.MeasurementMedium.Water,
                    levelValue: ConcentrationMeasurement.LevelValue.Critical,
                },
                powerSource: {
                    status: PowerSource.PowerSourceStatus.Active,
                    order: 1,
                    description: "Battery",
                    batChargeLevel: PowerSource.BatChargeLevel.Ok,
                    batReplacementNeeded: false,
                    batReplaceability: PowerSource.BatReplaceability.NotReplaceable,
                },
                powerTopology: {
                    availableEndpoints: [EndpointNumber(1)],
                    activeEndpoints: [EndpointNumber(1)],
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
                radonConcentrationMeasurement: {
                    measuredValue: 12.34,
                    minMeasuredValue: 0,
                    maxMeasuredValue: 100,
                    peakMeasuredValue: 34.56,
                    peakMeasuredValueWindow: 10000,
                    averageMeasuredValue: 23.45,
                    averageMeasuredValueWindow: 1000,
                    uncertainty: 1.5,
                    measurementUnit: ConcentrationMeasurement.MeasurementUnit.Ppm,
                    measurementMedium: ConcentrationMeasurement.MeasurementMedium.Water,
                    levelValue: ConcentrationMeasurement.LevelValue.Critical,
                },
                relativeHumidityMeasurement: {
                    tolerance: 0,
                    minMeasuredValue: 0,
                    maxMeasuredValue: 100,
                },
                temperatureMeasurement: {
                    tolerance: 0,
                    minMeasuredValue: 0,
                    maxMeasuredValue: 100,
                },
                thermostatUserInterfaceConfiguration: {
                    scheduleProgrammingVisibility:
                        ThermostatUserInterfaceConfiguration.ScheduleProgrammingVisibility.ScheduleProgrammingPermitted,
                },
                userLabel: {
                    labelList: [{ label: "foo", value: "bar" }],
                },
                totalVolatileOrganicCompoundsConcentrationMeasurement: {
                    measuredValue: 12.34,
                    minMeasuredValue: 0,
                    maxMeasuredValue: 100,
                    peakMeasuredValue: 34.56,
                    peakMeasuredValueWindow: 10000,
                    averageMeasuredValue: 23.45,
                    averageMeasuredValueWindow: 1000,
                    uncertainty: 1.5,
                    measurementUnit: ConcentrationMeasurement.MeasurementUnit.Ppm,
                    measurementMedium: ConcentrationMeasurement.MeasurementMedium.Water,
                    levelValue: ConcentrationMeasurement.LevelValue.Critical,
                },
                windowCovering: {
                    type: WindowCovering.WindowCoveringType.TiltBlindLift,
                    currentPositionLiftPercent100ths: 0,
                    currentPositionTiltPercent100ths: 0,
                    safetyStatus: {},
                    currentPositionLift: 0,
                    currentPositionTilt: 0,
                    numberOfActuationsLift: 0,
                    numberOfActuationsTilt: 0,
                    currentPositionLiftPercentage: 0,
                    currentPositionTiltPercentage: 0,
                    physicalClosedLimitLift: 0,
                    physicalClosedLimitTilt: 0,
                    installedOpenLimitLift: 0,
                    installedOpenLimitTilt: 0,
                },
            },
        );
        await serverNode.add(endpoint1);

        const endpoint3 = new Endpoint(
            OnOffLightDevice.with(
                DescriptorServer.with(Descriptor.Feature.TagList),
                SwitchServer.with(
                    Switch.Feature.MomentarySwitch,
                    Switch.Feature.MomentarySwitchRelease,
                    Switch.Feature.MomentarySwitchLongPress, //MS & MSR & MSL works in testing
                    //Switch.Feature.MomentarySwitchMultiPress, // Can not be tested right now because https://github.com/project-chip/connectedhomeip/issues/34923
                ),
            ),
            {
                number: EndpointNumber(3),
                id: "ep3",
                descriptor: {
                    tagList: [
                        {
                            ...NumberTag.Three,
                            label: "EP3",
                        },
                    ],
                },
                switch: {
                    rawPosition: 0,
                    longPressDelay: 5000, // Expected by the Python test framework to simulate a long press
                    //multiPressDelay: 700,
                },
            },
        );
        await serverNode.add(endpoint3);

        return serverNode;
    }
}
