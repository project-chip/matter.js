[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / OnOffBaseDevice

# Class: OnOffBaseDevice

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).OnOffBaseDevice

Abstract Base class for OnOff devices

## Hierarchy

- [`OnOffBaseDevice_base`](../modules/index._internal_.md#onoffbasedevice_base)

  ↳ **`OnOffBaseDevice`**

  ↳↳ [`OnOffPluginUnitDevice`](exports_device.OnOffPluginUnitDevice.md)

  ↳↳ [`OnOffLightDevice`](exports_device.OnOffLightDevice.md)

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
| `definition` | [`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition) | Device type definition of the device to create |
| `attributeInitialValues?` | `Object` | Optional object with initial attribute values for automatically added clusters |
| `endpointId?` | `number` | Optional endpoint ID of the device. If not set, the device will be instanced as a root device |

#### Overrides

OnOffBaseDevice\_base.constructor

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:32

## Properties

### deviceType

• `Readonly` **deviceType**: `number`

#### Inherited from

OnOffBaseDevice\_base.deviceType

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:51

___

### deviceTypes

• `Protected` **deviceTypes**: [`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition)\>

#### Inherited from

OnOffBaseDevice\_base.deviceTypes

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:17

___

### id

• **id**: `undefined` \| `number`

#### Inherited from

OnOffBaseDevice\_base.id

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:21

___

### name

• **name**: `string`

#### Inherited from

OnOffBaseDevice\_base.name

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

#### Inherited from

OnOffBaseDevice\_base.\_executeHandler

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:85

▸ `Protected` **_executeHandler**<`K_2`\>(`action`, `...args`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K_2` | extends ``"identify"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K_2` |
| `...args` | `Parameters`<[`OnOffBaseDeviceCommands`](../modules/index._internal_.md#onoffbasedevicecommands)[`K_2`]\> |

#### Returns

`Promise`<`void`\>

#### Inherited from

OnOffBaseDevice\_base.\_executeHandler

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:18

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

OnOffBaseDevice\_base.addClusterClient

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

OnOffBaseDevice\_base.addClusterServer

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

#### Inherited from

OnOffBaseDevice\_base.addCommandHandler

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:68

▸ **addCommandHandler**<`K`\>(`action`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"identify"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K` |
| `handler` | [`OnOffBaseDeviceCommands`](../modules/index._internal_.md#onoffbasedevicecommands)[`K`] |

#### Returns

`void`

#### Inherited from

OnOffBaseDevice\_base.addCommandHandler

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:16

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

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:41

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

packages/matter.js/dist/cjs/device/Endpoint.d.ts:26

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

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:62

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

#### Inherited from

OnOffBaseDevice\_base.createOptionalClusterClient

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

#### Inherited from

OnOffBaseDevice\_base.createOptionalClusterServer

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

OnOffBaseDevice\_base.ensureEndpointIds

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:42

___

### findHighestEndpointId

▸ **findHighestEndpointId**(): `number`

#### Returns

`number`

#### Inherited from

OnOffBaseDevice\_base.findHighestEndpointId

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:41

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>[]

#### Inherited from

OnOffBaseDevice\_base.getAllClusterClients

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:45

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>[]

#### Inherited from

OnOffBaseDevice\_base.getAllClusterServers

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

OnOffBaseDevice\_base.getChildEndpoint

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:39

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](exports_device.Endpoint.md)[]

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

#### Inherited from

OnOffBaseDevice\_base.getChildEndpoints

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

#### Inherited from

OnOffBaseDevice\_base.getClusterClient

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

OnOffBaseDevice\_base.getClusterClientById

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

#### Inherited from

OnOffBaseDevice\_base.getClusterServer

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

OnOffBaseDevice\_base.getClusterServerById

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:32

___

### getDeviceTypes

▸ **getDeviceTypes**(): [`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition)\>

#### Returns

[`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition)\>

#### Inherited from

OnOffBaseDevice\_base.getDeviceTypes

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:36

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Inherited from

OnOffBaseDevice\_base.getId

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

OnOffBaseDevice\_base.getStructure

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

OnOffBaseDevice\_base.hasClusterClient

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

OnOffBaseDevice\_base.hasClusterServer

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:34

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

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:50

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

OnOffBaseDevice\_base.removeCommandHandler

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:76

▸ **removeCommandHandler**<`K_1`\>(`action`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K_1` | extends ``"identify"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K_1` |
| `handler` | [`OnOffBaseDeviceCommands`](../modules/index._internal_.md#onoffbasedevicecommands)[`K_1`] |

#### Returns

`void`

#### Inherited from

OnOffBaseDevice\_base.removeCommandHandler

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:17

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

OnOffBaseDevice\_base.setDeviceTypes

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:37

___

### toggle

▸ **toggle**(): `Promise`<`void`\>

Toggles the device on or off
This is an example f a convenient device class API to control the device without need to access clusters

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:55

___

### verifyRequiredClusters

▸ `Protected` **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

OnOffBaseDevice\_base.verifyRequiredClusters

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:43
