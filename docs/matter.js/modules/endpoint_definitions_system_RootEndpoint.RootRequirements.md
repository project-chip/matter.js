[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/system/RootEndpoint](endpoint_definitions_system_RootEndpoint.md) / RootRequirements

# Namespace: RootRequirements

[endpoint/definitions/system/RootEndpoint](endpoint_definitions_system_RootEndpoint.md).RootRequirements

## Table of contents

### Variables

- [AccessControlServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#accesscontrolserver)
- [AdministratorCommissioningServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#administratorcommissioningserver)
- [BasicInformationServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#basicinformationserver)
- [DiagnosticLogsServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#diagnosticlogsserver)
- [EthernetNetworkDiagnosticsServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#ethernetnetworkdiagnosticsserver)
- [GeneralCommissioningServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#generalcommissioningserver)
- [GeneralDiagnosticsServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#generaldiagnosticsserver)
- [GroupKeyManagementServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#groupkeymanagementserver)
- [LocalizationConfigurationServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#localizationconfigurationserver)
- [NetworkCommissioningServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#networkcommissioningserver)
- [OperationalCredentialsServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#operationalcredentialsserver)
- [PowerSourceConfigurationServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#powersourceconfigurationserver)
- [SoftwareDiagnosticsServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#softwarediagnosticsserver)
- [ThreadNetworkDiagnosticsServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#threadnetworkdiagnosticsserver)
- [TimeFormatLocalizationServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#timeformatlocalizationserver)
- [TimeSyncServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#timesyncserver)
- [UnitLocalizationServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#unitlocalizationserver)
- [WiFiNetworkDiagnosticsServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#wifinetworkdiagnosticsserver)
- [server](endpoint_definitions_system_RootEndpoint.RootRequirements.md#server)

## Variables

### AccessControlServer

• `Const` **AccessControlServer**: typeof [`AccessControlServer`](behavior_definitions_access_control_export.AccessControlServer.md) = `BaseAccessControlServer`

The AccessControl cluster is required by the Matter specification

We provide this alias to the default implementation [AccessControlServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#accesscontrolserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:95](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L95)

___

### AdministratorCommissioningServer

• `Const` **AdministratorCommissioningServer**: typeof [`AdministratorCommissioningServer`](behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md) = `BaseAdministratorCommissioningServer`

The AdministratorCommissioning cluster is required by the Matter specification

We provide this alias to the default implementation [AdministratorCommissioningServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#administratorcommissioningserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:116](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L116)

___

### BasicInformationServer

• `Const` **BasicInformationServer**: typeof [`BasicInformationServer`](behavior_definitions_basic_information_export.BasicInformationServer.md) = `BaseBasicInformationServer`

The BasicInformation cluster is required by the Matter specification

We provide this alias to the default implementation [BasicInformationServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#basicinformationserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L88)

___

### DiagnosticLogsServer

• `Const` **DiagnosticLogsServer**: typeof [`DiagnosticLogsServer`](../classes/behavior_definitions_diagnostic_logs_export.DiagnosticLogsServer.md) = `BaseDiagnosticLogsServer`

The DiagnosticLogs cluster is optional per the Matter specification

We provide this alias to the default implementation [DiagnosticLogsServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#diagnosticlogsserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:179](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L179)

___

### EthernetNetworkDiagnosticsServer

• `Const` **EthernetNetworkDiagnosticsServer**: typeof [`EthernetNetworkDiagnosticsServer`](../classes/behavior_definitions_ethernet_network_diagnostics_export.EthernetNetworkDiagnosticsServer.md) = `BaseEthernetNetworkDiagnosticsServer`

The EthernetNetworkDiagnostics cluster is optional per the Matter specification

We provide this alias to the default implementation [EthernetNetworkDiagnosticsServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#ethernetnetworkdiagnosticsserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:193](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L193)

___

### GeneralCommissioningServer

• `Const` **GeneralCommissioningServer**: typeof [`GeneralCommissioningServer`](behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md) = `BaseGeneralCommissioningServer`

The GeneralCommissioning cluster is required by the Matter specification

We provide this alias to the default implementation [GeneralCommissioningServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#generalcommissioningserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:109](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L109)

___

### GeneralDiagnosticsServer

• `Const` **GeneralDiagnosticsServer**: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md) = `BaseGeneralDiagnosticsServer`

The GeneralDiagnostics cluster is required by the Matter specification

We provide this alias to the default implementation [GeneralDiagnosticsServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#generaldiagnosticsserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:130](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L130)

___

### GroupKeyManagementServer

• `Const` **GroupKeyManagementServer**: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md) = `BaseGroupKeyManagementServer`

The GroupKeyManagement cluster is required by the Matter specification

We provide this alias to the default implementation [GroupKeyManagementServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#groupkeymanagementserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:102](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L102)

___

### LocalizationConfigurationServer

• `Const` **LocalizationConfigurationServer**: typeof [`LocalizationConfigurationServer`](../classes/behavior_definitions_localization_configuration_export.LocalizationConfigurationServer.md) = `BaseLocalizationConfigurationServer`

The LocalizationConfiguration cluster is optional per the Matter specification

We provide this alias to the default implementation [LocalizationConfigurationServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#localizationconfigurationserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:158](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L158)

___

### NetworkCommissioningServer

• `Const` **NetworkCommissioningServer**: typeof [`NetworkCommissioningServer`](../classes/behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md) = `BaseNetworkCommissioningServer`

The NetworkCommissioning cluster is optional per the Matter specification

We provide this alias to the default implementation [NetworkCommissioningServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#networkcommissioningserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:151](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L151)

___

### OperationalCredentialsServer

• `Const` **OperationalCredentialsServer**: typeof [`OperationalCredentialsServer`](behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md) = `BaseOperationalCredentialsServer`

The OperationalCredentials cluster is required by the Matter specification

We provide this alias to the default implementation [OperationalCredentialsServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#operationalcredentialsserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:123](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L123)

___

### PowerSourceConfigurationServer

• `Const` **PowerSourceConfigurationServer**: typeof [`PowerSourceConfigurationServer`](../classes/behavior_definitions_power_source_configuration_export.PowerSourceConfigurationServer.md) = `BasePowerSourceConfigurationServer`

The PowerSourceConfiguration cluster is optional per the Matter specification

We provide this alias to the default implementation [PowerSourceConfigurationServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#powersourceconfigurationserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:137](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L137)

___

### SoftwareDiagnosticsServer

• `Const` **SoftwareDiagnosticsServer**: typeof [`SoftwareDiagnosticsServer`](../classes/behavior_definitions_software_diagnostics_export.SoftwareDiagnosticsServer.md) = `BaseSoftwareDiagnosticsServer`

The SoftwareDiagnostics cluster is optional per the Matter specification

We provide this alias to the default implementation [SoftwareDiagnosticsServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#softwarediagnosticsserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:186](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L186)

___

### ThreadNetworkDiagnosticsServer

• `Const` **ThreadNetworkDiagnosticsServer**: typeof [`ThreadNetworkDiagnosticsServer`](../classes/behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsServer.md) = `BaseThreadNetworkDiagnosticsServer`

The ThreadNetworkDiagnostics cluster is optional per the Matter specification

We provide this alias to the default implementation [ThreadNetworkDiagnosticsServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#threadnetworkdiagnosticsserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:207](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L207)

___

### TimeFormatLocalizationServer

• `Const` **TimeFormatLocalizationServer**: typeof [`TimeFormatLocalizationServer`](../classes/behavior_definitions_time_format_localization_export.TimeFormatLocalizationServer.md) = `BaseTimeFormatLocalizationServer`

The TimeFormatLocalization cluster is optional per the Matter specification

We provide this alias to the default implementation [TimeFormatLocalizationServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#timeformatlocalizationserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:165](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L165)

___

### TimeSyncServer

• `Const` **TimeSyncServer**: typeof [`TimeSyncServer`](../classes/behavior_definitions_time_sync_export.TimeSyncServer.md) = `BaseTimeSyncServer`

The TimeSync cluster is optional per the Matter specification

We provide this alias to the default implementation [TimeSyncServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#timesyncserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:144](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L144)

___

### UnitLocalizationServer

• `Const` **UnitLocalizationServer**: typeof [`UnitLocalizationServer`](../classes/behavior_definitions_unit_localization_export.UnitLocalizationServer.md) = `BaseUnitLocalizationServer`

The UnitLocalization cluster is optional per the Matter specification

We provide this alias to the default implementation [UnitLocalizationServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#unitlocalizationserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:172](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L172)

___

### WiFiNetworkDiagnosticsServer

• `Const` **WiFiNetworkDiagnosticsServer**: typeof [`WiFiNetworkDiagnosticsServer`](../classes/behavior_definitions_wi_fi_network_diagnostics_export.WiFiNetworkDiagnosticsServer.md) = `BaseWiFiNetworkDiagnosticsServer`

The WiFiNetworkDiagnostics cluster is optional per the Matter specification

We provide this alias to the default implementation [WiFiNetworkDiagnosticsServer](endpoint_definitions_system_RootEndpoint.RootRequirements.md#wifinetworkdiagnosticsserver) for convenience.

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L200)

___

### server

• `Const` **server**: `Object`

An implementation for each server cluster supported by the endpoint per the Matter specification.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mandatory` | \{ `AccessControl`: typeof [`AccessControlServer`](behavior_definitions_access_control_export.AccessControlServer.md) = AccessControlServer; `AdministratorCommissioning`: typeof [`AdministratorCommissioningServer`](behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md) = AdministratorCommissioningServer; `BasicInformation`: typeof [`BasicInformationServer`](behavior_definitions_basic_information_export.BasicInformationServer.md) = BasicInformationServer; `GeneralCommissioning`: typeof [`GeneralCommissioningServer`](behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md) = GeneralCommissioningServer; `GeneralDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md) = GeneralDiagnosticsServer; `GroupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md) = GroupKeyManagementServer; `Index`: typeof [`IndexBehavior`](node_export._internal_.IndexBehavior.md) = IndexBehavior; `OperationalCredentials`: typeof [`OperationalCredentialsServer`](behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md) = OperationalCredentialsServer; `Parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md) = PartsBehavior } |
| `mandatory.AccessControl` | typeof [`AccessControlServer`](behavior_definitions_access_control_export.AccessControlServer.md) |
| `mandatory.AdministratorCommissioning` | typeof [`AdministratorCommissioningServer`](behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md) |
| `mandatory.BasicInformation` | typeof [`BasicInformationServer`](behavior_definitions_basic_information_export.BasicInformationServer.md) |
| `mandatory.GeneralCommissioning` | typeof [`GeneralCommissioningServer`](behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md) |
| `mandatory.GeneralDiagnostics` | typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md) |
| `mandatory.GroupKeyManagement` | typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md) |
| `mandatory.Index` | typeof [`IndexBehavior`](node_export._internal_.IndexBehavior.md) |
| `mandatory.OperationalCredentials` | typeof [`OperationalCredentialsServer`](behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md) |
| `mandatory.Parts` | typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md) |
| `optional` | \{ `DiagnosticLogs`: typeof [`DiagnosticLogsServer`](../classes/behavior_definitions_diagnostic_logs_export.DiagnosticLogsServer.md) = DiagnosticLogsServer; `EthernetNetworkDiagnostics`: typeof [`EthernetNetworkDiagnosticsServer`](../classes/behavior_definitions_ethernet_network_diagnostics_export.EthernetNetworkDiagnosticsServer.md) = EthernetNetworkDiagnosticsServer; `LocalizationConfiguration`: typeof [`LocalizationConfigurationServer`](../classes/behavior_definitions_localization_configuration_export.LocalizationConfigurationServer.md) = LocalizationConfigurationServer; `NetworkCommissioning`: typeof [`NetworkCommissioningServer`](../classes/behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md) = NetworkCommissioningServer; `PowerSourceConfiguration`: typeof [`PowerSourceConfigurationServer`](../classes/behavior_definitions_power_source_configuration_export.PowerSourceConfigurationServer.md) = PowerSourceConfigurationServer; `SoftwareDiagnostics`: typeof [`SoftwareDiagnosticsServer`](../classes/behavior_definitions_software_diagnostics_export.SoftwareDiagnosticsServer.md) = SoftwareDiagnosticsServer; `ThreadNetworkDiagnostics`: typeof [`ThreadNetworkDiagnosticsServer`](../classes/behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsServer.md) = ThreadNetworkDiagnosticsServer; `TimeFormatLocalization`: typeof [`TimeFormatLocalizationServer`](../classes/behavior_definitions_time_format_localization_export.TimeFormatLocalizationServer.md) = TimeFormatLocalizationServer; `TimeSync`: typeof [`TimeSyncServer`](../classes/behavior_definitions_time_sync_export.TimeSyncServer.md) = TimeSyncServer; `UnitLocalization`: typeof [`UnitLocalizationServer`](../classes/behavior_definitions_unit_localization_export.UnitLocalizationServer.md) = UnitLocalizationServer; `WiFiNetworkDiagnostics`: typeof [`WiFiNetworkDiagnosticsServer`](../classes/behavior_definitions_wi_fi_network_diagnostics_export.WiFiNetworkDiagnosticsServer.md) = WiFiNetworkDiagnosticsServer } |
| `optional.DiagnosticLogs` | typeof [`DiagnosticLogsServer`](../classes/behavior_definitions_diagnostic_logs_export.DiagnosticLogsServer.md) |
| `optional.EthernetNetworkDiagnostics` | typeof [`EthernetNetworkDiagnosticsServer`](../classes/behavior_definitions_ethernet_network_diagnostics_export.EthernetNetworkDiagnosticsServer.md) |
| `optional.LocalizationConfiguration` | typeof [`LocalizationConfigurationServer`](../classes/behavior_definitions_localization_configuration_export.LocalizationConfigurationServer.md) |
| `optional.NetworkCommissioning` | typeof [`NetworkCommissioningServer`](../classes/behavior_definitions_network_commissioning_export.NetworkCommissioningServer.md) |
| `optional.PowerSourceConfiguration` | typeof [`PowerSourceConfigurationServer`](../classes/behavior_definitions_power_source_configuration_export.PowerSourceConfigurationServer.md) |
| `optional.SoftwareDiagnostics` | typeof [`SoftwareDiagnosticsServer`](../classes/behavior_definitions_software_diagnostics_export.SoftwareDiagnosticsServer.md) |
| `optional.ThreadNetworkDiagnostics` | typeof [`ThreadNetworkDiagnosticsServer`](../classes/behavior_definitions_thread_network_diagnostics_export.ThreadNetworkDiagnosticsServer.md) |
| `optional.TimeFormatLocalization` | typeof [`TimeFormatLocalizationServer`](../classes/behavior_definitions_time_format_localization_export.TimeFormatLocalizationServer.md) |
| `optional.TimeSync` | typeof [`TimeSyncServer`](../classes/behavior_definitions_time_sync_export.TimeSyncServer.md) |
| `optional.UnitLocalization` | typeof [`UnitLocalizationServer`](../classes/behavior_definitions_unit_localization_export.UnitLocalizationServer.md) |
| `optional.WiFiNetworkDiagnostics` | typeof [`WiFiNetworkDiagnosticsServer`](../classes/behavior_definitions_wi_fi_network_diagnostics_export.WiFiNetworkDiagnosticsServer.md) |

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L212)
