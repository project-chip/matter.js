[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / [export](../README.md) / CommissioningServer

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

packages/matter.js/dist/esm/CommissioningServer.d.ts:159

## Properties

### commandHandler

> `private` `readonly` **commandHandler**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:153

***

### delayedAnnouncement?

> `optional` `readonly` **delayedAnnouncement**: `boolean`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:152

***

### deviceInstance?

> `private` `optional` **deviceInstance**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:146

***

### discriminator

> `private` `readonly` **discriminator**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:138

***

### endpointStructure

> `private` **endpointStructure**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:148

***

### endpointStructureStorage?

> `private` `optional` **endpointStructureStorage**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:142

***

### eventHandler?

> `private` `optional` **eventHandler**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:147

***

### fillAndStoreEndpointIds

> `private` **fillAndStoreEndpointIds**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:215

***

### flowType

> `private` `readonly` **flowType**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:139

***

### initializeEndpointIdsFromStorage

> `private` **initializeEndpointIdsFromStorage**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:214

***

### interactionServer?

> `private` `optional` **interactionServer**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:149

***

### ipv4Disabled?

> `private` `optional` **ipv4Disabled**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:135

***

### mdnsBroadcaster?

> `private` `optional` **mdnsBroadcaster**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:144

***

### mdnsInstanceBroadcaster?

> `private` `optional` **mdnsInstanceBroadcaster**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:145

***

### mdnsScanner?

> `private` `optional` **mdnsScanner**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:143

***

### nextEndpointId

> `private` **nextEndpointId**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:151

***

### options

> `private` `readonly` **options**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:134

***

### passcode

> `private` `readonly` **passcode**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:137

***

### port?

> `private` `optional` **port**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:136

***

### productDescription

> `private` `readonly` **productDescription**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:140

***

### rootEndpoint

> `protected` `readonly` **rootEndpoint**: [`RootEndpoint`](../../exports/device/classes/RootEndpoint.md)

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:150

***

### storage?

> `private` `optional` **storage**: `any`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:141

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

packages/matter.js/dist/esm/CommissioningServer.d.ts:264

***

### addDevice()

> **addDevice**(`device`): `void`

Add a new device to the node

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `device` | [`Device`](../../exports/device/classes/Device.md) \| [`Aggregator`](../../exports/device/classes/Aggregator.md) | Device or Aggregator instance to add |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:246

***

### addEndpoint()

> `protected` **addEndpoint**(`endpoint`): `void`

Add a child endpoint to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | [`Endpoint`](../../exports/device/classes/Endpoint.md) | Endpoint to add |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:188

***

### addRootClusterClient()

> **addRootClusterClient**\<`F`, `A`, `C`, `E`\>(`cluster`): `void`

Add a cluster client to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../exports/schema/README.md#bitschema) |
| `A` *extends* [`Attributes`](../../exports/cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../exports/cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../exports/cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`ClusterClientObj`](../../exports/cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\> | ClusterClient object to add |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:171

***

### addRootClusterServer()

> **addRootClusterServer**\<`A`, `E`\>(`cluster`): `void`

Add a new cluster server to the root endpoint
BasicInformationCluster and OperationalCredentialsCluster can not be added via this method because they are
added in the constructor

#### Type parameters

| Type parameter |
| :------ |
| `A` *extends* [`Attributes`](../../exports/cluster/interfaces/Attributes.md) |
| `E` *extends* [`Events`](../../exports/cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`ClusterServerObj`](../../exports/cluster/README.md#clusterserverobjae)\<`A`, `E`\> |  |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:203

***

### advertise()

> **advertise**(`limitTo`?): `Promise`\<`void`\>

Advertise the node via all available interfaces (Ethernet/MDNS, BLE, ...) and start the commissioning process

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `limitTo`? | [`TypeFromPartialBitSchema`](../../exports/schema/README.md#typefrompartialbitschemat)\<`object`\> | <p>Limit the advertisement to the given discovery capabilities. Default is to advertise on ethernet</p><p>               and BLE if configured</p> |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:210

***

### assignEndpointIds()

> **assignEndpointIds**(): `void`

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:213

***

### close()

> **close**(): `Promise`\<`void`\>

Close network connections of the device and stop responding to requests

#### Returns

`Promise`\<`void`\>

#### Overrides

[`MatterNode`](MatterNode.md).[`close`](MatterNode.md#close)

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:256

***

### factoryReset()

> **factoryReset**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:257

***

### getActiveSessionInformation()

> **getActiveSessionInformation**(`fabricIndex`?): `object`[]

Get some basic details of all currently active sessions.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fabricIndex`? | [`FabricIndex`](../../exports/datatype/README.md#fabricindex) | Optional fabric index to filter for. If not set all sessions are returned. |

#### Returns

`object`[]

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:294

***

### getChildEndpoint()

> `protected` **getChildEndpoint**(`endpointId`): `undefined` \| [`Endpoint`](../../exports/device/classes/Endpoint.md)

Get a child endpoint from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../../exports/datatype/README.md#endpointnumber) | Endpoint ID of the child endpoint to get |

#### Returns

`undefined` \| [`Endpoint`](../../exports/device/classes/Endpoint.md)

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:195

***

### getCommissionedFabricInformation()

> **getCommissionedFabricInformation**(`fabricIndex`?): [`ExposedFabricInformation`](../../exports/fabric/README.md#exposedfabricinformation)[]

Get some basic details of all Fabrics the server is commissioned to.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fabricIndex`? | [`FabricIndex`](../../exports/datatype/README.md#fabricindex) | Optional fabric index to filter for. If not set all fabrics are returned. |

#### Returns

[`ExposedFabricInformation`](../../exports/fabric/README.md#exposedfabricinformation)[]

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:288

***

### getNextEndpointId()

> **getNextEndpointId**(`increase`?): [`EndpointNumber`](../../exports/datatype/README.md#endpointnumber)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `increase`? | `boolean` |

#### Returns

[`EndpointNumber`](../../exports/datatype/README.md#endpointnumber)

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:212

***

### getPairingCode()

> **getPairingCode**(`discoveryCapabilities`?): [`DevicePairingInformation`](../interfaces/DevicePairingInformation.md)

Return the pairing information for the device

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `discoveryCapabilities`? | [`TypeFromBitSchema`](../../exports/schema/README.md#typefrombitschemat)\<`object`\> |

#### Returns

[`DevicePairingInformation`](../interfaces/DevicePairingInformation.md)

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:223

***

### getPort()

> **getPort**(): `undefined` \| `number`

Return the port the device is listening on

#### Returns

`undefined` \| `number`

#### Overrides

[`MatterNode`](MatterNode.md).[`getPort`](MatterNode.md#getport)

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:250

***

### getRootClusterClient()

> **getRootClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../../exports/cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../exports/schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../exports/schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../exports/cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../exports/cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../exports/cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../../exports/cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterClientObj`](../../exports/cluster/README.md#clusterclientobjface)\<`F`, `A`, `C`, `E`\>

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:177

***

### getRootClusterServer()

> **getRootClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../../exports/cluster/README.md#clusterserverobjae)\<`A`, `E`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* [`BitSchema`](../../exports/schema/README.md#bitschema) |
| `SF` *extends* [`TypeFromPartialBitSchema`](../../exports/schema/README.md#typefrompartialbitschemat)\<`F`\> |
| `A` *extends* [`Attributes`](../../exports/cluster/interfaces/Attributes.md) |
| `C` *extends* [`Commands`](../../exports/cluster/interfaces/Commands.md) |
| `E` *extends* [`Events`](../../exports/cluster/interfaces/Events.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../../exports/cluster/interfaces/Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../../exports/cluster/README.md#clusterserverobjae)\<`A`, `E`\>

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:165

***

### getRootEndpoint()

> **getRootEndpoint**(): [`RootEndpoint`](../../exports/device/classes/RootEndpoint.md)

Get the root endpoint of the node.

#### Returns

[`RootEndpoint`](../../exports/device/classes/RootEndpoint.md)

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:181

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

packages/matter.js/dist/esm/CommissioningServer.d.ts:280

***

### isCommissioned()

> **isCommissioned**(): `boolean`

Return info if the device is paired with at least one controller

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:219

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

packages/matter.js/dist/esm/CommissioningServer.d.ts:271

***

### setMdnsBroadcaster()

> **setMdnsBroadcaster**(`mdnsBroadcaster`): `void`

Set the MDNS Broadcaster instance. Should be only used internally

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `mdnsBroadcaster` | [`MdnsBroadcaster`](../../exports/mdns/classes/MdnsBroadcaster.md) | MdnsBroadcaster instance |

#### Returns

`void`

#### Overrides

[`MatterNode`](MatterNode.md).[`setMdnsBroadcaster`](MatterNode.md#setmdnsbroadcaster)

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:235

***

### setMdnsScanner()

> **setMdnsScanner**(`mdnsScanner`): `void`

Set the MDNS Scanner instance. Should be only used internally

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](../../exports/mdns/classes/MdnsScanner.md) | MdnsScanner instance |

#### Returns

`void`

#### Overrides

[`MatterNode`](MatterNode.md).[`setMdnsScanner`](MatterNode.md#setmdnsscanner)

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:229

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

packages/matter.js/dist/esm/CommissioningServer.d.ts:252

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

packages/matter.js/dist/esm/CommissioningServer.d.ts:278

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

packages/matter.js/dist/esm/CommissioningServer.d.ts:240

***

### start()

> **start**(): `Promise`\<`void`\>

Starts the Matter device and advertises it.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`MatterNode`](MatterNode.md).[`start`](MatterNode.md#start)

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:282

***

### updateStructure()

> **updateStructure**(): `void`

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:211
