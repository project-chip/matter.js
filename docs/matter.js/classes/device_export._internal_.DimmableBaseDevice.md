[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device/export](../modules/device_export.md) / [\<internal\>](../modules/device_export._internal_.md) / DimmableBaseDevice

# Class: DimmableBaseDevice

[device/export](../modules/device_export.md).[\<internal\>](../modules/device_export._internal_.md).DimmableBaseDevice

## Hierarchy

- [`OnOffBaseDevice`](device_export.OnOffBaseDevice.md)\<`this`\> & \{ `_executeHandler`: \<K\>(`action`: `K`, ...`args`: `Parameters`\<[`DimmableDeviceCommands`](../modules/device_export._internal_.md#dimmabledevicecommands)[`K`]\>) => `Promise`\<`void`\> ; `addCommandHandler`: \<K\>(`action`: `K`, `handler`: [`DimmableDeviceCommands`](../modules/device_export._internal_.md#dimmabledevicecommands)[`K`]) => `void` ; `removeCommandHandler`: \<K\>(`action`: `K`, `handler`: [`DimmableDeviceCommands`](../modules/device_export._internal_.md#dimmabledevicecommands)[`K`]) => `void`  }

  ↳ **`DimmableBaseDevice`**

  ↳↳ [`DimmablePluginUnitDevice`](device_export.DimmablePluginUnitDevice.md)

  ↳↳ [`DimmableLightDevice`](device_export.DimmableLightDevice.md)

## Table of contents

### Constructors

- [constructor](device_export._internal_.DimmableBaseDevice.md#constructor)

### Properties

- [commandHandler](device_export._internal_.DimmableBaseDevice.md#commandhandler)
- [deviceType](device_export._internal_.DimmableBaseDevice.md#devicetype)
- [deviceTypes](device_export._internal_.DimmableBaseDevice.md#devicetypes)
- [isLighting](device_export._internal_.DimmableBaseDevice.md#islighting)
- [name](device_export._internal_.DimmableBaseDevice.md#name)
- [number](device_export._internal_.DimmableBaseDevice.md#number)
- [uniqueStorageKey](device_export._internal_.DimmableBaseDevice.md#uniquestoragekey)

### Methods

- [\_executeHandler](device_export._internal_.DimmableBaseDevice.md#_executehandler)
- [addChildEndpoint](device_export._internal_.DimmableBaseDevice.md#addchildendpoint)
- [addClusterClient](device_export._internal_.DimmableBaseDevice.md#addclusterclient)
- [addClusterServer](device_export._internal_.DimmableBaseDevice.md#addclusterserver)
- [addCommandHandler](device_export._internal_.DimmableBaseDevice.md#addcommandhandler)
- [addCurrentLevelListener](device_export._internal_.DimmableBaseDevice.md#addcurrentlevellistener)
- [addDeviceClusters](device_export._internal_.DimmableBaseDevice.md#adddeviceclusters)
- [addFixedLabel](device_export._internal_.DimmableBaseDevice.md#addfixedlabel)
- [addOnOffListener](device_export._internal_.DimmableBaseDevice.md#addonofflistener)
- [addUserLabel](device_export._internal_.DimmableBaseDevice.md#adduserlabel)
- [close](device_export._internal_.DimmableBaseDevice.md#close)
- [createOptionalClusterClient](device_export._internal_.DimmableBaseDevice.md#createoptionalclusterclient)
- [createOptionalClusterServer](device_export._internal_.DimmableBaseDevice.md#createoptionalclusterserver)
- [determineUniqueID](device_export._internal_.DimmableBaseDevice.md#determineuniqueid)
- [getAllClusterClients](device_export._internal_.DimmableBaseDevice.md#getallclusterclients)
- [getAllClusterServers](device_export._internal_.DimmableBaseDevice.md#getallclusterservers)
- [getChildEndpoint](device_export._internal_.DimmableBaseDevice.md#getchildendpoint)
- [getChildEndpoints](device_export._internal_.DimmableBaseDevice.md#getchildendpoints)
- [getClusterClient](device_export._internal_.DimmableBaseDevice.md#getclusterclient)
- [getClusterClientById](device_export._internal_.DimmableBaseDevice.md#getclusterclientbyid)
- [getClusterServer](device_export._internal_.DimmableBaseDevice.md#getclusterserver)
- [getClusterServerById](device_export._internal_.DimmableBaseDevice.md#getclusterserverbyid)
- [getCurrentLevel](device_export._internal_.DimmableBaseDevice.md#getcurrentlevel)
- [getDeviceTypes](device_export._internal_.DimmableBaseDevice.md#getdevicetypes)
- [getNumber](device_export._internal_.DimmableBaseDevice.md#getnumber)
- [getOnOff](device_export._internal_.DimmableBaseDevice.md#getonoff)
- [hasClusterClient](device_export._internal_.DimmableBaseDevice.md#hasclusterclient)
- [hasClusterServer](device_export._internal_.DimmableBaseDevice.md#hasclusterserver)
- [removeChildEndpoint](device_export._internal_.DimmableBaseDevice.md#removechildendpoint)
- [removeCommandHandler](device_export._internal_.DimmableBaseDevice.md#removecommandhandler)
- [removeFromStructure](device_export._internal_.DimmableBaseDevice.md#removefromstructure)
- [setBridgedDeviceReachability](device_export._internal_.DimmableBaseDevice.md#setbridgeddevicereachability)
- [setCurrentLevel](device_export._internal_.DimmableBaseDevice.md#setcurrentlevel)
- [setDeviceTypes](device_export._internal_.DimmableBaseDevice.md#setdevicetypes)
- [setOnOff](device_export._internal_.DimmableBaseDevice.md#setonoff)
- [setStructureChangedCallback](device_export._internal_.DimmableBaseDevice.md#setstructurechangedcallback)
- [toggle](device_export._internal_.DimmableBaseDevice.md#toggle)
- [updatePartsList](device_export._internal_.DimmableBaseDevice.md#updatepartslist)
- [verifyRequiredClusters](device_export._internal_.DimmableBaseDevice.md#verifyrequiredclusters)

## Constructors

### constructor

• **new DimmableBaseDevice**(`definition`, `attributeInitialValues?`, `options?`, `isLighting?`): [`DimmableBaseDevice`](device_export._internal_.DimmableBaseDevice.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `definition` | [`DeviceTypeDefinition`](../interfaces/device_export.DeviceTypeDefinition.md) | `undefined` |
| `attributeInitialValues?` | `Object` | `undefined` |
| `options` | [`EndpointOptions`](../interfaces/device_export.EndpointOptions.md) | `{}` |
| `isLighting` | `boolean` | `false` |

#### Returns

[`DimmableBaseDevice`](device_export._internal_.DimmableBaseDevice.md)

#### Overrides

extendPublicHandlerMethods\&lt;typeof OnOffBaseDevice, DimmableDeviceCommands\&gt;(
    OnOffBaseDevice,
).constructor

#### Defined in

[packages/matter.js/src/device/DimmableDevices.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/DimmableDevices.ts#L29)

## Properties

### commandHandler

• `Protected` **commandHandler**: [`NamedHandler`](util_export.NamedHandler.md)\<`any`\>

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).commandHandler

#### Defined in

[packages/matter.js/src/device/Device.ts:168](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Device.ts#L168)

___

### deviceType

• `Readonly` **deviceType**: `number`

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).deviceType

#### Defined in

[packages/matter.js/src/device/Device.ts:167](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Device.ts#L167)

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/device_export.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

One or multiple DeviceTypeDefinitions of the endpoint

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).deviceTypes

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L54)

___

### isLighting

• `Protected` **isLighting**: `boolean` = `false`

Define if Lighting feature is set

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).isLighting

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/OnOffDevices.ts#L65)

___

### name

• **name**: `string` = `""`

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).name

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L40)

___

### number

• **number**: `undefined` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).number

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L38)

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).uniqueStorageKey

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L39)

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

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).\_executeHandler

#### Defined in

[packages/matter.js/src/device/Device.ts:225](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Device.ts#L225)

▸ **_executeHandler**\<`K`\>(`action`, `...args`): `Promise`\<`void`\>

Execute a command handler. Should only be used internally, but can not be declared as protected officially
because needed public for derived classes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`OnOffBaseDeviceCommands`](../modules/device_export._internal_.md#onoffbasedevicecommands) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `...args` | `Parameters`\<[`OnOffBaseDeviceCommands`](../modules/device_export._internal_.md#onoffbasedevicecommands)[`K`]\> | Arguments to be passed to the handler |

#### Returns

`Promise`\<`void`\>

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).\_executeHandler

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/NamedHandler.ts#L42)

▸ **_executeHandler**\<`K`\>(`action`, `...args`): `Promise`\<`void`\>

Execute a command handler. Should only be used internally, but can not be declared as protected officially
because needed public for derived classes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DimmableDeviceCommands`](../modules/device_export._internal_.md#dimmabledevicecommands) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `...args` | `Parameters`\<[`DimmableDeviceCommands`](../modules/device_export._internal_.md#dimmabledevicecommands)[`K`]\> | Arguments to be passed to the handler |

#### Returns

`Promise`\<`void`\>

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).\_executeHandler

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/NamedHandler.ts#L42)

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

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).addChildEndpoint

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

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).addClusterClient

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

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).addClusterServer

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:147](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L147)

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

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).addCommandHandler

#### Defined in

[packages/matter.js/src/device/Device.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Device.ts#L202)

▸ **addCommandHandler**\<`K`\>(`action`, `handler`): `void`

Method to add command handlers to the device.
The base class do not expose any commands!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`OnOffBaseDeviceCommands`](../modules/device_export._internal_.md#onoffbasedevicecommands) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `handler` | [`OnOffBaseDeviceCommands`](../modules/device_export._internal_.md#onoffbasedevicecommands)[`K`] | Handler function to be executed when the command is received |

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).addCommandHandler

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/NamedHandler.ts#L40)

▸ **addCommandHandler**\<`K`\>(`action`, `handler`): `void`

Method to add command handlers to the device.
The base class do not expose any commands!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DimmableDeviceCommands`](../modules/device_export._internal_.md#dimmabledevicecommands) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `handler` | [`DimmableDeviceCommands`](../modules/device_export._internal_.md#dimmabledevicecommands)[`K`] | Handler function to be executed when the command is received |

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).addCommandHandler

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/NamedHandler.ts#L40)

___

### addCurrentLevelListener

▸ **addCurrentLevelListener**(`listener`): `void`

Adds a listener for the CurrentLevel attribute

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`newValue`: ``null`` \| `number`, `oldValue`: ``null`` \| `number`) => `void` | Listener function to be called when the attribute changes |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/DimmableDevices.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/DimmableDevices.ts#L81)

___

### addDeviceClusters

▸ **addDeviceClusters**(`attributeInitialValues?`, `excludeList?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `attributeInitialValues?` | `Object` | `undefined` |
| `excludeList` | [`ClusterId`](../modules/datatype_export.md#clusterid)[] | `[]` |

#### Returns

`void`

#### Overrides

extendPublicHandlerMethods\&lt;typeof OnOffBaseDevice, DimmableDeviceCommands\&gt;(
    OnOffBaseDevice,
).addDeviceClusters

#### Defined in

[packages/matter.js/src/device/DimmableDevices.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/DimmableDevices.ts#L38)

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

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).addFixedLabel

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:107](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L107)

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

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).addOnOffListener

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:139](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/OnOffDevices.ts#L139)

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

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).addUserLabel

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L127)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).close

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L94)

___

### createOptionalClusterClient

▸ **createOptionalClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

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
| `_cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).createOptionalClusterClient

#### Defined in

[packages/matter.js/src/device/Device.ts:240](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Device.ts#L240)

___

### createOptionalClusterServer

▸ **createOptionalClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\>

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
| `_cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\>

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).createOptionalClusterServer

#### Defined in

[packages/matter.js/src/device/Device.ts:229](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Device.ts#L229)

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).determineUniqueID

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:291](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L291)

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getAllClusterClients

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:351](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L351)

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getAllClusterServers

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:347](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L347)

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

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getChildEndpoint

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:273](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L273)

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](device_export.Endpoint.md)[]

#### Returns

[`Endpoint`](device_export.Endpoint.md)[]

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getChildEndpoints

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

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getClusterClient

#### Defined in

[packages/matter.js/src/device/Device.ts:271](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Device.ts#L271)

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

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getClusterClientById

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

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getClusterServer

#### Defined in

[packages/matter.js/src/device/Device.ts:251](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Device.ts#L251)

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

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getClusterServerById

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:209](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L209)

___

### getCurrentLevel

▸ **getCurrentLevel**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/device/DimmableDevices.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/DimmableDevices.ts#L68)

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/device_export.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/device_export.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getDeviceTypes

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:237](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L237)

___

### getNumber

▸ **getNumber**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getNumber

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:100](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L100)

___

### getOnOff

▸ **getOnOff**(): `boolean`

#### Returns

`boolean`

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getOnOff

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:119](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/OnOffDevices.ts#L119)

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

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).hasClusterClient

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

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).hasClusterServer

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:217](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L217)

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

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).removeChildEndpoint

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:281](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L281)

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

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).removeCommandHandler

#### Defined in

[packages/matter.js/src/device/Device.ts:213](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Device.ts#L213)

▸ **removeCommandHandler**\<`K`\>(`action`, `handler`): `void`

Method to remove command handlers from the device.
The base class do not expose any commands!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`OnOffBaseDeviceCommands`](../modules/device_export._internal_.md#onoffbasedevicecommands) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `handler` | [`OnOffBaseDeviceCommands`](../modules/device_export._internal_.md#onoffbasedevicecommands)[`K`] | Handler function to be removed |

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).removeCommandHandler

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/NamedHandler.ts#L41)

▸ **removeCommandHandler**\<`K`\>(`action`, `handler`): `void`

Method to remove command handlers from the device.
The base class do not expose any commands!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DimmableDeviceCommands`](../modules/device_export._internal_.md#dimmabledevicecommands) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `handler` | [`DimmableDeviceCommands`](../modules/device_export._internal_.md#dimmabledevicecommands)[`K`] | Handler function to be removed |

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).removeCommandHandler

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/NamedHandler.ts#L41)

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).removeFromStructure

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L86)

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

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).setBridgedDeviceReachability

#### Defined in

[packages/matter.js/src/device/Device.ts:296](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Device.ts#L296)

___

### setCurrentLevel

▸ **setCurrentLevel**(`level`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | ``null`` \| `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/device/DimmableDevices.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/DimmableDevices.ts#L72)

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

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).setDeviceTypes

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:241](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L241)

___

### setOnOff

▸ **setOnOff**(`onOff`): `void`

Turns the device on or off
This is an example f a convenient device class API to control the device without need to access clusters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onOff` | `boolean` | true to turn on, false to turn off |

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).setOnOff

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/OnOffDevices.ts#L115)

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

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).setStructureChangedCallback

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L81)

___

### toggle

▸ **toggle**(): `void`

Toggles the device on or off
This is an example f a convenient device class API to control the device without need to access clusters

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).toggle

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/OnOffDevices.ts#L127)

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).updatePartsList

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:355](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L355)

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods\<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).verifyRequiredClusters

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:313](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L313)
