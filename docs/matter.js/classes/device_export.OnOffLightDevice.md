[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device/export](../modules/device_export.md) / OnOffLightDevice

# Class: OnOffLightDevice

[device/export](../modules/device_export.md).OnOffLightDevice

Device class for an OnOffPluginUnit Device

## Hierarchy

- [`OnOffBaseDevice`](device_export.OnOffBaseDevice.md)

  ↳ **`OnOffLightDevice`**

## Table of contents

### Constructors

- [constructor](device_export.OnOffLightDevice.md#constructor)

### Properties

- [commandHandler](device_export.OnOffLightDevice.md#commandhandler)
- [deviceType](device_export.OnOffLightDevice.md#devicetype)
- [deviceTypes](device_export.OnOffLightDevice.md#devicetypes)
- [isLighting](device_export.OnOffLightDevice.md#islighting)
- [name](device_export.OnOffLightDevice.md#name)
- [number](device_export.OnOffLightDevice.md#number)
- [uniqueStorageKey](device_export.OnOffLightDevice.md#uniquestoragekey)

### Methods

- [\_executeHandler](device_export.OnOffLightDevice.md#_executehandler)
- [addChildEndpoint](device_export.OnOffLightDevice.md#addchildendpoint)
- [addClusterClient](device_export.OnOffLightDevice.md#addclusterclient)
- [addClusterServer](device_export.OnOffLightDevice.md#addclusterserver)
- [addCommandHandler](device_export.OnOffLightDevice.md#addcommandhandler)
- [addDeviceClusters](device_export.OnOffLightDevice.md#adddeviceclusters)
- [addFixedLabel](device_export.OnOffLightDevice.md#addfixedlabel)
- [addOnOffListener](device_export.OnOffLightDevice.md#addonofflistener)
- [addUserLabel](device_export.OnOffLightDevice.md#adduserlabel)
- [close](device_export.OnOffLightDevice.md#close)
- [createOptionalClusterClient](device_export.OnOffLightDevice.md#createoptionalclusterclient)
- [createOptionalClusterServer](device_export.OnOffLightDevice.md#createoptionalclusterserver)
- [determineUniqueID](device_export.OnOffLightDevice.md#determineuniqueid)
- [getAllClusterClients](device_export.OnOffLightDevice.md#getallclusterclients)
- [getAllClusterServers](device_export.OnOffLightDevice.md#getallclusterservers)
- [getChildEndpoint](device_export.OnOffLightDevice.md#getchildendpoint)
- [getChildEndpoints](device_export.OnOffLightDevice.md#getchildendpoints)
- [getClusterClient](device_export.OnOffLightDevice.md#getclusterclient)
- [getClusterClientById](device_export.OnOffLightDevice.md#getclusterclientbyid)
- [getClusterServer](device_export.OnOffLightDevice.md#getclusterserver)
- [getClusterServerById](device_export.OnOffLightDevice.md#getclusterserverbyid)
- [getDeviceTypes](device_export.OnOffLightDevice.md#getdevicetypes)
- [getNumber](device_export.OnOffLightDevice.md#getnumber)
- [getOnOff](device_export.OnOffLightDevice.md#getonoff)
- [hasClusterClient](device_export.OnOffLightDevice.md#hasclusterclient)
- [hasClusterServer](device_export.OnOffLightDevice.md#hasclusterserver)
- [removeChildEndpoint](device_export.OnOffLightDevice.md#removechildendpoint)
- [removeCommandHandler](device_export.OnOffLightDevice.md#removecommandhandler)
- [removeFromStructure](device_export.OnOffLightDevice.md#removefromstructure)
- [setBridgedDeviceReachability](device_export.OnOffLightDevice.md#setbridgeddevicereachability)
- [setDeviceTypes](device_export.OnOffLightDevice.md#setdevicetypes)
- [setOnOff](device_export.OnOffLightDevice.md#setonoff)
- [setStructureChangedCallback](device_export.OnOffLightDevice.md#setstructurechangedcallback)
- [toggle](device_export.OnOffLightDevice.md#toggle)
- [updatePartsList](device_export.OnOffLightDevice.md#updatepartslist)
- [verifyRequiredClusters](device_export.OnOffLightDevice.md#verifyrequiredclusters)

## Constructors

### constructor

• **new OnOffLightDevice**(`onOffAttributeInitialValues?`, `options?`): [`OnOffLightDevice`](device_export.OnOffLightDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `onOffAttributeInitialValues?` | [`AttributeInitialValues`](../modules/cluster_export.md#attributeinitialvalues)\<[`Merge`](../modules/util_export.md#merge)\<\{ `onOff`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `levelControlForLighting`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>\> |
| `options` | [`EndpointOptions`](../interfaces/device_export.EndpointOptions.md) |

#### Returns

[`OnOffLightDevice`](device_export.OnOffLightDevice.md)

#### Overrides

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[constructor](device_export.OnOffBaseDevice.md#constructor)

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:164](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/OnOffDevices.ts#L164)

## Properties

### commandHandler

• `Protected` **commandHandler**: [`NamedHandler`](util_export.NamedHandler.md)\<`any`\>

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[commandHandler](device_export.OnOffBaseDevice.md#commandhandler)

#### Defined in

[packages/matter.js/src/device/Device.ts:168](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Device.ts#L168)

___

### deviceType

• `Readonly` **deviceType**: `number`

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[deviceType](device_export.OnOffBaseDevice.md#devicetype)

#### Defined in

[packages/matter.js/src/device/Device.ts:167](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Device.ts#L167)

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/device_export.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

One or multiple DeviceTypeDefinitions of the endpoint

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[deviceTypes](device_export.OnOffBaseDevice.md#devicetypes)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L54)

___

### isLighting

• `Protected` **isLighting**: `boolean` = `false`

Define if Lighting feature is set

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[isLighting](device_export.OnOffBaseDevice.md#islighting)

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/OnOffDevices.ts#L65)

___

### name

• **name**: `string` = `""`

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[name](device_export.OnOffBaseDevice.md#name)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L40)

___

### number

• **number**: `undefined` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[number](device_export.OnOffBaseDevice.md#number)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L38)

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[uniqueStorageKey](device_export.OnOffBaseDevice.md#uniquestoragekey)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[_executeHandler](device_export.OnOffBaseDevice.md#_executehandler)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[_executeHandler](device_export.OnOffBaseDevice.md#_executehandler)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[addChildEndpoint](device_export.OnOffBaseDevice.md#addchildendpoint)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[addClusterClient](device_export.OnOffBaseDevice.md#addclusterclient)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[addClusterServer](device_export.OnOffBaseDevice.md#addclusterserver)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[addCommandHandler](device_export.OnOffBaseDevice.md#addcommandhandler)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[addCommandHandler](device_export.OnOffBaseDevice.md#addcommandhandler)

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/NamedHandler.ts#L40)

___

### addDeviceClusters

▸ **addDeviceClusters**(`attributeInitialValues?`, `excludeList?`): `void`

Adds mandatory clusters to the device

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `attributeInitialValues?` | `Object` | `undefined` | Optional object with initial attribute values for automatically added clusters |
| `excludeList` | [`ClusterId`](../modules/datatype_export.md#clusterid)[] | `[]` | List of clusters to exclude from being added |

#### Returns

`void`

#### Overrides

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[addDeviceClusters](device_export.OnOffBaseDevice.md#adddeviceclusters)

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:175](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/OnOffDevices.ts#L175)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[addFixedLabel](device_export.OnOffBaseDevice.md#addfixedlabel)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[addOnOffListener](device_export.OnOffBaseDevice.md#addonofflistener)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[addUserLabel](device_export.OnOffBaseDevice.md#adduserlabel)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L127)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[close](device_export.OnOffBaseDevice.md#close)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[createOptionalClusterClient](device_export.OnOffBaseDevice.md#createoptionalclusterclient)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[createOptionalClusterServer](device_export.OnOffBaseDevice.md#createoptionalclusterserver)

#### Defined in

[packages/matter.js/src/device/Device.ts:229](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Device.ts#L229)

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[determineUniqueID](device_export.OnOffBaseDevice.md#determineuniqueid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:291](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L291)

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getAllClusterClients](device_export.OnOffBaseDevice.md#getallclusterclients)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:351](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L351)

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getAllClusterServers](device_export.OnOffBaseDevice.md#getallclusterservers)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getChildEndpoint](device_export.OnOffBaseDevice.md#getchildendpoint)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:273](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L273)

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](device_export.Endpoint.md)[]

#### Returns

[`Endpoint`](device_export.Endpoint.md)[]

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getChildEndpoints](device_export.OnOffBaseDevice.md#getchildendpoints)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getClusterClient](device_export.OnOffBaseDevice.md#getclusterclient)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getClusterClientById](device_export.OnOffBaseDevice.md#getclusterclientbyid)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getClusterServer](device_export.OnOffBaseDevice.md#getclusterserver)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getClusterServerById](device_export.OnOffBaseDevice.md#getclusterserverbyid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:209](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L209)

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/device_export.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/device_export.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getDeviceTypes](device_export.OnOffBaseDevice.md#getdevicetypes)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:237](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L237)

___

### getNumber

▸ **getNumber**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getNumber](device_export.OnOffBaseDevice.md#getnumber)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:100](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L100)

___

### getOnOff

▸ **getOnOff**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getOnOff](device_export.OnOffBaseDevice.md#getonoff)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[hasClusterClient](device_export.OnOffBaseDevice.md#hasclusterclient)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[hasClusterServer](device_export.OnOffBaseDevice.md#hasclusterserver)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[removeChildEndpoint](device_export.OnOffBaseDevice.md#removechildendpoint)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[removeCommandHandler](device_export.OnOffBaseDevice.md#removecommandhandler)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[removeCommandHandler](device_export.OnOffBaseDevice.md#removecommandhandler)

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/NamedHandler.ts#L41)

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[removeFromStructure](device_export.OnOffBaseDevice.md#removefromstructure)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[setBridgedDeviceReachability](device_export.OnOffBaseDevice.md#setbridgeddevicereachability)

#### Defined in

[packages/matter.js/src/device/Device.ts:296](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Device.ts#L296)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[setDeviceTypes](device_export.OnOffBaseDevice.md#setdevicetypes)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[setOnOff](device_export.OnOffBaseDevice.md#setonoff)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[setStructureChangedCallback](device_export.OnOffBaseDevice.md#setstructurechangedcallback)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[toggle](device_export.OnOffBaseDevice.md#toggle)

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/OnOffDevices.ts#L127)

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[updatePartsList](device_export.OnOffBaseDevice.md#updatepartslist)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:355](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L355)

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[verifyRequiredClusters](device_export.OnOffBaseDevice.md#verifyrequiredclusters)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:313](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/Endpoint.ts#L313)
