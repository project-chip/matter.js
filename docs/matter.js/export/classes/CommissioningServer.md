[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / [export](../README.md) / CommissioningServer

# Class: CommissioningServer

A CommissioningServer node represent a matter node that can be paired with a controller and runs on a defined port on the
host

## Extends

- [`MatterNode`](MatterNode.md)

## Constructors

### new CommissioningServer()

> **new CommissioningServer**(`options`): [`CommissioningServer`](CommissioningServer.md)

Creates a new CommissioningServer node and add all needed Root clusters

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CommissioningServerOptions`](../interfaces/CommissioningServerOptions.md) | The options for the CommissioningServer node |

#### Returns

[`CommissioningServer`](CommissioningServer.md)

#### Overrides

[`MatterNode`](MatterNode.md).[`constructor`](MatterNode.md#constructors)

#### Source

[packages/matter.js/src/CommissioningServer.ts:251](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L251)

## Properties

### commandHandler

> `private` `readonly` **commandHandler**: [`NamedHandler`](../../util/export/classes/NamedHandler.md)\<[`CommissioningServerCommands`](../README.md#commissioningservercommands)\>

#### Source

[packages/matter.js/src/CommissioningServer.ts:244](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L244)

***

### delayedAnnouncement?

> `optional` `readonly` **delayedAnnouncement**: `boolean`

#### Source

[packages/matter.js/src/CommissioningServer.ts:242](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L242)

***

### deviceInstance?

> `private` `optional` **deviceInstance**: [`MatterDevice`](../../behavior/cluster/export/-internal-/classes/MatterDevice.md)

#### Source

[packages/matter.js/src/CommissioningServer.ts:233](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L233)

***

### discriminator

> `private` `readonly` **discriminator**: `number`

#### Source

[packages/matter.js/src/CommissioningServer.ts:223](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L223)

***

### endpointStructure

> `private` **endpointStructure**: [`InteractionEndpointStructure`](../../protocol/interaction/export/classes/InteractionEndpointStructure.md)

#### Source

[packages/matter.js/src/CommissioningServer.ts:235](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L235)

***

### endpointStructureStorage?

> `private` `optional` **endpointStructureStorage**: [`StorageContext`](../../storage/export/classes/StorageContext.md)\<[`SyncStorage`](../../storage/export/classes/SyncStorage.md)\>

#### Source

[packages/matter.js/src/CommissioningServer.ts:228](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L228)

***

### eventHandler?

> `private` `optional` **eventHandler**: [`EventHandler`](../../protocol/interaction/export/classes/EventHandler.md)\<`any`\>

#### Source

[packages/matter.js/src/CommissioningServer.ts:234](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L234)

***

### flowType

> `private` `readonly` **flowType**: [`CommissioningFlowType`](../../schema/export/enumerations/CommissioningFlowType.md)

#### Source

[packages/matter.js/src/CommissioningServer.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L224)

***

### interactionServer?

> `private` `optional` **interactionServer**: [`LegacyInteractionServer`](../-internal-/classes/LegacyInteractionServer.md)

#### Source

[packages/matter.js/src/CommissioningServer.ts:236](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L236)

***

### ipv4Disabled?

> `private` `optional` **ipv4Disabled**: `boolean`

#### Source

[packages/matter.js/src/CommissioningServer.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L220)

***

### mdnsBroadcaster?

> `private` `optional` **mdnsBroadcaster**: [`MdnsBroadcaster`](../../mdns/export/classes/MdnsBroadcaster.md)

#### Source

[packages/matter.js/src/CommissioningServer.ts:230](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L230)

***

### mdnsInstanceBroadcaster?

> `private` `optional` **mdnsInstanceBroadcaster**: [`MdnsInstanceBroadcaster`](../../node/export/-internal-/classes/MdnsInstanceBroadcaster.md)

#### Source

[packages/matter.js/src/CommissioningServer.ts:231](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L231)

***

### mdnsScanner?

> `private` `optional` **mdnsScanner**: [`MdnsScanner`](../../mdns/export/classes/MdnsScanner.md)

#### Source

[packages/matter.js/src/CommissioningServer.ts:229](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L229)

***

### nextEndpointId

> `private` **nextEndpointId**: [`EndpointNumber`](../../datatype/export/README.md#endpointnumber)

#### Source

[packages/matter.js/src/CommissioningServer.ts:240](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L240)

***

### options

> `private` `readonly` **options**: [`CommissioningServerOptions`](../interfaces/CommissioningServerOptions.md)

The options for the CommissioningServer node

#### Source

[packages/matter.js/src/CommissioningServer.ts:251](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L251)

***

### passcode

> `private` `readonly` **passcode**: `number`

#### Source

[packages/matter.js/src/CommissioningServer.ts:222](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L222)

***

### port?

> `private` `optional` **port**: `number`

#### Source

[packages/matter.js/src/CommissioningServer.ts:221](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L221)

***

### productDescription

> `private` `readonly` **productDescription**: [`ProductDescription`](../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md)

#### Source

[packages/matter.js/src/CommissioningServer.ts:225](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L225)

***

### rootEndpoint

> `protected` `readonly` **rootEndpoint**: [`RootEndpoint`](../../device/export/classes/RootEndpoint.md)

#### Source

[packages/matter.js/src/CommissioningServer.ts:238](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L238)

***

### storage?

> `private` `optional` **storage**: [`StorageContext`](../../storage/export/classes/StorageContext.md)\<[`SyncStorage`](../../storage/export/classes/SyncStorage.md)\>

#### Source

[packages/matter.js/src/CommissioningServer.ts:227](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L227)

## Methods

### addCommandHandler()

> **addCommandHandler**\<`K`\>(`command`, `handler`): `void`

Add a new command handler for the given command

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `"testEventTrigger"` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `command` | `K` | Command to add the handler for |
| `handler` | [`CommissioningServerCommands`](../README.md#commissioningservercommands)\[`K`\] | Handler function to add |

#### Returns

`void`

#### Source

[packages/matter.js/src/CommissioningServer.ts:925](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L925)

***

### addDevice()

> **addDevice**(`device`): `void`

Add a new device to the node

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `device` | [`Device`](../../device/export/classes/Device.md) \| [`Aggregator`](../../device/export/classes/Aggregator.md) | Device or Aggregator instance to add |

#### Returns

`void`

#### Source

[packages/matter.js/src/CommissioningServer.ts:863](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L863)

***

### addEndpoint()

> `protected` **addEndpoint**(`endpoint`): `void`

Add a child endpoint to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | [`Endpoint`](../../device/export/classes/Endpoint.md) | Endpoint to add |

#### Returns

`void`

#### Source

[packages/matter.js/src/CommissioningServer.ts:484](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L484)

***

### addRootClusterClient()

> **addRootClusterClient**\<`F`, `A`, `C`, `E`\>(`cluster`): `void`

Add a cluster client to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/export/README.md#bitschema) |
| `A` *extends* [`Attributes`](../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`ClusterClientObj`](../../cluster/export/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\> | ClusterClient object to add |

#### Returns

`void`

#### Source

[packages/matter.js/src/CommissioningServer.ts:450](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L450)

***

### addRootClusterServer()

> **addRootClusterServer**\<`A`, `E`\>(`cluster`): `void`

Add a new cluster server to the root endpoint
BasicInformationCluster and OperationalCredentialsCluster can not be added via this method because they are
added in the constructor

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../../cluster/export/interfaces/Attributes.md) |
| `E` *extends* [`Events`](../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`ClusterServerObj`](../../cluster/export/README.md#clusterserverobjae)\<`A`, `E`\> |  |

#### Returns

`void`

#### Source

[packages/matter.js/src/CommissioningServer.ts:505](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L505)

***

### advertise()

> **advertise**(`limitTo`?): `Promise`\<`void`\>

Advertise the node via all available interfaces (Ethernet/MDNS, BLE, ...) and start the commissioning process

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `limitTo`? | [`TypeFromPartialBitSchema`](../../schema/export/README.md#typefrompartialbitschemat)\<`object`\> | <p>Limit the advertisement to the given discovery capabilities. Default is to advertise on ethernet</p><p>               and BLE if configured</p> |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/CommissioningServer.ts:525](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L525)

***

### assignEndpointIds()

> **assignEndpointIds**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/CommissioningServer.ts:703](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L703)

***

### close()

> **close**(): `Promise`\<`void`\>

Close network connections of the device and stop responding to requests

#### Returns

`Promise`\<`void`\>

#### Overrides

[`MatterNode`](MatterNode.md).[`close`](MatterNode.md#close)

#### Source

[packages/matter.js/src/CommissioningServer.ts:886](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L886)

***

### factoryReset()

> **factoryReset**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/CommissioningServer.ts:897](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L897)

***

### fillAndStoreEndpointIds()

> `private` **fillAndStoreEndpointIds**(`endpoint`, `parentUniquePrefix`): `void`

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | [`Endpoint`](../../device/export/classes/Endpoint.md) | `undefined` |
| `parentUniquePrefix` | `string` | `""` |

#### Returns

`void`

#### Source

[packages/matter.js/src/CommissioningServer.ts:745](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L745)

***

### getActiveSessionInformation()

> **getActiveSessionInformation**(`fabricIndex`?): `object`[]

Get some basic details of all currently active sessions.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fabricIndex`? | [`FabricIndex`](../../datatype/export/README.md#fabricindex) | Optional fabric index to filter for. If not set all sessions are returned. |

#### Returns

`object`[]

#### Source

[packages/matter.js/src/CommissioningServer.ts:998](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L998)

***

### getChildEndpoint()

> `protected` **getChildEndpoint**(`endpointId`): `undefined` \| [`Endpoint`](../../device/export/classes/Endpoint.md)

Get a child endpoint from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../datatype/export/README.md#endpointnumber) | Endpoint ID of the child endpoint to get |

#### Returns

`undefined` \| [`Endpoint`](../../device/export/classes/Endpoint.md)

#### Source

[packages/matter.js/src/CommissioningServer.ts:494](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L494)

***

### getCommissionedFabricInformation()

> **getCommissionedFabricInformation**(`fabricIndex`?): [`ExposedFabricInformation`](../../fabric/export/README.md#exposedfabricinformation)[]

Get some basic details of all Fabrics the server is commissioned to.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fabricIndex`? | [`FabricIndex`](../../datatype/export/README.md#fabricindex) | Optional fabric index to filter for. If not set all fabrics are returned. |

#### Returns

[`ExposedFabricInformation`](../../fabric/export/README.md#exposedfabricinformation)[]

#### Source

[packages/matter.js/src/CommissioningServer.ts:986](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L986)

***

### getNextEndpointId()

> **getNextEndpointId**(`increase`): [`EndpointNumber`](../../datatype/export/README.md#endpointnumber)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `increase` | `boolean` | `true` |

#### Returns

[`EndpointNumber`](../../datatype/export/README.md#endpointnumber)

#### Source

[packages/matter.js/src/CommissioningServer.ts:696](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L696)

***

### getPairingCode()

> **getPairingCode**(`discoveryCapabilities`?): [`DevicePairingInformation`](../interfaces/DevicePairingInformation.md)

Return the pairing information for the device

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `discoveryCapabilities`? | [`TypeFromBitSchema`](../../schema/export/README.md#typefrombitschemat)\<`object`\> |

#### Returns

[`DevicePairingInformation`](../interfaces/DevicePairingInformation.md)

#### Source

[packages/matter.js/src/CommissioningServer.ts:781](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L781)

***

### getPort()

> **getPort**(): `undefined` \| `number`

Return the port the device is listening on

#### Returns

`undefined` \| `number`

#### Overrides

[`MatterNode`](MatterNode.md).[`getPort`](MatterNode.md#getport)

#### Source

[packages/matter.js/src/CommissioningServer.ts:870](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L870)

***

### getRootClusterClient()

> **getRootClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../../cluster/export/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/export/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../../cluster/export/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterClientObj`](../../cluster/export/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Source

[packages/matter.js/src/CommissioningServer.ts:461](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L461)

***

### getRootClusterServer()

> **getRootClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../../cluster/export/README.md#clusterserverobjae)\<`A`, `E`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../schema/export/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../schema/export/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../cluster/export/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../cluster/export/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../cluster/export/interfaces/Events.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../../cluster/export/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../../cluster/export/README.md#clusterserverobjae)\<`A`, `E`\>

#### Source

[packages/matter.js/src/CommissioningServer.ts:435](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L435)

***

### getRootEndpoint()

> **getRootEndpoint**(): [`RootEndpoint`](../../device/export/classes/RootEndpoint.md)

Get the root endpoint of the node.

#### Returns

[`RootEndpoint`](../../device/export/classes/RootEndpoint.md)

#### Source

[packages/matter.js/src/CommissioningServer.ts:474](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L474)

***

### initialize()

> **initialize**(`ipv4Disabled`): `void`

used internally by MatterServer to initialize the state of the device.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ipv4Disabled` | `boolean` |

#### Returns

`void`

#### Overrides

[`MatterNode`](MatterNode.md).[`initialize`](MatterNode.md#initialize)

#### Source

[packages/matter.js/src/CommissioningServer.ts:962](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L962)

***

### initializeEndpointIdsFromStorage()

> `private` **initializeEndpointIdsFromStorage**(`endpoint`, `parentUniquePrefix`): `void`

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | [`Endpoint`](../../device/export/classes/Endpoint.md) | `undefined` |
| `parentUniquePrefix` | `string` | `""` |

#### Returns

`void`

#### Source

[packages/matter.js/src/CommissioningServer.ts:710](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L710)

***

### isCommissioned()

> **isCommissioned**(): `boolean`

Return info if the device is paired with at least one controller

#### Returns

`boolean`

#### Source

[packages/matter.js/src/CommissioningServer.ts:774](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L774)

***

### removeCommandHandler()

> **removeCommandHandler**\<`K`\>(`command`, `handler`): `void`

Remove a command handler for the given command

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `"testEventTrigger"` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `command` | `K` | Command to remove the handler for |
| `handler` | [`CommissioningServerCommands`](../README.md#commissioningservercommands)\[`K`\] | Handler function to remove |

#### Returns

`void`

#### Source

[packages/matter.js/src/CommissioningServer.ts:938](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L938)

***

### setMdnsBroadcaster()

> **setMdnsBroadcaster**(`mdnsBroadcaster`): `void`

Set the MDNS Broadcaster instance. Should be only used internally

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `mdnsBroadcaster` | [`MdnsBroadcaster`](../../mdns/export/classes/MdnsBroadcaster.md) | MdnsBroadcaster instance |

#### Returns

`void`

#### Overrides

[`MatterNode`](MatterNode.md).[`setMdnsBroadcaster`](MatterNode.md#setmdnsbroadcaster)

#### Source

[packages/matter.js/src/CommissioningServer.ts:841](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L841)

***

### setMdnsScanner()

> **setMdnsScanner**(`mdnsScanner`): `void`

Set the MDNS Scanner instance. Should be only used internally

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](../../mdns/export/classes/MdnsScanner.md) | MdnsScanner instance |

#### Returns

`void`

#### Overrides

[`MatterNode`](MatterNode.md).[`setMdnsScanner`](MatterNode.md#setmdnsscanner)

#### Source

[packages/matter.js/src/CommissioningServer.ts:832](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L832)

***

### setPort()

> **setPort**(`port`): `void`

Set the port the device is listening on. Can only be called before the device is initialized.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `port` | `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/CommissioningServer.ts:875](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L875)

***

### setReachability()

> **setReachability**(`reachable`): `void`

Set the reachability of the commissioning server aka "the main matter device". This call only has effect when
the reachability flag was set in the BasicInformationCluster or in the BasicInformation data in the constructor!

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `reachable` | `boolean` | true if reachable, false otherwise |

#### Returns

`void`

#### Source

[packages/matter.js/src/CommissioningServer.ts:951](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L951)

***

### setStorage()

> **setStorage**(`storage`): `Promise`\<`void`\>

Set the StorageManager instance. Should be only used internally

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `storage` | [`StorageContext`](../../storage/export/classes/StorageContext.md)\<[`SyncStorage`](../../storage/export/classes/SyncStorage.md)\> |  |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/CommissioningServer.ts:852](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L852)

***

### start()

> **start**(): `Promise`\<`void`\>

Starts the Matter device and advertises it.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`MatterNode`](MatterNode.md).[`start`](MatterNode.md#start)

#### Source

[packages/matter.js/src/CommissioningServer.ts:972](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L972)

***

### updateStructure()

> **updateStructure**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/CommissioningServer.ts:689](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L689)
