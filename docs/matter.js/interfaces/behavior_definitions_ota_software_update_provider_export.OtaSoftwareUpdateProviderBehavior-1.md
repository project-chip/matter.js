[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/ota-software-update-provider/export](../modules/behavior_definitions_ota_software_update_provider_export.md) / OtaSoftwareUpdateProviderBehavior

# Interface: OtaSoftwareUpdateProviderBehavior

[behavior/definitions/ota-software-update-provider/export](../modules/behavior_definitions_ota_software_update_provider_export.md).OtaSoftwareUpdateProviderBehavior

## Hierarchy

- [`OtaSoftwareUpdateProviderBehaviorType`](../modules/behavior_definitions_ota_software_update_provider_export._internal_.md#otasoftwareupdateproviderbehaviortype)

  ↳ **`OtaSoftwareUpdateProviderBehavior`**

  ↳↳ [`OtaSoftwareUpdateProviderServer`](../classes/behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderServer.md)

## Table of contents

### Properties

- [#agent](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md##agent)
- [[reference]](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#[reference])
- [agent](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#agent)
- [cluster](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#cluster)
- [context](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#context)
- [endpoint](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#endpoint)
- [events](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#events)
- [features](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#features)
- [session](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#session)
- [state](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#state)

### Methods

- [[asyncDispose]](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#[asyncdispose])
- [applyUpdateRequest](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#applyupdaterequest)
- [asAdmin](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#asadmin)
- [callback](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#callback)
- [initialize](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#initialize)
- [notifyUpdateApplied](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#notifyupdateapplied)
- [queryImage](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#queryimage)
- [reactTo](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#reactto)
- [toString](behavior_definitions_ota_software_update_provider_export.OtaSoftwareUpdateProviderBehavior-1.md#tostring)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

OtaSoftwareUpdateProviderBehaviorType.#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

OtaSoftwareUpdateProviderBehaviorType.[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

OtaSoftwareUpdateProviderBehaviorType.agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

OtaSoftwareUpdateProviderBehaviorType.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

OtaSoftwareUpdateProviderBehaviorType.context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](../classes/endpoint_export.Endpoint-1.md)\<[`Empty`](behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

OtaSoftwareUpdateProviderBehaviorType.endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](../classes/util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & {} & {} & {} & {}

Access the behavior's events.

#### Inherited from

OtaSoftwareUpdateProviderBehaviorType.events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

OtaSoftwareUpdateProviderBehaviorType.features

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

___

### session

• **session**: [`SecureSession`](../classes/session_export.SecureSession.md)\<[`MatterDevice`](../classes/behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

OtaSoftwareUpdateProviderBehaviorType.session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & {} & {} & {} & {}

Access the behavior's state.

#### Inherited from

OtaSoftwareUpdateProviderBehaviorType.state

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

OtaSoftwareUpdateProviderBehaviorType.[asyncDispose]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L198)

___

### applyUpdateRequest

▸ **applyUpdateRequest**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>

This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”. This
field may be used by the OTA Provider to track minimal lifecycle state to allow finer-grained scheduling of
the application of Software Images by OTA Requestors.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `action`: [`FieldType`](tlv_export.FieldType.md)\<[`ApplyUpdateAction`](../enums/cluster_export.OtaSoftwareUpdateProvider.ApplyUpdateAction.md)\> ; `delayedActionTime`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.18

#### Inherited from

OtaSoftwareUpdateProviderBehaviorType.applyUpdateRequest

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L93)

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

OtaSoftwareUpdateProviderBehaviorType.asAdmin

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

OtaSoftwareUpdateProviderBehaviorType.callback

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

OtaSoftwareUpdateProviderBehaviorType.initialize

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:192](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L192)

___

### notifyUpdateApplied

▸ **notifyUpdateApplied**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This field shall contain the UpdateToken as specified in Section 11.19.3.6.1, “UpdateToken usage”.

The SoftwareVersion included in the request payload shall provide the same value as the SoftwareVersion
attribute in the invoking OTA Requestor’s Basic Information Cluster, and SHOULD be consistent with the value
representing a new version running on the Node invoking the command.

When Generated

The NotifyUpdateApplied command SHOULD be invoked in the following two circumstances:

  1. An OTA Requestor has just successfully applied a Software Image it had obtained from a previous
     QueryImage response.

  2. An OTA Requestor has just successfully applied a Software Image it had obtained through means different
     than those of this Cluster.

An OTA Provider may use the state of invocation of this command to help track the progress of update for OTA
Requestors it knows require a new OTA Software Image. However, due to the possibility that an OTA Requestor
may never come back (e.g. device removed from Fabric altogether, or a critical malfunction), an OTA Provider
shall NOT expect every OTA Requestor to invoke this command for correct operation of the OTA Provider.

This command shall be considered optional and shall not result in reduced availability of the OTA Provider
functionality if OTA Requestors never invoke this command.

Effect on Receipt

An OTA Provider receiving an invocation of this command may log it internally.

On receiving this command, an OTA Provider may use the information to update its bookkeeping of cached
Software Images, or use it for other similar administrative purposes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `updateToken`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.22

#### Inherited from

OtaSoftwareUpdateProviderBehaviorType.notifyUpdateApplied

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L129)

___

### queryImage

▸ **queryImage**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>\>

Upon receipt, this command shall trigger an attempt to find an updated Software Image by the OTA Provider to
match the OTA Requestor’s constraints provided in the payload fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `location`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForProvider`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `productId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `protocolsSupported`: [`FieldType`](tlv_export.FieldType.md)\<[`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]\> ; `requestorCanConsent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `softwareVersion`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `vendorId`: [`FieldType`](tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `delayedActionTime`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `imageUri`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `metadataForRequestor`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `softwareVersion`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `softwareVersionString`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)\> ; `updateToken`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `userConsentNeeded`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.1

#### Inherited from

OtaSoftwareUpdateProviderBehaviorType.queryImage

#### Defined in

[packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/ota-software-update-provider/OtaSoftwareUpdateProviderInterface.ts#L84)

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

OtaSoftwareUpdateProviderBehaviorType.reactTo

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

OtaSoftwareUpdateProviderBehaviorType.toString

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L203)
