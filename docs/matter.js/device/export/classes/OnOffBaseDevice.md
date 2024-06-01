[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [device/export](../README.md) / OnOffBaseDevice

# Class: OnOffBaseDevice

Abstract Base class for OnOff devices

## Extends

- [`Device`](Device.md)\<`this`\> & `object`

## Extended by

- [`OnOffPluginUnitDevice`](OnOffPluginUnitDevice.md)
- [`OnOffLightDevice`](OnOffLightDevice.md)

## Constructors

### new OnOffBaseDevice()

> `protected` **new OnOffBaseDevice**(`definition`, `attributeInitialValues`?, `options`?, `isLighting`?): [`OnOffBaseDevice`](OnOffBaseDevice.md)

Creates a new OnOffBaseDevice

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `definition` | [`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md) | `undefined` | Device type definition of the device to create |
| `attributeInitialValues`? | `object` | `undefined` | Optional object with initial attribute values for automatically added clusters |
| `options`? | [`EndpointOptions`](../interfaces/EndpointOptions.md) | `{}` | Optional endpoint options |
| `isLighting`? | `boolean` | `false` | Define if Lighting feature is set |

#### Returns

[`OnOffBaseDevice`](OnOffBaseDevice.md)

#### Overrides

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).constructor`

#### Source

[packages/matter.js/src/device/OnOffDevices.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/OnOffDevices.ts#L61)

## Properties

### commandHandler

> `protected` **commandHandler**: [`NamedHandler`](../../../util/export/classes/NamedHandler.md)\<`any`\>

#### Inherited from

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).commandHandler`

#### Source

[packages/matter.js/src/device/Device.ts:173](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Device.ts#L173)

***

### deviceTypes

> `protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

One or multiple DeviceTypeDefinitions of the endpoint

#### Inherited from

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).deviceTypes`

#### Source

[packages/matter.js/src/device/Endpoint.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L55)

***

### isLighting

> `protected` **isLighting**: `boolean` = `false`

Define if Lighting feature is set

#### Source

[packages/matter.js/src/device/OnOffDevices.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/OnOffDevices.ts#L65)

***

### name

> **name**: `string` = `""`

#### Inherited from

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).name`

#### Source

[packages/matter.js/src/device/Endpoint.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L41)

***

### number

> **number**: `undefined` \| [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Inherited from

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).number`

#### Source

[packages/matter.js/src/device/Endpoint.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L39)

***

### uniqueStorageKey

> **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).uniqueStorageKey`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device)._executeHandler`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device)._executeHandler`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).addChildEndpoint`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).addClusterClient`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).addClusterServer`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).addCommandHandler`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).addCommandHandler`

##### Source

[packages/matter.js/src/util/NamedHandler.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/NamedHandler.ts#L40)

***

### addDeviceClusters()

> `protected` **addDeviceClusters**(`attributeInitialValues`?, `excludeList`?): `void`

Adds mandatory clusters to the device

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `attributeInitialValues`? | `object` | `undefined` | Optional object with initial attribute values for automatically added clusters |
| `excludeList`? | [`ClusterId`](../../../datatype/export/README.md#clusterid)[] | `[]` | List of clusters to exclude from being added |

#### Returns

`void`

#### Source

[packages/matter.js/src/device/OnOffDevices.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/OnOffDevices.ts#L78)

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).addFixedLabel`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).addUserLabel`

#### Source

[packages/matter.js/src/device/Endpoint.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L132)

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Inherited from

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).close`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).createOptionalClusterClient`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).createOptionalClusterServer`

#### Source

[packages/matter.js/src/device/Device.ts:233](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Device.ts#L233)

***

### determineUniqueID()

> **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).determineUniqueID`

#### Source

[packages/matter.js/src/device/Endpoint.ts:296](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L296)

***

### getAllClusterClients()

> **getAllClusterClients**(): [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Commands`](../../../cluster/export/interfaces/Commands.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Returns

[`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Commands`](../../../cluster/export/interfaces/Commands.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Inherited from

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).getAllClusterClients`

#### Source

[packages/matter.js/src/device/Endpoint.ts:356](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L356)

***

### getAllClusterServers()

> **getAllClusterServers**(): [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Returns

[`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Inherited from

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).getAllClusterServers`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).getChildEndpoint`

#### Source

[packages/matter.js/src/device/Endpoint.ts:278](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L278)

***

### getChildEndpoints()

> **getChildEndpoints**(): [`Endpoint`](Endpoint.md)[]

#### Returns

[`Endpoint`](Endpoint.md)[]

#### Inherited from

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).getChildEndpoints`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).getClusterClient`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).getClusterClientById`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).getClusterServer`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).getClusterServerById`

#### Source

[packages/matter.js/src/device/Endpoint.ts:214](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L214)

***

### getDeviceTypes()

> **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Inherited from

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).getDeviceTypes`

#### Source

[packages/matter.js/src/device/Endpoint.ts:242](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L242)

***

### getNumber()

> **getNumber**(): [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Returns

[`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Inherited from

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).getNumber`

#### Source

[packages/matter.js/src/device/Endpoint.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L105)

***

### getOnOff()

> **getOnOff**(): `boolean`

#### Returns

`boolean`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).hasClusterClient`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).hasClusterServer`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).removeChildEndpoint`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).removeCommandHandler`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).removeCommandHandler`

##### Source

[packages/matter.js/src/util/NamedHandler.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/NamedHandler.ts#L41)

***

### removeFromStructure()

> **removeFromStructure**(): `void`

#### Returns

`void`

#### Inherited from

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).removeFromStructure`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).setBridgedDeviceReachability`

#### Source

[packages/matter.js/src/device/Device.ts:300](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Device.ts#L300)

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).setDeviceTypes`

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

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).setStructureChangedCallback`

#### Source

[packages/matter.js/src/device/Endpoint.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L86)

***

### toggle()

> **toggle**(): `void`

Toggles the device on or off
This is an example f a convenient device class API to control the device without need to access clusters

#### Returns

`void`

#### Source

[packages/matter.js/src/device/OnOffDevices.ts:127](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/OnOffDevices.ts#L127)

***

### updatePartsList()

> **updatePartsList**(): [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)[]

#### Inherited from

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).updatePartsList`

#### Source

[packages/matter.js/src/device/Endpoint.ts:360](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L360)

***

### verifyRequiredClusters()

> **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

`extendPublicHandlerMethods<typeof Device, OnOffBaseDeviceCommands>(Device).verifyRequiredClusters`

#### Source

[packages/matter.js/src/device/Endpoint.ts:318](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L318)
