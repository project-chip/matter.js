[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/device](../modules/exports_device.md) / DimmableLightDevice

# Class: DimmableLightDevice

[exports/device](../modules/exports_device.md).DimmableLightDevice

## Hierarchy

- [`DimmableBaseDevice`](exports_device._internal_.DimmableBaseDevice.md)

  ↳ **`DimmableLightDevice`**

## Table of contents

### Constructors

- [constructor](exports_device.DimmableLightDevice.md#constructor)

### Properties

- [commandHandler](exports_device.DimmableLightDevice.md#commandhandler)
- [deviceType](exports_device.DimmableLightDevice.md#devicetype)
- [deviceTypes](exports_device.DimmableLightDevice.md#devicetypes)
- [isLighting](exports_device.DimmableLightDevice.md#islighting)
- [name](exports_device.DimmableLightDevice.md#name)
- [number](exports_device.DimmableLightDevice.md#number)
- [uniqueStorageKey](exports_device.DimmableLightDevice.md#uniquestoragekey)

### Methods

- [\_executeHandler](exports_device.DimmableLightDevice.md#_executehandler)
- [addChildEndpoint](exports_device.DimmableLightDevice.md#addchildendpoint)
- [addClusterClient](exports_device.DimmableLightDevice.md#addclusterclient)
- [addClusterServer](exports_device.DimmableLightDevice.md#addclusterserver)
- [addCommandHandler](exports_device.DimmableLightDevice.md#addcommandhandler)
- [addCurrentLevelListener](exports_device.DimmableLightDevice.md#addcurrentlevellistener)
- [addDeviceClusters](exports_device.DimmableLightDevice.md#adddeviceclusters)
- [addFixedLabel](exports_device.DimmableLightDevice.md#addfixedlabel)
- [addOnOffListener](exports_device.DimmableLightDevice.md#addonofflistener)
- [addUserLabel](exports_device.DimmableLightDevice.md#adduserlabel)
- [close](exports_device.DimmableLightDevice.md#close)
- [createOptionalClusterClient](exports_device.DimmableLightDevice.md#createoptionalclusterclient)
- [createOptionalClusterServer](exports_device.DimmableLightDevice.md#createoptionalclusterserver)
- [determineUniqueID](exports_device.DimmableLightDevice.md#determineuniqueid)
- [getAllClusterClients](exports_device.DimmableLightDevice.md#getallclusterclients)
- [getAllClusterServers](exports_device.DimmableLightDevice.md#getallclusterservers)
- [getChildEndpoint](exports_device.DimmableLightDevice.md#getchildendpoint)
- [getChildEndpoints](exports_device.DimmableLightDevice.md#getchildendpoints)
- [getClusterClient](exports_device.DimmableLightDevice.md#getclusterclient)
- [getClusterClientById](exports_device.DimmableLightDevice.md#getclusterclientbyid)
- [getClusterServer](exports_device.DimmableLightDevice.md#getclusterserver)
- [getClusterServerById](exports_device.DimmableLightDevice.md#getclusterserverbyid)
- [getCurrentLevel](exports_device.DimmableLightDevice.md#getcurrentlevel)
- [getDeviceTypes](exports_device.DimmableLightDevice.md#getdevicetypes)
- [getNumber](exports_device.DimmableLightDevice.md#getnumber)
- [getOnOff](exports_device.DimmableLightDevice.md#getonoff)
- [hasClusterClient](exports_device.DimmableLightDevice.md#hasclusterclient)
- [hasClusterServer](exports_device.DimmableLightDevice.md#hasclusterserver)
- [removeChildEndpoint](exports_device.DimmableLightDevice.md#removechildendpoint)
- [removeCommandHandler](exports_device.DimmableLightDevice.md#removecommandhandler)
- [removeFromStructure](exports_device.DimmableLightDevice.md#removefromstructure)
- [setBridgedDeviceReachability](exports_device.DimmableLightDevice.md#setbridgeddevicereachability)
- [setCurrentLevel](exports_device.DimmableLightDevice.md#setcurrentlevel)
- [setDeviceTypes](exports_device.DimmableLightDevice.md#setdevicetypes)
- [setOnOff](exports_device.DimmableLightDevice.md#setonoff)
- [setStructureChangedCallback](exports_device.DimmableLightDevice.md#setstructurechangedcallback)
- [toggle](exports_device.DimmableLightDevice.md#toggle)
- [updatePartsList](exports_device.DimmableLightDevice.md#updatepartslist)
- [verifyRequiredClusters](exports_device.DimmableLightDevice.md#verifyrequiredclusters)

## Constructors

### constructor

• **new DimmableLightDevice**(`onOffAttributeInitialValues?`, `dimmableAttributeValues?`, `options?`): [`DimmableLightDevice`](exports_device.DimmableLightDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `onOffAttributeInitialValues?` | [`AttributeInitialValues`](../modules/exports_cluster.md#attributeinitialvalues)\<[`Merge`](../modules/util_export.md#merge)\<\{ `onOff`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `levelControlForLighting`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>\> |
| `dimmableAttributeValues?` | [`AttributeInitialValues`](../modules/exports_cluster.md#attributeinitialvalues)\<[`Merge`](../modules/util_export.md#merge)\<\{ `currentLevel`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<``null`` \| `number`, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `maxLevel`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `minLevel`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onLevel`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<``null`` \| `number`, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `frequency`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `lighting`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `onOff`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>\> |
| `options?` | [`EndpointOptions`](../interfaces/exports_device.EndpointOptions.md) |

#### Returns

[`DimmableLightDevice`](exports_device.DimmableLightDevice.md)

#### Overrides

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[constructor](exports_device._internal_.DimmableBaseDevice.md#constructor)

#### Defined in

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:45

## Properties

### commandHandler

• `Protected` **commandHandler**: [`NamedHandler`](util_export.NamedHandler.md)\<`any`\>

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[commandHandler](exports_device._internal_.DimmableBaseDevice.md#commandhandler)

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:82

___

### deviceType

• `Readonly` **deviceType**: `number`

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[deviceType](exports_device._internal_.DimmableBaseDevice.md#devicetype)

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:81

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[deviceTypes](exports_device._internal_.DimmableBaseDevice.md#devicetypes)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:20

___

### isLighting

• `Protected` **isLighting**: `boolean`

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[isLighting](exports_device._internal_.DimmableBaseDevice.md#islighting)

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:39

___

### name

• **name**: `string`

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[name](exports_device._internal_.DimmableBaseDevice.md#name)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:26

___

### number

• **number**: `undefined` \| [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[number](exports_device._internal_.DimmableBaseDevice.md#number)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:24

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[uniqueStorageKey](exports_device._internal_.DimmableBaseDevice.md#uniquestoragekey)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[_executeHandler](exports_device._internal_.DimmableBaseDevice.md#_executehandler)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[_executeHandler](exports_device._internal_.DimmableBaseDevice.md#_executehandler)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[_executeHandler](exports_device._internal_.DimmableBaseDevice.md#_executehandler)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[addChildEndpoint](exports_device._internal_.DimmableBaseDevice.md#addchildendpoint)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[addClusterClient](exports_device._internal_.DimmableBaseDevice.md#addclusterclient)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[addClusterServer](exports_device._internal_.DimmableBaseDevice.md#addclusterserver)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[addCommandHandler](exports_device._internal_.DimmableBaseDevice.md#addcommandhandler)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[addCommandHandler](exports_device._internal_.DimmableBaseDevice.md#addcommandhandler)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[addCommandHandler](exports_device._internal_.DimmableBaseDevice.md#addcommandhandler)

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

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[addCurrentLevelListener](exports_device._internal_.DimmableBaseDevice.md#addcurrentlevellistener)

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

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[addDeviceClusters](exports_device._internal_.DimmableBaseDevice.md#adddeviceclusters)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[addFixedLabel](exports_device._internal_.DimmableBaseDevice.md#addfixedlabel)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[addOnOffListener](exports_device._internal_.DimmableBaseDevice.md#addonofflistener)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[addUserLabel](exports_device._internal_.DimmableBaseDevice.md#adduserlabel)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:41

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[close](exports_device._internal_.DimmableBaseDevice.md#close)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[createOptionalClusterClient](exports_device._internal_.DimmableBaseDevice.md#createoptionalclusterclient)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[createOptionalClusterServer](exports_device._internal_.DimmableBaseDevice.md#createoptionalclusterserver)

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:115

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[determineUniqueID](exports_device._internal_.DimmableBaseDevice.md#determineuniqueid)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:56

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)\<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[getAllClusterClients](exports_device._internal_.DimmableBaseDevice.md#getallclusterclients)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:59

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)\<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[getAllClusterServers](exports_device._internal_.DimmableBaseDevice.md#getallclusterservers)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[getChildEndpoint](exports_device._internal_.DimmableBaseDevice.md#getchildendpoint)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:53

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](exports_device.Endpoint.md)[]

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[getChildEndpoints](exports_device._internal_.DimmableBaseDevice.md#getchildendpoints)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[getClusterClient](exports_device._internal_.DimmableBaseDevice.md#getclusterclient)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[getClusterClientById](exports_device._internal_.DimmableBaseDevice.md#getclusterclientbyid)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[getClusterServer](exports_device._internal_.DimmableBaseDevice.md#getclusterserver)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[getClusterServerById](exports_device._internal_.DimmableBaseDevice.md#getclusterserverbyid)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:46

___

### getCurrentLevel

▸ **getCurrentLevel**(): `number`

#### Returns

`number`

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[getCurrentLevel](exports_device._internal_.DimmableBaseDevice.md#getcurrentlevel)

#### Defined in

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:32

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/exports_device.DeviceTypeDefinition.md), ...DeviceTypeDefinition[]]

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[getDeviceTypes](exports_device._internal_.DimmableBaseDevice.md#getdevicetypes)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:50

___

### getNumber

▸ **getNumber**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[getNumber](exports_device._internal_.DimmableBaseDevice.md#getnumber)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:39

___

### getOnOff

▸ **getOnOff**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[getOnOff](exports_device._internal_.DimmableBaseDevice.md#getonoff)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[hasClusterClient](exports_device._internal_.DimmableBaseDevice.md#hasclusterclient)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[hasClusterServer](exports_device._internal_.DimmableBaseDevice.md#hasclusterserver)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[removeChildEndpoint](exports_device._internal_.DimmableBaseDevice.md#removechildendpoint)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[removeCommandHandler](exports_device._internal_.DimmableBaseDevice.md#removecommandhandler)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[removeCommandHandler](exports_device._internal_.DimmableBaseDevice.md#removecommandhandler)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[removeCommandHandler](exports_device._internal_.DimmableBaseDevice.md#removecommandhandler)

#### Defined in

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:22

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[removeFromStructure](exports_device._internal_.DimmableBaseDevice.md#removefromstructure)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[setBridgedDeviceReachability](exports_device._internal_.DimmableBaseDevice.md#setbridgeddevicereachability)

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

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[setCurrentLevel](exports_device._internal_.DimmableBaseDevice.md#setcurrentlevel)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[setDeviceTypes](exports_device._internal_.DimmableBaseDevice.md#setdevicetypes)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[setOnOff](exports_device._internal_.DimmableBaseDevice.md#setonoff)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[setStructureChangedCallback](exports_device._internal_.DimmableBaseDevice.md#setstructurechangedcallback)

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

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[toggle](exports_device._internal_.DimmableBaseDevice.md#toggle)

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:74

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[updatePartsList](exports_device._internal_.DimmableBaseDevice.md#updatepartslist)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:60

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](exports_device._internal_.DimmableBaseDevice.md).[verifyRequiredClusters](exports_device._internal_.DimmableBaseDevice.md#verifyrequiredclusters)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:57
