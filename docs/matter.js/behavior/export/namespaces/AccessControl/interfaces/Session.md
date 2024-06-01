[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/export](../../../README.md) / [AccessControl](../README.md) / Session

# Interface: Session

Authorization metadata that varies with session.

## Extended by

- [`Session`](../../../../cluster/export/-internal-/interfaces/Session.md)

## Properties

### command?

> `optional` `readonly` **command**: `boolean`

If this is true then data access levels are not enforced.  Datatypes and command-related access controls are
active.

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:165](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L165)

***

### fabric?

> `optional` `readonly` **fabric**: [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

The fabric of the authorized client.

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:143](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L143)

***

### fabricFiltered?

> `optional` `readonly` **fabricFiltered**: `boolean`

If this is true, fabric-scoped lists are filtered to the accessing
fabric.

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:154](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L154)

***

### offline?

> `optional` **offline**: `boolean`

If this is true then access levels are not enforced and all values are read/write.  Datatypes are still
enforced.

Tracks "offline" rather than "online" because this makes the safer mode (full enforcement) the default.

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:173](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L173)

***

### subject?

> `optional` `readonly` **subject**: [`NodeId`](../../../../../datatype/export/README.md#nodeid)

The authenticated [SubjectId](../../../../../datatype/export/README.md#subjectid) for online sessions.

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L148)

***

### timed?

> `optional` `readonly` **timed**: `boolean`

If this is true a timed transaction is in effect.

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:159](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L159)

## Methods

### authorizedFor()

> **authorizedFor**(`desiredAccessLevel`, `location`?): `boolean`

Checks if the authorized client has a certain Access Privilege granted.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `desiredAccessLevel` | [`AccessLevel`](../../../../../cluster/export/enumerations/AccessLevel.md) |
| `location`? | [`Location`](Location.md) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:138](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L138)
