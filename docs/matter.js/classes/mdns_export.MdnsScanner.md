[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [mdns/export](../modules/mdns_export.md) / MdnsScanner

# Class: MdnsScanner

[mdns/export](../modules/mdns_export.md).MdnsScanner

This class implements the Scanner interface for a MDNS scanner via UDP messages in a IP based network.
It sends out queries to discover various types of Matter device types and listens for announcements.

## Implements

- [`Scanner`](../interfaces/common_export.Scanner.md)

## Table of contents

### Constructors

- [constructor](mdns_export.MdnsScanner.md#constructor)

### Properties

- [activeAnnounceQueries](mdns_export.MdnsScanner.md#activeannouncequeries)
- [commissionableDeviceRecords](mdns_export.MdnsScanner.md#commissionabledevicerecords)
- [multicastServer](mdns_export.MdnsScanner.md#multicastserver)
- [nextAnnounceIntervalSeconds](mdns_export.MdnsScanner.md#nextannounceintervalseconds)
- [operationalDeviceRecords](mdns_export.MdnsScanner.md#operationaldevicerecords)
- [periodicTimer](mdns_export.MdnsScanner.md#periodictimer)
- [queryTimer](mdns_export.MdnsScanner.md#querytimer)
- [recordWaiters](mdns_export.MdnsScanner.md#recordwaiters)

### Methods

- [buildCommissionableQueryIdentifier](mdns_export.MdnsScanner.md#buildcommissionablequeryidentifier)
- [close](mdns_export.MdnsScanner.md#close)
- [createOperationalMatterQName](mdns_export.MdnsScanner.md#createoperationalmatterqname)
- [expire](mdns_export.MdnsScanner.md#expire)
- [extractInstanceId](mdns_export.MdnsScanner.md#extractinstanceid)
- [findCommissionableDevices](mdns_export.MdnsScanner.md#findcommissionabledevices)
- [findCommissionableQueryIdentifier](mdns_export.MdnsScanner.md#findcommissionablequeryidentifier)
- [findOperationalDevice](mdns_export.MdnsScanner.md#findoperationaldevice)
- [finishWaiter](mdns_export.MdnsScanner.md#finishwaiter)
- [getActiveQueryEarlierAnswers](mdns_export.MdnsScanner.md#getactivequeryearlieranswers)
- [getCommissionableDeviceRecords](mdns_export.MdnsScanner.md#getcommissionabledevicerecords)
- [getDiscoveredCommissionableDevices](mdns_export.MdnsScanner.md#getdiscoveredcommissionabledevices)
- [getDiscoveredOperationalDevices](mdns_export.MdnsScanner.md#getdiscoveredoperationaldevices)
- [getOperationalDeviceRecords](mdns_export.MdnsScanner.md#getoperationaldevicerecords)
- [handleCommissionableRecords](mdns_export.MdnsScanner.md#handlecommissionablerecords)
- [handleDnsMessage](mdns_export.MdnsScanner.md#handlednsmessage)
- [handleIpRecords](mdns_export.MdnsScanner.md#handleiprecords)
- [handleOperationalSrvRecord](mdns_export.MdnsScanner.md#handleoperationalsrvrecord)
- [parseCommissionableTxtRecord](mdns_export.MdnsScanner.md#parsecommissionabletxtrecord)
- [registerWaiterPromise](mdns_export.MdnsScanner.md#registerwaiterpromise)
- [removeQuery](mdns_export.MdnsScanner.md#removequery)
- [sendQueries](mdns_export.MdnsScanner.md#sendqueries)
- [setQueryRecords](mdns_export.MdnsScanner.md#setqueryrecords)
- [sortServerEntries](mdns_export.MdnsScanner.md#sortserverentries)
- [create](mdns_export.MdnsScanner.md#create)

## Constructors

### constructor

• **new MdnsScanner**(`multicastServer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `multicastServer` | [`UdpMulticastServer`](net_export.UdpMulticastServer.md) |

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:90](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L90)

## Properties

### activeAnnounceQueries

• `Private` `Readonly` **activeAnnounceQueries**: `Map`<`string`, { `answers`: [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`any`\>[] ; `queries`: [`DnsQuery`](../interfaces/codec_export.DnsQuery.md)[]  }\>

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:81](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L81)

___

### commissionableDeviceRecords

• `Private` `Readonly` **commissionableDeviceRecords**: `Map`<`string`, [`CommissionableDeviceRecordWithExpire`](../modules/export._internal_.md#commissionabledevicerecordwithexpire)\>

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:86](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L86)

___

### multicastServer

• `Private` `Readonly` **multicastServer**: [`UdpMulticastServer`](net_export.UdpMulticastServer.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:90](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L90)

___

### nextAnnounceIntervalSeconds

• `Private` **nextAnnounceIntervalSeconds**: `number` = `START_ANNOUNCE_INTERVAL_SECONDS`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:83](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L83)

___

### operationalDeviceRecords

• `Private` `Readonly` **operationalDeviceRecords**: `Map`<`string`, `Map`<`string`, [`MatterServerRecordWithExpire`](../modules/export._internal_.md#matterserverrecordwithexpire)\>\>

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:85](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L85)

___

### periodicTimer

• `Private` `Readonly` **periodicTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:88](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L88)

___

### queryTimer

• `Private` `Optional` **queryTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:82](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L82)

___

### recordWaiters

• `Private` `Readonly` **recordWaiters**: `Map`<`string`, { `resolver`: () => `void` ; `timer`: [`Timer`](../interfaces/time_export.Timer.md)  }\>

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:87](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L87)

## Methods

### buildCommissionableQueryIdentifier

▸ `Private` **buildCommissionableQueryIdentifier**(`identifier`): `string`

Builds an identifier string for commissionable queries based on the given identifier object.
Some identifiers are identical to the official DNS-SD identifiers, others are custom.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:360](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L360)

___

### close

▸ **close**(): `Promise`<`void`\>

Close all connects, end all timers and resolve all pending promises.

#### Returns

`Promise`<`void`\>

#### Implementation of

[Scanner](../interfaces/common_export.Scanner.md).[close](../interfaces/common_export.Scanner.md#close)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:519](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L519)

___

### createOperationalMatterQName

▸ `Private` **createOperationalMatterQName**(`operationalId`, `nodeId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operationalId` | `Uint8Array` |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:280](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L280)

___

### expire

▸ `Private` **expire**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:721](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L721)

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

[packages/matter.js/src/mdns/MdnsScanner.ts:380](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L380)

___

### findCommissionableDevices

▸ **findCommissionableDevices**(`identifier`, `timeoutSeconds?`): `Promise`<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

Discovers commissionalble devices based on a defined identifier. If an already discovered device matched the
query it is returned directly and no query is triggered. This works because the commissionable device records
that are announced into the network are always stored already. If no record can be found a query is registered
and sent out and  the promise gets fulfilled as soon as one device is found. More might be added later and can
be requested ny the getCommissionableDevices method. If no device is discovered the promise is fulfilled after
the timeout period.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) | `undefined` |
| `timeoutSeconds` | `number` | `5` |

#### Returns

`Promise`<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

#### Implementation of

[Scanner](../interfaces/common_export.Scanner.md).[findCommissionableDevices](../interfaces/common_export.Scanner.md#findcommissionabledevices)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:446](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L446)

___

### findCommissionableQueryIdentifier

▸ `Private` **findCommissionableQueryIdentifier**(`instanceName`, `record`): `undefined` \| `string`

Check all options for a query identifier and return the most relevant one with an active query

#### Parameters

| Name | Type |
| :------ | :------ |
| `instanceName` | `string` |
| `record` | [`CommissionableDeviceRecordWithExpire`](../modules/export._internal_.md#commissionabledevicerecordwithexpire) |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:391](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L391)

___

### findOperationalDevice

▸ **findOperationalDevice**(`«destructured»`, `nodeId`, `timeoutSeconds?`): `Promise`<[`ServerAddressIp`](../modules/common_export.md#serveraddressip)[]\>

Method to find an operational device (already commissioned) and return a promise with the list of discovered
IP/ports or an empty array if not found.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | [`Fabric`](fabric_export.Fabric.md) | `undefined` |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) | `undefined` |
| `timeoutSeconds` | `number` | `5` |

#### Returns

`Promise`<[`ServerAddressIp`](../modules/common_export.md#serveraddressip)[]\>

#### Implementation of

[Scanner](../interfaces/common_export.Scanner.md).[findOperationalDevice](../interfaces/common_export.Scanner.md#findoperationaldevice)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:289](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L289)

___

### finishWaiter

▸ `Private` **finishWaiter**(`queryId`, `resolvePromise?`): `void`

Remove a waiter promise for a specific queryId and stop the connected timer. If required also resolve the
promise.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `queryId` | `string` | `undefined` |
| `resolvePromise` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:268](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L268)

___

### getActiveQueryEarlierAnswers

▸ `Private` **getActiveQueryEarlierAnswers**(): [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`any`\>[]

#### Returns

[`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`any`\>[]

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:189](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L189)

___

### getCommissionableDeviceRecords

▸ `Private` **getCommissionableDeviceRecords**(`identifier`): { `CM`: `number` ; `D`: `number` ; `DN?`: `string` ; `DT?`: `number` ; `P?`: `number` ; `PH?`: `number` ; `PI?`: `string` ; `RI?`: `string` ; `SAI?`: `number` ; `SD`: `number` ; `SII?`: `number` ; `T?`: `number` ; `V?`: `number` ; `VP?`: `string` ; `addresses`: [`ServerAddressIp`](../modules/common_export.md#serveraddressip)[] ; `expires`: `undefined` = undefined; `instanceId`: `string`  }[]

Returns the metadata and list of all target addresses (IP/port) discovered for a queried commissionable device
record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) |

#### Returns

{ `CM`: `number` ; `D`: `number` ; `DN?`: `string` ; `DT?`: `number` ; `P?`: `number` ; `PH?`: `number` ; `PI?`: `string` ; `RI?`: `string` ; `SAI?`: `number` ; `SD`: `number` ; `SII?`: `number` ; `T?`: `number` ; `V?`: `number` ; `VP?`: `string` ; `addresses`: [`ServerAddressIp`](../modules/common_export.md#serveraddressip)[] ; `expires`: `undefined` = undefined; `instanceId`: `string`  }[]

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:323](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L323)

___

### getDiscoveredCommissionableDevices

▸ **getDiscoveredCommissionableDevices**(`identifier`): { `CM`: `number` ; `D`: `number` ; `DN?`: `string` ; `DT?`: `number` ; `P?`: `number` ; `PH?`: `number` ; `PI?`: `string` ; `RI?`: `string` ; `SAI?`: `number` ; `SD`: `number` ; `SII?`: `number` ; `T?`: `number` ; `V?`: `number` ; `VP?`: `string` ; `addresses`: [`ServerAddressIp`](../modules/common_export.md#serveraddressip)[] ; `expires`: `undefined` = undefined; `instanceId`: `string`  }[]

Return already discovered commissionable devices and return them. Does not send out new DNS-SD queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) |

#### Returns

{ `CM`: `number` ; `D`: `number` ; `DN?`: `string` ; `DT?`: `number` ; `P?`: `number` ; `PH?`: `number` ; `PI?`: `string` ; `RI?`: `string` ; `SAI?`: `number` ; `SD`: `number` ; `SII?`: `number` ; `T?`: `number` ; `V?`: `number` ; `VP?`: `string` ; `addresses`: [`ServerAddressIp`](../modules/common_export.md#serveraddressip)[] ; `expires`: `undefined` = undefined; `instanceId`: `string`  }[]

#### Implementation of

[Scanner](../interfaces/common_export.Scanner.md).[getDiscoveredCommissionableDevices](../interfaces/common_export.Scanner.md#getdiscoveredcommissionabledevices)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:512](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L512)

___

### getDiscoveredOperationalDevices

▸ **getDiscoveredOperationalDevices**(`«destructured»`, `nodeId`): [`ServerAddressIp`](../modules/common_export.md#serveraddressip)[]

Return already discovered addresses of an operational paired device and return them. Does not send out new
DNS-SD queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

[`ServerAddressIp`](../modules/common_export.md#serveraddressip)[]

#### Implementation of

[Scanner](../interfaces/common_export.Scanner.md).[getDiscoveredOperationalDevices](../interfaces/common_export.Scanner.md#getdiscoveredoperationaldevices)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:315](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L315)

___

### getOperationalDeviceRecords

▸ `Private` **getOperationalDeviceRecords**(`deviceMatterQname`): [`ServerAddressIp`](../modules/common_export.md#serveraddressip)[]

Returns the list of all targets (IP/port) discovered for a queried operational device record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceMatterQname` | `string` |

#### Returns

[`ServerAddressIp`](../modules/common_export.md#serveraddressip)[]

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:211](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L211)

___

### handleCommissionableRecords

▸ `Private` **handleCommissionableRecords**(`answers`, `formerAnswers`, `netInterface`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `answers` | [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`any`\>[] |
| `formerAnswers` | [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`any`\>[] |
| `netInterface` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:605](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L605)

___

### handleDnsMessage

▸ `Private` **handleDnsMessage**(`messageBytes`, `_remoteIp`, `netInterface`): `void`

Main method to handle all incoming DNS messages.
It will parse the message and check if it contains relevant discovery records.

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageBytes` | `Uint8Array` |
| `_remoteIp` | `string` |
| `netInterface` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:530](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L530)

___

### handleIpRecords

▸ `Private` **handleIpRecords**(`answers`, `target`, `netInterface`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `answers` | [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`any`\>[] |
| `target` | `string` |
| `netInterface` | `string` |

#### Returns

`string`[]

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:545](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L545)

___

### handleOperationalSrvRecord

▸ `Private` **handleOperationalSrvRecord**(`answers`, `formerAnswers`, `netInterface`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `answers` | [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`any`\>[] |
| `formerAnswers` | [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`any`\>[] |
| `netInterface` | `string` |

#### Returns

`undefined` \| `boolean`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:555](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L555)

___

### parseCommissionableTxtRecord

▸ `Private` **parseCommissionableTxtRecord**(`record`): `undefined` \| [`CommissionableDeviceRecordWithExpire`](../modules/export._internal_.md#commissionabledevicerecordwithexpire)

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`any`\> |

#### Returns

`undefined` \| [`CommissionableDeviceRecordWithExpire`](../modules/export._internal_.md#commissionabledevicerecordwithexpire)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:699](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L699)

___

### registerWaiterPromise

▸ `Private` **registerWaiterPromise**(`queryId`, `timeoutSeconds`): `Promise`<{ `promise`: `Promise`<`void`\>  }\>

Registers a deferred promise for a specific queryId together with a timeout and return the promise.
The promise will be resolved when the timer runs out latest.

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryId` | `string` |
| `timeoutSeconds` | `number` |

#### Returns

`Promise`<{ `promise`: `Promise`<`void`\>  }\>

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:256](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L256)

___

### removeQuery

▸ `Private` **removeQuery**(`queryId`): `void`

Remove a query from the list of active queries because discovery has finished or timed out and stop sending it
out. If it was the last query announcing will stop completely.

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryId` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:197](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L197)

___

### sendQueries

▸ `Private` **sendQueries**(): `Promise`<`void`\>

Sends out one DNS-SD query for all collected announce records and start a timer for the next query with doubled
interval, maximum 60min, as per MDNS specs. The already known answers are tried to be sent in the query as long
as they fit into a maximum 1500 byte long packet (as defined in MDNS specs), else they are split into more
packets and the query is sent as Truncated query.

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:104](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L104)

___

### setQueryRecords

▸ `Private` **setQueryRecords**(`queryId`, `queries`, `answers?`): `void`

Set new DnsQuery records to the list of active queries to discover devices in the network and start sending them
out. When entry already exists the query is overwritten and answers are always added.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `queryId` | `string` | `undefined` |
| `queries` | [`DnsQuery`](../interfaces/codec_export.DnsQuery.md)[] | `undefined` |
| `answers` | [`DnsRecord`](../interfaces/codec_export.DnsRecord.md)<`any`\>[] | `[]` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:177](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L177)

___

### sortServerEntries

▸ `Private` **sortServerEntries**(`entries`): [`MatterServerRecordWithExpire`](../modules/export._internal_.md#matterserverrecordwithexpire)[]

Sort the list of found IP/ports and make sure link-local IPv6 addresses come first, IPv6 next and IPv4 last.

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries` | [`MatterServerRecordWithExpire`](../modules/export._internal_.md#matterserverrecordwithexpire)[] |

#### Returns

[`MatterServerRecordWithExpire`](../modules/export._internal_.md#matterserverrecordwithexpire)[]

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:228](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L228)

___

### create

▸ `Static` **create**(`netInterface?`): `Promise`<[`MdnsScanner`](mdns_export.MdnsScanner.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface?` | `string` |

#### Returns

`Promise`<[`MdnsScanner`](mdns_export.MdnsScanner.md)\>

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:70](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsScanner.ts#L70)
