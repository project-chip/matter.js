[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/application-launcher/export](../modules/behavior_definitions_application_launcher_export.md) / ApplicationLauncherBehavior

# Interface: ApplicationLauncherBehavior

[behavior/definitions/application-launcher/export](../modules/behavior_definitions_application_launcher_export.md).ApplicationLauncherBehavior

## Hierarchy

- [`ApplicationLauncherBehaviorType`](../modules/behavior_definitions_application_launcher_export._internal_.md#applicationlauncherbehaviortype)

  ↳ **`ApplicationLauncherBehavior`**

  ↳↳ [`ApplicationLauncherServer`](../classes/behavior_definitions_application_launcher_export.ApplicationLauncherServer.md)

## Table of contents

### Properties

- [#agent](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md##agent)
- [[reference]](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md#[reference])
- [agent](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md#agent)
- [cluster](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md#cluster)
- [context](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md#context)
- [endpoint](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md#endpoint)
- [events](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md#events)
- [features](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md#features)
- [session](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md#session)
- [state](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md#state)

### Methods

- [[asyncDispose]](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md#[asyncdispose])
- [asAdmin](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md#asadmin)
- [callback](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md#callback)
- [hideApp](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md#hideapp)
- [initialize](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md#initialize)
- [launchApp](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md#launchapp)
- [reactTo](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md#reactto)
- [stopApp](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md#stopapp)
- [toString](behavior_definitions_application_launcher_export.ApplicationLauncherBehavior-1.md#tostring)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

ApplicationLauncherBehaviorType.#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:50](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L50)

___

### [reference]

• **[reference]**: [`Datasource`](behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

ApplicationLauncherBehaviorType.[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:273](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L273)

[packages/matter.js/src/behavior/Behavior.ts:273](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L273)

[packages/matter.js/src/behavior/Behavior.ts:273](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L273)

___

### agent

• **agent**: [`Agent`](../classes/endpoint_export.Agent-1.md)

#### Inherited from

ApplicationLauncherBehaviorType.agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:79](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L79)

[packages/matter.js/src/behavior/Behavior.ts:79](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L79)

[packages/matter.js/src/behavior/Behavior.ts:79](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L79)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

ApplicationLauncherBehaviorType.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

ApplicationLauncherBehaviorType.context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:93](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L93)

[packages/matter.js/src/behavior/Behavior.ts:93](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L93)

[packages/matter.js/src/behavior/Behavior.ts:93](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L93)

___

### endpoint

• **endpoint**: [`Endpoint`](../classes/endpoint_export.Endpoint-1.md)\<[`Empty`](behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

ApplicationLauncherBehaviorType.endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:86](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L86)

[packages/matter.js/src/behavior/Behavior.ts:86](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L86)

[packages/matter.js/src/behavior/Behavior.ts:86](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L86)

___

### events

• `Readonly` **events**: [`EventEmitter`](../classes/util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & {} & \{ `currentApp$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: ... ; `catalogVendorId`: ...  }\>\> ; `endpoint`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>, `any`\>\>  } & {} & {}

Access the behavior's events.

#### Inherited from

ApplicationLauncherBehaviorType.events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:144](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L144)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

ApplicationLauncherBehaviorType.features

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

ApplicationLauncherBehaviorType.session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:100](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L100)

[packages/matter.js/src/behavior/Behavior.ts:100](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L100)

[packages/matter.js/src/behavior/Behavior.ts:100](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L100)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & {} & \{ `currentApp?`: ``null`` \| [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`FieldType`](tlv_export.FieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\> ; `endpoint`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\>  }\>  } & {} & {}

Access the behavior's state.

#### Inherited from

ApplicationLauncherBehaviorType.state

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

ApplicationLauncherBehaviorType.[asyncDispose]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:197](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L197)

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

ApplicationLauncherBehaviorType.asAdmin

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

ApplicationLauncherBehaviorType.callback

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:225](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L225)

___

### hideApp

▸ **hideApp**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>\>

Upon receipt of this command, the server shall hide the application. The application shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The endpoint may decide to stop the application based on manufacturer specific behavior or resource
constraints if any. The Status attribute shall be updated to ACTIVE_HIDDEN or STOPPED, depending on the
action taken, on the Application Basic cluster of the Endpoint corresponding to the application on which the
action was taken. The Status attribute shall be updated on any other application whose Status may have
changed as a result of this command.

This command returns a Launcher Response.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.4.3

#### Inherited from

ApplicationLauncherBehaviorType.hideApp

#### Defined in

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:133](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L133)

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

ApplicationLauncherBehaviorType.initialize

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:191](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L191)

___

### launchApp

▸ **launchApp**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>\>

Upon receipt of this command, the server shall launch the application with optional data. The application
shall be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The endpoint shall launch and bring to foreground the requisite application if the application is not
already launched and in foreground. The Status attribute shall be updated to ACTIVE_VISIBLE_FOCUS on the
Application Basic cluster of the Endpoint corresponding to the launched application. The Status attribute
shall be updated on any other application whose Status may have changed as a result of this command. The
CurrentApp attribute, if supported, shall be updated to reflect the new application in the foreground.

This command returns a Launcher Response.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\> ; `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.4.1

#### Inherited from

ApplicationLauncherBehaviorType.launchApp

#### Defined in

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:96](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L96)

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

ApplicationLauncherBehaviorType.reactTo

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:211](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L211)

___

### stopApp

▸ **stopApp**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>\>

Upon receipt of this command, the server shall stop the application if it is running. The application shall
be either

  • the specified application, if the Application Platform feature is supported;

  • otherwise the application corresponding to the endpoint.

The Status attribute shall be updated to STOPPED on the Application Basic cluster of the Endpoint
corresponding to the stopped application. The Status attribute shall be updated on any other application
whose Status may have changed as a result of this command.

This command returns a Launcher Response.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `application`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `status`: [`FieldType`](tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.ApplicationLauncher.Status.md)\>  }\>\>

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.4.2

#### Inherited from

ApplicationLauncherBehaviorType.stopApp

#### Defined in

[packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts:114](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/definitions/application-launcher/ApplicationLauncherInterface.ts#L114)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

ApplicationLauncherBehaviorType.toString

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:202](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/behavior/Behavior.ts#L202)
