[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / ActionContext

# Interface: ActionContext

[behavior/cluster/export](../modules/behavior_cluster_export.md).[\<internal\>](../modules/behavior_cluster_export._internal_.md).ActionContext

Provides contextual information for Matter actions such as accessing attributes or invoking commands.

Matter.js provides an "online" ActionContext for you when responding to network requests.  You can also use
"offline" agents to invoke cluster APIs [Endpoint](../classes/endpoint_export.Endpoint-1.md) without an active user session.

See OnlineContext and OfflineContext for details of these two types of interaction.

Context includes:

  - Authorization details such as [AccessLevel](../enums/cluster_export.AccessLevel.md), [subject](behavior_export.AccessControl.Session.md#subject) and accessing [fabric](behavior_export.AccessControl.Session.md#fabric)

  - The [transaction](behavior_cluster_export._internal_.Session.md#transaction) required to make state changes

  - Factory functions for [Agent](../classes/endpoint_export.Agent-1.md) instances you can use to interact with [Endpoint](../classes/endpoint_export.Endpoint-1.md)s

  - When responding to network requests, low-level contextual information such as the wire [message](behavior_cluster_export._internal_.ActionContext.md#message)

For the formal definition of an "action" see MatterSpecification.v12.Core § 8.2.4

## Hierarchy

- [`Session`](behavior_cluster_export._internal_.Session.md)

  ↳ **`ActionContext`**

## Table of contents

### Properties

- [acceptInvalid](behavior_cluster_export._internal_.ActionContext.md#acceptinvalid)
- [activity](behavior_cluster_export._internal_.ActionContext.md#activity)
- [command](behavior_cluster_export._internal_.ActionContext.md#command)
- [fabric](behavior_cluster_export._internal_.ActionContext.md#fabric)
- [fabricFiltered](behavior_cluster_export._internal_.ActionContext.md#fabricfiltered)
- [message](behavior_cluster_export._internal_.ActionContext.md#message)
- [offline](behavior_cluster_export._internal_.ActionContext.md#offline)
- [session](behavior_cluster_export._internal_.ActionContext.md#session)
- [subject](behavior_cluster_export._internal_.ActionContext.md#subject)
- [timed](behavior_cluster_export._internal_.ActionContext.md#timed)
- [trace](behavior_cluster_export._internal_.ActionContext.md#trace)
- [transaction](behavior_cluster_export._internal_.ActionContext.md#transaction)

### Methods

- [accessLevelFor](behavior_cluster_export._internal_.ActionContext.md#accesslevelfor)
- [agentFor](behavior_cluster_export._internal_.ActionContext.md#agentfor)

## Properties

### acceptInvalid

• `Optional` **acceptInvalid**: `boolean`

If this is true, data validation is disabled.  This should only be used in contexts where data validation is
deferred.

#### Inherited from

[Session](behavior_cluster_export._internal_.Session.md).[acceptInvalid](behavior_cluster_export._internal_.Session.md#acceptinvalid)

#### Defined in

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L86)

___

### activity

• `Optional` **activity**: [`Activity`](behavior_cluster_export._internal_.Activity.md)

Activity tracking information.  If present, activity frames are inserted at key points for diagnostic
purposes.

#### Defined in

[packages/matter.js/src/behavior/context/ActionContext.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/context/ActionContext.ts#L54)

___

### command

• `Optional` `Readonly` **command**: `boolean`

If this is true then data access levels are not enforced.  Datatypes and command-related access controls are
active.

#### Inherited from

[Session](behavior_cluster_export._internal_.Session.md).[command](behavior_cluster_export._internal_.Session.md#command)

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:159](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L159)

___

### fabric

• `Optional` `Readonly` **fabric**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

The fabric of the authorized client.

#### Inherited from

[Session](behavior_cluster_export._internal_.Session.md).[fabric](behavior_cluster_export._internal_.Session.md#fabric)

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:137](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L137)

___

### fabricFiltered

• `Optional` `Readonly` **fabricFiltered**: `boolean`

If this is true, fabric-scoped lists are filtered to the accessing
fabric.

#### Inherited from

[Session](behavior_cluster_export._internal_.Session.md).[fabricFiltered](behavior_cluster_export._internal_.Session.md#fabricfiltered)

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L148)

___

### message

• `Optional` **message**: [`Message`](codec_export.Message.md)

The wire message that initiated invocation.

#### Defined in

[packages/matter.js/src/behavior/context/ActionContext.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/context/ActionContext.ts#L48)

___

### offline

• `Optional` **offline**: `boolean`

If this is true then access levels are not enforced and all values are read/write.  Datatypes are still
enforced.

Tracks "offline" rather than "online" because this makes the safer mode (full enforcement) the default.

#### Inherited from

[Session](behavior_cluster_export._internal_.Session.md).[offline](behavior_cluster_export._internal_.Session.md#offline)

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:167](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L167)

___

### session

• `Optional` **session**: [`SecureSession`](../classes/session_export.SecureSession.md)\<[`MatterDevice`](../classes/behavior_cluster_export._internal_.MatterDevice.md)\>

The Matter session in which an interaction occurs.

#### Defined in

[packages/matter.js/src/behavior/context/ActionContext.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/context/ActionContext.ts#L43)

___

### subject

• `Optional` `Readonly` **subject**: [`NodeId`](../modules/datatype_export.md#nodeid)

The authenticated [SubjectId](../modules/datatype_export.md#subjectid) for online sessions.

#### Inherited from

[Session](behavior_cluster_export._internal_.Session.md).[subject](behavior_cluster_export._internal_.Session.md#subject)

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:142](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L142)

___

### timed

• `Optional` `Readonly` **timed**: `boolean`

If this is true a timed transaction is in effect.

#### Inherited from

[Session](behavior_cluster_export._internal_.Session.md).[timed](behavior_cluster_export._internal_.Session.md#timed)

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:153](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L153)

___

### trace

• `Optional` **trace**: [`Action`](behavior_cluster_export._internal_.Action.md)

A target for instrumentation information.  If present, various components will populate with diagnostic
information during the action.

#### Inherited from

[Session](behavior_cluster_export._internal_.Session.md).[trace](behavior_cluster_export._internal_.Session.md#trace)

#### Defined in

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L80)

___

### transaction

• **transaction**: [`Transaction`](behavior_export._internal_.Transaction-1.md)

The transaction used for isolating state changes associated with this session.

#### Inherited from

[Session](behavior_cluster_export._internal_.Session.md).[transaction](behavior_cluster_export._internal_.Session.md#transaction)

#### Defined in

[packages/matter.js/src/behavior/supervision/ValueSupervisor.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/supervision/ValueSupervisor.ts#L74)

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

#### Inherited from

[Session](behavior_cluster_export._internal_.Session.md).[accessLevelFor](behavior_cluster_export._internal_.Session.md#accesslevelfor)

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L132)

___

### agentFor

▸ **agentFor**\<`T`\>(`endpoint`): [`Instance`](../modules/endpoint_export.Agent.md#instance)\<`T`\>

Obtain an agent for interacting with an endpoint in this context.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EndpointType`](behavior_cluster_export._internal_.EndpointType-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../classes/endpoint_export.Endpoint-1.md)\<`T`\> |

#### Returns

[`Instance`](../modules/endpoint_export.Agent.md#instance)\<`T`\>

#### Defined in

[packages/matter.js/src/behavior/context/ActionContext.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/context/ActionContext.ts#L59)
