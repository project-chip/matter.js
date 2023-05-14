[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/device](../modules/exports_device.md) / Aggregator

# Class: Aggregator

[exports/device](../modules/exports_device.md).Aggregator

An Aggregator is a special endpoint that exposes multiple devices as a "bridge" into the matter ecosystem.
Use the `addBridgedDevice` or `addBridgedDeviceWithPowerSourceInfo` method to add the devices and provide the details
for the "Bridged Device Basic Information Cluster". The BridgedDeviceBasicInformationCluster is then added automatically.
If Power source information should be provided you need to also add the needed clusters (PowerSourceConfigurationCluster
and PowerSourceCluster) to the device!

## Hierarchy

- [`ComposedDevice`](exports_device.ComposedDevice.md)

  ↳ **`Aggregator`**

## Table of contents

### Constructors

- [constructor](exports_device.Aggregator.md#constructor)

### Properties

- [deviceTypes](exports_device.Aggregator.md#devicetypes)
- [id](exports_device.Aggregator.md#id)
- [name](exports_device.Aggregator.md#name)

### Methods

- [addBridgedDevice](exports_device.Aggregator.md#addbridgeddevice)
- [addBridgedDeviceWithPowerSourceInfo](exports_device.Aggregator.md#addbridgeddevicewithpowersourceinfo)
- [addChildEndpoint](exports_device.Aggregator.md#addchildendpoint)
- [addClusterClient](exports_device.Aggregator.md#addclusterclient)
- [addClusterServer](exports_device.Aggregator.md#addclusterserver)
- [addDevice](exports_device.Aggregator.md#adddevice)
- [addFixedLabel](exports_device.Aggregator.md#addfixedlabel)
- [addUserLabel](exports_device.Aggregator.md#adduserlabel)
- [ensureEndpointIds](exports_device.Aggregator.md#ensureendpointids)
- [findHighestEndpointId](exports_device.Aggregator.md#findhighestendpointid)
- [getAllClusterClients](exports_device.Aggregator.md#getallclusterclients)
- [getAllClusterServers](exports_device.Aggregator.md#getallclusterservers)
- [getBridgedDevices](exports_device.Aggregator.md#getbridgeddevices)
- [getChildEndpoint](exports_device.Aggregator.md#getchildendpoint)
- [getChildEndpoints](exports_device.Aggregator.md#getchildendpoints)
- [getClusterClient](exports_device.Aggregator.md#getclusterclient)
- [getClusterClientById](exports_device.Aggregator.md#getclusterclientbyid)
- [getClusterServer](exports_device.Aggregator.md#getclusterserver)
- [getClusterServerById](exports_device.Aggregator.md#getclusterserverbyid)
- [getDeviceTypes](exports_device.Aggregator.md#getdevicetypes)
- [getDevices](exports_device.Aggregator.md#getdevices)
- [getId](exports_device.Aggregator.md#getid)
- [getStructure](exports_device.Aggregator.md#getstructure)
- [hasClusterClient](exports_device.Aggregator.md#hasclusterclient)
- [hasClusterServer](exports_device.Aggregator.md#hasclusterserver)
- [setDeviceTypes](exports_device.Aggregator.md#setdevicetypes)
- [verifyRequiredClusters](exports_device.Aggregator.md#verifyrequiredclusters)

## Constructors

### constructor

• **new Aggregator**(`devices?`, `endpointId?`)

Create a new Aggregator instance and optionally directly add devices to it. If this is used the devices must
already have the BridgedDeviceBasicInformationCluster added!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `devices?` | [`Device`](exports_device.Device.md)[] | Array of devices to add |
| `endpointId?` | `number` | Optional endpoint ID to use. If not provided will automatically be assigned |

#### Overrides

[ComposedDevice](exports_device.ComposedDevice.md).[constructor](exports_device.ComposedDevice.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/device/Aggregator.d.ts:24

## Properties

### deviceTypes

• `Protected` **deviceTypes**: [`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition)\>

#### Inherited from

[ComposedDevice](exports_device.ComposedDevice.md).[deviceTypes](exports_device.ComposedDevice.md#devicetypes)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:17

___

### id

• **id**: `undefined` \| `number`

#### Inherited from

[ComposedDevice](exports_device.ComposedDevice.md).[id](exports_device.ComposedDevice.md#id)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:21

___

### name

• **name**: `string`

#### Inherited from

[ComposedDevice](exports_device.ComposedDevice.md).[name](exports_device.ComposedDevice.md#name)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:22

## Methods

### addBridgedDevice

▸ **addBridgedDevice**(`device`, `bridgedBasicInformation?`): `void`

Add a bridged device to the Aggregator. If provided the bridgedBasicInformation is used to automatically add the
BridgedDeviceBasicInformationCluster to the device. If not provided the BridgedDeviceBasicInformationCluster must
be already existing on the device!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `device` | [`Device`](exports_device.Device.md) | Device instance to add |
| `bridgedBasicInformation?` | [`AttributeInitialValues`](../modules/exports_cluster.md#attributeinitialvalues)<[`Merge`](../modules/util.md#merge)<{ `hardwareVersion`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`number`\> ; `hardwareVersionString`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `manufacturingDate`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `nodeLabel`: [`OptionalWritableAttribute`](../modules/exports_cluster.md#optionalwritableattribute)<`string`\> ; `partNumber`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `productLabel`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `productName`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `productURL`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `reachable`: [`Attribute`](../modules/exports_cluster.md#attribute)<`boolean`\> ; `serialNumber`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `softwareVersion`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`number`\> ; `softwareVersionString`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `uniqueId`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `vendorId`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<[`VendorId`](exports_datatype.VendorId.md)\> ; `vendorName`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes-1)<[`BitSchema`](../modules/exports_schema.md#bitschema)\>\>\> | Optional BridgedDeviceBasicInformationCluster attribute values to |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/device/Aggregator.d.ts:37

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
| `device` | [`Device`](exports_device.Device.md) | Device instance to add |
| `bridgedBasicInformation?` | [`AttributeInitialValues`](../modules/exports_cluster.md#attributeinitialvalues)<[`Merge`](../modules/util.md#merge)<{ `hardwareVersion`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`number`\> ; `hardwareVersionString`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `manufacturingDate`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `nodeLabel`: [`OptionalWritableAttribute`](../modules/exports_cluster.md#optionalwritableattribute)<`string`\> ; `partNumber`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `productLabel`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `productName`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `productURL`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `reachable`: [`Attribute`](../modules/exports_cluster.md#attribute)<`boolean`\> ; `serialNumber`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `softwareVersion`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`number`\> ; `softwareVersionString`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `uniqueId`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `vendorId`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<[`VendorId`](exports_datatype.VendorId.md)\> ; `vendorName`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes-1)<[`BitSchema`](../modules/exports_schema.md#bitschema)\>\>\> | Optional BridgedDeviceBasicInformationCluster attribute values to |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/device/Aggregator.d.ts:47

___

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`void`

#### Inherited from

[ComposedDevice](exports_device.ComposedDevice.md).[addChildEndpoint](exports_device.ComposedDevice.md#addchildendpoint)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:38

___

### addClusterClient

▸ **addClusterClient**<`A`, `C`\>(`cluster`): `void`

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

#### Inherited from

[ComposedDevice](exports_device.ComposedDevice.md).[addClusterClient](exports_device.ComposedDevice.md#addclusterclient)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:29

___

### addClusterServer

▸ **addClusterServer**<`A`, `C`\>(`cluster`): `void`

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

#### Inherited from

[ComposedDevice](exports_device.ComposedDevice.md).[addClusterServer](exports_device.ComposedDevice.md#addclusterserver)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:28

___

### addDevice

▸ **addDevice**(): `void`

**`Deprecated`**

Use addBridgedDevice or addBridgedDeviceWithPowerSourceInfo instead

#### Returns

`void`

#### Overrides

[ComposedDevice](exports_device.ComposedDevice.md).[addDevice](exports_device.ComposedDevice.md#adddevice)

#### Defined in

packages/matter.js/dist/cjs/device/Aggregator.d.ts:28

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

[ComposedDevice](exports_device.ComposedDevice.md).[addFixedLabel](exports_device.ComposedDevice.md#addfixedlabel)

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

[ComposedDevice](exports_device.ComposedDevice.md).[addUserLabel](exports_device.ComposedDevice.md#adduserlabel)

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

[ComposedDevice](exports_device.ComposedDevice.md).[ensureEndpointIds](exports_device.ComposedDevice.md#ensureendpointids)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:42

___

### findHighestEndpointId

▸ **findHighestEndpointId**(): `number`

#### Returns

`number`

#### Inherited from

[ComposedDevice](exports_device.ComposedDevice.md).[findHighestEndpointId](exports_device.ComposedDevice.md#findhighestendpointid)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:41

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>[]

#### Inherited from

[ComposedDevice](exports_device.ComposedDevice.md).[getAllClusterClients](exports_device.ComposedDevice.md#getallclusterclients)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:45

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>[]

#### Inherited from

[ComposedDevice](exports_device.ComposedDevice.md).[getAllClusterServers](exports_device.ComposedDevice.md#getallclusterservers)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:44

___

### getBridgedDevices

▸ **getBridgedDevices**(): [`Endpoint`](exports_device.Endpoint.md)[]

Returns all bridged devices added to the Aggregator

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

Array of bridged devices

#### Defined in

packages/matter.js/dist/cjs/device/Aggregator.d.ts:53

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

[ComposedDevice](exports_device.ComposedDevice.md).[getChildEndpoint](exports_device.ComposedDevice.md#getchildendpoint)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:39

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](exports_device.Endpoint.md)[]

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

#### Inherited from

[ComposedDevice](exports_device.ComposedDevice.md).[getChildEndpoints](exports_device.ComposedDevice.md#getchildendpoints)

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

[ComposedDevice](exports_device.ComposedDevice.md).[getClusterClient](exports_device.ComposedDevice.md#getclusterclient)

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

[ComposedDevice](exports_device.ComposedDevice.md).[getClusterClientById](exports_device.ComposedDevice.md#getclusterclientbyid)

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

[ComposedDevice](exports_device.ComposedDevice.md).[getClusterServer](exports_device.ComposedDevice.md#getclusterserver)

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

[ComposedDevice](exports_device.ComposedDevice.md).[getClusterServerById](exports_device.ComposedDevice.md#getclusterserverbyid)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:32

___

### getDeviceTypes

▸ **getDeviceTypes**(): [`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition)\>

#### Returns

[`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition)\>

#### Inherited from

[ComposedDevice](exports_device.ComposedDevice.md).[getDeviceTypes](exports_device.ComposedDevice.md#getdevicetypes)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:36

___

### getDevices

▸ **getDevices**(): [`Endpoint`](exports_device.Endpoint.md)[]

Get all sub-devices of the composed device.

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

Array with all sub-devices

#### Inherited from

[ComposedDevice](exports_device.ComposedDevice.md).[getDevices](exports_device.ComposedDevice.md#getdevices)

#### Defined in

packages/matter.js/dist/cjs/device/ComposedDevice.d.ts:33

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Inherited from

[ComposedDevice](exports_device.ComposedDevice.md).[getId](exports_device.ComposedDevice.md#getid)

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

[ComposedDevice](exports_device.ComposedDevice.md).[getStructure](exports_device.ComposedDevice.md#getstructure)

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

[ComposedDevice](exports_device.ComposedDevice.md).[hasClusterClient](exports_device.ComposedDevice.md#hasclusterclient)

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

[ComposedDevice](exports_device.ComposedDevice.md).[hasClusterServer](exports_device.ComposedDevice.md#hasclusterserver)

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

[ComposedDevice](exports_device.ComposedDevice.md).[setDeviceTypes](exports_device.ComposedDevice.md#setdevicetypes)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:37

___

### verifyRequiredClusters

▸ `Protected` **verifyRequiredClusters**(): `void`

Verify that the required clusters exists on the device.

#### Returns

`void`

#### Inherited from

[ComposedDevice](exports_device.ComposedDevice.md).[verifyRequiredClusters](exports_device.ComposedDevice.md#verifyrequiredclusters)

#### Defined in

packages/matter.js/dist/cjs/device/ComposedDevice.d.ts:37
