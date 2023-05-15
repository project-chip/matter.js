[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / OnOffBaseDevice

# Class: OnOffBaseDevice

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).OnOffBaseDevice

Abstract Base class for OnOff devices

## Hierarchy

- [`Device`](device.Device.md)<`this`\> & { `_executeHandler`: <K\>(`action`: `K`, ...`args`: `Parameters`<[`OnOffBaseDeviceCommands`](../modules/index._internal_.md#onoffbasedevicecommands)[`K`]\>) => `Promise`<`void`\> ; `addCommandHandler`: <K\>(`action`: `K`, `handler`: [`OnOffBaseDeviceCommands`](../modules/index._internal_.md#onoffbasedevicecommands)[`K`]) => `void` ; `removeCommandHandler`: <K\>(`action`: `K`, `handler`: [`OnOffBaseDeviceCommands`](../modules/index._internal_.md#onoffbasedevicecommands)[`K`]) => `void`  }

  ↳ **`OnOffBaseDevice`**

  ↳↳ [`OnOffPluginUnitDevice`](device.OnOffPluginUnitDevice.md)

  ↳↳ [`OnOffLightDevice`](device.OnOffLightDevice.md)

## Table of contents

### Constructors

- [constructor](index._internal_.OnOffBaseDevice.md#constructor)

### Properties

- [deviceType](index._internal_.OnOffBaseDevice.md#devicetype)
- [deviceTypes](index._internal_.OnOffBaseDevice.md#devicetypes)
- [id](index._internal_.OnOffBaseDevice.md#id)
- [name](index._internal_.OnOffBaseDevice.md#name)

### Methods

- [\_executeHandler](index._internal_.OnOffBaseDevice.md#_executehandler)
- [addChildEndpoint](index._internal_.OnOffBaseDevice.md#addchildendpoint)
- [addClusterClient](index._internal_.OnOffBaseDevice.md#addclusterclient)
- [addClusterServer](index._internal_.OnOffBaseDevice.md#addclusterserver)
- [addCommandHandler](index._internal_.OnOffBaseDevice.md#addcommandhandler)
- [addDeviceClusters](index._internal_.OnOffBaseDevice.md#adddeviceclusters)
- [addFixedLabel](index._internal_.OnOffBaseDevice.md#addfixedlabel)
- [addOnOffListener](index._internal_.OnOffBaseDevice.md#addonofflistener)
- [addUserLabel](index._internal_.OnOffBaseDevice.md#adduserlabel)
- [createOptionalClusterClient](index._internal_.OnOffBaseDevice.md#createoptionalclusterclient)
- [createOptionalClusterServer](index._internal_.OnOffBaseDevice.md#createoptionalclusterserver)
- [ensureEndpointIds](index._internal_.OnOffBaseDevice.md#ensureendpointids)
- [findHighestEndpointId](index._internal_.OnOffBaseDevice.md#findhighestendpointid)
- [getAllClusterClients](index._internal_.OnOffBaseDevice.md#getallclusterclients)
- [getAllClusterServers](index._internal_.OnOffBaseDevice.md#getallclusterservers)
- [getChildEndpoint](index._internal_.OnOffBaseDevice.md#getchildendpoint)
- [getChildEndpoints](index._internal_.OnOffBaseDevice.md#getchildendpoints)
- [getClusterClient](index._internal_.OnOffBaseDevice.md#getclusterclient)
- [getClusterClientById](index._internal_.OnOffBaseDevice.md#getclusterclientbyid)
- [getClusterServer](index._internal_.OnOffBaseDevice.md#getclusterserver)
- [getClusterServerById](index._internal_.OnOffBaseDevice.md#getclusterserverbyid)
- [getDeviceTypes](index._internal_.OnOffBaseDevice.md#getdevicetypes)
- [getId](index._internal_.OnOffBaseDevice.md#getid)
- [getStructure](index._internal_.OnOffBaseDevice.md#getstructure)
- [hasClusterClient](index._internal_.OnOffBaseDevice.md#hasclusterclient)
- [hasClusterServer](index._internal_.OnOffBaseDevice.md#hasclusterserver)
- [onOff](index._internal_.OnOffBaseDevice.md#onoff)
- [removeCommandHandler](index._internal_.OnOffBaseDevice.md#removecommandhandler)
- [setDeviceTypes](index._internal_.OnOffBaseDevice.md#setdevicetypes)
- [toggle](index._internal_.OnOffBaseDevice.md#toggle)
- [verifyRequiredClusters](index._internal_.OnOffBaseDevice.md#verifyrequiredclusters)

## Constructors

### constructor

• `Protected` **new OnOffBaseDevice**(`definition`, `attributeInitialValues?`, `endpointId?`)

Creates a new OnOffBaseDevice

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `definition` | [`DeviceTypeDefinition`](../modules/device.md#devicetypedefinition) | Device type definition of the device to create |
| `attributeInitialValues?` | `Object` | Optional object with initial attribute values for automatically added clusters |
| `endpointId?` | `number` | Optional endpoint ID of the device. If not set, the device will be instanced as a root device |

#### Overrides

extendPublicHandlerMethods&lt;typeof Device, OnOffBaseDeviceCommands\&gt;(Device).constructor

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:49](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/OnOffDevices.ts#L49)

## Properties

### deviceType

• `Readonly` **deviceType**: `number`

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).deviceType

#### Defined in

[packages/matter.js/src/device/Device.ts:85](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Device.ts#L85)

___

### deviceTypes

• `Protected` **deviceTypes**: [`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/device.md#devicetypedefinition)\>

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).deviceTypes

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L35)

___

### id

• **id**: `undefined` \| `number`

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).id

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:29](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L29)

___

### name

• **name**: `string`

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).name

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

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).\_executeHandler

#### Defined in

[packages/matter.js/src/device/Device.ts:146](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Device.ts#L146)

▸ `Protected` **_executeHandler**<`K`\>(`action`, `...args`): `Promise`<`void`\>

Execute a command handler. Should only be used internally, but can not be declared as protected officially
because needed public for derived classes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"identify"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `...args` | `Parameters`<[`OnOffBaseDeviceCommands`](../modules/index._internal_.md#onoffbasedevicecommands)[`K`]\> | Arguments to be passed to the handler |

#### Returns

`Promise`<`void`\>

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).\_executeHandler

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/NamedHandler.ts#L38)

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).addChildEndpoint

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).addClusterClient

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).addClusterServer

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

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).addCommandHandler

#### Defined in

[packages/matter.js/src/device/Device.ts:123](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Device.ts#L123)

▸ **addCommandHandler**<`K`\>(`action`, `handler`): `void`

Method to add command handlers to the device.
The base class do not expose any commands!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"identify"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `handler` | [`OnOffBaseDeviceCommands`](../modules/index._internal_.md#onoffbasedevicecommands)[`K`] | Handler function to be executed when the command is received |

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).addCommandHandler

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/NamedHandler.ts#L36)

___

### addDeviceClusters

▸ `Protected` **addDeviceClusters**(`attributeInitialValues?`): `void`

Adds mandatory clusters to the device

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributeInitialValues?` | `Object` | Optional object with initial attribute values for automatically added clusters |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:60](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/OnOffDevices.ts#L60)

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).addFixedLabel

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:76](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L76)

___

### addOnOffListener

▸ **addOnOffListener**(`listener`): `void`

Adds a listener for the OnOff attribute
This is an example of a convenient device class API to control the device without need to access clusters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`newValue`: `boolean`, `oldValue`: `boolean`) => `void` | Listener function to be called when the attribute changes |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:96](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/OnOffDevices.ts#L96)

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).addUserLabel

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

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).createOptionalClusterClient

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

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).createOptionalClusterServer

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).ensureEndpointIds

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:193](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L193)

___

### findHighestEndpointId

▸ **findHighestEndpointId**(): `number`

#### Returns

`number`

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).findHighestEndpointId

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:179](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L179)

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/cluster.md#clusterclientobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>[]

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getAllClusterClients

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:228](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L228)

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/cluster.md#clusterserverobj)<[`Attributes`](../interfaces/cluster.Attributes.md), [`Commands`](../interfaces/cluster.Commands.md)\>[]

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getAllClusterServers

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getChildEndpoint

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:171](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L171)

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](device.Endpoint.md)[]

#### Returns

[`Endpoint`](device.Endpoint.md)[]

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getChildEndpoints

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

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getClusterClient

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getClusterClientById

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getClusterServer

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getClusterServerById

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:133](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L133)

___

### getDeviceTypes

▸ **getDeviceTypes**(): [`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/device.md#devicetypedefinition)\>

#### Returns

[`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/device.md#devicetypedefinition)\>

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getDeviceTypes

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:153](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L153)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getId

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getStructure

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).hasClusterClient

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).hasClusterServer

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:141](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L141)

___

### onOff

▸ **onOff**(`onOff`): `Promise`<`void`\>

Turns the device on or off
This is an example f a convenient device class API to control the device without need to access clusters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onOff` | `boolean` | true to turn on, false to turn off |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:76](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/OnOffDevices.ts#L76)

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

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).removeCommandHandler

#### Defined in

[packages/matter.js/src/device/Device.ts:134](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Device.ts#L134)

▸ **removeCommandHandler**<`K`\>(`action`, `handler`): `void`

Method to remove command handlers from the device.
The base class do not expose any commands!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"identify"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `handler` | [`OnOffBaseDeviceCommands`](../modules/index._internal_.md#onoffbasedevicecommands)[`K`] | Handler function to be removed |

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).removeCommandHandler

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/NamedHandler.ts#L37)

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).setDeviceTypes

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:157](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L157)

___

### toggle

▸ **toggle**(): `Promise`<`void`\>

Toggles the device on or off
This is an example f a convenient device class API to control the device without need to access clusters

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:84](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/OnOffDevices.ts#L84)

___

### verifyRequiredClusters

▸ `Protected` **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).verifyRequiredClusters

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:205](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/device/Endpoint.ts#L205)
