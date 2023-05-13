[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device](../modules/device.md) / Aggregator

# Class: Aggregator

[device](../modules/device.md).Aggregator

An Aggregator is a special endpoint that exposes multiple devices as a "bridge" into the matter ecosystem.
Use the `addBridgedDevice` or `addBridgedDeviceWithPowerSourceInfo` method to add the devices and provide the details
for the "Bridged Device Basic Information Cluster". The BridgedDeviceBasicInformationCluster is then added automatically.
If Power source information should be provided you need to also add the needed clusters (PowerSourceConfigurationCluster
and PowerSourceCluster) to the device!

## Hierarchy

- [`ComposedDevice`](device.ComposedDevice.md)

  ↳ **`Aggregator`**

## Table of contents

### Constructors

- [constructor](device.Aggregator.md#constructor)

### Properties

- [deviceTypes](device.Aggregator.md#devicetypes)
- [id](device.Aggregator.md#id)
- [name](device.Aggregator.md#name)

### Methods

- [addBridgedDevice](device.Aggregator.md#addbridgeddevice)
- [addBridgedDeviceWithPowerSourceInfo](device.Aggregator.md#addbridgeddevicewithpowersourceinfo)
- [addChildEndpoint](device.Aggregator.md#addchildendpoint)
- [addClusterClient](device.Aggregator.md#addclusterclient)
- [addClusterServer](device.Aggregator.md#addclusterserver)
- [addDevice](device.Aggregator.md#adddevice)
- [addFixedLabel](device.Aggregator.md#addfixedlabel)
- [addUserLabel](device.Aggregator.md#adduserlabel)
- [ensureEndpointIds](device.Aggregator.md#ensureendpointids)
- [findHighestEndpointId](device.Aggregator.md#findhighestendpointid)
- [getAllClusterClients](device.Aggregator.md#getallclusterclients)
- [getAllClusterServers](device.Aggregator.md#getallclusterservers)
- [getBridgedDevices](device.Aggregator.md#getbridgeddevices)
- [getChildEndpoint](device.Aggregator.md#getchildendpoint)
- [getChildEndpoints](device.Aggregator.md#getchildendpoints)
- [getClusterClient](device.Aggregator.md#getclusterclient)
- [getClusterClientById](device.Aggregator.md#getclusterclientbyid)
- [getClusterServer](device.Aggregator.md#getclusterserver)
- [getClusterServerById](device.Aggregator.md#getclusterserverbyid)
- [getDeviceTypes](device.Aggregator.md#getdevicetypes)
- [getDevices](device.Aggregator.md#getdevices)
- [getId](device.Aggregator.md#getid)
- [getStructure](device.Aggregator.md#getstructure)
- [hasClusterClient](device.Aggregator.md#hasclusterclient)
- [hasClusterServer](device.Aggregator.md#hasclusterserver)
- [setDeviceTypes](device.Aggregator.md#setdevicetypes)
- [verifyRequiredClusters](device.Aggregator.md#verifyrequiredclusters)

## Constructors

### constructor

• **new Aggregator**(`devices?`, `endpointId?`)

Create a new Aggregator instance and optionally directly add devices to it. If this is used the devices must
already have the BridgedDeviceBasicInformationCluster added!

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `devices` | [`Device`](device.Device.md)[] | `[]` | Array of devices to add |
| `endpointId?` | `number` | `undefined` | Optional endpoint ID to use. If not provided will automatically be assigned |

#### Overrides

[ComposedDevice](device.ComposedDevice.md).[constructor](device.ComposedDevice.md#constructor)

#### Defined in

[packages/matter.js/src/device/Aggregator.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Aggregator.ts#L27)

## Properties

### deviceTypes

• `Protected` **deviceTypes**: [`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/device.md#devicetypedefinition)\>

#### Inherited from

[ComposedDevice](device.ComposedDevice.md).[deviceTypes](device.ComposedDevice.md#devicetypes)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L35)

___

### id

• **id**: `undefined` \| `number`

#### Inherited from

[ComposedDevice](device.ComposedDevice.md).[id](device.ComposedDevice.md#id)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:29](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L29)

___

### name

• **name**: `string`

#### Inherited from

[ComposedDevice](device.ComposedDevice.md).[name](device.ComposedDevice.md#name)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L30)

## Methods

### addBridgedDevice

▸ **addBridgedDevice**(`device`, `bridgedBasicInformation?`): `void`

Add a bridged device to the Aggregator. If provided the bridgedBasicInformation is used to automatically add the
BridgedDeviceBasicInformationCluster to the device. If not provided the BridgedDeviceBasicInformationCluster must
be already existing on the device!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `device` | [`Device`](device.Device.md) | Device instance to add |
| `bridgedBasicInformation?` | [`AttributeInitialValues`](../modules/cluster.md#attributeinitialvalues)<[`Merge`](../modules/util.md#merge)<{ `hardwareVersion`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`number`\> ; `hardwareVersionString`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `manufacturingDate`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `nodeLabel`: [`OptionalWritableAttribute`](../modules/cluster.md#optionalwritableattribute)<`string`\> ; `partNumber`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `productLabel`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `productName`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `productURL`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `reachable`: [`Attribute`](../modules/cluster.md#attribute)<`boolean`\> ; `serialNumber`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `softwareVersion`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`number`\> ; `softwareVersionString`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `uniqueId`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `vendorId`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<[`VendorId`](datatype.VendorId.md)\> ; `vendorName`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\>  }, [`GlobalAttributes`](../modules/cluster.md#globalattributes-1)<[`BitSchema`](../modules/schema.md#bitschema)\>\>\> | Optional BridgedDeviceBasicInformationCluster attribute values to |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/Aggregator.ts:48](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Aggregator.ts#L48)

___

### addBridgedDeviceWithPowerSourceInfo

▸ **addBridgedDeviceWithPowerSourceInfo**(`device`, `bridgedBasicInformation?`): `void`

Add a bridged device with power source information to the Aggregator. If provided the bridgedBasicInformation is
used to automatically add the BridgedDeviceBasicInformationCluster to the device. If not provided the
BridgedDeviceBasicInformationCluster must be already existing on the device!
The required clusters PowerSourceConfigurationCluster and PowerSourceCluster needs to be added manually to the device!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `device` | [`Device`](device.Device.md) | Device instance to add |
| `bridgedBasicInformation?` | [`AttributeInitialValues`](../modules/cluster.md#attributeinitialvalues)<[`Merge`](../modules/util.md#merge)<{ `hardwareVersion`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`number`\> ; `hardwareVersionString`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `manufacturingDate`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `nodeLabel`: [`OptionalWritableAttribute`](../modules/cluster.md#optionalwritableattribute)<`string`\> ; `partNumber`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `productLabel`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `productName`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `productURL`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `reachable`: [`Attribute`](../modules/cluster.md#attribute)<`boolean`\> ; `serialNumber`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `softwareVersion`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`number`\> ; `softwareVersionString`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `uniqueId`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `vendorId`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<[`VendorId`](datatype.VendorId.md)\> ; `vendorName`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\>  }, [`GlobalAttributes`](../modules/cluster.md#globalattributes-1)<[`BitSchema`](../modules/schema.md#bitschema)\>\>\> | Optional BridgedDeviceBasicInformationCluster attribute values to |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/Aggregator.ts:74](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Aggregator.ts#L74)

___

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device.Endpoint.md) |

#### Returns

`void`

#### Inherited from

[ComposedDevice](device.ComposedDevice.md).[addChildEndpoint](device.ComposedDevice.md#addchildendpoint)

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

[ComposedDevice](device.ComposedDevice.md).[addClusterClient](device.ComposedDevice.md#addclusterclient)

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

[ComposedDevice](device.ComposedDevice.md).[addClusterServer](device.ComposedDevice.md#addclusterserver)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:100](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L100)

___

### addDevice

▸ **addDevice**(): `void`

**`Deprecated`**

Use addBridgedDevice or addBridgedDeviceWithPowerSourceInfo instead

#### Returns

`void`

#### Overrides

[ComposedDevice](device.ComposedDevice.md).[addDevice](device.ComposedDevice.md#adddevice)

#### Defined in

[packages/matter.js/src/device/Aggregator.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Aggregator.ts#L36)

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

[ComposedDevice](device.ComposedDevice.md).[addFixedLabel](device.ComposedDevice.md#addfixedlabel)

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

[ComposedDevice](device.ComposedDevice.md).[addUserLabel](device.ComposedDevice.md#adduserlabel)

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

[ComposedDevice](device.ComposedDevice.md).[ensureEndpointIds](device.ComposedDevice.md#ensureendpointids)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:193](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L193)

___

### findHighestEndpointId

▸ **findHighestEndpointId**(): `number`

#### Returns

`number`

#### Inherited from

[ComposedDevice](device.ComposedDevice.md).[findHighestEndpointId](device.ComposedDevice.md#findhighestendpointid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:179](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L179)

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>[]

#### Inherited from

[ComposedDevice](device.ComposedDevice.md).[getAllClusterClients](device.ComposedDevice.md#getallclusterclients)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:228](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L228)

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>[]

#### Inherited from

[ComposedDevice](device.ComposedDevice.md).[getAllClusterServers](device.ComposedDevice.md#getallclusterservers)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:224](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L224)

___

### getBridgedDevices

▸ **getBridgedDevices**(): [`Endpoint`](device.Endpoint.md)[]

Returns all bridged devices added to the Aggregator

#### Returns

[`Endpoint`](device.Endpoint.md)[]

Array of bridged devices

#### Defined in

[packages/matter.js/src/device/Aggregator.ts:96](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Aggregator.ts#L96)

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

[ComposedDevice](device.ComposedDevice.md).[getChildEndpoint](device.ComposedDevice.md#getchildendpoint)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:171](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L171)

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](device.Endpoint.md)[]

#### Returns

[`Endpoint`](device.Endpoint.md)[]

#### Inherited from

[ComposedDevice](device.ComposedDevice.md).[getChildEndpoints](device.ComposedDevice.md#getchildendpoints)

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

[ComposedDevice](device.ComposedDevice.md).[getClusterClient](device.ComposedDevice.md#getclusterclient)

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

[ComposedDevice](device.ComposedDevice.md).[getClusterClientById](device.ComposedDevice.md#getclusterclientbyid)

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

[ComposedDevice](device.ComposedDevice.md).[getClusterServer](device.ComposedDevice.md#getclusterserver)

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

[ComposedDevice](device.ComposedDevice.md).[getClusterServerById](device.ComposedDevice.md#getclusterserverbyid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:133](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L133)

___

### getDeviceTypes

▸ **getDeviceTypes**(): [`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/device.md#devicetypedefinition)\>

#### Returns

[`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/device.md#devicetypedefinition)\>

#### Inherited from

[ComposedDevice](device.ComposedDevice.md).[getDeviceTypes](device.ComposedDevice.md#getdevicetypes)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:153](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L153)

___

### getDevices

▸ **getDevices**(): [`Endpoint`](device.Endpoint.md)[]

Get all sub-devices of the composed device.

#### Returns

[`Endpoint`](device.Endpoint.md)[]

Array with all sub-devices

#### Inherited from

[ComposedDevice](device.ComposedDevice.md).[getDevices](device.ComposedDevice.md#getdevices)

#### Defined in

[packages/matter.js/src/device/ComposedDevice.ts:45](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/ComposedDevice.ts#L45)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Inherited from

[ComposedDevice](device.ComposedDevice.md).[getId](device.ComposedDevice.md#getid)

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

[ComposedDevice](device.ComposedDevice.md).[getStructure](device.ComposedDevice.md#getstructure)

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

[ComposedDevice](device.ComposedDevice.md).[hasClusterClient](device.ComposedDevice.md#hasclusterclient)

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

[ComposedDevice](device.ComposedDevice.md).[hasClusterServer](device.ComposedDevice.md#hasclusterserver)

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

[ComposedDevice](device.ComposedDevice.md).[setDeviceTypes](device.ComposedDevice.md#setdevicetypes)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:157](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L157)

___

### verifyRequiredClusters

▸ `Protected` **verifyRequiredClusters**(): `void`

Verify that the required clusters exists on the device.

#### Returns

`void`

#### Inherited from

[ComposedDevice](device.ComposedDevice.md).[verifyRequiredClusters](device.ComposedDevice.md#verifyrequiredclusters)

#### Defined in

[packages/matter.js/src/device/ComposedDevice.ts:52](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/ComposedDevice.ts#L52)
