[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/export](../modules/behavior_export.md) / [AccessControl](../modules/behavior_export.AccessControl.md) / Session

# Interface: Session

[behavior/export](../modules/behavior_export.md).[AccessControl](../modules/behavior_export.AccessControl.md).Session

Authorization metadata that varies with session.

## Hierarchy

- **`Session`**

  ↳ [`Session`](behavior_cluster_export._internal_.Session.md)

## Table of contents

### Properties

- [command](behavior_export.AccessControl.Session.md#command)
- [fabric](behavior_export.AccessControl.Session.md#fabric)
- [fabricFiltered](behavior_export.AccessControl.Session.md#fabricfiltered)
- [offline](behavior_export.AccessControl.Session.md#offline)
- [subject](behavior_export.AccessControl.Session.md#subject)
- [timed](behavior_export.AccessControl.Session.md#timed)

### Methods

- [authorizedFor](behavior_export.AccessControl.Session.md#authorizedfor)

## Properties

### command

• `Optional` `Readonly` **command**: `boolean`

If this is true then data access levels are not enforced.  Datatypes and command-related access controls are
active.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:165](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/AccessControl.ts#L165)

___

### fabric

• `Optional` `Readonly` **fabric**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

The fabric of the authorized client.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:143](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/AccessControl.ts#L143)

___

### fabricFiltered

• `Optional` `Readonly` **fabricFiltered**: `boolean`

If this is true, fabric-scoped lists are filtered to the accessing
fabric.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:154](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/AccessControl.ts#L154)

___

### offline

• `Optional` **offline**: `boolean`

If this is true then access levels are not enforced and all values are read/write.  Datatypes are still
enforced.

Tracks "offline" rather than "online" because this makes the safer mode (full enforcement) the default.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:173](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/AccessControl.ts#L173)

___

### subject

• `Optional` `Readonly` **subject**: [`NodeId`](../modules/datatype_export.md#nodeid)

The authenticated [SubjectId](../modules/datatype_export.md#subjectid) for online sessions.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:148](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/AccessControl.ts#L148)

___

### timed

• `Optional` `Readonly` **timed**: `boolean`

If this is true a timed transaction is in effect.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:159](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/AccessControl.ts#L159)

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

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:138](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/AccessControl.ts#L138)
