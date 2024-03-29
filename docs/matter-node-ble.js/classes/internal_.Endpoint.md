[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Endpoint

# Class: Endpoint

[\<internal\>](../modules/internal_.md).Endpoint

The primary interface for Matter.js endpoint implementations.

TODO - this is a transitional interface that allows us to have multiple implementations of the legacy endpoint API

## Implements

- [`EndpointInterface`](../interfaces/internal_.EndpointInterface.md)

## Table of contents

### Constructors

- [constructor](internal_.Endpoint.md#constructor)

### Properties

- [childEndpoints](internal_.Endpoint.md#childendpoints)
- [clusterClients](internal_.Endpoint.md#clusterclients)
- [clusterServers](internal_.Endpoint.md#clusterservers)
- [descriptorCluster](internal_.Endpoint.md#descriptorcluster)
- [deviceTypes](internal_.Endpoint.md#devicetypes)
- [name](internal_.Endpoint.md#name)
- [number](internal_.Endpoint.md#number)
- [structureChangedCallback](internal_.Endpoint.md#structurechangedcallback)
- [uniqueStorageKey](internal_.Endpoint.md#uniquestoragekey)

### Methods

- [addChildEndpoint](internal_.Endpoint.md#addchildendpoint)
- [addClusterClient](internal_.Endpoint.md#addclusterclient)
- [addClusterServer](internal_.Endpoint.md#addclusterserver)
- [addFixedLabel](internal_.Endpoint.md#addfixedlabel)
- [addUserLabel](internal_.Endpoint.md#adduserlabel)
- [close](internal_.Endpoint.md#close)
- [determineUniqueID](internal_.Endpoint.md#determineuniqueid)
- [getAllClusterClients](internal_.Endpoint.md#getallclusterclients)
- [getAllClusterServers](internal_.Endpoint.md#getallclusterservers)
- [getChildEndpoint](internal_.Endpoint.md#getchildendpoint)
- [getChildEndpoints](internal_.Endpoint.md#getchildendpoints)
- [getClusterClient](internal_.Endpoint.md#getclusterclient)
- [getClusterClientById](internal_.Endpoint.md#getclusterclientbyid)
- [getClusterServer](internal_.Endpoint.md#getclusterserver)
- [getClusterServerById](internal_.Endpoint.md#getclusterserverbyid)
- [getDeviceTypes](internal_.Endpoint.md#getdevicetypes)
- [getNumber](internal_.Endpoint.md#getnumber)
- [hasClusterClient](internal_.Endpoint.md#hasclusterclient)
- [hasClusterServer](internal_.Endpoint.md#hasclusterserver)
- [removeChildEndpoint](internal_.Endpoint.md#removechildendpoint)
- [removeFromStructure](internal_.Endpoint.md#removefromstructure)
- [setDeviceTypes](internal_.Endpoint.md#setdevicetypes)
- [setStructureChangedCallback](internal_.Endpoint.md#setstructurechangedcallback)
- [updatePartsList](internal_.Endpoint.md#updatepartslist)
- [verifyRequiredClusters](internal_.Endpoint.md#verifyrequiredclusters)

## Constructors

### constructor

• **new Endpoint**(`deviceTypes`, `options?`): [`Endpoint`](internal_.Endpoint.md)

Create a new Endpoint instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../interfaces/internal_.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]] | One or multiple DeviceTypeDefinitions of the endpoint |
| `options?` | [`EndpointOptions`](../interfaces/internal_.EndpointOptions.md) | Options for the endpoint |

#### Returns

[`Endpoint`](internal_.Endpoint.md)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:35

## Properties

### childEndpoints

• `Private` `Readonly` **childEndpoints**: `any`

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:23

___

### clusterClients

• `Private` `Readonly` **clusterClients**: `any`

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:22

___

### clusterServers

• `Private` `Readonly` **clusterServers**: `any`

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:21

___

### descriptorCluster

• `Private` **descriptorCluster**: `any`

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:28

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/internal_.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:20

___

### name

• **name**: `string`

#### Implementation of

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[name](../interfaces/internal_.EndpointInterface.md#name)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:26

___

### number

• **number**: `undefined` \| [`EndpointNumber`](../modules/internal_.md#endpointnumber)

#### Implementation of

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[number](../interfaces/internal_.EndpointInterface.md#number)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:24

___

### structureChangedCallback

• `Private` **structureChangedCallback**: `any`

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:27

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:25

## Methods

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../interfaces/internal_.EndpointInterface.md) |

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[addChildEndpoint](../interfaces/internal_.EndpointInterface.md#addchildendpoint)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:52

___

### addClusterClient

▸ **addClusterClient**\<`F`, `A`, `C`, `E`\>(`cluster`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |
| `A` | extends [`Attributes`](../interfaces/internal_.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/internal_.Commands.md) |
| `E` | extends [`Events`](../interfaces/internal_.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterClientObj`](../modules/internal_.md#clusterclientobj)\<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[addClusterClient](../interfaces/internal_.EndpointInterface.md#addclusterclient)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:43

___

### addClusterServer

▸ **addClusterServer**\<`A`, `E`\>(`cluster`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/internal_.Attributes.md) |
| `E` | extends [`Events`](../interfaces/internal_.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/internal_.md#clusterserverobj)\<`A`, `E`\> |

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[addClusterServer](../interfaces/internal_.EndpointInterface.md#addclusterserver)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:42

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

matter.js/dist/esm/device/Endpoint.d.ts:40

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

matter.js/dist/esm/device/Endpoint.d.ts:41

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[close](../interfaces/internal_.EndpointInterface.md#close)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:38

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[determineUniqueID](../interfaces/internal_.EndpointInterface.md#determineuniqueid)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:56

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/internal_.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/internal_.Attributes.md), [`Commands`](../interfaces/internal_.Commands.md), [`Events`](../interfaces/internal_.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/internal_.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/internal_.Attributes.md), [`Commands`](../interfaces/internal_.Commands.md), [`Events`](../interfaces/internal_.Events.md)\>[]

#### Implementation of

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[getAllClusterClients](../interfaces/internal_.EndpointInterface.md#getallclusterclients)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:59

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/internal_.md#clusterserverobj)\<[`Attributes`](../interfaces/internal_.Attributes.md), [`Events`](../interfaces/internal_.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/internal_.md#clusterserverobj)\<[`Attributes`](../interfaces/internal_.Attributes.md), [`Events`](../interfaces/internal_.Events.md)\>[]

#### Implementation of

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[getAllClusterServers](../interfaces/internal_.EndpointInterface.md#getallclusterservers)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:58

___

### getChildEndpoint

▸ **getChildEndpoint**(`id`): `undefined` \| [`Endpoint`](internal_.Endpoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |

#### Returns

`undefined` \| [`Endpoint`](internal_.Endpoint.md)

#### Implementation of

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[getChildEndpoint](../interfaces/internal_.EndpointInterface.md#getchildendpoint)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:53

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](internal_.Endpoint.md)[]

#### Returns

[`Endpoint`](internal_.Endpoint.md)[]

#### Implementation of

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[getChildEndpoints](../interfaces/internal_.EndpointInterface.md#getchildendpoints)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:54

___

### getClusterClient

▸ **getClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/internal_.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/internal_.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/internal_.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/internal_.Commands.md) |
| `E` | extends [`Events`](../interfaces/internal_.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/internal_.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/internal_.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Implementation of

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[getClusterClient](../interfaces/internal_.EndpointInterface.md#getclusterclient)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:45

___

### getClusterClientById

▸ **getClusterClientById**(`clusterId`): `undefined` \| [`ClusterClientObj`](../modules/internal_.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/internal_.Attributes.md), [`Commands`](../interfaces/internal_.Commands.md), [`Events`](../interfaces/internal_.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/internal_.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/internal_.Attributes.md), [`Commands`](../interfaces/internal_.Commands.md), [`Events`](../interfaces/internal_.Events.md)\>

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:47

___

### getClusterServer

▸ **getClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/internal_.md#clusterserverobj)\<`A`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/internal_.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/internal_.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/internal_.Commands.md) |
| `E` | extends [`Events`](../interfaces/internal_.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/internal_.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/internal_.md#clusterserverobj)\<`A`, `E`\>

#### Implementation of

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[getClusterServer](../interfaces/internal_.EndpointInterface.md#getclusterserver)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:44

___

### getClusterServerById

▸ **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../modules/internal_.md#clusterserverobj)\<[`Attributes`](../interfaces/internal_.Attributes.md), [`Events`](../interfaces/internal_.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/internal_.md#clusterserverobj)\<[`Attributes`](../interfaces/internal_.Attributes.md), [`Events`](../interfaces/internal_.Events.md)\>

#### Implementation of

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[getClusterServerById](../interfaces/internal_.EndpointInterface.md#getclusterserverbyid)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:46

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/internal_.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/internal_.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:50

___

### getNumber

▸ **getNumber**(): [`EndpointNumber`](../modules/internal_.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/internal_.md#endpointnumber)

#### Implementation of

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[getNumber](../interfaces/internal_.EndpointInterface.md#getnumber)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:39

___

### hasClusterClient

▸ **hasClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/internal_.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/internal_.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/internal_.Commands.md) |
| `E` | extends [`Events`](../interfaces/internal_.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/internal_.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:49

___

### hasClusterServer

▸ **hasClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/internal_.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/internal_.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/internal_.Commands.md) |
| `E` | extends [`Events`](../interfaces/internal_.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/internal_.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Implementation of

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[hasClusterServer](../interfaces/internal_.EndpointInterface.md#hasclusterserver)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:48

___

### removeChildEndpoint

▸ **removeChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](internal_.Endpoint.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:55

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[removeFromStructure](../interfaces/internal_.EndpointInterface.md#removefromstructure)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:37

___

### setDeviceTypes

▸ **setDeviceTypes**(`deviceTypes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../interfaces/internal_.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]] |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:51

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

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[setStructureChangedCallback](../interfaces/internal_.EndpointInterface.md#setstructurechangedcallback)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:36

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/internal_.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/internal_.md#endpointnumber)[]

#### Implementation of

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[updatePartsList](../interfaces/internal_.EndpointInterface.md#updatepartslist)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:60

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/internal_.EndpointInterface.md).[verifyRequiredClusters](../interfaces/internal_.EndpointInterface.md#verifyrequiredclusters)

#### Defined in

matter.js/dist/esm/device/Endpoint.d.ts:57
