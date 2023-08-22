[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Endpoint

# Class: Endpoint

[<internal>](../modules/internal_.md).Endpoint

## Table of contents

### Constructors

- [constructor](internal_.Endpoint.md#constructor)

### Properties

- [childEndpoints](internal_.Endpoint.md#childendpoints)
- [clusterClients](internal_.Endpoint.md#clusterclients)
- [clusterServers](internal_.Endpoint.md#clusterservers)
- [descriptorCluster](internal_.Endpoint.md#descriptorcluster)
- [deviceTypes](internal_.Endpoint.md#devicetypes)
- [id](internal_.Endpoint.md#id)
- [name](internal_.Endpoint.md#name)
- [structureChangedCallback](internal_.Endpoint.md#structurechangedcallback)
- [uniqueStorageKey](internal_.Endpoint.md#uniquestoragekey)

### Methods

- [addChildEndpoint](internal_.Endpoint.md#addchildendpoint)
- [addClusterClient](internal_.Endpoint.md#addclusterclient)
- [addClusterServer](internal_.Endpoint.md#addclusterserver)
- [addFixedLabel](internal_.Endpoint.md#addfixedlabel)
- [addUserLabel](internal_.Endpoint.md#adduserlabel)
- [clearStructureChangedCallback](internal_.Endpoint.md#clearstructurechangedcallback)
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
- [getId](internal_.Endpoint.md#getid)
- [hasClusterClient](internal_.Endpoint.md#hasclusterclient)
- [hasClusterServer](internal_.Endpoint.md#hasclusterserver)
- [removeChildEndpoint](internal_.Endpoint.md#removechildendpoint)
- [setDeviceTypes](internal_.Endpoint.md#setdevicetypes)
- [setStructureChangedCallback](internal_.Endpoint.md#setstructurechangedcallback)
- [updatePartsList](internal_.Endpoint.md#updatepartslist)
- [verifyRequiredClusters](internal_.Endpoint.md#verifyrequiredclusters)

## Constructors

### constructor

• **new Endpoint**(`deviceTypes`, `options?`)

Create a new Endpoint instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../modules/internal_.md#devicetypedefinition), ...DeviceTypeDefinition[]] | One or multiple DeviceTypeDefinitions of the endpoint |
| `options?` | [`EndpointOptions`](../interfaces/internal_.EndpointOptions.md) | Options for the endpoint |

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:34

## Properties

### childEndpoints

• `Private` `Readonly` **childEndpoints**: `any`

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:22

___

### clusterClients

• `Private` `Readonly` **clusterClients**: `any`

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:21

___

### clusterServers

• `Private` `Readonly` **clusterServers**: `any`

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:20

___

### descriptorCluster

• `Private` **descriptorCluster**: `any`

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:27

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../modules/internal_.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:19

___

### id

• **id**: `undefined` \| [`EndpointNumber`](../modules/internal_.md#endpointnumber)

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:23

___

### name

• **name**: `string`

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:25

___

### structureChangedCallback

• `Private` **structureChangedCallback**: `any`

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:26

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:24

## Methods

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](internal_.Endpoint.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:50

___

### addClusterClient

▸ **addClusterClient**<`F`, `A`, `C`, `E`\>(`cluster`): `void`

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
| `cluster` | [`ClusterClientObj`](../modules/internal_.md#clusterclientobj)<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:41

___

### addClusterServer

▸ **addClusterServer**<`A`, `E`\>(`cluster`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/internal_.Attributes.md) |
| `E` | extends [`Events`](../interfaces/internal_.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/internal_.md#clusterserverobj)<`A`, `E`\> |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:40

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

matter.js/dist/cjs/device/Endpoint.d.ts:38

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

matter.js/dist/cjs/device/Endpoint.d.ts:39

___

### clearStructureChangedCallback

▸ **clearStructureChangedCallback**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:36

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:54

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/internal_.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/internal_.Attributes.md), [`Commands`](../interfaces/internal_.Commands.md), [`Events`](../interfaces/internal_.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/internal_.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/internal_.Attributes.md), [`Commands`](../interfaces/internal_.Commands.md), [`Events`](../interfaces/internal_.Events.md)\>[]

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:57

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/internal_.md#clusterserverobj)<[`Attributes`](../interfaces/internal_.Attributes.md), [`Events`](../interfaces/internal_.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/internal_.md#clusterserverobj)<[`Attributes`](../interfaces/internal_.Attributes.md), [`Events`](../interfaces/internal_.Events.md)\>[]

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:56

___

### getChildEndpoint

▸ **getChildEndpoint**(`id`): `undefined` \| [`Endpoint`](internal_.Endpoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |

#### Returns

`undefined` \| [`Endpoint`](internal_.Endpoint.md)

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:51

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](internal_.Endpoint.md)[]

#### Returns

[`Endpoint`](internal_.Endpoint.md)[]

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:52

___

### getClusterClient

▸ **getClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/internal_.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/internal_.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/internal_.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/internal_.Commands.md) |
| `E` | extends [`Events`](../interfaces/internal_.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/internal_.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/internal_.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:43

___

### getClusterClientById

▸ **getClusterClientById**(`clusterId`): `undefined` \| [`ClusterClientObj`](../modules/internal_.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/internal_.Attributes.md), [`Commands`](../interfaces/internal_.Commands.md), [`Events`](../interfaces/internal_.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/internal_.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/internal_.Attributes.md), [`Commands`](../interfaces/internal_.Commands.md), [`Events`](../interfaces/internal_.Events.md)\>

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:45

___

### getClusterServer

▸ **getClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/internal_.md#clusterserverobj)<`A`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/internal_.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/internal_.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/internal_.Commands.md) |
| `E` | extends [`Events`](../interfaces/internal_.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/internal_.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/internal_.md#clusterserverobj)<`A`, `E`\>

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:42

___

### getClusterServerById

▸ **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../modules/internal_.md#clusterserverobj)<[`Attributes`](../interfaces/internal_.Attributes.md), [`Events`](../interfaces/internal_.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/internal_.md#clusterserverobj)<[`Attributes`](../interfaces/internal_.Attributes.md), [`Events`](../interfaces/internal_.Events.md)\>

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:44

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../modules/internal_.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../modules/internal_.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:48

___

### getId

▸ **getId**(): [`EndpointNumber`](../modules/internal_.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/internal_.md#endpointnumber)

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:37

___

### hasClusterClient

▸ **hasClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/internal_.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/internal_.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/internal_.Commands.md) |
| `E` | extends [`Events`](../interfaces/internal_.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/internal_.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:47

___

### hasClusterServer

▸ **hasClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/internal_.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/internal_.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/internal_.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/internal_.Commands.md) |
| `E` | extends [`Events`](../interfaces/internal_.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/internal_.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:46

___

### removeChildEndpoint

▸ `Protected` **removeChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](internal_.Endpoint.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:53

___

### setDeviceTypes

▸ **setDeviceTypes**(`deviceTypes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../modules/internal_.md#devicetypedefinition), ...DeviceTypeDefinition[]] |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:49

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

matter.js/dist/cjs/device/Endpoint.d.ts:35

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/internal_.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/internal_.md#endpointnumber)[]

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:58

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/device/Endpoint.d.ts:55
