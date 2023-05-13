[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device](../modules/device.md) / PairedDevice

# Class: PairedDevice

[device](../modules/device.md).PairedDevice

Temporary used device class for paired devices until we added a layer to choose the right specialized device class
based on the device classes and features of the paired device

## Hierarchy

- [`Endpoint`](device.Endpoint.md)

  ↳ **`PairedDevice`**

## Table of contents

### Constructors

- [constructor](device.PairedDevice.md#constructor)

### Properties

- [declineAddingMoreClusters](device.PairedDevice.md#declineaddingmoreclusters)
- [deviceTypes](device.PairedDevice.md#devicetypes)
- [id](device.PairedDevice.md#id)
- [name](device.PairedDevice.md#name)

### Methods

- [addChildEndpoint](device.PairedDevice.md#addchildendpoint)
- [addClusterClient](device.PairedDevice.md#addclusterclient)
- [addClusterServer](device.PairedDevice.md#addclusterserver)
- [addFixedLabel](device.PairedDevice.md#addfixedlabel)
- [addUserLabel](device.PairedDevice.md#adduserlabel)
- [ensureEndpointIds](device.PairedDevice.md#ensureendpointids)
- [findHighestEndpointId](device.PairedDevice.md#findhighestendpointid)
- [getAllClusterClients](device.PairedDevice.md#getallclusterclients)
- [getAllClusterServers](device.PairedDevice.md#getallclusterservers)
- [getChildEndpoint](device.PairedDevice.md#getchildendpoint)
- [getChildEndpoints](device.PairedDevice.md#getchildendpoints)
- [getClusterClient](device.PairedDevice.md#getclusterclient)
- [getClusterClientById](device.PairedDevice.md#getclusterclientbyid)
- [getClusterServer](device.PairedDevice.md#getclusterserver)
- [getClusterServerById](device.PairedDevice.md#getclusterserverbyid)
- [getDeviceTypes](device.PairedDevice.md#getdevicetypes)
- [getId](device.PairedDevice.md#getid)
- [getStructure](device.PairedDevice.md#getstructure)
- [hasClusterClient](device.PairedDevice.md#hasclusterclient)
- [hasClusterServer](device.PairedDevice.md#hasclusterserver)
- [setDeviceTypes](device.PairedDevice.md#setdevicetypes)
- [verifyRequiredClusters](device.PairedDevice.md#verifyrequiredclusters)

## Constructors

### constructor

• **new PairedDevice**(`definition`, `clusters?`, `endpointId`)

Create a new PairedDevice instance. All data are automatically parsed from the paired device!

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `definition` | [`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/device.md#devicetypedefinition)\> | `undefined` | DeviceTypeDefinitions of the paired device as reported by the device |
| `clusters` | ([`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\> \| [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>)[] | `[]` | Clusters of the paired device as reported by the device |
| `endpointId` | `number` | `undefined` | Endpoint ID of the paired device as reported by the device |

#### Overrides

[Endpoint](device.Endpoint.md).[constructor](device.Endpoint.md#constructor)

#### Defined in

[packages/matter.js/src/device/Device.ts:31](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Device.ts#L31)

## Properties

### declineAddingMoreClusters

• `Private` **declineAddingMoreClusters**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/device/Device.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Device.ts#L23)

___

### deviceTypes

• `Protected` **deviceTypes**: [`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/device.md#devicetypedefinition)\>

#### Inherited from

[Endpoint](device.Endpoint.md).[deviceTypes](device.Endpoint.md#devicetypes)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L35)

___

### id

• **id**: `undefined` \| `number`

#### Inherited from

[Endpoint](device.Endpoint.md).[id](device.Endpoint.md#id)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:29](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L29)

___

### name

• **name**: `string`

#### Inherited from

[Endpoint](device.Endpoint.md).[name](device.Endpoint.md#name)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L30)

## Methods

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device.Endpoint.md) |

#### Returns

`void`

#### Inherited from

[Endpoint](device.Endpoint.md).[addChildEndpoint](device.Endpoint.md#addchildendpoint)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:167](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L167)

___

### addClusterClient

▸ **addClusterClient**<`A`, `C`\>(`cluster`): `void`

**`Deprecated`**

PairedDevice does not support adding additional clusters

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<`A`, `C`\> |

#### Returns

`void`

#### Overrides

[Endpoint](device.Endpoint.md).[addClusterClient](device.Endpoint.md#addclusterclient)

#### Defined in

[packages/matter.js/src/device/Device.ts:53](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Device.ts#L53)

___

### addClusterServer

▸ **addClusterServer**<`A`, `C`\>(`cluster`): `void`

**`Deprecated`**

PairedDevice does not support adding additional clusters

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<`A`, `C`\> |

#### Returns

`void`

#### Overrides

[Endpoint](device.Endpoint.md).[addClusterServer](device.Endpoint.md#addclusterserver)

#### Defined in

[packages/matter.js/src/device/Device.ts:43](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Device.ts#L43)

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

[Endpoint](device.Endpoint.md).[addFixedLabel](device.Endpoint.md#addfixedlabel)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:76](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L76)

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

[Endpoint](device.Endpoint.md).[addUserLabel](device.Endpoint.md#adduserlabel)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:88](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L88)

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

[Endpoint](device.Endpoint.md).[ensureEndpointIds](device.Endpoint.md#ensureendpointids)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:193](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L193)

___

### findHighestEndpointId

▸ **findHighestEndpointId**(): `number`

#### Returns

`number`

#### Inherited from

[Endpoint](device.Endpoint.md).[findHighestEndpointId](device.Endpoint.md#findhighestendpointid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:179](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L179)

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>[]

#### Inherited from

[Endpoint](device.Endpoint.md).[getAllClusterClients](device.Endpoint.md#getallclusterclients)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:228](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L228)

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>[]

#### Inherited from

[Endpoint](device.Endpoint.md).[getAllClusterServers](device.Endpoint.md#getallclusterservers)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:224](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L224)

___

### getChildEndpoint

▸ **getChildEndpoint**(`id`): `undefined` \| [`Endpoint`](device.Endpoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| [`Endpoint`](device.Endpoint.md)

#### Inherited from

[Endpoint](device.Endpoint.md).[getChildEndpoint](device.Endpoint.md#getchildendpoint)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:171](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L171)

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](device.Endpoint.md)[]

#### Returns

[`Endpoint`](device.Endpoint.md)[]

#### Inherited from

[Endpoint](device.Endpoint.md).[getChildEndpoints](device.Endpoint.md#getchildendpoints)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:175](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L175)

___

### getClusterClient

▸ **getClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`, `interactionClient?`): `undefined` \| [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<`A`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |
| `interactionClient?` | [`InteractionClient`](protocol_interaction.InteractionClient.md) |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<`A`, `C`\>

#### Inherited from

[Endpoint](device.Endpoint.md).[getClusterClient](device.Endpoint.md#getclusterclient)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:122](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L122)

___

### getClusterClientById

▸ **getClusterClientById**(`clusterId`): `undefined` \| [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | `number` |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>

#### Inherited from

[Endpoint](device.Endpoint.md).[getClusterClientById](device.Endpoint.md#getclusterclientbyid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:137](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L137)

___

### getClusterServer

▸ **getClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<`A`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<`A`, `C`\>

#### Inherited from

[Endpoint](device.Endpoint.md).[getClusterServer](device.Endpoint.md#getclusterserver)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:113](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L113)

___

### getClusterServerById

▸ **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | `number` |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>

#### Inherited from

[Endpoint](device.Endpoint.md).[getClusterServerById](device.Endpoint.md#getclusterserverbyid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:133](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L133)

___

### getDeviceTypes

▸ **getDeviceTypes**(): [`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/device.md#devicetypedefinition)\>

#### Returns

[`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/device.md#devicetypedefinition)\>

#### Inherited from

[Endpoint](device.Endpoint.md).[getDeviceTypes](device.Endpoint.md#getdevicetypes)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:153](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L153)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Inherited from

[Endpoint](device.Endpoint.md).[getId](device.Endpoint.md#getid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:69](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L69)

___

### getStructure

▸ **getStructure**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `attributePaths` | [`AttributePath`](../interfaces/protocol_interaction.AttributePath.md)[] |
| `attributes` | `Map`<`string`, [`AttributeServer`](cluster.AttributeServer.md)<`any`\>\> |
| `commandPaths` | [`CommandPath`](../interfaces/protocol_interaction.CommandPath.md)[] |
| `commands` | `Map`<`string`, [`CommandServer`](cluster.CommandServer.md)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>\> |
| `endpoints` | `Map`<`number`, [`Endpoint`](device.Endpoint.md)\> |
| `partsList` | `any` |

#### Inherited from

[Endpoint](device.Endpoint.md).[getStructure](device.Endpoint.md#getstructure)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:232](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L232)

___

### hasClusterClient

▸ **hasClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

[Endpoint](device.Endpoint.md).[hasClusterClient](device.Endpoint.md#hasclusterclient)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:147](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L147)

___

### hasClusterServer

▸ **hasClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema.md#bitschema) |
| `SF` | extends [`TypeFromBitSchema`](../modules/schema.md#typefrombitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

[Endpoint](device.Endpoint.md).[hasClusterServer](device.Endpoint.md#hasclusterserver)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:141](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L141)

___

### setDeviceTypes

▸ **setDeviceTypes**(`deviceTypes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceTypes` | [`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/device.md#devicetypedefinition)\> |

#### Returns

`void`

#### Inherited from

[Endpoint](device.Endpoint.md).[setDeviceTypes](device.Endpoint.md#setdevicetypes)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:157](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L157)

___

### verifyRequiredClusters

▸ `Protected` **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

[Endpoint](device.Endpoint.md).[verifyRequiredClusters](device.Endpoint.md#verifyrequiredclusters)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:205](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L205)
