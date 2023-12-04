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

• **new PairedNode**(`nodeId`, `commissioningController`, `options?`, `reconnectInteractionClient`, `assignDisconnectedHandler`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `commissioningController` | [`CommissioningController`](export.CommissioningController.md) |
| `options` | [`CommissioningControllerNodeOptions`](../modules/device_export.md#commissioningcontrollernodeoptions) |
| `reconnectInteractionClient` | () => `Promise`<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\> |
| `assignDisconnectedHandler` | (`handler`: () => `Promise`<`void`\>) => `void` |

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:159](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L159)

## Properties

### commissioningController

• `Private` `Readonly` **commissioningController**: [`CommissioningController`](export.CommissioningController.md)

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:161](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L161)

___

### connectionState

• `Private` **connectionState**: [`NodeStateInformation`](../enums/device_export.NodeStateInformation.md) = `NodeStateInformation.Disconnected`

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:139](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L139)

___

### endpoints

• `Private` `Readonly` **endpoints**: `Map`<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber), [`Endpoint`](device_export.Endpoint.md)\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:129](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L129)

___

### interactionClient

• `Private` `Optional` **interactionClient**: [`InteractionClient`](protocol_interaction_export.InteractionClient.md)

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:130](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L130)

___

### nodeId

• `Readonly` **nodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:160](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L160)

___

### options

• `Private` `Readonly` **options**: [`CommissioningControllerNodeOptions`](../modules/device_export.md#commissioningcontrollernodeoptions) = `{}`

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:162](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L162)

___

### reconnectDelayTimer

• `Private` `Readonly` **reconnectDelayTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:131](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L131)

___

### reconnectInteractionClient

• `Private` `Readonly` **reconnectInteractionClient**: () => `Promise`<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

#### Type declaration

▸ (): `Promise`<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

##### Returns

`Promise`<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:163](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L163)

___

### updateEndpointStructureTimer

• `Private` `Readonly` **updateEndpointStructureTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:135](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L135)

## Accessors

### isConnected

• `get` **isConnected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:178](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L178)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:749](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L749)

___

### createDevice

▸ `Private` **createDevice**(`endpointId`, `data`, `interactionClient`): [`PairedDevice`](device_export.PairedDevice.md) \| [`RootEndpoint`](device_export.RootEndpoint.md) \| [`ComposedDevice`](device_export.ComposedDevice.md) \| [`Aggregator`](device_export.Aggregator.md)

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

[packages/matter.js/src/device/PairedNode.ts:513](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L513)

___

### decommission

▸ **decommission**(): `Promise`<`void`\>

De-Commission (unpair) the device from this controller by removing the fabric from the device.

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:626](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L626)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:744](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L744)

___

### ensureConnection

▸ `Private` **ensureConnection**(): `Promise`<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

Ensure that the node is connected by creating a new InteractionClient if needed.

#### Returns

`Promise`<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:223](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L223)

___

### getClusterClientForDevice

▸ **getClusterClientForDevice**<`F`, `SF`, `A`, `C`, `E`\>(`endpointId`, `cluster`): `undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) | EndpointNumber to get the cluster from |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:806](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L806)

___

### getClusterServerForDevice

▸ **getClusterServerForDevice**<`F`, `SF`, `A`, `C`, `E`\>(`endpointId`, `cluster`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) | EndpointNumber to get the cluster from |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:790](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L790)

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

[packages/matter.js/src/device/PairedNode.ts:617](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L617)

___

### getDevices

▸ **getDevices**(): [`Endpoint`](device_export.Endpoint.md)[]

Returns the functional devices/endpoints (those below the Root Endpoint) known for this node.

#### Returns

[`Endpoint`](device_export.Endpoint.md)[]

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:612](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L612)

___

### getInteractionClient

▸ **getInteractionClient**(): `Promise`<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

Request the current InteractionClient for custom special case interactions with the device. Usually the
ClusterClients of the Devices of the node should be used instead.

#### Returns

`Promise`<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:263](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L263)

___

### getRootClusterClient

▸ **getRootClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:774](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L774)

___

### getRootClusterServer

▸ **getRootClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:759](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L759)

___

### getRootEndpoint

▸ **getRootEndpoint**(): `undefined` \| [`Endpoint`](device_export.Endpoint.md)

#### Returns

`undefined` \| [`Endpoint`](device_export.Endpoint.md)

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:621](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L621)

___

### handleNodeShutdown

▸ `Private` **handleNodeShutdown**(): `Promise`<`void`\>

Handles a node shutDown event (if supported by the node and received).

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:381](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L381)

___

### initialize

▸ `Private` **initialize**(): `Promise`<`void`\>

Initialize the node after the InteractionClient was created and to subscribe attributes and events if requested.

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:232](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L232)

___

### initializeEndpointStructure

▸ `Private` **initializeEndpointStructure**(`allClusterAttributes`, `updateStructure?`): `Promise`<`void`\>

Reads all data from the device and create a device object structure out of it.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `allClusterAttributes` | [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[] | `undefined` |
| `updateStructure` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:397](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L397)

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

[packages/matter.js/src/device/PairedNode.ts:268](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L268)

___

### openBasicCommissioningWindow

▸ **openBasicCommissioningWindow**(`commissioningTimeout?`): `Promise`<`void`\>

Opens a Basic Commissioning Window (uses the original Passcode printed on the device) with the device.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `commissioningTimeout` | `number` | `900` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:651](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L651)

___

### openEnhancedCommissioningWindow

▸ **openEnhancedCommissioningWindow**(`commissioningTimeout?`): `Promise`<{ `manualPairingCode`: `string` ; `qrPairingCode`: `string`  }\>

Opens an Enhanced Commissioning Window (uses a generated random Passcode) with the device.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `commissioningTimeout` | `number` | `900` |

#### Returns

`Promise`<{ `manualPairingCode`: `string` ; `qrPairingCode`: `string`  }\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:679](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L679)

___

### reconnect

▸ **reconnect**(): `Promise`<`void`\>

Force a reconnection to the device. This method is mainly used internally to reconnect after the active session
was closed or the device wen offline and was detected as being online again.

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:199](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L199)

___

### setConnectionState

▸ `Private` **setConnectionState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`NodeStateInformation`](../enums/device_export.NodeStateInformation.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:182](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L182)

___

### structureEndpoints

▸ `Private` **structureEndpoints**(`partLists`): `void`

Bring the endpoints in a structure based on their partsList attribute.

#### Parameters

| Name | Type |
| :------ | :------ |
| `partLists` | `Map`<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber), [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:446](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L446)

___

### subscribeAllAttributesAndEvents

▸ **subscribeAllAttributesAndEvents**(`options?`): `Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

Subscribe to all attributes and events of the device. Unless setting the Controller property autoSubscribe to
false this is executed automatically. Alternatively you can manually subscribe by calling this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.attributeChangedCallback?` | (`data`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>) => `void` |
| `options.eventTriggeredCallback?` | (`data`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>) => `void` |
| `options.ignoreInitialTriggers?` | `boolean` |

#### Returns

`Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:281](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L281)

___

### updateEndpointStructure

▸ **updateEndpointStructure**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:389](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L389)

___

### create

▸ `Static` **create**(`nodeId`, `commissioningController`, `options?`, `reconnectInteractionClient`, `assignDisconnectedHandler`): `Promise`<[`PairedNode`](device_export.PairedNode.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `commissioningController` | [`CommissioningController`](export.CommissioningController.md) |
| `options` | [`CommissioningControllerNodeOptions`](../modules/device_export.md#commissioningcontrollernodeoptions) |
| `reconnectInteractionClient` | () => `Promise`<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\> |
| `assignDisconnectedHandler` | (`handler`: () => `Promise`<`void`\>) => `void` |

#### Returns

`Promise`<[`PairedNode`](device_export.PairedNode.md)\>

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:141](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/device/PairedNode.ts#L141)
