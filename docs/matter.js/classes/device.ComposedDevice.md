[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device](../modules/device.md) / ComposedDevice

# Class: ComposedDevice

[device](../modules/device.md).ComposedDevice

A ComposedDevice is a special endpoint that allows to combine multiple sub devices and expose this as one device
(e.g. a fan and a light).

## Hierarchy

- [`Endpoint`](device.Endpoint.md)

  ↳ **`ComposedDevice`**

  ↳↳ [`Aggregator`](device.Aggregator.md)

## Table of contents

### Constructors

- [constructor](device.ComposedDevice.md#constructor)

### Properties

- [deviceTypes](device.ComposedDevice.md#devicetypes)
- [id](device.ComposedDevice.md#id)
- [name](device.ComposedDevice.md#name)

### Methods

- [addChildEndpoint](device.ComposedDevice.md#addchildendpoint)
- [addClusterClient](device.ComposedDevice.md#addclusterclient)
- [addClusterServer](device.ComposedDevice.md#addclusterserver)
- [addDevice](device.ComposedDevice.md#adddevice)
- [addFixedLabel](device.ComposedDevice.md#addfixedlabel)
- [addUserLabel](device.ComposedDevice.md#adduserlabel)
- [ensureEndpointIds](device.ComposedDevice.md#ensureendpointids)
- [findHighestEndpointId](device.ComposedDevice.md#findhighestendpointid)
- [getAllClusterClients](device.ComposedDevice.md#getallclusterclients)
- [getAllClusterServers](device.ComposedDevice.md#getallclusterservers)
- [getChildEndpoint](device.ComposedDevice.md#getchildendpoint)
- [getChildEndpoints](device.ComposedDevice.md#getchildendpoints)
- [getClusterClient](device.ComposedDevice.md#getclusterclient)
- [getClusterClientById](device.ComposedDevice.md#getclusterclientbyid)
- [getClusterServer](device.ComposedDevice.md#getclusterserver)
- [getClusterServerById](device.ComposedDevice.md#getclusterserverbyid)
- [getDeviceTypes](device.ComposedDevice.md#getdevicetypes)
- [getDevices](device.ComposedDevice.md#getdevices)
- [getId](device.ComposedDevice.md#getid)
- [getStructure](device.ComposedDevice.md#getstructure)
- [hasClusterClient](device.ComposedDevice.md#hasclusterclient)
- [hasClusterServer](device.ComposedDevice.md#hasclusterserver)
- [setDeviceTypes](device.ComposedDevice.md#setdevicetypes)
- [verifyRequiredClusters](device.ComposedDevice.md#verifyrequiredclusters)

## Constructors

### constructor

• **new ComposedDevice**(`deviceTypes`, `devices?`, `endpointId?`)

Creates a new ComposedDevice.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `deviceTypes` | [`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/device.md#devicetypedefinition)\> | `undefined` | Array with Device types how this device should be presented to the Matter ecosystem. |
| `devices` | [`Device`](device.Device.md)[] | `[]` | Array with devices that should be combined into one device that are directly added. |
| `endpointId?` | `number` | `undefined` | Optional endpoint ID to use. If not provided will automatically be assigned |

#### Overrides

[Endpoint](device.Endpoint.md).[constructor](device.Endpoint.md#constructor)

#### Defined in

[packages/matter.js/src/device/ComposedDevice.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/ComposedDevice.ts#L23)

## Properties

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

#### Inherited from

[Endpoint](device.Endpoint.md).[addClusterClient](device.Endpoint.md#addclusterclient)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:107](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L107)

___

### addClusterServer

▸ **addClusterServer**<`A`, `C`\>(`cluster`): `void`

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

#### Inherited from

[Endpoint](device.Endpoint.md).[addClusterServer](device.Endpoint.md#addclusterserver)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:100](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L100)

___

### addDevice

▸ **addDevice**(`device`): `void`

Add a sub-device to the composed device.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `device` | [`Device`](device.Device.md) | Device instance to add |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/ComposedDevice.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/ComposedDevice.ts#L36)

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

### getDevices

▸ **getDevices**(): [`Endpoint`](device.Endpoint.md)[]

Get all sub-devices of the composed device.

#### Returns

[`Endpoint`](device.Endpoint.md)[]

Array with all sub-devices

#### Defined in

[packages/matter.js/src/device/ComposedDevice.ts:45](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/ComposedDevice.ts#L45)

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

Verify that the required clusters exists on the device.

#### Returns

`void`

#### Overrides

[Endpoint](device.Endpoint.md).[verifyRequiredClusters](device.Endpoint.md#verifyrequiredclusters)

#### Defined in

[packages/matter.js/src/device/ComposedDevice.ts:52](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/ComposedDevice.ts#L52)
