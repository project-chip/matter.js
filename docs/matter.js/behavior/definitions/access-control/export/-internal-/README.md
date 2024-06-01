[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/access-control/export](../README.md) / \<internal\>

# \<internal\>

## Index

### Enumerations

- [AuthModeNone](enumerations/AuthModeNone.md)

### Classes

- [AccessControlManager](classes/AccessControlManager.md)

## Type Aliases

### AccessControlBehaviorType

> **AccessControlBehaviorType**: `InstanceType`\<*typeof* [`AccessControlBehavior`](../README.md#accesscontrolbehavior)\>

#### Source

[packages/matter.js/src/behavior/definitions/access-control/AccessControlBehavior.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/access-control/AccessControlBehavior.ts#L17)

***

### AclEntry

> **AclEntry**: `Omit`\<[`TypeFromBitmapSchema`](../../../../../schema/export/README.md#typefrombitmapschemas)\<*typeof* [`TlvAccessControlEntryStruct`](../../../../../cluster/export/namespaces/AccessControl/README.md#tlvaccesscontrolentrystruct)\>, `"privilege"`\> & `object`

#### Type declaration

##### privilege

> **privilege**: [`AccessLevel`](../../../../../cluster/export/enumerations/AccessLevel.md)

#### Source

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L23)

***

### AclList

> **AclList**: [`AclEntry`](README.md#aclentry)[]

#### Source

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L26)

***

### IncomingSubjectDescriptor

> **IncomingSubjectDescriptor**: `object`

#### Type declaration

##### authMode

> **authMode**: [`AccessControlEntryAuthMode`](../../../../../cluster/export/namespaces/AccessControl/enumerations/AccessControlEntryAuthMode.md) \| [`AuthModeNone`](enumerations/AuthModeNone.md)

##### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

##### isCommissioning

> **isCommissioning**: `boolean`

##### subjects

> **subjects**: [`NodeId`](../../../../../datatype/export/README.md#nodeid)[]

#### Source

[packages/matter.js/src/protocol/interaction/AccessControlManager.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/AccessControlManager.ts#L43)

***

### StateType

> **StateType**: `InstanceType`\<*typeof* [`State`](../classes/AccessControlServer.md#state-1)\>

#### Source

[packages/matter.js/src/behavior/definitions/access-control/AccessControlBehavior.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/access-control/AccessControlBehavior.ts#L19)
