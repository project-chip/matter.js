[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / CommissioningController

# Class: CommissioningController

[index](../modules/index.md).CommissioningController

Abstract base class that represents a node in the matter ecosystem.

## Hierarchy

- [`MatterNode`](index.MatterNode.md)

  ↳ **`CommissioningController`**

## Table of contents

### Constructors

- [constructor](index.CommissioningController.md#constructor)

### Properties

- [controllerInstance](index.CommissioningController.md#controllerinstance)
- [delayedPairing](index.CommissioningController.md#delayedpairing)
- [disableIpv4](index.CommissioningController.md#disableipv4)
- [discriminator](index.CommissioningController.md#discriminator)
- [endpoints](index.CommissioningController.md#endpoints)
- [ip](index.CommissioningController.md#ip)
- [listeningAddressIpv4](index.CommissioningController.md#listeningaddressipv4)
- [listeningAddressIpv6](index.CommissioningController.md#listeningaddressipv6)
- [mdnsScanner](index.CommissioningController.md#mdnsscanner)
- [nodeId](index.CommissioningController.md#nodeid)
- [passcode](index.CommissioningController.md#passcode)
- [port](index.CommissioningController.md#port)
- [rootEndpoint](index.CommissioningController.md#rootendpoint)
- [storageManager](index.CommissioningController.md#storagemanager)

### Methods

- [addEndpoint](index.CommissioningController.md#addendpoint)
- [addRootClusterClient](index.CommissioningController.md#addrootclusterclient)
- [addRootClusterServer](index.CommissioningController.md#addrootclusterserver)
- [close](index.CommissioningController.md#close)
- [connect](index.CommissioningController.md#connect)
- [createDevice](index.CommissioningController.md#createdevice)
- [createInteractionClient](index.CommissioningController.md#createinteractionclient)
- [getChildEndpoint](index.CommissioningController.md#getchildendpoint)
- [getDevices](index.CommissioningController.md#getdevices)
- [getFabric](index.CommissioningController.md#getfabric)
- [getRootClusterClient](index.CommissioningController.md#getrootclusterclient)
- [getRootClusterClientWithNewInteractionClient](index.CommissioningController.md#getrootclusterclientwithnewinteractionclient)
- [getRootClusterServer](index.CommissioningController.md#getrootclusterserver)
- [getRootEndpoint](index.CommissioningController.md#getrootendpoint)
- [initializeEndpointStructure](index.CommissioningController.md#initializeendpointstructure)
- [isCommissioned](index.CommissioningController.md#iscommissioned)
- [setMdnsScanner](index.CommissioningController.md#setmdnsscanner)
- [setStorageManager](index.CommissioningController.md#setstoragemanager)
- [structureEndpoints](index.CommissioningController.md#structureendpoints)

## Constructors

### constructor

• **new CommissioningController**(`options`)

Creates a new CommissioningController instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CommissioningControllerOptions`](../interfaces/index.CommissioningControllerOptions.md) | The options for the CommissioningController |

#### Overrides

[MatterNode](index.MatterNode.md).[constructor](index.MatterNode.md#constructor)

#### Defined in

[packages/matter.js/src/CommissioningController.ts:79](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L79)

## Properties

### controllerInstance

• `Private` `Optional` **controllerInstance**: [`MatterController`](index.MatterController.md)

#### Defined in

[packages/matter.js/src/CommissioningController.ts:69](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L69)

___

### delayedPairing

• `Readonly` **delayedPairing**: `boolean`

#### Defined in

[packages/matter.js/src/CommissioningController.ts:64](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L64)

___

### disableIpv4

• `Private` `Readonly` **disableIpv4**: `boolean`

#### Defined in

[packages/matter.js/src/CommissioningController.ts:57](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L57)

___

### discriminator

• `Private` `Readonly` **discriminator**: `number`

#### Defined in

[packages/matter.js/src/CommissioningController.ts:62](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L62)

___

### endpoints

• `Private` **endpoints**: `Map`<`number`, [`Endpoint`](device.Endpoint.md)\>

#### Defined in

[packages/matter.js/src/CommissioningController.ts:72](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L72)

___

### ip

• `Private` `Readonly` **ip**: `string`

#### Defined in

[packages/matter.js/src/CommissioningController.ts:55](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L55)

___

### listeningAddressIpv4

• `Private` `Optional` `Readonly` **listeningAddressIpv4**: `string`

#### Defined in

[packages/matter.js/src/CommissioningController.ts:58](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L58)

___

### listeningAddressIpv6

• `Private` `Optional` `Readonly` **listeningAddressIpv6**: `string`

#### Defined in

[packages/matter.js/src/CommissioningController.ts:59](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L59)

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: [`MdnsScanner`](mdns.MdnsScanner.md)

#### Defined in

[packages/matter.js/src/CommissioningController.ts:67](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L67)

___

### nodeId

• `Private` `Optional` **nodeId**: [`NodeId`](datatype.NodeId.md)

#### Defined in

[packages/matter.js/src/CommissioningController.ts:71](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L71)

___

### passcode

• `Private` `Readonly` **passcode**: `number`

#### Defined in

[packages/matter.js/src/CommissioningController.ts:61](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L61)

___

### port

• `Private` `Readonly` **port**: `number`

#### Defined in

[packages/matter.js/src/CommissioningController.ts:56](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L56)

___

### rootEndpoint

• `Protected` `Readonly` **rootEndpoint**: [`RootEndpoint`](device.RootEndpoint.md)

#### Inherited from

[MatterNode](index.MatterNode.md).[rootEndpoint](index.MatterNode.md#rootendpoint)

#### Defined in

[packages/matter.js/src/MatterNode.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L19)

___

### storageManager

• `Private` `Optional` **storageManager**: [`StorageManager`](storage.StorageManager.md)

#### Defined in

[packages/matter.js/src/CommissioningController.ts:66](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L66)

## Methods

### addEndpoint

▸ `Protected` **addEndpoint**(`endpoint`): `void`

Add a child endpoint to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | [`Endpoint`](device.Endpoint.md) | Endpoint to add |

#### Returns

`void`

#### Inherited from

[MatterNode](index.MatterNode.md).[addEndpoint](index.MatterNode.md#addendpoint)

#### Defined in

[packages/matter.js/src/MatterNode.ts:77](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L77)

___

### addRootClusterClient

▸ **addRootClusterClient**<`A`, `C`\>(`cluster`): `void`

Add a cluster client to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<`A`, `C`\> | ClusterClient object to add |

#### Returns

`void`

#### Inherited from

[MatterNode](index.MatterNode.md).[addRootClusterClient](index.MatterNode.md#addrootclusterclient)

#### Defined in

[packages/matter.js/src/MatterNode.ts:46](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L46)

___

### addRootClusterServer

▸ **addRootClusterServer**<`A`, `C`\>(`cluster`): `void`

Add a cluster to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<`A`, `C`\> | ClusterServer object to add |

#### Returns

`void`

#### Inherited from

[MatterNode](index.MatterNode.md).[addRootClusterServer](index.MatterNode.md#addrootclusterserver)

#### Defined in

[packages/matter.js/src/MatterNode.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L26)

___

### close

▸ **close**(): `Promise`<`void`\>

close network connections of the device

#### Returns

`Promise`<`void`\>

#### Overrides

[MatterNode](index.MatterNode.md).[close](index.MatterNode.md#close)

#### Defined in

[packages/matter.js/src/CommissioningController.ts:391](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L391)

___

### connect

▸ **connect**(): `Promise`<`void`\>

Connects to the device. This includes pairing with the device if not yet paired.
After connection the endpoint data of the device is analyzed and an object structure is created.

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/CommissioningController.ts:97](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L97)

___

### createDevice

▸ `Private` **createDevice**(`endpointId`, `data`, `interactionClient`): [`PairedDevice`](device.PairedDevice.md) \| [`RootEndpoint`](device.RootEndpoint.md) \| [`ComposedDevice`](device.ComposedDevice.md)

Create a device object from the data read from the device.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | `number` | Endpoint ID |
| `data` | `Object` | Data of all clusters read from the device |
| `interactionClient` | [`InteractionClient`](protocol_interaction.InteractionClient.md) | InteractionClient to communicate with the device |

#### Returns

[`PairedDevice`](device.PairedDevice.md) \| [`RootEndpoint`](device.RootEndpoint.md) \| [`ComposedDevice`](device.ComposedDevice.md)

#### Defined in

[packages/matter.js/src/CommissioningController.ts:267](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L267)

___

### createInteractionClient

▸ **createInteractionClient**(): `Promise`<[`InteractionClient`](protocol_interaction.InteractionClient.md)\>

Creates and Return a new InteractionClient to communicate with the device. This is only needed if you want to
separate requests on a separate client.

#### Returns

`Promise`<[`InteractionClient`](protocol_interaction.InteractionClient.md)\>

#### Defined in

[packages/matter.js/src/CommissioningController.ts:162](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L162)

___

### getChildEndpoint

▸ `Protected` **getChildEndpoint**(`endpointId`): `undefined` \| [`Endpoint`](device.Endpoint.md)

Get a child endpoint from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | `number` | Endpoint ID of the child endpoint to get |

#### Returns

`undefined` \| [`Endpoint`](device.Endpoint.md)

#### Inherited from

[MatterNode](index.MatterNode.md).[getChildEndpoint](index.MatterNode.md#getchildendpoint)

#### Defined in

[packages/matter.js/src/MatterNode.ts:87](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L87)

___

### getDevices

▸ **getDevices**(): [`Endpoint`](device.Endpoint.md)[]

Returns the devices known to the controller.

#### Returns

[`Endpoint`](device.Endpoint.md)[]

#### Defined in

[packages/matter.js/src/CommissioningController.ts:384](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L384)

___

### getFabric

▸ **getFabric**(): [`Fabric`](fabric.Fabric.md)

Returns the paired Fabric object of the node

#### Returns

[`Fabric`](fabric.Fabric.md)

#### Defined in

[packages/matter.js/src/CommissioningController.ts:141](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L141)

___

### getRootClusterClient

▸ **getRootClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`, `interactionClient?`): `undefined` \| [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<`A`, `C`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |
| `interactionClient?` | [`InteractionClient`](protocol_interaction.InteractionClient.md) | Optional InteractionClient to use for the cluster client. If not provided, the default InteractionClient of the root endpoint is used. |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<`A`, `C`\>

#### Inherited from

[MatterNode](index.MatterNode.md).[getRootClusterClient](index.MatterNode.md#getrootclusterclient)

#### Defined in

[packages/matter.js/src/MatterNode.ts:57](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L57)

___

### getRootClusterClientWithNewInteractionClient

▸ **getRootClusterClientWithNewInteractionClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `Promise`<`undefined` \| [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<`A`, `C`\>\>

Returns a cluster client of a root endpoint cluster bound to a new InteractionClient.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> | The cluster to get the client for |

#### Returns

`Promise`<`undefined` \| [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<`A`, `C`\>\>

#### Defined in

[packages/matter.js/src/CommissioningController.ts:174](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L174)

___

### getRootClusterServer

▸ **getRootClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<`A`, `C`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<`A`, `C`\>

#### Inherited from

[MatterNode](index.MatterNode.md).[getRootClusterServer](index.MatterNode.md#getrootclusterserver)

#### Defined in

[packages/matter.js/src/MatterNode.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L35)

___

### getRootEndpoint

▸ **getRootEndpoint**(): [`RootEndpoint`](device.RootEndpoint.md)

Get the root endpoint of the node.

#### Returns

[`RootEndpoint`](device.RootEndpoint.md)

#### Inherited from

[MatterNode](index.MatterNode.md).[getRootEndpoint](index.MatterNode.md#getrootendpoint)

#### Defined in

[packages/matter.js/src/MatterNode.ts:67](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L67)

___

### initializeEndpointStructure

▸ `Private` **initializeEndpointStructure**(): `Promise`<`void`\>

Read all data from the device and create a device object structure out of it.

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/CommissioningController.ts:185](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L185)

___

### isCommissioned

▸ **isCommissioned**(): ``false``

Return info if a device is successfully paired.

#### Returns

``false``

#### Defined in

[packages/matter.js/src/CommissioningController.ts:151](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L151)

___

### setMdnsScanner

▸ **setMdnsScanner**(`mdnsScanner`): `void`

Set the MDNS Scanner instance. Should be only used internally

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](mdns.MdnsScanner.md) | MdnsScanner instance |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningController.ts:126](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L126)

___

### setStorageManager

▸ **setStorageManager**(`storageManager`): `void`

Set the StorageManager instance. Should be only used internally

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageManager` | [`StorageManager`](storage.StorageManager.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningController.ts:134](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L134)

___

### structureEndpoints

▸ `Private` **structureEndpoints**(`partLists`): `void`

Bring the endpoints in a structure based on their partsList attribute.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `partLists` | `Map`<`number`, `number`[]\> | A Map of the partsList attributes of all endpoints to structure |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningController.ts:212](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningController.ts#L212)
