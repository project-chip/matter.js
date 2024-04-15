[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / [ServerNode](../modules/node_export.ServerNode.md) / RootEndpoint

# Interface: RootEndpoint

[node/export](../modules/node_export.md).[ServerNode](../modules/node_export.ServerNode.md).RootEndpoint

An identity type.

You can't do:

    interface Foo extends typeof Bar {}

But you can do:

    interface Foo extends Identity<typeof Bar> {}

Without this type you'd have to do:

    interface FooType = typeof Bar;
    interface Foo extends FooType {};

We have to do this a lot because we generate complex objects with detailed
type information.  When exported, TS (as of 5.2) inlines the type of these
objects in declarations which makes our declarations massive.  To avoid this
we create an interface from the type then cast to the interface for export.

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`RootEndpoint`](../modules/node_export.ServerNode.md#rootendpoint)\>

  ↳ **`RootEndpoint`**

## Table of contents

### Properties

- [behaviors](node_export.ServerNode.RootEndpoint.md#behaviors)
- [defaults](node_export.ServerNode.RootEndpoint.md#defaults)
- [deviceClass](node_export.ServerNode.RootEndpoint.md#deviceclass)
- [deviceRevision](node_export.ServerNode.RootEndpoint.md#devicerevision)
- [deviceType](node_export.ServerNode.RootEndpoint.md#devicetype)
- [name](node_export.ServerNode.RootEndpoint.md#name)
- [requirements](node_export.ServerNode.RootEndpoint.md#requirements)

### Methods

- [set](node_export.ServerNode.RootEndpoint.md#set)
- [with](node_export.ServerNode.RootEndpoint.md#with)

## Properties

### behaviors

• **behaviors**: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  } & `Omit`\<\{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  }, ``"network"`` \| ``"sessions"`` \| ``"commissioning"`` \| ``"productDescription"``\> & \{ `commissioning`: typeof [`CommissioningBehavior`](../modules/node_export._internal_.CommissioningBehavior.md)  } & \{ `network`: typeof [`NetworkServer`](../modules/node_export._internal_.NetworkServer.md)  } & \{ `productDescription`: typeof [`ProductDescriptionServer`](../modules/node_export._internal_.ProductDescriptionServer.md)  } & \{ `sessions`: typeof [`SessionsBehavior`](../modules/node_export._internal_.SessionsBehavior.md)  }

#### Inherited from

Identity.behaviors

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L84)

___

### defaults

• **defaults**: [`StateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#stateof)\<[`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  }, readonly [typeof [`CommissioningBehavior`](../modules/node_export._internal_.CommissioningBehavior.md), typeof [`NetworkServer`](../modules/node_export._internal_.NetworkServer.md), typeof [`ProductDescriptionServer`](../modules/node_export._internal_.ProductDescriptionServer.md), typeof [`SessionsBehavior`](../modules/node_export._internal_.SessionsBehavior.md)]\>\>

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

▸ **set**(`defaults`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  } ; `deviceClass`: [`Node`](../enums/device_export.DeviceClasses.md#node) = DeviceClasses.Node; `deviceRevision`: ``1`` = 1; `deviceType`: ``22`` = 0x16; `name`: ``"RootNode"`` = "RootNode"; `requirements`: typeof [`RootRequirements`](../modules/endpoint_definitions_system_RootEndpoint.RootRequirements.md) = RootRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  }, readonly [typeof [`CommissioningBehavior`](../modules/node_export._internal_.CommissioningBehavior.md), typeof [`NetworkServer`](../modules/node_export._internal_.NetworkServer.md), typeof [`ProductDescriptionServer`](../modules/node_export._internal_.ProductDescriptionServer.md), typeof [`SessionsBehavior`](../modules/node_export._internal_.SessionsBehavior.md)]\>\>

Define an endpoint like this one with different defaults.  Only updates values present in the input object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaults` | [`InputStateOf`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#inputstateof)\<[`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  }, readonly [typeof [`CommissioningBehavior`](../modules/node_export._internal_.CommissioningBehavior.md), typeof [`NetworkServer`](../modules/node_export._internal_.NetworkServer.md), typeof [`ProductDescriptionServer`](../modules/node_export._internal_.ProductDescriptionServer.md), typeof [`SessionsBehavior`](../modules/node_export._internal_.SessionsBehavior.md)]\>\> |

#### Returns

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  } ; `deviceClass`: [`Node`](../enums/device_export.DeviceClasses.md#node) = DeviceClasses.Node; `deviceRevision`: ``1`` = 1; `deviceType`: ``22`` = 0x16; `name`: ``"RootNode"`` = "RootNode"; `requirements`: typeof [`RootRequirements`](../modules/endpoint_definitions_system_RootEndpoint.RootRequirements.md) = RootRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  }, readonly [typeof [`CommissioningBehavior`](../modules/node_export._internal_.CommissioningBehavior.md), typeof [`NetworkServer`](../modules/node_export._internal_.NetworkServer.md), typeof [`ProductDescriptionServer`](../modules/node_export._internal_.ProductDescriptionServer.md), typeof [`SessionsBehavior`](../modules/node_export._internal_.SessionsBehavior.md)]\>\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L94)

___

### with

▸ **with**\<`BL`\>(`...behaviors`): [`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  } ; `deviceClass`: [`Node`](../enums/device_export.DeviceClasses.md#node) = DeviceClasses.Node; `deviceRevision`: ``1`` = 1; `deviceType`: ``22`` = 0x16; `name`: ``"RootNode"`` = "RootNode"; `requirements`: typeof [`RootRequirements`](../modules/endpoint_definitions_system_RootEndpoint.RootRequirements.md) = RootRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<[`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  }, readonly [typeof [`CommissioningBehavior`](../modules/node_export._internal_.CommissioningBehavior.md), typeof [`NetworkServer`](../modules/node_export._internal_.NetworkServer.md), typeof [`ProductDescriptionServer`](../modules/node_export._internal_.ProductDescriptionServer.md), typeof [`SessionsBehavior`](../modules/node_export._internal_.SessionsBehavior.md)]\>, `BL`\>\>

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

[`With`](../modules/node_export._internal_.md#with)\<[`For`](../modules/behavior_cluster_export._internal_.EndpointType.md#for)\<\{ `behaviors`: \{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  } ; `deviceClass`: [`Node`](../enums/device_export.DeviceClasses.md#node) = DeviceClasses.Node; `deviceRevision`: ``1`` = 1; `deviceType`: ``22`` = 0x16; `name`: ``"RootNode"`` = "RootNode"; `requirements`: typeof [`RootRequirements`](../modules/endpoint_definitions_system_RootEndpoint.RootRequirements.md) = RootRequirements }\>, [`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<[`With`](../modules/behavior_cluster_export._internal_.SupportedBehaviors.md#with)\<\{ `parts`: typeof [`PartsBehavior`](../classes/node_export._internal_.PartsBehavior.md)  } & \{ `index`: typeof [`IndexBehavior`](../modules/node_export._internal_.IndexBehavior.md)  } & \{ `basicInformation`: typeof [`BasicInformationServer`](../modules/behavior_definitions_basic_information_export.BasicInformationServer.md)  } & \{ `accessControl`: typeof [`AccessControlServer`](../modules/behavior_definitions_access_control_export.AccessControlServer.md)  } & \{ `groupKeyManagement`: typeof [`GroupKeyManagementServer`](../classes/behavior_definitions_group_key_management_export.GroupKeyManagementServer.md)  } & \{ `generalCommissioning`: typeof [`GeneralCommissioningServer`](../modules/behavior_definitions_general_commissioning_export.GeneralCommissioningServer.md)  } & \{ `administratorCommissioning`: typeof [`AdministratorCommissioningServer`](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningServer.md)  } & \{ `operationalCredentials`: typeof [`OperationalCredentialsServer`](../modules/behavior_definitions_operational_credentials_export.OperationalCredentialsServer.md)  } & \{ `generalDiagnostics`: typeof [`GeneralDiagnosticsServer`](../classes/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.md)  }, readonly [typeof [`CommissioningBehavior`](../modules/node_export._internal_.CommissioningBehavior.md), typeof [`NetworkServer`](../modules/node_export._internal_.NetworkServer.md), typeof [`ProductDescriptionServer`](../modules/node_export._internal_.ProductDescriptionServer.md), typeof [`SessionsBehavior`](../modules/node_export._internal_.SessionsBehavior.md)]\>, `BL`\>\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/endpoint/type/MutableEndpoint.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/type/MutableEndpoint.ts#L99)
