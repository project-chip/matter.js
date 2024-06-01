[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/device](../README.md) / PairedNode

# Class: PairedNode

Class to represents one node that is paired/commissioned with the matter.js Controller. Instances are returned by
the CommissioningController on commissioning or when connecting.

## Constructors

### new PairedNode()

> **new PairedNode**(`nodeId`, `commissioningController`, `options`, `reconnectInteractionClient`, `assignDisconnectedHandler`): [`PairedNode`](PairedNode.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../datatype/README.md#nodeid) |
| `commissioningController` | [`CommissioningController`](../../../export/classes/CommissioningController.md) |
| `options` | [`CommissioningControllerNodeOptions`](../README.md#commissioningcontrollernodeoptions) |
| `reconnectInteractionClient` | () => `Promise`\<[`InteractionClient`](../../interaction/classes/InteractionClient.md)\> |
| `assignDisconnectedHandler` | (`handler`) => `void` |

#### Returns

[`PairedNode`](PairedNode.md)

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:90

## Properties

### commissioningController

> `private` `readonly` **commissioningController**: `any`

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:81

***

### connectionState

> `private` **connectionState**: `any`

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:88

***

### createDevice

> `private` **createDevice**: `any`

Create a device object from the data read from the device.

#### Param

Endpoint ID

#### Param

Data of all clusters read from the device

#### Param

InteractionClient to use for the device

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:138

***

### endpoints

> `private` `readonly` **endpoints**: `any`

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:84

***

### ensureConnection

> `private` **ensureConnection**: `any`

Ensure that the node is connected by creating a new InteractionClient if needed.

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:99

***

### handleNodeShutdown

> `private` **handleNodeShutdown**: `any`

Handles a node shutDown event (if supported by the node and received).

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:124

***

### initialize

> `private` **initialize**: `any`

Initialize the node after the InteractionClient was created and to subscribe attributes and events if requested.

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:103

***

### initializeEndpointStructure

> `private` **initializeEndpointStructure**: `any`

Reads all data from the device and create a device object structure out of it.

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:127

***

### interactionClient?

> `private` `optional` **interactionClient**: `any`

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:85

***

### nodeId

> `readonly` **nodeId**: [`NodeId`](../../datatype/README.md#nodeid)

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:80

***

### options

> `private` `readonly` **options**: `any`

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:82

***

### reconnectDelayTimer

> `private` `readonly` **reconnectDelayTimer**: `any`

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:86

***

### reconnectInteractionClient

> `private` `readonly` **reconnectInteractionClient**: `any`

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:83

***

### setConnectionState

> `private` **setConnectionState**: `any`

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:92

***

### structureEndpoints

> `private` **structureEndpoints**: `any`

Bring the endpoints in a structure based on their partsList attribute.

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:129

***

### updateEndpointStructureTimer

> `private` `readonly` **updateEndpointStructureTimer**: `any`

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:87

## Accessors

### isConnected

> `get` **isConnected**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:91

## Methods

### close()

> **close**(): `void`

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:154

***

### decommission()

> **decommission**(): `Promise`\<`void`\>

De-Commission (unpair) the device from this controller by removing the fabric from the device.

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:145

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:153

***

### getClusterClientForDevice()

> **getClusterClientForDevice**\<`F`, `SF`, `A`, `C`, `E`\>(`endpointId`, `cluster`): `undefined` \| [`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) | EndpointNumber to get the cluster from |
| `cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:180

***

### getClusterServerForDevice()

> **getClusterServerForDevice**\<`F`, `SF`, `A`, `C`, `E`\>(`endpointId`, `cluster`): `undefined` \| [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<`A`, `E`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) | EndpointNumber to get the cluster from |
| `cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<`A`, `E`\>

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:173

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

packages/matter.js/dist/esm/device/PairedNode.d.ts:142

***

### getDevices()

> **getDevices**(): [`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md)[]

Returns the functional devices/endpoints (those below the Root Endpoint) known for this node.

#### Returns

[`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md)[]

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:140

***

### getInteractionClient()

> **getInteractionClient**(): `Promise`\<[`InteractionClient`](../../interaction/classes/InteractionClient.md)\>

Request the current InteractionClient for custom special case interactions with the device. Usually the
ClusterClients of the Devices of the node should be used instead.

#### Returns

`Promise`\<[`InteractionClient`](../../interaction/classes/InteractionClient.md)\>

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:108

***

### getRootClusterClient()

> **getRootClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:166

***

### getRootClusterServer()

> **getRootClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<`A`, `E`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<`A`, `E`\>

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:160

***

### getRootEndpoint()

> **getRootEndpoint**(): `undefined` \| [`Endpoint`](Endpoint.md)

#### Returns

`undefined` \| [`Endpoint`](Endpoint.md)

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:143

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

packages/matter.js/dist/esm/device/PairedNode.d.ts:110

***

### openBasicCommissioningWindow()

> **openBasicCommissioningWindow**(`commissioningTimeout`?): `Promise`\<`void`\>

Opens a Basic Commissioning Window (uses the original Passcode printed on the device) with the device.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `commissioningTimeout`? | `number` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:147

***

### openEnhancedCommissioningWindow()

> **openEnhancedCommissioningWindow**(`commissioningTimeout`?): `Promise`\<`object`\>

Opens an Enhanced Commissioning Window (uses a generated random Passcode) with the device.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `commissioningTimeout`? | `number` |

#### Returns

`Promise`\<`object`\>

##### manualPairingCode

> **manualPairingCode**: `string`

##### qrPairingCode

> **qrPairingCode**: `string`

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:149

***

### reconnect()

> **reconnect**(): `Promise`\<`void`\>

Force a reconnection to the device. This method is mainly used internally to reconnect after the active session
was closed or the device wen offline and was detected as being online again.

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:97

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

> `optional` **attributeReports**: [`DecodedAttributeReportValue`](../../interaction/README.md#decodedattributereportvaluet)\<`any`\>[]

##### eventReports?

> `optional` **eventReports**: [`DecodedEventReportValue`](../../interaction/README.md#decodedeventreportvaluet)\<`any`\>[]

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:115

***

### updateEndpointStructure()

> **updateEndpointStructure**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:125

***

### create()

> `static` **create**(`nodeId`, `commissioningController`, `options`, `reconnectInteractionClient`, `assignDisconnectedHandler`): `Promise`\<[`PairedNode`](PairedNode.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../../datatype/README.md#nodeid) |
| `commissioningController` | [`CommissioningController`](../../../export/classes/CommissioningController.md) |
| `options` | `undefined` \| [`CommissioningControllerNodeOptions`](../README.md#commissioningcontrollernodeoptions) |
| `reconnectInteractionClient` | () => `Promise`\<[`InteractionClient`](../../interaction/classes/InteractionClient.md)\> |
| `assignDisconnectedHandler` | (`handler`) => `void` |

#### Returns

`Promise`\<[`PairedNode`](PairedNode.md)\>

#### Source

packages/matter.js/dist/esm/device/PairedNode.d.ts:89
