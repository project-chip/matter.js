[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / NodeLifecycle

# Class: NodeLifecycle

[node/export](../modules/node_export.md).NodeLifecycle

Extended lifecycle information that only applies to root endpoints.

## Hierarchy

- [`EndpointLifecycle`](node_export._internal_.EndpointLifecycle-1.md)

  ↳ **`NodeLifecycle`**

## Table of contents

### Constructors

- [constructor](node_export.NodeLifecycle.md#constructor)

### Properties

- [#changed](node_export.NodeLifecycle.md##changed)
- [#commissioned](node_export.NodeLifecycle.md##commissioned)
- [#decommissioned](node_export.NodeLifecycle.md##decommissioned)
- [#destroyed](node_export.NodeLifecycle.md##destroyed)
- [#endpoint](node_export.NodeLifecycle.md##endpoint)
- [#hasId](node_export.NodeLifecycle.md##hasid)
- [#hasNumber](node_export.NodeLifecycle.md##hasnumber)
- [#initialized](node_export.NodeLifecycle.md##initialized)
- [#installed](node_export.NodeLifecycle.md##installed)
- [#isCommissioned](node_export.NodeLifecycle.md##iscommissioned)
- [#isInstalled](node_export.NodeLifecycle.md##isinstalled)
- [#isOnline](node_export.NodeLifecycle.md##isonline)
- [#isReady](node_export.NodeLifecycle.md##isready)
- [#isTreeReady](node_export.NodeLifecycle.md##istreeready)
- [#offline](node_export.NodeLifecycle.md##offline)
- [#online](node_export.NodeLifecycle.md##online)
- [#partError](node_export.NodeLifecycle.md##parterror)
- [#queuedUpdates](node_export.NodeLifecycle.md##queuedupdates)
- [#ready](node_export.NodeLifecycle.md##ready)
- [#reset](node_export.NodeLifecycle.md##reset)
- [#treeReady](node_export.NodeLifecycle.md##treeready)

### Accessors

- [changed](node_export.NodeLifecycle.md#changed)
- [commissioned](node_export.NodeLifecycle.md#commissioned)
- [decommissioned](node_export.NodeLifecycle.md#decommissioned)
- [destroyed](node_export.NodeLifecycle.md#destroyed)
- [endpointError](node_export.NodeLifecycle.md#endpointerror)
- [hasId](node_export.NodeLifecycle.md#hasid)
- [hasNumber](node_export.NodeLifecycle.md#hasnumber)
- [initialized](node_export.NodeLifecycle.md#initialized)
- [installed](node_export.NodeLifecycle.md#installed)
- [isCommissioned](node_export.NodeLifecycle.md#iscommissioned)
- [isInstalled](node_export.NodeLifecycle.md#isinstalled)
- [isOnline](node_export.NodeLifecycle.md#isonline)
- [isReady](node_export.NodeLifecycle.md#isready)
- [isTreeReady](node_export.NodeLifecycle.md#istreeready)
- [offline](node_export.NodeLifecycle.md#offline)
- [online](node_export.NodeLifecycle.md#online)
- [ready](node_export.NodeLifecycle.md#ready)
- [reset](node_export.NodeLifecycle.md#reset)
- [treeReady](node_export.NodeLifecycle.md#treeready)

### Methods

- [#checkTreeReadiness](node_export.NodeLifecycle.md##checktreereadiness)
- [bubble](node_export.NodeLifecycle.md#bubble)
- [change](node_export.NodeLifecycle.md#change)
- [emitError](node_export.NodeLifecycle.md#emiterror)
- [resetting](node_export.NodeLifecycle.md#resetting)

## Constructors

### constructor

• **new NodeLifecycle**(`endpoint`): [`NodeLifecycle`](node_export.NodeLifecycle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\> |

#### Returns

[`NodeLifecycle`](node_export.NodeLifecycle.md)

#### Overrides

[EndpointLifecycle](node_export._internal_.EndpointLifecycle-1.md).[constructor](node_export._internal_.EndpointLifecycle-1.md#constructor)

#### Defined in

[packages/matter.js/src/node/NodeLifecycle.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/NodeLifecycle.ts#L25)

## Properties

### #changed

• `Private` **#changed**: [`Observable`](../interfaces/util_export.Observable.md)\<[type: Change, endpoint: Endpoint\<Empty\>], `void`\>

#### Inherited from

[EndpointLifecycle](node_export._internal_.EndpointLifecycle-1.md).[#changed](node_export._internal_.EndpointLifecycle-1.md##changed)

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L31)

___

### #commissioned

• `Private` **#commissioned**: [`Observable`](../interfaces/util_export.Observable.md)\<[context: ActionContext], `void`\>

#### Defined in

[packages/matter.js/src/node/NodeLifecycle.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/NodeLifecycle.ts#L18)

___

### #decommissioned

• `Private` **#decommissioned**: [`Observable`](../interfaces/util_export.Observable.md)\<[context: ActionContext], `void`\>

#### Defined in

[packages/matter.js/src/node/NodeLifecycle.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/NodeLifecycle.ts#L19)

___

### #destroyed

• `Private` **#destroyed**: [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Inherited from

[EndpointLifecycle](node_export._internal_.EndpointLifecycle-1.md).[#destroyed](node_export._internal_.EndpointLifecycle-1.md##destroyed)

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L30)

___

### #endpoint

• `Private` **#endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

[EndpointLifecycle](node_export._internal_.EndpointLifecycle-1.md).[#endpoint](node_export._internal_.EndpointLifecycle-1.md##endpoint)

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L21)

___

### #hasId

• `Private` **#hasId**: `boolean` = `false`

#### Inherited from

[EndpointLifecycle](node_export._internal_.EndpointLifecycle-1.md).[#hasId](node_export._internal_.EndpointLifecycle-1.md##hasid)

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L25)

___

### #hasNumber

• `Private` **#hasNumber**: `boolean` = `false`

#### Inherited from

[EndpointLifecycle](node_export._internal_.EndpointLifecycle-1.md).[#hasNumber](node_export._internal_.EndpointLifecycle-1.md##hasnumber)

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L26)

___

### #initialized

• `Private` **#initialized**: [`Observable`](../interfaces/util_export.Observable.md)\<[isCommissioned: boolean], `void`\>

#### Defined in

[packages/matter.js/src/node/NodeLifecycle.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/NodeLifecycle.ts#L20)

___

### #installed

• `Private` **#installed**: [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Inherited from

[EndpointLifecycle](node_export._internal_.EndpointLifecycle-1.md).[#installed](node_export._internal_.EndpointLifecycle-1.md##installed)

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L27)

___

### #isCommissioned

• `Private` **#isCommissioned**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/node/NodeLifecycle.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/NodeLifecycle.ts#L23)

___

### #isInstalled

• `Private` **#isInstalled**: `boolean` = `false`

#### Inherited from

[EndpointLifecycle](node_export._internal_.EndpointLifecycle-1.md).[#isInstalled](node_export._internal_.EndpointLifecycle-1.md##isinstalled)

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L22)

___

### #isOnline

• `Private` **#isOnline**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/node/NodeLifecycle.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/NodeLifecycle.ts#L22)

___

### #isReady

• `Private` **#isReady**: `boolean` = `false`

#### Inherited from

[EndpointLifecycle](node_export._internal_.EndpointLifecycle-1.md).[#isReady](node_export._internal_.EndpointLifecycle-1.md##isready)

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L23)

___

### #isTreeReady

• `Private` **#isTreeReady**: `boolean` = `false`

#### Inherited from

[EndpointLifecycle](node_export._internal_.EndpointLifecycle-1.md).[#isTreeReady](node_export._internal_.EndpointLifecycle-1.md##istreeready)

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L24)

___

### #offline

• `Private` **#offline**: [`Observable`](../interfaces/util_export.Observable.md)\<[Context: ActionContext], `void`\>

#### Defined in

[packages/matter.js/src/node/NodeLifecycle.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/NodeLifecycle.ts#L17)

___

### #online

• `Private` **#online**: [`Observable`](../interfaces/util_export.Observable.md)\<[context: ActionContext], `void`\>

#### Defined in

[packages/matter.js/src/node/NodeLifecycle.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/NodeLifecycle.ts#L16)

___

### #partError

• `Private` **#partError**: [`Observable`](../interfaces/util_export.Observable.md)\<[endpoint: Endpoint\<Empty\>, error: Error], `undefined` \| `boolean`\>

#### Defined in

[packages/matter.js/src/node/NodeLifecycle.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/NodeLifecycle.ts#L21)

___

### #queuedUpdates

• `Private` `Optional` **#queuedUpdates**: [`Change`](../enums/node_export._internal_.Change.md)[]

#### Inherited from

[EndpointLifecycle](node_export._internal_.EndpointLifecycle-1.md).[#queuedUpdates](node_export._internal_.EndpointLifecycle-1.md##queuedupdates)

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L35)

___

### #ready

• `Private` **#ready**: [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Inherited from

[EndpointLifecycle](node_export._internal_.EndpointLifecycle-1.md).[#ready](node_export._internal_.EndpointLifecycle-1.md##ready)

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L28)

___

### #reset

• `Private` **#reset**: [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[], `void`\>

#### Inherited from

[EndpointLifecycle](node_export._internal_.EndpointLifecycle-1.md).[#reset](node_export._internal_.EndpointLifecycle-1.md##reset)

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L34)

___

### #treeReady

• `Private` **#treeReady**: [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Inherited from

[EndpointLifecycle](node_export._internal_.EndpointLifecycle-1.md).[#treeReady](node_export._internal_.EndpointLifecycle-1.md##treeready)

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L29)

## Accessors

### changed

• `get` **changed**(): [`Observable`](../interfaces/util_export.Observable.md)\<[type: Change, endpoint: Endpoint\<Empty\>], `void`\>

Bubbling event indicating changes to endpoint structure.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[type: Change, endpoint: Endpoint\<Empty\>], `void`\>

#### Inherited from

EndpointLifecycle.changed

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L68)

___

### commissioned

• `get` **commissioned**(): [`Observable`](../interfaces/util_export.Observable.md)\<[context: ActionContext], `void`\>

Emits when node is first commissioned.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[context: ActionContext], `void`\>

#### Defined in

[packages/matter.js/src/node/NodeLifecycle.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/NodeLifecycle.ts#L83)

___

### decommissioned

• `get` **decommissioned**(): [`Observable`](../interfaces/util_export.Observable.md)\<[context: ActionContext], `void`\>

Emits when node is no longer comissioned.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[context: ActionContext], `void`\>

#### Defined in

[packages/matter.js/src/node/NodeLifecycle.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/NodeLifecycle.ts#L90)

___

### destroyed

• `get` **destroyed**(): [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

Emitted when the endpoint is destroyed.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Inherited from

EndpointLifecycle.destroyed

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L61)

___

### endpointError

• `get` **endpointError**(): [`Observable`](../interfaces/util_export.Observable.md)\<[endpoint: Endpoint\<Empty\>, error: Error], `undefined` \| `boolean`\>

Emits for unhandled errors in [Endpoint](endpoint_export.Endpoint-1.md) initialization.

By default these errors causes node activity to terminate.  This may not be desirable for nodes with many parts
that function independently.  If you install a listener here returning false the node will will treat the
endpoint that crashed as incapacitated but otherwise continue operation.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[endpoint: Endpoint\<Empty\>, error: Error], `undefined` \| `boolean`\>

#### Defined in

[packages/matter.js/src/node/NodeLifecycle.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/NodeLifecycle.ts#L101)

___

### hasId

• `get` **hasId**(): `boolean`

Does the endpoint have an ID?

#### Returns

`boolean`

#### Inherited from

EndpointLifecycle.hasId

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:103](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L103)

___

### hasNumber

• `get` **hasNumber**(): `boolean`

Does the endpoint have an endpoint number?

#### Returns

`boolean`

#### Inherited from

EndpointLifecycle.hasNumber

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L110)

___

### initialized

• `get` **initialized**(): [`Observable`](../interfaces/util_export.Observable.md)\<[isCommissioned: boolean], `void`\>

Emits when the node's endpoint tree is ready/initialized and used to initialize the commissioning state

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[isCommissioned: boolean], `void`\>

#### Defined in

[packages/matter.js/src/node/NodeLifecycle.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/NodeLifecycle.ts#L62)

___

### installed

• `get` **installed**(): [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

Emitted when an endpoint is installed into an initialized owner.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Inherited from

EndpointLifecycle.installed

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L40)

___

### isCommissioned

• `get` **isCommissioned**(): `boolean`

True when the node is part of at least one fabric.

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/node/NodeLifecycle.ts:76](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/NodeLifecycle.ts#L76)

___

### isInstalled

• `get` **isInstalled**(): `boolean`

Is the [Endpoint](endpoint_export.Endpoint-1.md) installed in a [Node](node_export.Node-1.md)?

#### Returns

`boolean`

#### Inherited from

EndpointLifecycle.isInstalled

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L82)

___

### isOnline

• `get` **isOnline**(): `boolean`

True when the node is connected to the network.

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/node/NodeLifecycle.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/NodeLifecycle.ts#L48)

___

### isReady

• `get` **isReady**(): `boolean`

Is the [Endpoint](endpoint_export.Endpoint-1.md) fully initialized, excepting children?

#### Returns

`boolean`

#### Inherited from

EndpointLifecycle.isReady

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L89)

___

### isTreeReady

• `get` **isTreeReady**(): `boolean`

Is the [Endpoint](endpoint_export.Endpoint-1.md) fully initialized, including children?

#### Returns

`boolean`

#### Inherited from

EndpointLifecycle.isTreeReady

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:96](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L96)

___

### offline

• `get` **offline**(): [`Observable`](../interfaces/util_export.Observable.md)\<[Context: ActionContext], `void`\>

Emits when the node goes offline.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[Context: ActionContext], `void`\>

#### Defined in

[packages/matter.js/src/node/NodeLifecycle.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/NodeLifecycle.ts#L69)

___

### online

• `get` **online**(): [`Observable`](../interfaces/util_export.Observable.md)\<[context: ActionContext], `void`\>

Emits when the node is first online.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[context: ActionContext], `void`\>

#### Defined in

[packages/matter.js/src/node/NodeLifecycle.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/node/NodeLifecycle.ts#L55)

___

### ready

• `get` **ready**(): [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

Emitted when an endpoint is fully initialized excepting children.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Inherited from

EndpointLifecycle.ready

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L47)

___

### reset

• `get` **reset**(): [`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[], `void`\>

Emitted on factory reset.

#### Returns

[`AsyncObservable`](../interfaces/util_export.AsyncObservable.md)\<[], `void`\>

#### Inherited from

EndpointLifecycle.reset

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L75)

___

### treeReady

• `get` **treeReady**(): [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

Emitted when an endpoint is fully initialized including children.

#### Returns

[`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\>

#### Inherited from

EndpointLifecycle.treeReady

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L54)

## Methods

### #checkTreeReadiness

▸ **#checkTreeReadiness**(): `void`

#### Returns

`void`

#### Inherited from

[EndpointLifecycle](node_export._internal_.EndpointLifecycle-1.md).[#checkTreeReadiness](node_export._internal_.EndpointLifecycle-1.md##checktreereadiness)

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

#### Inherited from

[EndpointLifecycle](node_export._internal_.EndpointLifecycle-1.md).[bubble](node_export._internal_.EndpointLifecycle-1.md#bubble)

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

#### Inherited from

[EndpointLifecycle](node_export._internal_.EndpointLifecycle-1.md).[change](node_export._internal_.EndpointLifecycle-1.md#change)

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

#### Inherited from

[EndpointLifecycle](node_export._internal_.EndpointLifecycle-1.md).[emitError](node_export._internal_.EndpointLifecycle-1.md#emiterror)

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:195](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L195)

___

### resetting

▸ **resetting**(): `void`

Revert to uninstalled state.

#### Returns

`void`

#### Inherited from

[EndpointLifecycle](node_export._internal_.EndpointLifecycle-1.md).[resetting](node_export._internal_.EndpointLifecycle-1.md#resetting)

#### Defined in

[packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/properties/EndpointLifecycle.ts#L202)
