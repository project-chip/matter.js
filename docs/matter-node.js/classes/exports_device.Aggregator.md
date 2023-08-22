[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/device](../modules/exports_device.md) / Aggregator

# Class: Aggregator

[exports/device](../modules/exports_device.md).Aggregator

An Aggregator is a special endpoint that exposes multiple devices as a "bridge" into the matter ecosystem.
Use the `addBridgedDevice` or `addBridgedDeviceWithPowerSourceInfo` method to add the devices and provide the details
for the "Bridged Device Basic Information Cluster". The BridgedDeviceBasicInformationCluster is then added automatically.
If Power source information should be provided you need to also add the needed clusters (PowerSourceConfigurationCluster
and PowerSourceCluster) to the device!

## Hierarchy

- [`Endpoint`](exports_device.Endpoint.md)

  ↳ **`Aggregator`**

## Table of contents

### Constructors

- [constructor](exports_device.Aggregator.md#constructor)

### Properties

- [deviceTypes](exports_device.Aggregator.md#devicetypes)
- [id](exports_device.Aggregator.md#id)
- [name](exports_device.Aggregator.md#name)
- [uniqueStorageKey](exports_device.Aggregator.md#uniquestoragekey)

### Methods

- [addBridgedDevice](exports_device.Aggregator.md#addbridgeddevice)
- [addBridgedDeviceWithPowerSourceInfo](exports_device.Aggregator.md#addbridgeddevicewithpowersourceinfo)
- [addChildEndpoint](exports_device.Aggregator.md#addchildendpoint)
- [addClusterClient](exports_device.Aggregator.md#addclusterclient)
- [addClusterServer](exports_device.Aggregator.md#addclusterserver)
- [addFixedLabel](exports_device.Aggregator.md#addfixedlabel)
- [addUserLabel](exports_device.Aggregator.md#adduserlabel)
- [clearStructureChangedCallback](exports_device.Aggregator.md#clearstructurechangedcallback)
- [determineUniqueID](exports_device.Aggregator.md#determineuniqueid)
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
- [getId](exports_device.Aggregator.md#getid)
- [hasClusterClient](exports_device.Aggregator.md#hasclusterclient)
- [hasClusterServer](exports_device.Aggregator.md#hasclusterserver)
- [removeBridgedDevice](exports_device.Aggregator.md#removebridgeddevice)
- [removeChildEndpoint](exports_device.Aggregator.md#removechildendpoint)
- [setDeviceTypes](exports_device.Aggregator.md#setdevicetypes)
- [setStructureChangedCallback](exports_device.Aggregator.md#setstructurechangedcallback)
- [updatePartsList](exports_device.Aggregator.md#updatepartslist)
- [verifyRequiredClusters](exports_device.Aggregator.md#verifyrequiredclusters)

## Constructors

### constructor

• **new Aggregator**(`devices?`, `options?`)

Create a new Aggregator instance and optionally directly add devices to it. If this is used the devices must
already have the BridgedDeviceBasicInformationCluster added!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `devices?` | [`Device`](exports_device.Device.md)[] | Array of devices to add |
| `options?` | [`EndpointOptions`](../interfaces/exports_device.EndpointOptions.md) | Optional Endpoint options |

#### Overrides

[Endpoint](exports_device.Endpoint.md).[constructor](exports_device.Endpoint.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/device/Aggregator.d.ts:25

## Properties

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[deviceTypes](exports_device.Endpoint.md#devicetypes)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:19

___

### id

• **id**: `undefined` \| [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[id](exports_device.Endpoint.md#id)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:23

___

### name

• **name**: `string`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[name](exports_device.Endpoint.md#name)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:25

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[uniqueStorageKey](exports_device.Endpoint.md#uniquestoragekey)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:24

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
| `device` | [`Device`](exports_device.Device.md) \| [`ComposedDevice`](exports_device.ComposedDevice.md) | Device instance to add |
| `bridgedBasicInformation?` | [`AttributeInitialValues`](../modules/exports_cluster.md#attributeinitialvalues)<[`Merge`](../modules/util_export.md#merge)<{ `hardwareVersion`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](../modules/exports_cluster.md#optionalwritableattribute)<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `productAppearance`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `finish`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ProductFinish`](../enums/exports_cluster.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| [`Color`](../enums/exports_cluster.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `reachable`: [`Attribute`](../modules/exports_cluster.md#attribute)<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes-1)<[`BitSchema`](../modules/exports_schema.md#bitschema)\>\>\> | Optional BridgedDeviceBasicInformationCluster attribute values to |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/device/Aggregator.d.ts:35

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
| `device` | [`Device`](exports_device.Device.md) \| [`ComposedDevice`](exports_device.ComposedDevice.md) | Device instance to add |
| `bridgedBasicInformation?` | [`AttributeInitialValues`](../modules/exports_cluster.md#attributeinitialvalues)<[`Merge`](../modules/util_export.md#merge)<{ `hardwareVersion`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `hardwareVersionString`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `nodeLabel`: [`OptionalWritableAttribute`](../modules/exports_cluster.md#optionalwritableattribute)<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `productAppearance`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `finish`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<[`ProductFinish`](../enums/exports_cluster.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<``null`` \| [`Color`](../enums/exports_cluster.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `productName`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `reachable`: [`Attribute`](../modules/exports_cluster.md#attribute)<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `softwareVersion`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`number`, `any`\> ; `softwareVersionString`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `vendorId`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes-1)<[`BitSchema`](../modules/exports_schema.md#bitschema)\>\>\> | Optional BridgedDeviceBasicInformationCluster attribute values to |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/device/Aggregator.d.ts:45

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

[Endpoint](exports_device.Endpoint.md).[addChildEndpoint](exports_device.Endpoint.md#addchildendpoint)

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

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[addClusterClient](exports_device.Endpoint.md#addclusterclient)

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

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[addClusterServer](exports_device.Endpoint.md#addclusterserver)

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

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[addFixedLabel](exports_device.Endpoint.md#addfixedlabel)

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

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[addUserLabel](exports_device.Endpoint.md#adduserlabel)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:39

___

### clearStructureChangedCallback

▸ **clearStructureChangedCallback**(): `void`

#### Returns

`void`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[clearStructureChangedCallback](exports_device.Endpoint.md#clearstructurechangedcallback)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:36

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[determineUniqueID](exports_device.Endpoint.md#determineuniqueid)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:54

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getAllClusterClients](exports_device.Endpoint.md#getallclusterclients)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:57

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getAllClusterServers](exports_device.Endpoint.md#getallclusterservers)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:56

___

### getBridgedDevices

▸ **getBridgedDevices**(): [`Endpoint`](exports_device.Endpoint.md)[]

Returns all bridged devices added to the Aggregator

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

Array of bridged devices

#### Defined in

packages/matter.js/dist/cjs/device/Aggregator.d.ts:51

___

### getChildEndpoint

▸ **getChildEndpoint**(`id`): `undefined` \| [`Endpoint`](exports_device.Endpoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |

#### Returns

`undefined` \| [`Endpoint`](exports_device.Endpoint.md)

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getChildEndpoint](exports_device.Endpoint.md#getchildendpoint)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:51

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](exports_device.Endpoint.md)[]

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getChildEndpoints](exports_device.Endpoint.md#getchildendpoints)

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

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getClusterClient](exports_device.Endpoint.md#getclusterclient)

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

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getClusterClientById](exports_device.Endpoint.md#getclusterclientbyid)

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

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getClusterServer](exports_device.Endpoint.md#getclusterserver)

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

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getClusterServerById](exports_device.Endpoint.md#getclusterserverbyid)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:44

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getDeviceTypes](exports_device.Endpoint.md#getdevicetypes)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:48

___

### getId

▸ **getId**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getId](exports_device.Endpoint.md#getid)

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

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[hasClusterClient](exports_device.Endpoint.md#hasclusterclient)

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

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[hasClusterServer](exports_device.Endpoint.md#hasclusterserver)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:46

___

### removeBridgedDevice

▸ **removeBridgedDevice**(`device`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `device` | [`Device`](exports_device.Device.md) \| [`ComposedDevice`](exports_device.ComposedDevice.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/device/Aggregator.d.ts:52

___

### removeChildEndpoint

▸ `Protected` **removeChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`void`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[removeChildEndpoint](exports_device.Endpoint.md#removechildendpoint)

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

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[setDeviceTypes](exports_device.Endpoint.md#setdevicetypes)

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

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[setStructureChangedCallback](exports_device.Endpoint.md#setstructurechangedcallback)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:35

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[updatePartsList](exports_device.Endpoint.md#updatepartslist)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:58

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[verifyRequiredClusters](exports_device.Endpoint.md#verifyrequiredclusters)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:55
