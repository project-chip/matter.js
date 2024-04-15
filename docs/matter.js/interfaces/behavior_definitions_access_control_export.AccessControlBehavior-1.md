[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/access-control/export](../modules/behavior_definitions_access_control_export.md) / AccessControlBehavior

# Interface: AccessControlBehavior

[behavior/definitions/access-control/export](../modules/behavior_definitions_access_control_export.md).AccessControlBehavior

## Hierarchy

- [`AccessControlBehaviorType`](../modules/behavior_definitions_access_control_export._internal_.md#accesscontrolbehaviortype)

  ↳ **`AccessControlBehavior`**

  ↳↳ [`AccessControlServer`](../classes/behavior_definitions_access_control_export.AccessControlServer-1.md)

## Table of contents

### Properties

- [#agent](behavior_definitions_access_control_export.AccessControlBehavior-1.md##agent)
- [[reference]](behavior_definitions_access_control_export.AccessControlBehavior-1.md#[reference])
- [agent](behavior_definitions_access_control_export.AccessControlBehavior-1.md#agent)
- [cluster](behavior_definitions_access_control_export.AccessControlBehavior-1.md#cluster)
- [context](behavior_definitions_access_control_export.AccessControlBehavior-1.md#context)
- [endpoint](behavior_definitions_access_control_export.AccessControlBehavior-1.md#endpoint)
- [events](behavior_definitions_access_control_export.AccessControlBehavior-1.md#events)
- [features](behavior_definitions_access_control_export.AccessControlBehavior-1.md#features)
- [session](behavior_definitions_access_control_export.AccessControlBehavior-1.md#session)
- [state](behavior_definitions_access_control_export.AccessControlBehavior-1.md#state)

### Methods

- [[asyncDispose]](behavior_definitions_access_control_export.AccessControlBehavior-1.md#[asyncdispose])
- [asAdmin](behavior_definitions_access_control_export.AccessControlBehavior-1.md#asadmin)
- [callback](behavior_definitions_access_control_export.AccessControlBehavior-1.md#callback)
- [initialize](behavior_definitions_access_control_export.AccessControlBehavior-1.md#initialize)
- [reactTo](behavior_definitions_access_control_export.AccessControlBehavior-1.md#reactto)
- [toString](behavior_definitions_access_control_export.AccessControlBehavior-1.md#tostring)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

AccessControlBehaviorType.#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

AccessControlBehaviorType.[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

AccessControlBehaviorType.agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

AccessControlBehaviorType.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

AccessControlBehaviorType.context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](../classes/endpoint_export.Endpoint-1.md)\<[`Empty`](behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

AccessControlBehaviorType.endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](../classes/util_export.EventEmitter-1.md) & `Omit`\<[`EventEmitter`](../classes/util_export.EventEmitter-1.md), `never`\> & \{ `accessControlEntriesPerFabric$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>\> ; `acl$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)[]\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<...\>[]\>  }\>[], `any`\>\> ; `subjectsPerAccessControlEntry$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>\> ; `targetsPerAccessControlEntry$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\>\>  } & \{ `extension$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableFabricScopedAttribute`](cluster_export.OptionalWritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>[], `any`\>\>  } & \{ `accessControlEntryChanged`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `any`\>\> ; `accessControlExtensionChanged`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminNodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)\> ; `adminPasscodeId`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `changeType`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeType`](../enums/cluster_export.AccessControl.ChangeType.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `latestValue`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>\>  }\>, `any`\>\>  } & {}

Access the behavior's events.

#### Inherited from

AccessControlBehaviorType.events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

AccessControlBehaviorType.features

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

___

### session

• **session**: [`SecureSession`](../classes/session_export.SecureSession.md)\<[`MatterDevice`](../classes/behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

AccessControlBehaviorType.session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<{}, `never`\> & \{ `acl`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `authMode`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryAuthMode`](../enums/cluster_export.AccessControl.AccessControlEntryAuthMode.md)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `privilege`: [`FieldType`](tlv_export.FieldType.md)\<[`AccessControlEntryPrivilege`](../enums/cluster_export.AccessControl.AccessControlEntryPrivilege.md)\> ; `subjects`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`NodeId`](../modules/datatype_export.md#nodeid)[]\> ; `targets`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `cluster`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `deviceType`: [`FieldType`](tlv_export.FieldType.md)\<...\> ; `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<...\>  }\>[]\>  }\>[]  } & \{ `extension?`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>[]  } & \{ `accessControlEntriesPerFabric`: `number` ; `subjectsPerAccessControlEntry`: `number` ; `targetsPerAccessControlEntry`: `number`  } & {}

Access the behavior's state.

#### Inherited from

AccessControlBehaviorType.state

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:285](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L285)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

AccessControlBehaviorType.[asyncDispose]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L198)

___

### asAdmin

▸ **asAdmin**(`fn`): `void`

Execute logic with elevated privileges.

The provided function executes with privileges escalated to offline mode.  This is not commonly necessary.

Elevated logic effectively ignores ACLs so should be used with care.

Note that interactions with the behavior will remain elevated until the synchronous completion of this call.
You should only elevate privileges for synchronous logic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `void` | the elevated logic |

#### Returns

`void`

#### Inherited from

AccessControlBehaviorType.asAdmin

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L125)

___

### callback

▸ **callback**\<`A`, `R`\>(`reactor`, `options?`): (...`args`: `A`) => `undefined` \| `R`

Create a generic callback function that has the same properties as a [Reactor](../modules/behavior_export.md#reactor).

Like a reactor, the callback's "this" will be bound to an active Behavior instance.
Because of this: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `any`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`A`, `R`\> |
| `options?` | [`Options`](behavior_export.Reactor.Options.md) |

#### Returns

`fn`

▸ (`...args`): `undefined` \| `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `A` |

##### Returns

`undefined` \| `R`

#### Inherited from

AccessControlBehaviorType.callback

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### initialize

▸ **initialize**(`_options?`): [`MaybePromise`](../modules/util_export.md#maybepromise)

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_options?` | `Object` |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

AccessControlBehaviorType.initialize

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L192)

___

### reactTo

▸ **reactTo**\<`O`\>(`observable`, `reactor`, `options?`): `void`

Install a [Reactor](../modules/behavior_export.md#reactor).

Important: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`Observable`](util_export.Observable.md)\<`any`[], `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`Parameters`\<`O`[``"emit"``]\>, `ReturnType`\<`O`[``"emit"``]\>\> |
| `options?` | [`Options`](behavior_export.Reactor.Options.md) |

#### Returns

`void`

#### Inherited from

AccessControlBehaviorType.reactTo

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

AccessControlBehaviorType.toString

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L203)
