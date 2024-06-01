[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/device](../README.md) / ComposedDevice

# Class: ComposedDevice

A ComposedDevice is a special endpoint that allows to combine multiple sub devices and expose this as one device
(e.g. a fan and a light).

## Extends

- [`Endpoint`](Endpoint.md)

## Constructors

### new ComposedDevice()

> **new ComposedDevice**(`definition`, `devices`?, `options`?): [`ComposedDevice`](ComposedDevice.md)

Creates a new ComposedDevice.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `definition` | [`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md) | DeviceTypeDefinitions of the composed device |
| `devices`? | [`Device`](Device.md)[] | Array with devices that should be combined into one device that are directly added. |
| `options`? | [`EndpointOptions`](../interfaces/EndpointOptions.md) | Optional Endpoint options |

#### Returns

[`ComposedDevice`](ComposedDevice.md)

#### Overrides

[`Endpoint`](Endpoint.md).[`constructor`](Endpoint.md#constructors)

#### Source

packages/matter.js/dist/esm/device/ComposedDevice.d.ts:16

## Properties

### deviceTypes

> `protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Inherited from

[`Endpoint`](Endpoint.md).[`deviceTypes`](Endpoint.md#devicetypes)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:21

***

### name

> **name**: `string`

#### Inherited from

[`Endpoint`](Endpoint.md).[`name`](Endpoint.md#name)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:27

***

### number

> **number**: `undefined` \| [`EndpointNumber`](../../datatype/README.md#endpointnumber)

#### Inherited from

[`Endpoint`](Endpoint.md).[`number`](Endpoint.md#number)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:25

***

### uniqueStorageKey

> **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

[`Endpoint`](Endpoint.md).[`uniqueStorageKey`](Endpoint.md#uniquestoragekey)

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

### addChildEndpoint()

> **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../../cluster/-internal-/interfaces/EndpointInterface.md) |

#### Returns

`void`

#### Inherited from

[`Endpoint`](Endpoint.md).[`addChildEndpoint`](Endpoint.md#addchildendpoint)

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

[`Endpoint`](Endpoint.md).[`addClusterClient`](Endpoint.md#addclusterclient)

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

[`Endpoint`](Endpoint.md).[`addClusterServer`](Endpoint.md#addclusterserver)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:44

***

### addDevice()

> **addDevice**(`device`): `void`

Add a sub-device to the composed device.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `device` | [`Device`](Device.md) | Device instance to add |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/device/ComposedDevice.d.ts:21

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

[`Endpoint`](Endpoint.md).[`addFixedLabel`](Endpoint.md#addfixedlabel)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:42

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

[`Endpoint`](Endpoint.md).[`addUserLabel`](Endpoint.md#adduserlabel)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:43

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Inherited from

[`Endpoint`](Endpoint.md).[`close`](Endpoint.md#close)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:40

***

### determineUniqueID()

> **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[`Endpoint`](Endpoint.md).[`determineUniqueID`](Endpoint.md#determineuniqueid)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:58

***

### getAllClusterClients()

> **getAllClusterClients**(): [`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../cluster/interfaces/Attributes.md), [`Commands`](../../cluster/interfaces/Commands.md), [`Events`](../../cluster/interfaces/Events.md)\>[]

#### Returns

[`ClusterClientObj`](../../cluster/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../cluster/interfaces/Attributes.md), [`Commands`](../../cluster/interfaces/Commands.md), [`Events`](../../cluster/interfaces/Events.md)\>[]

#### Inherited from

[`Endpoint`](Endpoint.md).[`getAllClusterClients`](Endpoint.md#getallclusterclients)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:61

***

### getAllClusterServers()

> **getAllClusterServers**(): [`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<[`Attributes`](../../cluster/interfaces/Attributes.md), [`Events`](../../cluster/interfaces/Events.md)\>[]

#### Returns

[`ClusterServerObj`](../../cluster/README.md#clusterserverobjae)\<[`Attributes`](../../cluster/interfaces/Attributes.md), [`Events`](../../cluster/interfaces/Events.md)\>[]

#### Inherited from

[`Endpoint`](Endpoint.md).[`getAllClusterServers`](Endpoint.md#getallclusterservers)

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

[`Endpoint`](Endpoint.md).[`getChildEndpoint`](Endpoint.md#getchildendpoint)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:55

***

### getChildEndpoints()

> **getChildEndpoints**(): [`Endpoint`](Endpoint.md)[]

#### Returns

[`Endpoint`](Endpoint.md)[]

#### Inherited from

[`Endpoint`](Endpoint.md).[`getChildEndpoints`](Endpoint.md#getchildendpoints)

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

[`Endpoint`](Endpoint.md).[`getClusterClient`](Endpoint.md#getclusterclient)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:47

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

[`Endpoint`](Endpoint.md).[`getClusterClientById`](Endpoint.md#getclusterclientbyid)

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

[`Endpoint`](Endpoint.md).[`getClusterServer`](Endpoint.md#getclusterserver)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:46

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

[`Endpoint`](Endpoint.md).[`getClusterServerById`](Endpoint.md#getclusterserverbyid)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:48

***

### getDeviceTypes()

> **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Inherited from

[`Endpoint`](Endpoint.md).[`getDeviceTypes`](Endpoint.md#getdevicetypes)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:52

***

### getDevices()

> **getDevices**(): [`Endpoint`](Endpoint.md)[]

Get all sub-devices of the composed device.

#### Returns

[`Endpoint`](Endpoint.md)[]

Array with all sub-devices

#### Source

packages/matter.js/dist/esm/device/ComposedDevice.d.ts:27

***

### getNumber()

> **getNumber**(): [`EndpointNumber`](../../datatype/README.md#endpointnumber)

#### Returns

[`EndpointNumber`](../../datatype/README.md#endpointnumber)

#### Inherited from

[`Endpoint`](Endpoint.md).[`getNumber`](Endpoint.md#getnumber)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:41

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

[`Endpoint`](Endpoint.md).[`hasClusterClient`](Endpoint.md#hasclusterclient)

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

[`Endpoint`](Endpoint.md).[`hasClusterServer`](Endpoint.md#hasclusterserver)

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

[`Endpoint`](Endpoint.md).[`removeChildEndpoint`](Endpoint.md#removechildendpoint)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:57

***

### removeFromStructure()

> **removeFromStructure**(): `void`

#### Returns

`void`

#### Inherited from

[`Endpoint`](Endpoint.md).[`removeFromStructure`](Endpoint.md#removefromstructure)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:39

***

### setBridgedDeviceReachability()

> **setBridgedDeviceReachability**(`reachable`): `void`

Set the reachability of the Composed device exposed via the bridge.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `reachable` | `boolean` | true if reachable, false otherwise |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/device/ComposedDevice.d.ts:37

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

[`Endpoint`](Endpoint.md).[`setDeviceTypes`](Endpoint.md#setdevicetypes)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:53

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

[`Endpoint`](Endpoint.md).[`setStructureChangedCallback`](Endpoint.md#setstructurechangedcallback)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:38

***

### updatePartsList()

> **updatePartsList**(): [`EndpointNumber`](../../datatype/README.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../../datatype/README.md#endpointnumber)[]

#### Inherited from

[`Endpoint`](Endpoint.md).[`updatePartsList`](Endpoint.md#updatepartslist)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:62

***

### verifyRequiredClusters()

> **verifyRequiredClusters**(): `void`

Verify that the required clusters exists on the device.

#### Returns

`void`

#### Overrides

[`Endpoint`](Endpoint.md).[`verifyRequiredClusters`](Endpoint.md#verifyrequiredclusters)

#### Source

packages/matter.js/dist/esm/device/ComposedDevice.d.ts:31
