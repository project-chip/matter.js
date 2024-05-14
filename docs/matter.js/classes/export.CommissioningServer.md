[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / CommissioningServer

# Class: CommissioningServer

[export](../modules/export.md).CommissioningServer

A CommissioningServer node represent a matter node that can be paired with a controller and runs on a defined port on the
host

## Hierarchy

- [`MatterNode`](export.MatterNode.md)

  ↳ **`CommissioningServer`**

## Table of contents

### Constructors

- [constructor](export.CommissioningServer.md#constructor)

### Properties

- [commandHandler](export.CommissioningServer.md#commandhandler)
- [delayedAnnouncement](export.CommissioningServer.md#delayedannouncement)
- [deviceInstance](export.CommissioningServer.md#deviceinstance)
- [discriminator](export.CommissioningServer.md#discriminator)
- [endpointStructure](export.CommissioningServer.md#endpointstructure)
- [endpointStructureStorage](export.CommissioningServer.md#endpointstructurestorage)
- [eventHandler](export.CommissioningServer.md#eventhandler)
- [flowType](export.CommissioningServer.md#flowtype)
- [interactionServer](export.CommissioningServer.md#interactionserver)
- [ipv4Disabled](export.CommissioningServer.md#ipv4disabled)
- [mdnsBroadcaster](export.CommissioningServer.md#mdnsbroadcaster)
- [mdnsInstanceBroadcaster](export.CommissioningServer.md#mdnsinstancebroadcaster)
- [mdnsScanner](export.CommissioningServer.md#mdnsscanner)
- [nextEndpointId](export.CommissioningServer.md#nextendpointid)
- [options](export.CommissioningServer.md#options)
- [passcode](export.CommissioningServer.md#passcode)
- [port](export.CommissioningServer.md#port)
- [productDescription](export.CommissioningServer.md#productdescription)
- [rootEndpoint](export.CommissioningServer.md#rootendpoint)
- [storage](export.CommissioningServer.md#storage)

### Methods

- [addCommandHandler](export.CommissioningServer.md#addcommandhandler)
- [addDevice](export.CommissioningServer.md#adddevice)
- [addEndpoint](export.CommissioningServer.md#addendpoint)
- [addRootClusterClient](export.CommissioningServer.md#addrootclusterclient)
- [addRootClusterServer](export.CommissioningServer.md#addrootclusterserver)
- [advertise](export.CommissioningServer.md#advertise)
- [assignEndpointIds](export.CommissioningServer.md#assignendpointids)
- [close](export.CommissioningServer.md#close)
- [factoryReset](export.CommissioningServer.md#factoryreset)
- [fillAndStoreEndpointIds](export.CommissioningServer.md#fillandstoreendpointids)
- [getActiveSessionInformation](export.CommissioningServer.md#getactivesessioninformation)
- [getChildEndpoint](export.CommissioningServer.md#getchildendpoint)
- [getCommissionedFabricInformation](export.CommissioningServer.md#getcommissionedfabricinformation)
- [getNextEndpointId](export.CommissioningServer.md#getnextendpointid)
- [getPairingCode](export.CommissioningServer.md#getpairingcode)
- [getPort](export.CommissioningServer.md#getport)
- [getRootClusterClient](export.CommissioningServer.md#getrootclusterclient)
- [getRootClusterServer](export.CommissioningServer.md#getrootclusterserver)
- [getRootEndpoint](export.CommissioningServer.md#getrootendpoint)
- [initialize](export.CommissioningServer.md#initialize)
- [initializeEndpointIdsFromStorage](export.CommissioningServer.md#initializeendpointidsfromstorage)
- [isCommissioned](export.CommissioningServer.md#iscommissioned)
- [removeCommandHandler](export.CommissioningServer.md#removecommandhandler)
- [setMdnsBroadcaster](export.CommissioningServer.md#setmdnsbroadcaster)
- [setMdnsScanner](export.CommissioningServer.md#setmdnsscanner)
- [setPort](export.CommissioningServer.md#setport)
- [setReachability](export.CommissioningServer.md#setreachability)
- [setStorage](export.CommissioningServer.md#setstorage)
- [start](export.CommissioningServer.md#start)
- [updateStructure](export.CommissioningServer.md#updatestructure)

## Constructors

### constructor

• **new CommissioningServer**(`options`): [`CommissioningServer`](export.CommissioningServer.md)

Creates a new CommissioningServer node and add all needed Root clusters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CommissioningServerOptions`](../interfaces/export.CommissioningServerOptions.md) | The options for the CommissioningServer node |

#### Returns

[`CommissioningServer`](export.CommissioningServer.md)

#### Overrides

[MatterNode](export.MatterNode.md).[constructor](export.MatterNode.md#constructor)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:246](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L246)

## Properties

### commandHandler

• `Private` `Readonly` **commandHandler**: [`NamedHandler`](util_export.NamedHandler.md)\<[`CommissioningServerCommands`](../modules/export.md#commissioningservercommands)\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:239](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L239)

___

### delayedAnnouncement

• `Optional` `Readonly` **delayedAnnouncement**: `boolean`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:237](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L237)

___

### deviceInstance

• `Private` `Optional` **deviceInstance**: [`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:228](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L228)

___

### discriminator

• `Private` `Readonly` **discriminator**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:218](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L218)

___

### endpointStructure

• `Private` **endpointStructure**: [`InteractionEndpointStructure`](protocol_interaction_export.InteractionEndpointStructure.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:230](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L230)

___

### endpointStructureStorage

• `Private` `Optional` **endpointStructureStorage**: [`StorageContext`](storage_export.StorageContext.md)\<[`SyncStorage`](storage_export.SyncStorage.md)\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:223](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L223)

___

### eventHandler

• `Private` `Optional` **eventHandler**: [`EventHandler`](protocol_interaction_export.EventHandler.md)\<`any`\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:229](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L229)

___

### flowType

• `Private` `Readonly` **flowType**: [`CommissioningFlowType`](../enums/schema_export.CommissioningFlowType.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:219](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L219)

___

### interactionServer

• `Private` `Optional` **interactionServer**: [`InteractionServer`](protocol_interaction_export.InteractionServer-1.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:231](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L231)

___

### ipv4Disabled

• `Private` `Optional` **ipv4Disabled**: `boolean`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:215](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L215)

___

### mdnsBroadcaster

• `Private` `Optional` **mdnsBroadcaster**: [`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:225](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L225)

___

### mdnsInstanceBroadcaster

• `Private` `Optional` **mdnsInstanceBroadcaster**: [`MdnsInstanceBroadcaster`](node_export._internal_.MdnsInstanceBroadcaster.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:226](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L226)

___

### mdnsScanner

• `Private` `Optional` **mdnsScanner**: [`MdnsScanner`](mdns_export.MdnsScanner.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:224](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L224)

___

### nextEndpointId

• `Private` **nextEndpointId**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:235](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L235)

___

### options

• `Private` `Readonly` **options**: [`CommissioningServerOptions`](../interfaces/export.CommissioningServerOptions.md)

The options for the CommissioningServer node

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:246](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L246)

___

### passcode

• `Private` `Readonly` **passcode**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:217](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L217)

___

### port

• `Private` `Optional` **port**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:216](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L216)

___

### productDescription

• `Private` `Readonly` **productDescription**: [`ProductDescription`](../interfaces/behavior_cluster_export._internal_.ProductDescription.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:220](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L220)

___

### rootEndpoint

• `Protected` `Readonly` **rootEndpoint**: [`RootEndpoint`](device_export.RootEndpoint.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:233](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L233)

___

### storage

• `Private` `Optional` **storage**: [`StorageContext`](storage_export.StorageContext.md)\<[`SyncStorage`](storage_export.SyncStorage.md)\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:222](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L222)

## Methods

### addCommandHandler

▸ **addCommandHandler**\<`K`\>(`command`, `handler`): `void`

Add a new command handler for the given command

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"testEventTrigger"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `K` | Command to add the handler for |
| `handler` | [`CommissioningServerCommands`](../modules/export.md#commissioningservercommands)[`K`] | Handler function to add |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:909](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L909)

___

### addDevice

▸ **addDevice**(`device`): `void`

Add a new device to the node

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `device` | [`Device`](device_export.Device.md) \| [`Aggregator`](device_export.Aggregator.md) | Device or Aggregator instance to add |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:847](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L847)

___

### addEndpoint

▸ **addEndpoint**(`endpoint`): `void`

Add a child endpoint to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) | Endpoint to add |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:495](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L495)

___

### addRootClusterClient

▸ **addRootClusterClient**\<`F`, `A`, `C`, `E`\>(`cluster`): `void`

Add a cluster client to the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\> | ClusterClient object to add |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:461](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L461)

___

### addRootClusterServer

▸ **addRootClusterServer**\<`A`, `E`\>(`cluster`): `void`

Add a new cluster server to the root endpoint
BasicInformationCluster and OperationalCredentialsCluster can not be added via this method because they are
added in the constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\> |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:516](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L516)

___

### advertise

▸ **advertise**(`limitTo?`): `Promise`\<`void`\>

Advertise the node via all available interfaces (Ethernet/MDNS, BLE, ...) and start the commissioning process

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limitTo?` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `ble`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onIpNetwork`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `softAccessPoint`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> | Limit the advertisement to the given discovery capabilities. Default is to advertise on ethernet and BLE if configured |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:536](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L536)

___

### assignEndpointIds

▸ **assignEndpointIds**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:687](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L687)

___

### close

▸ **close**(): `Promise`\<`void`\>

Close network connections of the device and stop responding to requests

#### Returns

`Promise`\<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[close](export.MatterNode.md#close)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:870](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L870)

___

### factoryReset

▸ **factoryReset**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:881](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L881)

___

### fillAndStoreEndpointIds

▸ **fillAndStoreEndpointIds**(`endpoint`, `parentUniquePrefix?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) | `undefined` |
| `parentUniquePrefix` | `string` | `""` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:729](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L729)

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(`fabricIndex?`): \{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.nodeId; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.peerNodeId; `secure`: `boolean` = session.isSecure }[]

Get some basic details of all currently active sessions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fabricIndex?` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) | Optional fabric index to filter for. If not set all sessions are returned. |

#### Returns

\{ `fabric`: `undefined` \| [`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation) ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` = session.name; `nodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.nodeId; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid) = session.peerNodeId; `secure`: `boolean` = session.isSecure }[]

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:982](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L982)

___

### getChildEndpoint

▸ **getChildEndpoint**(`endpointId`): `undefined` \| [`Endpoint`](device_export.Endpoint.md)

Get a child endpoint from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) | Endpoint ID of the child endpoint to get |

#### Returns

`undefined` \| [`Endpoint`](device_export.Endpoint.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:505](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L505)

___

### getCommissionedFabricInformation

▸ **getCommissionedFabricInformation**(`fabricIndex?`): [`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation)[]

Get some basic details of all Fabrics the server is commissioned to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fabricIndex?` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) | Optional fabric index to filter for. If not set all fabrics are returned. |

#### Returns

[`ExposedFabricInformation`](../modules/fabric_export.md#exposedfabricinformation)[]

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:970](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L970)

___

### getNextEndpointId

▸ **getNextEndpointId**(`increase?`): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `increase` | `boolean` | `true` |

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:680](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L680)

___

### getPairingCode

▸ **getPairingCode**(`discoveryCapabilities?`): [`DevicePairingInformation`](../interfaces/export.DevicePairingInformation.md)

Return the pairing information for the device

#### Parameters

| Name | Type |
| :------ | :------ |
| `discoveryCapabilities?` | [`TypeFromBitSchema`](../modules/schema_export.md#typefrombitschema)\<\{ `ble`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `onIpNetwork`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `softAccessPoint`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> |

#### Returns

[`DevicePairingInformation`](../interfaces/export.DevicePairingInformation.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:765](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L765)

___

### getPort

▸ **getPort**(): `undefined` \| `number`

Return the port the device is listening on

#### Returns

`undefined` \| `number`

#### Overrides

[MatterNode](export.MatterNode.md).[getPort](export.MatterNode.md#getport)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:854](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L854)

___

### getRootClusterClient

▸ **getRootClusterClient**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

Get a cluster client from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterClient to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)\<`F`, `A`, `C`, `E`\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:472](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L472)

___

### getRootClusterServer

▸ **getRootClusterServer**\<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\>

Get a cluster server from the root endpoint. This is mainly used internally and not needed to be called by the user.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cluster` | [`Cluster`](../interfaces/cluster_export.Cluster.md)\<`F`, `SF`, `A`, `C`, `E`\> | ClusterServer to get or undefined if not existing |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)\<`A`, `E`\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:446](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L446)

___

### getRootEndpoint

▸ **getRootEndpoint**(): [`RootEndpoint`](device_export.RootEndpoint.md)

Get the root endpoint of the node.

#### Returns

[`RootEndpoint`](device_export.RootEndpoint.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:485](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L485)

___

### initialize

▸ **initialize**(`ipv4Disabled`): `void`

used internally by MatterServer to initialize the state of the device.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ipv4Disabled` | `boolean` |

#### Returns

`void`

#### Overrides

[MatterNode](export.MatterNode.md).[initialize](export.MatterNode.md#initialize)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:946](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L946)

___

### initializeEndpointIdsFromStorage

▸ **initializeEndpointIdsFromStorage**(`endpoint`, `parentUniquePrefix?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) | `undefined` |
| `parentUniquePrefix` | `string` | `""` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:694](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L694)

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

Return info if the device is paired with at least one controller

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:758](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L758)

___

### removeCommandHandler

▸ **removeCommandHandler**\<`K`\>(`command`, `handler`): `void`

Remove a command handler for the given command

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"testEventTrigger"`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `K` | Command to remove the handler for |
| `handler` | [`CommissioningServerCommands`](../modules/export.md#commissioningservercommands)[`K`] | Handler function to remove |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:922](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L922)

___

### setMdnsBroadcaster

▸ **setMdnsBroadcaster**(`mdnsBroadcaster`): `void`

Set the MDNS Broadcaster instance. Should be only used internally

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mdnsBroadcaster` | [`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md) | MdnsBroadcaster instance |

#### Returns

`void`

#### Overrides

[MatterNode](export.MatterNode.md).[setMdnsBroadcaster](export.MatterNode.md#setmdnsbroadcaster)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:825](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L825)

___

### setMdnsScanner

▸ **setMdnsScanner**(`mdnsScanner`): `void`

Set the MDNS Scanner instance. Should be only used internally

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mdnsScanner` | [`MdnsScanner`](mdns_export.MdnsScanner.md) | MdnsScanner instance |

#### Returns

`void`

#### Overrides

[MatterNode](export.MatterNode.md).[setMdnsScanner](export.MatterNode.md#setmdnsscanner)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:816](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L816)

___

### setPort

▸ **setPort**(`port`): `void`

Set the port the device is listening on. Can only be called before the device is initialized.

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:859](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L859)

___

### setReachability

▸ **setReachability**(`reachable`): `void`

Set the reachability of the commissioning server aka "the main matter device". This call only has effect when
the reachability flag was set in the BasicInformationCluster or in the BasicInformation data in the constructor!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reachable` | `boolean` | true if reachable, false otherwise |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:935](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L935)

___

### setStorage

▸ **setStorage**(`storage`): `Promise`\<`void`\>

Set the StorageManager instance. Should be only used internally

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](storage_export.StorageContext.md)\<[`SyncStorage`](storage_export.SyncStorage.md)\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:836](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L836)

___

### start

▸ **start**(): `Promise`\<`void`\>

Starts the Matter device and advertises it.

#### Returns

`Promise`\<`void`\>

#### Overrides

[MatterNode](export.MatterNode.md).[start](export.MatterNode.md#start)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:956](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L956)

___

### updateStructure

▸ **updateStructure**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:673](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/CommissioningServer.ts#L673)
