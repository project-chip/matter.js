[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/device](../modules/exports_device.md) / OnOffPluginUnitDevice

# Class: OnOffPluginUnitDevice

[exports/device](../modules/exports_device.md).OnOffPluginUnitDevice

Device class for an OnOffPluginUnit Device

## Hierarchy

- [`OnOffBaseDevice`](exports_device.OnOffBaseDevice.md)

  ↳ **`OnOffPluginUnitDevice`**

## Table of contents

### Constructors

- [constructor](exports_device.OnOffPluginUnitDevice.md#constructor)

### Properties

- [commandHandler](exports_device.OnOffPluginUnitDevice.md#commandhandler)
- [deviceType](exports_device.OnOffPluginUnitDevice.md#devicetype)
- [deviceTypes](exports_device.OnOffPluginUnitDevice.md#devicetypes)
- [id](exports_device.OnOffPluginUnitDevice.md#id)
- [name](exports_device.OnOffPluginUnitDevice.md#name)
- [uniqueStorageKey](exports_device.OnOffPluginUnitDevice.md#uniquestoragekey)

### Methods

- [\_executeHandler](exports_device.OnOffPluginUnitDevice.md#_executehandler)
- [addChildEndpoint](exports_device.OnOffPluginUnitDevice.md#addchildendpoint)
- [addClusterClient](exports_device.OnOffPluginUnitDevice.md#addclusterclient)
- [addClusterServer](exports_device.OnOffPluginUnitDevice.md#addclusterserver)
- [addCommandHandler](exports_device.OnOffPluginUnitDevice.md#addcommandhandler)
- [addDeviceClusters](exports_device.OnOffPluginUnitDevice.md#adddeviceclusters)
- [addFixedLabel](exports_device.OnOffPluginUnitDevice.md#addfixedlabel)
- [addOnOffListener](exports_device.OnOffPluginUnitDevice.md#addonofflistener)
- [addUserLabel](exports_device.OnOffPluginUnitDevice.md#adduserlabel)
- [clearStructureChangedCallback](exports_device.OnOffPluginUnitDevice.md#clearstructurechangedcallback)
- [createOptionalClusterClient](exports_device.OnOffPluginUnitDevice.md#createoptionalclusterclient)
- [createOptionalClusterServer](exports_device.OnOffPluginUnitDevice.md#createoptionalclusterserver)
- [determineUniqueID](exports_device.OnOffPluginUnitDevice.md#determineuniqueid)
- [getAllClusterClients](exports_device.OnOffPluginUnitDevice.md#getallclusterclients)
- [getAllClusterServers](exports_device.OnOffPluginUnitDevice.md#getallclusterservers)
- [getChildEndpoint](exports_device.OnOffPluginUnitDevice.md#getchildendpoint)
- [getChildEndpoints](exports_device.OnOffPluginUnitDevice.md#getchildendpoints)
- [getClusterClient](exports_device.OnOffPluginUnitDevice.md#getclusterclient)
- [getClusterClientById](exports_device.OnOffPluginUnitDevice.md#getclusterclientbyid)
- [getClusterServer](exports_device.OnOffPluginUnitDevice.md#getclusterserver)
- [getClusterServerById](exports_device.OnOffPluginUnitDevice.md#getclusterserverbyid)
- [getDeviceTypes](exports_device.OnOffPluginUnitDevice.md#getdevicetypes)
- [getId](exports_device.OnOffPluginUnitDevice.md#getid)
- [hasClusterClient](exports_device.OnOffPluginUnitDevice.md#hasclusterclient)
- [hasClusterServer](exports_device.OnOffPluginUnitDevice.md#hasclusterserver)
- [isOn](exports_device.OnOffPluginUnitDevice.md#ison)
- [onOff](exports_device.OnOffPluginUnitDevice.md#onoff)
- [removeChildEndpoint](exports_device.OnOffPluginUnitDevice.md#removechildendpoint)
- [removeCommandHandler](exports_device.OnOffPluginUnitDevice.md#removecommandhandler)
- [setDeviceTypes](exports_device.OnOffPluginUnitDevice.md#setdevicetypes)
- [setStructureChangedCallback](exports_device.OnOffPluginUnitDevice.md#setstructurechangedcallback)
- [toggle](exports_device.OnOffPluginUnitDevice.md#toggle)
- [updatePartsList](exports_device.OnOffPluginUnitDevice.md#updatepartslist)
- [verifyRequiredClusters](exports_device.OnOffPluginUnitDevice.md#verifyrequiredclusters)

## Constructors

### constructor

• **new OnOffPluginUnitDevice**(`onOffAttributeInitialValues?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `onOffAttributeInitialValues?` | [`AttributeInitialValues`](../modules/exports_cluster.md#attributeinitialvalues)<[`Merge`](../modules/util_export.md#merge)<{ `onOff`: [`Attribute`](../modules/exports_cluster.md#attribute)<`boolean`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes-1)<{ `levelControlForLighting`: [`BitFlag`](../modules/exports_schema.md#bitflag-1)  }\>\>\> |
| `options?` | [`EndpointOptions`](../interfaces/exports_device.EndpointOptions.md) |

#### Overrides

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[constructor](exports_device.OnOffBaseDevice.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:85

## Properties

### commandHandler

• `Protected` **commandHandler**: [`NamedHandler`](export._internal_.NamedHandler.md)<`any`\>

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[commandHandler](exports_device.OnOffBaseDevice.md#commandhandler)

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:64

___

### deviceType

• `Readonly` **deviceType**: `number`

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[deviceType](exports_device.OnOffBaseDevice.md#devicetype)

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:63

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[deviceTypes](exports_device.OnOffBaseDevice.md#devicetypes)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:19

___

### id

• **id**: `undefined` \| [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[id](exports_device.OnOffBaseDevice.md#id)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:23

___

### name

• **name**: `string`

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[name](exports_device.OnOffBaseDevice.md#name)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:25

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[uniqueStorageKey](exports_device.OnOffBaseDevice.md#uniquestoragekey)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[_executeHandler](exports_device.OnOffBaseDevice.md#_executehandler)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[_executeHandler](exports_device.OnOffBaseDevice.md#_executehandler)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[addChildEndpoint](exports_device.OnOffBaseDevice.md#addchildendpoint)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[addClusterClient](exports_device.OnOffBaseDevice.md#addclusterclient)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[addClusterServer](exports_device.OnOffBaseDevice.md#addclusterserver)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[addCommandHandler](exports_device.OnOffBaseDevice.md#addcommandhandler)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[addCommandHandler](exports_device.OnOffBaseDevice.md#addcommandhandler)

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

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[addDeviceClusters](exports_device.OnOffBaseDevice.md#adddeviceclusters)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[addFixedLabel](exports_device.OnOffBaseDevice.md#addfixedlabel)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[addOnOffListener](exports_device.OnOffBaseDevice.md#addonofflistener)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[addUserLabel](exports_device.OnOffBaseDevice.md#adduserlabel)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:39

___

### clearStructureChangedCallback

▸ **clearStructureChangedCallback**(): `void`

#### Returns

`void`

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[clearStructureChangedCallback](exports_device.OnOffBaseDevice.md#clearstructurechangedcallback)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[createOptionalClusterClient](exports_device.OnOffBaseDevice.md#createoptionalclusterclient)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[createOptionalClusterServer](exports_device.OnOffBaseDevice.md#createoptionalclusterserver)

#### Defined in

packages/matter.js/dist/cjs/device/Device.d.ts:97

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[determineUniqueID](exports_device.OnOffBaseDevice.md#determineuniqueid)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:54

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getAllClusterClients](exports_device.OnOffBaseDevice.md#getallclusterclients)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:57

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getAllClusterServers](exports_device.OnOffBaseDevice.md#getallclusterservers)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getChildEndpoint](exports_device.OnOffBaseDevice.md#getchildendpoint)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:51

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](exports_device.Endpoint.md)[]

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getChildEndpoints](exports_device.OnOffBaseDevice.md#getchildendpoints)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getClusterClient](exports_device.OnOffBaseDevice.md#getclusterclient)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getClusterClientById](exports_device.OnOffBaseDevice.md#getclusterclientbyid)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getClusterServer](exports_device.OnOffBaseDevice.md#getclusterserver)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getClusterServerById](exports_device.OnOffBaseDevice.md#getclusterserverbyid)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:44

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getDeviceTypes](exports_device.OnOffBaseDevice.md#getdevicetypes)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:48

___

### getId

▸ **getId**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getId](exports_device.OnOffBaseDevice.md#getid)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[hasClusterClient](exports_device.OnOffBaseDevice.md#hasclusterclient)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[hasClusterServer](exports_device.OnOffBaseDevice.md#hasclusterserver)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:46

___

### isOn

▸ **isOn**(): `Promise`<`undefined` \| `boolean`\>

#### Returns

`Promise`<`undefined` \| `boolean`\>

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[isOn](exports_device.OnOffBaseDevice.md#ison)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[onOff](exports_device.OnOffBaseDevice.md#onoff)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[removeChildEndpoint](exports_device.OnOffBaseDevice.md#removechildendpoint)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[removeCommandHandler](exports_device.OnOffBaseDevice.md#removecommandhandler)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[removeCommandHandler](exports_device.OnOffBaseDevice.md#removecommandhandler)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[setDeviceTypes](exports_device.OnOffBaseDevice.md#setdevicetypes)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[setStructureChangedCallback](exports_device.OnOffBaseDevice.md#setstructurechangedcallback)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[toggle](exports_device.OnOffBaseDevice.md#toggle)

#### Defined in

packages/matter.js/dist/cjs/device/OnOffDevices.d.ts:71

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[updatePartsList](exports_device.OnOffBaseDevice.md#updatepartslist)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:58

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[verifyRequiredClusters](exports_device.OnOffBaseDevice.md#verifyrequiredclusters)

#### Defined in

packages/matter.js/dist/cjs/device/Endpoint.d.ts:55
