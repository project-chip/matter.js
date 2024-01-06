/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PartsBehavior } from "../../../behavior/definitions/parts/PartsBehavior.js";
import { BasicInformationServer } from "../../../behavior/definitions/basic-information/BasicInformationServer.js";
import { AccessControlServer } from "../../../behavior/definitions/access-control/AccessControlServer.js";
import { GroupKeyManagementServer } from "../../../behavior/definitions/group-key-management/GroupKeyManagementServer.js";
import {
    GeneralCommissioningServer
} from "../../../behavior/definitions/general-commissioning/GeneralCommissioningServer.js";
import {
    AdministratorCommissioningServer
} from "../../../behavior/definitions/administrator-commissioning/AdministratorCommissioningServer.js";
import {
    OperationalCredentialsServer
} from "../../../behavior/definitions/operational-credentials/OperationalCredentialsServer.js";
import { GeneralDiagnosticsServer } from "../../../behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.js";
import {
    PowerSourceConfigurationServer
} from "../../../behavior/definitions/power-source-configuration/PowerSourceConfigurationServer.js";
import { TimeSyncServer } from "../../../behavior/definitions/time-sync/TimeSyncServer.js";
import {
    NetworkCommissioningServer
} from "../../../behavior/definitions/network-commissioning/NetworkCommissioningServer.js";
import {
    LocalizationConfigurationServer
} from "../../../behavior/definitions/localization-configuration/LocalizationConfigurationServer.js";
import {
    TimeFormatLocalizationServer
} from "../../../behavior/definitions/time-format-localization/TimeFormatLocalizationServer.js";
import { UnitLocalizationServer } from "../../../behavior/definitions/unit-localization/UnitLocalizationServer.js";
import { DiagnosticLogsServer } from "../../../behavior/definitions/diagnostic-logs/DiagnosticLogsServer.js";
import { SoftwareDiagnosticsServer } from "../../../behavior/definitions/software-diagnostics/SoftwareDiagnosticsServer.js";
import {
    EthernetNetworkDiagnosticsServer
} from "../../../behavior/definitions/ethernet-network-diagnostics/EthernetNetworkDiagnosticsServer.js";
import {
    WiFiNetworkDiagnosticsServer
} from "../../../behavior/definitions/wi-fi-network-diagnostics/WiFiNetworkDiagnosticsServer.js";
import {
    ThreadNetworkDiagnosticsServer
} from "../../../behavior/definitions/thread-network-diagnostics/ThreadNetworkDiagnosticsServer.js";
import { MutableEndpoint } from "../../type/MutableEndpoint.js";
import { DeviceClasses } from "../../../device/DeviceTypes.js";
import { SupportedBehaviors } from "../../part/SupportedBehaviors.js";
import { Identity } from "../../../util/Type.js";
import { MatterDeviceLibrarySpecificationV1_1 } from "../../../spec/Specifications.js";
import { IndexBehavior } from "../../../behavior/definitions/index/IndexBehavior.js";

export const RootRequirements = {
    /**
     * An implementation for each server cluster supported by the endpoint per the Matter specification.
     */
    server: {
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
    }
};

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
 * @see {@link MatterDeviceLibrarySpecificationV1_1} § 2.1
 */
export interface RootEndpoint extends Identity<typeof RootEndpointDefinition> {}

export const RootEndpoint: RootEndpoint = RootEndpointDefinition;
