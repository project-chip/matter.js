[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/device](../../README.md) / [\<internal\>](../README.md) / DimmableBaseDevice

# Class: DimmableBaseDevice

## Extends

- [`DimmableBaseDevice_base`](../README.md#dimmablebasedevice_base)

## Extended by

- [`DimmablePluginUnitDevice`](../../classes/DimmablePluginUnitDevice.md)
- [`DimmableLightDevice`](../../classes/DimmableLightDevice.md)

## Constructors

### new DimmableBaseDevice()

> **new DimmableBaseDevice**(`definition`, `attributeInitialValues`?, `options`?, `isLighting`?): [`DimmableBaseDevice`](DimmableBaseDevice.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`DeviceTypeDefinition`](../../interfaces/DeviceTypeDefinition.md) |
| `attributeInitialValues`? | `object` |
| `options`? | [`EndpointOptions`](../../interfaces/EndpointOptions.md) |
| `isLighting`? | `boolean` |

#### Returns

[`DimmableBaseDevice`](DimmableBaseDevice.md)

#### Overrides

`DimmableBaseDevice_base.constructor`

#### Source

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:26

## Properties

### commandHandler

> `protected` **commandHandler**: [`NamedHandler`](../../../../util/export/classes/NamedHandler.md)\<`any`\>

#### Inherited from

`DimmableBaseDevice_base.commandHandler`

#### Source

packages/matter.js/dist/esm/device/Device.d.ts:79

***

### deviceTypes

> `protected` **deviceTypes**: [[`DeviceTypeDefinition`](../../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Inherited from

`DimmableBaseDevice_base.deviceTypes`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:21

***

### isLighting

> `protected` **isLighting**: `boolean`

#### Inherited from

`DimmableBaseDevice_base.isLighting`

#### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:39

***

### name

> **name**: `string`

#### Inherited from

`DimmableBaseDevice_base.name`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:27

***

### number

> **number**: `undefined` \| [`EndpointNumber`](../../../datatype/README.md#endpointnumber)

#### Inherited from

`DimmableBaseDevice_base.number`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:25

***

### uniqueStorageKey

> **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

`DimmableBaseDevice_base.uniqueStorageKey`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:26

## Accessors

### deviceType

> `get` **deviceType**(): [`DeviceTypeId`](../../../datatype/README.md#devicetypeid)

#### Returns

[`DeviceTypeId`](../../../datatype/README.md#devicetypeid)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:37

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

`DimmableBaseDevice_base._executeHandler`

##### Source

packages/matter.js/dist/esm/device/Device.d.ts:111

#### \_executeHandler(action, args)

> `protected` **\_executeHandler**\<`K_2`\>(`action`, ...`args`): `Promise`\<`void`\>

##### Type parameters

| Type parameter |
| :------ |
| `K_2` *extends* keyof [`OnOffBaseDeviceCommands`](../README.md#onoffbasedevicecommands) |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `action` | `K_2` |
| ...`args` | `Parameters`\<[`OnOffBaseDeviceCommands`](../README.md#onoffbasedevicecommands)\[`K_2`\]\> |

##### Returns

`Promise`\<`void`\>

##### Inherited from

`DimmableBaseDevice_base._executeHandler`

##### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:33

#### \_executeHandler(action, args)

> `protected` **\_executeHandler**\<`K_2`\>(`action`, ...`args`): `Promise`\<`void`\>

##### Type parameters

| Type parameter |
| :------ |
| `K_2` *extends* keyof [`DimmableDeviceCommands`](../README.md#dimmabledevicecommands) |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `action` | `K_2` |
| ...`args` | `Parameters`\<[`DimmableDeviceCommands`](../README.md#dimmabledevicecommands)\[`K_2`\]\> |

##### Returns

`Promise`\<`void`\>

##### Inherited from

`DimmableBaseDevice_base._executeHandler`

##### Source

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:23

***

### addChildEndpoint()

> **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../../../cluster/-internal-/interfaces/EndpointInterface.md) |

#### Returns

`void`

#### Inherited from

`DimmableBaseDevice_base.addChildEndpoint`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:54

***

### addClusterClient()

> **addClusterClient**\<`F`, `A`, `C`, `E`\>(`cluster`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/README.md#bitschema) |
| `A` *extends* [`Attributes`](../../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`ClusterClientObj`](../../../cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

#### Inherited from

`DimmableBaseDevice_base.addClusterClient`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:45

***

### addClusterServer()

> **addClusterServer**\<`A`, `E`\>(`cluster`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../../../cluster/interfaces/Attributes.md) |
| `E` *extends* [`Events`](../../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../../../cluster/README.md#clusterserverobjae)\<`A`, `E`\> |

#### Returns

`void`

#### Inherited from

`DimmableBaseDevice_base.addClusterServer`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:44

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
| `handler` | [`HandlerFunction`](../../../../util/export/README.md#handlerfunction) | Handler function to be executed when the command is received |

##### Returns

`void`

##### Inherited from

`DimmableBaseDevice_base.addCommandHandler`

##### Source

packages/matter.js/dist/esm/device/Device.d.ts:94

#### addCommandHandler(action, handler)

> **addCommandHandler**\<`K`\>(`action`, `handler`): `void`

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof [`OnOffBaseDeviceCommands`](../README.md#onoffbasedevicecommands) |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `action` | `K` |
| `handler` | [`OnOffBaseDeviceCommands`](../README.md#onoffbasedevicecommands)\[`K`\] |

##### Returns

`void`

##### Inherited from

`DimmableBaseDevice_base.addCommandHandler`

##### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:31

#### addCommandHandler(action, handler)

> **addCommandHandler**\<`K`\>(`action`, `handler`): `void`

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof [`DimmableDeviceCommands`](../README.md#dimmabledevicecommands) |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `action` | `K` |
| `handler` | [`DimmableDeviceCommands`](../README.md#dimmabledevicecommands)\[`K`\] |

##### Returns

`void`

##### Inherited from

`DimmableBaseDevice_base.addCommandHandler`

##### Source

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:21

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

#### Source

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:39

***

### addDeviceClusters()

> `protected` **addDeviceClusters**(`attributeInitialValues`?, `excludeList`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `attributeInitialValues`? | `object` |
| `excludeList`? | [`ClusterId`](../../../datatype/README.md#clusterid)[] |

#### Returns

`void`

#### Overrides

`DimmableBaseDevice_base.addDeviceClusters`

#### Source

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:29

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

`DimmableBaseDevice_base.addFixedLabel`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:42

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

`DimmableBaseDevice_base.addOnOffListener`

#### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:81

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

`DimmableBaseDevice_base.addUserLabel`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:43

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Inherited from

`DimmableBaseDevice_base.close`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:40

***

### createOptionalClusterClient()

> `protected` **createOptionalClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterClientObj`](../../../cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_cluster` | [`Cluster`](../../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterClientObj`](../../../cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Inherited from

`DimmableBaseDevice_base.createOptionalClusterClient`

#### Source

packages/matter.js/dist/esm/device/Device.d.ts:113

***

### createOptionalClusterServer()

> `protected` **createOptionalClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterServerObj`](../../../cluster/README.md#clusterserverobjae)\<`A`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_cluster` | [`Cluster`](../../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterServerObj`](../../../cluster/README.md#clusterserverobjae)\<`A`, `E`\>

#### Inherited from

`DimmableBaseDevice_base.createOptionalClusterServer`

#### Source

packages/matter.js/dist/esm/device/Device.d.ts:112

***

### determineUniqueID()

> **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

`DimmableBaseDevice_base.determineUniqueID`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:58

***

### getAllClusterClients()

> **getAllClusterClients**(): [`ClusterClientObj`](../../../cluster/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/interfaces/Attributes.md), [`Commands`](../../../cluster/interfaces/Commands.md), [`Events`](../../../cluster/interfaces/Events.md)\>[]

#### Returns

[`ClusterClientObj`](../../../cluster/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/interfaces/Attributes.md), [`Commands`](../../../cluster/interfaces/Commands.md), [`Events`](../../../cluster/interfaces/Events.md)\>[]

#### Inherited from

`DimmableBaseDevice_base.getAllClusterClients`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:61

***

### getAllClusterServers()

> **getAllClusterServers**(): [`ClusterServerObj`](../../../cluster/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/interfaces/Attributes.md), [`Events`](../../../cluster/interfaces/Events.md)\>[]

#### Returns

[`ClusterServerObj`](../../../cluster/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/interfaces/Attributes.md), [`Events`](../../../cluster/interfaces/Events.md)\>[]

#### Inherited from

`DimmableBaseDevice_base.getAllClusterServers`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:60

***

### getChildEndpoint()

> **getChildEndpoint**(`id`): `undefined` \| [`Endpoint`](../../classes/Endpoint.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../../../datatype/README.md#endpointnumber) |

#### Returns

`undefined` \| [`Endpoint`](../../classes/Endpoint.md)

#### Inherited from

`DimmableBaseDevice_base.getChildEndpoint`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:55

***

### getChildEndpoints()

> **getChildEndpoints**(): [`Endpoint`](../../classes/Endpoint.md)[]

#### Returns

[`Endpoint`](../../classes/Endpoint.md)[]

#### Inherited from

`DimmableBaseDevice_base.getChildEndpoints`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:56

***

### getClusterClient()

> **getClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../../../cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../../../cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Inherited from

`DimmableBaseDevice_base.getClusterClient`

#### Source

packages/matter.js/dist/esm/device/Device.d.ts:115

***

### getClusterClientById()

> **getClusterClientById**(`clusterId`): `undefined` \| [`ClusterClientObj`](../../../cluster/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/interfaces/Attributes.md), [`Commands`](../../../cluster/interfaces/Commands.md), [`Events`](../../../cluster/interfaces/Events.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../../../datatype/README.md#clusterid) |

#### Returns

`undefined` \| [`ClusterClientObj`](../../../cluster/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/interfaces/Attributes.md), [`Commands`](../../../cluster/interfaces/Commands.md), [`Events`](../../../cluster/interfaces/Events.md)\>

#### Inherited from

`DimmableBaseDevice_base.getClusterClientById`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:49

***

### getClusterServer()

> **getClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../../../cluster/README.md#clusterserverobjae)\<`A`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../../../cluster/README.md#clusterserverobjae)\<`A`, `E`\>

#### Inherited from

`DimmableBaseDevice_base.getClusterServer`

#### Source

packages/matter.js/dist/esm/device/Device.d.ts:114

***

### getClusterServerById()

> **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../../../cluster/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/interfaces/Attributes.md), [`Events`](../../../cluster/interfaces/Events.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../../../datatype/README.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../../../cluster/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/interfaces/Attributes.md), [`Events`](../../../cluster/interfaces/Events.md)\>

#### Inherited from

`DimmableBaseDevice_base.getClusterServerById`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:48

***

### getCurrentLevel()

> **getCurrentLevel**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:32

***

### getDeviceTypes()

> **getDeviceTypes**(): [[`DeviceTypeDefinition`](../../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Returns

[[`DeviceTypeDefinition`](../../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Inherited from

`DimmableBaseDevice_base.getDeviceTypes`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:52

***

### getNumber()

> **getNumber**(): [`EndpointNumber`](../../../datatype/README.md#endpointnumber)

#### Returns

[`EndpointNumber`](../../../datatype/README.md#endpointnumber)

#### Inherited from

`DimmableBaseDevice_base.getNumber`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:41

***

### getOnOff()

> **getOnOff**(): `boolean`

#### Returns

`boolean`

#### Inherited from

`DimmableBaseDevice_base.getOnOff`

#### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:69

***

### hasClusterClient()

> **hasClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

`DimmableBaseDevice_base.hasClusterClient`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:51

***

### hasClusterServer()

> **hasClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

`DimmableBaseDevice_base.hasClusterServer`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:50

***

### removeChildEndpoint()

> `protected` **removeChildEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](../../classes/Endpoint.md) |

#### Returns

`void`

#### Inherited from

`DimmableBaseDevice_base.removeChildEndpoint`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:57

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
| `handler` | [`HandlerFunction`](../../../../util/export/README.md#handlerfunction) | Handler function to be removed |

##### Returns

`void`

##### Inherited from

`DimmableBaseDevice_base.removeCommandHandler`

##### Source

packages/matter.js/dist/esm/device/Device.d.ts:102

#### removeCommandHandler(action, handler)

> **removeCommandHandler**\<`K_1`\>(`action`, `handler`): `void`

##### Type parameters

| Type parameter |
| :------ |
| `K_1` *extends* keyof [`OnOffBaseDeviceCommands`](../README.md#onoffbasedevicecommands) |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `action` | `K_1` |
| `handler` | [`OnOffBaseDeviceCommands`](../README.md#onoffbasedevicecommands)\[`K_1`\] |

##### Returns

`void`

##### Inherited from

`DimmableBaseDevice_base.removeCommandHandler`

##### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:32

#### removeCommandHandler(action, handler)

> **removeCommandHandler**\<`K_1`\>(`action`, `handler`): `void`

##### Type parameters

| Type parameter |
| :------ |
| `K_1` *extends* keyof [`DimmableDeviceCommands`](../README.md#dimmabledevicecommands) |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `action` | `K_1` |
| `handler` | [`DimmableDeviceCommands`](../README.md#dimmabledevicecommands)\[`K_1`\] |

##### Returns

`void`

##### Inherited from

`DimmableBaseDevice_base.removeCommandHandler`

##### Source

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:22

***

### removeFromStructure()

> **removeFromStructure**(): `void`

#### Returns

`void`

#### Inherited from

`DimmableBaseDevice_base.removeFromStructure`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:39

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

`DimmableBaseDevice_base.setBridgedDeviceReachability`

#### Source

packages/matter.js/dist/esm/device/Device.d.ts:122

***

### setCurrentLevel()

> **setCurrentLevel**(`level`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | `null` \| `number` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:33

***

### setDeviceTypes()

> **setDeviceTypes**(`deviceTypes`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`] |

#### Returns

`void`

#### Inherited from

`DimmableBaseDevice_base.setDeviceTypes`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:53

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

`DimmableBaseDevice_base.setOnOff`

#### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:68

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

`DimmableBaseDevice_base.setStructureChangedCallback`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:38

***

### toggle()

> **toggle**(): `void`

Toggles the device on or off
This is an example f a convenient device class API to control the device without need to access clusters

#### Returns

`void`

#### Inherited from

`DimmableBaseDevice_base.toggle`

#### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:74

***

### updatePartsList()

> **updatePartsList**(): [`EndpointNumber`](../../../datatype/README.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../../../datatype/README.md#endpointnumber)[]

#### Inherited from

`DimmableBaseDevice_base.updatePartsList`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:62

***

### verifyRequiredClusters()

> **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

`DimmableBaseDevice_base.verifyRequiredClusters`

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:59
