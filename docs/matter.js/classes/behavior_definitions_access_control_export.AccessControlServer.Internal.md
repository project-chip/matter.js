[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/access-control/export](../modules/behavior_definitions_access_control_export.md) / [AccessControlServer](../modules/behavior_definitions_access_control_export.AccessControlServer.md) / Internal

# Class: Internal

[behavior/definitions/access-control/export](../modules/behavior_definitions_access_control_export.md).[AccessControlServer](../modules/behavior_definitions_access_control_export.AccessControlServer.md).Internal

## Table of contents

### Constructors

- [constructor](behavior_definitions_access_control_export.AccessControlServer.Internal.md#constructor)

### Properties

- [aclManager](behavior_definitions_access_control_export.AccessControlServer.Internal.md#aclmanager)
- [aclUpdateDelayed](behavior_definitions_access_control_export.AccessControlServer.Internal.md#aclupdatedelayed)
- [delayedAclData](behavior_definitions_access_control_export.AccessControlServer.Internal.md#delayedacldata)

## Constructors

### constructor

• **new Internal**(): [`Internal`](behavior_definitions_access_control_export.AccessControlServer.Internal.md)

#### Returns

[`Internal`](behavior_definitions_access_control_export.AccessControlServer.Internal.md)

## Properties

### aclManager

• `Optional` **aclManager**: [`AccessControlManager`](behavior_definitions_access_control_export._internal_.AccessControlManager.md)

AccessControlManager instance that is used to manage the ACL checks for this device.

#### Defined in

[packages/matter.js/src/behavior/definitions/access-control/AccessControlServer.ts:457](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/access-control/AccessControlServer.ts#L457)

___

### aclUpdateDelayed

• **aclUpdateDelayed**: `boolean` = `false`

If set to true ACL updates are delayed while in a write transaction. More details see getter/setter above.

#### Defined in

[packages/matter.js/src/behavior/definitions/access-control/AccessControlServer.ts:460](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/access-control/AccessControlServer.ts#L460)

___

### delayedAclData

• `Optional` **delayedAclData**: [`AccessControlEntryStruct`](../interfaces/cluster_export.AccessControl.AccessControlEntryStruct.md)[]

Latest delayed data of acl

#### Defined in

[packages/matter.js/src/behavior/definitions/access-control/AccessControlServer.ts:463](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/access-control/AccessControlServer.ts#L463)
