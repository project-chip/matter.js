[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/mdns](../modules/exports_mdns.md) / MdnsScanner

# Class: MdnsScanner

[exports/mdns](../modules/exports_mdns.md).MdnsScanner

This class implements the Scanner interface for a MDNS scanner via UDP messages in a IP based network.
It sends out queries to discover various types of Matter device types and listens for announcements.

## Implements

- [`Scanner`](../interfaces/exports_common.Scanner.md)

## Table of contents

### Constructors

- [constructor](exports_mdns.MdnsScanner.md#constructor)

### Properties

- [activeAnnounceQueries](exports_mdns.MdnsScanner.md#activeannouncequeries)
- [buildCommissionableQueryIdentifier](exports_mdns.MdnsScanner.md#buildcommissionablequeryidentifier)
- [commissionableDeviceRecords](exports_mdns.MdnsScanner.md#commissionabledevicerecords)
- [createOperationalMatterQName](exports_mdns.MdnsScanner.md#createoperationalmatterqname)
- [expire](exports_mdns.MdnsScanner.md#expire)
- [findCommissionableQueryIdentifier](exports_mdns.MdnsScanner.md#findcommissionablequeryidentifier)
- [finishWaiter](exports_mdns.MdnsScanner.md#finishwaiter)
- [getActiveQueryEarlierAnswers](exports_mdns.MdnsScanner.md#getactivequeryearlieranswers)
- [getCommissionableDeviceRecords](exports_mdns.MdnsScanner.md#getcommissionabledevicerecords)
- [getOperationalDeviceRecords](exports_mdns.MdnsScanner.md#getoperationaldevicerecords)
- [handleCommissionableRecords](exports_mdns.MdnsScanner.md#handlecommissionablerecords)
- [handleDnsMessage](exports_mdns.MdnsScanner.md#handlednsmessage)
- [handleIpRecords](exports_mdns.MdnsScanner.md#handleiprecords)
- [handleOperationalSrvRecord](exports_mdns.MdnsScanner.md#handleoperationalsrvrecord)
- [multicastServer](exports_mdns.MdnsScanner.md#multicastserver)
- [nextAnnounceIntervalSeconds](exports_mdns.MdnsScanner.md#nextannounceintervalseconds)
- [operationalDeviceRecords](exports_mdns.MdnsScanner.md#operationaldevicerecords)
- [parseCommissionableTxtRecord](exports_mdns.MdnsScanner.md#parsecommissionabletxtrecord)
- [periodicTimer](exports_mdns.MdnsScanner.md#periodictimer)
- [queryTimer](exports_mdns.MdnsScanner.md#querytimer)
- [recordWaiters](exports_mdns.MdnsScanner.md#recordwaiters)
- [registerWaiterPromise](exports_mdns.MdnsScanner.md#registerwaiterpromise)
- [removeQuery](exports_mdns.MdnsScanner.md#removequery)
- [sendQueries](exports_mdns.MdnsScanner.md#sendqueries)
- [setQueryRecords](exports_mdns.MdnsScanner.md#setqueryrecords)
- [sortServerEntries](exports_mdns.MdnsScanner.md#sortserverentries)

### Methods

- [close](exports_mdns.MdnsScanner.md#close)
- [extractInstanceId](exports_mdns.MdnsScanner.md#extractinstanceid)
- [findCommissionableDevices](exports_mdns.MdnsScanner.md#findcommissionabledevices)
- [findOperationalDevice](exports_mdns.MdnsScanner.md#findoperationaldevice)
- [getDiscoveredCommissionableDevices](exports_mdns.MdnsScanner.md#getdiscoveredcommissionabledevices)
- [getDiscoveredOperationalDevices](exports_mdns.MdnsScanner.md#getdiscoveredoperationaldevices)
- [create](exports_mdns.MdnsScanner.md#create)

## Constructors

### constructor

• **new MdnsScanner**(`multicastServer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `multicastServer` | [`UdpMulticastServer`](net_export.UdpMulticastServer.md) |

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:25

## Properties

### activeAnnounceQueries

• `Private` `Readonly` **activeAnnounceQueries**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:18

___

### buildCommissionableQueryIdentifier

• `Private` **buildCommissionableQueryIdentifier**: `any`

Builds an identifier string for commissionable queries based on the given identifier object.
Some identifiers are identical to the official DNS-SD identifiers, others are custom.

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:81

___

### commissionableDeviceRecords

• `Private` `Readonly` **commissionableDeviceRecords**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:22

___

### createOperationalMatterQName

• `Private` **createOperationalMatterQName**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:65

___

### expire

• `Private` **expire**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:128

___

### findCommissionableQueryIdentifier

• `Private` **findCommissionableQueryIdentifier**: `any`

Check all options for a query identifier and return the most relevant one with an active query

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:86

___

### finishWaiter

• `Private` **finishWaiter**: `any`

Remove a waiter promise for a specific queryId and stop the connected timer. If required also resolve the
promise.

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:64

___

### getActiveQueryEarlierAnswers

• `Private` **getActiveQueryEarlierAnswers**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:39

___

### getCommissionableDeviceRecords

• `Private` **getCommissionableDeviceRecords**: `any`

Returns the metadata and list of all target addresses (IP/port) discovered for a queried commissionable device
record.

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:76

___

### getOperationalDeviceRecords

• `Private` **getOperationalDeviceRecords**: `any`

Returns the list of all targets (IP/port) discovered for a queried operational device record.

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:48

___

### handleCommissionableRecords

• `Private` **handleCommissionableRecords**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:126

___

### handleDnsMessage

• `Private` **handleDnsMessage**: `any`

Main method to handle all incoming DNS messages.
It will parse the message and check if it contains relevant discovery records.

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:123

___

### handleIpRecords

• `Private` **handleIpRecords**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:124

___

### handleOperationalSrvRecord

• `Private` **handleOperationalSrvRecord**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:125

___

### multicastServer

• `Private` `Readonly` **multicastServer**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:16

___

### nextAnnounceIntervalSeconds

• `Private` **nextAnnounceIntervalSeconds**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:20

___

### operationalDeviceRecords

• `Private` `Readonly` **operationalDeviceRecords**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:21

___

### parseCommissionableTxtRecord

• `Private` **parseCommissionableTxtRecord**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:127

___

### periodicTimer

• `Private` `Readonly` **periodicTimer**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:24

___

### queryTimer

• `Private` `Optional` **queryTimer**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:19

___

### recordWaiters

• `Private` `Readonly` **recordWaiters**: `any`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:23

___

### registerWaiterPromise

• `Private` **registerWaiterPromise**: `any`

Registers a deferred promise for a specific queryId together with a timeout and return the promise.
The promise will be resolved when the timer runs out latest.

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:59

___

### removeQuery

• `Private` **removeQuery**: `any`

Remove a query from the list of active queries because discovery has finished or timed out and stop sending it
out. If it was the last query announcing will stop completely.

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:44

___

### sendQueries

• `Private` **sendQueries**: `any`

Sends out one DNS-SD query for all collected announce records and start a timer for the next query with doubled
interval, maximum 60min, as per MDNS specs. The already known answers are tried to be sent in the query as long
as they fit into a maximum 1500 byte long packet (as defined in MDNS specs), else they are split into more
packets and the query is sent as Truncated query.

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:33

___

### setQueryRecords

• `Private` **setQueryRecords**: `any`

Set new DnsQuery records to the list of active queries to discover devices in the network and start sending them
out. When entry already exists the query is overwritten and answers are always added.

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:38

___

### sortServerEntries

• `Private` **sortServerEntries**: `any`

Sort the list of found IP/ports and make sure link-local IPv6 addresses come first, IPv6 next and IPv4 last.

**`Param`**

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:54

## Methods

### close

▸ **close**(): `Promise`<`void`\>

Close all connects, end all timers and resolve all pending promises.

#### Returns

`Promise`<`void`\>

#### Implementation of

[Scanner](../interfaces/exports_common.Scanner.md).[close](../interfaces/exports_common.Scanner.md#close)

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:118

___

### extractInstanceId

▸ **extractInstanceId**(`instanceName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instanceName` | `string` |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:82

___

### findCommissionableDevices

▸ **findCommissionableDevices**(`identifier`, `timeoutSeconds?`): `Promise`<[`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)[]\>

Discovers commissionalble devices based on a defined identifier. If an already discovered device matched the
query it is returned directly and no query is triggered. This works because the commissionable device records
that are announced into the network are always stored already. If no record can be found a query is registered
and sent out and  the promise gets fulfilled as soon as one device is found. More might be added later and can
be requested ny the getCommissionableDevices method. If no device is discovered the promise is fulfilled after
the timeout period.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/exports_common.md#commissionabledeviceidentifiers) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<[`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)[]\>

#### Implementation of

[Scanner](../interfaces/exports_common.Scanner.md).[findCommissionableDevices](../interfaces/exports_common.Scanner.md#findcommissionabledevices)

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:95

___

### findOperationalDevice

▸ **findOperationalDevice**(`«destructured»`, `nodeId`, `timeoutSeconds?`): `Promise`<[`ServerAddressIp`](../modules/exports_common.md#serveraddressip)[]\>

Method to find an operational device (already commissioned) and return a promise with the list of discovered
IP/ports or an empty array if not found.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<[`ServerAddressIp`](../modules/exports_common.md#serveraddressip)[]\>

#### Implementation of

[Scanner](../interfaces/exports_common.Scanner.md).[findOperationalDevice](../interfaces/exports_common.Scanner.md#findoperationaldevice)

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:70

___

### getDiscoveredCommissionableDevices

▸ **getDiscoveredCommissionableDevices**(`identifier`): { `CM`: `number` ; `D`: `number` ; `DN?`: `string` ; `DT?`: `number` ; `P?`: `number` ; `PH?`: `number` ; `PI?`: `string` ; `RI?`: `string` ; `SAI?`: `number` ; `SD`: `number` ; `SII?`: `number` ; `T?`: `number` ; `V?`: `number` ; `VP?`: `string` ; `addresses`: [`ServerAddressIp`](../modules/exports_common.md#serveraddressip)[] ; `expires`: `undefined` ; `instanceId`: `string`  }[]

Return already discovered commissionable devices and return them. Does not send out new DNS-SD queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/exports_common.md#commissionabledeviceidentifiers) |

#### Returns

{ `CM`: `number` ; `D`: `number` ; `DN?`: `string` ; `DT?`: `number` ; `P?`: `number` ; `PH?`: `number` ; `PI?`: `string` ; `RI?`: `string` ; `SAI?`: `number` ; `SD`: `number` ; `SII?`: `number` ; `T?`: `number` ; `V?`: `number` ; `VP?`: `string` ; `addresses`: [`ServerAddressIp`](../modules/exports_common.md#serveraddressip)[] ; `expires`: `undefined` ; `instanceId`: `string`  }[]

#### Implementation of

[Scanner](../interfaces/exports_common.Scanner.md).[getDiscoveredCommissionableDevices](../interfaces/exports_common.Scanner.md#getdiscoveredcommissionabledevices)

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:96

___

### getDiscoveredOperationalDevices

▸ **getDiscoveredOperationalDevices**(`«destructured»`, `nodeId`): [`ServerAddressIp`](../modules/exports_common.md#serveraddressip)[]

Return already discovered addresses of an operational paired device and return them. Does not send out new
DNS-SD queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Fabric`](exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

[`ServerAddressIp`](../modules/exports_common.md#serveraddressip)[]

#### Implementation of

[Scanner](../interfaces/exports_common.Scanner.md).[getDiscoveredOperationalDevices](../interfaces/exports_common.Scanner.md#getdiscoveredoperationaldevices)

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:71

___

### create

▸ `Static` **create**(`netInterface?`): `Promise`<[`MdnsScanner`](exports_mdns.MdnsScanner.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface?` | `string` |

#### Returns

`Promise`<[`MdnsScanner`](exports_mdns.MdnsScanner.md)\>

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsScanner.d.ts:17
