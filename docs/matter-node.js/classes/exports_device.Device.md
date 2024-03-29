[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/device](../modules/exports_device.md) / Device

# Class: Device

[exports/device](../modules/exports_device.md).Device

Base class for all devices. This class should be extended by all devices.

## Hierarchy

- [`Endpoint`](exports_device.Endpoint.md)

  ↳ **`Device`**

## Table of contents

### Constructors

- [constructor](exports_device.Device.md#constructor)

### Properties

- [commandHandler](exports_device.Device.md#commandhandler)
- [deviceType](exports_device.Device.md#devicetype)
- [deviceTypes](exports_device.Device.md#devicetypes)
- [name](exports_device.Device.md#name)
- [number](exports_device.Device.md#number)
- [uniqueStorageKey](exports_device.Device.md#uniquestoragekey)

### Methods

- [\_executeHandler](exports_device.Device.md#_executehandler)
- [addChildEndpoint](exports_device.Device.md#addchildendpoint)
- [addClusterClient](exports_device.Device.md#addclusterclient)
- [addClusterServer](exports_device.Device.md#addclusterserver)
- [addCommandHandler](exports_device.Device.md#addcommandhandler)
- [addFixedLabel](exports_device.Device.md#addfixedlabel)
- [addUserLabel](exports_device.Device.md#adduserlabel)
- [close](exports_device.Device.md#close)
- [createOptionalClusterClient](exports_device.Device.md#createoptionalclusterclient)
- [createOptionalClusterServer](exports_device.Device.md#createoptionalclusterserver)
- [determineUniqueID](exports_device.Device.md#determineuniqueid)
- [getAllClusterClients](exports_device.Device.md#getallclusterclients)
- [getAllClusterServers](exports_device.Device.md#getallclusterservers)
- [getChildEndpoint](exports_device.Device.md#getchildendpoint)
- [getChildEndpoints](exports_device.Device.md#getchildendpoints)
- [getClusterClient](exports_device.Device.md#getclusterclient)
- [getClusterClientById](exports_device.Device.md#getclusterclientbyid)
- [getClusterServer](exports_device.Device.md#getclusterserver)
- [getClusterServerById](exports_device.Device.md#getclusterserverbyid)
- [getDeviceTypes](exports_device.Device.md#getdevicetypes)
- [getNumber](exports_device.Device.md#getnumber)
- [hasClusterClient](exports_device.Device.md#hasclusterclient)
- [hasClusterServer](exports_device.Device.md#hasclusterserver)
- [removeChildEndpoint](exports_device.Device.md#removechildendpoint)
- [removeCommandHandler](exports_device.Device.md#removecommandhandler)
- [removeFromStructure](exports_device.Device.md#removefromstructure)
- [setBridgedDeviceReachability](exports_device.Device.md#setbridgeddevicereachability)
- [setDeviceTypes](exports_device.Device.md#setdevicetypes)
- [setStructureChangedCallback](exports_device.Device.md#setstructurechangedcallback)
- [updatePartsList](exports_device.Device.md#updatepartslist)
- [verifyRequiredClusters](exports_device.Device.md#verifyrequiredclusters)

## Constructors

### constructor

• **new Device**(`definition`, `options?`): [`Device`](exports_device.Device.md)

Create a new Device instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `definition` | [`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md) | DeviceTypeDefinitions of the device |
| `options?` | [`EndpointOptions`](../interfaces/exports_device.EndpointOptions.md) | Optional endpoint options |

#### Returns

[`Device`](exports_device.Device.md)

#### Overrides

[Endpoint](exports_device.Endpoint.md).[constructor](exports_device.Endpoint.md#constructor)

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:89

## Properties

### commandHandler

• `Protected` **commandHandler**: [`NamedHandler`](util_export.NamedHandler.md)\<`any`\>

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:82

___

### deviceType

• `Readonly` **deviceType**: `number`

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:81

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[deviceTypes](exports_device.Endpoint.md#devicetypes)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:20

___

### name

• **name**: `string`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[name](exports_device.Endpoint.md#name)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:26

___

### number

• **number**: `undefined` \| [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[number](exports_device.Endpoint.md#number)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:24

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[uniqueStorageKey](exports_device.Endpoint.md#uniquestoragekey)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:25

## Methods

### \_executeHandler

▸ **_executeHandler**(`command`, `...args`): `Promise`\<`any`\>

Execute a command handler. Should only be used internally, but can not be declared as protected officially
because needed public for derived classes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `never` | Command name to execute the handler for |
| `...args` | `any`[] | Arguments to be passed to the handler |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:114

___

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../interfaces/exports_cluster._internal_.EndpointInterface.md) |

#### Returns

`void`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[addChildEndpoint](exports_device.Endpoint.md#addchildendpoint)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:52

___

### addClusterClient

▸ **addClusterClient**\<`F`, `A`, `C`, `E`\>(`cluster`): `void`

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
| `cluster` | [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[addClusterClient](exports_device.Endpoint.md#addclusterclient)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:43

___

### addClusterServer

▸ **addClusterServer**\<`A`, `E`\>(`cluster`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`A`, `E`\> |

#### Returns

`void`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[addClusterServer](exports_device.Endpoint.md#addclusterserver)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:42

___

### addCommandHandler

▸ **addCommandHandler**(`command`, `handler`): `void`

Method to add command handlers to the device.
The base class do not expose any commands!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `never` | Command name to add a handler for |
| `handler` | [`HandlerFunction`](../modules/util_export.md#handlerfunction) | Handler function to be executed when the command is received |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:97

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

packages/matter.js/dist/esm/device/Endpoint.d.ts:40

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

packages/matter.js/dist/esm/device/Endpoint.d.ts:41

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[close](exports_device.Endpoint.md#close)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:38

___

### createOptionalClusterClient

▸ **createOptionalClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:116

___

### createOptionalClusterServer

▸ **createOptionalClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`A`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`A`, `E`\>

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:115

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[determineUniqueID](exports_device.Endpoint.md#determineuniqueid)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:56

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getAllClusterClients](exports_device.Endpoint.md#getallclusterclients)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:59

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getAllClusterServers](exports_device.Endpoint.md#getallclusterservers)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:58

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

packages/matter.js/dist/esm/device/Endpoint.d.ts:53

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](exports_device.Endpoint.md)[]

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getChildEndpoints](exports_device.Endpoint.md#getchildendpoints)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:54

___

### getClusterClient

▸ **getClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Overrides

[Endpoint](exports_device.Endpoint.md).[getClusterClient](exports_device.Endpoint.md#getclusterclient)

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:118

___

### getClusterClientById

▸ **getClusterClientById**(`clusterId`): `undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getClusterClientById](exports_device.Endpoint.md#getclusterclientbyid)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:47

___

### getClusterServer

▸ **getClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`A`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<`A`, `E`\>

#### Overrides

[Endpoint](exports_device.Endpoint.md).[getClusterServer](exports_device.Endpoint.md#getclusterserver)

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:117

___

### getClusterServerById

▸ **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getClusterServerById](exports_device.Endpoint.md#getclusterserverbyid)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:46

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getDeviceTypes](exports_device.Endpoint.md#getdevicetypes)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:50

___

### getNumber

▸ **getNumber**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[getNumber](exports_device.Endpoint.md#getnumber)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:39

___

### hasClusterClient

▸ **hasClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[hasClusterClient](exports_device.Endpoint.md#hasclusterclient)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:49

___

### hasClusterServer

▸ **hasClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/exports_cluster.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[hasClusterServer](exports_device.Endpoint.md#hasclusterserver)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:48

___

### removeChildEndpoint

▸ **removeChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`void`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[removeChildEndpoint](exports_device.Endpoint.md#removechildendpoint)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:55

___

### removeCommandHandler

▸ **removeCommandHandler**(`command`, `handler`): `void`

Method to remove command handlers from the device.
The base class do not expose any commands!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `never` | Command name to remove the handler from |
| `handler` | [`HandlerFunction`](../modules/util_export.md#handlerfunction) | Handler function to be removed |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:105

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[removeFromStructure](exports_device.Endpoint.md#removefromstructure)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:37

___

### setBridgedDeviceReachability

▸ **setBridgedDeviceReachability**(`reachable`): `void`

Set the reachability of the device exposed via the bridge. If this is a device inside  a composed device the
reachability needs to be set there.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reachable` | `boolean` | true if reachable, false otherwise |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:125

___

### setDeviceTypes

▸ **setDeviceTypes**(`deviceTypes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]] |

#### Returns

`void`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[setDeviceTypes](exports_device.Endpoint.md#setdevicetypes)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:51

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

packages/matter.js/dist/esm/device/Endpoint.d.ts:36

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[updatePartsList](exports_device.Endpoint.md#updatepartslist)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:60

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

[Endpoint](exports_device.Endpoint.md).[verifyRequiredClusters](exports_device.Endpoint.md#verifyrequiredclusters)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:57
