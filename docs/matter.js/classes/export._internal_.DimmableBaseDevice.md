[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / DimmableBaseDevice

# Class: DimmableBaseDevice

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).DimmableBaseDevice

## Hierarchy

- [`OnOffBaseDevice`](device_export.OnOffBaseDevice.md)<`this`\> & { `_executeHandler`: <K\>(`action`: `K`, ...`args`: `Parameters`<[`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands)[`K`]\>) => `Promise`<`void`\> ; `addCommandHandler`: <K\>(`action`: `K`, `handler`: [`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands)[`K`]) => `void` ; `removeCommandHandler`: <K\>(`action`: `K`, `handler`: [`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands)[`K`]) => `void`  }

  ↳ **`DimmableBaseDevice`**

  ↳↳ [`DimmablePluginUnitDevice`](device_export.DimmablePluginUnitDevice.md)

  ↳↳ [`DimmableLightDevice`](device_export.DimmableLightDevice.md)

## Table of contents

### Constructors

- [constructor](export._internal_.DimmableBaseDevice.md#constructor)

### Properties

- [commandHandler](export._internal_.DimmableBaseDevice.md#commandhandler)
- [deviceType](export._internal_.DimmableBaseDevice.md#devicetype)
- [deviceTypes](export._internal_.DimmableBaseDevice.md#devicetypes)
- [id](export._internal_.DimmableBaseDevice.md#id)
- [name](export._internal_.DimmableBaseDevice.md#name)
- [uniqueStorageKey](export._internal_.DimmableBaseDevice.md#uniquestoragekey)

### Methods

- [\_executeHandler](export._internal_.DimmableBaseDevice.md#_executehandler)
- [addChildEndpoint](export._internal_.DimmableBaseDevice.md#addchildendpoint)
- [addClusterClient](export._internal_.DimmableBaseDevice.md#addclusterclient)
- [addClusterServer](export._internal_.DimmableBaseDevice.md#addclusterserver)
- [addCommandHandler](export._internal_.DimmableBaseDevice.md#addcommandhandler)
- [addCurrentLevelListener](export._internal_.DimmableBaseDevice.md#addcurrentlevellistener)
- [addDeviceClusters](export._internal_.DimmableBaseDevice.md#adddeviceclusters)
- [addFixedLabel](export._internal_.DimmableBaseDevice.md#addfixedlabel)
- [addOnOffListener](export._internal_.DimmableBaseDevice.md#addonofflistener)
- [addUserLabel](export._internal_.DimmableBaseDevice.md#adduserlabel)
- [clearStructureChangedCallback](export._internal_.DimmableBaseDevice.md#clearstructurechangedcallback)
- [createOptionalClusterClient](export._internal_.DimmableBaseDevice.md#createoptionalclusterclient)
- [createOptionalClusterServer](export._internal_.DimmableBaseDevice.md#createoptionalclusterserver)
- [determineUniqueID](export._internal_.DimmableBaseDevice.md#determineuniqueid)
- [getAllClusterClients](export._internal_.DimmableBaseDevice.md#getallclusterclients)
- [getAllClusterServers](export._internal_.DimmableBaseDevice.md#getallclusterservers)
- [getChildEndpoint](export._internal_.DimmableBaseDevice.md#getchildendpoint)
- [getChildEndpoints](export._internal_.DimmableBaseDevice.md#getchildendpoints)
- [getClusterClient](export._internal_.DimmableBaseDevice.md#getclusterclient)
- [getClusterClientById](export._internal_.DimmableBaseDevice.md#getclusterclientbyid)
- [getClusterServer](export._internal_.DimmableBaseDevice.md#getclusterserver)
- [getClusterServerById](export._internal_.DimmableBaseDevice.md#getclusterserverbyid)
- [getCurrentLevel](export._internal_.DimmableBaseDevice.md#getcurrentlevel)
- [getDeviceTypes](export._internal_.DimmableBaseDevice.md#getdevicetypes)
- [getId](export._internal_.DimmableBaseDevice.md#getid)
- [hasClusterClient](export._internal_.DimmableBaseDevice.md#hasclusterclient)
- [hasClusterServer](export._internal_.DimmableBaseDevice.md#hasclusterserver)
- [isOn](export._internal_.DimmableBaseDevice.md#ison)
- [onOff](export._internal_.DimmableBaseDevice.md#onoff)
- [removeChildEndpoint](export._internal_.DimmableBaseDevice.md#removechildendpoint)
- [removeCommandHandler](export._internal_.DimmableBaseDevice.md#removecommandhandler)
- [setCurrentLevel](export._internal_.DimmableBaseDevice.md#setcurrentlevel)
- [setDeviceTypes](export._internal_.DimmableBaseDevice.md#setdevicetypes)
- [setStructureChangedCallback](export._internal_.DimmableBaseDevice.md#setstructurechangedcallback)
- [toggle](export._internal_.DimmableBaseDevice.md#toggle)
- [updatePartsList](export._internal_.DimmableBaseDevice.md#updatepartslist)
- [verifyRequiredClusters](export._internal_.DimmableBaseDevice.md#verifyrequiredclusters)

## Constructors

### constructor

• **new DimmableBaseDevice**(`...args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [definition: DeviceTypeDefinition, attributeInitialValues?: Object, options: EndpointOptions] |

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).constructor

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/NamedHandler.ts#L39)

## Properties

### commandHandler

• `Protected` **commandHandler**: [`NamedHandler`](export._internal_.NamedHandler.md)<`any`\>

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).commandHandler

#### Defined in

[packages/matter.js/src/device/Device.ts:126](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Device.ts#L126)

___

### deviceType

• `Readonly` **deviceType**: `number`

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).deviceType

#### Defined in

[packages/matter.js/src/device/Device.ts:125](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Device.ts#L125)

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]]

One or multiple DeviceTypeDefinitions of the endpoint

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).deviceTypes

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:53](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L53)

___

### id

• **id**: `undefined` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).id

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:37](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L37)

___

### name

• **name**: `string` = `""`

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).name

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L39)

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).uniqueStorageKey

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:38](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L38)

## Methods

### \_executeHandler

▸ `Protected` **_executeHandler**(`command`, `...args`): `Promise`<`any`\>

Execute a command handler. Should only be used internally, but can not be declared as protected officially
because needed public for derived classes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `never` | Command name to execute the handler for |
| `...args` | `any`[] | Arguments to be passed to the handler |

#### Returns

`Promise`<`any`\>

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).\_executeHandler

#### Defined in

[packages/matter.js/src/device/Device.ts:183](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Device.ts#L183)

▸ `Protected` **_executeHandler**<`K`\>(`action`, `...args`): `Promise`<`void`\>

Execute a command handler. Should only be used internally, but can not be declared as protected officially
because needed public for derived classes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `...args` | `Parameters`<[`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands)[`K`]\> | Arguments to be passed to the handler |

#### Returns

`Promise`<`void`\>

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).\_executeHandler

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/NamedHandler.ts#L42)

▸ `Protected` **_executeHandler**<`K`\>(`action`, `...args`): `Promise`<`void`\>

Execute a command handler. Should only be used internally, but can not be declared as protected officially
because needed public for derived classes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `...args` | `Parameters`<[`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands)[`K`]\> | Arguments to be passed to the handler |

#### Returns

`Promise`<`void`\>

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).\_executeHandler

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/NamedHandler.ts#L42)

___

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).addChildEndpoint

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:230](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L230)

___

### addClusterClient

▸ **addClusterClient**<`F`, `A`, `C`, `E`\>(`cluster`): `void`

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
| `cluster` | [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).addClusterClient

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:149](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L149)

___

### addClusterServer

▸ **addClusterServer**<`A`, `E`\>(`cluster`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\> |

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).addClusterServer

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:139](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L139)

___

### addCommandHandler

▸ **addCommandHandler**(`command`, `handler`): `void`

Method to add command handlers to the device.
The base class do not expose any commands!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `never` | Command name to add a handler for |
| `handler` | [`HandlerFunction`](../modules/export._internal_.md#handlerfunction) | Handler function to be executed when the command is received |

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).addCommandHandler

#### Defined in

[packages/matter.js/src/device/Device.ts:160](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Device.ts#L160)

▸ **addCommandHandler**<`K`\>(`action`, `handler`): `void`

Method to add command handlers to the device.
The base class do not expose any commands!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `handler` | [`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands)[`K`] | Handler function to be executed when the command is received |

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).addCommandHandler

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:40](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/NamedHandler.ts#L40)

▸ **addCommandHandler**<`K`\>(`action`, `handler`): `void`

Method to add command handlers to the device.
The base class do not expose any commands!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `handler` | [`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands)[`K`] | Handler function to be executed when the command is received |

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).addCommandHandler

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:40](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/NamedHandler.ts#L40)

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

[packages/matter.js/src/device/DimmableDevices.ts:71](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/DimmableDevices.ts#L71)

___

### addDeviceClusters

▸ `Protected` **addDeviceClusters**(`attributeInitialValues?`, `excludeList?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `attributeInitialValues?` | `Object` | `undefined` |
| `excludeList` | [`ClusterId`](../modules/datatype_export.md#clusterid)[] | `[]` |

#### Returns

`void`

#### Overrides

extendPublicHandlerMethods&lt;typeof OnOffBaseDevice, DimmableDeviceCommands\&gt;(
    OnOffBaseDevice,
).addDeviceClusters

#### Defined in

[packages/matter.js/src/device/DimmableDevices.ts:29](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/DimmableDevices.ts#L29)

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

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).addFixedLabel

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:99](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L99)

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

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).addOnOffListener

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:136](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/OnOffDevices.ts#L136)

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

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).addUserLabel

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:119](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L119)

___

### clearStructureChangedCallback

▸ **clearStructureChangedCallback**(): `void`

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).clearStructureChangedCallback

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:85](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L85)

___

### createOptionalClusterClient

▸ `Protected` **createOptionalClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).createOptionalClusterClient

#### Defined in

[packages/matter.js/src/device/Device.ts:198](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Device.ts#L198)

___

### createOptionalClusterServer

▸ `Protected` **createOptionalClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\>

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).createOptionalClusterServer

#### Defined in

[packages/matter.js/src/device/Device.ts:187](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Device.ts#L187)

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).determineUniqueID

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:254](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L254)

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getAllClusterClients

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:314](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L314)

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getAllClusterServers

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:310](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L310)

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

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getChildEndpoint

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:236](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L236)

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](device_export.Endpoint.md)[]

#### Returns

[`Endpoint`](device_export.Endpoint.md)[]

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getChildEndpoints

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:240](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L240)

___

### getClusterClient

▸ **getClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getClusterClient

#### Defined in

[packages/matter.js/src/device/Device.ts:229](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Device.ts#L229)

___

### getClusterClientById

▸ **getClusterClientById**(`clusterId`): `undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getClusterClientById

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:186](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L186)

___

### getClusterServer

▸ **getClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\>

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getClusterServer

#### Defined in

[packages/matter.js/src/device/Device.ts:209](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Device.ts#L209)

___

### getClusterServerById

▸ **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getClusterServerById

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:182](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L182)

___

### getCurrentLevel

▸ **getCurrentLevel**(): `undefined` \| ``null`` \| `number`

#### Returns

`undefined` \| ``null`` \| `number`

#### Defined in

[packages/matter.js/src/device/DimmableDevices.ts:58](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/DimmableDevices.ts#L58)

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getDeviceTypes

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:210](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L210)

___

### getId

▸ **getId**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).getId

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:92](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L92)

___

### hasClusterClient

▸ **hasClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).hasClusterClient

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:200](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L200)

___

### hasClusterServer

▸ **hasClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).hasClusterServer

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:190](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L190)

___

### isOn

▸ **isOn**(): `Promise`<`undefined` \| `boolean`\>

#### Returns

`Promise`<`undefined` \| `boolean`\>

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).isOn

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:125](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/OnOffDevices.ts#L125)

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

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).onOff

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:112](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/OnOffDevices.ts#L112)

___

### removeChildEndpoint

▸ `Protected` **removeChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).removeChildEndpoint

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:244](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L244)

___

### removeCommandHandler

▸ **removeCommandHandler**(`command`, `handler`): `void`

Method to remove command handlers from the device.
The base class do not expose any commands!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `never` | Command name to remove the handler from |
| `handler` | [`HandlerFunction`](../modules/export._internal_.md#handlerfunction) | Handler function to be removed |

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).removeCommandHandler

#### Defined in

[packages/matter.js/src/device/Device.ts:171](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Device.ts#L171)

▸ **removeCommandHandler**<`K`\>(`action`, `handler`): `void`

Method to remove command handlers from the device.
The base class do not expose any commands!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `handler` | [`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands)[`K`] | Handler function to be removed |

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).removeCommandHandler

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/NamedHandler.ts#L41)

▸ **removeCommandHandler**<`K`\>(`action`, `handler`): `void`

Method to remove command handlers from the device.
The base class do not expose any commands!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `handler` | [`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands)[`K`] | Handler function to be removed |

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).removeCommandHandler

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/NamedHandler.ts#L41)

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

[packages/matter.js/src/device/DimmableDevices.ts:62](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/DimmableDevices.ts#L62)

___

### setDeviceTypes

▸ **setDeviceTypes**(`deviceTypes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]] |

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).setDeviceTypes

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:214](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L214)

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

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).setStructureChangedCallback

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:80](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L80)

___

### toggle

▸ **toggle**(): `Promise`<`void`\>

Toggles the device on or off
This is an example f a convenient device class API to control the device without need to access clusters

#### Returns

`Promise`<`void`\>

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).toggle

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:120](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/OnOffDevices.ts#L120)

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).updatePartsList

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:318](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L318)

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods<typeof OnOffBaseDevice, DimmableDeviceCommands\>(
    OnOffBaseDevice,
).verifyRequiredClusters

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:276](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L276)
