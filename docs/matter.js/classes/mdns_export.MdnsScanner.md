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
- [closing](mdns_export.MdnsScanner.md#closing)
- [commissionableDeviceRecords](mdns_export.MdnsScanner.md#commissionabledevicerecords)
- [enableIpv4](mdns_export.MdnsScanner.md#enableipv4)
- [multicastServer](mdns_export.MdnsScanner.md#multicastserver)
- [nextAnnounceIntervalSeconds](mdns_export.MdnsScanner.md#nextannounceintervalseconds)
- [operationalDeviceRecords](mdns_export.MdnsScanner.md#operationaldevicerecords)
- [periodicTimer](mdns_export.MdnsScanner.md#periodictimer)
- [queryTimer](mdns_export.MdnsScanner.md#querytimer)
- [recordWaiters](mdns_export.MdnsScanner.md#recordwaiters)

### Methods

- [buildCommissionableQueryIdentifier](mdns_export.MdnsScanner.md#buildcommissionablequeryidentifier)
- [cancelCommissionableDeviceDiscovery](mdns_export.MdnsScanner.md#cancelcommissionabledevicediscovery)
- [cancelOperationalDeviceDiscovery](mdns_export.MdnsScanner.md#canceloperationaldevicediscovery)
- [close](mdns_export.MdnsScanner.md#close)
- [createOperationalMatterQName](mdns_export.MdnsScanner.md#createoperationalmatterqname)
- [expire](mdns_export.MdnsScanner.md#expire)
- [extractInstanceId](mdns_export.MdnsScanner.md#extractinstanceid)
- [findCommissionableDevices](mdns_export.MdnsScanner.md#findcommissionabledevices)
- [findCommissionableDevicesContinuously](mdns_export.MdnsScanner.md#findcommissionabledevicescontinuously)
- [findCommissionableQueryIdentifier](mdns_export.MdnsScanner.md#findcommissionablequeryidentifier)
- [findOperationalDevice](mdns_export.MdnsScanner.md#findoperationaldevice)
- [finishWaiter](mdns_export.MdnsScanner.md#finishwaiter)
- [getActiveQueryEarlierAnswers](mdns_export.MdnsScanner.md#getactivequeryearlieranswers)
- [getCommissionableDeviceRecords](mdns_export.MdnsScanner.md#getcommissionabledevicerecords)
- [getCommissionableQueryRecords](mdns_export.MdnsScanner.md#getcommissionablequeryrecords)
- [getDiscoveredCommissionableDevices](mdns_export.MdnsScanner.md#getdiscoveredcommissionabledevices)
- [getDiscoveredOperationalDevice](mdns_export.MdnsScanner.md#getdiscoveredoperationaldevice)
- [getOperationalDeviceRecords](mdns_export.MdnsScanner.md#getoperationaldevicerecords)
- [handleCommissionableRecords](mdns_export.MdnsScanner.md#handlecommissionablerecords)
- [handleDnsMessage](mdns_export.MdnsScanner.md#handlednsmessage)
- [handleIpRecords](mdns_export.MdnsScanner.md#handleiprecords)
- [handleOperationalRecords](mdns_export.MdnsScanner.md#handleoperationalrecords)
- [handleOperationalSrvRecord](mdns_export.MdnsScanner.md#handleoperationalsrvrecord)
- [handleOperationalTxtRecord](mdns_export.MdnsScanner.md#handleoperationaltxtrecord)
- [hasWaiter](mdns_export.MdnsScanner.md#haswaiter)
- [parseCommissionableTxtRecord](mdns_export.MdnsScanner.md#parsecommissionabletxtrecord)
- [parseTxtRecord](mdns_export.MdnsScanner.md#parsetxtrecord)
- [registerWaiterPromise](mdns_export.MdnsScanner.md#registerwaiterpromise)
- [removeQuery](mdns_export.MdnsScanner.md#removequery)
- [sendQueries](mdns_export.MdnsScanner.md#sendqueries)
- [setQueryRecords](mdns_export.MdnsScanner.md#setqueryrecords)
- [sortServerEntries](mdns_export.MdnsScanner.md#sortserverentries)
- [create](mdns_export.MdnsScanner.md#create)
- [deviceAddressDiagnostics](mdns_export.MdnsScanner.md#deviceaddressdiagnostics)
- [discoveryDataDiagnostics](mdns_export.MdnsScanner.md#discoverydatadiagnostics)

## Constructors

### constructor

• **new MdnsScanner**(`multicastServer`, `enableIpv4?`): [`MdnsScanner`](mdns_export.MdnsScanner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `multicastServer` | [`UdpMulticastServer`](net_export.UdpMulticastServer.md) |
| `enableIpv4?` | `boolean` |

#### Returns

[`MdnsScanner`](mdns_export.MdnsScanner.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L110)

## Properties

### activeAnnounceQueries

• `Private` `Readonly` **activeAnnounceQueries**: `Map`\<`string`, \{ `answers`: [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[] ; `queries`: [`DnsQuery`](../modules/codec_export.md#dnsquery)[]  }\>

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L93)

___

### closing

• `Private` **closing**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:108](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L108)

___

### commissionableDeviceRecords

• `Private` `Readonly` **commissionableDeviceRecords**: `Map`\<`string`, [`CommissionableDeviceRecordWithExpire`](../modules/mdns_export._internal_.md#commissionabledevicerecordwithexpire)\>

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:98](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L98)

___

### enableIpv4

• `Private` `Optional` `Readonly` **enableIpv4**: `boolean`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:112](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L112)

___

### multicastServer

• `Private` `Readonly` **multicastServer**: [`UdpMulticastServer`](net_export.UdpMulticastServer.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L111)

___

### nextAnnounceIntervalSeconds

• `Private` **nextAnnounceIntervalSeconds**: `number` = `START_ANNOUNCE_INTERVAL_SECONDS`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:95](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L95)

___

### operationalDeviceRecords

• `Private` `Readonly` **operationalDeviceRecords**: `Map`\<`string`, [`OperationalDeviceRecordWithExpire`](../modules/mdns_export._internal_.md#operationaldevicerecordwithexpire)\>

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:97](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L97)

___

### periodicTimer

• `Private` `Readonly` **periodicTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:107](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L107)

___

### queryTimer

• `Private` `Optional` **queryTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L94)

___

### recordWaiters

• `Private` `Readonly` **recordWaiters**: `Map`\<`string`, \{ `resolveOnUpdatedRecords`: `boolean` ; `resolver`: () => `void` ; `timer?`: [`Timer`](../interfaces/time_export.Timer.md)  }\>

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L99)

## Methods

### buildCommissionableQueryIdentifier

▸ **buildCommissionableQueryIdentifier**(`identifier`): `string`

Builds an identifier string for commissionable queries based on the given identifier object.
Some identifiers are identical to the official DNS-SD identifiers, others are custom.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:436](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L436)

___

### cancelCommissionableDeviceDiscovery

▸ **cancelCommissionableDeviceDiscovery**(`identifier`): `void`

Cancel a running discovery of commissionable devices. The waiter promises are resolved as if the timeout would
be over.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) |

#### Returns

`void`

#### Implementation of

[Scanner](../interfaces/common_export.Scanner.md).[cancelCommissionableDeviceDiscovery](../interfaces/common_export.Scanner.md#cancelcommissionabledevicediscovery)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:386](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L386)

___

### cancelOperationalDeviceDiscovery

▸ **cancelOperationalDeviceDiscovery**(`fabric`, `nodeId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:381](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L381)

___

### close

▸ **close**(): `Promise`\<`void`\>

Close all connects, end all timers and resolve all pending promises.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Scanner](../interfaces/common_export.Scanner.md).[close](../interfaces/common_export.Scanner.md#close)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:613](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L613)

___

### createOperationalMatterQName

▸ **createOperationalMatterQName**(`operationalId`, `nodeId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operationalId` | `Uint8Array` |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:342](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L342)

___

### expire

▸ **expire**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:955](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L955)

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

[packages/matter.js/src/mdns/MdnsScanner.ts:456](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L456)

___

### findCommissionableDevices

▸ **findCommissionableDevices**(`identifier`, `timeoutSeconds?`, `ignoreExistingRecords?`): `Promise`\<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

Discovers commissionable devices based on a defined identifier for maximal given timeout, but returns the
first found entries. If already a discovered device matches in the cache the response is returned directly and
no query is triggered. If no record exists a query is sent out and the promise gets fulfilled as soon as at least
one device is found. If no device is discovered in the defined timeframe an empty array is returned. When the
promise got fulfilled no more queries are send out, but more device entries might be added when discovered later.
These can be requested by the getCommissionableDevices method.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) | `undefined` |
| `timeoutSeconds` | `number` | `5` |
| `ignoreExistingRecords` | `boolean` | `false` |

#### Returns

`Promise`\<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

#### Implementation of

[Scanner](../interfaces/common_export.Scanner.md).[findCommissionableDevices](../interfaces/common_export.Scanner.md#findcommissionabledevices)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:548](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L548)

___

### findCommissionableDevicesContinuously

▸ **findCommissionableDevicesContinuously**(`identifier`, `callback`, `timeoutSeconds?`): `Promise`\<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

Discovers commissionable devices based on a defined identifier and returns the first found entries. If already a

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) | `undefined` |
| `callback` | (`device`: [`CommissionableDevice`](../modules/common_export.md#commissionabledevice)) => `void` | `undefined` |
| `timeoutSeconds` | `number` | `900` |

#### Returns

`Promise`\<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

#### Implementation of

[Scanner](../interfaces/common_export.Scanner.md).[findCommissionableDevicesContinuously](../interfaces/common_export.Scanner.md#findcommissionabledevicescontinuously)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:576](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L576)

___

### findCommissionableQueryIdentifier

▸ **findCommissionableQueryIdentifier**(`instanceName`, `record`): `undefined` \| `string`

Check all options for a query identifier and return the most relevant one with an active query

#### Parameters

| Name | Type |
| :------ | :------ |
| `instanceName` | `string` |
| `record` | [`CommissionableDeviceRecordWithExpire`](../modules/mdns_export._internal_.md#commissionabledevicerecordwithexpire) |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:467](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L467)

___

### findOperationalDevice

▸ **findOperationalDevice**(`«destructured»`, `nodeId`, `timeoutSeconds?`, `ignoreExistingRecords?`): `Promise`\<`undefined` \| [`OperationalDevice`](../modules/common_export.md#operationaldevice)\>

Method to find an operational device (already commissioned) and return a promise with the list of discovered
IP/ports or an empty array if not found.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | [`Fabric`](fabric_export.Fabric.md) | `undefined` |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) | `undefined` |
| `timeoutSeconds?` | `number` | `undefined` |
| `ignoreExistingRecords` | `boolean` | `false` |

#### Returns

`Promise`\<`undefined` \| [`OperationalDevice`](../modules/common_export.md#operationaldevice)\>

#### Implementation of

[Scanner](../interfaces/common_export.Scanner.md).[findOperationalDevice](../interfaces/common_export.Scanner.md#findoperationaldevice)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:351](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L351)

___

### finishWaiter

▸ **finishWaiter**(`queryId`, `resolvePromise`, `isUpdatedRecord?`): `void`

Remove a waiter promise for a specific queryId and stop the connected timer. If required also resolve the
promise.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `queryId` | `string` | `undefined` |
| `resolvePromise` | `boolean` | `undefined` |
| `isUpdatedRecord` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:322](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L322)

___

### getActiveQueryEarlierAnswers

▸ **getActiveQueryEarlierAnswers**(): [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[]

#### Returns

[`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[]

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:229](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L229)

___

### getCommissionableDeviceRecords

▸ **getCommissionableDeviceRecords**(`identifier`): \{ `CM`: `number` ; `D`: `number` ; `DN?`: `string` ; `DT?`: `number` ; `ICD?`: `number` ; `P?`: `number` ; `PH?`: `number` ; `PI?`: `string` ; `RI?`: `string` ; `SAI?`: `number` ; `SAT?`: `number` ; `SD`: `number` ; `SII?`: `number` ; `T?`: `number` ; `V?`: `number` ; `VP?`: `string` ; `addresses`: [`ServerAddressIp`](../modules/common_export.md#serveraddressip)[] ; `deviceIdentifier`: `string` ; `expires`: `undefined` = undefined; `instanceId`: `string`  }[]

Returns the metadata and list of all target addresses (IP/port) discovered for a queried commissionable device
record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) |

#### Returns

\{ `CM`: `number` ; `D`: `number` ; `DN?`: `string` ; `DT?`: `number` ; `ICD?`: `number` ; `P?`: `number` ; `PH?`: `number` ; `PI?`: `string` ; `RI?`: `string` ; `SAI?`: `number` ; `SAT?`: `number` ; `SD`: `number` ; `SII?`: `number` ; `T?`: `number` ; `V?`: `number` ; `VP?`: `string` ; `addresses`: [`ServerAddressIp`](../modules/common_export.md#serveraddressip)[] ; `deviceIdentifier`: `string` ; `expires`: `undefined` = undefined; `instanceId`: `string`  }[]

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:399](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L399)

___

### getCommissionableQueryRecords

▸ **getCommissionableQueryRecords**(`identifier`): [`DnsQuery`](../modules/codec_export.md#dnsquery)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) |

#### Returns

[`DnsQuery`](../modules/codec_export.md#dnsquery)[]

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:517](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L517)

___

### getDiscoveredCommissionableDevices

▸ **getDiscoveredCommissionableDevices**(`identifier`): \{ `CM`: `number` ; `D`: `number` ; `DN?`: `string` ; `DT?`: `number` ; `ICD?`: `number` ; `P?`: `number` ; `PH?`: `number` ; `PI?`: `string` ; `RI?`: `string` ; `SAI?`: `number` ; `SAT?`: `number` ; `SD`: `number` ; `SII?`: `number` ; `T?`: `number` ; `V?`: `number` ; `VP?`: `string` ; `addresses`: [`ServerAddressIp`](../modules/common_export.md#serveraddressip)[] ; `deviceIdentifier`: `string` ; `expires`: `undefined` = undefined; `instanceId`: `string`  }[]

Return already discovered commissionable devices and return them. Does not send out new DNS-SD queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) |

#### Returns

\{ `CM`: `number` ; `D`: `number` ; `DN?`: `string` ; `DT?`: `number` ; `ICD?`: `number` ; `P?`: `number` ; `PH?`: `number` ; `PI?`: `string` ; `RI?`: `string` ; `SAI?`: `number` ; `SAT?`: `number` ; `SD`: `number` ; `SII?`: `number` ; `T?`: `number` ; `V?`: `number` ; `VP?`: `string` ; `addresses`: [`ServerAddressIp`](../modules/common_export.md#serveraddressip)[] ; `deviceIdentifier`: `string` ; `expires`: `undefined` = undefined; `instanceId`: `string`  }[]

#### Implementation of

[Scanner](../interfaces/common_export.Scanner.md).[getDiscoveredCommissionableDevices](../interfaces/common_export.Scanner.md#getdiscoveredcommissionabledevices)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:606](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L606)

___

### getDiscoveredOperationalDevice

▸ **getDiscoveredOperationalDevice**(`«destructured»`, `nodeId`): `undefined` \| [`OperationalDevice`](../modules/common_export.md#operationaldevice)

Return already discovered addresses of an operational paired device and return them. Does not send out new
DNS-SD queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Fabric`](fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`undefined` \| [`OperationalDevice`](../modules/common_export.md#operationaldevice)

#### Implementation of

[Scanner](../interfaces/common_export.Scanner.md).[getDiscoveredOperationalDevice](../interfaces/common_export.Scanner.md#getdiscoveredoperationaldevice)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:391](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L391)

___

### getOperationalDeviceRecords

▸ **getOperationalDeviceRecords**(`deviceMatterQname`): `undefined` \| [`OperationalDevice`](../modules/common_export.md#operationaldevice)

Returns the list of all targets (IP/port) discovered for a queried operational device record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceMatterQname` | `string` |

#### Returns

`undefined` \| [`OperationalDevice`](../modules/common_export.md#operationaldevice)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:251](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L251)

___

### handleCommissionableRecords

▸ **handleCommissionableRecords**(`answers`, `formerAnswers`, `netInterface`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `answers` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[] |
| `formerAnswers` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[] |
| `netInterface` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:795](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L795)

___

### handleDnsMessage

▸ **handleDnsMessage**(`messageBytes`, `_remoteIp`, `netInterface`): `void`

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

[packages/matter.js/src/mdns/MdnsScanner.ts:628](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L628)

___

### handleIpRecords

▸ **handleIpRecords**(`answers`, `target`, `netInterface`): \{ `ttl`: `number` ; `value`: `string`  }[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `answers` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[] |
| `target` | `string` |
| `netInterface` | `string` |

#### Returns

\{ `ttl`: `number` ; `value`: `string`  }[]

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:644](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L644)

___

### handleOperationalRecords

▸ **handleOperationalRecords**(`answers`, `formerAnswers`, `netInterface`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `answers` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[] |
| `formerAnswers` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[] |
| `netInterface` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:660](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L660)

___

### handleOperationalSrvRecord

▸ **handleOperationalSrvRecord**(`record`, `answers`, `formerAnswers`, `netInterface`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\> |
| `answers` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[] |
| `formerAnswers` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[] |
| `netInterface` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:726](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L726)

___

### handleOperationalTxtRecord

▸ **handleOperationalTxtRecord**(`record`, `netInterface`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\> |
| `netInterface` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:686](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L686)

___

### hasWaiter

▸ **hasWaiter**(`queryId`): `boolean`

Returns weather a waiter promise is registered for a specific queryId.

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryId` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:338](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L338)

___

### parseCommissionableTxtRecord

▸ **parseCommissionableTxtRecord**(`record`): `undefined` \| [`CommissionableDeviceRecordWithExpire`](../modules/mdns_export._internal_.md#commissionabledevicerecordwithexpire)

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\> |

#### Returns

`undefined` \| [`CommissionableDeviceRecordWithExpire`](../modules/mdns_export._internal_.md#commissionabledevicerecordwithexpire)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:943](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L943)

___

### parseTxtRecord

▸ **parseTxtRecord**(`record`): `undefined` \| [`DiscoveryData`](../modules/common_export.md#discoverydata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\> |

#### Returns

`undefined` \| [`DiscoveryData`](../modules/common_export.md#discoverydata)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:924](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L924)

___

### registerWaiterPromise

▸ **registerWaiterPromise**(`queryId`, `timeoutSeconds?`, `resolveOnUpdatedRecords?`): `Promise`\<\{ `promise`: `Promise`\<`void`\>  }\>

Registers a deferred promise for a specific queryId together with a timeout and return the promise.
The promise will be resolved when the timer runs out latest.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `queryId` | `string` | `undefined` |
| `timeoutSeconds?` | `number` | `undefined` |
| `resolveOnUpdatedRecords` | `boolean` | `true` |

#### Returns

`Promise`\<\{ `promise`: `Promise`\<`void`\>  }\>

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:303](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L303)

___

### removeQuery

▸ **removeQuery**(`queryId`): `void`

Remove a query from the list of active queries because discovery has finished or timed out and stop sending it
out. If it was the last query announcing will stop completely.

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryId` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:237](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L237)

___

### sendQueries

▸ **sendQueries**(): `Promise`\<`void`\>

Sends out one DNS-SD query for all collected announce records and start a timer for the next query with doubled
interval, maximum 60min, as per MDNS specs. The already known answers are tried to be sent in the query as long
as they fit into a maximum 1500 byte long packet (as defined in MDNS specs), else they are split into more
packets and the query is sent as Truncated query.

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L129)

___

### setQueryRecords

▸ **setQueryRecords**(`queryId`, `queries`, `answers?`): `void`

Set new DnsQuery records to the list of active queries to discover devices in the network and start sending them
out. When entry already exists the query is overwritten and answers are always added.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `queryId` | `string` | `undefined` |
| `queries` | [`DnsQuery`](../modules/codec_export.md#dnsquery)[] | `undefined` |
| `answers` | [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[] | `[]` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L202)

___

### sortServerEntries

▸ **sortServerEntries**(`entries`): [`MatterServerRecordWithExpire`](../modules/mdns_export._internal_.md#matterserverrecordwithexpire)[]

Sort the list of found IP/ports and make sure link-local IPv6 addresses come first, IPv6 next and IPv4 last.

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries` | [`MatterServerRecordWithExpire`](../modules/mdns_export._internal_.md#matterserverrecordwithexpire)[] |

#### Returns

[`MatterServerRecordWithExpire`](../modules/mdns_export._internal_.md#matterserverrecordwithexpire)[]

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:275](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L275)

___

### create

▸ **create**(`network`, `options?`): `Promise`\<[`MdnsScanner`](mdns_export.MdnsScanner.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](net_export.Network.md) |
| `options?` | `Object` |
| `options.enableIpv4?` | `boolean` |
| `options.netInterface?` | `string` |

#### Returns

`Promise`\<[`MdnsScanner`](mdns_export.MdnsScanner.md)\>

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L79)

___

### deviceAddressDiagnostics

▸ **deviceAddressDiagnostics**(`addresses`): `Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `addresses` | `Map`\<`string`, [`MatterServerRecordWithExpire`](../modules/mdns_export._internal_.md#matterserverrecordwithexpire)\> |

#### Returns

`Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)[]

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:998](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L998)

___

### discoveryDataDiagnostics

▸ **discoveryDataDiagnostics**(`data`): `Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DiscoveryData`](../modules/common_export.md#discoverydata) |

#### Returns

`Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsScanner.ts:982](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsScanner.ts#L982)
