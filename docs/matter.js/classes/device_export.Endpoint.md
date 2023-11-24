[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device/export](../modules/device_export.md) / Endpoint

# Class: Endpoint

[device/export](../modules/device_export.md).Endpoint

## Hierarchy

- **`Endpoint`**

  ↳ [`Aggregator`](device_export.Aggregator.md)

  ↳ [`ComposedDevice`](device_export.ComposedDevice.md)

  ↳ [`PairedDevice`](device_export.PairedDevice.md)

  ↳ [`RootEndpoint`](device_export.RootEndpoint.md)

  ↳ [`Device`](device_export.Device.md)

## Table of contents

### Constructors

- [constructor](device_export.Endpoint.md#constructor)

### Properties

- [childEndpoints](device_export.Endpoint.md#childendpoints)
- [clusterClients](device_export.Endpoint.md#clusterclients)
- [clusterServers](device_export.Endpoint.md#clusterservers)
- [descriptorCluster](device_export.Endpoint.md#descriptorcluster)
- [deviceTypes](device_export.Endpoint.md#devicetypes)
- [id](device_export.Endpoint.md#id)
- [name](device_export.Endpoint.md#name)
- [structureChangedCallback](device_export.Endpoint.md#structurechangedcallback)
- [uniqueStorageKey](device_export.Endpoint.md#uniquestoragekey)

### Methods

- [addChildEndpoint](device_export.Endpoint.md#addchildendpoint)
- [addClusterClient](device_export.Endpoint.md#addclusterclient)
- [addClusterServer](device_export.Endpoint.md#addclusterserver)
- [addFixedLabel](device_export.Endpoint.md#addfixedlabel)
- [addUserLabel](device_export.Endpoint.md#adduserlabel)
- [destroy](device_export.Endpoint.md#destroy)
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
- [getId](device_export.Endpoint.md#getid)
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

• **new Endpoint**(`deviceTypes`, `options?`)

Create a new Endpoint instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]] | One or multiple DeviceTypeDefinitions of the endpoint |
| `options` | [`EndpointOptions`](../interfaces/device_export.EndpointOptions.md) | Options for the endpoint |

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:52](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L52)

## Properties

### childEndpoints

• `Private` `Readonly` **childEndpoints**: [`Endpoint`](device_export.Endpoint.md)[] = `[]`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:36](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L36)

___

### clusterClients

• `Private` `Readonly` **clusterClients**: `Map`<[`ClusterId`](../modules/datatype_export.md#clusterid), [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>\>

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:35](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L35)

___

### clusterServers

• `Private` `Readonly` **clusterServers**: `Map`<[`ClusterId`](../modules/datatype_export.md#clusterid), [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>\>

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:34](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L34)

___

### descriptorCluster

• `Private` **descriptorCluster**: [`ClusterServerObjForCluster`](../modules/cluster_export.md#clusterserverobjforcluster)<[`Definition`](../modules/cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `clientList`: [`FixedAttribute`](../modules/cluster_export.md#fixedattribute)<[`ClusterId`](../modules/datatype_export.md#clusterid)[], `any`\> ; `deviceTypeList`: [`FixedAttribute`](../modules/cluster_export.md#fixedattribute)<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `deviceType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`DeviceTypeId`](../modules/datatype_export.md#devicetypeid)\> ; `revision`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>[], `any`\> ; `partsList`: [`Attribute`](../modules/cluster_export.md#attribute)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[], `any`\> ; `serverList`: [`FixedAttribute`](../modules/cluster_export.md#fixedattribute)<[`ClusterId`](../modules/datatype_export.md#clusterid)[], `any`\>  } ; `id`: ``29`` = 0x1d; `name`: ``"Descriptor"`` = "Descriptor"; `revision`: ``1`` = 1 }\>\>

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:44](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L44)

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]]

One or multiple DeviceTypeDefinitions of the endpoint

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:53](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L53)

___

### id

• **id**: `undefined` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:37](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L37)

___

### name

• **name**: `string` = `""`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:39](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L39)

___

### structureChangedCallback

• `Private` **structureChangedCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:40](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L40)

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:38](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L38)

## Methods

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:256](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L256)

___

### addClusterClient

▸ **addClusterClient**<`F`, `A`, `C`, `E`\>(`cluster`): `void`

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
| `cluster` | [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:173](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L173)

___

### addClusterServer

▸ **addClusterServer**<`A`, `E`\>(`cluster`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:146](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L146)

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

[packages/matter.js/src/device/Endpoint.ts:106](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L106)

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

[packages/matter.js/src/device/Endpoint.ts:126](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L126)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:93](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L93)

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:283](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L283)

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:343](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L343)

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:339](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L339)

___

### getChildEndpoint

▸ **getChildEndpoint**(`id`): `undefined` \| [`Endpoint`](device_export.Endpoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |

#### Returns

`undefined` \| [`Endpoint`](device_export.Endpoint.md)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:265](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L265)

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](device_export.Endpoint.md)[]

#### Returns

[`Endpoint`](device_export.Endpoint.md)[]

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:269](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L269)

___

### getClusterClient

▸ **getClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:198](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L198)

___

### getClusterClientById

▸ **getClusterClientById**(`clusterId`): `undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:212](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L212)

___

### getClusterServer

▸ **getClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\>

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:183](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L183)

___

### getClusterServerById

▸ **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:208](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L208)

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:236](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L236)

___

### getId

▸ **getId**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:99](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L99)

___

### hasClusterClient

▸ **hasClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:226](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L226)

___

### hasClusterServer

▸ **hasClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:216](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L216)

___

### removeChildEndpoint

▸ `Protected` **removeChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:273](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L273)

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:85](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L85)

___

### setDeviceTypes

▸ **setDeviceTypes**(`deviceTypes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:240](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L240)

___

### setStructureChangedCallback

▸ **setStructureChangedCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:80](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L80)

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:347](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L347)

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:305](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/device/Endpoint.ts#L305)
