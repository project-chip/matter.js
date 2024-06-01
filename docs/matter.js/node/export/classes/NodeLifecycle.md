[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [node/export](../README.md) / NodeLifecycle

# Class: NodeLifecycle

Extended lifecycle information that only applies to root endpoints.

## Extends

- [`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md)

## Constructors

### new NodeLifecycle()

> **new NodeLifecycle**(`endpoint`): [`NodeLifecycle`](NodeLifecycle.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |

#### Returns

[`NodeLifecycle`](NodeLifecycle.md)

#### Overrides

[`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md).[`constructor`](../-internal-/classes/EndpointLifecycle.md#constructors)

#### Source

[packages/matter.js/src/node/NodeLifecycle.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/NodeLifecycle.ts#L25)

## Properties

### #changed

> `private` **#changed**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`Change`](../-internal-/enumerations/Change.md), [`Endpoint`](../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>], `void`\>

#### Inherited from

[`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md).[`#changed`](../-internal-/classes/EndpointLifecycle.md##changed)

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L31)

***

### #commissioned

> `private` **#commissioned**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`ActionContext`](../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md)], `void`\>

#### Source

[packages/matter.js/src/node/NodeLifecycle.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/NodeLifecycle.ts#L18)

***

### #decommissioned

> `private` **#decommissioned**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`ActionContext`](../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md)], `void`\>

#### Source

[packages/matter.js/src/node/NodeLifecycle.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/NodeLifecycle.ts#L19)

***

### #destroyed

> `private` **#destroyed**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Inherited from

[`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md).[`#destroyed`](../-internal-/classes/EndpointLifecycle.md##destroyed)

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L30)

***

### #endpoint

> `private` **#endpoint**: [`Endpoint`](../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>

#### Inherited from

[`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md).[`#endpoint`](../-internal-/classes/EndpointLifecycle.md##endpoint)

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L21)

***

### #hasId

> `private` **#hasId**: `boolean` = `false`

#### Inherited from

[`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md).[`#hasId`](../-internal-/classes/EndpointLifecycle.md##hasid)

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L25)

***

### #hasNumber

> `private` **#hasNumber**: `boolean` = `false`

#### Inherited from

[`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md).[`#hasNumber`](../-internal-/classes/EndpointLifecycle.md##hasnumber)

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L26)

***

### #initialized

> `private` **#initialized**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[`boolean`], `void`\>

#### Source

[packages/matter.js/src/node/NodeLifecycle.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/NodeLifecycle.ts#L20)

***

### #installed

> `private` **#installed**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Inherited from

[`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md).[`#installed`](../-internal-/classes/EndpointLifecycle.md##installed)

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L27)

***

### #isCommissioned

> `private` **#isCommissioned**: `boolean` = `false`

#### Source

[packages/matter.js/src/node/NodeLifecycle.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/NodeLifecycle.ts#L23)

***

### #isInstalled

> `private` **#isInstalled**: `boolean` = `false`

#### Inherited from

[`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md).[`#isInstalled`](../-internal-/classes/EndpointLifecycle.md##isinstalled)

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L22)

***

### #isOnline

> `private` **#isOnline**: `boolean` = `false`

#### Source

[packages/matter.js/src/node/NodeLifecycle.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/NodeLifecycle.ts#L22)

***

### #isReady

> `private` **#isReady**: `boolean` = `false`

#### Inherited from

[`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md).[`#isReady`](../-internal-/classes/EndpointLifecycle.md##isready)

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L23)

***

### #isTreeReady

> `private` **#isTreeReady**: `boolean` = `false`

#### Inherited from

[`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md).[`#isTreeReady`](../-internal-/classes/EndpointLifecycle.md##istreeready)

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L24)

***

### #offline

> `private` **#offline**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`ActionContext`](../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md)], `void`\>

#### Source

[packages/matter.js/src/node/NodeLifecycle.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/NodeLifecycle.ts#L17)

***

### #online

> `private` **#online**: [`AsyncObservable`](../../../util/export/interfaces/AsyncObservable.md)\<[[`ActionContext`](../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md)], `void`\>

#### Source

[packages/matter.js/src/node/NodeLifecycle.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/NodeLifecycle.ts#L16)

***

### #partError

> `private` **#partError**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`Endpoint`](../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>, `Error`], `undefined` \| `boolean`\>

#### Source

[packages/matter.js/src/node/NodeLifecycle.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/NodeLifecycle.ts#L21)

***

### #queuedUpdates?

> `private` `optional` **#queuedUpdates**: [`Change`](../-internal-/enumerations/Change.md)[]

#### Inherited from

[`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md).[`#queuedUpdates`](../-internal-/classes/EndpointLifecycle.md##queuedupdates)

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L35)

***

### #ready

> `private` **#ready**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Inherited from

[`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md).[`#ready`](../-internal-/classes/EndpointLifecycle.md##ready)

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L28)

***

### #reset

> `private` **#reset**: [`AsyncObservable`](../../../util/export/interfaces/AsyncObservable.md)\<[], `void`\>

#### Inherited from

[`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md).[`#reset`](../-internal-/classes/EndpointLifecycle.md##reset)

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L34)

***

### #treeReady

> `private` **#treeReady**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Inherited from

[`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md).[`#treeReady`](../-internal-/classes/EndpointLifecycle.md##treeready)

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L29)

## Accessors

### changed

> `get` **changed**(): [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`Change`](../-internal-/enumerations/Change.md), [`Endpoint`](../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>], `void`\>

Bubbling event indicating changes to endpoint structure.

#### Returns

[`Observable`](../../../util/export/interfaces/Observable.md)\<[[`Change`](../-internal-/enumerations/Change.md), [`Endpoint`](../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L68)

***

### commissioned

> `get` **commissioned**(): [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`ActionContext`](../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md)], `void`\>

Emits when node is first commissioned.

#### Returns

[`Observable`](../../../util/export/interfaces/Observable.md)\<[[`ActionContext`](../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md)], `void`\>

#### Source

[packages/matter.js/src/node/NodeLifecycle.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/NodeLifecycle.ts#L83)

***

### decommissioned

> `get` **decommissioned**(): [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`ActionContext`](../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md)], `void`\>

Emits when node is no longer comissioned.

#### Returns

[`Observable`](../../../util/export/interfaces/Observable.md)\<[[`ActionContext`](../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md)], `void`\>

#### Source

[packages/matter.js/src/node/NodeLifecycle.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/NodeLifecycle.ts#L90)

***

### destroyed

> `get` **destroyed**(): [`Observable`](../../../util/export/interfaces/Observable.md)\<[], `void`\>

Emitted when the endpoint is destroyed.

#### Returns

[`Observable`](../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L61)

***

### endpointError

> `get` **endpointError**(): [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`Endpoint`](../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>, `Error`], `undefined` \| `boolean`\>

Emits for unhandled errors in [Endpoint](../../../endpoint/export/classes/Endpoint.md) initialization.

By default these errors causes node activity to terminate.  This may not be desirable for nodes with many parts
that function independently.  If you install a listener here returning false the node will will treat the
endpoint that crashed as incapacitated but otherwise continue operation.

#### Returns

[`Observable`](../../../util/export/interfaces/Observable.md)\<[[`Endpoint`](../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\>, `Error`], `undefined` \| `boolean`\>

#### Source

[packages/matter.js/src/node/NodeLifecycle.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/NodeLifecycle.ts#L101)

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

### initialized

> `get` **initialized**(): [`Observable`](../../../util/export/interfaces/Observable.md)\<[`boolean`], `void`\>

Emits when the node's endpoint tree is ready/initialized and used to initialize the commissioning state

#### Returns

[`Observable`](../../../util/export/interfaces/Observable.md)\<[`boolean`], `void`\>

#### Source

[packages/matter.js/src/node/NodeLifecycle.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/NodeLifecycle.ts#L62)

***

### installed

> `get` **installed**(): [`Observable`](../../../util/export/interfaces/Observable.md)\<[], `void`\>

Emitted when an endpoint is installed into an initialized owner.

#### Returns

[`Observable`](../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L40)

***

### isCommissioned

> `get` **isCommissioned**(): `boolean`

True when the node is part of at least one fabric.

#### Returns

`boolean`

#### Source

[packages/matter.js/src/node/NodeLifecycle.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/NodeLifecycle.ts#L76)

***

### isInstalled

> `get` **isInstalled**(): `boolean`

Is the [Endpoint](../../../endpoint/export/classes/Endpoint.md) installed in a [Node](Node.md)?

#### Returns

`boolean`

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L82)

***

### isOnline

> `get` **isOnline**(): `boolean`

True when the node is connected to the network.

#### Returns

`boolean`

#### Source

[packages/matter.js/src/node/NodeLifecycle.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/NodeLifecycle.ts#L48)

***

### isReady

> `get` **isReady**(): `boolean`

Is the [Endpoint](../../../endpoint/export/classes/Endpoint.md) fully initialized, excepting children?

#### Returns

`boolean`

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L89)

***

### isTreeReady

> `get` **isTreeReady**(): `boolean`

Is the [Endpoint](../../../endpoint/export/classes/Endpoint.md) fully initialized, including children?

#### Returns

`boolean`

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L96)

***

### offline

> `get` **offline**(): [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`ActionContext`](../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md)], `void`\>

Emits when the node goes offline.

#### Returns

[`Observable`](../../../util/export/interfaces/Observable.md)\<[[`ActionContext`](../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md)], `void`\>

#### Source

[packages/matter.js/src/node/NodeLifecycle.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/NodeLifecycle.ts#L69)

***

### online

> `get` **online**(): [`AsyncObservable`](../../../util/export/interfaces/AsyncObservable.md)\<[[`ActionContext`](../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md)], `void`\>

Emits when the node is first online.

#### Returns

[`AsyncObservable`](../../../util/export/interfaces/AsyncObservable.md)\<[[`ActionContext`](../../../behavior/cluster/export/-internal-/interfaces/ActionContext.md)], `void`\>

#### Source

[packages/matter.js/src/node/NodeLifecycle.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/node/NodeLifecycle.ts#L55)

***

### ready

> `get` **ready**(): [`Observable`](../../../util/export/interfaces/Observable.md)\<[], `void`\>

Emitted when an endpoint is fully initialized excepting children.

#### Returns

[`Observable`](../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L47)

***

### reset

> `get` **reset**(): [`AsyncObservable`](../../../util/export/interfaces/AsyncObservable.md)\<[], `void`\>

Emitted on factory reset.

#### Returns

[`AsyncObservable`](../../../util/export/interfaces/AsyncObservable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L75)

***

### treeReady

> `get` **treeReady**(): [`Observable`](../../../util/export/interfaces/Observable.md)\<[], `void`\>

Emitted when an endpoint is fully initialized including children.

#### Returns

[`Observable`](../../../util/export/interfaces/Observable.md)\<[], `void`\>

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L54)

## Methods

### #checkTreeReadiness()

> `private` **#checkTreeReadiness**(): `void`

#### Returns

`void`

#### Inherited from

[`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md).[`#checkTreeReadiness`](../-internal-/classes/EndpointLifecycle.md##checktreereadiness)

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:206](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L206)

***

### bubble()

> **bubble**(`type`, `endpoint`): `void`

Bubble a lifecycle change event from a child.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Change`](../-internal-/enumerations/Change.md) |
| `endpoint` | [`Endpoint`](../../../endpoint/export/classes/Endpoint.md)\<[`Empty`](../../../behavior/cluster/export/-internal-/interfaces/Empty.md)\> |

#### Returns

`void`

#### Inherited from

[`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md).[`bubble`](../-internal-/classes/EndpointLifecycle.md#bubble)

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:128](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L128)

***

### change()

> **change**(`type`): `void`

Inform the Lifecycle of a change in lifecycle.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Change`](../-internal-/enumerations/Change.md) |

#### Returns

`void`

#### Inherited from

[`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md).[`change`](../-internal-/classes/EndpointLifecycle.md#change)

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

#### Inherited from

[`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md).[`emitError`](../-internal-/classes/EndpointLifecycle.md#emiterror)

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:195](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L195)

***

### resetting()

> **resetting**(): `void`

Revert to uninstalled state.

#### Returns

`void`

#### Inherited from

[`EndpointLifecycle`](../-internal-/classes/EndpointLifecycle.md).[`resetting`](../-internal-/classes/EndpointLifecycle.md#resetting)

#### Source

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:202](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L202)
