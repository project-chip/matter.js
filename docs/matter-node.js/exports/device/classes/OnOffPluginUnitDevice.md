[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/device](../README.md) / OnOffPluginUnitDevice

# Class: OnOffPluginUnitDevice

Device class for an OnOffPluginUnit Device

## Extends

- [`OnOffBaseDevice`](OnOffBaseDevice.md)

## Constructors

### new OnOffPluginUnitDevice()

> **new OnOffPluginUnitDevice**(`onOffAttributeInitialValues`?, `options`?): [`OnOffPluginUnitDevice`](OnOffPluginUnitDevice.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `onOffAttributeInitialValues`? | [`AttributeInitialValues`](../../cluster/README.md#attributeinitialvaluesa)\<[`Merge`](../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../cluster/README.md#globalattributesf)\<`object`\>\>\> |
| `options`? | [`EndpointOptions`](../interfaces/EndpointOptions.md) |

#### Returns

[`OnOffPluginUnitDevice`](OnOffPluginUnitDevice.md)

#### Overrides

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`constructor`](OnOffBaseDevice.md#constructors)

#### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:87

## Properties

### commandHandler

> `protected` **commandHandler**: [`NamedHandler`](../../../util/export/classes/NamedHandler.md)\<`any`\>

#### Inherited from

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`commandHandler`](OnOffBaseDevice.md#commandhandler)

#### Source

packages/matter.js/dist/esm/device/Device.d.ts:79

***

### deviceTypes

> `protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Inherited from

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`deviceTypes`](OnOffBaseDevice.md#devicetypes)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:21

***

### isLighting

> `protected` **isLighting**: `boolean`

#### Inherited from

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`isLighting`](OnOffBaseDevice.md#islighting)

#### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:39

***

### name

> **name**: `string`

#### Inherited from

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`name`](OnOffBaseDevice.md#name)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:27

***

### number

> **number**: `undefined` \| [`EndpointNumber`](../../datatype/README.md#endpointnumber)

#### Inherited from

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`number`](OnOffBaseDevice.md#number)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:25

***

### uniqueStorageKey

> **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`uniqueStorageKey`](OnOffBaseDevice.md#uniquestoragekey)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`_executeHandler`](OnOffBaseDevice.md#_executehandler)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`_executeHandler`](OnOffBaseDevice.md#_executehandler)

##### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:33

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`addChildEndpoint`](OnOffBaseDevice.md#addchildendpoint)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`addClusterClient`](OnOffBaseDevice.md#addclusterclient)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`addClusterServer`](OnOffBaseDevice.md#addclusterserver)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`addCommandHandler`](OnOffBaseDevice.md#addcommandhandler)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`addCommandHandler`](OnOffBaseDevice.md#addcommandhandler)

##### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:31

***

### addDeviceClusters()

> `protected` **addDeviceClusters**(`attributeInitialValues`?, `excludeList`?): `void`

Adds mandatory clusters to the device

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `attributeInitialValues`? | `object` | Optional object with initial attribute values for automatically added clusters |
| `excludeList`? | [`ClusterId`](../../datatype/README.md#clusterid)[] | List of clusters to exclude from being added |

#### Returns

`void`

#### Inherited from

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`addDeviceClusters`](OnOffBaseDevice.md#adddeviceclusters)

#### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:59

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`addFixedLabel`](OnOffBaseDevice.md#addfixedlabel)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`addOnOffListener`](OnOffBaseDevice.md#addonofflistener)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`addUserLabel`](OnOffBaseDevice.md#adduserlabel)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:43

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Inherited from

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`close`](OnOffBaseDevice.md#close)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`createOptionalClusterClient`](OnOffBaseDevice.md#createoptionalclusterclient)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`createOptionalClusterServer`](OnOffBaseDevice.md#createoptionalclusterserver)

#### Source

packages/matter.js/dist/esm/device/Device.d.ts:112

***

### determineUniqueID()

> **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`determineUniqueID`](OnOffBaseDevice.md#determineuniqueid)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:58

***

### getAllClusterClients()

> **getAllClusterClients**(): [`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../cluster/interfaces/Attributes.md), [`Commands`](../../cluster/interfaces/Commands.md), [`Events`](../../cluster/interfaces/Events.md)\>[]

#### Returns

[`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../cluster/interfaces/Attributes.md), [`Commands`](../../cluster/interfaces/Commands.md), [`Events`](../../cluster/interfaces/Events.md)\>[]

#### Inherited from

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`getAllClusterClients`](OnOffBaseDevice.md#getallclusterclients)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:61

***

### getAllClusterServers()

> **getAllClusterServers**(): [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<[`Attributes`](../../cluster/interfaces/Attributes.md), [`Events`](../../cluster/interfaces/Events.md)\>[]

#### Returns

[`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<[`Attributes`](../../cluster/interfaces/Attributes.md), [`Events`](../../cluster/interfaces/Events.md)\>[]

#### Inherited from

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`getAllClusterServers`](OnOffBaseDevice.md#getallclusterservers)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`getChildEndpoint`](OnOffBaseDevice.md#getchildendpoint)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:55

***

### getChildEndpoints()

> **getChildEndpoints**(): [`Endpoint`](Endpoint.md)[]

#### Returns

[`Endpoint`](Endpoint.md)[]

#### Inherited from

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`getChildEndpoints`](OnOffBaseDevice.md#getchildendpoints)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`getClusterClient`](OnOffBaseDevice.md#getclusterclient)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`getClusterClientById`](OnOffBaseDevice.md#getclusterclientbyid)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`getClusterServer`](OnOffBaseDevice.md#getclusterserver)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`getClusterServerById`](OnOffBaseDevice.md#getclusterserverbyid)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:48

***

### getDeviceTypes()

> **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Inherited from

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`getDeviceTypes`](OnOffBaseDevice.md#getdevicetypes)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:52

***

### getNumber()

> **getNumber**(): [`EndpointNumber`](../../datatype/README.md#endpointnumber)

#### Returns

[`EndpointNumber`](../../datatype/README.md#endpointnumber)

#### Inherited from

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`getNumber`](OnOffBaseDevice.md#getnumber)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:41

***

### getOnOff()

> **getOnOff**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`getOnOff`](OnOffBaseDevice.md#getonoff)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`hasClusterClient`](OnOffBaseDevice.md#hasclusterclient)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`hasClusterServer`](OnOffBaseDevice.md#hasclusterserver)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`removeChildEndpoint`](OnOffBaseDevice.md#removechildendpoint)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`removeCommandHandler`](OnOffBaseDevice.md#removecommandhandler)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`removeCommandHandler`](OnOffBaseDevice.md#removecommandhandler)

##### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:32

***

### removeFromStructure()

> **removeFromStructure**(): `void`

#### Returns

`void`

#### Inherited from

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`removeFromStructure`](OnOffBaseDevice.md#removefromstructure)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`setBridgedDeviceReachability`](OnOffBaseDevice.md#setbridgeddevicereachability)

#### Source

packages/matter.js/dist/esm/device/Device.d.ts:122

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`setDeviceTypes`](OnOffBaseDevice.md#setdevicetypes)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`setOnOff`](OnOffBaseDevice.md#setonoff)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`setStructureChangedCallback`](OnOffBaseDevice.md#setstructurechangedcallback)

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

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`toggle`](OnOffBaseDevice.md#toggle)

#### Source

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:74

***

### updatePartsList()

> **updatePartsList**(): [`EndpointNumber`](../../datatype/README.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../../datatype/README.md#endpointnumber)[]

#### Inherited from

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`updatePartsList`](OnOffBaseDevice.md#updatepartslist)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:62

***

### verifyRequiredClusters()

> **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

[`OnOffBaseDevice`](OnOffBaseDevice.md).[`verifyRequiredClusters`](OnOffBaseDevice.md#verifyrequiredclusters)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:59
