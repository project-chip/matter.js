[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device](../modules/device.md) / Device

# Class: Device

[device](../modules/device.md).Device

Base class for all devices. This class should be extended by all devices.

## Hierarchy

- [`Endpoint`](device.Endpoint.md)

  ↳ **`Device`**

## Table of contents

### Constructors

- [constructor](device.Device.md#constructor)

### Properties

- [commandHandler](device.Device.md#commandhandler)
- [deviceType](device.Device.md#devicetype)
- [deviceTypes](device.Device.md#devicetypes)
- [id](device.Device.md#id)
- [name](device.Device.md#name)

### Methods

- [\_executeHandler](device.Device.md#_executehandler)
- [addChildEndpoint](device.Device.md#addchildendpoint)
- [addClusterClient](device.Device.md#addclusterclient)
- [addClusterServer](device.Device.md#addclusterserver)
- [addCommandHandler](device.Device.md#addcommandhandler)
- [addFixedLabel](device.Device.md#addfixedlabel)
- [addUserLabel](device.Device.md#adduserlabel)
- [createOptionalClusterClient](device.Device.md#createoptionalclusterclient)
- [createOptionalClusterServer](device.Device.md#createoptionalclusterserver)
- [ensureEndpointIds](device.Device.md#ensureendpointids)
- [findHighestEndpointId](device.Device.md#findhighestendpointid)
- [getAllClusterClients](device.Device.md#getallclusterclients)
- [getAllClusterServers](device.Device.md#getallclusterservers)
- [getChildEndpoint](device.Device.md#getchildendpoint)
- [getChildEndpoints](device.Device.md#getchildendpoints)
- [getClusterClient](device.Device.md#getclusterclient)
- [getClusterClientById](device.Device.md#getclusterclientbyid)
- [getClusterServer](device.Device.md#getclusterserver)
- [getClusterServerById](device.Device.md#getclusterserverbyid)
- [getDeviceTypes](device.Device.md#getdevicetypes)
- [getId](device.Device.md#getid)
- [getStructure](device.Device.md#getstructure)
- [hasClusterClient](device.Device.md#hasclusterclient)
- [hasClusterServer](device.Device.md#hasclusterserver)
- [removeCommandHandler](device.Device.md#removecommandhandler)
- [setDeviceTypes](device.Device.md#setdevicetypes)
- [verifyRequiredClusters](device.Device.md#verifyrequiredclusters)

## Constructors

### constructor

• **new Device**(`definition`, `clusters?`, `endpointId?`)

Create a new Device instance.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `definition` | [`DeviceTypeDefinition`](../modules/device.md#devicetypedefinition) | `undefined` | DeviceTypeDefinitions of the device |
| `clusters` | ([`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\> \| [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>)[] | `[]` | Optional Array of clusters to be added to the device directly |
| `endpointId?` | `number` | `undefined` | Optional endpoint ID of the device. If not set, the device will be instanced as a root device |

#### Overrides

[Endpoint](device.Endpoint.md).[constructor](device.Endpoint.md#constructor)

#### Defined in

[packages/matter.js/src/device/Device.ts:95](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Device.ts#L95)

## Properties

### commandHandler

• `Private` **commandHandler**: [`NamedHandler`](index._internal_.NamedHandler.md)<`any`\>

#### Defined in

[packages/matter.js/src/device/Device.ts:86](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Device.ts#L86)

___

### deviceType

• `Readonly` **deviceType**: `number`

#### Defined in

[packages/matter.js/src/device/Device.ts:85](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Device.ts#L85)

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

[packages/matter.js/src/device/Device.ts:146](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Device.ts#L146)

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

[packages/matter.js/src/device/Device.ts:123](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Device.ts#L123)

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

### createOptionalClusterClient

▸ `Protected` **createOptionalClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<`A`, `C`\>

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
| `_cluster` | [`Cluster`](../modules/cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<`A`, `C`\>

#### Defined in

[packages/matter.js/src/device/Device.ts:155](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Device.ts#L155)

___

### createOptionalClusterServer

▸ `Protected` **createOptionalClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<`A`, `C`\>

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
| `_cluster` | [`Cluster`](../modules/cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<`A`, `C`\>

#### Defined in

[packages/matter.js/src/device/Device.ts:150](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Device.ts#L150)

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

▸ **getClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<`A`, `C`\>

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

`undefined` \| [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<`A`, `C`\>

#### Overrides

[Endpoint](device.Endpoint.md).[getClusterClient](device.Endpoint.md#getclusterclient)

#### Defined in

[packages/matter.js/src/device/Device.ts:173](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Device.ts#L173)

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

#### Overrides

[Endpoint](device.Endpoint.md).[getClusterServer](device.Endpoint.md#getclusterserver)

#### Defined in

[packages/matter.js/src/device/Device.ts:160](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Device.ts#L160)

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

[packages/matter.js/src/device/Device.ts:134](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Device.ts#L134)

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
