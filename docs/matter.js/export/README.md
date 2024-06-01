[**@project-chip/matter.js**](../README.md) • **Docs**

***

[@project-chip/matter.js](../modules.md) / export

# export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Classes

- [CommissioningController](classes/CommissioningController.md)
- [CommissioningServer](classes/CommissioningServer.md)
- [MatterNode](classes/MatterNode.md)
- [MatterServer](classes/MatterServer.md)

### Interfaces

- [CommissioningServerOptions](interfaces/CommissioningServerOptions.md)
- [DevicePairingInformation](interfaces/DevicePairingInformation.md)

## Type Aliases

### CommissioningControllerOptions

> **CommissioningControllerOptions**: [`CommissioningControllerNodeOptions`](../device/export/README.md#commissioningcontrollernodeoptions) & `object`

Constructor options for the CommissioningController class

#### Type declaration

##### adminFabricId?

> `optional` `readonly` **adminFabricId**: [`FabricId`](../datatype/export/README.md#fabricid)

Controller own Fabric ID used to initialize the Controller the first time and to generate the Root certificate.
Can not be changed afterward.
Default: 1

##### adminFabricIndex?

> `optional` `readonly` **adminFabricIndex**: [`FabricIndex`](../datatype/export/README.md#fabricindex)

Fabric Index used to initialize the Controller the first time. Can not be changed afterward.
Default: 1

##### adminVendorId?

> `optional` `readonly` **adminVendorId**: [`VendorId`](../datatype/export/README.md#vendorid)

Admin Vendor ID used for all commissioning operations. Can not be changed afterward. Default: 0xFFF1

##### autoConnect?

> `optional` `readonly` **autoConnect**: `boolean`

If set to false, the controller will not connect to any device on startup. You need to use connectNode() or
connect() to connect to the relevant nodes in this case. Else all nodes are connected on startup.

##### caseAuthenticatedTags?

> `optional` `readonly` **caseAuthenticatedTags**: [`CaseAuthenticatedTag`](../datatype/export/README.md#caseauthenticatedtag)[]

CASE Authenticated Tags used to initialize the Controller the first time. Can not be changed afterward.
Maximum 3 tags are supported.

##### environment?

> `optional` `readonly` **environment**: `object`

When used with the new API Environment set the environment here and the CommissioningServer will self-register
on the environment when you call start().

##### environment.environment

> `readonly` **environment**: [`Environment`](../environment/export/classes/Environment.md)

Environment to register the node with on start()

##### environment.id

> `readonly` **id**: `string`

Unique id to register to node.

##### listeningAddressIpv4?

> `optional` `readonly` **listeningAddressIpv4**: `string`

Listening address for IPv4. By default, the interface will listen on all IPv4 addresses.

##### listeningAddressIpv6?

> `optional` `readonly` **listeningAddressIpv6**: `string`

Listening address for IPv6. By default, the interface will listen on all IPv6 addresses.

##### localPort?

> `optional` `readonly` **localPort**: `number`

Local port number to use for the UDP interface. By default, a random port number will be generated
(strongly recommended!).

#### Source

[packages/matter.js/src/CommissioningController.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L47)

***

### CommissioningServerCommands

> **CommissioningServerCommands**: `object`

Commands exposed by the CommissioningServer

#### Type declaration

##### testEventTrigger

> **testEventTrigger**: [`ClusterServerHandlers`](../cluster/export/README.md#clusterserverhandlersc)\<*typeof* [`GeneralDiagnosticsCluster`](../cluster/export/README.md#generaldiagnosticscluster-1)\>\[`"testEventTrigger"`\]

Provide a means for certification tests to trigger some test-plan-specific events.

#### Source

[packages/matter.js/src/CommissioningServer.ts:207](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L207)

***

### MatterServerOptions

> **MatterServerOptions**: `object`

#### Type declaration

##### disableIpv4?

> `optional` **disableIpv4**: `boolean`

If set to true no IPv4 socket listener is sed and only IPv6 is supported.

##### ~~mdnsAnnounceInterface?~~

> `optional` **mdnsAnnounceInterface**: `string`

Interface to use for MDNS announcements. If not provided announcements will be sent from all network interfaces
TODO: Remove in later versions then 0.7

###### Deprecated

##### mdnsInterface?

> `optional` **mdnsInterface**: `string`

Interface to use for MDNS announcements and scanning. If not provided announcements/scanning will be done on all
network interfaces

#### Source

[packages/matter.js/src/MatterServer.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterServer.ts#L32)

***

### NodeCommissioningOptions

> **NodeCommissioningOptions**: [`CommissioningControllerNodeOptions`](../device/export/README.md#commissioningcontrollernodeoptions) & `object`

Options needed to commission a new node

#### Type declaration

##### commissioning?

> `optional` **commissioning**: [`CommissioningOptions`](../protocol/export/README.md#commissioningoptions)

Commission related options.

##### discovery

> **discovery**: `object` \| `object` & `object`

Discovery related options.

###### Type declaration

###### discoveryCapabilities?

> `optional` **discoveryCapabilities**: [`TypeFromPartialBitSchema`](../schema/export/README.md#typefrompartialbitschemat)\<*typeof* [`DiscoveryCapabilitiesBitmap`](../schema/export/README.md#discoverycapabilitiesbitmap)\>

Discovery capabilities to use for discovery. These are included in the QR code normally and defined if BLE
is supported for initial commissioning.

###### knownAddress?

> `optional` **knownAddress**: [`ServerAddress`](../common/export/README.md#serveraddress)

Known address of the device to use for discovery. if this is set this will be tried first before discovering
the device.

###### timeoutSeconds?

> `optional` **timeoutSeconds**: `number`

Timeout in seconds for the discovery process. Default: 30 seconds

##### passcode

> **passcode**: `number`

Passcode to use for commissioning.

#### Source

[packages/matter.js/src/CommissioningController.ts:106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningController.ts#L106)

***

### NodeOptions

> **NodeOptions**: `object`

#### Type declaration

##### ~~uniqueNodeId?~~

> `optional` **uniqueNodeId**: `string`

Deprecated name for uniqueStorageKey
TODO: Remove with 0.8 or such

###### Deprecated

##### uniqueStorageKey?

> `optional` **uniqueStorageKey**: `string`

Unique storage key for this node to use for the storage context of this node. If not provided the order of node addition is used.

#### Source

[packages/matter.js/src/MatterServer.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/MatterServer.ts#L20)

## Variables

### FORBIDDEN\_PASSCODES

> `const` **FORBIDDEN\_PASSCODES**: `number`[]

#### Source

[packages/matter.js/src/CommissioningServer.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L82)

***

### MATTER\_DATAMODEL\_VERSION

> `const` **MATTER\_DATAMODEL\_VERSION**: `16` = `16`

Data model revision used by this implementation
Value of 16 means "Matter 1.0/1.1"

#### See

MatterSpecification.v11.Core § 7.1.1

#### Source

[packages/matter.js/src/CommissioningServer.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L92)
