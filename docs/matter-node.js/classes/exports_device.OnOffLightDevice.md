[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/device](../modules/exports_device.md) / OnOffLightDevice

# Class: OnOffLightDevice

[exports/device](../modules/exports_device.md).OnOffLightDevice

Device class for an OnOffPluginUnit Device

## Hierarchy

- [`OnOffBaseDevice`](index._internal_.OnOffBaseDevice.md)

  ↳ **`OnOffLightDevice`**

## Table of contents

### Constructors

- [constructor](exports_device.OnOffLightDevice.md#constructor)

### Properties

- [deviceType](exports_device.OnOffLightDevice.md#devicetype)
- [deviceTypes](exports_device.OnOffLightDevice.md#devicetypes)
- [id](exports_device.OnOffLightDevice.md#id)
- [name](exports_device.OnOffLightDevice.md#name)

### Methods

- [\_executeHandler](exports_device.OnOffLightDevice.md#_executehandler)
- [addChildEndpoint](exports_device.OnOffLightDevice.md#addchildendpoint)
- [addClusterClient](exports_device.OnOffLightDevice.md#addclusterclient)
- [addClusterServer](exports_device.OnOffLightDevice.md#addclusterserver)
- [addCommandHandler](exports_device.OnOffLightDevice.md#addcommandhandler)
- [addDeviceClusters](exports_device.OnOffLightDevice.md#adddeviceclusters)
- [addFixedLabel](exports_device.OnOffLightDevice.md#addfixedlabel)
- [addOnOffListener](exports_device.OnOffLightDevice.md#addonofflistener)
- [addUserLabel](exports_device.OnOffLightDevice.md#adduserlabel)
- [createOptionalClusterClient](exports_device.OnOffLightDevice.md#createoptionalclusterclient)
- [createOptionalClusterServer](exports_device.OnOffLightDevice.md#createoptionalclusterserver)
- [ensureEndpointIds](exports_device.OnOffLightDevice.md#ensureendpointids)
- [findHighestEndpointId](exports_device.OnOffLightDevice.md#findhighestendpointid)
- [getAllClusterClients](exports_device.OnOffLightDevice.md#getallclusterclients)
- [getAllClusterServers](exports_device.OnOffLightDevice.md#getallclusterservers)
- [getChildEndpoint](exports_device.OnOffLightDevice.md#getchildendpoint)
- [getChildEndpoints](exports_device.OnOffLightDevice.md#getchildendpoints)
- [getClusterClient](exports_device.OnOffLightDevice.md#getclusterclient)
- [getClusterClientById](exports_device.OnOffLightDevice.md#getclusterclientbyid)
- [getClusterServer](exports_device.OnOffLightDevice.md#getclusterserver)
- [getClusterServerById](exports_device.OnOffLightDevice.md#getclusterserverbyid)
- [getDeviceTypes](exports_device.OnOffLightDevice.md#getdevicetypes)
- [getId](exports_device.OnOffLightDevice.md#getid)
- [getStructure](exports_device.OnOffLightDevice.md#getstructure)
- [hasClusterClient](exports_device.OnOffLightDevice.md#hasclusterclient)
- [hasClusterServer](exports_device.OnOffLightDevice.md#hasclusterserver)
- [onOff](exports_device.OnOffLightDevice.md#onoff)
- [removeCommandHandler](exports_device.OnOffLightDevice.md#removecommandhandler)
- [setDeviceTypes](exports_device.OnOffLightDevice.md#setdevicetypes)
- [toggle](exports_device.OnOffLightDevice.md#toggle)
- [verifyRequiredClusters](exports_device.OnOffLightDevice.md#verifyrequiredclusters)

## Constructors

### constructor

• **new OnOffLightDevice**(`onOffAttributeInitialValues?`, `endpointId?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `onOffAttributeInitialValues?` | [`AttributeInitialValues`](../modules/exports_cluster.md#attributeinitialvalues)<[`Merge`](../modules/util.md#merge)<{ `onOff`: [`Attribute`](../modules/exports_cluster.md#attribute)<`boolean`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes-1)<{ `lightingLevelControl`: [`BitFlag`](../modules/exports_schema.md#bitflag-1)  }\>\>\> |
| `endpointId?` | `number` |

#### Overrides

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[constructor](index._internal_.OnOffBaseDevice.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:74

## Properties

### deviceType

• `Readonly` **deviceType**: `number`

#### Inherited from

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[deviceType](index._internal_.OnOffBaseDevice.md#devicetype)

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:51

___

### deviceTypes

• `Protected` **deviceTypes**: [`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition)\>

#### Inherited from

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[deviceTypes](index._internal_.OnOffBaseDevice.md#devicetypes)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:17

___

### id

• **id**: `undefined` \| `number`

#### Inherited from

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[id](index._internal_.OnOffBaseDevice.md#id)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:21

___

### name

• **name**: `string`

#### Inherited from

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[name](index._internal_.OnOffBaseDevice.md#name)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[_executeHandler](index._internal_.OnOffBaseDevice.md#_executehandler)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[_executeHandler](index._internal_.OnOffBaseDevice.md#_executehandler)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[addChildEndpoint](index._internal_.OnOffBaseDevice.md#addchildendpoint)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[addClusterClient](index._internal_.OnOffBaseDevice.md#addclusterclient)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[addClusterServer](index._internal_.OnOffBaseDevice.md#addclusterserver)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[addCommandHandler](index._internal_.OnOffBaseDevice.md#addcommandhandler)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[addCommandHandler](index._internal_.OnOffBaseDevice.md#addcommandhandler)

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

#### Inherited from

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[addDeviceClusters](index._internal_.OnOffBaseDevice.md#adddeviceclusters)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[addFixedLabel](index._internal_.OnOffBaseDevice.md#addfixedlabel)

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

#### Inherited from

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[addOnOffListener](index._internal_.OnOffBaseDevice.md#addonofflistener)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[addUserLabel](index._internal_.OnOffBaseDevice.md#adduserlabel)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[createOptionalClusterClient](index._internal_.OnOffBaseDevice.md#createoptionalclusterclient)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[createOptionalClusterServer](index._internal_.OnOffBaseDevice.md#createoptionalclusterserver)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[ensureEndpointIds](index._internal_.OnOffBaseDevice.md#ensureendpointids)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:42

___

### findHighestEndpointId

▸ **findHighestEndpointId**(): `number`

#### Returns

`number`

#### Inherited from

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[findHighestEndpointId](index._internal_.OnOffBaseDevice.md#findhighestendpointid)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:41

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>[]

#### Inherited from

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[getAllClusterClients](index._internal_.OnOffBaseDevice.md#getallclusterclients)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:45

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md)\>[]

#### Inherited from

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[getAllClusterServers](index._internal_.OnOffBaseDevice.md#getallclusterservers)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[getChildEndpoint](index._internal_.OnOffBaseDevice.md#getchildendpoint)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:39

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](exports_device.Endpoint.md)[]

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

#### Inherited from

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[getChildEndpoints](index._internal_.OnOffBaseDevice.md#getchildendpoints)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[getClusterClient](index._internal_.OnOffBaseDevice.md#getclusterclient)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[getClusterClientById](index._internal_.OnOffBaseDevice.md#getclusterclientbyid)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[getClusterServer](index._internal_.OnOffBaseDevice.md#getclusterserver)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[getClusterServerById](index._internal_.OnOffBaseDevice.md#getclusterserverbyid)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:32

___

### getDeviceTypes

▸ **getDeviceTypes**(): [`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition)\>

#### Returns

[`AtLeastOne`](../modules/index._internal_.md#atleastone)<[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition)\>

#### Inherited from

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[getDeviceTypes](index._internal_.OnOffBaseDevice.md#getdevicetypes)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:36

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Inherited from

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[getId](index._internal_.OnOffBaseDevice.md#getid)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[getStructure](index._internal_.OnOffBaseDevice.md#getstructure)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[hasClusterClient](index._internal_.OnOffBaseDevice.md#hasclusterclient)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[hasClusterServer](index._internal_.OnOffBaseDevice.md#hasclusterserver)

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

#### Inherited from

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[onOff](index._internal_.OnOffBaseDevice.md#onoff)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[removeCommandHandler](index._internal_.OnOffBaseDevice.md#removecommandhandler)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[removeCommandHandler](index._internal_.OnOffBaseDevice.md#removecommandhandler)

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

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[setDeviceTypes](index._internal_.OnOffBaseDevice.md#setdevicetypes)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:37

___

### toggle

▸ **toggle**(): `Promise`<`void`\>

Toggles the device on or off
This is an example f a convenient device class API to control the device without need to access clusters

#### Returns

`Promise`<`void`\>

#### Inherited from

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[toggle](index._internal_.OnOffBaseDevice.md#toggle)

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:55

___

### verifyRequiredClusters

▸ `Protected` **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

[OnOffBaseDevice](index._internal_.OnOffBaseDevice.md).[verifyRequiredClusters](index._internal_.OnOffBaseDevice.md#verifyrequiredclusters)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:43
