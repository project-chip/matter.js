[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/cluster/export](../../README.md) / [\<internal\>](../README.md) / Session

# Interface: Session

Session information required for value management.

## Extends

- [`Session`](../../../../export/namespaces/AccessControl/interfaces/Session.md)

## Extended by

- [`ActionContext`](ActionContext.md)

## Properties

### acceptInvalid?

> `optional` **acceptInvalid**: `boolean`

If this is true, data validation is disabled.  This should only be used in contexts where data validation is
deferred.

#### Source

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L86)

***

### command?

> `optional` `readonly` **command**: `boolean`

If this is true then data access levels are not enforced.  Datatypes and command-related access controls are
active.

#### Inherited from

[`Session`](../../../../export/namespaces/AccessControl/interfaces/Session.md).[`command`](../../../../export/namespaces/AccessControl/interfaces/Session.md#command)

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:165](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L165)

***

### fabric?

> `optional` `readonly` **fabric**: [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

The fabric of the authorized client.

#### Inherited from

[`Session`](../../../../export/namespaces/AccessControl/interfaces/Session.md).[`fabric`](../../../../export/namespaces/AccessControl/interfaces/Session.md#fabric)

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:143](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L143)

***

### fabricFiltered?

> `optional` `readonly` **fabricFiltered**: `boolean`

If this is true, fabric-scoped lists are filtered to the accessing
fabric.

#### Inherited from

[`Session`](../../../../export/namespaces/AccessControl/interfaces/Session.md).[`fabricFiltered`](../../../../export/namespaces/AccessControl/interfaces/Session.md#fabricfiltered)

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:154](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L154)

***

### offline?

> `optional` **offline**: `boolean`

If this is true then access levels are not enforced and all values are read/write.  Datatypes are still
enforced.

Tracks "offline" rather than "online" because this makes the safer mode (full enforcement) the default.

#### Inherited from

[`Session`](../../../../export/namespaces/AccessControl/interfaces/Session.md).[`offline`](../../../../export/namespaces/AccessControl/interfaces/Session.md#offline)

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:173](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L173)

***

### subject?

> `optional` `readonly` **subject**: [`NodeId`](../../../../../datatype/export/README.md#nodeid)

The authenticated [SubjectId](../../../../../datatype/export/README.md#subjectid) for online sessions.

#### Inherited from

[`Session`](../../../../export/namespaces/AccessControl/interfaces/Session.md).[`subject`](../../../../export/namespaces/AccessControl/interfaces/Session.md#subject)

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L148)

***

### timed?

> `optional` `readonly` **timed**: `boolean`

If this is true a timed transaction is in effect.

#### Inherited from

[`Session`](../../../../export/namespaces/AccessControl/interfaces/Session.md).[`timed`](../../../../export/namespaces/AccessControl/interfaces/Session.md#timed)

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:159](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L159)

***

### trace?

> `optional` **trace**: [`Action`](Action.md)

A target for instrumentation information.  If present, various components will populate with diagnostic
information during the action.

#### Source

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L80)

***

### transaction

> **transaction**: [`Transaction`](../../../../export/-internal-/interfaces/Transaction.md)

The transaction used for isolating state changes associated with this session.

#### Source

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L74)

## Methods

### authorizedFor()

> **authorizedFor**(`desiredAccessLevel`, `location`?): `boolean`

Checks if the authorized client has a certain Access Privilege granted.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `desiredAccessLevel` | [`AccessLevel`](../../../../../cluster/export/enumerations/AccessLevel.md) |
| `location`? | [`Location`](../../../../export/namespaces/AccessControl/interfaces/Location.md) |

#### Returns

`boolean`

#### Inherited from

[`Session`](../../../../export/namespaces/AccessControl/interfaces/Session.md).[`authorizedFor`](../../../../export/namespaces/AccessControl/interfaces/Session.md#authorizedfor)

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:138](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L138)
