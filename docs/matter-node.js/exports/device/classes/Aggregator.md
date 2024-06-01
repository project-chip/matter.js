[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/device](../README.md) / Aggregator

# Class: Aggregator

An Aggregator is a special endpoint that exposes multiple devices as a "bridge" into the matter ecosystem.
Use the `addBridgedDevice` or `addBridgedDeviceWithPowerSourceInfo` method to add the devices and provide the details
for the "Bridged Device Basic Information Cluster". The BridgedDeviceBasicInformationCluster is then added automatically.
If Power source information should be provided you need to also add the needed clusters (PowerSourceConfigurationCluster
and PowerSourceCluster) to the device!

## Extends

- [`Endpoint`](Endpoint.md)

## Constructors

### new Aggregator()

> **new Aggregator**(`devices`?, `options`?): [`Aggregator`](Aggregator.md)

Create a new Aggregator instance and optionally directly add devices to it. If this is used the devices must
already have the BridgedDeviceBasicInformationCluster added!

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `devices`? | [`Device`](Device.md)[] | Array of devices to add |
| `options`? | [`EndpointOptions`](../interfaces/EndpointOptions.md) | Optional Endpoint options |

#### Returns

[`Aggregator`](Aggregator.md)

#### Overrides

[`Endpoint`](Endpoint.md).[`constructor`](Endpoint.md#constructors)

#### Source

packages/matter.js/dist/esm/device/Aggregator.d.ts:25

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

### addBridgedDevice()

> **addBridgedDevice**(`device`, `bridgedBasicInformation`?): `void`

Add a bridged device to the Aggregator. If provided the bridgedBasicInformation is used to automatically add the
BridgedDeviceBasicInformationCluster to the device and also handles Reachability event triggering when
reachability event changes. If not provided the BridgedDeviceBasicInformationCluster must be already existing
on the device!

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `device` | [`Device`](Device.md) \| [`ComposedDevice`](ComposedDevice.md) | Device instance to add |
| `bridgedBasicInformation`? | [`AttributeInitialValues`](../../cluster/README.md#attributeinitialvaluesa)\<[`Merge`](../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../cluster/README.md#globalattributesf)\<`object`\>\>\> | Optional BridgedDeviceBasicInformationCluster attribute values to |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/device/Aggregator.d.ts:35

***

### addBridgedDeviceWithPowerSourceInfo()

> **addBridgedDeviceWithPowerSourceInfo**(`device`, `bridgedBasicInformation`?): `void`

Add a bridged device with power source information to the Aggregator. If provided the bridgedBasicInformation is
used to automatically add the BridgedDeviceBasicInformationCluster to the device. If not provided the
BridgedDeviceBasicInformationCluster must be already existing on the device!
The required clusters PowerSourceConfigurationCluster and PowerSourceCluster needs to be added manually to the device!

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `device` | [`Device`](Device.md) \| [`ComposedDevice`](ComposedDevice.md) | Device instance to add |
| `bridgedBasicInformation`? | [`AttributeInitialValues`](../../cluster/README.md#attributeinitialvaluesa)\<[`Merge`](../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../cluster/README.md#globalattributesf)\<`object`\>\>\> | Optional BridgedDeviceBasicInformationCluster attribute values to |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/device/Aggregator.d.ts:45

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

### getBridgedDevices()

> **getBridgedDevices**(): [`Endpoint`](Endpoint.md)[]

Returns all bridged devices added to the Aggregator

#### Returns

[`Endpoint`](Endpoint.md)[]

Array of bridged devices

#### Source

packages/matter.js/dist/esm/device/Aggregator.d.ts:51

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

### removeBridgedDevice()

> **removeBridgedDevice**(`device`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `device` | [`Device`](Device.md) \| [`ComposedDevice`](ComposedDevice.md) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/device/Aggregator.d.ts:52

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

#### Returns

`void`

#### Inherited from

[`Endpoint`](Endpoint.md).[`verifyRequiredClusters`](Endpoint.md#verifyrequiredclusters)

#### Source

packages/matter.js/dist/esm/device/Endpoint.d.ts:59
