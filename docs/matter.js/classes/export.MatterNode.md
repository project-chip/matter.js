[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / MatterNode

# Class: MatterNode

[export](../modules/export.md).MatterNode

Abstract base class that represents a node in the matter ecosystem.

## Hierarchy

- **`MatterNode`**

  ↳ [`CommissioningController`](export.CommissioningController.md)

  ↳ [`CommissioningServer`](export.CommissioningServer.md)

## Table of contents

### Constructors

- [constructor](export.MatterNode.md#constructor)

### Properties

- [rootEndpoint](export.MatterNode.md#rootendpoint)

### Methods

- [addEndpoint](export.MatterNode.md#addendpoint)
- [addRootClusterClient](export.MatterNode.md#addrootclusterclient)
- [addRootClusterServer](export.MatterNode.md#addrootclusterserver)
- [close](export.MatterNode.md#close)
- [getChildEndpoint](export.MatterNode.md#getchildendpoint)
- [getPort](export.MatterNode.md#getport)
- [getRootClusterClient](export.MatterNode.md#getrootclusterclient)
- [getRootClusterServer](export.MatterNode.md#getrootclusterserver)
- [getRootEndpoint](export.MatterNode.md#getrootendpoint)
- [setMdnsBroadcaster](export.MatterNode.md#setmdnsbroadcaster)
- [setMdnsScanner](export.MatterNode.md#setmdnsscanner)
- [start](export.MatterNode.md#start)

## Constructors

### constructor

• **new MatterNode**()

## Properties

### rootEndpoint

• `Protected` `Readonly` **rootEndpoint**: [`RootEndpoint`](device_export.RootEndpoint.md)

#### Defined in

[packages/matter.js/src/MatterNode.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L21)

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

#### Defined in

[packages/matter.js/src/MatterNode.ts:86](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L86)

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

#### Defined in

[packages/matter.js/src/MatterNode.ts:52](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L52)

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

#### Defined in

[packages/matter.js/src/MatterNode.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L28)

___

### close

▸ `Abstract` **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterNode.ts:100](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L100)

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

#### Defined in

[packages/matter.js/src/MatterNode.ts:96](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L96)

___

### getPort

▸ `Abstract` **getPort**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[packages/matter.js/src/MatterNode.ts:102](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L102)

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

[packages/matter.js/src/MatterNode.ts:63](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L63)

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

[packages/matter.js/src/MatterNode.ts:37](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L37)

___

### getRootEndpoint

▸ **getRootEndpoint**(): [`RootEndpoint`](device_export.RootEndpoint.md)

Get the root endpoint of the node.

#### Returns

[`RootEndpoint`](device_export.RootEndpoint.md)

#### Defined in

[packages/matter.js/src/MatterNode.ts:76](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L76)

___

### setMdnsBroadcaster

▸ `Abstract` **setMdnsBroadcaster**(`mdnsBroadcaster`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mdnsBroadcaster` | [`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterNode.ts:106](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L106)

___

### setMdnsScanner

▸ `Abstract` **setMdnsScanner**(`mdnsScanner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](mdns_export.MdnsScanner.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/MatterNode.ts:108](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L108)

___

### start

▸ `Abstract` **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterNode.ts:104](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/MatterNode.ts#L104)
