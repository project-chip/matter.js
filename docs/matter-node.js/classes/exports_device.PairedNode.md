[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/device](../modules/exports_device.md) / PairedNode

# Class: PairedNode

[exports/device](../modules/exports_device.md).PairedNode

Class to represents one node that is paired/commissioned with the matter.js Controller. Instances are returned by
the CommissioningController on commissioning or when connecting.

## Table of contents

### Constructors

- [constructor](exports_device.PairedNode.md#constructor)

### Properties

- [commissioningController](exports_device.PairedNode.md#commissioningcontroller)
- [connectionState](exports_device.PairedNode.md#connectionstate)
- [createDevice](exports_device.PairedNode.md#createdevice)
- [endpoints](exports_device.PairedNode.md#endpoints)
- [ensureConnection](exports_device.PairedNode.md#ensureconnection)
- [handleNodeShutdown](exports_device.PairedNode.md#handlenodeshutdown)
- [initialize](exports_device.PairedNode.md#initialize)
- [initializeEndpointStructure](exports_device.PairedNode.md#initializeendpointstructure)
- [interactionClient](exports_device.PairedNode.md#interactionclient)
- [nodeId](exports_device.PairedNode.md#nodeid)
- [options](exports_device.PairedNode.md#options)
- [reconnectDelayTimer](exports_device.PairedNode.md#reconnectdelaytimer)
- [reconnectInteractionClient](exports_device.PairedNode.md#reconnectinteractionclient)
- [setConnectionState](exports_device.PairedNode.md#setconnectionstate)
- [structureEndpoints](exports_device.PairedNode.md#structureendpoints)
- [updateEndpointStructureTimer](exports_device.PairedNode.md#updateendpointstructuretimer)

### Accessors

- [isConnected](exports_device.PairedNode.md#isconnected)

### Methods

- [close](exports_device.PairedNode.md#close)
- [decommission](exports_device.PairedNode.md#decommission)
- [disconnect](exports_device.PairedNode.md#disconnect)
- [getClusterClientForDevice](exports_device.PairedNode.md#getclusterclientfordevice)
- [getClusterServerForDevice](exports_device.PairedNode.md#getclusterserverfordevice)
- [getDeviceById](exports_device.PairedNode.md#getdevicebyid)
- [getDevices](exports_device.PairedNode.md#getdevices)
- [getInteractionClient](exports_device.PairedNode.md#getinteractionclient)
- [getRootClusterClient](exports_device.PairedNode.md#getrootclusterclient)
- [getRootClusterServer](exports_device.PairedNode.md#getrootclusterserver)
- [getRootEndpoint](exports_device.PairedNode.md#getrootendpoint)
- [logStructure](exports_device.PairedNode.md#logstructure)
- [openBasicCommissioningWindow](exports_device.PairedNode.md#openbasiccommissioningwindow)
- [openEnhancedCommissioningWindow](exports_device.PairedNode.md#openenhancedcommissioningwindow)
- [reconnect](exports_device.PairedNode.md#reconnect)
- [subscribeAllAttributesAndEvents](exports_device.PairedNode.md#subscribeallattributesandevents)
- [updateEndpointStructure](exports_device.PairedNode.md#updateendpointstructure)
- [create](exports_device.PairedNode.md#create)

## Constructors

### constructor

• **new PairedNode**(`nodeId`, `commissioningController`, `options`, `reconnectInteractionClient`, `assignDisconnectedHandler`): [`PairedNode`](exports_device.PairedNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `commissioningController` | [`CommissioningController`](export.CommissioningController.md) |
| `options` | [`CommissioningControllerNodeOptions`](../modules/exports_device.md#commissioningcontrollernodeoptions) |
| `reconnectInteractionClient` | () => `Promise`\<[`InteractionClient`](exports_interaction.InteractionClient.md)\> |
| `assignDisconnectedHandler` | (`handler`: () => `Promise`\<`void`\>) => `void` |

#### Returns

[`PairedNode`](exports_device.PairedNode.md)

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:90

## Properties

### commissioningController

• `Private` `Readonly` **commissioningController**: `any`

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:81

___

### connectionState

• `Private` **connectionState**: `any`

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:88

___

### createDevice

• `Private` **createDevice**: `any`

Create a device object from the data read from the device.

**`Param`**

Endpoint ID

**`Param`**

Data of all clusters read from the device

**`Param`**

InteractionClient to use for the device

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:138

___

### endpoints

• `Private` `Readonly` **endpoints**: `any`

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:84

___

### ensureConnection

• `Private` **ensureConnection**: `any`

Ensure that the node is connected by creating a new InteractionClient if needed.

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:99

___

### handleNodeShutdown

• `Private` **handleNodeShutdown**: `any`

Handles a node shutDown event (if supported by the node and received).

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:124

___

### initialize

• `Private` **initialize**: `any`

Initialize the node after the InteractionClient was created and to subscribe attributes and events if requested.

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:103

___

### initializeEndpointStructure

• `Private` **initializeEndpointStructure**: `any`

Reads all data from the device and create a device object structure out of it.

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:127

___

### interactionClient

• `Private` `Optional` **interactionClient**: `any`

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:85

___

### nodeId

• `Readonly` **nodeId**: [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:80

___

### options

• `Private` `Readonly` **options**: `any`

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:82

___

### reconnectDelayTimer

• `Private` `Readonly` **reconnectDelayTimer**: `any`

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:86

___

### reconnectInteractionClient

• `Private` `Readonly` **reconnectInteractionClient**: `any`

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:83

___

### setConnectionState

• `Private` **setConnectionState**: `any`

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:92

___

### structureEndpoints

• `Private` **structureEndpoints**: `any`

Bring the endpoints in a structure based on their partsList attribute.

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:129

___

### updateEndpointStructureTimer

• `Private` `Readonly` **updateEndpointStructureTimer**: `any`

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:87

## Accessors

### isConnected

• `get` **isConnected**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:91

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:154

___

### decommission

▸ **decommission**(): `Promise`\<`void`\>

De-Commission (unpair) the device from this controller by removing the fabric from the device.

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:145

___

### disconnect

▸ **disconnect**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:153

___

### getClusterClientForDevice

▸ **getClusterClientForDevice**\<`F`, `SF`, `A`, `C`, `E`\>(`endpointId`, `cluster`): `undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) | EndpointNumber to get the cluster from |
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:180

___

### getClusterServerForDevice

▸ **getClusterServerForDevice**\<`F`, `SF`, `A`, `C`, `E`\>(`endpointId`, `cluster`): `undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`A`, `E`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) | EndpointNumber to get the cluster from |
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`A`, `E`\>

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:173

___

### getDeviceById

▸ **getDeviceById**(`endpointId`): `undefined` \| [`Endpoint`](exports_device.Endpoint.md)

Returns the device/endpoint with the given endpoint ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | `number` |

#### Returns

`undefined` \| [`Endpoint`](exports_device.Endpoint.md)

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:142

___

### getDevices

▸ **getDevices**(): [`EndpointInterface`](../interfaces/exports_cluster._internal_.EndpointInterface.md)[]

Returns the functional devices/endpoints (those below the Root Endpoint) known for this node.

#### Returns

[`EndpointInterface`](../interfaces/exports_cluster._internal_.EndpointInterface.md)[]

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:140

___

### getInteractionClient

▸ **getInteractionClient**(): `Promise`\<[`InteractionClient`](exports_interaction.InteractionClient.md)\>

Request the current InteractionClient for custom special case interactions with the device. Usually the
ClusterClients of the Devices of the node should be used instead.

#### Returns

`Promise`\<[`InteractionClient`](exports_interaction.InteractionClient.md)\>

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:108

___

### getRootClusterClient

▸ **getRootClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:166

___

### getRootClusterServer

▸ **getRootClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`A`, `E`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`A`, `E`\>

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:160

___

### getRootEndpoint

▸ **getRootEndpoint**(): `undefined` \| [`Endpoint`](exports_device.Endpoint.md)

#### Returns

`undefined` \| [`Endpoint`](exports_device.Endpoint.md)

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:143

___

### logStructure

▸ **logStructure**(`options?`): `void`

Method to log the structure of this node with all endpoint and clusters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`EndpointLoggingOptions`](../modules/exports_device.md#endpointloggingoptions) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:110

___

### openBasicCommissioningWindow

▸ **openBasicCommissioningWindow**(`commissioningTimeout?`): `Promise`\<`void`\>

Opens a Basic Commissioning Window (uses the original Passcode printed on the device) with the device.

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissioningTimeout?` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:147

___

### openEnhancedCommissioningWindow

▸ **openEnhancedCommissioningWindow**(`commissioningTimeout?`): `Promise`\<\{ `manualPairingCode`: `string` ; `qrPairingCode`: `string`  }\>

Opens an Enhanced Commissioning Window (uses a generated random Passcode) with the device.

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissioningTimeout?` | `number` |

#### Returns

`Promise`\<\{ `manualPairingCode`: `string` ; `qrPairingCode`: `string`  }\>

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:149

___

### reconnect

▸ **reconnect**(): `Promise`\<`void`\>

Force a reconnection to the device. This method is mainly used internally to reconnect after the active session
was closed or the device wen offline and was detected as being online again.

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:97

___

### subscribeAllAttributesAndEvents

▸ **subscribeAllAttributesAndEvents**(`options?`): `Promise`\<\{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/exports_interaction.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)\<`any`\>[]  }\>

Subscribe to all attributes and events of the device. Unless setting the Controller property autoSubscribe to
false this is executed automatically. Alternatively you can manually subscribe by calling this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.attributeChangedCallback?` | (`data`: [`DecodedAttributeReportValue`](../modules/exports_interaction.md#decodedattributereportvalue)\<`any`\>) => `void` |
| `options.eventTriggeredCallback?` | (`data`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)\<`any`\>) => `void` |
| `options.ignoreInitialTriggers?` | `boolean` |

#### Returns

`Promise`\<\{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/exports_interaction.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:115

___

### updateEndpointStructure

▸ **updateEndpointStructure**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:125

___

### create

▸ **create**(`nodeId`, `commissioningController`, `options`, `reconnectInteractionClient`, `assignDisconnectedHandler`): `Promise`\<[`PairedNode`](exports_device.PairedNode.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `commissioningController` | [`CommissioningController`](export.CommissioningController.md) |
| `options` | `undefined` \| [`CommissioningControllerNodeOptions`](../modules/exports_device.md#commissioningcontrollernodeoptions) |
| `reconnectInteractionClient` | () => `Promise`\<[`InteractionClient`](exports_interaction.InteractionClient.md)\> |
| `assignDisconnectedHandler` | (`handler`: () => `Promise`\<`void`\>) => `void` |

#### Returns

`Promise`\<[`PairedNode`](exports_device.PairedNode.md)\>

#### Defined in

packages/matter.js/dist/esm/device/PairedNode.d.ts:89
