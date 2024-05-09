[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / [\<internal\>](../modules/node_export._internal_.md) / EndpointLifecycle

# Class: EndpointLifecycle

[node/export](../modules/node_export.md).[\<internal\>](../modules/node_export._internal_.md).EndpointLifecycle

State related to a [Endpoint](endpoint_export.Endpoint-1.md)'s lifecycle.

## Hierarchy

- **`EndpointLifecycle`**

  ↳ [`NodeLifecycle`](node_export.NodeLifecycle.md)

## Table of contents

### Constructors

- [constructor](node_export._internal_.EndpointLifecycle-1.md#constructor)

### Properties

- [#changed](node_export._internal_.EndpointLifecycle-1.md##changed)
- [#destroyed](node_export._internal_.EndpointLifecycle-1.md##destroyed)
- [#endpoint](node_export._internal_.EndpointLifecycle-1.md##endpoint)
- [#hasId](node_export._internal_.EndpointLifecycle-1.md##hasid)
- [#hasNumber](node_export._internal_.EndpointLifecycle-1.md##hasnumber)
- [#installed](node_export._internal_.EndpointLifecycle-1.md##installed)
- [#isInstalled](node_export._internal_.EndpointLifecycle-1.md##isinstalled)
- [#isReady](node_export._internal_.EndpointLifecycle-1.md##isready)
- [#isTreeReady](node_export._internal_.EndpointLifecycle-1.md##istreeready)
- [#queuedUpdates](node_export._internal_.EndpointLifecycle-1.md##queuedupdates)
- [#ready](node_export._internal_.EndpointLifecycle-1.md##ready)
- [#reset](node_export._internal_.EndpointLifecycle-1.md##reset)
- [#treeReady](node_export._internal_.EndpointLifecycle-1.md##treeready)

### Accessors

- [changed](node_export._internal_.EndpointLifecycle-1.md#changed)
- [destroyed](node_export._internal_.EndpointLifecycle-1.md#destroyed)
- [hasId](node_export._internal_.EndpointLifecycle-1.md#hasid)
- [hasNumber](node_export._internal_.EndpointLifecycle-1.md#hasnumber)
- [installed](node_export._internal_.EndpointLifecycle-1.md#installed)
- [isInstalled](node_export._internal_.EndpointLifecycle-1.md#isinstalled)
- [isReady](node_export._internal_.EndpointLifecycle-1.md#isready)
- [isTreeReady](node_export._internal_.EndpointLifecycle-1.md#istreeready)
- [ready](node_export._internal_.EndpointLifecycle-1.md#ready)
- [reset](node_export._internal_.EndpointLifecycle-1.md#reset)
- [treeReady](node_export._internal_.EndpointLifecycle-1.md#treeready)

### Methods

- [#checkTreeReadiness](node_export._internal_.EndpointLifecycle-1.md##checktreereadiness)
- [bubble](node_export._internal_.EndpointLifecycle-1.md#bubble)
- [change](node_export._internal_.EndpointLifecycle-1.md#change)
- [emitError](node_export._internal_.EndpointLifecycle-1.md#emiterror)
- [resetting](node_export._internal_.EndpointLifecycle-1.md#resetting)

## Constructors

### constructor

• **new EndpointLifecycle**(`endpoint`): [`EndpointLifecycle`](node_export._internal_.EndpointLifecycle-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

[`EndpointLifecycle`](node_export._internal_.EndpointLifecycle-1.md)

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:114](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L114)

## Properties

### #changed

• `Private` **#changed**: [`Observable`](../interfaces/util_export.Observable.md)\<[type: Change, endpoint: Endpoint\<Empty\>], `void`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L31)

___

### #destroyed

• `Private` **#destroyed**: [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L30)

___

### #endpoint

• `Private` **#endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L21)

___

### #hasId

• `Private` **#hasId**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L25)

___

### #hasNumber

• `Private` **#hasNumber**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L26)

___

### #installed

• `Private` **#installed**: [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L27)

___

### #isInstalled

• `Private` **#isInstalled**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L22)

___

### #isReady

• `Private` **#isReady**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L23)

___

### #isTreeReady

• `Private` **#isTreeReady**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L24)

___

### #queuedUpdates

• `Private` `Optional` **#queuedUpdates**: [`Change`](../enums/node_export._internal_.Change.md)[]

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L35)

___

### #ready

• `Private` **#ready**: [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L28)

___

### #reset

• `Private` **#reset**: [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L34)

___

### #treeReady

• `Private` **#treeReady**: [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L29)

## Accessors

### changed

• `get` **changed**(): [`Observable`](../interfaces/util_export.Observable.md)\<[type: Change, endpoint: Endpoint\<Empty\>], `void`\>

Bubbling event indicating changes to endpoint structure.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[type: Change, endpoint: Endpoint\<Empty\>], `void`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L68)

___

### destroyed

• `get` **destroyed**(): [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

Emitted when the endpoint is destroyed.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L61)

___

### hasId

• `get` **hasId**(): `boolean`

Does the endpoint have an ID?

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:103](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L103)

___

### hasNumber

• `get` **hasNumber**(): `boolean`

Does the endpoint have an endpoint number?

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L110)

___

### installed

• `get` **installed**(): [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

Emitted when an endpoint is installed into an initialized owner.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L40)

___

### isInstalled

• `get` **isInstalled**(): `boolean`

Is the [Endpoint](endpoint_export.Endpoint-1.md) installed in a [Node](node_export.Node-1.md)?

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L82)

___

### isReady

• `get` **isReady**(): `boolean`

Is the [Endpoint](endpoint_export.Endpoint-1.md) fully initialized, excepting children?

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L89)

___

### isTreeReady

• `get` **isTreeReady**(): `boolean`

Is the [Endpoint](endpoint_export.Endpoint-1.md) fully initialized, including children?

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:96](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L96)

___

### ready

• `get` **ready**(): [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

Emitted when an endpoint is fully initialized excepting children.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L47)

___

### reset

• `get` **reset**(): [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[], `void`\>

Emitted on factory reset.

#### Returns

[`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L75)

___

### treeReady

• `get` **treeReady**(): [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

Emitted when an endpoint is fully initialized including children.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L54)

## Methods

### #checkTreeReadiness

▸ **#checkTreeReadiness**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:206](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L206)

___

### bubble

▸ **bubble**(`type`, `endpoint`): `void`

Bubble a lifecycle change event from a child.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Change`](../enums/node_export._internal_.Change.md) |
| `endpoint` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:128](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L128)

___

### change

▸ **change**(`type`): `void`

Inform the Lifecycle of a change in lifecycle.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`Change`](../enums/node_export._internal_.Change.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:139](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L139)

___

### emitError

▸ **emitError**(`name`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `error` | `Error` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:195](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L195)

___

### resetting

▸ **resetting**(): `void`

Revert to uninstalled state.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L202)
