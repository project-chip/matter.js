/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PartsBehavior } from "../../../behavior/system/parts/PartsBehavior.js";
import { IndexBehavior } from "../../../behavior/system/index/IndexBehavior.js";
import {
    BasicInformationServer as BaseBasicInformationServer
} from "../../../behavior/definitions/basic-information/BasicInformationServer.js";
import {
    AccessControlServer as BaseAccessControlServer
} from "../../../behavior/definitions/access-control/AccessControlServer.js";
import {
    GroupKeyManagementServer as BaseGroupKeyManagementServer
} from "../../../behavior/definitions/group-key-management/GroupKeyManagementServer.js";
import {
    GeneralCommissioningServer as BaseGeneralCommissioningServer
} from "../../../behavior/definitions/general-commissioning/GeneralCommissioningServer.js";
import {
    AdministratorCommissioningServer as BaseAdministratorCommissioningServer
} from "../../../behavior/definitions/administrator-commissioning/AdministratorCommissioningServer.js";
import {
    OperationalCredentialsServer as BaseOperationalCredentialsServer
} from "../../../behavior/definitions/operational-credentials/OperationalCredentialsServer.js";
import {
    GeneralDiagnosticsServer as BaseGeneralDiagnosticsServer
} from "../../../behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.js";
import {
    PowerSourceConfigurationServer as BasePowerSourceConfigurationServer
} from "../../../behavior/definitions/power-source-configuration/PowerSourceConfigurationServer.js";
import { TimeSyncServer as BaseTimeSyncServer } from "../../../behavior/definitions/time-sync/TimeSyncServer.js";
import {
    NetworkCommissioningServer as BaseNetworkCommissioningServer
} from "../../../behavior/definitions/network-commissioning/NetworkCommissioningServer.js";
import {
    LocalizationConfigurationServer as BaseLocalizationConfigurationServer
} from "../../../behavior/definitions/localization-configuration/LocalizationConfigurationServer.js";
import {
    TimeFormatLocalizationServer as BaseTimeFormatLocalizationServer
} from "../../../behavior/definitions/time-format-localization/TimeFormatLocalizationServer.js";
import {
    UnitLocalizationServer as BaseUnitLocalizationServer
} from "../../../behavior/definitions/unit-localization/UnitLocalizationServer.js";
import {
    DiagnosticLogsServer as BaseDiagnosticLogsServer
} from "../../../behavior/definitions/diagnostic-logs/DiagnosticLogsServer.js";
import {
    SoftwareDiagnosticsServer as BaseSoftwareDiagnosticsServer
} from "../../../behavior/definitions/software-diagnostics/SoftwareDiagnosticsServer.js";
import {
    EthernetNetworkDiagnosticsServer as BaseEthernetNetworkDiagnosticsServer
} from "../../../behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsServer.js";
import {
    WiFiNetworkDiagnosticsServer as BaseWiFiNetworkDiagnosticsServer
} from "../../../behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsServer.js";
import {
    ThreadNetworkDiagnosticsServer as BaseThreadNetworkDiagnosticsServer
} from "../../../behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { DeviceClasses } from "../../../device/DeviceTypes.js";
import { SupportedBehaviors } from "../../properties/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";

/**
 * This defines conformance for a root node endpoint (see System Model specification). This endpoint is akin to a "read
 * me first" endpoint that describes itself and the other endpoints that make up the node.
 *
 *   • Device types with Endpoint scope shall NOT be supported on the same endpoint as this device type.
 *
 *   • Clusters with an Application role shall NOT be supported on the same endpoint as this device type.
 *
 *   • Other device types with Node scope may be supported on the same endpoint as this device type.
 *
 * @see {@link MatterSpecification.v11.Device} § 2.1
 */
export interface RootEndpoint extends Identity<typeof RootEndpointDefinition> {}

export namespace RootRequirements {
    /**
     * The BasicInformation cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link BasicInformationServer} for convenience.
     */
    export const BasicInformationServer = BaseBasicInformationServer;

    /**
     * The AccessControl cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link AccessControlServer} for convenience.
     */
    export const AccessControlServer = BaseAccessControlServer;

    /**
     * The GroupKeyManagement cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link GroupKeyManagementServer} for convenience.
     */
    export const GroupKeyManagementServer = BaseGroupKeyManagementServer;

    /**
     * The GeneralCommissioning cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link GeneralCommissioningServer} for convenience.
     */
    export const GeneralCommissioningServer = BaseGeneralCommissioningServer;

    /**
     * The AdministratorCommissioning cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link AdministratorCommissioningServer} for convenience.
     */
    export const AdministratorCommissioningServer = BaseAdministratorCommissioningServer;

    /**
     * The OperationalCredentials cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link OperationalCredentialsServer} for convenience.
     */
    export const OperationalCredentialsServer = BaseOperationalCredentialsServer;

    /**
     * The GeneralDiagnostics cluster is required by the Matter specification
     *
     * We provide this alias to the default implementation {@link GeneralDiagnosticsServer} for convenience.
     */
    export const GeneralDiagnosticsServer = BaseGeneralDiagnosticsServer;

    /**
     * The PowerSourceConfiguration cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link PowerSourceConfigurationServer} for convenience.
     */
    export const PowerSourceConfigurationServer = BasePowerSourceConfigurationServer;

    /**
     * The TimeSync cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link TimeSyncServer} for convenience.
     */
    export const TimeSyncServer = BaseTimeSyncServer;

    /**
     * The NetworkCommissioning cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link NetworkCommissioningServer} for convenience.
     */
    export const NetworkCommissioningServer = BaseNetworkCommissioningServer;

    /**
     * The LocalizationConfiguration cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link LocalizationConfigurationServer} for convenience.
     */
    export const LocalizationConfigurationServer = BaseLocalizationConfigurationServer;

    /**
     * The TimeFormatLocalization cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link TimeFormatLocalizationServer} for convenience.
     */
    export const TimeFormatLocalizationServer = BaseTimeFormatLocalizationServer;

    /**
     * The UnitLocalization cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link UnitLocalizationServer} for convenience.
     */
    export const UnitLocalizationServer = BaseUnitLocalizationServer;

    /**
     * The DiagnosticLogs cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link DiagnosticLogsServer} for convenience.
     */
    export const DiagnosticLogsServer = BaseDiagnosticLogsServer;

    /**
     * The SoftwareDiagnostics cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link SoftwareDiagnosticsServer} for convenience.
     */
    export const SoftwareDiagnosticsServer = BaseSoftwareDiagnosticsServer;

    /**
     * The EthernetNetworkDiagnostics cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link EthernetNetworkDiagnosticsServer} for convenience.
     */
    export const EthernetNetworkDiagnosticsServer = BaseEthernetNetworkDiagnosticsServer;

    /**
     * The WiFiNetworkDiagnostics cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link WiFiNetworkDiagnosticsServer} for convenience.
     */
    export const WiFiNetworkDiagnosticsServer = BaseWiFiNetworkDiagnosticsServer;

    /**
     * The ThreadNetworkDiagnostics cluster is optional per the Matter specification
     *
     * We provide this alias to the default implementation {@link ThreadNetworkDiagnosticsServer} for convenience.
     */
    export const ThreadNetworkDiagnosticsServer = BaseThreadNetworkDiagnosticsServer;

    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    export const server = {
        mandatory: {
            Parts: PartsBehavior,
            Index: IndexBehavior,
            BasicInformation: BasicInformationServer,
            AccessControl: AccessControlServer,
            GroupKeyManagement: GroupKeyManagementServer,
            GeneralCommissioning: GeneralCommissioningServer,
            AdministratorCommissioning: AdministratorCommissioningServer,
            OperationalCredentials: OperationalCredentialsServer,
            GeneralDiagnostics: GeneralDiagnosticsServer
        },

        optional: {
            PowerSourceConfiguration: PowerSourceConfigurationServer,
            TimeSync: TimeSyncServer,
            NetworkCommissioning: NetworkCommissioningServer,
            LocalizationConfiguration: LocalizationConfigurationServer,
            TimeFormatLocalization: TimeFormatLocalizationServer,
            UnitLocalization: UnitLocalizationServer,
            DiagnosticLogs: DiagnosticLogsServer,
            SoftwareDiagnostics: SoftwareDiagnosticsServer,
            EthernetNetworkDiagnostics: EthernetNetworkDiagnosticsServer,
            WiFiNetworkDiagnostics: WiFiNetworkDiagnosticsServer,
            ThreadNetworkDiagnostics: ThreadNetworkDiagnosticsServer
        }
    };
}

export const RootEndpointDefinition = MutableEndpoint({
    name: "RootNode",
    deviceType: 0x16,
    deviceRevision: 1,
    deviceClass: DeviceClasses.Node,
    requirements: RootRequirements,

    behaviors: SupportedBehaviors(
        RootRequirements.server.mandatory.Parts,
        RootRequirements.server.mandatory.Index,
        RootRequirements.server.mandatory.BasicInformation,
        RootRequirements.server.mandatory.AccessControl,
        RootRequirements.server.mandatory.GroupKeyManagement,
        RootRequirements.server.mandatory.GeneralCommissioning,
        RootRequirements.server.mandatory.AdministratorCommissioning,
        RootRequirements.server.mandatory.OperationalCredentials,
        RootRequirements.server.mandatory.GeneralDiagnostics
    )
});

export const RootEndpoint: RootEndpoint = RootEndpointDefinition;
