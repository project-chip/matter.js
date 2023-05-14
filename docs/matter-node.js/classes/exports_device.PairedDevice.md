[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/device](../modules/exports_device.md) / PairedDevice

# Class: PairedDevice

[exports/device](../modules/exports_device.md).PairedDevice

Temporary used device class for paired devices until we added a layer to choose the right specialized device class
based on the device classes and features of the paired device

## Hierarchy

- [`Endpoint`](exports_device.Endpoint.md)

  ↳ **`PairedDevice`**

## Table of contents

### Constructors

- [constructor](exports_device.PairedDevice.md#constructor)

### Properties

- [declineAddingMoreClusters](exports_device.PairedDevice.md#declineaddingmoreclusters)
- [deviceTypes](exports_device.PairedDevice.md#devicetypes)
- [id](exports_device.PairedDevice.md#id)
- [name](exports_device.PairedDevice.md#name)

### Methods

- [addChildEndpoint](exports_device.PairedDevice.md#addchildendpoint)
- [addClusterClient](exports_device.PairedDevice.md#addclusterclient)
- [addClusterServer](exports_device.PairedDevice.md#addclusterserver)
- [addFixedLabel](exports_device.PairedDevice.md#addfixedlabel)
- [addUserLabel](exports_device.PairedDevice.md#adduserlabel)
- [ensureEndpointIds](exports_device.PairedDevice.md#ensureendpointids)
- [findHighestEndpointId](exports_device.PairedDevice.md#findhighestendpointid)
- [getAllClusterClients](exports_device.PairedDevice.md#getallclusterclients)
- [getAllClusterServers](exports_device.PairedDevice.md#getallclusterservers)
- [getChildEndpoint](exports_device.PairedDevice.md#getchildendpoint)
- [getChildEndpoints](exports_device.PairedDevice.md#getchildendpoints)
- [getClusterClient](exports_device.PairedDevice.md#getclusterclient)
- [getClusterClientById](exports_device.PairedDevice.md#getclusterclientbyid)
- [getClusterServer](exports_device.PairedDevice.md#getclusterserver)
- [getClusterServerById](exports_device.PairedDevice.md#getclusterserverbyid)
- [getDeviceTypes](exports_device.PairedDevice.md#getdevicetypes)
- [getId](exports_device.PairedDevice.md#getid)
- [getStructure](exports_device.PairedDevice.md#getstructure)
- [hasClusterClient](exports_device.PairedDevice.md#hasclusterclient)
- [hasClusterServer](exports_device.PairedDevice.md#hasclusterserver)
- [setDeviceTypes](exports_device.PairedDevice.md#setdevicetypes)
- [verifyRequiredClusters](exports_device.PairedDevice.md#verifyrequiredclusters)

## Constructors

### constructor

• **new PairedDevice**(`definition`, `clusters`, `endpointId`)

Create a new PairedDevice instance. All data are automatically parsed from the paired device!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `definition` | [`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition)\> | DeviceTypeDefinitions of the paired device as reported by the device |
| `clusters` | `undefined` \| ([`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\> \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>)[] | Clusters of the paired device as reported by the device |
| `endpointId` | `number` | Endpoint ID of the paired device as reported by the device |

#### Overrides

[Endpoint](exports_device.Endpoint.md).[constructor](exports_device.Endpoint.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:27

## Properties

### declineAddingMoreClusters

• `Private` **declineAddingMoreClusters**: `any`

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:19

___

### deviceTypes

• `Protected` **deviceTypes**: [`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition)\>

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[deviceTypes](exports_device.Endpoint.md#devicetypes)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:17

___

### id

• **id**: `undefined` \| `number`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[id](exports_device.Endpoint.md#id)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:21

___

### name

• **name**: `string`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[name](exports_device.Endpoint.md#name)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:22

## Methods

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`void`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[addChildEndpoint](exports_device.Endpoint.md#addchildendpoint)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:38

___

### addClusterClient

▸ **addClusterClient**<`A`, `C`\>(`cluster`): `void`

**`Deprecated`**

PairedDevice does not support adding additional clusters

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`A`, `C`\> |

#### Returns

`void`

#### Overrides

[Endpoint](exports_device.Endpoint.md).[addClusterClient](exports_device.Endpoint.md#addclusterclient)

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:35

___

### addClusterServer

▸ **addClusterServer**<`A`, `C`\>(`cluster`): `void`

**`Deprecated`**

PairedDevice does not support adding additional clusters

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `C`\> |

#### Returns

`void`

#### Overrides

[Endpoint](exports_device.Endpoint.md).[addClusterServer](exports_device.Endpoint.md#addclusterserver)

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:31

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

[Endpoint](exports_device.Endpoint.md).[addFixedLabel](exports_device.Endpoint.md#addfixedlabel)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:26

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

[Endpoint](exports_device.Endpoint.md).[addUserLabel](exports_device.Endpoint.md#adduserlabel)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:27

___

### ensureEndpointIds

▸ **ensureEndpointIds**(`nextEndpointId`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextEndpointId` | `number` |

#### Returns

`number`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[ensureEndpointIds](exports_device.Endpoint.md#ensureendpointids)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:42

___

### findHighestEndpointId

▸ **findHighestEndpointId**(): `number`

#### Returns

`number`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[findHighestEndpointId](exports_device.Endpoint.md#findhighestendpointid)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:41

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>[]

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getAllClusterClients](exports_device.Endpoint.md#getallclusterclients)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:45

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>[]

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getAllClusterServers](exports_device.Endpoint.md#getallclusterservers)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:44

___

### getChildEndpoint

▸ **getChildEndpoint**(`id`): `undefined` \| [`Endpoint`](exports_device.Endpoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| [`Endpoint`](exports_device.Endpoint.md)

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getChildEndpoint](exports_device.Endpoint.md#getchildendpoint)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:39

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](exports_device.Endpoint.md)[]

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getChildEndpoints](exports_device.Endpoint.md#getchildendpoints)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:40

___

### getClusterClient

▸ **getClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`, `interactionClient?`): `undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`A`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |
| `interactionClient?` | [`InteractionClient`](exports_interaction.InteractionClient.md) |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`A`, `C`\>

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getClusterClient](exports_device.Endpoint.md#getclusterclient)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:31

___

### getClusterClientById

▸ **getClusterClientById**(`clusterId`): `undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | `number` |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getClusterClientById](exports_device.Endpoint.md#getclusterclientbyid)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:33

___

### getClusterServer

▸ **getClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `C`\>

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getClusterServer](exports_device.Endpoint.md#getclusterserver)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:30

___

### getClusterServerById

▸ **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | `number` |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getClusterServerById](exports_device.Endpoint.md#getclusterserverbyid)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:32

___

### getDeviceTypes

▸ **getDeviceTypes**(): [`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition)\>

#### Returns

[`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition)\>

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getDeviceTypes](exports_device.Endpoint.md#getdevicetypes)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:36

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getId](exports_device.Endpoint.md#getid)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:25

___

### getStructure

▸ **getStructure**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `attributePaths` | [`AttributePath`](../interfaces/exports_interaction.AttributePath.md)[] |
| `attributes` | `Map`<`string`, [`AttributeServer`](exports_cluster.AttributeServer.md)<`any`\>\> |
| `commandPaths` | [`CommandPath`](../interfaces/exports_interaction.CommandPath.md)[] |
| `commands` | `Map`<`string`, [`CommandServer`](exports_cluster.CommandServer.md)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>\> |
| `endpoints` | `Map`<`number`, [`Endpoint`](exports_device.Endpoint.md)\> |
| `partsList` | `any` |

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getStructure](exports_device.Endpoint.md#getstructure)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:46

___

### hasClusterClient

▸ **hasClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[hasClusterClient](exports_device.Endpoint.md#hasclusterclient)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:35

___

### hasClusterServer

▸ **hasClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[hasClusterServer](exports_device.Endpoint.md#hasclusterserver)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:34

___

### setDeviceTypes

▸ **setDeviceTypes**(`deviceTypes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceTypes` | [`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition)\> |

#### Returns

`void`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[setDeviceTypes](exports_device.Endpoint.md#setdevicetypes)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:37

___

### verifyRequiredClusters

▸ `Protected` **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[verifyRequiredClusters](exports_device.Endpoint.md#verifyrequiredclusters)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:43
