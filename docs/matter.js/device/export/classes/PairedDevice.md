[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [device/export](../README.md) / PairedDevice

# Class: PairedDevice

Temporary used device class for paired devices until we added a layer to choose the right specialized device class
based on the device classes and features of the paired device

## Extends

- [`Endpoint`](Endpoint.md)

## Constructors

### new PairedDevice()

> **new PairedDevice**(`definition`, `clusters`, `endpointId`): [`PairedDevice`](PairedDevice.md)

Create a new PairedDevice instance. All data are automatically parsed from the paired device!

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `definition` | [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`] | `undefined` | DeviceTypeDefinitions of the paired device as reported by the device |
| `clusters` | ([`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Events`](../../../cluster/export/interfaces/Events.md)\> \| [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Commands`](../../../cluster/export/interfaces/Commands.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>)[] | `[]` | Clusters of the paired device as reported by the device |
| `endpointId` | [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber) | `undefined` | Endpoint ID of the paired device as reported by the device |

#### Returns

[`PairedDevice`](PairedDevice.md)

#### Overrides

[`Endpoint`](Endpoint.md).[`constructor`](Endpoint.md#constructors)

#### Source

[packages/matter.js/src/device/Device.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Device.ts#L70)

## Properties

### declineAddingMoreClusters

> `private` `readonly` **declineAddingMoreClusters**: `boolean`

#### Source

[packages/matter.js/src/device/Device.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Device.ts#L62)

***

### deviceTypes

> `protected` **deviceTypes**: [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

One or multiple DeviceTypeDefinitions of the endpoint

#### Inherited from

[`Endpoint`](Endpoint.md).[`deviceTypes`](Endpoint.md#devicetypes)

#### Source

[packages/matter.js/src/device/Endpoint.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L55)

***

### name

> **name**: `string` = `""`

#### Inherited from

[`Endpoint`](Endpoint.md).[`name`](Endpoint.md#name)

#### Source

[packages/matter.js/src/device/Endpoint.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L41)

***

### number

> **number**: `undefined` \| [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Inherited from

[`Endpoint`](Endpoint.md).[`number`](Endpoint.md#number)

#### Source

[packages/matter.js/src/device/Endpoint.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L39)

***

### uniqueStorageKey

> **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

[`Endpoint`](Endpoint.md).[`uniqueStorageKey`](Endpoint.md#uniquestoragekey)

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

### addChildEndpoint()

> **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `endpoint` | [`EndpointInterface`](../../../endpoint/export/interfaces/EndpointInterface.md) |

#### Returns

`void`

#### Inherited from

[`Endpoint`](Endpoint.md).[`addChildEndpoint`](Endpoint.md#addchildendpoint)

#### Source

[packages/matter.js/src/device/Endpoint.ts:262](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L262)

***

### ~~addClusterClient()~~

> **addClusterClient**\<`F`, `A`, `C`, `E`\>(`cluster`): `void`

Add cluster clients (used internally only!)

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

#### Overrides

[`Endpoint`](Endpoint.md).[`addClusterClient`](Endpoint.md#addclusterclient)

#### Deprecated

PairedDevice does not support adding additional clusters

#### Source

[packages/matter.js/src/device/Device.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Device.ts#L102)

***

### ~~addClusterServer()~~

> **addClusterServer**\<`A`, `E`\>(`cluster`): `void`

Add cluster servers (used internally only!)

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

#### Overrides

[`Endpoint`](Endpoint.md).[`addClusterServer`](Endpoint.md#addclusterserver)

#### Deprecated

PairedDevice does not support adding additional clusters

#### Source

[packages/matter.js/src/device/Device.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Device.ts#L91)

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

[packages/matter.js/src/device/Endpoint.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L112)

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

[packages/matter.js/src/device/Endpoint.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L132)

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Inherited from

[`Endpoint`](Endpoint.md).[`close`](Endpoint.md#close)

#### Source

[packages/matter.js/src/device/Endpoint.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L99)

***

### determineUniqueID()

> **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[`Endpoint`](Endpoint.md).[`determineUniqueID`](Endpoint.md#determineuniqueid)

#### Source

[packages/matter.js/src/device/Endpoint.ts:296](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L296)

***

### getAllClusterClients()

> **getAllClusterClients**(): [`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Commands`](../../../cluster/export/interfaces/Commands.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Returns

[`ClusterClientObj`](../../../cluster/export/README.md#clusterclientobjface)\<`any`, [`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Commands`](../../../cluster/export/interfaces/Commands.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Inherited from

[`Endpoint`](Endpoint.md).[`getAllClusterClients`](Endpoint.md#getallclusterclients)

#### Source

[packages/matter.js/src/device/Endpoint.ts:356](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L356)

***

### getAllClusterServers()

> **getAllClusterServers**(): [`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Returns

[`ClusterServerObj`](../../../cluster/export/README.md#clusterserverobjae)\<[`Attributes`](../../../cluster/export/interfaces/Attributes.md), [`Events`](../../../cluster/export/interfaces/Events.md)\>[]

#### Inherited from

[`Endpoint`](Endpoint.md).[`getAllClusterServers`](Endpoint.md#getallclusterservers)

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

[`Endpoint`](Endpoint.md).[`getChildEndpoint`](Endpoint.md#getchildendpoint)

#### Source

[packages/matter.js/src/device/Endpoint.ts:278](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L278)

***

### getChildEndpoints()

> **getChildEndpoints**(): [`Endpoint`](Endpoint.md)[]

#### Returns

[`Endpoint`](Endpoint.md)[]

#### Inherited from

[`Endpoint`](Endpoint.md).[`getChildEndpoints`](Endpoint.md#getchildendpoints)

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

[`Endpoint`](Endpoint.md).[`getClusterClient`](Endpoint.md#getclusterclient)

#### Source

[packages/matter.js/src/device/Endpoint.ts:204](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L204)

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

[`Endpoint`](Endpoint.md).[`getClusterClientById`](Endpoint.md#getclusterclientbyid)

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

[`Endpoint`](Endpoint.md).[`getClusterServer`](Endpoint.md#getclusterserver)

#### Source

[packages/matter.js/src/device/Endpoint.ts:189](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L189)

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

[`Endpoint`](Endpoint.md).[`getClusterServerById`](Endpoint.md#getclusterserverbyid)

#### Source

[packages/matter.js/src/device/Endpoint.ts:214](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L214)

***

### getDeviceTypes()

> **getDeviceTypes**(): [[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Returns

[[`DeviceTypeDefinition`](../interfaces/DeviceTypeDefinition.md), `...DeviceTypeDefinition[]`]

#### Inherited from

[`Endpoint`](Endpoint.md).[`getDeviceTypes`](Endpoint.md#getdevicetypes)

#### Source

[packages/matter.js/src/device/Endpoint.ts:242](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L242)

***

### getNumber()

> **getNumber**(): [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Returns

[`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)

#### Inherited from

[`Endpoint`](Endpoint.md).[`getNumber`](Endpoint.md#getnumber)

#### Source

[packages/matter.js/src/device/Endpoint.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L105)

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

[`Endpoint`](Endpoint.md).[`hasClusterClient`](Endpoint.md#hasclusterclient)

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

[`Endpoint`](Endpoint.md).[`hasClusterServer`](Endpoint.md#hasclusterserver)

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

[`Endpoint`](Endpoint.md).[`removeChildEndpoint`](Endpoint.md#removechildendpoint)

#### Source

[packages/matter.js/src/device/Endpoint.ts:286](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L286)

***

### removeFromStructure()

> **removeFromStructure**(): `void`

#### Returns

`void`

#### Inherited from

[`Endpoint`](Endpoint.md).[`removeFromStructure`](Endpoint.md#removefromstructure)

#### Source

[packages/matter.js/src/device/Endpoint.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L91)

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

[packages/matter.js/src/device/Endpoint.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L246)

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

[packages/matter.js/src/device/Endpoint.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L86)

***

### updatePartsList()

> **updatePartsList**(): [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../../../datatype/export/README.md#endpointnumber)[]

#### Inherited from

[`Endpoint`](Endpoint.md).[`updatePartsList`](Endpoint.md#updatepartslist)

#### Source

[packages/matter.js/src/device/Endpoint.ts:360](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L360)

***

### verifyRequiredClusters()

> **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

[`Endpoint`](Endpoint.md).[`verifyRequiredClusters`](Endpoint.md#verifyrequiredclusters)

#### Source

[packages/matter.js/src/device/Endpoint.ts:318](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/Endpoint.ts#L318)
