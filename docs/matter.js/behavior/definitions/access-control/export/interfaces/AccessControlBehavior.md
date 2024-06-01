[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/access-control/export](../README.md) / AccessControlBehavior

# Interface: AccessControlBehavior

## Extends

- [`AccessControlBehaviorType`](../-internal-/README.md#accesscontrolbehaviortype)

## Extended by

- [`AccessControlServer`](../classes/AccessControlServer.md)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`AccessControlBehaviorType.#agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

`AccessControlBehaviorType.[reference]`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`AccessControlBehaviorType.agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

`AccessControlBehaviorType.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

`AccessControlBehaviorType.context`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

`AccessControlBehaviorType.endpoint`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md) & `Omit`\<[`EventEmitter`](../../../../../util/export/classes/EventEmitter.md), `never`\> & `object` & `object` & `object` & `object` & `object` & `object`

Access the behavior's events.

#### Type declaration

##### accessControlEntriesPerFabric$Changing

> **accessControlEntriesPerFabric$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

##### acl$Changing

> **acl$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableFabricScopedAttribute`](../../../../../cluster/export/interfaces/WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>\>

##### subjectsPerAccessControlEntry$Changing

> **subjectsPerAccessControlEntry$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

##### targetsPerAccessControlEntry$Changing

> **targetsPerAccessControlEntry$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

#### Type declaration

##### extension$Changing

> **extension$Changing**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableFabricScopedAttribute`](../../../../../cluster/export/interfaces/OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>\>

#### Type declaration

##### accessControlEntriesPerFabric$Changed

> **accessControlEntriesPerFabric$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

##### acl$Changed

> **acl$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableFabricScopedAttribute`](../../../../../cluster/export/interfaces/WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>\>

##### subjectsPerAccessControlEntry$Changed

> **subjectsPerAccessControlEntry$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

##### targetsPerAccessControlEntry$Changed

> **targetsPerAccessControlEntry$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

#### Type declaration

##### extension$Changed

> **extension$Changed**: `undefined` \| [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`OptionalWritableFabricScopedAttribute`](../../../../../cluster/export/interfaces/OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>\>

#### Type declaration

##### accessControlEntryChanged

> **accessControlEntryChanged**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`Event`](../../../../../cluster/export/interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>\>

The cluster shall send AccessControlEntryChanged events whenever its ACL attribute data is changed by an
Administrator.

  • Each added entry shall generate an event with ChangeType Added.

  • Each changed entry shall generate an event with ChangeType Changed.

  • Each removed entry shall generate an event with ChangeType Removed.

###### See

MatterSpecification.v11.Core § 9.10.7.1

##### accessControlExtensionChanged

> **accessControlExtensionChanged**: [`EventObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#eventobservablee)\<[`Event`](../../../../../cluster/export/interfaces/Event.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>\>

The cluster shall send AccessControlExtensionChanged events whenever its extension attribute data is
changed by an Administrator.

  • Each added extension shall generate an event with ChangeType Added.

  • Each changed extension shall generate an event with ChangeType Changed.

  • Each removed extension shall generate an event with ChangeType Removed.

###### See

MatterSpecification.v11.Core § 9.10.7.2

#### Inherited from

`AccessControlBehaviorType.events`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: `object`

Supported features as a flag object.

#### Inherited from

`AccessControlBehaviorType.features`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

`AccessControlBehaviorType.session`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### state

> `readonly` **state**: `Omit`\<`object`, `never`\> & `object` & `object` & `object` & `object`

Access the behavior's state.

#### Type declaration

##### acl

> **acl**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

An attempt to add an Access Control Entry when no more entries are available shall result in a
RESOURCE_EXHAUSTED error being reported and the ACL attribute shall NOT have the entry

added to it. See access control limits.

See the AccessControlEntriesPerFabric attribute for the actual value of the number of entries per fabric
supported by the server.

Each Access Control Entry codifies a single grant of privilege on this Node, and is used by the Access
Control Privilege Granting algorithm to determine if a subject has privilege to interact with targets on
the Node.

###### See

MatterSpecification.v11.Core § 9.10.5.3

#### Type declaration

##### extension?

> `optional` **extension**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

If present, the Access Control Extensions may be used by Administrators to store arbitrary data related
to fabric’s Access Control Entries.

The Access Control Extension list shall support a single extension entry per supported fabric.

###### See

MatterSpecification.v11.Core § 9.10.5.4

#### Type declaration

##### accessControlEntriesPerFabric

> **accessControlEntriesPerFabric**: `number`

This attribute shall provide the minimum number of ACL Entries per fabric that are supported by this
server.

Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
decrease across time as software updates occur that could impact this value. If this is a concern for a
given implementation, it is recommended to only use the minimum value required and avoid reporting a
higher value than the required minimum.

###### See

MatterSpecification.v11.Core § 9.10.5.7

##### subjectsPerAccessControlEntry

> **subjectsPerAccessControlEntry**: `number`

This attribute shall provide the minimum number of Subjects per entry that are supported by this server.

Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
decrease across time as software updates occur that could impact this value. If this is a concern for a
given implementation, it is recommended to only use the minimum value required and avoid reporting a
higher value than the required minimum.

###### See

MatterSpecification.v11.Core § 9.10.5.5

##### targetsPerAccessControlEntry

> **targetsPerAccessControlEntry**: `number`

This attribute shall provide the minimum number of Targets per entry that are supported by this server.

Since reducing this value over time may invalidate ACL entries already written, this value shall NOT
decrease across time as software updates occur that could impact this value. If this is a concern for a
given implementation, it is recommended to only use the minimum value required and avoid reporting a
higher value than the required minimum.

###### See

MatterSpecification.v11.Core § 9.10.5.6

#### Inherited from

`AccessControlBehaviorType.state`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L140)

## Methods

### `[asyncDispose]`()

> **\[asyncDispose\]**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`AccessControlBehaviorType.[asyncDispose]`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L198)

***

### asAdmin()

> **asAdmin**(`fn`): `void`

Execute logic with elevated privileges.

The provided function executes with privileges escalated to offline mode.  This is not commonly necessary.

Elevated logic effectively ignores ACLs so should be used with care.

Note that interactions with the behavior will remain elevated until the synchronous completion of this call.
You should only elevate privileges for synchronous logic.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `void` | the elevated logic |

#### Returns

`void`

#### Inherited from

`AccessControlBehaviorType.asAdmin`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L125)

***

### assertAttributeEnabled()

> **assertAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Behavior`](../../../../export/classes/Behavior.md) |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`void`

#### Inherited from

`AccessControlBehaviorType.assertAttributeEnabled`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

***

### callback()

> `protected` **callback**\<`A`, `R`\>(`reactor`, `options`?): (...`args`) => `undefined` \| `R`

Create a generic callback function that has the same properties as a [Reactor](../../../../export/README.md#reactortr).

Like a reactor, the callback's "this" will be bound to an active Behavior instance.
Because of this: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* `any`[] |
| `R` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reactor` | [`Reactor`](../../../../export/README.md#reactortr)\<`A`, `R`\> |
| `options`? | [`Options`](../../../../export/namespaces/Reactor/interfaces/Options.md) |

#### Returns

`Function`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `A` |

##### Returns

`undefined` \| `R`

#### Inherited from

`AccessControlBehaviorType.callback`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L226)

***

### initialize()

> **initialize**(`_options`?): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_options`? | `object` |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`AccessControlBehaviorType.initialize`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L192)

***

### reactTo()

> `protected` **reactTo**\<`O`\>(`observable`, `reactor`, `options`?): `void`

Install a [Reactor](../../../../export/README.md#reactortr).

Important: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Type parameter |
| :------ |
| `O` *extends* [`Observable`](../../../../../util/export/interfaces/Observable.md)\<`any`[], `any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../../../../export/README.md#reactortr)\<`Parameters`\<`O`\[`"emit"`\]\>, `ReturnType`\<`O`\[`"emit"`\]\>\> |
| `options`? | [`Options`](../../../../export/namespaces/Reactor/interfaces/Options.md) |

#### Returns

`void`

#### Inherited from

`AccessControlBehaviorType.reactTo`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L212)

***

### requireAttributeEnabled()

> **requireAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `Exclude`\<`This`\[`"state"`\]\[`K`\], `undefined`\>

#### Type parameters

| Type parameter |
| :------ |
| `This` *extends* [`Behavior`](../../../../export/classes/Behavior.md) |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`Exclude`\<`This`\[`"state"`\]\[`K`\], `undefined`\>

#### Inherited from

`AccessControlBehaviorType.requireAttributeEnabled`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

`AccessControlBehaviorType.toString`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L203)
