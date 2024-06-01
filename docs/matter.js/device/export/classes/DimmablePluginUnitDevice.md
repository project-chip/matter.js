[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [device/export](../README.md) / DimmablePluginUnitDevice

# Class: DimmablePluginUnitDevice

## Extends

- [`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md)

## Constructors

### new DimmablePluginUnitDevice()

> **new DimmablePluginUnitDevice**(`onOffAttributeInitialValues`?, `dimmableAttributeValues`?, `options`?): [`DimmablePluginUnitDevice`](DimmablePluginUnitDevice.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `onOffAttributeInitialValues`? | [`AttributeInitialValues`](../../../cluster/export/README.md#attributeinitialvaluesa)\<[`Merge`](../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../cluster/export/README.md#globalattributesf)\<`object`\>\>\> |
| `dimmableAttributeValues`? | [`AttributeInitialValues`](../../../cluster/export/README.md#attributeinitialvaluesa)\<[`Merge`](../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../cluster/export/README.md#globalattributesf)\<`object`\>\>\> |
| `options`? | [`EndpointOptions`](../interfaces/EndpointOptions.md) |

#### Returns

[`DimmablePluginUnitDevice`](DimmablePluginUnitDevice.md)

#### Overrides

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`constructor`](../-internal-/classes/DimmableBaseDevice.md#constructors)

#### Source

[packages/matter.js/src/device/DimmableDevices.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DimmableDevices.ts#L87)

## Properties

### commandHandler

> `protected` **commandHandler**: [`NamedHandler`](../../../util/export/classes/NamedHandler.md)\<`any`\>

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`commandHandler`](../-internal-/classes/DimmableBaseDevice.md#commandhandler)

#### Source

[packages/matter.js/src/device/Device.ts:173](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Device.ts#L173)

***

### deviceTypes

> `protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

One or multiple DeviceTypeDefinitions of the endpoint

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`deviceTypes`](../-internal-/classes/DimmableBaseDevice.md#devicetypes)

#### Source

[packages/matter.js/src/device/Endpoint.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L55)

***

### isLighting

> `protected` **isLighting**: `boolean` = `false`

Define if Lighting feature is set

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`isLighting`](../-internal-/classes/DimmableBaseDevice.md#islighting)

#### Source

[packages/matter.js/src/device/OnOffDevices.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/OnOffDevices.ts#L65)

***

### name

> **name**: `string` = `""`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`name`](../-internal-/classes/DimmableBaseDevice.md#name)

#### Source

[packages/matter.js/src/device/Endpoint.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L41)

***

### number

> **number**: `undefined` \| [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`number`](../-internal-/classes/DimmableBaseDevice.md#number)

#### Source

[packages/matter.js/src/device/Endpoint.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L39)

***

### uniqueStorageKey

> **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`uniqueStorageKey`](../-internal-/classes/DimmableBaseDevice.md#uniquestoragekey)

#### Source

[packages/matter.js/src/device/Endpoint.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L40)

## Accessors

### deviceType

> `get` **deviceType**(): [`DeviceTypeId`](../../../datatype/export/README.md#devicetypeid)

#### Returns

[`DeviceTypeId`](../../../datatype/export/README.md#devicetypeid)

#### Source

[packages/matter.js/src/device/Endpoint.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L82)

## Methods

### \_executeHandler()

#### \_executeHandler(command, args)

> `protected` **\_executeHandler**(`command`, ...`args`): `Promise`\<`any`\>

Execute a command handler. Should only be used internally, but can not be declared as protected officially
because needed public for derived classes.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `command` | `never` | Command name to execute the handler for |
| ...`args` | `any`[] | Arguments to be passed to the handler |

##### Returns

`Promise`\<`any`\>

##### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`_executeHandler`](../-internal-/classes/DimmableBaseDevice.md#_executehandler)

##### Source

[packages/matter.js/src/device/Device.ts:229](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Device.ts#L229)

#### \_executeHandler(action, args)

> `protected` **\_executeHandler**\<`K`\>(`action`, ...`args`): `Promise`\<`void`\>

Execute a command handler. Should only be used internally, but can not be declared as protected officially
because needed public for derived classes.

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof [`OnOffBaseDeviceCommands`](../-internal-/README.md#onoffbasedevicecommands) |

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| ...`args` | `Parameters`\<[`OnOffBaseDeviceCommands`](../-internal-/README.md#onoffbasedevicecommands)\[`K`\]\> | Arguments to be passed to the handler |

##### Returns

`Promise`\<`void`\>

##### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`_executeHandler`](../-internal-/classes/DimmableBaseDevice.md#_executehandler)

##### Source

[packages/matter.js/src/util/NamedHandler.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/NamedHandler.ts#L42)

#### \_executeHandler(action, args)

> `protected` **\_executeHandler**\<`K`\>(`action`, ...`args`): `Promise`\<`void`\>

Execute a command handler. Should only be used internally, but can not be declared as protected officially
because needed public for derived classes.

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof [`DimmableDeviceCommands`](../-internal-/README.md#dimmabledevicecommands) |

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| ...`args` | `Parameters`\<[`DimmableDeviceCommands`](../-internal-/README.md#dimmabledevicecommands)\[`K`\]\> | Arguments to be passed to the handler |

##### Returns

`Promise`\<`void`\>

##### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`_executeHandler`](../-internal-/classes/DimmableBaseDevice.md#_executehandler)

##### Source

[packages/matter.js/src/util/NamedHandler.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/NamedHandler.ts#L42)

***

### addChildEndpoint()

> **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md) |

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addChildEndpoint`](../-internal-/classes/DimmableBaseDevice.md#addchildendpoint)

#### Source

[packages/matter.js/src/device/Endpoint.ts:262](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L262)

***

### addClusterClient()

> **addClusterClient**\<`F`, `A`, `C`, `E`\>(`cluster`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addClusterClient`](../-internal-/classes/DimmableBaseDevice.md#addclusterclient)

#### Source

[packages/matter.js/src/device/Endpoint.ts:179](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L179)

***

### addClusterServer()

> **addClusterServer**\<`A`, `E`\>(`cluster`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<`A`, `E`\> |

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addClusterServer`](../-internal-/classes/DimmableBaseDevice.md#addclusterserver)

#### Source

[packages/matter.js/src/device/Endpoint.ts:152](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L152)

***

### addCommandHandler()

#### addCommandHandler(command, handler)

> **addCommandHandler**(`command`, `handler`): `void`

Method to add command handlers to the device.
The base class do not expose any commands!

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `command` | `never` | Command name to add a handler for |
| `handler` | [`HandlerFunction`](../../../util/export/README.md#handlerfunction) | Handler function to be executed when the command is received |

##### Returns

`void`

##### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addCommandHandler`](../-internal-/classes/DimmableBaseDevice.md#addcommandhandler)

##### Source

[packages/matter.js/src/device/Device.ts:206](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Device.ts#L206)

#### addCommandHandler(action, handler)

> **addCommandHandler**\<`K`\>(`action`, `handler`): `void`

Method to add command handlers to the device.
The base class do not expose any commands!

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof [`OnOffBaseDeviceCommands`](../-internal-/README.md#onoffbasedevicecommands) |

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `handler` | [`OnOffBaseDeviceCommands`](../-internal-/README.md#onoffbasedevicecommands)\[`K`\] | Handler function to be executed when the command is received |

##### Returns

`void`

##### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addCommandHandler`](../-internal-/classes/DimmableBaseDevice.md#addcommandhandler)

##### Source

[packages/matter.js/src/util/NamedHandler.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/NamedHandler.ts#L40)

#### addCommandHandler(action, handler)

> **addCommandHandler**\<`K`\>(`action`, `handler`): `void`

Method to add command handlers to the device.
The base class do not expose any commands!

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof [`DimmableDeviceCommands`](../-internal-/README.md#dimmabledevicecommands) |

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `handler` | [`DimmableDeviceCommands`](../-internal-/README.md#dimmabledevicecommands)\[`K`\] | Handler function to be executed when the command is received |

##### Returns

`void`

##### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addCommandHandler`](../-internal-/classes/DimmableBaseDevice.md#addcommandhandler)

##### Source

[packages/matter.js/src/util/NamedHandler.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/NamedHandler.ts#L40)

***

### addCurrentLevelListener()

> **addCurrentLevelListener**(`listener`): `void`

Adds a listener for the CurrentLevel attribute

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`newValue`, `oldValue`) => `void` | Listener function to be called when the attribute changes |

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addCurrentLevelListener`](../-internal-/classes/DimmableBaseDevice.md#addcurrentlevellistener)

#### Source

[packages/matter.js/src/device/DimmableDevices.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DimmableDevices.ts#L81)

***

### addDeviceClusters()

> `protected` **addDeviceClusters**(`attributeInitialValues`?, `excludeList`?): `void`

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `attributeInitialValues`? | `object` | `undefined` |
| `excludeList`? | [`ClusterId`](../../../datatype/export/README.md#clusterid)[] | `[]` |

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addDeviceClusters`](../-internal-/classes/DimmableBaseDevice.md#adddeviceclusters)

#### Source

[packages/matter.js/src/device/DimmableDevices.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DimmableDevices.ts#L38)

***

### addFixedLabel()

> **addFixedLabel**(`label`, `value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `label` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addFixedLabel`](../-internal-/classes/DimmableBaseDevice.md#addfixedlabel)

#### Source

[packages/matter.js/src/device/Endpoint.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L112)

***

### addOnOffListener()

> **addOnOffListener**(`listener`): `void`

Adds a listener for the OnOff attribute
This is an example of a convenient device class API to control the device without need to access clusters

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`newValue`, `oldValue`) => `void` | Listener function to be called when the attribute changes |

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addOnOffListener`](../-internal-/classes/DimmableBaseDevice.md#addonofflistener)

#### Source

[packages/matter.js/src/device/OnOffDevices.ts:139](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/OnOffDevices.ts#L139)

***

### addUserLabel()

> **addUserLabel**(`label`, `value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `label` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addUserLabel`](../-internal-/classes/DimmableBaseDevice.md#adduserlabel)

#### Source

[packages/matter.js/src/device/Endpoint.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L132)

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`close`](../-internal-/classes/DimmableBaseDevice.md#close)

#### Source

[packages/matter.js/src/device/Endpoint.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L99)

***

### createOptionalClusterClient()

> `protected` **createOptionalClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`createOptionalClusterClient`](../-internal-/classes/DimmableBaseDevice.md#createoptionalclusterclient)

#### Source

[packages/matter.js/src/device/Device.ts:244](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Device.ts#L244)

***

### createOptionalClusterServer()

> `protected` **createOptionalClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<`A`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<`A`, `E`\>

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`createOptionalClusterServer`](../-internal-/classes/DimmableBaseDevice.md#createoptionalclusterserver)

#### Source

[packages/matter.js/src/device/Device.ts:233](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Device.ts#L233)

***

### determineUniqueID()

> **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`determineUniqueID`](../-internal-/classes/DimmableBaseDevice.md#determineuniqueid)

#### Source

[packages/matter.js/src/device/Endpoint.ts:296](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L296)

***

### getAllClusterClients()

> **getAllClusterClients**(): [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Commands`](../../../cluster/export/interfaces/Commands.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Returns

[`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Commands`](../../../cluster/export/interfaces/Commands.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getAllClusterClients`](../-internal-/classes/DimmableBaseDevice.md#getallclusterclients)

#### Source

[packages/matter.js/src/device/Endpoint.ts:356](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L356)

***

### getAllClusterServers()

> **getAllClusterServers**(): [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Returns

[`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getAllClusterServers`](../-internal-/classes/DimmableBaseDevice.md#getallclusterservers)

#### Source

[packages/matter.js/src/device/Endpoint.ts:352](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L352)

***

### getChildEndpoint()

> **getChildEndpoint**(`id`): `undefined` \| [`Endpoint`](Endpoint.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber) |

#### Returns

`undefined` \| [`Endpoint`](Endpoint.md)

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getChildEndpoint`](../-internal-/classes/DimmableBaseDevice.md#getchildendpoint)

#### Source

[packages/matter.js/src/device/Endpoint.ts:278](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L278)

***

### getChildEndpoints()

> **getChildEndpoints**(): [`Endpoint`](Endpoint.md)[]

#### Returns

[`Endpoint`](Endpoint.md)[]

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getChildEndpoints`](../-internal-/classes/DimmableBaseDevice.md#getchildendpoints)

#### Source

[packages/matter.js/src/device/Endpoint.ts:282](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L282)

***

### getClusterClient()

> **getClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getClusterClient`](../-internal-/classes/DimmableBaseDevice.md#getclusterclient)

#### Source

[packages/matter.js/src/device/Device.ts:275](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Device.ts#L275)

***

### getClusterClientById()

> **getClusterClientById**(`clusterId`): `undefined` \| [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Commands`](../../../cluster/export/interfaces/Commands.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../../../datatype/export/README.md#clusterid) |

#### Returns

`undefined` \| [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Commands`](../../../cluster/export/interfaces/Commands.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getClusterClientById`](../-internal-/classes/DimmableBaseDevice.md#getclusterclientbyid)

#### Source

[packages/matter.js/src/device/Endpoint.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L218)

***

### getClusterServer()

> **getClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<`A`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<`A`, `E`\>

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getClusterServer`](../-internal-/classes/DimmableBaseDevice.md#getclusterserver)

#### Source

[packages/matter.js/src/device/Device.ts:255](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Device.ts#L255)

***

### getClusterServerById()

> **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../../../datatype/export/README.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getClusterServerById`](../-internal-/classes/DimmableBaseDevice.md#getclusterserverbyid)

#### Source

[packages/matter.js/src/device/Endpoint.ts:214](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L214)

***

### getCurrentLevel()

> **getCurrentLevel**(): `number`

#### Returns

`number`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getCurrentLevel`](../-internal-/classes/DimmableBaseDevice.md#getcurrentlevel)

#### Source

[packages/matter.js/src/device/DimmableDevices.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DimmableDevices.ts#L68)

***

### getDeviceTypes()

> **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getDeviceTypes`](../-internal-/classes/DimmableBaseDevice.md#getdevicetypes)

#### Source

[packages/matter.js/src/device/Endpoint.ts:242](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L242)

***

### getNumber()

> **getNumber**(): [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Returns

[`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getNumber`](../-internal-/classes/DimmableBaseDevice.md#getnumber)

#### Source

[packages/matter.js/src/device/Endpoint.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L105)

***

### getOnOff()

> **getOnOff**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getOnOff`](../-internal-/classes/DimmableBaseDevice.md#getonoff)

#### Source

[packages/matter.js/src/device/OnOffDevices.ts:119](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/OnOffDevices.ts#L119)

***

### hasClusterClient()

> **hasClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`hasClusterClient`](../-internal-/classes/DimmableBaseDevice.md#hasclusterclient)

#### Source

[packages/matter.js/src/device/Endpoint.ts:232](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L232)

***

### hasClusterServer()

> **hasClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../../cluster/export/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`hasClusterServer`](../-internal-/classes/DimmableBaseDevice.md#hasclusterserver)

#### Source

[packages/matter.js/src/device/Endpoint.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L222)

***

### removeChildEndpoint()

> `protected` **removeChildEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](Endpoint.md) |

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`removeChildEndpoint`](../-internal-/classes/DimmableBaseDevice.md#removechildendpoint)

#### Source

[packages/matter.js/src/device/Endpoint.ts:286](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L286)

***

### removeCommandHandler()

#### removeCommandHandler(command, handler)

> **removeCommandHandler**(`command`, `handler`): `void`

Method to remove command handlers from the device.
The base class do not expose any commands!

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `command` | `never` | Command name to remove the handler from |
| `handler` | [`HandlerFunction`](../../../util/export/README.md#handlerfunction) | Handler function to be removed |

##### Returns

`void`

##### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`removeCommandHandler`](../-internal-/classes/DimmableBaseDevice.md#removecommandhandler)

##### Source

[packages/matter.js/src/device/Device.ts:217](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Device.ts#L217)

#### removeCommandHandler(action, handler)

> **removeCommandHandler**\<`K`\>(`action`, `handler`): `void`

Method to remove command handlers from the device.
The base class do not expose any commands!

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof [`OnOffBaseDeviceCommands`](../-internal-/README.md#onoffbasedevicecommands) |

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `handler` | [`OnOffBaseDeviceCommands`](../-internal-/README.md#onoffbasedevicecommands)\[`K`\] | Handler function to be removed |

##### Returns

`void`

##### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`removeCommandHandler`](../-internal-/classes/DimmableBaseDevice.md#removecommandhandler)

##### Source

[packages/matter.js/src/util/NamedHandler.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/NamedHandler.ts#L41)

#### removeCommandHandler(action, handler)

> **removeCommandHandler**\<`K`\>(`action`, `handler`): `void`

Method to remove command handlers from the device.
The base class do not expose any commands!

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof [`DimmableDeviceCommands`](../-internal-/README.md#dimmabledevicecommands) |

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `action` | `K` | - |
| `handler` | [`DimmableDeviceCommands`](../-internal-/README.md#dimmabledevicecommands)\[`K`\] | Handler function to be removed |

##### Returns

`void`

##### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`removeCommandHandler`](../-internal-/classes/DimmableBaseDevice.md#removecommandhandler)

##### Source

[packages/matter.js/src/util/NamedHandler.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/NamedHandler.ts#L41)

***

### removeFromStructure()

> **removeFromStructure**(): `void`

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`removeFromStructure`](../-internal-/classes/DimmableBaseDevice.md#removefromstructure)

#### Source

[packages/matter.js/src/device/Endpoint.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L91)

***

### setBridgedDeviceReachability()

> **setBridgedDeviceReachability**(`reachable`): `void`

Set the reachability of the device exposed via the bridge. If this is a device inside  a composed device the
reachability needs to be set there.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `reachable` | `boolean` | true if reachable, false otherwise |

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`setBridgedDeviceReachability`](../-internal-/classes/DimmableBaseDevice.md#setbridgeddevicereachability)

#### Source

[packages/matter.js/src/device/Device.ts:300](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Device.ts#L300)

***

### setCurrentLevel()

> **setCurrentLevel**(`level`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | `null` \| `number` |

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`setCurrentLevel`](../-internal-/classes/DimmableBaseDevice.md#setcurrentlevel)

#### Source

[packages/matter.js/src/device/DimmableDevices.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/DimmableDevices.ts#L72)

***

### setDeviceTypes()

> **setDeviceTypes**(`deviceTypes`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`] |

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`setDeviceTypes`](../-internal-/classes/DimmableBaseDevice.md#setdevicetypes)

#### Source

[packages/matter.js/src/device/Endpoint.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L246)

***

### setOnOff()

> **setOnOff**(`onOff`): `void`

Turns the device on or off
This is an example f a convenient device class API to control the device without need to access clusters

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `onOff` | `boolean` | true to turn on, false to turn off |

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`setOnOff`](../-internal-/classes/DimmableBaseDevice.md#setonoff)

#### Source

[packages/matter.js/src/device/OnOffDevices.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/OnOffDevices.ts#L115)

***

### setStructureChangedCallback()

> **setStructureChangedCallback**(`callback`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`setStructureChangedCallback`](../-internal-/classes/DimmableBaseDevice.md#setstructurechangedcallback)

#### Source

[packages/matter.js/src/device/Endpoint.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L86)

***

### toggle()

> **toggle**(): `void`

Toggles the device on or off
This is an example f a convenient device class API to control the device without need to access clusters

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`toggle`](../-internal-/classes/DimmableBaseDevice.md#toggle)

#### Source

[packages/matter.js/src/device/OnOffDevices.ts:127](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/OnOffDevices.ts#L127)

***

### updatePartsList()

> **updatePartsList**(): [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)[]

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`updatePartsList`](../-internal-/classes/DimmableBaseDevice.md#updatepartslist)

#### Source

[packages/matter.js/src/device/Endpoint.ts:360](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L360)

***

### verifyRequiredClusters()

> **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`verifyRequiredClusters`](../-internal-/classes/DimmableBaseDevice.md#verifyrequiredclusters)

#### Source

[packages/matter.js/src/device/Endpoint.ts:318](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L318)
