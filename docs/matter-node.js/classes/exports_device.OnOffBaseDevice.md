[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/device](../modules/exports_device.md) / OnOffBaseDevice

# Class: OnOffBaseDevice

[exports/device](../modules/exports_device.md).OnOffBaseDevice

Abstract Base class for OnOff devices

## Hierarchy

- [`OnOffBaseDevice_base`](../modules/export._internal_.md#onoffbasedevice_base)

  ↳ **`OnOffBaseDevice`**

  ↳↳ [`OnOffPluginUnitDevice`](exports_device.OnOffPluginUnitDevice.md)

  ↳↳ [`OnOffLightDevice`](exports_device.OnOffLightDevice.md)

## Table of contents

### Constructors

- [constructor](exports_device.OnOffBaseDevice.md#constructor)

### Properties

- [commandHandler](exports_device.OnOffBaseDevice.md#commandhandler)
- [deviceType](exports_device.OnOffBaseDevice.md#devicetype)
- [deviceTypes](exports_device.OnOffBaseDevice.md#devicetypes)
- [id](exports_device.OnOffBaseDevice.md#id)
- [name](exports_device.OnOffBaseDevice.md#name)
- [uniqueStorageKey](exports_device.OnOffBaseDevice.md#uniquestoragekey)

### Methods

- [\_executeHandler](exports_device.OnOffBaseDevice.md#_executehandler)
- [addChildEndpoint](exports_device.OnOffBaseDevice.md#addchildendpoint)
- [addClusterClient](exports_device.OnOffBaseDevice.md#addclusterclient)
- [addClusterServer](exports_device.OnOffBaseDevice.md#addclusterserver)
- [addCommandHandler](exports_device.OnOffBaseDevice.md#addcommandhandler)
- [addDeviceClusters](exports_device.OnOffBaseDevice.md#adddeviceclusters)
- [addFixedLabel](exports_device.OnOffBaseDevice.md#addfixedlabel)
- [addOnOffListener](exports_device.OnOffBaseDevice.md#addonofflistener)
- [addUserLabel](exports_device.OnOffBaseDevice.md#adduserlabel)
- [clearStructureChangedCallback](exports_device.OnOffBaseDevice.md#clearstructurechangedcallback)
- [createOptionalClusterClient](exports_device.OnOffBaseDevice.md#createoptionalclusterclient)
- [createOptionalClusterServer](exports_device.OnOffBaseDevice.md#createoptionalclusterserver)
- [determineUniqueID](exports_device.OnOffBaseDevice.md#determineuniqueid)
- [getAllClusterClients](exports_device.OnOffBaseDevice.md#getallclusterclients)
- [getAllClusterServers](exports_device.OnOffBaseDevice.md#getallclusterservers)
- [getChildEndpoint](exports_device.OnOffBaseDevice.md#getchildendpoint)
- [getChildEndpoints](exports_device.OnOffBaseDevice.md#getchildendpoints)
- [getClusterClient](exports_device.OnOffBaseDevice.md#getclusterclient)
- [getClusterClientById](exports_device.OnOffBaseDevice.md#getclusterclientbyid)
- [getClusterServer](exports_device.OnOffBaseDevice.md#getclusterserver)
- [getClusterServerById](exports_device.OnOffBaseDevice.md#getclusterserverbyid)
- [getDeviceTypes](exports_device.OnOffBaseDevice.md#getdevicetypes)
- [getId](exports_device.OnOffBaseDevice.md#getid)
- [hasClusterClient](exports_device.OnOffBaseDevice.md#hasclusterclient)
- [hasClusterServer](exports_device.OnOffBaseDevice.md#hasclusterserver)
- [isOn](exports_device.OnOffBaseDevice.md#ison)
- [onOff](exports_device.OnOffBaseDevice.md#onoff)
- [removeChildEndpoint](exports_device.OnOffBaseDevice.md#removechildendpoint)
- [removeCommandHandler](exports_device.OnOffBaseDevice.md#removecommandhandler)
- [setDeviceTypes](exports_device.OnOffBaseDevice.md#setdevicetypes)
- [setStructureChangedCallback](exports_device.OnOffBaseDevice.md#setstructurechangedcallback)
- [toggle](exports_device.OnOffBaseDevice.md#toggle)
- [updatePartsList](exports_device.OnOffBaseDevice.md#updatepartslist)
- [verifyRequiredClusters](exports_device.OnOffBaseDevice.md#verifyrequiredclusters)

## Constructors

### constructor

• **new OnOffBaseDevice**(`definition`, `attributeInitialValues?`, `options?`)

Creates a new OnOffBaseDevice

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `definition` | [`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition) | Device type definition of the device to create |
| `attributeInitialValues?` | `Object` | Optional object with initial attribute values for automatically added clusters |
| `options?` | [`EndpointOptions`](../interfaces/exports_device.EndpointOptions.md) | Optional endpoint options |

#### Overrides

OnOffBaseDevice\_base.constructor

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:47

## Properties

### commandHandler

• `Protected` **commandHandler**: [`NamedHandler`](export._internal_.NamedHandler.md)<`any`\>

#### Inherited from

OnOffBaseDevice\_base.commandHandler

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:64

___

### deviceType

• `Readonly` **deviceType**: `number`

#### Inherited from

OnOffBaseDevice\_base.deviceType

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:63

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Inherited from

OnOffBaseDevice\_base.deviceTypes

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:19

___

### id

• **id**: `undefined` \| [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

OnOffBaseDevice\_base.id

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:23

___

### name

• **name**: `string`

#### Inherited from

OnOffBaseDevice\_base.name

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:25

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

OnOffBaseDevice\_base.uniqueStorageKey

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

OnOffBaseDevice\_base.\_executeHandler

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

OnOffBaseDevice\_base.\_executeHandler

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:33

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

OnOffBaseDevice\_base.addChildEndpoint

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

OnOffBaseDevice\_base.addClusterClient

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

OnOffBaseDevice\_base.addClusterServer

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

OnOffBaseDevice\_base.addCommandHandler

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

OnOffBaseDevice\_base.addCommandHandler

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:31

___

### addDeviceClusters

▸ `Protected` **addDeviceClusters**(`attributeInitialValues?`, `excludeList?`): `void`

Adds mandatory clusters to the device

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributeInitialValues?` | `Object` | Optional object with initial attribute values for automatically added clusters |
| `excludeList?` | [`ClusterId`](../modules/exports_datatype.md#clusterid)[] | List of clusters to exclude from being added |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:57

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

OnOffBaseDevice\_base.addFixedLabel

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

OnOffBaseDevice\_base.addUserLabel

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:39

___

### clearStructureChangedCallback

▸ **clearStructureChangedCallback**(): `void`

#### Returns

`void`

#### Inherited from

OnOffBaseDevice\_base.clearStructureChangedCallback

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

OnOffBaseDevice\_base.createOptionalClusterClient

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

OnOffBaseDevice\_base.createOptionalClusterServer

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:97

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

OnOffBaseDevice\_base.determineUniqueID

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:54

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Inherited from

OnOffBaseDevice\_base.getAllClusterClients

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:57

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Inherited from

OnOffBaseDevice\_base.getAllClusterServers

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

OnOffBaseDevice\_base.getChildEndpoint

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:51

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](exports_device.Endpoint.md)[]

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

#### Inherited from

OnOffBaseDevice\_base.getChildEndpoints

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

OnOffBaseDevice\_base.getClusterClient

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

OnOffBaseDevice\_base.getClusterClientById

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

OnOffBaseDevice\_base.getClusterServer

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

OnOffBaseDevice\_base.getClusterServerById

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:44

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Inherited from

OnOffBaseDevice\_base.getDeviceTypes

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:48

___

### getId

▸ **getId**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

OnOffBaseDevice\_base.getId

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

OnOffBaseDevice\_base.hasClusterClient

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

OnOffBaseDevice\_base.hasClusterServer

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:46

___

### isOn

▸ **isOn**(): `Promise`<`undefined` \| `boolean`\>

#### Returns

`Promise`<`undefined` \| `boolean`\>

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

OnOffBaseDevice\_base.removeChildEndpoint

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

OnOffBaseDevice\_base.removeCommandHandler

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

OnOffBaseDevice\_base.removeCommandHandler

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:32

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

OnOffBaseDevice\_base.setDeviceTypes

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

OnOffBaseDevice\_base.setStructureChangedCallback

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:35

___

### toggle

▸ **toggle**(): `Promise`<`void`\>

Toggles the device on or off
This is an example f a convenient device class API to control the device without need to access clusters

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:71

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Inherited from

OnOffBaseDevice\_base.updatePartsList

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:58

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

OnOffBaseDevice\_base.verifyRequiredClusters

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:55
