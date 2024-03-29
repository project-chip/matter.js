[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/device](../modules/exports_device.md) / [\<internal\>](../modules/exports_device._internal_.md) / DimmableBaseDevice

# Class: DimmableBaseDevice

[exports/device](../modules/exports_device.md).[\<internal\>](../modules/exports_device._internal_.md).DimmableBaseDevice

## Hierarchy

- [`DimmableBaseDevice_base`](../modules/exports_device._internal_.md#dimmablebasedevice_base)

  ↳ **`DimmableBaseDevice`**

  ↳↳ [`DimmablePluginUnitDevice`](exports_device.DimmablePluginUnitDevice.md)

  ↳↳ [`DimmableLightDevice`](exports_device.DimmableLightDevice.md)

## Table of contents

### Constructors

- [constructor](exports_device._internal_.DimmableBaseDevice.md#constructor)

### Properties

- [commandHandler](exports_device._internal_.DimmableBaseDevice.md#commandhandler)
- [deviceType](exports_device._internal_.DimmableBaseDevice.md#devicetype)
- [deviceTypes](exports_device._internal_.DimmableBaseDevice.md#devicetypes)
- [isLighting](exports_device._internal_.DimmableBaseDevice.md#islighting)
- [name](exports_device._internal_.DimmableBaseDevice.md#name)
- [number](exports_device._internal_.DimmableBaseDevice.md#number)
- [uniqueStorageKey](exports_device._internal_.DimmableBaseDevice.md#uniquestoragekey)

### Methods

- [\_executeHandler](exports_device._internal_.DimmableBaseDevice.md#_executehandler)
- [addChildEndpoint](exports_device._internal_.DimmableBaseDevice.md#addchildendpoint)
- [addClusterClient](exports_device._internal_.DimmableBaseDevice.md#addclusterclient)
- [addClusterServer](exports_device._internal_.DimmableBaseDevice.md#addclusterserver)
- [addCommandHandler](exports_device._internal_.DimmableBaseDevice.md#addcommandhandler)
- [addCurrentLevelListener](exports_device._internal_.DimmableBaseDevice.md#addcurrentlevellistener)
- [addDeviceClusters](exports_device._internal_.DimmableBaseDevice.md#adddeviceclusters)
- [addFixedLabel](exports_device._internal_.DimmableBaseDevice.md#addfixedlabel)
- [addOnOffListener](exports_device._internal_.DimmableBaseDevice.md#addonofflistener)
- [addUserLabel](exports_device._internal_.DimmableBaseDevice.md#adduserlabel)
- [close](exports_device._internal_.DimmableBaseDevice.md#close)
- [createOptionalClusterClient](exports_device._internal_.DimmableBaseDevice.md#createoptionalclusterclient)
- [createOptionalClusterServer](exports_device._internal_.DimmableBaseDevice.md#createoptionalclusterserver)
- [determineUniqueID](exports_device._internal_.DimmableBaseDevice.md#determineuniqueid)
- [getAllClusterClients](exports_device._internal_.DimmableBaseDevice.md#getallclusterclients)
- [getAllClusterServers](exports_device._internal_.DimmableBaseDevice.md#getallclusterservers)
- [getChildEndpoint](exports_device._internal_.DimmableBaseDevice.md#getchildendpoint)
- [getChildEndpoints](exports_device._internal_.DimmableBaseDevice.md#getchildendpoints)
- [getClusterClient](exports_device._internal_.DimmableBaseDevice.md#getclusterclient)
- [getClusterClientById](exports_device._internal_.DimmableBaseDevice.md#getclusterclientbyid)
- [getClusterServer](exports_device._internal_.DimmableBaseDevice.md#getclusterserver)
- [getClusterServerById](exports_device._internal_.DimmableBaseDevice.md#getclusterserverbyid)
- [getCurrentLevel](exports_device._internal_.DimmableBaseDevice.md#getcurrentlevel)
- [getDeviceTypes](exports_device._internal_.DimmableBaseDevice.md#getdevicetypes)
- [getNumber](exports_device._internal_.DimmableBaseDevice.md#getnumber)
- [getOnOff](exports_device._internal_.DimmableBaseDevice.md#getonoff)
- [hasClusterClient](exports_device._internal_.DimmableBaseDevice.md#hasclusterclient)
- [hasClusterServer](exports_device._internal_.DimmableBaseDevice.md#hasclusterserver)
- [removeChildEndpoint](exports_device._internal_.DimmableBaseDevice.md#removechildendpoint)
- [removeCommandHandler](exports_device._internal_.DimmableBaseDevice.md#removecommandhandler)
- [removeFromStructure](exports_device._internal_.DimmableBaseDevice.md#removefromstructure)
- [setBridgedDeviceReachability](exports_device._internal_.DimmableBaseDevice.md#setbridgeddevicereachability)
- [setCurrentLevel](exports_device._internal_.DimmableBaseDevice.md#setcurrentlevel)
- [setDeviceTypes](exports_device._internal_.DimmableBaseDevice.md#setdevicetypes)
- [setOnOff](exports_device._internal_.DimmableBaseDevice.md#setonoff)
- [setStructureChangedCallback](exports_device._internal_.DimmableBaseDevice.md#setstructurechangedcallback)
- [toggle](exports_device._internal_.DimmableBaseDevice.md#toggle)
- [updatePartsList](exports_device._internal_.DimmableBaseDevice.md#updatepartslist)
- [verifyRequiredClusters](exports_device._internal_.DimmableBaseDevice.md#verifyrequiredclusters)

## Constructors

### constructor

• **new DimmableBaseDevice**(`definition`, `attributeInitialValues?`, `options?`, `isLighting?`): [`DimmableBaseDevice`](exports_device._internal_.DimmableBaseDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md) |
| `attributeInitialValues?` | `Object` |
| `options?` | [`EndpointOptions`](../interfaces/exports_device.EndpointOptions.md) |
| `isLighting?` | `boolean` |

#### Returns

[`DimmableBaseDevice`](exports_device._internal_.DimmableBaseDevice.md)

#### Overrides

DimmableBaseDevice\_base.constructor

#### Defined in

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:26

## Properties

### commandHandler

• `Protected` **commandHandler**: [`NamedHandler`](util_export.NamedHandler.md)\<`any`\>

#### Inherited from

DimmableBaseDevice\_base.commandHandler

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:82

___

### deviceType

• `Readonly` **deviceType**: `number`

#### Inherited from

DimmableBaseDevice\_base.deviceType

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:81

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Inherited from

DimmableBaseDevice\_base.deviceTypes

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:20

___

### isLighting

• `Protected` **isLighting**: `boolean`

#### Inherited from

DimmableBaseDevice\_base.isLighting

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:39

___

### name

• **name**: `string`

#### Inherited from

DimmableBaseDevice\_base.name

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:26

___

### number

• **number**: `undefined` \| [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

DimmableBaseDevice\_base.number

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:24

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

DimmableBaseDevice\_base.uniqueStorageKey

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

#### Inherited from

DimmableBaseDevice\_base.\_executeHandler

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:114

▸ **_executeHandler**\<`K_2`\>(`action`, `...args`): `Promise`\<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K_2` | extends keyof [`OnOffBaseDeviceCommands`](../modules/exports_device._internal_.md#onoffbasedevicecommands) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K_2` |
| `...args` | `Parameters`\<[`OnOffBaseDeviceCommands`](../modules/exports_device._internal_.md#onoffbasedevicecommands)[`K_2`]\> |

#### Returns

`Promise`\<`void`\>

#### Inherited from

DimmableBaseDevice\_base.\_executeHandler

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:33

▸ **_executeHandler**\<`K_2`\>(`action`, `...args`): `Promise`\<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K_2` | extends keyof [`DimmableDeviceCommands`](../modules/exports_device._internal_.md#dimmabledevicecommands) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K_2` |
| `...args` | `Parameters`\<[`DimmableDeviceCommands`](../modules/exports_device._internal_.md#dimmabledevicecommands)[`K_2`]\> |

#### Returns

`Promise`\<`void`\>

#### Inherited from

DimmableBaseDevice\_base.\_executeHandler

#### Defined in

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:23

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

DimmableBaseDevice\_base.addChildEndpoint

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

DimmableBaseDevice\_base.addClusterClient

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

DimmableBaseDevice\_base.addClusterServer

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

#### Inherited from

DimmableBaseDevice\_base.addCommandHandler

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:97

▸ **addCommandHandler**\<`K`\>(`action`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`OnOffBaseDeviceCommands`](../modules/exports_device._internal_.md#onoffbasedevicecommands) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K` |
| `handler` | [`OnOffBaseDeviceCommands`](../modules/exports_device._internal_.md#onoffbasedevicecommands)[`K`] |

#### Returns

`void`

#### Inherited from

DimmableBaseDevice\_base.addCommandHandler

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:31

▸ **addCommandHandler**\<`K`\>(`action`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DimmableDeviceCommands`](../modules/exports_device._internal_.md#dimmabledevicecommands) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K` |
| `handler` | [`DimmableDeviceCommands`](../modules/exports_device._internal_.md#dimmabledevicecommands)[`K`] |

#### Returns

`void`

#### Inherited from

DimmableBaseDevice\_base.addCommandHandler

#### Defined in

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:21

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

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:39

___

### addDeviceClusters

▸ **addDeviceClusters**(`attributeInitialValues?`, `excludeList?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributeInitialValues?` | `Object` |
| `excludeList?` | [`ClusterId`](../modules/exports_datatype.md#clusterid)[] |

#### Returns

`void`

#### Overrides

DimmableBaseDevice\_base.addDeviceClusters

#### Defined in

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:29

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

DimmableBaseDevice\_base.addFixedLabel

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:40

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

DimmableBaseDevice\_base.addOnOffListener

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:81

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

DimmableBaseDevice\_base.addUserLabel

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:41

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

DimmableBaseDevice\_base.close

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

#### Inherited from

DimmableBaseDevice\_base.createOptionalClusterClient

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

#### Inherited from

DimmableBaseDevice\_base.createOptionalClusterServer

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:115

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

DimmableBaseDevice\_base.determineUniqueID

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:56

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Inherited from

DimmableBaseDevice\_base.getAllClusterClients

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:59

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Inherited from

DimmableBaseDevice\_base.getAllClusterServers

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

DimmableBaseDevice\_base.getChildEndpoint

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:53

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](exports_device.Endpoint.md)[]

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

#### Inherited from

DimmableBaseDevice\_base.getChildEndpoints

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

#### Inherited from

DimmableBaseDevice\_base.getClusterClient

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

DimmableBaseDevice\_base.getClusterClientById

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

#### Inherited from

DimmableBaseDevice\_base.getClusterServer

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

DimmableBaseDevice\_base.getClusterServerById

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:46

___

### getCurrentLevel

▸ **getCurrentLevel**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:32

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Inherited from

DimmableBaseDevice\_base.getDeviceTypes

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:50

___

### getNumber

▸ **getNumber**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

DimmableBaseDevice\_base.getNumber

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:39

___

### getOnOff

▸ **getOnOff**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DimmableBaseDevice\_base.getOnOff

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:69

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

DimmableBaseDevice\_base.hasClusterClient

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

DimmableBaseDevice\_base.hasClusterServer

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

DimmableBaseDevice\_base.removeChildEndpoint

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

#### Inherited from

DimmableBaseDevice\_base.removeCommandHandler

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:105

▸ **removeCommandHandler**\<`K_1`\>(`action`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K_1` | extends keyof [`OnOffBaseDeviceCommands`](../modules/exports_device._internal_.md#onoffbasedevicecommands) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K_1` |
| `handler` | [`OnOffBaseDeviceCommands`](../modules/exports_device._internal_.md#onoffbasedevicecommands)[`K_1`] |

#### Returns

`void`

#### Inherited from

DimmableBaseDevice\_base.removeCommandHandler

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:32

▸ **removeCommandHandler**\<`K_1`\>(`action`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K_1` | extends keyof [`DimmableDeviceCommands`](../modules/exports_device._internal_.md#dimmabledevicecommands) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K_1` |
| `handler` | [`DimmableDeviceCommands`](../modules/exports_device._internal_.md#dimmabledevicecommands)[`K_1`] |

#### Returns

`void`

#### Inherited from

DimmableBaseDevice\_base.removeCommandHandler

#### Defined in

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:22

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Inherited from

DimmableBaseDevice\_base.removeFromStructure

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

#### Inherited from

DimmableBaseDevice\_base.setBridgedDeviceReachability

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:125

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

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:33

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

DimmableBaseDevice\_base.setDeviceTypes

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:51

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

DimmableBaseDevice\_base.setOnOff

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:68

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

DimmableBaseDevice\_base.setStructureChangedCallback

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:36

___

### toggle

▸ **toggle**(): `void`

Toggles the device on or off
This is an example f a convenient device class API to control the device without need to access clusters

#### Returns

`void`

#### Inherited from

DimmableBaseDevice\_base.toggle

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:74

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Inherited from

DimmableBaseDevice\_base.updatePartsList

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:60

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

DimmableBaseDevice\_base.verifyRequiredClusters

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:57
