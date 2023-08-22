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
- [id](device_export.OnOffLightDevice.md#id)
- [name](device_export.OnOffLightDevice.md#name)
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
- [clearStructureChangedCallback](device_export.OnOffLightDevice.md#clearstructurechangedcallback)
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
- [getId](device_export.OnOffLightDevice.md#getid)
- [hasClusterClient](device_export.OnOffLightDevice.md#hasclusterclient)
- [hasClusterServer](device_export.OnOffLightDevice.md#hasclusterserver)
- [isOn](device_export.OnOffLightDevice.md#ison)
- [onOff](device_export.OnOffLightDevice.md#onoff)
- [removeChildEndpoint](device_export.OnOffLightDevice.md#removechildendpoint)
- [removeCommandHandler](device_export.OnOffLightDevice.md#removecommandhandler)
- [setDeviceTypes](device_export.OnOffLightDevice.md#setdevicetypes)
- [setStructureChangedCallback](device_export.OnOffLightDevice.md#setstructurechangedcallback)
- [toggle](device_export.OnOffLightDevice.md#toggle)
- [updatePartsList](device_export.OnOffLightDevice.md#updatepartslist)
- [verifyRequiredClusters](device_export.OnOffLightDevice.md#verifyrequiredclusters)

## Constructors

### constructor

• **new OnOffLightDevice**(`onOffAttributeInitialValues?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `onOffAttributeInitialValues?` | [`AttributeInitialValues`](../modules/cluster_export.md#attributeinitialvalues)<[`Merge`](../modules/util_export.md#merge)<{ `onOff`: [`Attribute`](../modules/cluster_export.md#attribute)<`boolean`, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes-1)<{ `levelControlForLighting`: [`BitFlag`](../modules/schema_export.md#bitflag-1)  }\>\>\> |
| `options` | [`EndpointOptions`](../interfaces/device_export.EndpointOptions.md) |

#### Overrides

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[constructor](device_export.OnOffBaseDevice.md#constructor)

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:161](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/OnOffDevices.ts#L161)

## Properties

### commandHandler

• `Protected` **commandHandler**: [`NamedHandler`](export._internal_.NamedHandler.md)<`any`\>

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[commandHandler](device_export.OnOffBaseDevice.md#commandhandler)

#### Defined in

[packages/matter.js/src/device/Device.ts:126](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Device.ts#L126)

___

### deviceType

• `Readonly` **deviceType**: `number`

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[deviceType](device_export.OnOffBaseDevice.md#devicetype)

#### Defined in

[packages/matter.js/src/device/Device.ts:125](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Device.ts#L125)

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]]

One or multiple DeviceTypeDefinitions of the endpoint

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[deviceTypes](device_export.OnOffBaseDevice.md#devicetypes)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:53](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L53)

___

### id

• **id**: `undefined` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[id](device_export.OnOffBaseDevice.md#id)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:37](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L37)

___

### name

• **name**: `string` = `""`

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[name](device_export.OnOffBaseDevice.md#name)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L39)

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[uniqueStorageKey](device_export.OnOffBaseDevice.md#uniquestoragekey)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[_executeHandler](device_export.OnOffBaseDevice.md#_executehandler)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[_executeHandler](device_export.OnOffBaseDevice.md#_executehandler)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[addChildEndpoint](device_export.OnOffBaseDevice.md#addchildendpoint)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[addClusterClient](device_export.OnOffBaseDevice.md#addclusterclient)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[addClusterServer](device_export.OnOffBaseDevice.md#addclusterserver)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[addCommandHandler](device_export.OnOffBaseDevice.md#addcommandhandler)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[addCommandHandler](device_export.OnOffBaseDevice.md#addcommandhandler)

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:40](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/NamedHandler.ts#L40)

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

#### Overrides

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[addDeviceClusters](device_export.OnOffBaseDevice.md#adddeviceclusters)

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:172](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/OnOffDevices.ts#L172)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[addOnOffListener](device_export.OnOffBaseDevice.md#addonofflistener)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[addUserLabel](device_export.OnOffBaseDevice.md#adduserlabel)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:119](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L119)

___

### clearStructureChangedCallback

▸ **clearStructureChangedCallback**(): `void`

#### Returns

`void`

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[clearStructureChangedCallback](device_export.OnOffBaseDevice.md#clearstructurechangedcallback)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[createOptionalClusterClient](device_export.OnOffBaseDevice.md#createoptionalclusterclient)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[createOptionalClusterServer](device_export.OnOffBaseDevice.md#createoptionalclusterserver)

#### Defined in

[packages/matter.js/src/device/Device.ts:187](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Device.ts#L187)

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[determineUniqueID](device_export.OnOffBaseDevice.md#determineuniqueid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:254](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L254)

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getAllClusterClients](device_export.OnOffBaseDevice.md#getallclusterclients)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:314](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L314)

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getAllClusterServers](device_export.OnOffBaseDevice.md#getallclusterservers)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getChildEndpoint](device_export.OnOffBaseDevice.md#getchildendpoint)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:236](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L236)

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](device_export.Endpoint.md)[]

#### Returns

[`Endpoint`](device_export.Endpoint.md)[]

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getChildEndpoints](device_export.OnOffBaseDevice.md#getchildendpoints)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getClusterClient](device_export.OnOffBaseDevice.md#getclusterclient)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getClusterClientById](device_export.OnOffBaseDevice.md#getclusterclientbyid)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getClusterServer](device_export.OnOffBaseDevice.md#getclusterserver)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getClusterServerById](device_export.OnOffBaseDevice.md#getclusterserverbyid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:182](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L182)

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getDeviceTypes](device_export.OnOffBaseDevice.md#getdevicetypes)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:210](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L210)

___

### getId

▸ **getId**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[getId](device_export.OnOffBaseDevice.md#getid)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[hasClusterClient](device_export.OnOffBaseDevice.md#hasclusterclient)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[hasClusterServer](device_export.OnOffBaseDevice.md#hasclusterserver)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:190](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L190)

___

### isOn

▸ **isOn**(): `Promise`<`undefined` \| `boolean`\>

#### Returns

`Promise`<`undefined` \| `boolean`\>

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[isOn](device_export.OnOffBaseDevice.md#ison)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[onOff](device_export.OnOffBaseDevice.md#onoff)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[removeChildEndpoint](device_export.OnOffBaseDevice.md#removechildendpoint)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[removeCommandHandler](device_export.OnOffBaseDevice.md#removecommandhandler)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[removeCommandHandler](device_export.OnOffBaseDevice.md#removecommandhandler)

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/NamedHandler.ts#L41)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[setDeviceTypes](device_export.OnOffBaseDevice.md#setdevicetypes)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[setStructureChangedCallback](device_export.OnOffBaseDevice.md#setstructurechangedcallback)

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

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[toggle](device_export.OnOffBaseDevice.md#toggle)

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:120](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/OnOffDevices.ts#L120)

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[updatePartsList](device_export.OnOffBaseDevice.md#updatepartslist)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:318](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L318)

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

[OnOffBaseDevice](device_export.OnOffBaseDevice.md).[verifyRequiredClusters](device_export.OnOffBaseDevice.md#verifyrequiredclusters)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:276](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/device/Endpoint.ts#L276)
