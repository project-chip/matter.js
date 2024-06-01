[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/definitions/group-key-management/export](../README.md) / GroupKeyManagementBehavior

# Interface: GroupKeyManagementBehavior

## Extends

- [`GroupKeyManagementBehaviorType`](../-internal-/README.md#groupkeymanagementbehaviortype)

## Extended by

- [`GroupKeyManagementServer`](../classes/GroupKeyManagementServer.md)

## Properties

### #agent

> `private` **#agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`GroupKeyManagementBehaviorType.#agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L51)

***

### \[reference\]

> **\[reference\]**: [`Datasource`](../../../../cluster/export/-internal-/interfaces/Datasource.md)\<[`StateType`](../../../../cluster/export/-internal-/interfaces/StateType.md)\>

#### Inherited from

`GroupKeyManagementBehaviorType.[reference]`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L274)

***

### agent

> **agent**: [`Agent`](../../../../../endpoint/export/classes/Agent.md)

#### Inherited from

`GroupKeyManagementBehaviorType.agent`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L80)

***

### cluster

> **cluster**: `never`

The implemented cluster.

#### Inherited from

`GroupKeyManagementBehaviorType.cluster`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

***

### context

> **context**: [`ActionContext`](../../../../cluster/export/-internal-/interfaces/ActionContext.md)

#### Inherited from

`GroupKeyManagementBehaviorType.context`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L94)

***

### endpoint

> **endpoint**: [`Endpoint`](../../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

`GroupKeyManagementBehaviorType.endpoint`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L87)

***

### events

> `readonly` **events**: [`EventEmitter`](../../../../../util/export/classes/EventEmitter.md) & `Omit`\<[`ClusterEvents`](../../../../cluster/export/README.md#clustereventsclustertbaset)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>, `never`\> & `object` & `object` & `object` & `object` & `object` & `object`

Access the behavior's events.

#### Type declaration

##### groupKeyMap$Changing

> **groupKeyMap$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableFabricScopedAttribute`](../../../../../cluster/export/interfaces/WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>\>

##### groupTable$Changing

> **groupTable$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FabricScopedAttribute`](../../../../../cluster/export/interfaces/FabricScopedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>\>

##### maxGroupKeysPerFabric$Changing

> **maxGroupKeysPerFabric$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

##### maxGroupsPerFabric$Changing

> **maxGroupsPerFabric$Changing**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

#### Type declaration

##### groupKeyMap$Changed

> **groupKeyMap$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`WritableFabricScopedAttribute`](../../../../../cluster/export/interfaces/WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>\>

##### groupTable$Changed

> **groupTable$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FabricScopedAttribute`](../../../../../cluster/export/interfaces/FabricScopedAttribute.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>\>

##### maxGroupKeysPerFabric$Changed

> **maxGroupKeysPerFabric$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

##### maxGroupsPerFabric$Changed

> **maxGroupsPerFabric$Changed**: [`AttributeObservable`](../../../../cluster/export/namespaces/ClusterEvents/README.md#attributeobservablea)\<[`FixedAttribute`](../../../../../cluster/export/interfaces/FixedAttribute.md)\<`number`, `any`\>\>

#### Inherited from

`GroupKeyManagementBehaviorType.events`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L145)

***

### features

> **features**: `object`

Supported features as a flag object.

#### Inherited from

`GroupKeyManagementBehaviorType.features`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

***

### session

> **session**: [`SecureSession`](../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../cluster/export/-internal-/classes/MatterDevice.md)\>

#### Inherited from

`GroupKeyManagementBehaviorType.session`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L101)

***

### state

> `readonly` **state**: `Omit`\<[`Type`](../../../../cluster/export/namespaces/ClusterState/README.md#typecb)\<[`Of`](../../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../../cluster/export/namespaces/ClusterBehavior/README.md)\>, `never`\> & `object` & `object` & `object` & `object`

Access the behavior's state.

#### Type declaration

##### groupKeyMap

> **groupKeyMap**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

This attribute is a list of GroupKeyMapStruct entries. Each entry associates a logical Group Id with a
particular group key set.

###### See

MatterSpecification.v11.Core § 11.2.7.1

##### groupTable

> **groupTable**: [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[]

This attribute is a list of GroupInfoMapStruct entries. Each entry provides read-only information about
how a given logical Group ID maps to a particular set of endpoints, and a name for the group. The
content of this attribute reflects data managed via the Groups cluster (see AppClusters), and is in
general terms referred to as the 'node-wide Group Table'.

The GroupTable shall NOT contain any entry whose GroupInfoMapStruct has an empty Endpoints list. If a
RemoveGroup or RemoveAllGroups command causes the removal of a group mapping from its last mapped
endpoint, the entire GroupTable entry for that given GroupId shall be removed.

###### See

MatterSpecification.v11.Core § 11.2.7.2

#### Type declaration

##### maxGroupKeysPerFabric

> **maxGroupKeysPerFabric**: `number`

This attribute shall indicate the maximum number of group key sets this node supports per fabric. The
value of this attribute shall be set according to the minimum number of group key sets to support as
specified in Group Limits.

###### See

MatterSpecification.v11.Core § 11.2.7.4

##### maxGroupsPerFabric

> **maxGroupsPerFabric**: `number`

This attribute shall indicate the maximum number of groups that this node supports per fabric. The value
of this attribute shall be set to be no less than the required minimum supported groups as specified in
Group Limits. The length of the GroupKeyMap and GroupTable list attributes shall NOT exceed the value of
the MaxGroupsPerFabric attribute multiplied by the number of supported fabrics.

###### See

MatterSpecification.v11.Core § 11.2.7.3

#### Inherited from

`GroupKeyManagementBehaviorType.state`

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

`GroupKeyManagementBehaviorType.[asyncDispose]`

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

`GroupKeyManagementBehaviorType.asAdmin`

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

`GroupKeyManagementBehaviorType.assertAttributeEnabled`

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

`GroupKeyManagementBehaviorType.callback`

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

`GroupKeyManagementBehaviorType.initialize`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L192)

***

### keySetRead()

> **keySetRead**(`request`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This command is used by Administrators to read the state of a given Group Key Set.

Effect on Receipt

If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as
that provided in the GroupKeySetID field, then the contents of that Group Key Set shall be sent in a
KeySetReadResponse command, but with the EpochKey0, EpochKey1 and EpochKey2 fields replaced by null.

Otherwise, if the GroupKeySetID does not refer to a Group Key Set associated with the accessing fabric, then
this command shall fail with a NOT_FOUND status code.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Inherited from

`GroupKeyManagementBehaviorType.keySetRead`

#### See

MatterSpecification.v11.Core § 11.2.8.2

#### Source

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:174](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L174)

***

### keySetReadAllIndices()

> **keySetReadAllIndices**(): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This command is used by Administrators to query a list of all Group Key Sets associated with the accessing
fabric.

Effect on Receipt

Upon receipt, this command shall iterate all stored GroupKeySetStruct associated with the accessing fabric
and generate a KeySetReadAllIndicesResponse command containing the list of GroupKeySetID values from those
structs.

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### Inherited from

`GroupKeyManagementBehaviorType.keySetReadAllIndices`

#### See

MatterSpecification.v11.Core § 11.2.8.5

#### Source

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L212)

***

### keySetRemove()

> **keySetRemove**(`request`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

This command is used by Administrators to remove all state of a given Group Key Set.

Effect on Receipt

If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as
that provided in the GroupKeySetID field, then the contents of that Group Key Set shall be removed,
including all epoch keys it contains.

If there exist any entries for the accessing fabric within the GroupKeyMap attribute that refer to the
GroupKeySetID just removed, then these entries shall be removed from that list.

This command shall fail with an INVALID_COMMAND status code back to the initiator if the GroupKeySetID being
removed is 0, which is the Key Set associated with the Identity Protection Key (IPK). The only method to
remove the IPK is usage of the RemoveFabric command or any operation which causes the equivalent of a
RemoveFabric to occur by side-effect.

This command shall send a SUCCESS status code back to the initiator on success, or NOT_FOUND if the
GroupKeySetID requested did not exist.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`GroupKeyManagementBehaviorType.keySetRemove`

#### See

MatterSpecification.v11.Core § 11.2.8.4

#### Source

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:198](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L198)

***

### keySetWrite()

> **keySetWrite**(`request`): [`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

This command is used by Administrators to set the state of a given Group Key Set, including atomically
updating the state of all epoch keys.

Effect on Receipt

If the EpochKey0 field is null or its associated EpochStartTime0 field is null, then this command shall fail
with an INVALID_COMMAND status code sent back to the initiator.

If the EpochKey1 field is not null, its associated EpochStartTime1 field shall contain a later epoch start
time than the epoch start time found in the EpochStartTime0 field. Otherwise this command shall fail with an
INVALID_COMMAND status code sent back to the initiator.

If the EpochKey2 field is not null, then the EpochKey1 field shall NOT be null. Otherwise this command shall
fail with an INVALID_COMMAND status code sent back to the initiator.

If the EpochKey2 field is not null, its associated EpochStartTime2 field shall contain a later epoch start
time than the epoch start time found in the EpochStartTime1 field. Otherwise this command shall fail with an
INVALID_COMMAND status code sent back to the initiator.

If there exists a Group Key Set associated with the accessing fabric which has the same GroupKeySetID as
that provided in the GroupKeySet field, then the contents of that group key set shall be replaced. A
replacement shall be done by executing the equivalent of entirely removing the previous Group Key Set with
the given GroupKeySetID, followed by an addition of a Group Key Set with the provided configuration.
Otherwise, if the GroupKeySetID did not match an existing entry, a new Group Key Set associated with the
accessing fabric shall be created with the provided data. The Group Key Set shall be written to non-volatile
storage.

Upon completion, this command shall send a status code back to the initiator:

  • If the Group Key Set was properly installed or updated on the Node, the status code shall be set to
    SUCCESS.

  • If there are insufficient resources on the receiver to store an additional Group Key Set, the status
    code shall be set to RESOURCE_EXHAUSTED (see group key limits);

  • Otherwise, this status code shall be set to FAILURE.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)

#### Inherited from

`GroupKeyManagementBehaviorType.keySetWrite`

#### See

MatterSpecification.v11.Core § 11.2.8.1

#### Source

[packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts:158](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/group-key-management/GroupKeyManagementInterface.ts#L158)

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

`GroupKeyManagementBehaviorType.reactTo`

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

`GroupKeyManagementBehaviorType.requireAttributeEnabled`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

***

### toString()

> **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

`GroupKeyManagementBehaviorType.toString`

#### Source

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L203)
