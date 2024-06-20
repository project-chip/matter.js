[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/access-control/export](behavior_definitions_access_control_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Enumerations

- [AuthModeNone](../enums/behavior_definitions_access_control_export._internal_.AuthModeNone.md)

### Classes

- [AccessControlManager](../classes/behavior_definitions_access_control_export._internal_.AccessControlManager.md)

### Type Aliases

- [AccessControlBehaviorType](behavior_definitions_access_control_export._internal_.md#accesscontrolbehaviortype)
- [AclEntry](behavior_definitions_access_control_export._internal_.md#aclentry)
- [AclList](behavior_definitions_access_control_export._internal_.md#acllist)
- [IncomingSubjectDescriptor](behavior_definitions_access_control_export._internal_.md#incomingsubjectdescriptor)
- [StateType](behavior_definitions_access_control_export._internal_.md#statetype)

## Type Aliases

### AccessControlBehaviorType

Ƭ **AccessControlBehaviorType**: `InstanceType`\<typeof [`AccessControlBehavior`](behavior_definitions_access_control_export.md#accesscontrolbehavior)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/access-control/AccessControlBehavior.ts:17](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/access-control/AccessControlBehavior.ts#L17)

___

### AclEntry

Ƭ **AclEntry**: `Omit`\<[`TypeFromBitmapSchema`](schema_export.md#typefrombitmapschema)\<typeof [`TlvAccessControlEntryStruct`](cluster_export.AccessControl.md#tlvaccesscontrolentrystruct)\>, ``"privilege"``\> & \{ `privilege`: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)  }

#### Defined in

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:23](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L23)

___

### AclList

Ƭ **AclList**: [`AclEntry`](behavior_definitions_access_control_export._internal_.md#aclentry)[]

#### Defined in

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:26](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L26)

___

### IncomingSubjectDescriptor

Ƭ **IncomingSubjectDescriptor**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authMode` | [`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md) \| [`AuthModeNone`](../enums/behavior_definitions_access_control_export._internal_.AuthModeNone.md) |
| `fabricIndex` | [`FabricIndex`](datatype_export.md#fabricindex) |
| `isCommissioning` | `boolean` |
| `subjects` | [`NodeId`](datatype_export.md#nodeid)[] |

#### Defined in

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:43](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L43)

___

### StateType

Ƭ **StateType**: `InstanceType`\<typeof [`State`](../classes/behavior_definitions_access_control_export.AccessControlServer-1.md#state-1)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/access-control/AccessControlBehavior.ts:19](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/definitions/access-control/AccessControlBehavior.ts#L19)
