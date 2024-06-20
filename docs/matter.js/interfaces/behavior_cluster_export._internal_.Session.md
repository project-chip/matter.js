[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / Session

# Interface: Session

[behavior/cluster/export](../modules/behavior_cluster_export.md).[\<internal\>](../modules/behavior_cluster_export._internal_.md).Session

Session information required for value management.

## Hierarchy

- [`Session`](behavior_export.AccessControl.Session.md)

  ↳ **`Session`**

  ↳↳ [`ActionContext`](behavior_cluster_export._internal_.ActionContext.md)

## Table of contents

### Properties

- [acceptInvalid](behavior_cluster_export._internal_.Session.md#acceptinvalid)
- [command](behavior_cluster_export._internal_.Session.md#command)
- [fabric](behavior_cluster_export._internal_.Session.md#fabric)
- [fabricFiltered](behavior_cluster_export._internal_.Session.md#fabricfiltered)
- [offline](behavior_cluster_export._internal_.Session.md#offline)
- [subject](behavior_cluster_export._internal_.Session.md#subject)
- [timed](behavior_cluster_export._internal_.Session.md#timed)
- [trace](behavior_cluster_export._internal_.Session.md#trace)
- [transaction](behavior_cluster_export._internal_.Session.md#transaction)

### Methods

- [authorizedFor](behavior_cluster_export._internal_.Session.md#authorizedfor)

## Properties

### acceptInvalid

• `Optional` **acceptInvalid**: `boolean`

If this is true, data validation is disabled.  This should only be used in contexts where data validation is
deferred.

#### Defined in

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:86](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L86)

___

### command

• `Optional` `Readonly` **command**: `boolean`

If this is true then data access levels are not enforced.  Datatypes and command-related access controls are
active.

#### Inherited from

[Session](behavior_export.AccessControl.Session.md).[command](behavior_export.AccessControl.Session.md#command)

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:165](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/AccessControl.ts#L165)

___

### fabric

• `Optional` `Readonly` **fabric**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

The fabric of the authorized client.

#### Inherited from

[Session](behavior_export.AccessControl.Session.md).[fabric](behavior_export.AccessControl.Session.md#fabric)

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:143](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/AccessControl.ts#L143)

___

### fabricFiltered

• `Optional` `Readonly` **fabricFiltered**: `boolean`

If this is true, fabric-scoped lists are filtered to the accessing
fabric.

#### Inherited from

[Session](behavior_export.AccessControl.Session.md).[fabricFiltered](behavior_export.AccessControl.Session.md#fabricfiltered)

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:154](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/AccessControl.ts#L154)

___

### offline

• `Optional` **offline**: `boolean`

If this is true then access levels are not enforced and all values are read/write.  Datatypes are still
enforced.

Tracks "offline" rather than "online" because this makes the safer mode (full enforcement) the default.

#### Inherited from

[Session](behavior_export.AccessControl.Session.md).[offline](behavior_export.AccessControl.Session.md#offline)

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:173](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/AccessControl.ts#L173)

___

### subject

• `Optional` `Readonly` **subject**: [`NodeId`](../modules/datatype_export.md#nodeid)

The authenticated [SubjectId](../modules/datatype_export.md#subjectid) for online sessions.

#### Inherited from

[Session](behavior_export.AccessControl.Session.md).[subject](behavior_export.AccessControl.Session.md#subject)

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:148](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/AccessControl.ts#L148)

___

### timed

• `Optional` `Readonly` **timed**: `boolean`

If this is true a timed transaction is in effect.

#### Inherited from

[Session](behavior_export.AccessControl.Session.md).[timed](behavior_export.AccessControl.Session.md#timed)

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:159](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/AccessControl.ts#L159)

___

### trace

• `Optional` **trace**: [`Action`](behavior_cluster_export._internal_.Action.md)

A target for instrumentation information.  If present, various components will populate with diagnostic
information during the action.

#### Defined in

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:80](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L80)

___

### transaction

• **transaction**: [`Transaction`](behavior_export._internal_.Transaction-1.md)

The transaction used for isolating state changes associated with this session.

#### Defined in

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:74](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L74)

## Methods

### authorizedFor

▸ **authorizedFor**(`desiredAccessLevel`, `location?`): `boolean`

Checks if the authorized client has a certain Access Privilege granted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `desiredAccessLevel` | [`AccessLevel`](../enums/cluster_export.AccessLevel.md) |
| `location?` | [`Location`](behavior_export.AccessControl.Location.md) |

#### Returns

`boolean`

#### Inherited from

[Session](behavior_export.AccessControl.Session.md).[authorizedFor](behavior_export.AccessControl.Session.md#authorizedfor)

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:138](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/behavior/AccessControl.ts#L138)
