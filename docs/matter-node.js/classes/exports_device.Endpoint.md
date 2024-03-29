[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/device](../modules/exports_device.md) / Endpoint

# Class: Endpoint

[exports/device](../modules/exports_device.md).Endpoint

The primary interface for Matter.js endpoint implementations.

TODO - this is a transitional interface that allows us to have multiple implementations of the legacy endpoint API

## Hierarchy

- **`Endpoint`**

  ↳ [`Aggregator`](exports_device.Aggregator.md)

  ↳ [`ComposedDevice`](exports_device.ComposedDevice.md)

  ↳ [`PairedDevice`](exports_device.PairedDevice.md)

  ↳ [`RootEndpoint`](exports_device.RootEndpoint.md)

  ↳ [`Device`](exports_device.Device.md)

## Implements

- [`EndpointInterface`](../interfaces/exports_cluster._internal_.EndpointInterface.md)

## Table of contents

### Constructors

- [constructor](exports_device.Endpoint.md#constructor)

### Properties

- [childEndpoints](exports_device.Endpoint.md#childendpoints)
- [clusterClients](exports_device.Endpoint.md#clusterclients)
- [clusterServers](exports_device.Endpoint.md#clusterservers)
- [descriptorCluster](exports_device.Endpoint.md#descriptorcluster)
- [deviceTypes](exports_device.Endpoint.md#devicetypes)
- [name](exports_device.Endpoint.md#name)
- [number](exports_device.Endpoint.md#number)
- [structureChangedCallback](exports_device.Endpoint.md#structurechangedcallback)
- [uniqueStorageKey](exports_device.Endpoint.md#uniquestoragekey)

### Methods

- [addChildEndpoint](exports_device.Endpoint.md#addchildendpoint)
- [addClusterClient](exports_device.Endpoint.md#addclusterclient)
- [addClusterServer](exports_device.Endpoint.md#addclusterserver)
- [addFixedLabel](exports_device.Endpoint.md#addfixedlabel)
- [addUserLabel](exports_device.Endpoint.md#adduserlabel)
- [close](exports_device.Endpoint.md#close)
- [determineUniqueID](exports_device.Endpoint.md#determineuniqueid)
- [getAllClusterClients](exports_device.Endpoint.md#getallclusterclients)
- [getAllClusterServers](exports_device.Endpoint.md#getallclusterservers)
- [getChildEndpoint](exports_device.Endpoint.md#getchildendpoint)
- [getChildEndpoints](exports_device.Endpoint.md#getchildendpoints)
- [getClusterClient](exports_device.Endpoint.md#getclusterclient)
- [getClusterClientById](exports_device.Endpoint.md#getclusterclientbyid)
- [getClusterServer](exports_device.Endpoint.md#getclusterserver)
- [getClusterServerById](exports_device.Endpoint.md#getclusterserverbyid)
- [getDeviceTypes](exports_device.Endpoint.md#getdevicetypes)
- [getNumber](exports_device.Endpoint.md#getnumber)
- [hasClusterClient](exports_device.Endpoint.md#hasclusterclient)
- [hasClusterServer](exports_device.Endpoint.md#hasclusterserver)
- [removeChildEndpoint](exports_device.Endpoint.md#removechildendpoint)
- [removeFromStructure](exports_device.Endpoint.md#removefromstructure)
- [setDeviceTypes](exports_device.Endpoint.md#setdevicetypes)
- [setStructureChangedCallback](exports_device.Endpoint.md#setstructurechangedcallback)
- [updatePartsList](exports_device.Endpoint.md#updatepartslist)
- [verifyRequiredClusters](exports_device.Endpoint.md#verifyrequiredclusters)

## Constructors

### constructor

• **new Endpoint**(`deviceTypes`, `options?`): [`Endpoint`](exports_device.Endpoint.md)

Create a new Endpoint instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]] | One or multiple DeviceTypeDefinitions of the endpoint |
| `options?` | [`EndpointOptions`](../interfaces/exports_device.EndpointOptions.md) | Options for the endpoint |

#### Returns

[`Endpoint`](exports_device.Endpoint.md)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:35

## Properties

### childEndpoints

• `Private` `Readonly` **childEndpoints**: `any`

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:23

___

### clusterClients

• `Private` `Readonly` **clusterClients**: `any`

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:22

___

### clusterServers

• `Private` `Readonly` **clusterServers**: `any`

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:21

___

### descriptorCluster

• `Private` **descriptorCluster**: `any`

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:28

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:20

___

### name

• **name**: `string`

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[name](../interfaces/exports_cluster._internal_.EndpointInterface.md#name)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:26

___

### number

• **number**: `undefined` \| [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[number](../interfaces/exports_cluster._internal_.EndpointInterface.md#number)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:24

___

### structureChangedCallback

• `Private` **structureChangedCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:27

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:25

## Methods

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../interfaces/exports_cluster._internal_.EndpointInterface.md) |

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[addChildEndpoint](../interfaces/exports_cluster._internal_.EndpointInterface.md#addchildendpoint)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:52

___

### addClusterClient

▸ **addClusterClient**\<`F`, `A`, `C`, `E`\>(`cluster`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[addClusterClient](../interfaces/exports_cluster._internal_.EndpointInterface.md#addclusterclient)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:43

___

### addClusterServer

▸ **addClusterServer**\<`A`, `E`\>(`cluster`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`A`, `E`\> |

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[addClusterServer](../interfaces/exports_cluster._internal_.EndpointInterface.md#addclusterserver)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:42

___

### addFixedLabel

▸ **addFixedLabel**(`label`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:40

___

### addUserLabel

▸ **addUserLabel**(`label`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:41

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[close](../interfaces/exports_cluster._internal_.EndpointInterface.md#close)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:38

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[determineUniqueID](../interfaces/exports_cluster._internal_.EndpointInterface.md#determineuniqueid)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:56

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[getAllClusterClients](../interfaces/exports_cluster._internal_.EndpointInterface.md#getallclusterclients)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:59

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[getAllClusterServers](../interfaces/exports_cluster._internal_.EndpointInterface.md#getallclusterservers)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:58

___

### getChildEndpoint

▸ **getChildEndpoint**(`id`): `undefined` \| [`Endpoint`](exports_device.Endpoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |

#### Returns

`undefined` \| [`Endpoint`](exports_device.Endpoint.md)

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[getChildEndpoint](../interfaces/exports_cluster._internal_.EndpointInterface.md#getchildendpoint)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:53

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](exports_device.Endpoint.md)[]

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[getChildEndpoints](../interfaces/exports_cluster._internal_.EndpointInterface.md#getchildendpoints)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:54

___

### getClusterClient

▸ **getClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[getClusterClient](../interfaces/exports_cluster._internal_.EndpointInterface.md#getclusterclient)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:45

___

### getClusterClientById

▸ **getClusterClientById**(`clusterId`): `undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:47

___

### getClusterServer

▸ **getClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`A`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`A`, `E`\>

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[getClusterServer](../interfaces/exports_cluster._internal_.EndpointInterface.md#getclusterserver)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:44

___

### getClusterServerById

▸ **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[getClusterServerById](../interfaces/exports_cluster._internal_.EndpointInterface.md#getclusterserverbyid)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:46

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:50

___

### getNumber

▸ **getNumber**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[getNumber](../interfaces/exports_cluster._internal_.EndpointInterface.md#getnumber)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:39

___

### hasClusterClient

▸ **hasClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:49

___

### hasClusterServer

▸ **hasClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[hasClusterServer](../interfaces/exports_cluster._internal_.EndpointInterface.md#hasclusterserver)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:48

___

### removeChildEndpoint

▸ **removeChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:55

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[removeFromStructure](../interfaces/exports_cluster._internal_.EndpointInterface.md#removefromstructure)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:37

___

### setDeviceTypes

▸ **setDeviceTypes**(`deviceTypes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]] |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:51

___

### setStructureChangedCallback

▸ **setStructureChangedCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[setStructureChangedCallback](../interfaces/exports_cluster._internal_.EndpointInterface.md#setstructurechangedcallback)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:36

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[updatePartsList](../interfaces/exports_cluster._internal_.EndpointInterface.md#updatepartslist)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:60

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/exports_cluster._internal_.EndpointInterface.md).[verifyRequiredClusters](../interfaces/exports_cluster._internal_.EndpointInterface.md#verifyrequiredclusters)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:57
