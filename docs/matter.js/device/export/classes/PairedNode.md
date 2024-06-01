[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [device/export](../README.md) / PairedNode

# Class: PairedNode

Class to represents one node that is paired/commissioned with the matter.js Controller. Instances are returned by
the CommissioningController on commissioning or when connecting.

## Constructors

### new PairedNode()

> **new PairedNode**(`nodeId`, `commissioningController`, `options`, `reconnectInteractionClient`, `assignDisconnectedHandler`): [`PairedNode`](PairedNode.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `commissioningController` | [`CommissioningController`](../../../export/classes/CommissioningController.md) |
| `options` | [`CommissioningControllerNodeOptions`](../README.md#commissioningcontrollernodeoptions) |
| `reconnectInteractionClient` | () => `Promise`\<[`InteractionClient`](../../../protocol/interaction/export/classes/InteractionClient.md)\> |
| `assignDisconnectedHandler` | (`handler`) => `void` |

#### Returns

[`PairedNode`](PairedNode.md)

#### Source

[packages/matter.js/src/device/PairedNode.ts:166](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L166)

## Properties

### commissioningController

> `private` `readonly` **commissioningController**: [`CommissioningController`](../../../export/classes/CommissioningController.md)

#### Source

[packages/matter.js/src/device/PairedNode.ts:168](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L168)

***

### connectionState

> `private` **connectionState**: [`NodeStateInformation`](../enumerations/NodeStateInformation.md) = `NodeStateInformation.Disconnected`

#### Source

[packages/matter.js/src/device/PairedNode.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L146)

***

### endpoints

> `private` `readonly` **endpoints**: `Map`\<[`EndpointNumber`](../../../datatype/export/README.md#endpointnumber), [`Endpoint`](Endpoint.md)\>

#### Source

[packages/matter.js/src/device/PairedNode.ts:134](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L134)

***

### interactionClient?

> `private` `optional` **interactionClient**: [`InteractionClient`](../../../protocol/interaction/export/classes/InteractionClient.md)

#### Source

[packages/matter.js/src/device/PairedNode.ts:135](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L135)

***

### nodeId

> `readonly` **nodeId**: [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/device/PairedNode.ts:167](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L167)

***

### options

> `private` `readonly` **options**: [`CommissioningControllerNodeOptions`](../README.md#commissioningcontrollernodeoptions) = `{}`

#### Source

[packages/matter.js/src/device/PairedNode.ts:169](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L169)

***

### reconnectDelayTimer

> `private` `readonly` **reconnectDelayTimer**: [`Timer`](../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/device/PairedNode.ts:136](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L136)

***

### reconnectInteractionClient()

> `private` `readonly` **reconnectInteractionClient**: () => `Promise`\<[`InteractionClient`](../../../protocol/interaction/export/classes/InteractionClient.md)\>

#### Returns

`Promise`\<[`InteractionClient`](../../../protocol/interaction/export/classes/InteractionClient.md)\>

#### Source

[packages/matter.js/src/device/PairedNode.ts:170](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L170)

***

### updateEndpointStructureTimer

> `private` `readonly` **updateEndpointStructureTimer**: [`Timer`](../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/device/PairedNode.ts:141](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L141)

## Accessors

### isConnected

> `get` **isConnected**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/device/PairedNode.ts:185](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L185)

## Methods

### close()

> **close**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/device/PairedNode.ts:760](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L760)

***

### createDevice()

> `private` **createDevice**(`endpointId`, `data`, `interactionClient`): [`PairedDevice`](PairedDevice.md) \| [`RootEndpoint`](RootEndpoint.md) \| [`ComposedDevice`](ComposedDevice.md) \| [`Aggregator`](Aggregator.md)

Create a device object from the data read from the device.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber) | Endpoint ID |
| `data` | `object` | Data of all clusters read from the device |
| `interactionClient` | [`InteractionClient`](../../../protocol/interaction/export/classes/InteractionClient.md) | InteractionClient to use for the device |

#### Returns

[`PairedDevice`](PairedDevice.md) \| [`RootEndpoint`](RootEndpoint.md) \| [`ComposedDevice`](ComposedDevice.md) \| [`Aggregator`](Aggregator.md)

#### Source

[packages/matter.js/src/device/PairedNode.ts:523](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L523)

***

### decommission()

> **decommission**(): `Promise`\<`void`\>

De-Commission (unpair) the device from this controller by removing the fabric from the device.

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/device/PairedNode.ts:636](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L636)

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/device/PairedNode.ts:755](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L755)

***

### ensureConnection()

> `private` **ensureConnection**(): `Promise`\<[`InteractionClient`](../../../protocol/interaction/export/classes/InteractionClient.md)\>

Ensure that the node is connected by creating a new InteractionClient if needed.

#### Returns

`Promise`\<[`InteractionClient`](../../../protocol/interaction/export/classes/InteractionClient.md)\>

#### Source

[packages/matter.js/src/device/PairedNode.ts:231](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L231)

***

### getClusterClientForDevice()

> **getClusterClientForDevice**\<`F`, `SF`, `A`, `C`, `E`\>(`endpointId`, `cluster`): `undefined` \| [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber) | EndpointNumber to get the cluster from |
| `cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Source

[packages/matter.js/src/device/PairedNode.ts:817](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L817)

***

### getClusterServerForDevice()

> **getClusterServerForDevice**\<`F`, `SF`, `A`, `C`, `E`\>(`endpointId`, `cluster`): `undefined` \| [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<`A`, `E`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber) | EndpointNumber to get the cluster from |
| `cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<`A`, `E`\>

#### Source

[packages/matter.js/src/device/PairedNode.ts:801](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L801)

***

### getDeviceById()

> **getDeviceById**(`endpointId`): `undefined` \| [`Endpoint`](Endpoint.md)

Returns the device/endpoint with the given endpoint ID.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpointId` | `number` |

#### Returns

`undefined` \| [`Endpoint`](Endpoint.md)

#### Source

[packages/matter.js/src/device/PairedNode.ts:627](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L627)

***

### getDevices()

> **getDevices**(): [`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md)[]

Returns the functional devices/endpoints (those below the Root Endpoint) known for this node.

#### Returns

[`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md)[]

#### Source

[packages/matter.js/src/device/PairedNode.ts:622](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L622)

***

### getInteractionClient()

> **getInteractionClient**(): `Promise`\<[`InteractionClient`](../../../protocol/interaction/export/classes/InteractionClient.md)\>

Request the current InteractionClient for custom special case interactions with the device. Usually the
ClusterClients of the Devices of the node should be used instead.

#### Returns

`Promise`\<[`InteractionClient`](../../../protocol/interaction/export/classes/InteractionClient.md)\>

#### Source

[packages/matter.js/src/device/PairedNode.ts:271](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L271)

***

### getRootClusterClient()

> **getRootClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Source

[packages/matter.js/src/device/PairedNode.ts:785](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L785)

***

### getRootClusterServer()

> **getRootClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<`A`, `E`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<`A`, `E`\>

#### Source

[packages/matter.js/src/device/PairedNode.ts:770](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L770)

***

### getRootEndpoint()

> **getRootEndpoint**(): `undefined` \| [`Endpoint`](Endpoint.md)

#### Returns

`undefined` \| [`Endpoint`](Endpoint.md)

#### Source

[packages/matter.js/src/device/PairedNode.ts:631](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L631)

***

### handleNodeShutdown()

> `private` **handleNodeShutdown**(): `Promise`\<`void`\>

Handles a node shutDown event (if supported by the node and received).

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/device/PairedNode.ts:391](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L391)

***

### initialize()

> `private` **initialize**(): `Promise`\<`void`\>

Initialize the node after the InteractionClient was created and to subscribe attributes and events if requested.

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/device/PairedNode.ts:240](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L240)

***

### initializeEndpointStructure()

> `private` **initializeEndpointStructure**(`allClusterAttributes`, `updateStructure`): `Promise`\<`void`\>

Reads all data from the device and create a device object structure out of it.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `allClusterAttributes` | [`DecodedAttributeReportValue`](../../../protocol/interaction/export/README.md#decodedattributereportvaluet)\<`any`\>[] | `undefined` |
| `updateStructure` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/device/PairedNode.ts:407](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L407)

***

### logStructure()

> **logStructure**(`options`?): `void`

Method to log the structure of this node with all endpoint and clusters.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`EndpointLoggingOptions`](../README.md#endpointloggingoptions) |

#### Returns

`void`

#### Source

[packages/matter.js/src/device/PairedNode.ts:276](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L276)

***

### openBasicCommissioningWindow()

> **openBasicCommissioningWindow**(`commissioningTimeout`): `Promise`\<`void`\>

Opens a Basic Commissioning Window (uses the original Passcode printed on the device) with the device.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `commissioningTimeout` | `number` | `900` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/device/PairedNode.ts:662](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L662)

***

### openEnhancedCommissioningWindow()

> **openEnhancedCommissioningWindow**(`commissioningTimeout`): `Promise`\<`object`\>

Opens an Enhanced Commissioning Window (uses a generated random Passcode) with the device.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `commissioningTimeout` | `number` | `900` |

#### Returns

`Promise`\<`object`\>

##### manualPairingCode

> **manualPairingCode**: `string`

##### qrPairingCode

> **qrPairingCode**: `string`

#### Source

[packages/matter.js/src/device/PairedNode.ts:690](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L690)

***

### reconnect()

> **reconnect**(): `Promise`\<`void`\>

Force a reconnection to the device. This method is mainly used internally to reconnect after the active session
was closed or the device wen offline and was detected as being online again.

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/device/PairedNode.ts:206](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L206)

***

### setConnectionState()

> `private` **setConnectionState**(`state`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `state` | [`NodeStateInformation`](../enumerations/NodeStateInformation.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/device/PairedNode.ts:189](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L189)

***

### structureEndpoints()

> `private` **structureEndpoints**(`partLists`): `void`

Bring the endpoints in a structure based on their partsList attribute.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `partLists` | `Map`\<[`EndpointNumber`](../../../datatype/export/README.md#endpointnumber), [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)[]\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/device/PairedNode.ts:456](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L456)

***

### subscribeAllAttributesAndEvents()

> **subscribeAllAttributesAndEvents**(`options`?): `Promise`\<`object`\>

Subscribe to all attributes and events of the device. Unless setting the Controller property autoSubscribe to
false this is executed automatically. Alternatively you can manually subscribe by calling this method.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | `object` |
| `options.attributeChangedCallback`? | (`data`) => `void` |
| `options.eventTriggeredCallback`? | (`data`) => `void` |
| `options.ignoreInitialTriggers`? | `boolean` |

#### Returns

`Promise`\<`object`\>

##### attributeReports?

> `optional` **attributeReports**: [`DecodedAttributeReportValue`](../../../protocol/interaction/export/README.md#decodedattributereportvaluet)\<`any`\>[]

##### eventReports?

> `optional` **eventReports**: [`DecodedEventReportValue`](../../../protocol/interaction/export/README.md#decodedeventreportvaluet)\<`any`\>[]

#### Source

[packages/matter.js/src/device/PairedNode.ts:289](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L289)

***

### updateEndpointStructure()

> **updateEndpointStructure**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/device/PairedNode.ts:399](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L399)

***

### create()

> `static` **create**(`nodeId`, `commissioningController`, `options`, `reconnectInteractionClient`, `assignDisconnectedHandler`): `Promise`\<[`PairedNode`](PairedNode.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `commissioningController` | [`CommissioningController`](../../../export/classes/CommissioningController.md) |
| `options` | [`CommissioningControllerNodeOptions`](../README.md#commissioningcontrollernodeoptions) |
| `reconnectInteractionClient` | () => `Promise`\<[`InteractionClient`](../../../protocol/interaction/export/classes/InteractionClient.md)\> |
| `assignDisconnectedHandler` | (`handler`) => `void` |

#### Returns

`Promise`\<[`PairedNode`](PairedNode.md)\>

#### Source

[packages/matter.js/src/device/PairedNode.ts:148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L148)
