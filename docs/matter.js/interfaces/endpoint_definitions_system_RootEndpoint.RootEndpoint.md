[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/definitions/system/RootEndpoint](../modules/endpoint_definitions_system_RootEndpoint.md) / RootEndpoint

# Interface: RootEndpoint

[endpoint/definitions/system/RootEndpoint](../modules/endpoint_definitions_system_RootEndpoint.md).RootEndpoint

This defines conformance for a root node endpoint (see System Model specification). This endpoint is akin to a "read
me first" endpoint that describes itself and the other endpoints that make up the node.

  • Device types with Endpoint scope shall NOT be supported on the same endpoint as this device type.

  • Clusters with an Application role shall NOT be supported on the same endpoint as this device type.

  • Other device types with Node scope may be supported on the same endpoint as this device type.

**`See`**

MatterSpecification.v11.Device § 2.1

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`RootEndpointDefinition`](../modules/endpoint_definitions_system_RootEndpoint.md#rootendpointdefinition)\>

  ↳ **`RootEndpoint`**

## Table of contents

### Properties

- [behaviors](endpoint_definitions_system_RootEndpoint.RootEndpoint.md#behaviors)
- [defaults](endpoint_definitions_system_RootEndpoint.RootEndpoint.md#defaults)
- [deviceClass](endpoint_definitions_system_RootEndpoint.RootEndpoint.md#deviceclass)
- [deviceRevision](endpoint_definitions_system_RootEndpoint.RootEndpoint.md#devicerevision)
- [deviceType](endpoint_definitions_system_RootEndpoint.RootEndpoint.md#devicetype)
- [name](endpoint_definitions_system_RootEndpoint.RootEndpoint.md#name)
- [requirements](endpoint_definitions_system_RootEndpoint.RootEndpoint.md#requirements)

### Methods

- [set](endpoint_definitions_system_RootEndpoint.RootEndpoint.md#set)
- [with](endpoint_definitions_system_RootEndpoint.RootEndpoint.md#with)

## Properties

### behaviors

• **behaviors**: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  }

#### Inherited from

Identity.behaviors

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

___

### defaults

• **defaults**: [`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<\{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  }\>

Access default state values.

#### Inherited from

Identity.defaults

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L89)

___

### deviceClass

• **deviceClass**: [`DeviceClasses`](../enums/device_export.DeviceClasses.md)

#### Inherited from

Identity.deviceClass

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L51)

___

### deviceRevision

• **deviceRevision**: `number`

#### Inherited from

Identity.deviceRevision

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L50)

___

### deviceType

• **deviceType**: [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)

#### Inherited from

Identity.deviceType

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L49)

___

### name

• **name**: ``"RootNode"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L48)

___

### requirements

• **requirements**: typeof [`RootRequirements`](../modules/endpoint_definitions_system_RootEndpoint.RootRequirements.md)

#### Inherited from

Identity.requirements

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/EndpointType.ts#L53)

## Methods

### set

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  } ; `deviceClass`: [`Node`](../enums/device_export.DeviceClasses.md#node) = DeviceClasses.Node; `deviceRevision`: ``1`` = 1; `deviceType`: ``22`` = 0x16; `name`: ``"RootNode"`` = "RootNode"; `requirements`: typeof [`RootRequirements`](../modules/endpoint_definitions_system_RootEndpoint.RootRequirements.md) = RootRequirements }\>, \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  }\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<\{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  }\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  } ; `deviceClass`: [`Node`](../enums/device_export.DeviceClasses.md#node) = DeviceClasses.Node; `deviceRevision`: ``1`` = 1; `deviceType`: ``22`` = 0x16; `name`: ``"RootNode"`` = "RootNode"; `requirements`: typeof [`RootRequirements`](../modules/endpoint_definitions_system_RootEndpoint.RootRequirements.md) = RootRequirements }\>, \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  }\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  } ; `deviceClass`: [`Node`](../enums/device_export.DeviceClasses.md#node) = DeviceClasses.Node; `deviceRevision`: ``1`` = 1; `deviceType`: ``22`` = 0x16; `name`: ``"RootNode"`` = "RootNode"; `requirements`: typeof [`RootRequirements`](../modules/endpoint_definitions_system_RootEndpoint.RootRequirements.md) = RootRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  }, `BL`\>\>

Define an endpoint like this one with additional and/or replacement server behaviors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `BL` | extends [`List`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#list) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...behaviors` | `BL` |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  } ; `deviceClass`: [`Node`](../enums/device_export.DeviceClasses.md#node) = DeviceClasses.Node; `deviceRevision`: ``1`` = 1; `deviceType`: ``22`` = 0x16; `name`: ``"RootNode"`` = "RootNode"; `requirements`: typeof [`RootRequirements`](../modules/endpoint_definitions_system_RootEndpoint.RootRequirements.md) = RootRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  }, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
