[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / DimmableBaseDevice

# Class: DimmableBaseDevice

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).DimmableBaseDevice

## Hierarchy

- [`DimmableBaseDevice_base`](../modules/export._internal_.md#dimmablebasedevice_base)

  ↳ **`DimmableBaseDevice`**

  ↳↳ [`DimmablePluginUnitDevice`](exports_device.DimmablePluginUnitDevice.md)

  ↳↳ [`DimmableLightDevice`](exports_device.DimmableLightDevice.md)

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

• **new DimmableBaseDevice**(`definition`, `attributeInitialValues?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition) |
| `attributeInitialValues?` | `Object` |
| `options?` | [`EndpointOptions`](../interfaces/exports_device.EndpointOptions.md) |

#### Inherited from

DimmableBaseDevice\_base.constructor

#### Defined in

packages/matter.js/dist/cjs/device/DimmableDevices.d.ts:17

## Properties

### commandHandler

• `Protected` **commandHandler**: [`NamedHandler`](export._internal_.NamedHandler.md)<`any`\>

#### Inherited from

DimmableBaseDevice\_base.commandHandler

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:64

___

### deviceType

• `Readonly` **deviceType**: `number`

#### Inherited from

DimmableBaseDevice\_base.deviceType

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:63

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Inherited from

DimmableBaseDevice\_base.deviceTypes

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:19

___

### id

• **id**: `undefined` \| [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

DimmableBaseDevice\_base.id

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:23

___

### name

• **name**: `string`

#### Inherited from

DimmableBaseDevice\_base.name

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:25

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

DimmableBaseDevice\_base.uniqueStorageKey

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:24

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

DimmableBaseDevice\_base.\_executeHandler

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:96

▸ `Protected` **_executeHandler**<`K_2`\>(`action`, `...args`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K_2` | extends keyof [`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K_2` |
| `...args` | `Parameters`<[`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands)[`K_2`]\> |

#### Returns

`Promise`<`void`\>

#### Inherited from

DimmableBaseDevice\_base.\_executeHandler

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:33

▸ `Protected` **_executeHandler**<`K_2`\>(`action`, `...args`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K_2` | extends keyof [`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K_2` |
| `...args` | `Parameters`<[`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands)[`K_2`]\> |

#### Returns

`Promise`<`void`\>

#### Inherited from

DimmableBaseDevice\_base.\_executeHandler

#### Defined in

packages/matter.js/dist/cjs/device/DimmableDevices.d.ts:22

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

DimmableBaseDevice\_base.addChildEndpoint

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

DimmableBaseDevice\_base.addClusterClient

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

DimmableBaseDevice\_base.addClusterServer

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:40

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

DimmableBaseDevice\_base.addCommandHandler

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:79

▸ **addCommandHandler**<`K`\>(`action`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K` |
| `handler` | [`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands)[`K`] |

#### Returns

`void`

#### Inherited from

DimmableBaseDevice\_base.addCommandHandler

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:31

▸ **addCommandHandler**<`K`\>(`action`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K` |
| `handler` | [`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands)[`K`] |

#### Returns

`void`

#### Inherited from

DimmableBaseDevice\_base.addCommandHandler

#### Defined in

packages/matter.js/dist/cjs/device/DimmableDevices.d.ts:20

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

packages/matter.js/dist/cjs/device/DimmableDevices.d.ts:35

___

### addDeviceClusters

▸ `Protected` **addDeviceClusters**(`attributeInitialValues?`, `excludeList?`): `void`

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

packages/matter.js/dist/cjs/device/DimmableDevices.d.ts:25

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

packages/matter.js/dist/cjs/device/Endpoint.d.ts:38

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

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:79

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

packages/matter.js/dist/cjs/device/Endpoint.d.ts:39

___

### clearStructureChangedCallback

▸ **clearStructureChangedCallback**(): `void`

#### Returns

`void`

#### Inherited from

DimmableBaseDevice\_base.clearStructureChangedCallback

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:36

___

### createOptionalClusterClient

▸ `Protected` **createOptionalClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

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
| `_cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Inherited from

DimmableBaseDevice\_base.createOptionalClusterClient

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:98

___

### createOptionalClusterServer

▸ `Protected` **createOptionalClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `E`\>

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
| `_cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `E`\>

#### Inherited from

DimmableBaseDevice\_base.createOptionalClusterServer

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:97

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

DimmableBaseDevice\_base.determineUniqueID

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:54

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Inherited from

DimmableBaseDevice\_base.getAllClusterClients

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:57

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Inherited from

DimmableBaseDevice\_base.getAllClusterServers

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:56

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

packages/matter.js/dist/cjs/device/Endpoint.d.ts:51

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](exports_device.Endpoint.md)[]

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

#### Inherited from

DimmableBaseDevice\_base.getChildEndpoints

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

DimmableBaseDevice\_base.getClusterClient

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:100

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

DimmableBaseDevice\_base.getClusterClientById

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

DimmableBaseDevice\_base.getClusterServer

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:99

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

DimmableBaseDevice\_base.getClusterServerById

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:44

___

### getCurrentLevel

▸ **getCurrentLevel**(): `undefined` \| ``null`` \| `number`

#### Returns

`undefined` \| ``null`` \| `number`

#### Defined in

packages/matter.js/dist/cjs/device/DimmableDevices.d.ts:28

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Inherited from

DimmableBaseDevice\_base.getDeviceTypes

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:48

___

### getId

▸ **getId**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

DimmableBaseDevice\_base.getId

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

DimmableBaseDevice\_base.hasClusterClient

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

DimmableBaseDevice\_base.hasClusterServer

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:46

___

### isOn

▸ **isOn**(): `Promise`<`undefined` \| `boolean`\>

#### Returns

`Promise`<`undefined` \| `boolean`\>

#### Inherited from

DimmableBaseDevice\_base.isOn

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:72

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

DimmableBaseDevice\_base.onOff

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:66

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

DimmableBaseDevice\_base.removeChildEndpoint

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:53

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

DimmableBaseDevice\_base.removeCommandHandler

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:87

▸ **removeCommandHandler**<`K_1`\>(`action`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K_1` | extends keyof [`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K_1` |
| `handler` | [`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands)[`K_1`] |

#### Returns

`void`

#### Inherited from

DimmableBaseDevice\_base.removeCommandHandler

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:32

▸ **removeCommandHandler**<`K_1`\>(`action`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K_1` | extends keyof [`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K_1` |
| `handler` | [`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands)[`K_1`] |

#### Returns

`void`

#### Inherited from

DimmableBaseDevice\_base.removeCommandHandler

#### Defined in

packages/matter.js/dist/cjs/device/DimmableDevices.d.ts:21

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

packages/matter.js/dist/cjs/device/DimmableDevices.d.ts:29

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

DimmableBaseDevice\_base.setDeviceTypes

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

DimmableBaseDevice\_base.setStructureChangedCallback

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:35

___

### toggle

▸ **toggle**(): `Promise`<`void`\>

Toggles the device on or off
This is an example f a convenient device class API to control the device without need to access clusters

#### Returns

`Promise`<`void`\>

#### Inherited from

DimmableBaseDevice\_base.toggle

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:71

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Inherited from

DimmableBaseDevice\_base.updatePartsList

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:58

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

DimmableBaseDevice\_base.verifyRequiredClusters

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:55
