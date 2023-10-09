[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / CommissioningController

# Class: CommissioningController

[export](../modules/export.md).CommissioningController

Abstract base class that represents a node in the matter ecosystem.

## Hierarchy

- [`MatterNode`](export.MatterNode.md)

  ↳ **`CommissioningController`**

## Table of contents

### Constructors

- [constructor](export.CommissioningController.md#constructor)

### Properties

- [controllerInstance](export.CommissioningController.md#controllerinstance)
- [endpoints](export.CommissioningController.md#endpoints)
- [interactionClient](export.CommissioningController.md#interactionclient)
- [ipv4Disabled](export.CommissioningController.md#ipv4disabled)
- [listeningAddressIpv4](export.CommissioningController.md#listeningaddressipv4)
- [listeningAddressIpv6](export.CommissioningController.md#listeningaddressipv6)
- [mdnsScanner](export.CommissioningController.md#mdnsscanner)
- [nodeId](export.CommissioningController.md#nodeid)
- [options](export.CommissioningController.md#options)
- [rootEndpoint](export.CommissioningController.md#rootendpoint)
- [serverAddress](export.CommissioningController.md#serveraddress)
- [storage](export.CommissioningController.md#storage)

### Methods

- [addEndpoint](export.CommissioningController.md#addendpoint)
- [addRootClusterClient](export.CommissioningController.md#addrootclusterclient)
- [addRootClusterServer](export.CommissioningController.md#addrootclusterserver)
- [close](export.CommissioningController.md#close)
- [connect](export.CommissioningController.md#connect)
- [createDevice](export.CommissioningController.md#createdevice)
- [createInteractionClient](export.CommissioningController.md#createinteractionclient)
- [getActiveSessionInformation](export.CommissioningController.md#getactivesessioninformation)
- [getChildEndpoint](export.CommissioningController.md#getchildendpoint)
- [getDevices](export.CommissioningController.md#getdevices)
- [getFabric](export.CommissioningController.md#getfabric)
- [getInteractionClient](export.CommissioningController.md#getinteractionclient)
- [getPort](export.CommissioningController.md#getport)
- [getRootClusterClient](export.CommissioningController.md#getrootclusterclient)
- [getRootClusterServer](export.CommissioningController.md#getrootclusterserver)
- [getRootEndpoint](export.CommissioningController.md#getrootendpoint)
- [initializeAfterConnect](export.CommissioningController.md#initializeafterconnect)
- [initializeEndpointStructure](export.CommissioningController.md#initializeendpointstructure)
- [isCommissioned](export.CommissioningController.md#iscommissioned)
- [setMdnsBroadcaster](export.CommissioningController.md#setmdnsbroadcaster)
- [setMdnsScanner](export.CommissioningController.md#setmdnsscanner)
- [setStorage](export.CommissioningController.md#setstorage)
- [start](export.CommissioningController.md#start)
- [structureEndpoints](export.CommissioningController.md#structureendpoints)
- [subscribeAllAttributesAndEvents](export.CommissioningController.md#subscribeallattributesandevents)

## Constructors

### constructor

• **new CommissioningController**(`options`)

Creates a new CommissioningController instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CommissioningControllerOptions`](../interfaces/export.CommissioningControllerOptions.md) | The options for the CommissioningController |

#### Overrides

[MatterNode](export.MatterNode.md).[constructor](export.MatterNode.md#constructor)

#### Defined in

packages/matter.js/src/CommissioningController.ts:97

## Properties

### controllerInstance

• `Private` `Optional` **controllerInstance**: [`MatterController`](export._internal_.MatterController.md)

#### Defined in

packages/matter.js/src/CommissioningController.ts:86

___

### endpoints

• `Private` **endpoints**: `Map`<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber), [`Endpoint`](device_export.Endpoint.md)\>

#### Defined in

packages/matter.js/src/CommissioningController.ts:90

___

### interactionClient

• `Private` `Optional` **interactionClient**: [`InteractionClient`](protocol_interaction_export.InteractionClient.md)

#### Defined in

packages/matter.js/src/CommissioningController.ts:87

___

### ipv4Disabled

• **ipv4Disabled**: `boolean` = `false`

#### Inherited from

[MatterNode](export.MatterNode.md).[ipv4Disabled](export.MatterNode.md#ipv4disabled)

#### Defined in

packages/matter.js/src/MatterNode.ts:22

___

### listeningAddressIpv4

• `Private` `Optional` `Readonly` **listeningAddressIpv4**: `string`

#### Defined in

packages/matter.js/src/CommissioningController.ts:80

___

### listeningAddressIpv6

• `Private` `Optional` `Readonly` **listeningAddressIpv6**: `string`

#### Defined in

packages/matter.js/src/CommissioningController.ts:81

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: [`MdnsScanner`](mdns_export.MdnsScanner.md)

#### Defined in

packages/matter.js/src/CommissioningController.ts:84

___

### nodeId

• `Private` `Optional` **nodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

packages/matter.js/src/CommissioningController.ts:89

___

### options

• `Private` `Readonly` **options**: [`CommissioningControllerOptions`](../interfaces/export.CommissioningControllerOptions.md)

The options for the CommissioningController

#### Defined in

packages/matter.js/src/CommissioningController.ts:97

___

### rootEndpoint

• `Protected` `Readonly` **rootEndpoint**: [`RootEndpoint`](device_export.RootEndpoint.md)

#### Inherited from

[MatterNode](export.MatterNode.md).[rootEndpoint](export.MatterNode.md#rootendpoint)

#### Defined in

packages/matter.js/src/MatterNode.ts:21

___

### serverAddress

• `Optional` **serverAddress**: [`ServerAddressIp`](../modules/common_export.md#serveraddressip)

#### Defined in

packages/matter.js/src/CommissioningController.ts:79

___

### storage

• `Private` `Optional` **storage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

packages/matter.js/src/CommissioningController.ts:83

## Methods

### addEndpoint

▸ `Protected` **addEndpoint**(`endpoint`): `void`

Add a child endpoint to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) | Endpoint to add |

#### Returns

`void`

#### Inherited from

[MatterNode](export.MatterNode.md).[addEndpoint](export.MatterNode.md#addendpoint)

#### Defined in

packages/matter.js/src/MatterNode.ts:87

___

### addRootClusterClient

▸ **addRootClusterClient**<`F`, `A`, `C`, `E`\>(`cluster`): `void`

Add a cluster client to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\> | ClusterClient object to add |

#### Returns

`void`

#### Inherited from

[MatterNode](export.MatterNode.md).[addRootClusterClient](export.MatterNode.md#addrootclusterclient)

#### Defined in

packages/matter.js/src/MatterNode.ts:53

___

### addRootClusterServer

▸ **addRootClusterServer**<`A`, `E`\>(`cluster`): `void`

Add a cluster to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\> | ClusterServer object to add |

#### Returns

`void`

#### Inherited from

[MatterNode](export.MatterNode.md).[addRootClusterServer](export.MatterNode.md#addrootclusterserver)

#### Defined in

packages/matter.js/src/MatterNode.ts:29

___

### close

▸ **close**(): `Promise`<`void`\>

close network connections of the device

#### Returns

`Promise`<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[close](export.MatterNode.md#close)

#### Defined in

packages/matter.js/src/CommissioningController.ts:506

___

### connect

▸ **connect**(): `Promise`<`void`\>

Connects to the device. This includes pairing with the device if not yet paired.
After connection the endpoint data of the device is analyzed and an object structure is created.

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/CommissioningController.ts:106

___

### createDevice

▸ `Private` **createDevice**(`endpointId`, `data`): [`PairedDevice`](device_export.PairedDevice.md) \| [`RootEndpoint`](device_export.RootEndpoint.md) \| [`ComposedDevice`](device_export.ComposedDevice.md) \| [`Aggregator`](device_export.Aggregator.md)

Create a device object from the data read from the device.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) | Endpoint ID |
| `data` | `Object` | Data of all clusters read from the device |

#### Returns

[`PairedDevice`](device_export.PairedDevice.md) \| [`RootEndpoint`](device_export.RootEndpoint.md) \| [`ComposedDevice`](device_export.ComposedDevice.md) \| [`Aggregator`](device_export.Aggregator.md)

#### Defined in

packages/matter.js/src/CommissioningController.ts:393

___

### createInteractionClient

▸ `Private` **createInteractionClient**(): `Promise`<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

Creates and Return a new InteractionClient to communicate with the device.

#### Returns

`Promise`<[`InteractionClient`](protocol_interaction_export.InteractionClient.md)\>

#### Defined in

packages/matter.js/src/CommissioningController.ts:296

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): { `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

{ `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/datatype_export.md#fabricid) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/datatype_export.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

packages/matter.js/src/CommissioningController.ts:522

___

### getChildEndpoint

▸ `Protected` **getChildEndpoint**(`endpointId`): `undefined` \| [`Endpoint`](device_export.Endpoint.md)

Get a child endpoint from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) | Endpoint ID of the child endpoint to get |

#### Returns

`undefined` \| [`Endpoint`](device_export.Endpoint.md)

#### Inherited from

[MatterNode](export.MatterNode.md).[getChildEndpoint](export.MatterNode.md#getchildendpoint)

#### Defined in

packages/matter.js/src/MatterNode.ts:97

___

### getDevices

▸ **getDevices**(): [`Endpoint`](device_export.Endpoint.md)[]

Returns the devices known to the controller.

#### Returns

[`Endpoint`](device_export.Endpoint.md)[]

#### Defined in

packages/matter.js/src/CommissioningController.ts:499

___

### getFabric

▸ **getFabric**(): [`Fabric`](fabric_export.Fabric.md)

Returns the paired Fabric object of the node

#### Returns

[`Fabric`](fabric_export.Fabric.md)

#### Defined in

packages/matter.js/src/CommissioningController.ts:279

___

### getInteractionClient

▸ **getInteractionClient**(): [`InteractionClient`](protocol_interaction_export.InteractionClient.md)

#### Returns

[`InteractionClient`](protocol_interaction_export.InteractionClient.md)

#### Defined in

packages/matter.js/src/CommissioningController.ts:526

___

### getPort

▸ **getPort**(): `undefined`

#### Returns

`undefined`

#### Overrides

[MatterNode](export.MatterNode.md).[getPort](export.MatterNode.md#getport)

#### Defined in

packages/matter.js/src/CommissioningController.ts:512

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

#### Inherited from

[MatterNode](export.MatterNode.md).[getRootClusterClient](export.MatterNode.md#getrootclusterclient)

#### Defined in

packages/matter.js/src/MatterNode.ts:64

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

#### Inherited from

[MatterNode](export.MatterNode.md).[getRootClusterServer](export.MatterNode.md#getrootclusterserver)

#### Defined in

packages/matter.js/src/MatterNode.ts:38

___

### getRootEndpoint

▸ **getRootEndpoint**(): [`RootEndpoint`](device_export.RootEndpoint.md)

Get the root endpoint of the node.

#### Returns

[`RootEndpoint`](device_export.RootEndpoint.md)

#### Inherited from

[MatterNode](export.MatterNode.md).[getRootEndpoint](export.MatterNode.md#getrootendpoint)

#### Defined in

packages/matter.js/src/MatterNode.ts:77

___

### initializeAfterConnect

▸ **initializeAfterConnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/CommissioningController.ts:234

___

### initializeEndpointStructure

▸ `Private` **initializeEndpointStructure**(`allClusterAttributes`): `Promise`<`void`\>

Read all data from the device and create a device object structure out of it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `allClusterAttributes` | [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[] |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/CommissioningController.ts:308

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

Return info if a device is successfully paired.

#### Returns

`boolean`

#### Defined in

packages/matter.js/src/CommissioningController.ts:289

___

### setMdnsBroadcaster

▸ **setMdnsBroadcaster**(`_mdnsBroadcaster`): `void`

Set the MDNS Broadcaster instance. Should be only used internally

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_mdnsBroadcaster` | [`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md) | MdnsBroadcaster instance |

#### Returns

`void`

#### Overrides

[MatterNode](export.MatterNode.md).[setMdnsBroadcaster](export.MatterNode.md#setmdnsbroadcaster)

#### Defined in

packages/matter.js/src/CommissioningController.ts:264

___

### setMdnsScanner

▸ **setMdnsScanner**(`mdnsScanner`): `void`

Set the MDNS Scanner instance. Should be only used internally

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](mdns_export.MdnsScanner.md) | MdnsScanner instance |

#### Returns

`void`

#### Overrides

[MatterNode](export.MatterNode.md).[setMdnsScanner](export.MatterNode.md#setmdnsscanner)

#### Defined in

packages/matter.js/src/CommissioningController.ts:255

___

### setStorage

▸ **setStorage**(`storage`): `void`

Set the Storage instance. Should be only used internally

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) | storage context to use |

#### Returns

`void`

#### Defined in

packages/matter.js/src/CommissioningController.ts:272

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[start](export.MatterNode.md#start)

#### Defined in

packages/matter.js/src/CommissioningController.ts:516

___

### structureEndpoints

▸ `Private` **structureEndpoints**(`partLists`): `void`

Bring the endpoints in a structure based on their partsList attribute.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `partLists` | `Map`<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber), [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]\> | A Map of the partsList attributes of all endpoints to structure |

#### Returns

`void`

#### Defined in

packages/matter.js/src/CommissioningController.ts:333

___

### subscribeAllAttributesAndEvents

▸ **subscribeAllAttributesAndEvents**(`ignoreInitialTriggers`): `Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ignoreInitialTriggers` | `boolean` |

#### Returns

`Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/protocol_interaction_export.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/protocol_interaction_export.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

packages/matter.js/src/CommissioningController.ts:182
