[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / MatterNode

# Class: MatterNode

[index](../modules/index.md).MatterNode

Abstract base class that represents a node in the matter ecosystem.

## Hierarchy

- **`MatterNode`**

  ↳ [`CommissioningServer`](index.CommissioningServer.md)

  ↳ [`CommissioningController`](index.CommissioningController.md)

## Table of contents

### Constructors

- [constructor](index.MatterNode.md#constructor)

### Properties

- [rootEndpoint](index.MatterNode.md#rootendpoint)

### Methods

- [addEndpoint](index.MatterNode.md#addendpoint)
- [addRootClusterClient](index.MatterNode.md#addrootclusterclient)
- [addRootClusterServer](index.MatterNode.md#addrootclusterserver)
- [close](index.MatterNode.md#close)
- [getChildEndpoint](index.MatterNode.md#getchildendpoint)
- [getRootClusterClient](index.MatterNode.md#getrootclusterclient)
- [getRootClusterServer](index.MatterNode.md#getrootclusterserver)
- [getRootEndpoint](index.MatterNode.md#getrootendpoint)

## Constructors

### constructor

• **new MatterNode**()

## Properties

### rootEndpoint

• `Protected` `Readonly` **rootEndpoint**: [`RootEndpoint`](device.RootEndpoint.md)

#### Defined in

[packages/matter.js/src/MatterNode.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L19)

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

#### Defined in

[packages/matter.js/src/MatterNode.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L26)

___

### close

▸ `Abstract` **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/MatterNode.ts:91](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L91)

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

#### Defined in

[packages/matter.js/src/MatterNode.ts:87](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L87)

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

#### Defined in

[packages/matter.js/src/MatterNode.ts:57](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L57)

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

#### Defined in

[packages/matter.js/src/MatterNode.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L35)

___

### getRootEndpoint

▸ **getRootEndpoint**(): [`RootEndpoint`](device.RootEndpoint.md)

Get the root endpoint of the node.

#### Returns

[`RootEndpoint`](device.RootEndpoint.md)

#### Defined in

[packages/matter.js/src/MatterNode.ts:67](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/MatterNode.ts#L67)
