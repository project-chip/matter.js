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
- [id](exports_device.Device.md#id)
- [name](exports_device.Device.md#name)

### Methods

- [\_executeHandler](exports_device.Device.md#_executehandler)
- [addChildEndpoint](exports_device.Device.md#addchildendpoint)
- [addClusterClient](exports_device.Device.md#addclusterclient)
- [addClusterServer](exports_device.Device.md#addclusterserver)
- [addCommandHandler](exports_device.Device.md#addcommandhandler)
- [addFixedLabel](exports_device.Device.md#addfixedlabel)
- [addUserLabel](exports_device.Device.md#adduserlabel)
- [createOptionalClusterClient](exports_device.Device.md#createoptionalclusterclient)
- [createOptionalClusterServer](exports_device.Device.md#createoptionalclusterserver)
- [ensureEndpointIds](exports_device.Device.md#ensureendpointids)
- [findHighestEndpointId](exports_device.Device.md#findhighestendpointid)
- [getAllClusterClients](exports_device.Device.md#getallclusterclients)
- [getAllClusterServers](exports_device.Device.md#getallclusterservers)
- [getChildEndpoint](exports_device.Device.md#getchildendpoint)
- [getChildEndpoints](exports_device.Device.md#getchildendpoints)
- [getClusterClient](exports_device.Device.md#getclusterclient)
- [getClusterClientById](exports_device.Device.md#getclusterclientbyid)
- [getClusterServer](exports_device.Device.md#getclusterserver)
- [getClusterServerById](exports_device.Device.md#getclusterserverbyid)
- [getDeviceTypes](exports_device.Device.md#getdevicetypes)
- [getId](exports_device.Device.md#getid)
- [getStructure](exports_device.Device.md#getstructure)
- [hasClusterClient](exports_device.Device.md#hasclusterclient)
- [hasClusterServer](exports_device.Device.md#hasclusterserver)
- [removeCommandHandler](exports_device.Device.md#removecommandhandler)
- [setDeviceTypes](exports_device.Device.md#setdevicetypes)
- [verifyRequiredClusters](exports_device.Device.md#verifyrequiredclusters)

## Constructors

### constructor

• **new Device**(`definition`, `clusters?`, `endpointId?`)

Create a new Device instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `definition` | [`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition) | DeviceTypeDefinitions of the device |
| `clusters?` | ([`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\> \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>)[] | Optional Array of clusters to be added to the device directly |
| `endpointId?` | `number` | Optional endpoint ID of the device. If not set, the device will be instanced as a root device |

#### Overrides

[Endpoint](exports_device.Endpoint.md).[constructor](exports_device.Endpoint.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:60

## Properties

### commandHandler

• `Private` **commandHandler**: `any`

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:52

___

### deviceType

• `Readonly` **deviceType**: `number`

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:51

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

### \_executeHandler

▸ `Protected` **_executeHandler**(`command`, `...args`): `Promise`<`void`\>

Execute a command handler. Should only be used internally, but can not be declared as protected officially
because needed public for derived classes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `never` | Command name to execute the handler for |
| `...args` | `any`[] | Arguments to be passed to the handler |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:85

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

[Endpoint](exports_device.Endpoint.md).[addClusterClient](exports_device.Endpoint.md#addclusterclient)

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

[Endpoint](exports_device.Endpoint.md).[addClusterServer](exports_device.Endpoint.md#addclusterserver)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:28

___

### addCommandHandler

▸ **addCommandHandler**(`command`, `handler`): `void`

Method to add command handlers to the device.
The base class do not expose any commands!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `never` | Command name to add a handler for |
| `handler` | [`HandlerFunction`](../modules/index._internal_.md#handlerfunction) | Handler function to be executed when the command is received |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:68

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

### createOptionalClusterClient

▸ `Protected` **createOptionalClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`A`, `C`\>

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
| `_cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`A`, `C`\>

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:87

___

### createOptionalClusterServer

▸ `Protected` **createOptionalClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `C`\>

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
| `_cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `C`\>

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:86

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

▸ **getClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`A`, `C`\>

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

`undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`A`, `C`\>

#### Overrides

[Endpoint](exports_device.Endpoint.md).[getClusterClient](exports_device.Endpoint.md#getclusterclient)

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:89

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

#### Overrides

[Endpoint](exports_device.Endpoint.md).[getClusterServer](exports_device.Endpoint.md#getclusterserver)

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:88

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

### removeCommandHandler

▸ **removeCommandHandler**(`command`, `handler`): `void`

Method to remove command handlers from the device.
The base class do not expose any commands!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `never` | Command name to remove the handler from |
| `handler` | [`HandlerFunction`](../modules/index._internal_.md#handlerfunction) | Handler function to be removed |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:76

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
