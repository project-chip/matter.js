[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [node/export](../../README.md) / [\<internal\>](../README.md) / EndpointLifecycle

# Class: EndpointLifecycle

State related to a [Endpoint](../../../../endpoint/export/classes/Endpoint.md)'s lifecycle.

## Extended by

- [`NodeLifecycle`](../../classes/NodeLifecycle.md)

## Constructors

### new EndpointLifecycle()

> **new EndpointLifecycle**(`endpoint`): [`EndpointLifecycle`](EndpointLifecycle.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |

#### Returns

[`EndpointLifecycle`](EndpointLifecycle.md)

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:114](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L114)

## Properties

### #changed

> `private` **#changed**: [`Observable`](../../../../util/export/interfaces/Observable.md)\<[[`Change`](../enumerations/Change.md), [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L31)

***

### #destroyed

> `private` **#destroyed**: [`Observable`](../../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L30)

***

### #endpoint

> `private` **#endpoint**: [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L21)

***

### #hasId

> `private` **#hasId**: `boolean` = `false`

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L25)

***

### #hasNumber

> `private` **#hasNumber**: `boolean` = `false`

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L26)

***

### #installed

> `private` **#installed**: [`Observable`](../../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L27)

***

### #isInstalled

> `private` **#isInstalled**: `boolean` = `false`

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L22)

***

### #isReady

> `private` **#isReady**: `boolean` = `false`

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L23)

***

### #isTreeReady

> `private` **#isTreeReady**: `boolean` = `false`

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L24)

***

### #queuedUpdates?

> `private` `optional` **#queuedUpdates**: [`Change`](../enumerations/Change.md)[]

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L35)

***

### #ready

> `private` **#ready**: [`Observable`](../../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L28)

***

### #reset

> `private` **#reset**: [`AsyncObservable`](../../../../util/export/interfaces/AsyncObservable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L34)

***

### #treeReady

> `private` **#treeReady**: [`Observable`](../../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L29)

## Accessors

### changed

> `get` **changed**(): [`Observable`](../../../../util/export/interfaces/Observable.md)\<[[`Change`](../enumerations/Change.md), [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>], `void`\>

Bubbling event indicating changes to endpoint structure.

#### Returns

[`Observable`](../../../../util/export/interfaces/Observable.md)\<[[`Change`](../enumerations/Change.md), [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L68)

***

### destroyed

> `get` **destroyed**(): [`Observable`](../../../../util/export/interfaces/Observable.md)\<[], `void`\>

Emitted when the endpoint is destroyed.

#### Returns

[`Observable`](../../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L61)

***

### hasId

> `get` **hasId**(): `boolean`

Does the endpoint have an ID?

#### Returns

`boolean`

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:103](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L103)

***

### hasNumber

> `get` **hasNumber**(): `boolean`

Does the endpoint have an endpoint number?

#### Returns

`boolean`

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:110](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L110)

***

### installed

> `get` **installed**(): [`Observable`](../../../../util/export/interfaces/Observable.md)\<[], `void`\>

Emitted when an endpoint is installed into an initialized owner.

#### Returns

[`Observable`](../../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L40)

***

### isInstalled

> `get` **isInstalled**(): `boolean`

Is the [Endpoint](../../../../endpoint/export/classes/Endpoint.md) installed in a [Node](../../classes/Node.md)?

#### Returns

`boolean`

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L82)

***

### isReady

> `get` **isReady**(): `boolean`

Is the [Endpoint](../../../../endpoint/export/classes/Endpoint.md) fully initialized, excepting children?

#### Returns

`boolean`

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L89)

***

### isTreeReady

> `get` **isTreeReady**(): `boolean`

Is the [Endpoint](../../../../endpoint/export/classes/Endpoint.md) fully initialized, including children?

#### Returns

`boolean`

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L96)

***

### ready

> `get` **ready**(): [`Observable`](../../../../util/export/interfaces/Observable.md)\<[], `void`\>

Emitted when an endpoint is fully initialized excepting children.

#### Returns

[`Observable`](../../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L47)

***

### reset

> `get` **reset**(): [`AsyncObservable`](../../../../util/export/interfaces/AsyncObservable.md)\<[], `void`\>

Emitted on factory reset.

#### Returns

[`AsyncObservable`](../../../../util/export/interfaces/AsyncObservable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L75)

***

### treeReady

> `get` **treeReady**(): [`Observable`](../../../../util/export/interfaces/Observable.md)\<[], `void`\>

Emitted when an endpoint is fully initialized including children.

#### Returns

[`Observable`](../../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L54)

## Methods

### #checkTreeReadiness()

> `private` **#checkTreeReadiness**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:206](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L206)

***

### bubble()

> **bubble**(`type`, `endpoint`): `void`

Bubble a lifecycle change event from a child.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Change`](../enumerations/Change.md) |
| `endpoint` | [`Endpoint`](../../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:128](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L128)

***

### change()

> **change**(`type`): `void`

Inform the Lifecycle of a change in lifecycle.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Change`](../enumerations/Change.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:139](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L139)

***

### emitError()

> `protected` **emitError**(`name`, `error`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `error` | `Error` |

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:195](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L195)

***

### resetting()

> **resetting**(): `void`

Revert to uninstalled state.

#### Returns

`void`

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:202](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L202)
