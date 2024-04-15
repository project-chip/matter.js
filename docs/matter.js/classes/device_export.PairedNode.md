[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device/export](../modules/device_export.md) / PairedNode

# Class: PairedNode

[device/export](../modules/device_export.md).PairedNode

Class to represents one node that is paired/commissioned with the matter.js Controller. Instances are returned by
the CommissioningController on commissioning or when connecting.

## Table of contents

### Constructors

- [constructor](device_export.PairedNode.md#constructor)

### Properties

- [commissioningController](device_export.PairedNode.md#commissioningcontroller)
- [connectionState](device_export.PairedNode.md#connectionstate)
- [endpoints](device_export.PairedNode.md#endpoints)
- [interactionClient](device_export.PairedNode.md#interactionclient)
- [nodeId](device_export.PairedNode.md#nodeid)
- [options](device_export.PairedNode.md#options)
- [reconnectDelayTimer](device_export.PairedNode.md#reconnectdelaytimer)
- [reconnectInteractionClient](device_export.PairedNode.md#reconnectinteractionclient)
- [updateEndpointStructureTimer](device_export.PairedNode.md#updateendpointstructuretimer)

### Accessors

- [isConnected](device_export.PairedNode.md#isconnected)

### Methods

- [close](device_export.PairedNode.md#close)
- [createDevice](device_export.PairedNode.md#createdevice)
- [decommission](device_export.PairedNode.md#decommission)
- [disconnect](device_export.PairedNode.md#disconnect)
- [ensureConnection](device_export.PairedNode.md#ensureconnection)
- [getClusterClientForDevice](device_export.PairedNode.md#getclusterclientfordevice)
- [getClusterServerForDevice](device_export.PairedNode.md#getclusterserverfordevice)
- [getDeviceById](device_export.PairedNode.md#getdevicebyid)
- [getDevices](device_export.PairedNode.md#getdevices)
- [getInteractionClient](device_export.PairedNode.md#getinteractionclient)
- [getRootClusterClient](device_export.PairedNode.md#getrootclusterclient)
- [getRootClusterServer](device_export.PairedNode.md#getrootclusterserver)
- [getRootEndpoint](device_export.PairedNode.md#getrootendpoint)
- [handleNodeShutdown](device_export.PairedNode.md#handlenodeshutdown)
- [initialize](device_export.PairedNode.md#initialize)
- [initializeEndpointStructure](device_export.PairedNode.md#initializeendpointstructure)
- [logStructure](device_export.PairedNode.md#logstructure)
- [openBasicCommissioningWindow](device_export.PairedNode.md#openbasiccommissioningwindow)
- [openEnhancedCommissioningWindow](device_export.PairedNode.md#openenhancedcommissioningwindow)
- [reconnect](device_export.PairedNode.md#reconnect)
- [setConnectionState](device_export.PairedNode.md#setconnectionstate)
- [structureEndpoints](device_export.PairedNode.md#structureendpoints)
- [subscribeAllAttributesAndEvents](device_export.PairedNode.md#subscribeallattributesandevents)
- [updateEndpointStructure](device_export.PairedNode.md#updateendpointstructure)
- [create](device_export.PairedNode.md#create)

## Constructors

### constructor

• **new PairedNode**(`nodeId`, `commissioningController`, `options?`, `reconnectInteractionClient`, `assignDisconnectedHandler`): [`PairedNode`](device_export.PairedNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `commissioningController` | [`CommissioningController`](export.CommissioningController.md) |
| `options` | [`CommissioningControllerNodeOptions`](../modules/device_export.md#commissioningcontrollernodeoptions) |
| `reconnectInteractionClient` | () => `Promise`\<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\> |
| `assignDisconnectedHandler` | (`handler`: () => `Promise`\<`void`\>) => `void` |

#### Returns

[`PairedNode`](device_export.PairedNode.md)

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:166](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L166)

## Properties

### commissioningController

• `Private` `Readonly` **commissioningController**: [`CommissioningController`](export.CommissioningController.md)

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:168](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L168)

___

### connectionState

• `Private` **connectionState**: [`NodeStateInformation`](../enums/device_export.NodeStateInformation.md) = `NodeStateInformation.Disconnected`

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L146)

___

### endpoints

• `Private` `Readonly` **endpoints**: `Map`\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber), [`Endpoint`](device_export.Endpoint.md)\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:134](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L134)

___

### interactionClient

• `Private` `Optional` **interactionClient**: [`InteractionClient`](protocol_interaction_export.InteractionClient.md)

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:135](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L135)

___

### nodeId

• `Readonly` **nodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:167](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L167)

___

### options

• `Private` `Readonly` **options**: [`CommissioningControllerNodeOptions`](../modules/device_export.md#commissioningcontrollernodeoptions) = `{}`

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:169](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L169)

___

### reconnectDelayTimer

• `Private` `Readonly` **reconnectDelayTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:136](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L136)

___

### reconnectInteractionClient

• `Private` `Readonly` **reconnectInteractionClient**: () => `Promise`\<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

#### Type declaration

▸ (): `Promise`\<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

##### Returns

`Promise`\<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:170](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L170)

___

### updateEndpointStructureTimer

• `Private` `Readonly` **updateEndpointStructureTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:141](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L141)

## Accessors

### isConnected

• `get` **isConnected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:185](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L185)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:758](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L758)

___

### createDevice

▸ **createDevice**(`endpointId`, `data`, `interactionClient`): [`PairedDevice`](device_export.PairedDevice.md) \| [`RootEndpoint`](device_export.RootEndpoint.md) \| [`ComposedDevice`](device_export.ComposedDevice.md) \| [`Aggregator`](device_export.Aggregator.md)

Create a device object from the data read from the device.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) | Endpoint ID |
| `data` | `Object` | Data of all clusters read from the device |
| `interactionClient` | [`InteractionClient`](protocol_interaction_export.InteractionClient.md) | InteractionClient to use for the device |

#### Returns

[`PairedDevice`](device_export.PairedDevice.md) \| [`RootEndpoint`](device_export.RootEndpoint.md) \| [`ComposedDevice`](device_export.ComposedDevice.md) \| [`Aggregator`](device_export.Aggregator.md)

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:521](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L521)

___

### decommission

▸ **decommission**(): `Promise`\<`void`\>

De-Commission (unpair) the device from this controller by removing the fabric from the device.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:634](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L634)

___

### disconnect

▸ **disconnect**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:753](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L753)

___

### ensureConnection

▸ **ensureConnection**(): `Promise`\<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

Ensure that the node is connected by creating a new InteractionClient if needed.

#### Returns

`Promise`\<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:231](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L231)

___

### getClusterClientForDevice

▸ **getClusterClientForDevice**\<`F`, `SF`, `A`, `C`, `E`\>(`endpointId`, `cluster`): `undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) | EndpointNumber to get the cluster from |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:815](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L815)

___

### getClusterServerForDevice

▸ **getClusterServerForDevice**\<`F`, `SF`, `A`, `C`, `E`\>(`endpointId`, `cluster`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) | EndpointNumber to get the cluster from |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:799](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L799)

___

### getDeviceById

▸ **getDeviceById**(`endpointId`): `undefined` \| [`Endpoint`](device_export.Endpoint.md)

Returns the device/endpoint with the given endpoint ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpointId` | `number` |

#### Returns

`undefined` \| [`Endpoint`](device_export.Endpoint.md)

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:625](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L625)

___

### getDevices

▸ **getDevices**(): [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md)[]

Returns the functional devices/endpoints (those below the Root Endpoint) known for this node.

#### Returns

[`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md)[]

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:620](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L620)

___

### getInteractionClient

▸ **getInteractionClient**(): `Promise`\<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

Request the current InteractionClient for custom special case interactions with the device. Usually the
ClusterClients of the Devices of the node should be used instead.

#### Returns

`Promise`\<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:271](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L271)

___

### getRootClusterClient

▸ **getRootClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:783](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L783)

___

### getRootClusterServer

▸ **getRootClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:768](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L768)

___

### getRootEndpoint

▸ **getRootEndpoint**(): `undefined` \| [`Endpoint`](device_export.Endpoint.md)

#### Returns

`undefined` \| [`Endpoint`](device_export.Endpoint.md)

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:629](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L629)

___

### handleNodeShutdown

▸ **handleNodeShutdown**(): `Promise`\<`void`\>

Handles a node shutDown event (if supported by the node and received).

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:389](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L389)

___

### initialize

▸ **initialize**(): `Promise`\<`void`\>

Initialize the node after the InteractionClient was created and to subscribe attributes and events if requested.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:240](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L240)

___

### initializeEndpointStructure

▸ **initializeEndpointStructure**(`allClusterAttributes`, `updateStructure?`): `Promise`\<`void`\>

Reads all data from the device and create a device object structure out of it.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `allClusterAttributes` | [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[] | `undefined` |
| `updateStructure` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:405](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L405)

___

### logStructure

▸ **logStructure**(`options?`): `void`

Method to log the structure of this node with all endpoint and clusters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`EndpointLoggingOptions`](../modules/device_export.md#endpointloggingoptions) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:276](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L276)

___

### openBasicCommissioningWindow

▸ **openBasicCommissioningWindow**(`commissioningTimeout?`): `Promise`\<`void`\>

Opens a Basic Commissioning Window (uses the original Passcode printed on the device) with the device.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `commissioningTimeout` | `number` | `900` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:660](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L660)

___

### openEnhancedCommissioningWindow

▸ **openEnhancedCommissioningWindow**(`commissioningTimeout?`): `Promise`\<\{ `manualPairingCode`: `string` ; `qrPairingCode`: `string`  }\>

Opens an Enhanced Commissioning Window (uses a generated random Passcode) with the device.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `commissioningTimeout` | `number` | `900` |

#### Returns

`Promise`\<\{ `manualPairingCode`: `string` ; `qrPairingCode`: `string`  }\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:688](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L688)

___

### reconnect

▸ **reconnect**(): `Promise`\<`void`\>

Force a reconnection to the device. This method is mainly used internally to reconnect after the active session
was closed or the device wen offline and was detected as being online again.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:206](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L206)

___

### setConnectionState

▸ **setConnectionState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`NodeStateInformation`](../enums/device_export.NodeStateInformation.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:189](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L189)

___

### structureEndpoints

▸ **structureEndpoints**(`partLists`): `void`

Bring the endpoints in a structure based on their partsList attribute.

#### Parameters

| Name | Type |
| :------ | :------ |
| `partLists` | `Map`\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber), [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:454](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L454)

___

### subscribeAllAttributesAndEvents

▸ **subscribeAllAttributesAndEvents**(`options?`): `Promise`\<\{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]  }\>

Subscribe to all attributes and events of the device. Unless setting the Controller property autoSubscribe to
false this is executed automatically. Alternatively you can manually subscribe by calling this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.attributeChangedCallback?` | (`data`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>) => `void` |
| `options.eventTriggeredCallback?` | (`data`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>) => `void` |
| `options.ignoreInitialTriggers?` | `boolean` |

#### Returns

`Promise`\<\{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)\<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)\<`any`\>[]  }\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:289](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L289)

___

### updateEndpointStructure

▸ **updateEndpointStructure**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:397](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L397)

___

### create

▸ **create**(`nodeId`, `commissioningController`, `options?`, `reconnectInteractionClient`, `assignDisconnectedHandler`): `Promise`\<[`PairedNode`](device_export.PairedNode.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `commissioningController` | [`CommissioningController`](export.CommissioningController.md) |
| `options` | [`CommissioningControllerNodeOptions`](../modules/device_export.md#commissioningcontrollernodeoptions) |
| `reconnectInteractionClient` | () => `Promise`\<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\> |
| `assignDisconnectedHandler` | (`handler`: () => `Promise`\<`void`\>) => `void` |

#### Returns

`Promise`\<[`PairedNode`](device_export.PairedNode.md)\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L148)
