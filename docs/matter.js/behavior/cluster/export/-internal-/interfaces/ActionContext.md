[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/cluster/export](../../README.md) / [\<internal\>](../README.md) / ActionContext

# Interface: ActionContext

Provides contextual information for Matter actions such as accessing attributes or invoking commands.

Matter.js provides an "online" ActionContext for you when responding to network requests.  You can also use
"offline" agents to invoke cluster APIs [Endpoint](../../../../../endpoint/export/classes/Endpoint.md) without an active user session.

See OnlineContext and OfflineContext for details of these two types of interaction.

Context includes:

  - Authorization details such as [AccessLevel](../../../../../cluster/export/enumerations/AccessLevel.md), [subject](../../../../export/namespaces/AccessControl/interfaces/Session.md#subject) and accessing [fabric](../../../../export/namespaces/AccessControl/interfaces/Session.md#fabric)

  - The [transaction](Session.md#transaction) required to make state changes

  - Factory functions for [Agent](../../../../../endpoint/export/classes/Agent.md) instances you can use to interact with [Endpoint](../../../../../endpoint/export/classes/Endpoint.md)s

  - When responding to network requests, low-level contextual information such as the wire [message](ActionContext.md#message)

For the formal definition of an "action" see MatterSpecification.v12.Core § 8.2.4

## Extends

- [`Session`](Session.md)

## Properties

### acceptInvalid?

> `optional` **acceptInvalid**: `boolean`

If this is true, data validation is disabled.  This should only be used in contexts where data validation is
deferred.

#### Inherited from

[`Session`](Session.md).[`acceptInvalid`](Session.md#acceptinvalid)

#### Source

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L86)

***

### activity?

> `optional` **activity**: [`Activity`](Activity.md)

Activity tracking information.  If present, activity frames are inserted at key points for diagnostic
purposes.

#### Source

[packages/matter.js/src/behavior/context/ActionContext.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/context/ActionContext.ts#L54)

***

### command?

> `optional` `readonly` **command**: `boolean`

If this is true then data access levels are not enforced.  Datatypes and command-related access controls are
active.

#### Inherited from

[`Session`](Session.md).[`command`](Session.md#command)

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:165](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L165)

***

### fabric?

> `optional` `readonly` **fabric**: [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

The fabric of the authorized client.

#### Inherited from

[`Session`](Session.md).[`fabric`](Session.md#fabric)

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:143](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L143)

***

### fabricFiltered?

> `optional` `readonly` **fabricFiltered**: `boolean`

If this is true, fabric-scoped lists are filtered to the accessing
fabric.

#### Inherited from

[`Session`](Session.md).[`fabricFiltered`](Session.md#fabricfiltered)

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:154](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L154)

***

### message?

> `optional` **message**: [`Message`](../../../../../codec/export/interfaces/Message.md)

The wire message that initiated invocation.

#### Source

[packages/matter.js/src/behavior/context/ActionContext.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/context/ActionContext.ts#L48)

***

### offline?

> `optional` **offline**: `boolean`

If this is true then access levels are not enforced and all values are read/write.  Datatypes are still
enforced.

Tracks "offline" rather than "online" because this makes the safer mode (full enforcement) the default.

#### Inherited from

[`Session`](Session.md).[`offline`](Session.md#offline)

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:173](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L173)

***

### session?

> `optional` **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../classes/MatterDevice.md)\>

The Matter session in which an interaction occurs.

#### Source

[packages/matter.js/src/behavior/context/ActionContext.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/context/ActionContext.ts#L43)

***

### subject?

> `optional` `readonly` **subject**: [`NodeId`](../../../../../datatype/export/README.md#nodeid)

The authenticated [SubjectId](../../../../../datatype/export/README.md#subjectid) for online sessions.

#### Inherited from

[`Session`](Session.md).[`subject`](Session.md#subject)

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L148)

***

### timed?

> `optional` `readonly` **timed**: `boolean`

If this is true a timed transaction is in effect.

#### Inherited from

[`Session`](Session.md).[`timed`](Session.md#timed)

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:159](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L159)

***

### trace?

> `optional` **trace**: [`Action`](Action.md)

A target for instrumentation information.  If present, various components will populate with diagnostic
information during the action.

#### Inherited from

[`Session`](Session.md).[`trace`](Session.md#trace)

#### Source

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L80)

***

### transaction

> **transaction**: [`Transaction`](../../../../export/-internal-/interfaces/Transaction.md)

The transaction used for isolating state changes associated with this session.

#### Inherited from

[`Session`](Session.md).[`transaction`](Session.md#transaction)

#### Source

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L74)

## Methods

### agentFor()

> **agentFor**\<`T`\>(`endpoint`): [`Instance`](../../../../../endpoint/export/namespaces/Agent/README.md#instancet)\<`T`\>

Obtain an agent for interacting with an endpoint in this context.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EndpointType`](EndpointType.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<`T`\> |

#### Returns

[`Instance`](../../../../../endpoint/export/namespaces/Agent/README.md#instancet)\<`T`\>

#### Source

[packages/matter.js/src/behavior/context/ActionContext.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/context/ActionContext.ts#L59)

***

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

[`Session`](Session.md).[`authorizedFor`](Session.md#authorizedfor)

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:138](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L138)
