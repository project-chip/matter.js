[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/device](../modules/exports_device.md) / OnOffLightDevice

# Class: OnOffLightDevice

[exports/device](../modules/exports_device.md).OnOffLightDevice

Device class for an OnOffPluginUnit Device

## Hierarchy

- [`OnOffBaseDevice`](exports_device.OnOffBaseDevice.md)

  ↳ **`OnOffLightDevice`**

## Table of contents

### Constructors

- [constructor](exports_device.OnOffLightDevice.md#constructor)

### Properties

- [commandHandler](exports_device.OnOffLightDevice.md#commandhandler)
- [deviceType](exports_device.OnOffLightDevice.md#devicetype)
- [deviceTypes](exports_device.OnOffLightDevice.md#devicetypes)
- [isLighting](exports_device.OnOffLightDevice.md#islighting)
- [name](exports_device.OnOffLightDevice.md#name)
- [number](exports_device.OnOffLightDevice.md#number)
- [uniqueStorageKey](exports_device.OnOffLightDevice.md#uniquestoragekey)

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
- [close](exports_device.OnOffLightDevice.md#close)
- [createOptionalClusterClient](exports_device.OnOffLightDevice.md#createoptionalclusterclient)
- [createOptionalClusterServer](exports_device.OnOffLightDevice.md#createoptionalclusterserver)
- [determineUniqueID](exports_device.OnOffLightDevice.md#determineuniqueid)
- [getAllClusterClients](exports_device.OnOffLightDevice.md#getallclusterclients)
- [getAllClusterServers](exports_device.OnOffLightDevice.md#getallclusterservers)
- [getChildEndpoint](exports_device.OnOffLightDevice.md#getchildendpoint)
- [getChildEndpoints](exports_device.OnOffLightDevice.md#getchildendpoints)
- [getClusterClient](exports_device.OnOffLightDevice.md#getclusterclient)
- [getClusterClientById](exports_device.OnOffLightDevice.md#getclusterclientbyid)
- [getClusterServer](exports_device.OnOffLightDevice.md#getclusterserver)
- [getClusterServerById](exports_device.OnOffLightDevice.md#getclusterserverbyid)
- [getDeviceTypes](exports_device.OnOffLightDevice.md#getdevicetypes)
- [getNumber](exports_device.OnOffLightDevice.md#getnumber)
- [getOnOff](exports_device.OnOffLightDevice.md#getonoff)
- [hasClusterClient](exports_device.OnOffLightDevice.md#hasclusterclient)
- [hasClusterServer](exports_device.OnOffLightDevice.md#hasclusterserver)
- [removeChildEndpoint](exports_device.OnOffLightDevice.md#removechildendpoint)
- [removeCommandHandler](exports_device.OnOffLightDevice.md#removecommandhandler)
- [removeFromStructure](exports_device.OnOffLightDevice.md#removefromstructure)
- [setBridgedDeviceReachability](exports_device.OnOffLightDevice.md#setbridgeddevicereachability)
- [setDeviceTypes](exports_device.OnOffLightDevice.md#setdevicetypes)
- [setOnOff](exports_device.OnOffLightDevice.md#setonoff)
- [setStructureChangedCallback](exports_device.OnOffLightDevice.md#setstructurechangedcallback)
- [toggle](exports_device.OnOffLightDevice.md#toggle)
- [updatePartsList](exports_device.OnOffLightDevice.md#updatepartslist)
- [verifyRequiredClusters](exports_device.OnOffLightDevice.md#verifyrequiredclusters)

## Constructors

### constructor

• **new OnOffLightDevice**(`onOffAttributeInitialValues?`, `options?`): [`OnOffLightDevice`](exports_device.OnOffLightDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `onOffAttributeInitialValues?` | [`AttributeInitialValues`](../modules/exports_cluster.md#attributeinitialvalues)\<[`Merge`](../modules/util_export.md#merge)\<\{ `onOff`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `levelControlForLighting`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>\> |
| `options?` | [`EndpointOptions`](../interfaces/exports_device.EndpointOptions.md) |

#### Returns

[`OnOffLightDevice`](exports_device.OnOffLightDevice.md)

#### Overrides

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[constructor](exports_device.OnOffBaseDevice.md#constructor)

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:93

## Properties

### commandHandler

• `Protected` **commandHandler**: [`NamedHandler`](util_export.NamedHandler.md)\<`any`\>

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[commandHandler](exports_device.OnOffBaseDevice.md#commandhandler)

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:82

___

### deviceType

• `Readonly` **deviceType**: `number`

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[deviceType](exports_device.OnOffBaseDevice.md#devicetype)

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:81

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[deviceTypes](exports_device.OnOffBaseDevice.md#devicetypes)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:20

___

### isLighting

• `Protected` **isLighting**: `boolean`

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[isLighting](exports_device.OnOffBaseDevice.md#islighting)

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:39

___

### name

• **name**: `string`

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[name](exports_device.OnOffBaseDevice.md#name)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:26

___

### number

• **number**: `undefined` \| [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[number](exports_device.OnOffBaseDevice.md#number)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:24

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[uniqueStorageKey](exports_device.OnOffBaseDevice.md#uniquestoragekey)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[_executeHandler](exports_device.OnOffBaseDevice.md#_executehandler)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[_executeHandler](exports_device.OnOffBaseDevice.md#_executehandler)

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:33

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[addChildEndpoint](exports_device.OnOffBaseDevice.md#addchildendpoint)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[addClusterClient](exports_device.OnOffBaseDevice.md#addclusterclient)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[addClusterServer](exports_device.OnOffBaseDevice.md#addclusterserver)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[addCommandHandler](exports_device.OnOffBaseDevice.md#addcommandhandler)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[addCommandHandler](exports_device.OnOffBaseDevice.md#addcommandhandler)

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:31

___

### addDeviceClusters

▸ **addDeviceClusters**(`attributeInitialValues?`, `excludeList?`): `void`

Adds mandatory clusters to the device

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributeInitialValues?` | `Object` | Optional object with initial attribute values for automatically added clusters |
| `excludeList?` | [`ClusterId`](../modules/exports_datatype.md#clusterid)[] | List of clusters to exclude from being added |

#### Returns

`void`

#### Overrides

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[addDeviceClusters](exports_device.OnOffBaseDevice.md#adddeviceclusters)

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:94

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[addOnOffListener](exports_device.OnOffBaseDevice.md#addonofflistener)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[addUserLabel](exports_device.OnOffBaseDevice.md#adduserlabel)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:41

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[close](exports_device.OnOffBaseDevice.md#close)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[createOptionalClusterClient](exports_device.OnOffBaseDevice.md#createoptionalclusterclient)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[createOptionalClusterServer](exports_device.OnOffBaseDevice.md#createoptionalclusterserver)

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:115

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[determineUniqueID](exports_device.OnOffBaseDevice.md#determineuniqueid)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:56

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getAllClusterClients](exports_device.OnOffBaseDevice.md#getallclusterclients)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:59

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getAllClusterServers](exports_device.OnOffBaseDevice.md#getallclusterservers)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getChildEndpoint](exports_device.OnOffBaseDevice.md#getchildendpoint)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:53

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](exports_device.Endpoint.md)[]

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getChildEndpoints](exports_device.OnOffBaseDevice.md#getchildendpoints)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getClusterClient](exports_device.OnOffBaseDevice.md#getclusterclient)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getClusterClientById](exports_device.OnOffBaseDevice.md#getclusterclientbyid)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getClusterServer](exports_device.OnOffBaseDevice.md#getclusterserver)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getClusterServerById](exports_device.OnOffBaseDevice.md#getclusterserverbyid)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:46

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getDeviceTypes](exports_device.OnOffBaseDevice.md#getdevicetypes)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:50

___

### getNumber

▸ **getNumber**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getNumber](exports_device.OnOffBaseDevice.md#getnumber)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:39

___

### getOnOff

▸ **getOnOff**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[getOnOff](exports_device.OnOffBaseDevice.md#getonoff)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[hasClusterClient](exports_device.OnOffBaseDevice.md#hasclusterclient)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[hasClusterServer](exports_device.OnOffBaseDevice.md#hasclusterserver)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[removeChildEndpoint](exports_device.OnOffBaseDevice.md#removechildendpoint)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[removeCommandHandler](exports_device.OnOffBaseDevice.md#removecommandhandler)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[removeCommandHandler](exports_device.OnOffBaseDevice.md#removecommandhandler)

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:32

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[removeFromStructure](exports_device.OnOffBaseDevice.md#removefromstructure)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[setBridgedDeviceReachability](exports_device.OnOffBaseDevice.md#setbridgeddevicereachability)

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:125

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[setDeviceTypes](exports_device.OnOffBaseDevice.md#setdevicetypes)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[setOnOff](exports_device.OnOffBaseDevice.md#setonoff)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[setStructureChangedCallback](exports_device.OnOffBaseDevice.md#setstructurechangedcallback)

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

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[toggle](exports_device.OnOffBaseDevice.md#toggle)

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:74

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[updatePartsList](exports_device.OnOffBaseDevice.md#updatepartslist)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:60

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

[OnOffBaseDevice](exports_device.OnOffBaseDevice.md).[verifyRequiredClusters](exports_device.OnOffBaseDevice.md#verifyrequiredclusters)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:57
