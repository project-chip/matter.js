[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / endpoint/definitions/system/RootEndpoint

# Module: endpoint/definitions/system/RootEndpoint

## Table of contents

### Namespaces

- [RootRequirements](endpoint_definitions_system_RootEndpoint.RootRequirements.md)

### Interfaces

- [RootEndpoint](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md)

### Variables

- [RootEndpoint](endpoint_definitions_system_RootEndpoint.md#rootendpoint)
- [RootEndpointDefinition](endpoint_definitions_system_RootEndpoint.md#rootendpointdefinition)

## Variables

### RootEndpoint

• **RootEndpoint**: [`RootEndpoint`](../interfaces/endpoint_definitions_system_RootEndpoint.RootEndpoint.md)

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L80)

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:261](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L261)

___

### RootEndpointDefinition

• `Const` **RootEndpointDefinition**: [`With`](node_export._internal_.md#with)\<[`For`](behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  } ; `deviceClass`: [`Node`](../enums/device_export.DeviceClasses.md#node) = DeviceClasses.Node; `deviceRevision`: ``1`` = 1; `deviceType`: ``22`` = 0x16; `name`: ``"RootNode"`` = "RootNode"; `requirements`: typeof [`RootRequirements`](endpoint_definitions_system_RootEndpoint.RootRequirements.md) = RootRequirements }\>, \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  }\>

#### Defined in

[packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts:241](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/definitions/system/RootEndpoint.ts#L241)
