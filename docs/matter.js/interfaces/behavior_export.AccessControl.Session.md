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

- [accessLevelFor](behavior_export.AccessControl.Session.md#accesslevelfor)

## Properties

### command

• `Optional` `Readonly` **command**: `boolean`

If this is true then data access levels are not enforced.  Datatypes and command-related access controls are
active.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:159](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L159)

___

### fabric

• `Optional` `Readonly` **fabric**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

The fabric of the authorized client.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:137](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L137)

___

### fabricFiltered

• `Optional` `Readonly` **fabricFiltered**: `boolean`

If this is true, fabric-scoped lists are filtered to the accessing
fabric.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L148)

___

### offline

• `Optional` **offline**: `boolean`

If this is true then access levels are not enforced and all values are read/write.  Datatypes are still
enforced.

Tracks "offline" rather than "online" because this makes the safer mode (full enforcement) the default.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:167](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L167)

___

### subject

• `Optional` `Readonly` **subject**: [`NodeId`](../modules/datatype_export.md#nodeid)

The authenticated [SubjectId](../modules/datatype_export.md#subjectid) for online sessions.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:142](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L142)

___

### timed

• `Optional` `Readonly` **timed**: `boolean`

If this is true a timed transaction is in effect.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:153](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L153)

## Methods

### accessLevelFor

▸ **accessLevelFor**(`location?`): [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

The access level of the authorized client.

#### Parameters

| Name | Type |
| :------ | :------ |
| `location?` | [`Location`](behavior_export.AccessControl.Location.md) |

#### Returns

[`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L132)
