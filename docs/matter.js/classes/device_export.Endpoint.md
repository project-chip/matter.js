[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device/export](../modules/device_export.md) / Endpoint

# Class: Endpoint

[device/export](../modules/device_export.md).Endpoint

The primary interface for Matter.js endpoint implementations.

TODO - this is a transitional interface that allows us to have multiple implementations of the legacy endpoint API

## Hierarchy

- **`Endpoint`**

  ↳ [`Aggregator`](device_export.Aggregator.md)

  ↳ [`ComposedDevice`](device_export.ComposedDevice.md)

  ↳ [`PairedDevice`](device_export.PairedDevice.md)

  ↳ [`RootEndpoint`](device_export.RootEndpoint.md)

  ↳ [`Device`](device_export.Device.md)

## Implements

- [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md)

## Table of contents

### Constructors

- [constructor](device_export.Endpoint.md#constructor)

### Properties

- [childEndpoints](device_export.Endpoint.md#childendpoints)
- [clusterClients](device_export.Endpoint.md#clusterclients)
- [clusterServers](device_export.Endpoint.md#clusterservers)
- [descriptorCluster](device_export.Endpoint.md#descriptorcluster)
- [deviceTypes](device_export.Endpoint.md#devicetypes)
- [name](device_export.Endpoint.md#name)
- [number](device_export.Endpoint.md#number)
- [structureChangedCallback](device_export.Endpoint.md#structurechangedcallback)
- [uniqueStorageKey](device_export.Endpoint.md#uniquestoragekey)

### Accessors

- [deviceType](device_export.Endpoint.md#devicetype)

### Methods

- [addChildEndpoint](device_export.Endpoint.md#addchildendpoint)
- [addClusterClient](device_export.Endpoint.md#addclusterclient)
- [addClusterServer](device_export.Endpoint.md#addclusterserver)
- [addFixedLabel](device_export.Endpoint.md#addfixedlabel)
- [addUserLabel](device_export.Endpoint.md#adduserlabel)
- [close](device_export.Endpoint.md#close)
- [determineUniqueID](device_export.Endpoint.md#determineuniqueid)
- [getAllClusterClients](device_export.Endpoint.md#getallclusterclients)
- [getAllClusterServers](device_export.Endpoint.md#getallclusterservers)
- [getChildEndpoint](device_export.Endpoint.md#getchildendpoint)
- [getChildEndpoints](device_export.Endpoint.md#getchildendpoints)
- [getClusterClient](device_export.Endpoint.md#getclusterclient)
- [getClusterClientById](device_export.Endpoint.md#getclusterclientbyid)
- [getClusterServer](device_export.Endpoint.md#getclusterserver)
- [getClusterServerById](device_export.Endpoint.md#getclusterserverbyid)
- [getDeviceTypes](device_export.Endpoint.md#getdevicetypes)
- [getNumber](device_export.Endpoint.md#getnumber)
- [hasClusterClient](device_export.Endpoint.md#hasclusterclient)
- [hasClusterServer](device_export.Endpoint.md#hasclusterserver)
- [removeChildEndpoint](device_export.Endpoint.md#removechildendpoint)
- [removeFromStructure](device_export.Endpoint.md#removefromstructure)
- [setDeviceTypes](device_export.Endpoint.md#setdevicetypes)
- [setStructureChangedCallback](device_export.Endpoint.md#setstructurechangedcallback)
- [updatePartsList](device_export.Endpoint.md#updatepartslist)
- [verifyRequiredClusters](device_export.Endpoint.md#verifyrequiredclusters)

## Constructors

### constructor

• **new Endpoint**(`deviceTypes`, `options?`): [`Endpoint`](device_export.Endpoint.md)

Create a new Endpoint instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../interfaces/device_export.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]] | One or multiple DeviceTypeDefinitions of the endpoint |
| `options` | [`EndpointOptions`](../interfaces/device_export.EndpointOptions.md) | Options for the endpoint |

#### Returns

[`Endpoint`](device_export.Endpoint.md)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:54](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L54)

## Properties

### childEndpoints

• `Private` `Readonly` **childEndpoints**: [`Endpoint`](device_export.Endpoint.md)[] = `[]`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:38](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L38)

___

### clusterClients

• `Private` `Readonly` **clusterClients**: `Map`\<[`ClusterId`](../modules/datatype_export.md#clusterid), [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>\>

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:37](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L37)

___

### clusterServers

• `Private` `Readonly` **clusterServers**: `Map`\<[`ClusterId`](../modules/datatype_export.md#clusterid), [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>\>

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:36](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L36)

___

### descriptorCluster

• `Private` **descriptorCluster**: [`ClusterServerObjForCluster`](../modules/cluster_export.md#clusterserverobjforcluster)\<[`Cluster`](../interfaces/cluster_export.Descriptor.Cluster.md)\>

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:46](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L46)

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/device_export.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

One or multiple DeviceTypeDefinitions of the endpoint

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:55](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L55)

___

### name

• **name**: `string` = `""`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[name](../interfaces/endpoint_export.EndpointInterface.md#name)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:41](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L41)

___

### number

• **number**: `undefined` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[number](../interfaces/endpoint_export.EndpointInterface.md#number)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:39](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L39)

___

### structureChangedCallback

• `Private` **structureChangedCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:42](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L42)

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:40](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L40)

## Accessors

### deviceType

• `get` **deviceType**(): [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)

#### Returns

[`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[deviceType](../interfaces/endpoint_export.EndpointInterface.md#devicetype)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:82](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L82)

## Methods

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) |

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[addChildEndpoint](../interfaces/endpoint_export.EndpointInterface.md#addchildendpoint)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:262](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L262)

___

### addClusterClient

▸ **addClusterClient**\<`F`, `A`, `C`, `E`\>(`cluster`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[addClusterClient](../interfaces/endpoint_export.EndpointInterface.md#addclusterclient)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:179](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L179)

___

### addClusterServer

▸ **addClusterServer**\<`A`, `E`\>(`cluster`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\> |

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[addClusterServer](../interfaces/endpoint_export.EndpointInterface.md#addclusterserver)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:152](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L152)

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

[packages/matter.js/src/device/Endpoint.ts:112](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L112)

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

[packages/matter.js/src/device/Endpoint.ts:132](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L132)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[close](../interfaces/endpoint_export.EndpointInterface.md#close)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:99](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L99)

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[determineUniqueID](../interfaces/endpoint_export.EndpointInterface.md#determineuniqueid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:296](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L296)

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[getAllClusterClients](../interfaces/endpoint_export.EndpointInterface.md#getallclusterclients)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:356](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L356)

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[getAllClusterServers](../interfaces/endpoint_export.EndpointInterface.md#getallclusterservers)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:352](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L352)

___

### getChildEndpoint

▸ **getChildEndpoint**(`id`): `undefined` \| [`Endpoint`](device_export.Endpoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |

#### Returns

`undefined` \| [`Endpoint`](device_export.Endpoint.md)

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[getChildEndpoint](../interfaces/endpoint_export.EndpointInterface.md#getchildendpoint)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:278](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L278)

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](device_export.Endpoint.md)[]

#### Returns

[`Endpoint`](device_export.Endpoint.md)[]

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[getChildEndpoints](../interfaces/endpoint_export.EndpointInterface.md#getchildendpoints)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:282](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L282)

___

### getClusterClient

▸ **getClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[getClusterClient](../interfaces/endpoint_export.EndpointInterface.md#getclusterclient)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:204](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L204)

___

### getClusterClientById

▸ **getClusterClientById**(`clusterId`): `undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:218](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L218)

___

### getClusterServer

▸ **getClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\>

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[getClusterServer](../interfaces/endpoint_export.EndpointInterface.md#getclusterserver)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:189](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L189)

___

### getClusterServerById

▸ **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[getClusterServerById](../interfaces/endpoint_export.EndpointInterface.md#getclusterserverbyid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:214](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L214)

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/device_export.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/device_export.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:242](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L242)

___

### getNumber

▸ **getNumber**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[getNumber](../interfaces/endpoint_export.EndpointInterface.md#getnumber)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:105](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L105)

___

### hasClusterClient

▸ **hasClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:232](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L232)

___

### hasClusterServer

▸ **hasClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[hasClusterServer](../interfaces/endpoint_export.EndpointInterface.md#hasclusterserver)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:222](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L222)

___

### removeChildEndpoint

▸ **removeChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:286](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L286)

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[removeFromStructure](../interfaces/endpoint_export.EndpointInterface.md#removefromstructure)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:91](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L91)

___

### setDeviceTypes

▸ **setDeviceTypes**(`deviceTypes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../interfaces/device_export.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:246](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L246)

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

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[setStructureChangedCallback](../interfaces/endpoint_export.EndpointInterface.md#setstructurechangedcallback)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:86](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L86)

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[updatePartsList](../interfaces/endpoint_export.EndpointInterface.md#updatepartslist)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:360](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L360)

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Implementation of

[EndpointInterface](../interfaces/endpoint_export.EndpointInterface.md).[verifyRequiredClusters](../interfaces/endpoint_export.EndpointInterface.md#verifyrequiredclusters)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:318](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/device/Endpoint.ts#L318)
