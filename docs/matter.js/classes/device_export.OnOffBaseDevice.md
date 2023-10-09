[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device/export](../modules/device_export.md) / OnOffBaseDevice

# Class: OnOffBaseDevice

[device/export](../modules/device_export.md).OnOffBaseDevice

Abstract Base class for OnOff devices

## Hierarchy

- [`Device`](device_export.Device.md)<`this`\> & { `_executeHandler`: <K\>(`action`: `K`, ...`args`: `Parameters`<[`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands)[`K`]\>) => `Promise`<`void`\> ; `addCommandHandler`: <K\>(`action`: `K`, `handler`: [`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands)[`K`]) => `void` ; `removeCommandHandler`: <K\>(`action`: `K`, `handler`: [`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands)[`K`]) => `void`  }

  ↳ **`OnOffBaseDevice`**

  ↳↳ [`OnOffPluginUnitDevice`](device_export.OnOffPluginUnitDevice.md)

  ↳↳ [`OnOffLightDevice`](device_export.OnOffLightDevice.md)

## Table of contents

### Constructors

- [constructor](device_export.OnOffBaseDevice.md#constructor)

### Properties

- [commandHandler](device_export.OnOffBaseDevice.md#commandhandler)
- [deviceType](device_export.OnOffBaseDevice.md#devicetype)
- [deviceTypes](device_export.OnOffBaseDevice.md#devicetypes)
- [id](device_export.OnOffBaseDevice.md#id)
- [name](device_export.OnOffBaseDevice.md#name)
- [uniqueStorageKey](device_export.OnOffBaseDevice.md#uniquestoragekey)

### Methods

- [\_executeHandler](device_export.OnOffBaseDevice.md#_executehandler)
- [addChildEndpoint](device_export.OnOffBaseDevice.md#addchildendpoint)
- [addClusterClient](device_export.OnOffBaseDevice.md#addclusterclient)
- [addClusterServer](device_export.OnOffBaseDevice.md#addclusterserver)
- [addCommandHandler](device_export.OnOffBaseDevice.md#addcommandhandler)
- [addDeviceClusters](device_export.OnOffBaseDevice.md#adddeviceclusters)
- [addFixedLabel](device_export.OnOffBaseDevice.md#addfixedlabel)
- [addOnOffListener](device_export.OnOffBaseDevice.md#addonofflistener)
- [addUserLabel](device_export.OnOffBaseDevice.md#adduserlabel)
- [createOptionalClusterClient](device_export.OnOffBaseDevice.md#createoptionalclusterclient)
- [createOptionalClusterServer](device_export.OnOffBaseDevice.md#createoptionalclusterserver)
- [destroy](device_export.OnOffBaseDevice.md#destroy)
- [determineUniqueID](device_export.OnOffBaseDevice.md#determineuniqueid)
- [getAllClusterClients](device_export.OnOffBaseDevice.md#getallclusterclients)
- [getAllClusterServers](device_export.OnOffBaseDevice.md#getallclusterservers)
- [getChildEndpoint](device_export.OnOffBaseDevice.md#getchildendpoint)
- [getChildEndpoints](device_export.OnOffBaseDevice.md#getchildendpoints)
- [getClusterClient](device_export.OnOffBaseDevice.md#getclusterclient)
- [getClusterClientById](device_export.OnOffBaseDevice.md#getclusterclientbyid)
- [getClusterServer](device_export.OnOffBaseDevice.md#getclusterserver)
- [getClusterServerById](device_export.OnOffBaseDevice.md#getclusterserverbyid)
- [getDeviceTypes](device_export.OnOffBaseDevice.md#getdevicetypes)
- [getId](device_export.OnOffBaseDevice.md#getid)
- [getOnOff](device_export.OnOffBaseDevice.md#getonoff)
- [hasClusterClient](device_export.OnOffBaseDevice.md#hasclusterclient)
- [hasClusterServer](device_export.OnOffBaseDevice.md#hasclusterserver)
- [removeChildEndpoint](device_export.OnOffBaseDevice.md#removechildendpoint)
- [removeCommandHandler](device_export.OnOffBaseDevice.md#removecommandhandler)
- [removeFromStructure](device_export.OnOffBaseDevice.md#removefromstructure)
- [setDeviceTypes](device_export.OnOffBaseDevice.md#setdevicetypes)
- [setOnOff](device_export.OnOffBaseDevice.md#setonoff)
- [setStructureChangedCallback](device_export.OnOffBaseDevice.md#setstructurechangedcallback)
- [toggle](device_export.OnOffBaseDevice.md#toggle)
- [updatePartsList](device_export.OnOffBaseDevice.md#updatepartslist)
- [verifyRequiredClusters](device_export.OnOffBaseDevice.md#verifyrequiredclusters)

## Constructors

### constructor

• `Protected` **new OnOffBaseDevice**(`definition`, `attributeInitialValues?`, `options?`)

Creates a new OnOffBaseDevice

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `definition` | [`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition) | Device type definition of the device to create |
| `attributeInitialValues?` | `Object` | Optional object with initial attribute values for automatically added clusters |
| `options` | [`EndpointOptions`](../interfaces/device_export.EndpointOptions.md) | Optional endpoint options |

#### Overrides

extendPublicHandlerMethods&lt;typeof Device, OnOffBaseDeviceCommands\&gt;(Device).constructor

#### Defined in

packages/matter.js/src/device/OnOffDevices.ts:62

## Properties

### commandHandler

• `Protected` **commandHandler**: [`NamedHandler`](export._internal_.NamedHandler.md)<`any`\>

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).commandHandler

#### Defined in

packages/matter.js/src/device/Device.ts:126

___

### deviceType

• `Readonly` **deviceType**: `number`

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).deviceType

#### Defined in

packages/matter.js/src/device/Device.ts:125

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]]

One or multiple DeviceTypeDefinitions of the endpoint

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).deviceTypes

#### Defined in

packages/matter.js/src/device/Endpoint.ts:53

___

### id

• **id**: `undefined` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).id

#### Defined in

packages/matter.js/src/device/Endpoint.ts:37

___

### name

• **name**: `string` = `""`

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).name

#### Defined in

packages/matter.js/src/device/Endpoint.ts:39

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).uniqueStorageKey

#### Defined in

packages/matter.js/src/device/Endpoint.ts:38

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).\_executeHandler

#### Defined in

packages/matter.js/src/device/Device.ts:183

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).\_executeHandler

#### Defined in

packages/matter.js/src/util/NamedHandler.ts:42

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).addChildEndpoint

#### Defined in

packages/matter.js/src/device/Endpoint.ts:256

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).addClusterClient

#### Defined in

packages/matter.js/src/device/Endpoint.ts:173

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).addClusterServer

#### Defined in

packages/matter.js/src/device/Endpoint.ts:146

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).addCommandHandler

#### Defined in

packages/matter.js/src/device/Device.ts:160

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).addCommandHandler

#### Defined in

packages/matter.js/src/util/NamedHandler.ts:40

___

### addDeviceClusters

▸ `Protected` **addDeviceClusters**(`attributeInitialValues?`, `excludeList?`): `void`

Adds mandatory clusters to the device

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `attributeInitialValues?` | `Object` | `undefined` | Optional object with initial attribute values for automatically added clusters |
| `excludeList` | [`ClusterId`](../modules/datatype_export.md#clusterid)[] | `[]` | List of clusters to exclude from being added |

#### Returns

`void`

#### Defined in

packages/matter.js/src/device/OnOffDevices.ts:78

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).addFixedLabel

#### Defined in

packages/matter.js/src/device/Endpoint.ts:106

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

packages/matter.js/src/device/OnOffDevices.ts:136

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).addUserLabel

#### Defined in

packages/matter.js/src/device/Endpoint.ts:126

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).createOptionalClusterClient

#### Defined in

packages/matter.js/src/device/Device.ts:198

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).createOptionalClusterServer

#### Defined in

packages/matter.js/src/device/Device.ts:187

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).destroy

#### Defined in

packages/matter.js/src/device/Endpoint.ts:93

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).determineUniqueID

#### Defined in

packages/matter.js/src/device/Endpoint.ts:280

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getAllClusterClients

#### Defined in

packages/matter.js/src/device/Endpoint.ts:340

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getAllClusterServers

#### Defined in

packages/matter.js/src/device/Endpoint.ts:336

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getChildEndpoint

#### Defined in

packages/matter.js/src/device/Endpoint.ts:262

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](device_export.Endpoint.md)[]

#### Returns

[`Endpoint`](device_export.Endpoint.md)[]

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getChildEndpoints

#### Defined in

packages/matter.js/src/device/Endpoint.ts:266

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getClusterClient

#### Defined in

packages/matter.js/src/device/Device.ts:229

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getClusterClientById

#### Defined in

packages/matter.js/src/device/Endpoint.ts:212

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getClusterServer

#### Defined in

packages/matter.js/src/device/Device.ts:209

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getClusterServerById

#### Defined in

packages/matter.js/src/device/Endpoint.ts:208

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getDeviceTypes

#### Defined in

packages/matter.js/src/device/Endpoint.ts:236

___

### getId

▸ **getId**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).getId

#### Defined in

packages/matter.js/src/device/Endpoint.ts:99

___

### getOnOff

▸ **getOnOff**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/src/device/OnOffDevices.ts:116

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).hasClusterClient

#### Defined in

packages/matter.js/src/device/Endpoint.ts:226

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).hasClusterServer

#### Defined in

packages/matter.js/src/device/Endpoint.ts:216

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).removeChildEndpoint

#### Defined in

packages/matter.js/src/device/Endpoint.ts:270

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).removeCommandHandler

#### Defined in

packages/matter.js/src/device/Device.ts:171

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).removeCommandHandler

#### Defined in

packages/matter.js/src/util/NamedHandler.ts:41

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).removeFromStructure

#### Defined in

packages/matter.js/src/device/Endpoint.ts:85

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).setDeviceTypes

#### Defined in

packages/matter.js/src/device/Endpoint.ts:240

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

#### Defined in

packages/matter.js/src/device/OnOffDevices.ts:112

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

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).setStructureChangedCallback

#### Defined in

packages/matter.js/src/device/Endpoint.ts:80

___

### toggle

▸ **toggle**(): `void`

Toggles the device on or off
This is an example f a convenient device class API to control the device without need to access clusters

#### Returns

`void`

#### Defined in

packages/matter.js/src/device/OnOffDevices.ts:124

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).updatePartsList

#### Defined in

packages/matter.js/src/device/Endpoint.ts:344

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands\>(Device).verifyRequiredClusters

#### Defined in

packages/matter.js/src/device/Endpoint.ts:302
