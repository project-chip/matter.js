[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/ota-software-update-requestor/export](../modules/behavior_definitions_ota_software_update_requestor_export.md) / OtaSoftwareUpdateRequestorBehavior

# Interface: OtaSoftwareUpdateRequestorBehavior

[behavior/definitions/ota-software-update-requestor/export](../modules/behavior_definitions_ota_software_update_requestor_export.md).OtaSoftwareUpdateRequestorBehavior

## Hierarchy

- [`OtaSoftwareUpdateRequestorBehaviorType`](../modules/behavior_definitions_ota_software_update_requestor_export._internal_.md#otasoftwareupdaterequestorbehaviortype)

  ↳ **`OtaSoftwareUpdateRequestorBehavior`**

  ↳↳ [`OtaSoftwareUpdateRequestorServer`](../classes/behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorServer.md)

## Table of contents

### Properties

- [#agent](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior-1.md##agent)
- [[reference]](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior-1.md#[reference])
- [agent](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior-1.md#agent)
- [cluster](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior-1.md#cluster)
- [context](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior-1.md#context)
- [endpoint](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior-1.md#endpoint)
- [events](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior-1.md#events)
- [features](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior-1.md#features)
- [session](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior-1.md#session)
- [state](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior-1.md#state)

### Methods

- [[asyncDispose]](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior-1.md#[asyncdispose])
- [announceOtaProvider](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior-1.md#announceotaprovider)
- [asAdmin](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior-1.md#asadmin)
- [callback](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior-1.md#callback)
- [initialize](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior-1.md#initialize)
- [reactTo](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior-1.md#reactto)
- [toString](behavior_definitions_ota_software_update_requestor_export.OtaSoftwareUpdateRequestorBehavior-1.md#tostring)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

OtaSoftwareUpdateRequestorBehaviorType.#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:50](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L50)

___

### [reference]

• **[reference]**: [`Datasource`](behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

OtaSoftwareUpdateRequestorBehaviorType.[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:273](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L273)

[packages/matter.js/src/behavior/Behavior.ts:273](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L273)

[packages/matter.js/src/behavior/Behavior.ts:273](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L273)

___

### agent

• **agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

OtaSoftwareUpdateRequestorBehaviorType.agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:79](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L79)

[packages/matter.js/src/behavior/Behavior.ts:79](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L79)

[packages/matter.js/src/behavior/Behavior.ts:79](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L79)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

OtaSoftwareUpdateRequestorBehaviorType.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

OtaSoftwareUpdateRequestorBehaviorType.context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:93](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L93)

[packages/matter.js/src/behavior/Behavior.ts:93](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L93)

[packages/matter.js/src/behavior/Behavior.ts:93](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L93)

___

### endpoint

• **endpoint**: [`Endpoint`](../classes/endpoint_export.Endpoint-1.md)\<[`Empty`](behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

OtaSoftwareUpdateRequestorBehaviorType.endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:86](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L86)

[packages/matter.js/src/behavior/Behavior.ts:86](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L86)

[packages/matter.js/src/behavior/Behavior.ts:86](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L86)

___

### events

• `Readonly` **events**: [`EventEmitter`](../classes/util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `defaultOtaProviders$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableFabricScopedAttribute`](cluster_export.WritableFabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[], `any`\>\> ; `updatePossible$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<`boolean`, `any`\>\> ; `updateState$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md), `any`\>\> ; `updateStateProgress$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](cluster_export.Attribute.md)\<``null`` \| `number`, `any`\>\>  } & {} & \{ `downloadError`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bytesDownloaded`: [`FieldType`](tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `platformCode`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `progressPercent`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>\> ; `stateTransition`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `previousState`: [`FieldType`](tlv_export.FieldType.md)\<[`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md)\> ; `reason`: [`FieldType`](tlv_export.FieldType.md)\<[`ChangeReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.ChangeReason.md)\> ; `targetSoftwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number`\>  }\>, `any`\>\> ; `versionApplied`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`Event`](cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>\>  } & {}

Access the behavior's events.

#### Inherited from

OtaSoftwareUpdateRequestorBehaviorType.events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:144](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L144)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

OtaSoftwareUpdateRequestorBehaviorType.features

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

___

### session

• **session**: [`SecureSession`](../classes/session_export.SecureSession.md)\<[`MatterDevice`](../classes/behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

OtaSoftwareUpdateRequestorBehaviorType.session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:100](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L100)

[packages/matter.js/src/behavior/Behavior.ts:100](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L100)

[packages/matter.js/src/behavior/Behavior.ts:100](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L100)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `defaultOtaProviders`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] ; `updatePossible`: `boolean` ; `updateState`: [`UpdateState`](../enums/cluster_export.OtaSoftwareUpdateRequestor.UpdateState.md) ; `updateStateProgress`: ``null`` \| `number`  } & {} & {} & {}

Access the behavior's state.

#### Inherited from

OtaSoftwareUpdateRequestorBehaviorType.state

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:139](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L139)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:285](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L285)

## Methods

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

OtaSoftwareUpdateRequestorBehaviorType.[asyncDispose]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:197](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L197)

___

### announceOtaProvider

▸ **announceOtaProvider**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command may be invoked by Administrators to announce the presence of a particular OTA Provider.

This command shall be scoped to the accessing fabric.

If the accessing fabric index is 0, this command shall fail with an UNSUPPORTED_ACCESS status code.

This field shall contain the Node ID of a Node implementing the OTA Provider cluster server, on the
accessing fabric.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `announcementReason`: [`FieldType`](tlv_export.FieldType.md)\<[`AnnouncementReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)\> ; `endpoint`: [`FieldType`](tlv_export.FieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `fabricIndex`: [`FieldType`](tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `metadataForNode`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `providerNodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.19.7.6.1

#### Inherited from

OtaSoftwareUpdateRequestorBehaviorType.announceOtaProvider

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorInterface.ts:41](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/ota-software-update-requestor/OtaSoftwareUpdateRequestorInterface.ts#L41)

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

OtaSoftwareUpdateRequestorBehaviorType.asAdmin

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:124](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L124)

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

OtaSoftwareUpdateRequestorBehaviorType.callback

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:225](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L225)

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

OtaSoftwareUpdateRequestorBehaviorType.initialize

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:191](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L191)

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

OtaSoftwareUpdateRequestorBehaviorType.reactTo

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:211](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L211)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

OtaSoftwareUpdateRequestorBehaviorType.toString

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:202](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L202)
