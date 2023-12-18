[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device/export](../modules/device_export.md) / RootEndpoint

# Class: RootEndpoint

[device/export](../modules/device_export.md).RootEndpoint

Root endpoint of a device. This is used internally and not needed to be instanced by the user.

## Hierarchy

- [`Endpoint`](device_export.Endpoint.md)

  ↳ **`RootEndpoint`**

## Table of contents

### Constructors

- [constructor](device_export.RootEndpoint.md#constructor)

### Properties

- [deviceType](device_export.RootEndpoint.md#devicetype)
- [deviceTypes](device_export.RootEndpoint.md#devicetypes)
- [id](device_export.RootEndpoint.md#id)
- [name](device_export.RootEndpoint.md#name)
- [uniqueStorageKey](device_export.RootEndpoint.md#uniquestoragekey)

### Methods

- [addChildEndpoint](device_export.RootEndpoint.md#addchildendpoint)
- [addClusterClient](device_export.RootEndpoint.md#addclusterclient)
- [addClusterServer](device_export.RootEndpoint.md#addclusterserver)
- [addFixedLabel](device_export.RootEndpoint.md#addfixedlabel)
- [addRootClusterClient](device_export.RootEndpoint.md#addrootclusterclient)
- [addUserLabel](device_export.RootEndpoint.md#adduserlabel)
- [destroy](device_export.RootEndpoint.md#destroy)
- [determineUniqueID](device_export.RootEndpoint.md#determineuniqueid)
- [getAllClusterClients](device_export.RootEndpoint.md#getallclusterclients)
- [getAllClusterServers](device_export.RootEndpoint.md#getallclusterservers)
- [getChildEndpoint](device_export.RootEndpoint.md#getchildendpoint)
- [getChildEndpoints](device_export.RootEndpoint.md#getchildendpoints)
- [getClusterClient](device_export.RootEndpoint.md#getclusterclient)
- [getClusterClientById](device_export.RootEndpoint.md#getclusterclientbyid)
- [getClusterServer](device_export.RootEndpoint.md#getclusterserver)
- [getClusterServerById](device_export.RootEndpoint.md#getclusterserverbyid)
- [getDeviceTypes](device_export.RootEndpoint.md#getdevicetypes)
- [getId](device_export.RootEndpoint.md#getid)
- [getRootClusterClient](device_export.RootEndpoint.md#getrootclusterclient)
- [getRootClusterServer](device_export.RootEndpoint.md#getrootclusterserver)
- [hasClusterClient](device_export.RootEndpoint.md#hasclusterclient)
- [hasClusterServer](device_export.RootEndpoint.md#hasclusterserver)
- [removeChildEndpoint](device_export.RootEndpoint.md#removechildendpoint)
- [removeFromStructure](device_export.RootEndpoint.md#removefromstructure)
- [setDeviceTypes](device_export.RootEndpoint.md#setdevicetypes)
- [setStructureChangedCallback](device_export.RootEndpoint.md#setstructurechangedcallback)
- [updatePartsList](device_export.RootEndpoint.md#updatepartslist)
- [verifyRequiredClusters](device_export.RootEndpoint.md#verifyrequiredclusters)

## Constructors

### constructor

• **new RootEndpoint**(): [`RootEndpoint`](device_export.RootEndpoint.md)

Create a new RootEndpoint instance. This is automatically instanced by the CommissioningServer class.

#### Returns

[`RootEndpoint`](device_export.RootEndpoint.md)

#### Overrides

[Endpoint](device_export.Endpoint.md).[constructor](device_export.Endpoint.md#constructor)

#### Defined in

[packages/matter.js/src/device/Device.ts:112](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Device.ts#L112)

## Properties

### deviceType

• `Readonly` **deviceType**: [`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)

#### Defined in

[packages/matter.js/src/device/Device.ts:107](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Device.ts#L107)

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]]

One or multiple DeviceTypeDefinitions of the endpoint

#### Inherited from

[Endpoint](device_export.Endpoint.md).[deviceTypes](device_export.Endpoint.md#devicetypes)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:53](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L53)

___

### id

• **id**: `undefined` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[Endpoint](device_export.Endpoint.md).[id](device_export.Endpoint.md#id)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:37](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L37)

___

### name

• **name**: `string` = `""`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[name](device_export.Endpoint.md#name)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:39](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L39)

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[uniqueStorageKey](device_export.Endpoint.md#uniquestoragekey)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:38](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L38)

## Methods

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[addChildEndpoint](device_export.Endpoint.md#addchildendpoint)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:256](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L256)

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

#### Inherited from

[Endpoint](device_export.Endpoint.md).[addClusterClient](device_export.Endpoint.md#addclusterclient)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:173](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L173)

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

#### Inherited from

[Endpoint](device_export.Endpoint.md).[addClusterServer](device_export.Endpoint.md#addclusterserver)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:146](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L146)

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

#### Inherited from

[Endpoint](device_export.Endpoint.md).[addFixedLabel](device_export.Endpoint.md#addfixedlabel)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:106](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L106)

___

### addRootClusterClient

▸ **addRootClusterClient**\<`F`, `A`, `C`, `E`\>(`cluster`): `void`

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
| `cluster` | [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\> | ClusterClient object to add |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/Device.ts:137](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Device.ts#L137)

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

#### Inherited from

[Endpoint](device_export.Endpoint.md).[addUserLabel](device_export.Endpoint.md#adduserlabel)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:126](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L126)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[destroy](device_export.Endpoint.md#destroy)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:93](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L93)

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[determineUniqueID](device_export.Endpoint.md#determineuniqueid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:283](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L283)

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getAllClusterClients](device_export.Endpoint.md#getallclusterclients)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:343](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L343)

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getAllClusterServers](device_export.Endpoint.md#getallclusterservers)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:339](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L339)

___

### getChildEndpoint

▸ **getChildEndpoint**(`id`): `undefined` \| [`Endpoint`](device_export.Endpoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |

#### Returns

`undefined` \| [`Endpoint`](device_export.Endpoint.md)

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getChildEndpoint](device_export.Endpoint.md#getchildendpoint)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:265](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L265)

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](device_export.Endpoint.md)[]

#### Returns

[`Endpoint`](device_export.Endpoint.md)[]

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getChildEndpoints](device_export.Endpoint.md#getchildendpoints)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:269](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L269)

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
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getClusterClient](device_export.Endpoint.md#getclusterclient)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:198](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L198)

___

### getClusterClientById

▸ **getClusterClientById**(`clusterId`): `undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getClusterClientById](device_export.Endpoint.md#getclusterclientbyid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:212](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L212)

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
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\>

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getClusterServer](device_export.Endpoint.md#getclusterserver)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:183](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L183)

___

### getClusterServerById

▸ **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getClusterServerById](device_export.Endpoint.md#getclusterserverbyid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:208](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L208)

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getDeviceTypes](device_export.Endpoint.md#getdevicetypes)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:236](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L236)

___

### getId

▸ **getId**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getId](device_export.Endpoint.md#getid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:99](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L99)

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
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Defined in

[packages/matter.js/src/device/Device.ts:148](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Device.ts#L148)

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
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\>

#### Defined in

[packages/matter.js/src/device/Device.ts:122](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Device.ts#L122)

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
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[hasClusterClient](device_export.Endpoint.md#hasclusterclient)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:226](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L226)

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
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[hasClusterServer](device_export.Endpoint.md#hasclusterserver)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:216](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L216)

___

### removeChildEndpoint

▸ **removeChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[removeChildEndpoint](device_export.Endpoint.md#removechildendpoint)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:273](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L273)

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[removeFromStructure](device_export.Endpoint.md#removefromstructure)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:85](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L85)

___

### setDeviceTypes

▸ **setDeviceTypes**(`deviceTypes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]] |

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[setDeviceTypes](device_export.Endpoint.md#setdevicetypes)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:240](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L240)

___

### setStructureChangedCallback

▸ **setStructureChangedCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[setStructureChangedCallback](device_export.Endpoint.md#setstructurechangedcallback)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:80](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L80)

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Inherited from

[Endpoint](device_export.Endpoint.md).[updatePartsList](device_export.Endpoint.md#updatepartslist)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:347](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L347)

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[verifyRequiredClusters](device_export.Endpoint.md#verifyrequiredclusters)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:305](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/device/Endpoint.ts#L305)
