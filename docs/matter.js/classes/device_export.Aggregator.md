[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device/export](../modules/device_export.md) / Aggregator

# Class: Aggregator

[device/export](../modules/device_export.md).Aggregator

An Aggregator is a special endpoint that exposes multiple devices as a "bridge" into the matter ecosystem.
Use the `addBridgedDevice` or `addBridgedDeviceWithPowerSourceInfo` method to add the devices and provide the details
for the "Bridged Device Basic Information Cluster". The BridgedDeviceBasicInformationCluster is then added automatically.
If Power source information should be provided you need to also add the needed clusters (PowerSourceConfigurationCluster
and PowerSourceCluster) to the device!

## Hierarchy

- [`Endpoint`](device_export.Endpoint.md)

  ↳ **`Aggregator`**

## Table of contents

### Constructors

- [constructor](device_export.Aggregator.md#constructor)

### Properties

- [deviceTypes](device_export.Aggregator.md#devicetypes)
- [name](device_export.Aggregator.md#name)
- [number](device_export.Aggregator.md#number)
- [uniqueStorageKey](device_export.Aggregator.md#uniquestoragekey)

### Methods

- [addBridgedDevice](device_export.Aggregator.md#addbridgeddevice)
- [addBridgedDeviceWithPowerSourceInfo](device_export.Aggregator.md#addbridgeddevicewithpowersourceinfo)
- [addChildEndpoint](device_export.Aggregator.md#addchildendpoint)
- [addClusterClient](device_export.Aggregator.md#addclusterclient)
- [addClusterServer](device_export.Aggregator.md#addclusterserver)
- [addFixedLabel](device_export.Aggregator.md#addfixedlabel)
- [addUserLabel](device_export.Aggregator.md#adduserlabel)
- [close](device_export.Aggregator.md#close)
- [determineUniqueID](device_export.Aggregator.md#determineuniqueid)
- [getAllClusterClients](device_export.Aggregator.md#getallclusterclients)
- [getAllClusterServers](device_export.Aggregator.md#getallclusterservers)
- [getBridgedDevices](device_export.Aggregator.md#getbridgeddevices)
- [getChildEndpoint](device_export.Aggregator.md#getchildendpoint)
- [getChildEndpoints](device_export.Aggregator.md#getchildendpoints)
- [getClusterClient](device_export.Aggregator.md#getclusterclient)
- [getClusterClientById](device_export.Aggregator.md#getclusterclientbyid)
- [getClusterServer](device_export.Aggregator.md#getclusterserver)
- [getClusterServerById](device_export.Aggregator.md#getclusterserverbyid)
- [getDeviceTypes](device_export.Aggregator.md#getdevicetypes)
- [getNumber](device_export.Aggregator.md#getnumber)
- [hasClusterClient](device_export.Aggregator.md#hasclusterclient)
- [hasClusterServer](device_export.Aggregator.md#hasclusterserver)
- [removeBridgedDevice](device_export.Aggregator.md#removebridgeddevice)
- [removeChildEndpoint](device_export.Aggregator.md#removechildendpoint)
- [removeFromStructure](device_export.Aggregator.md#removefromstructure)
- [setDeviceTypes](device_export.Aggregator.md#setdevicetypes)
- [setStructureChangedCallback](device_export.Aggregator.md#setstructurechangedcallback)
- [updatePartsList](device_export.Aggregator.md#updatepartslist)
- [verifyRequiredClusters](device_export.Aggregator.md#verifyrequiredclusters)

## Constructors

### constructor

• **new Aggregator**(`devices?`, `options?`): [`Aggregator`](device_export.Aggregator.md)

Create a new Aggregator instance and optionally directly add devices to it. If this is used the devices must
already have the BridgedDeviceBasicInformationCluster added!

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `devices` | [`Device`](device_export.Device.md)[] | `[]` | Array of devices to add |
| `options` | [`EndpointOptions`](../interfaces/device_export.EndpointOptions.md) | `{}` | Optional Endpoint options |

#### Returns

[`Aggregator`](device_export.Aggregator.md)

#### Overrides

[Endpoint](device_export.Endpoint.md).[constructor](device_export.Endpoint.md#constructor)

#### Defined in

[packages/matter.js/src/device/Aggregator.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Aggregator.ts#L29)

## Properties

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/device_export.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

One or multiple DeviceTypeDefinitions of the endpoint

#### Inherited from

[Endpoint](device_export.Endpoint.md).[deviceTypes](device_export.Endpoint.md#devicetypes)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L54)

___

### name

• **name**: `string` = `""`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[name](device_export.Endpoint.md#name)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L40)

___

### number

• **number**: `undefined` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[Endpoint](device_export.Endpoint.md).[number](device_export.Endpoint.md#number)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L38)

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[uniqueStorageKey](device_export.Endpoint.md#uniquestoragekey)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L39)

## Methods

### addBridgedDevice

▸ **addBridgedDevice**(`device`, `bridgedBasicInformation?`): `void`

Add a bridged device to the Aggregator. If provided the bridgedBasicInformation is used to automatically add the
BridgedDeviceBasicInformationCluster to the device and also handles Reachability event triggering when
reachability event changes. If not provided the BridgedDeviceBasicInformationCluster must be already existing
on the device!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `device` | [`Device`](device_export.Device.md) \| [`ComposedDevice`](device_export.ComposedDevice.md) | Device instance to add |
| `bridgedBasicInformation?` | [`AttributeInitialValues`](../modules/cluster_export.md#attributeinitialvalues)\<[`Merge`](../modules/util_export.md#merge)\<\{ `hardwareVersion`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<{}\>\>\> | Optional BridgedDeviceBasicInformationCluster attribute values to |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/Aggregator.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Aggregator.ts#L44)

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
| `device` | [`Device`](device_export.Device.md) \| [`ComposedDevice`](device_export.ComposedDevice.md) | Device instance to add |
| `bridgedBasicInformation?` | [`AttributeInitialValues`](../modules/cluster_export.md#attributeinitialvalues)\<[`Merge`](../modules/util_export.md#merge)\<\{ `hardwareVersion`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<{}\>\>\> | Optional BridgedDeviceBasicInformationCluster attribute values to |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/Aggregator.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Aggregator.ts#L87)

___

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../interfaces/endpoint_export.EndpointInterface.md) |

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[addChildEndpoint](device_export.Endpoint.md#addchildendpoint)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:257](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L257)

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

[packages/matter.js/src/device/Endpoint.ts:174](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L174)

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

[packages/matter.js/src/device/Endpoint.ts:147](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L147)

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

[packages/matter.js/src/device/Endpoint.ts:107](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L107)

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

[packages/matter.js/src/device/Endpoint.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L127)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[close](device_export.Endpoint.md#close)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L94)

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[determineUniqueID](device_export.Endpoint.md#determineuniqueid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:291](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L291)

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getAllClusterClients](device_export.Endpoint.md#getallclusterclients)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:351](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L351)

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getAllClusterServers](device_export.Endpoint.md#getallclusterservers)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:347](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L347)

___

### getBridgedDevices

▸ **getBridgedDevices**(): [`Endpoint`](device_export.Endpoint.md)[]

Returns all bridged devices added to the Aggregator

#### Returns

[`Endpoint`](device_export.Endpoint.md)[]

Array of bridged devices

#### Defined in

[packages/matter.js/src/device/Aggregator.ts:114](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Aggregator.ts#L114)

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

[packages/matter.js/src/device/Endpoint.ts:273](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L273)

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](device_export.Endpoint.md)[]

#### Returns

[`Endpoint`](device_export.Endpoint.md)[]

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getChildEndpoints](device_export.Endpoint.md#getchildendpoints)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:277](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L277)

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

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getClusterClient](device_export.Endpoint.md#getclusterclient)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:199](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L199)

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

[packages/matter.js/src/device/Endpoint.ts:213](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L213)

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

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getClusterServer](device_export.Endpoint.md#getclusterserver)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:184](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L184)

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

[packages/matter.js/src/device/Endpoint.ts:209](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L209)

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/device_export.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/device_export.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getDeviceTypes](device_export.Endpoint.md#getdevicetypes)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:237](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L237)

___

### getNumber

▸ **getNumber**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getNumber](device_export.Endpoint.md#getnumber)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:100](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L100)

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

#### Inherited from

[Endpoint](device_export.Endpoint.md).[hasClusterClient](device_export.Endpoint.md#hasclusterclient)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:227](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L227)

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

#### Inherited from

[Endpoint](device_export.Endpoint.md).[hasClusterServer](device_export.Endpoint.md#hasclusterserver)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:217](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L217)

___

### removeBridgedDevice

▸ **removeBridgedDevice**(`device`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | [`Device`](device_export.Device.md) \| [`ComposedDevice`](device_export.ComposedDevice.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/Aggregator.ts:118](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Aggregator.ts#L118)

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

[packages/matter.js/src/device/Endpoint.ts:281](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L281)

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[removeFromStructure](device_export.Endpoint.md#removefromstructure)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L86)

___

### setDeviceTypes

▸ **setDeviceTypes**(`deviceTypes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../interfaces/device_export.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]] |

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[setDeviceTypes](device_export.Endpoint.md#setdevicetypes)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:241](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L241)

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

[packages/matter.js/src/device/Endpoint.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L81)

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Inherited from

[Endpoint](device_export.Endpoint.md).[updatePartsList](device_export.Endpoint.md#updatepartslist)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:355](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L355)

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[verifyRequiredClusters](device_export.Endpoint.md#verifyrequiredclusters)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:313](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L313)
