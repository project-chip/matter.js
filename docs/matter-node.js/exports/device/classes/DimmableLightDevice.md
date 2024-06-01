[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/device](../README.md) / DimmableLightDevice

# Class: DimmableLightDevice

## Extends

- [`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md)

## Constructors

### new DimmableLightDevice()

> **new DimmableLightDevice**(`onOffAttributeInitialValues`?, `dimmableAttributeValues`?, `options`?): [`DimmableLightDevice`](DimmableLightDevice.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `onOffAttributeInitialValues`? | [`AttributeInitialValues`](../../cluster/README.md#attributeinitialvaluesa)\<[`Merge`](../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../cluster/README.md#globalattributesf)\<`object`\>\>\> |
| `dimmableAttributeValues`? | [`AttributeInitialValues`](../../cluster/README.md#attributeinitialvaluesa)\<[`Merge`](../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../cluster/README.md#globalattributesf)\<`object`\>\>\> |
| `options`? | [`EndpointOptions`](../interfaces/EndpointOptions.md) |

#### Returns

[`DimmableLightDevice`](DimmableLightDevice.md)

#### Overrides

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`constructor`](../-internal-/classes/DimmableBaseDevice.md#constructors)

#### Source

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:45

## Properties

### commandHandler

> `protected` **commandHandler**: [`NamedHandler`](../../../util/export/classes/NamedHandler.md)\<`any`\>

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`commandHandler`](../-internal-/classes/DimmableBaseDevice.md#commandhandler)

#### Source

packages/matter.js/dist/esm/device/Device.d.ts:79

***

### deviceTypes

> `protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`deviceTypes`](../-internal-/classes/DimmableBaseDevice.md#devicetypes)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:21

***

### isLighting

> `protected` **isLighting**: `boolean`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`isLighting`](../-internal-/classes/DimmableBaseDevice.md#islighting)

#### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:39

***

### name

> **name**: `string`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`name`](../-internal-/classes/DimmableBaseDevice.md#name)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:27

***

### number

> **number**: `undefined` \| [`EndpointNumber`](../../datatype/README.md#endpointnumber)

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`number`](../-internal-/classes/DimmableBaseDevice.md#number)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:25

***

### uniqueStorageKey

> **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`uniqueStorageKey`](../-internal-/classes/DimmableBaseDevice.md#uniquestoragekey)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:26

## Accessors

### deviceType

> `get` **deviceType**(): [`DeviceTypeId`](../../datatype/README.md#devicetypeid)

#### Returns

[`DeviceTypeId`](../../datatype/README.md#devicetypeid)

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

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`_executeHandler`](../-internal-/classes/DimmableBaseDevice.md#_executehandler)

##### Source

packages/matter.js/dist/esm/device/Device.d.ts:111

#### \_executeHandler(action, args)

> `protected` **\_executeHandler**\<`K_2`\>(`action`, ...`args`): `Promise`\<`void`\>

##### Type parameters

| Type parameter |
| :------ |
| `K_2` *extends* keyof [`OnOffBaseDeviceCommands`](../-internal-/README.md#onoffbasedevicecommands) |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `action` | `K_2` |
| ...`args` | `Parameters`\<[`OnOffBaseDeviceCommands`](../-internal-/README.md#onoffbasedevicecommands)\[`K_2`\]\> |

##### Returns

`Promise`\<`void`\>

##### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`_executeHandler`](../-internal-/classes/DimmableBaseDevice.md#_executehandler)

##### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:33

#### \_executeHandler(action, args)

> `protected` **\_executeHandler**\<`K_2`\>(`action`, ...`args`): `Promise`\<`void`\>

##### Type parameters

| Type parameter |
| :------ |
| `K_2` *extends* keyof [`DimmableDeviceCommands`](../-internal-/README.md#dimmabledevicecommands) |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `action` | `K_2` |
| ...`args` | `Parameters`\<[`DimmableDeviceCommands`](../-internal-/README.md#dimmabledevicecommands)\[`K_2`\]\> |

##### Returns

`Promise`\<`void`\>

##### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`_executeHandler`](../-internal-/classes/DimmableBaseDevice.md#_executehandler)

##### Source

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:23

***

### addChildEndpoint()

> **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md) |

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addChildEndpoint`](../-internal-/classes/DimmableBaseDevice.md#addchildendpoint)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:54

***

### addClusterClient()

> **addClusterClient**\<`F`, `A`, `C`, `E`\>(`cluster`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |
| `A` *extends* [`Attributes`](../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addClusterClient`](../-internal-/classes/DimmableBaseDevice.md#addclusterclient)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:45

***

### addClusterServer()

> **addClusterServer**\<`A`, `E`\>(`cluster`): `void`

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../../cluster/interfaces/Attributes.md) |
| `E` *extends* [`Events`](../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<`A`, `E`\> |

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addClusterServer`](../-internal-/classes/DimmableBaseDevice.md#addclusterserver)

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
| `handler` | [`HandlerFunction`](../../../util/export/README.md#handlerfunction) | Handler function to be executed when the command is received |

##### Returns

`void`

##### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addCommandHandler`](../-internal-/classes/DimmableBaseDevice.md#addcommandhandler)

##### Source

packages/matter.js/dist/esm/device/Device.d.ts:94

#### addCommandHandler(action, handler)

> **addCommandHandler**\<`K`\>(`action`, `handler`): `void`

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof [`OnOffBaseDeviceCommands`](../-internal-/README.md#onoffbasedevicecommands) |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `action` | `K` |
| `handler` | [`OnOffBaseDeviceCommands`](../-internal-/README.md#onoffbasedevicecommands)\[`K`\] |

##### Returns

`void`

##### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addCommandHandler`](../-internal-/classes/DimmableBaseDevice.md#addcommandhandler)

##### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:31

#### addCommandHandler(action, handler)

> **addCommandHandler**\<`K`\>(`action`, `handler`): `void`

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof [`DimmableDeviceCommands`](../-internal-/README.md#dimmabledevicecommands) |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `action` | `K` |
| `handler` | [`DimmableDeviceCommands`](../-internal-/README.md#dimmabledevicecommands)\[`K`\] |

##### Returns

`void`

##### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addCommandHandler`](../-internal-/classes/DimmableBaseDevice.md#addcommandhandler)

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

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addCurrentLevelListener`](../-internal-/classes/DimmableBaseDevice.md#addcurrentlevellistener)

#### Source

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:39

***

### addDeviceClusters()

> `protected` **addDeviceClusters**(`attributeInitialValues`?, `excludeList`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `attributeInitialValues`? | `object` |
| `excludeList`? | [`ClusterId`](../../datatype/README.md#clusterid)[] |

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addDeviceClusters`](../-internal-/classes/DimmableBaseDevice.md#adddeviceclusters)

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

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addFixedLabel`](../-internal-/classes/DimmableBaseDevice.md#addfixedlabel)

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

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addOnOffListener`](../-internal-/classes/DimmableBaseDevice.md#addonofflistener)

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

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`addUserLabel`](../-internal-/classes/DimmableBaseDevice.md#adduserlabel)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:43

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`close`](../-internal-/classes/DimmableBaseDevice.md#close)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:40

***

### createOptionalClusterClient()

> `protected` **createOptionalClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`createOptionalClusterClient`](../-internal-/classes/DimmableBaseDevice.md#createoptionalclusterclient)

#### Source

packages/matter.js/dist/esm/device/Device.d.ts:113

***

### createOptionalClusterServer()

> `protected` **createOptionalClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<`A`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<`A`, `E`\>

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`createOptionalClusterServer`](../-internal-/classes/DimmableBaseDevice.md#createoptionalclusterserver)

#### Source

packages/matter.js/dist/esm/device/Device.d.ts:112

***

### determineUniqueID()

> **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`determineUniqueID`](../-internal-/classes/DimmableBaseDevice.md#determineuniqueid)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:58

***

### getAllClusterClients()

> **getAllClusterClients**(): [`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../cluster/interfaces/Attributes.md), [`Commands`](../../cluster/interfaces/Commands.md), [`Events`](../../cluster/interfaces/Events.md)\>[]

#### Returns

[`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../cluster/interfaces/Attributes.md), [`Commands`](../../cluster/interfaces/Commands.md), [`Events`](../../cluster/interfaces/Events.md)\>[]

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getAllClusterClients`](../-internal-/classes/DimmableBaseDevice.md#getallclusterclients)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:61

***

### getAllClusterServers()

> **getAllClusterServers**(): [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<[`Attributes`](../../cluster/interfaces/Attributes.md), [`Events`](../../cluster/interfaces/Events.md)\>[]

#### Returns

[`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<[`Attributes`](../../cluster/interfaces/Attributes.md), [`Events`](../../cluster/interfaces/Events.md)\>[]

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getAllClusterServers`](../-internal-/classes/DimmableBaseDevice.md#getallclusterservers)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:60

***

### getChildEndpoint()

> **getChildEndpoint**(`id`): `undefined` \| [`Endpoint`](Endpoint.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../../datatype/README.md#endpointnumber) |

#### Returns

`undefined` \| [`Endpoint`](Endpoint.md)

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getChildEndpoint`](../-internal-/classes/DimmableBaseDevice.md#getchildendpoint)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:55

***

### getChildEndpoints()

> **getChildEndpoints**(): [`Endpoint`](Endpoint.md)[]

#### Returns

[`Endpoint`](Endpoint.md)[]

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getChildEndpoints`](../-internal-/classes/DimmableBaseDevice.md#getchildendpoints)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:56

***

### getClusterClient()

> **getClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getClusterClient`](../-internal-/classes/DimmableBaseDevice.md#getclusterclient)

#### Source

packages/matter.js/dist/esm/device/Device.d.ts:115

***

### getClusterClientById()

> **getClusterClientById**(`clusterId`): `undefined` \| [`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../cluster/interfaces/Attributes.md), [`Commands`](../../cluster/interfaces/Commands.md), [`Events`](../../cluster/interfaces/Events.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |

#### Returns

`undefined` \| [`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../cluster/interfaces/Attributes.md), [`Commands`](../../cluster/interfaces/Commands.md), [`Events`](../../cluster/interfaces/Events.md)\>

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getClusterClientById`](../-internal-/classes/DimmableBaseDevice.md#getclusterclientbyid)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:49

***

### getClusterServer()

> **getClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<`A`, `E`\>

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<`A`, `E`\>

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getClusterServer`](../-internal-/classes/DimmableBaseDevice.md#getclusterserver)

#### Source

packages/matter.js/dist/esm/device/Device.d.ts:114

***

### getClusterServerById()

> **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<[`Attributes`](../../cluster/interfaces/Attributes.md), [`Events`](../../cluster/interfaces/Events.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../../datatype/README.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<[`Attributes`](../../cluster/interfaces/Attributes.md), [`Events`](../../cluster/interfaces/Events.md)\>

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getClusterServerById`](../-internal-/classes/DimmableBaseDevice.md#getclusterserverbyid)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:48

***

### getCurrentLevel()

> **getCurrentLevel**(): `number`

#### Returns

`number`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getCurrentLevel`](../-internal-/classes/DimmableBaseDevice.md#getcurrentlevel)

#### Source

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:32

***

### getDeviceTypes()

> **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getDeviceTypes`](../-internal-/classes/DimmableBaseDevice.md#getdevicetypes)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:52

***

### getNumber()

> **getNumber**(): [`EndpointNumber`](../../datatype/README.md#endpointnumber)

#### Returns

[`EndpointNumber`](../../datatype/README.md#endpointnumber)

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getNumber`](../-internal-/classes/DimmableBaseDevice.md#getnumber)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:41

***

### getOnOff()

> **getOnOff**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`getOnOff`](../-internal-/classes/DimmableBaseDevice.md#getonoff)

#### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:69

***

### hasClusterClient()

> **hasClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`hasClusterClient`](../-internal-/classes/DimmableBaseDevice.md#hasclusterclient)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:51

***

### hasClusterServer()

> **hasClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../../cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`hasClusterServer`](../-internal-/classes/DimmableBaseDevice.md#hasclusterserver)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:50

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
| `handler` | [`HandlerFunction`](../../../util/export/README.md#handlerfunction) | Handler function to be removed |

##### Returns

`void`

##### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`removeCommandHandler`](../-internal-/classes/DimmableBaseDevice.md#removecommandhandler)

##### Source

packages/matter.js/dist/esm/device/Device.d.ts:102

#### removeCommandHandler(action, handler)

> **removeCommandHandler**\<`K_1`\>(`action`, `handler`): `void`

##### Type parameters

| Type parameter |
| :------ |
| `K_1` *extends* keyof [`OnOffBaseDeviceCommands`](../-internal-/README.md#onoffbasedevicecommands) |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `action` | `K_1` |
| `handler` | [`OnOffBaseDeviceCommands`](../-internal-/README.md#onoffbasedevicecommands)\[`K_1`\] |

##### Returns

`void`

##### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`removeCommandHandler`](../-internal-/classes/DimmableBaseDevice.md#removecommandhandler)

##### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:32

#### removeCommandHandler(action, handler)

> **removeCommandHandler**\<`K_1`\>(`action`, `handler`): `void`

##### Type parameters

| Type parameter |
| :------ |
| `K_1` *extends* keyof [`DimmableDeviceCommands`](../-internal-/README.md#dimmabledevicecommands) |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `action` | `K_1` |
| `handler` | [`DimmableDeviceCommands`](../-internal-/README.md#dimmabledevicecommands)\[`K_1`\] |

##### Returns

`void`

##### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`removeCommandHandler`](../-internal-/classes/DimmableBaseDevice.md#removecommandhandler)

##### Source

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:22

***

### removeFromStructure()

> **removeFromStructure**(): `void`

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`removeFromStructure`](../-internal-/classes/DimmableBaseDevice.md#removefromstructure)

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

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`setBridgedDeviceReachability`](../-internal-/classes/DimmableBaseDevice.md#setbridgeddevicereachability)

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

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`setCurrentLevel`](../-internal-/classes/DimmableBaseDevice.md#setcurrentlevel)

#### Source

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:33

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

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`setOnOff`](../-internal-/classes/DimmableBaseDevice.md#setonoff)

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

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`setStructureChangedCallback`](../-internal-/classes/DimmableBaseDevice.md#setstructurechangedcallback)

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

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`toggle`](../-internal-/classes/DimmableBaseDevice.md#toggle)

#### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:74

***

### updatePartsList()

> **updatePartsList**(): [`EndpointNumber`](../../datatype/README.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../../datatype/README.md#endpointnumber)[]

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`updatePartsList`](../-internal-/classes/DimmableBaseDevice.md#updatepartslist)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:62

***

### verifyRequiredClusters()

> **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

[`DimmableBaseDevice`](../-internal-/classes/DimmableBaseDevice.md).[`verifyRequiredClusters`](../-internal-/classes/DimmableBaseDevice.md#verifyrequiredclusters)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:59
