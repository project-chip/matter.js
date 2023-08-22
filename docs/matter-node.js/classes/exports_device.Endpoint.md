[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/device](../modules/exports_device.md) / Endpoint

# Class: Endpoint

[exports/device](../modules/exports_device.md).Endpoint

## Hierarchy

- **`Endpoint`**

  ↳ [`Aggregator`](exports_device.Aggregator.md)

  ↳ [`ComposedDevice`](exports_device.ComposedDevice.md)

  ↳ [`PairedDevice`](exports_device.PairedDevice.md)

  ↳ [`RootEndpoint`](exports_device.RootEndpoint.md)

  ↳ [`Device`](exports_device.Device.md)

## Table of contents

### Constructors

- [constructor](exports_device.Endpoint.md#constructor)

### Properties

- [childEndpoints](exports_device.Endpoint.md#childendpoints)
- [clusterClients](exports_device.Endpoint.md#clusterclients)
- [clusterServers](exports_device.Endpoint.md#clusterservers)
- [descriptorCluster](exports_device.Endpoint.md#descriptorcluster)
- [deviceTypes](exports_device.Endpoint.md#devicetypes)
- [id](exports_device.Endpoint.md#id)
- [name](exports_device.Endpoint.md#name)
- [structureChangedCallback](exports_device.Endpoint.md#structurechangedcallback)
- [uniqueStorageKey](exports_device.Endpoint.md#uniquestoragekey)

### Methods

- [addChildEndpoint](exports_device.Endpoint.md#addchildendpoint)
- [addClusterClient](exports_device.Endpoint.md#addclusterclient)
- [addClusterServer](exports_device.Endpoint.md#addclusterserver)
- [addFixedLabel](exports_device.Endpoint.md#addfixedlabel)
- [addUserLabel](exports_device.Endpoint.md#adduserlabel)
- [clearStructureChangedCallback](exports_device.Endpoint.md#clearstructurechangedcallback)
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
- [getId](exports_device.Endpoint.md#getid)
- [hasClusterClient](exports_device.Endpoint.md#hasclusterclient)
- [hasClusterServer](exports_device.Endpoint.md#hasclusterserver)
- [removeChildEndpoint](exports_device.Endpoint.md#removechildendpoint)
- [setDeviceTypes](exports_device.Endpoint.md#setdevicetypes)
- [setStructureChangedCallback](exports_device.Endpoint.md#setstructurechangedcallback)
- [updatePartsList](exports_device.Endpoint.md#updatepartslist)
- [verifyRequiredClusters](exports_device.Endpoint.md#verifyrequiredclusters)

## Constructors

### constructor

• **new Endpoint**(`deviceTypes`, `options?`)

Create a new Endpoint instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]] | One or multiple DeviceTypeDefinitions of the endpoint |
| `options?` | [`EndpointOptions`](../interfaces/exports_device.EndpointOptions.md) | Options for the endpoint |

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:34

## Properties

### childEndpoints

• `Private` `Readonly` **childEndpoints**: `any`

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:22

___

### clusterClients

• `Private` `Readonly` **clusterClients**: `any`

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:21

___

### clusterServers

• `Private` `Readonly` **clusterServers**: `any`

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:20

___

### descriptorCluster

• `Private` **descriptorCluster**: `any`

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:27

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:19

___

### id

• **id**: `undefined` \| [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:23

___

### name

• **name**: `string`

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:25

___

### structureChangedCallback

• `Private` **structureChangedCallback**: `any`

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:26

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:24

## Methods

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:50

___

### addClusterClient

▸ **addClusterClient**<`F`, `A`, `C`, `E`\>(`cluster`): `void`

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
| `cluster` | [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:41

___

### addClusterServer

▸ **addClusterServer**<`A`, `E`\>(`cluster`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `E`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:40

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

packages/matter.js/dist/cjs/device/Endpoint.d.ts:38

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

packages/matter.js/dist/cjs/device/Endpoint.d.ts:39

___

### clearStructureChangedCallback

▸ **clearStructureChangedCallback**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:36

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:54

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:57

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:56

___

### getChildEndpoint

▸ **getChildEndpoint**(`id`): `undefined` \| [`Endpoint`](exports_device.Endpoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |

#### Returns

`undefined` \| [`Endpoint`](exports_device.Endpoint.md)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:51

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](exports_device.Endpoint.md)[]

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:52

___

### getClusterClient

▸ **getClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:43

___

### getClusterClientById

▸ **getClusterClientById**(`clusterId`): `undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:45

___

### getClusterServer

▸ **getClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `E`\>

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:42

___

### getClusterServerById

▸ **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:44

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:48

___

### getId

▸ **getId**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:37

___

### hasClusterClient

▸ **hasClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:47

___

### hasClusterServer

▸ **hasClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:46

___

### removeChildEndpoint

▸ `Protected` **removeChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:53

___

### setDeviceTypes

▸ **setDeviceTypes**(`deviceTypes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]] |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:49

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

packages/matter.js/dist/cjs/device/Endpoint.d.ts:35

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:58

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:55
