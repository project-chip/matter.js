[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device/export](../modules/device_export.md) / DimmableLightDevice

# Class: DimmableLightDevice

[device/export](../modules/device_export.md).DimmableLightDevice

## Hierarchy

- [`DimmableBaseDevice`](device_export._internal_.DimmableBaseDevice.md)

  ↳ **`DimmableLightDevice`**

## Table of contents

### Constructors

- [constructor](device_export.DimmableLightDevice.md#constructor)

### Properties

- [commandHandler](device_export.DimmableLightDevice.md#commandhandler)
- [deviceType](device_export.DimmableLightDevice.md#devicetype)
- [deviceTypes](device_export.DimmableLightDevice.md#devicetypes)
- [id](device_export.DimmableLightDevice.md#id)
- [isLighting](device_export.DimmableLightDevice.md#islighting)
- [name](device_export.DimmableLightDevice.md#name)
- [uniqueStorageKey](device_export.DimmableLightDevice.md#uniquestoragekey)

### Methods

- [\_executeHandler](device_export.DimmableLightDevice.md#_executehandler)
- [addChildEndpoint](device_export.DimmableLightDevice.md#addchildendpoint)
- [addClusterClient](device_export.DimmableLightDevice.md#addclusterclient)
- [addClusterServer](device_export.DimmableLightDevice.md#addclusterserver)
- [addCommandHandler](device_export.DimmableLightDevice.md#addcommandhandler)
- [addCurrentLevelListener](device_export.DimmableLightDevice.md#addcurrentlevellistener)
- [addDeviceClusters](device_export.DimmableLightDevice.md#adddeviceclusters)
- [addFixedLabel](device_export.DimmableLightDevice.md#addfixedlabel)
- [addOnOffListener](device_export.DimmableLightDevice.md#addonofflistener)
- [addUserLabel](device_export.DimmableLightDevice.md#adduserlabel)
- [createOptionalClusterClient](device_export.DimmableLightDevice.md#createoptionalclusterclient)
- [createOptionalClusterServer](device_export.DimmableLightDevice.md#createoptionalclusterserver)
- [destroy](device_export.DimmableLightDevice.md#destroy)
- [determineUniqueID](device_export.DimmableLightDevice.md#determineuniqueid)
- [getAllClusterClients](device_export.DimmableLightDevice.md#getallclusterclients)
- [getAllClusterServers](device_export.DimmableLightDevice.md#getallclusterservers)
- [getChildEndpoint](device_export.DimmableLightDevice.md#getchildendpoint)
- [getChildEndpoints](device_export.DimmableLightDevice.md#getchildendpoints)
- [getClusterClient](device_export.DimmableLightDevice.md#getclusterclient)
- [getClusterClientById](device_export.DimmableLightDevice.md#getclusterclientbyid)
- [getClusterServer](device_export.DimmableLightDevice.md#getclusterserver)
- [getClusterServerById](device_export.DimmableLightDevice.md#getclusterserverbyid)
- [getCurrentLevel](device_export.DimmableLightDevice.md#getcurrentlevel)
- [getDeviceTypes](device_export.DimmableLightDevice.md#getdevicetypes)
- [getId](device_export.DimmableLightDevice.md#getid)
- [getOnOff](device_export.DimmableLightDevice.md#getonoff)
- [hasClusterClient](device_export.DimmableLightDevice.md#hasclusterclient)
- [hasClusterServer](device_export.DimmableLightDevice.md#hasclusterserver)
- [removeChildEndpoint](device_export.DimmableLightDevice.md#removechildendpoint)
- [removeCommandHandler](device_export.DimmableLightDevice.md#removecommandhandler)
- [removeFromStructure](device_export.DimmableLightDevice.md#removefromstructure)
- [setBridgedDeviceReachability](device_export.DimmableLightDevice.md#setbridgeddevicereachability)
- [setCurrentLevel](device_export.DimmableLightDevice.md#setcurrentlevel)
- [setDeviceTypes](device_export.DimmableLightDevice.md#setdevicetypes)
- [setOnOff](device_export.DimmableLightDevice.md#setonoff)
- [setStructureChangedCallback](device_export.DimmableLightDevice.md#setstructurechangedcallback)
- [toggle](device_export.DimmableLightDevice.md#toggle)
- [updatePartsList](device_export.DimmableLightDevice.md#updatepartslist)
- [verifyRequiredClusters](device_export.DimmableLightDevice.md#verifyrequiredclusters)

## Constructors

### constructor

• **new DimmableLightDevice**(`onOffAttributeInitialValues?`, `dimmableAttributeValues?`, `options?`): [`DimmableLightDevice`](device_export.DimmableLightDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `onOffAttributeInitialValues?` | [`AttributeInitialValues`](../modules/cluster_export.md#attributeinitialvalues)\<[`Merge`](../modules/util_export.md#merge)\<[`Merge`](../modules/util_export.md#merge)\<\{ `onOff`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `levelControlForLighting`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `levelControlForLighting`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>\> |
| `dimmableAttributeValues?` | [`AttributeInitialValues`](../modules/cluster_export.md#attributeinitialvalues)\<[`Merge`](../modules/util_export.md#merge)\<[`Merge`](../modules/util_export.md#merge)\<\{ `currentLevel`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| `number`, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `maxLevel`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `minLevel`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onLevel`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `frequency`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lighting`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `frequency`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `lighting`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onOff`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>\> |
| `options` | [`EndpointOptions`](../interfaces/device_export.EndpointOptions.md) |

#### Returns

[`DimmableLightDevice`](device_export.DimmableLightDevice.md)

#### Overrides

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[constructor](device_export._internal_.DimmableBaseDevice.md#constructor)

#### Defined in

[packages/matter.js/src/device/DimmableDevices.ts:104](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/DimmableDevices.ts#L104)

## Properties

### commandHandler

• `Protected` **commandHandler**: [`NamedHandler`](util_export.NamedHandler.md)\<`any`\>

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[commandHandler](device_export._internal_.DimmableBaseDevice.md#commandhandler)

#### Defined in

[packages/matter.js/src/device/Device.ts:168](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Device.ts#L168)

___

### deviceType

• `Readonly` **deviceType**: `number`

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[deviceType](device_export._internal_.DimmableBaseDevice.md#devicetype)

#### Defined in

[packages/matter.js/src/device/Device.ts:167](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Device.ts#L167)

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/device_export.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

One or multiple DeviceTypeDefinitions of the endpoint

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[deviceTypes](device_export._internal_.DimmableBaseDevice.md#devicetypes)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:53](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L53)

___

### id

• **id**: `undefined` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[id](device_export._internal_.DimmableBaseDevice.md#id)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:37](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L37)

___

### isLighting

• `Protected` **isLighting**: `boolean` = `false`

Define if Lighting feature is set

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[isLighting](device_export._internal_.DimmableBaseDevice.md#islighting)

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:65](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/OnOffDevices.ts#L65)

___

### name

• **name**: `string` = `""`

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[name](device_export._internal_.DimmableBaseDevice.md#name)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:39](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L39)

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[uniqueStorageKey](device_export._internal_.DimmableBaseDevice.md#uniquestoragekey)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:38](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L38)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[_executeHandler](device_export._internal_.DimmableBaseDevice.md#_executehandler)

#### Defined in

[packages/matter.js/src/device/Device.ts:225](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Device.ts#L225)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[_executeHandler](device_export._internal_.DimmableBaseDevice.md#_executehandler)

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:42](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/util/NamedHandler.ts#L42)

▸ **_executeHandler**\<`K`\>(`action`, `...args`): `Promise`\<`void`\>

Execute a command handler. Should only be used internally, but can not be declared as protected officially
because needed public for derived classes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DimmableDeviceCommands`](../modules/device_export._internal_.md#dimmabledevicecommands) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `...args` | `Parameters`\<[`DimmableDeviceCommands`](../modules/device_export._internal_.md#dimmabledevicecommands)[`K`]\> | Arguments to be passed to the handler |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[_executeHandler](device_export._internal_.DimmableBaseDevice.md#_executehandler)

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:42](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/util/NamedHandler.ts#L42)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[addChildEndpoint](device_export._internal_.DimmableBaseDevice.md#addchildendpoint)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:256](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L256)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[addClusterClient](device_export._internal_.DimmableBaseDevice.md#addclusterclient)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:173](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L173)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[addClusterServer](device_export._internal_.DimmableBaseDevice.md#addclusterserver)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:146](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L146)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[addCommandHandler](device_export._internal_.DimmableBaseDevice.md#addcommandhandler)

#### Defined in

[packages/matter.js/src/device/Device.ts:202](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Device.ts#L202)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[addCommandHandler](device_export._internal_.DimmableBaseDevice.md#addcommandhandler)

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:40](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/util/NamedHandler.ts#L40)

▸ **addCommandHandler**\<`K`\>(`action`, `handler`): `void`

Method to add command handlers to the device.
The base class do not expose any commands!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DimmableDeviceCommands`](../modules/device_export._internal_.md#dimmabledevicecommands) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `handler` | [`DimmableDeviceCommands`](../modules/device_export._internal_.md#dimmabledevicecommands)[`K`] | Handler function to be executed when the command is received |

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[addCommandHandler](device_export._internal_.DimmableBaseDevice.md#addcommandhandler)

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:40](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/util/NamedHandler.ts#L40)

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

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[addCurrentLevelListener](device_export._internal_.DimmableBaseDevice.md#addcurrentlevellistener)

#### Defined in

[packages/matter.js/src/device/DimmableDevices.ts:81](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/DimmableDevices.ts#L81)

___

### addDeviceClusters

▸ **addDeviceClusters**(`attributeInitialValues?`, `excludeList?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `attributeInitialValues?` | `Object` | `undefined` |
| `excludeList` | [`ClusterId`](../modules/datatype_export.md#clusterid)[] | `[]` |

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[addDeviceClusters](device_export._internal_.DimmableBaseDevice.md#adddeviceclusters)

#### Defined in

[packages/matter.js/src/device/DimmableDevices.ts:38](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/DimmableDevices.ts#L38)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[addFixedLabel](device_export._internal_.DimmableBaseDevice.md#addfixedlabel)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:106](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L106)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[addOnOffListener](device_export._internal_.DimmableBaseDevice.md#addonofflistener)

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:139](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/OnOffDevices.ts#L139)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[addUserLabel](device_export._internal_.DimmableBaseDevice.md#adduserlabel)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:126](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L126)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[createOptionalClusterClient](device_export._internal_.DimmableBaseDevice.md#createoptionalclusterclient)

#### Defined in

[packages/matter.js/src/device/Device.ts:240](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Device.ts#L240)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[createOptionalClusterServer](device_export._internal_.DimmableBaseDevice.md#createoptionalclusterserver)

#### Defined in

[packages/matter.js/src/device/Device.ts:229](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Device.ts#L229)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[destroy](device_export._internal_.DimmableBaseDevice.md#destroy)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:93](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L93)

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[determineUniqueID](device_export._internal_.DimmableBaseDevice.md#determineuniqueid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:283](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L283)

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[getAllClusterClients](device_export._internal_.DimmableBaseDevice.md#getallclusterclients)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:343](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L343)

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[getAllClusterServers](device_export._internal_.DimmableBaseDevice.md#getallclusterservers)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:339](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L339)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[getChildEndpoint](device_export._internal_.DimmableBaseDevice.md#getchildendpoint)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:265](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L265)

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](device_export.Endpoint.md)[]

#### Returns

[`Endpoint`](device_export.Endpoint.md)[]

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[getChildEndpoints](device_export._internal_.DimmableBaseDevice.md#getchildendpoints)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:269](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L269)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[getClusterClient](device_export._internal_.DimmableBaseDevice.md#getclusterclient)

#### Defined in

[packages/matter.js/src/device/Device.ts:271](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Device.ts#L271)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[getClusterClientById](device_export._internal_.DimmableBaseDevice.md#getclusterclientbyid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:212](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L212)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[getClusterServer](device_export._internal_.DimmableBaseDevice.md#getclusterserver)

#### Defined in

[packages/matter.js/src/device/Device.ts:251](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Device.ts#L251)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[getClusterServerById](device_export._internal_.DimmableBaseDevice.md#getclusterserverbyid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:208](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L208)

___

### getCurrentLevel

▸ **getCurrentLevel**(): `number`

#### Returns

`number`

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[getCurrentLevel](device_export._internal_.DimmableBaseDevice.md#getcurrentlevel)

#### Defined in

[packages/matter.js/src/device/DimmableDevices.ts:68](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/DimmableDevices.ts#L68)

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/device_export.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/device_export.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[getDeviceTypes](device_export._internal_.DimmableBaseDevice.md#getdevicetypes)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:236](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L236)

___

### getId

▸ **getId**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[getId](device_export._internal_.DimmableBaseDevice.md#getid)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:99](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L99)

___

### getOnOff

▸ **getOnOff**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[getOnOff](device_export._internal_.DimmableBaseDevice.md#getonoff)

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:119](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/OnOffDevices.ts#L119)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[hasClusterClient](device_export._internal_.DimmableBaseDevice.md#hasclusterclient)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:226](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L226)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[hasClusterServer](device_export._internal_.DimmableBaseDevice.md#hasclusterserver)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:216](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L216)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[removeChildEndpoint](device_export._internal_.DimmableBaseDevice.md#removechildendpoint)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:273](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L273)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[removeCommandHandler](device_export._internal_.DimmableBaseDevice.md#removecommandhandler)

#### Defined in

[packages/matter.js/src/device/Device.ts:213](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Device.ts#L213)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[removeCommandHandler](device_export._internal_.DimmableBaseDevice.md#removecommandhandler)

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:41](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/util/NamedHandler.ts#L41)

▸ **removeCommandHandler**\<`K`\>(`action`, `handler`): `void`

Method to remove command handlers from the device.
The base class do not expose any commands!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DimmableDeviceCommands`](../modules/device_export._internal_.md#dimmabledevicecommands) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `handler` | [`DimmableDeviceCommands`](../modules/device_export._internal_.md#dimmabledevicecommands)[`K`] | Handler function to be removed |

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[removeCommandHandler](device_export._internal_.DimmableBaseDevice.md#removecommandhandler)

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:41](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/util/NamedHandler.ts#L41)

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[removeFromStructure](device_export._internal_.DimmableBaseDevice.md#removefromstructure)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:85](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L85)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[setBridgedDeviceReachability](device_export._internal_.DimmableBaseDevice.md#setbridgeddevicereachability)

#### Defined in

[packages/matter.js/src/device/Device.ts:296](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Device.ts#L296)

___

### setCurrentLevel

▸ **setCurrentLevel**(`level`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | ``null`` \| `number` |

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[setCurrentLevel](device_export._internal_.DimmableBaseDevice.md#setcurrentlevel)

#### Defined in

[packages/matter.js/src/device/DimmableDevices.ts:72](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/DimmableDevices.ts#L72)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[setDeviceTypes](device_export._internal_.DimmableBaseDevice.md#setdevicetypes)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:240](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L240)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[setOnOff](device_export._internal_.DimmableBaseDevice.md#setonoff)

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:115](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/OnOffDevices.ts#L115)

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

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[setStructureChangedCallback](device_export._internal_.DimmableBaseDevice.md#setstructurechangedcallback)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:80](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L80)

___

### toggle

▸ **toggle**(): `void`

Toggles the device on or off
This is an example f a convenient device class API to control the device without need to access clusters

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[toggle](device_export._internal_.DimmableBaseDevice.md#toggle)

#### Defined in

[packages/matter.js/src/device/OnOffDevices.ts:127](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/OnOffDevices.ts#L127)

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[updatePartsList](device_export._internal_.DimmableBaseDevice.md#updatepartslist)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:347](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L347)

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](device_export._internal_.DimmableBaseDevice.md).[verifyRequiredClusters](device_export._internal_.DimmableBaseDevice.md#verifyrequiredclusters)

#### Defined in

[packages/matter.js/src/device/Endpoint.ts:305](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/device/Endpoint.ts#L305)
