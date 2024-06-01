[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [mdns/export](../README.md) / MdnsScanner

# Class: MdnsScanner

This class implements the Scanner interface for a MDNS scanner via UDP messages in a IP based network.
It sends out queries to discover various types of Matter device types and listens for announcements.

## Implements

- [`Scanner`](../../../common/export/interfaces/Scanner.md)

## Constructors

### new MdnsScanner()

> **new MdnsScanner**(`multicastServer`, `enableIpv4`?): [`MdnsScanner`](MdnsScanner.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `multicastServer` | [`UdpMulticastServer`](../../../net/export/classes/UdpMulticastServer.md) |
| `enableIpv4`? | `boolean` |

#### Returns

[`MdnsScanner`](MdnsScanner.md)

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:110](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L110)

## Properties

### activeAnnounceQueries

> `private` `readonly` **activeAnnounceQueries**: `Map`\<`string`, `object`\>

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L93)

***

### closing

> `private` **closing**: `boolean` = `false`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:108](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L108)

***

### commissionableDeviceRecords

> `private` `readonly` **commissionableDeviceRecords**: `Map`\<`string`, [`CommissionableDeviceRecordWithExpire`](../-internal-/README.md#commissionabledevicerecordwithexpire)\>

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:98](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L98)

***

### enableIpv4?

> `private` `optional` `readonly` **enableIpv4**: `boolean`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L112)

***

### multicastServer

> `private` `readonly` **multicastServer**: [`UdpMulticastServer`](../../../net/export/classes/UdpMulticastServer.md)

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L111)

***

### nextAnnounceIntervalSeconds

> `private` **nextAnnounceIntervalSeconds**: `number` = `START_ANNOUNCE_INTERVAL_SECONDS`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L95)

***

### operationalDeviceRecords

> `private` `readonly` **operationalDeviceRecords**: `Map`\<`string`, [`OperationalDeviceRecordWithExpire`](../-internal-/README.md#operationaldevicerecordwithexpire)\>

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:97](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L97)

***

### periodicTimer

> `private` `readonly` **periodicTimer**: [`Timer`](../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:107](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L107)

***

### queryTimer?

> `private` `optional` **queryTimer**: [`Timer`](../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L94)

***

### recordWaiters

> `private` `readonly` **recordWaiters**: `Map`\<`string`, `object`\>

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L99)

## Methods

### buildCommissionableQueryIdentifier()

> `private` **buildCommissionableQueryIdentifier**(`identifier`): `string`

Builds an identifier string for commissionable queries based on the given identifier object.
Some identifiers are identical to the official DNS-SD identifiers, others are custom.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../../../common/export/README.md#commissionabledeviceidentifiers) |

#### Returns

`string`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:436](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L436)

***

### cancelCommissionableDeviceDiscovery()

> **cancelCommissionableDeviceDiscovery**(`identifier`): `void`

Cancel a running discovery of commissionable devices. The waiter promises are resolved as if the timeout would
be over.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../../../common/export/README.md#commissionabledeviceidentifiers) |

#### Returns

`void`

#### Implementation of

[`Scanner`](../../../common/export/interfaces/Scanner.md).[`cancelCommissionableDeviceDiscovery`](../../../common/export/interfaces/Scanner.md#cancelcommissionabledevicediscovery)

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:386](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L386)

***

### cancelOperationalDeviceDiscovery()

> **cancelOperationalDeviceDiscovery**(`fabric`, `nodeId`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

`void`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:381](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L381)

***

### close()

> **close**(): `Promise`\<`void`\>

Close all connects, end all timers and resolve all pending promises.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Scanner`](../../../common/export/interfaces/Scanner.md).[`close`](../../../common/export/interfaces/Scanner.md#close)

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:613](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L613)

***

### createOperationalMatterQName()

> `private` **createOperationalMatterQName**(`operationalId`, `nodeId`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `operationalId` | `Uint8Array` |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

`string`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:342](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L342)

***

### expire()

> `private` **expire**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:955](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L955)

***

### extractInstanceId()

> `private` **extractInstanceId**(`instanceName`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `instanceName` | `string` |

#### Returns

`string`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:456](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L456)

***

### findCommissionableDevices()

> **findCommissionableDevices**(`identifier`, `timeoutSeconds`, `ignoreExistingRecords`): `Promise`\<[`CommissionableDevice`](../../../common/export/README.md#commissionabledevice)[]\>

Discovers commissionable devices based on a defined identifier for maximal given timeout, but returns the
first found entries. If already a discovered device matches in the cache the response is returned directly and
no query is triggered. If no record exists a query is sent out and the promise gets fulfilled as soon as at least
one device is found. If no device is discovered in the defined timeframe an empty array is returned. When the
promise got fulfilled no more queries are send out, but more device entries might be added when discovered later.
These can be requested by the getCommissionableDevices method.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../../../common/export/README.md#commissionabledeviceidentifiers) | `undefined` |
| `timeoutSeconds` | `number` | `5` |
| `ignoreExistingRecords` | `boolean` | `false` |

#### Returns

`Promise`\<[`CommissionableDevice`](../../../common/export/README.md#commissionabledevice)[]\>

#### Implementation of

[`Scanner`](../../../common/export/interfaces/Scanner.md).[`findCommissionableDevices`](../../../common/export/interfaces/Scanner.md#findcommissionabledevices)

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:548](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L548)

***

### findCommissionableDevicesContinuously()

> **findCommissionableDevicesContinuously**(`identifier`, `callback`, `timeoutSeconds`): `Promise`\<[`CommissionableDevice`](../../../common/export/README.md#commissionabledevice)[]\>

Discovers commissionable devices based on a defined identifier and returns the first found entries. If already a

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../../../common/export/README.md#commissionabledeviceidentifiers) | `undefined` |  |
| `callback` | (`device`) => `void` | `undefined` |  |
| `timeoutSeconds` | `number` | `900` |  |

#### Returns

`Promise`\<[`CommissionableDevice`](../../../common/export/README.md#commissionabledevice)[]\>

#### Implementation of

[`Scanner`](../../../common/export/interfaces/Scanner.md).[`findCommissionableDevicesContinuously`](../../../common/export/interfaces/Scanner.md#findcommissionabledevicescontinuously)

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:576](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L576)

***

### findCommissionableQueryIdentifier()

> `private` **findCommissionableQueryIdentifier**(`instanceName`, `record`): `undefined` \| `string`

Check all options for a query identifier and return the most relevant one with an active query

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `instanceName` | `string` |
| `record` | [`CommissionableDeviceRecordWithExpire`](../-internal-/README.md#commissionabledevicerecordwithexpire) |

#### Returns

`undefined` \| `string`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:467](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L467)

***

### findOperationalDevice()

> **findOperationalDevice**(`__namedParameters`, `nodeId`, `timeoutSeconds`?, `ignoreExistingRecords`?): `Promise`\<`undefined` \| [`OperationalDevice`](../../../common/export/README.md#operationaldevice)\>

Method to find an operational device (already commissioned) and return a promise with the list of discovered
IP/ports or an empty array if not found.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `__namedParameters` | [`Fabric`](../../../fabric/export/classes/Fabric.md) | `undefined` |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) | `undefined` |
| `timeoutSeconds`? | `number` | `undefined` |
| `ignoreExistingRecords`? | `boolean` | `false` |

#### Returns

`Promise`\<`undefined` \| [`OperationalDevice`](../../../common/export/README.md#operationaldevice)\>

#### Implementation of

[`Scanner`](../../../common/export/interfaces/Scanner.md).[`findOperationalDevice`](../../../common/export/interfaces/Scanner.md#findoperationaldevice)

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:351](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L351)

***

### finishWaiter()

> `private` **finishWaiter**(`queryId`, `resolvePromise`, `isUpdatedRecord`): `void`

Remove a waiter promise for a specific queryId and stop the connected timer. If required also resolve the
promise.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `queryId` | `string` | `undefined` |
| `resolvePromise` | `boolean` | `undefined` |
| `isUpdatedRecord` | `boolean` | `false` |

#### Returns

`void`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:322](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L322)

***

### getActiveQueryEarlierAnswers()

> `private` **getActiveQueryEarlierAnswers**(): [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\>[]

#### Returns

[`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\>[]

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:229](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L229)

***

### getCommissionableDeviceRecords()

> `private` **getCommissionableDeviceRecords**(`identifier`): `object`[]

Returns the metadata and list of all target addresses (IP/port) discovered for a queried commissionable device
record.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../../../common/export/README.md#commissionabledeviceidentifiers) |

#### Returns

`object`[]

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:399](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L399)

***

### getCommissionableQueryRecords()

> `private` **getCommissionableQueryRecords**(`identifier`): [`DnsQuery`](../../../codec/export/README.md#dnsquery)[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../../../common/export/README.md#commissionabledeviceidentifiers) |

#### Returns

[`DnsQuery`](../../../codec/export/README.md#dnsquery)[]

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:517](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L517)

***

### getDiscoveredCommissionableDevices()

> **getDiscoveredCommissionableDevices**(`identifier`): `object`[]

Return already discovered commissionable devices and return them. Does not send out new DNS-SD queries.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../../../common/export/README.md#commissionabledeviceidentifiers) |

#### Returns

`object`[]

#### Implementation of

[`Scanner`](../../../common/export/interfaces/Scanner.md).[`getDiscoveredCommissionableDevices`](../../../common/export/interfaces/Scanner.md#getdiscoveredcommissionabledevices)

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:606](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L606)

***

### getDiscoveredOperationalDevice()

> **getDiscoveredOperationalDevice**(`__namedParameters`, `nodeId`): `undefined` \| [`OperationalDevice`](../../../common/export/README.md#operationaldevice)

Return already discovered addresses of an operational paired device and return them. Does not send out new
DNS-SD queries.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

`undefined` \| [`OperationalDevice`](../../../common/export/README.md#operationaldevice)

#### Implementation of

[`Scanner`](../../../common/export/interfaces/Scanner.md).[`getDiscoveredOperationalDevice`](../../../common/export/interfaces/Scanner.md#getdiscoveredoperationaldevice)

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:391](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L391)

***

### getOperationalDeviceRecords()

> `private` **getOperationalDeviceRecords**(`deviceMatterQname`): `undefined` \| [`OperationalDevice`](../../../common/export/README.md#operationaldevice)

Returns the list of all targets (IP/port) discovered for a queried operational device record.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `deviceMatterQname` | `string` |

#### Returns

`undefined` \| [`OperationalDevice`](../../../common/export/README.md#operationaldevice)

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:251](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L251)

***

### handleCommissionableRecords()

> `private` **handleCommissionableRecords**(`answers`, `formerAnswers`, `netInterface`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `answers` | [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\>[] |
| `formerAnswers` | [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\>[] |
| `netInterface` | `string` |

#### Returns

`void`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:795](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L795)

***

### handleDnsMessage()

> `private` **handleDnsMessage**(`messageBytes`, `_remoteIp`, `netInterface`): `void`

Main method to handle all incoming DNS messages.
It will parse the message and check if it contains relevant discovery records.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageBytes` | `Uint8Array` |
| `_remoteIp` | `string` |
| `netInterface` | `string` |

#### Returns

`void`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:628](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L628)

***

### handleIpRecords()

> `private` **handleIpRecords**(`answers`, `target`, `netInterface`): `object`[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `answers` | [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\>[] |
| `target` | `string` |
| `netInterface` | `string` |

#### Returns

`object`[]

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:644](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L644)

***

### handleOperationalRecords()

> `private` **handleOperationalRecords**(`answers`, `formerAnswers`, `netInterface`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `answers` | [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\>[] |
| `formerAnswers` | [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\>[] |
| `netInterface` | `string` |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:660](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L660)

***

### handleOperationalSrvRecord()

> `private` **handleOperationalSrvRecord**(`record`, `answers`, `formerAnswers`, `netInterface`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `record` | [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\> |
| `answers` | [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\>[] |
| `formerAnswers` | [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\>[] |
| `netInterface` | `string` |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:726](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L726)

***

### handleOperationalTxtRecord()

> `private` **handleOperationalTxtRecord**(`record`, `netInterface`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `record` | [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\> |
| `netInterface` | `string` |

#### Returns

`void`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:686](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L686)

***

### hasWaiter()

> `private` **hasWaiter**(`queryId`): `boolean`

Returns weather a waiter promise is registered for a specific queryId.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `queryId` | `string` |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:338](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L338)

***

### parseCommissionableTxtRecord()

> `private` **parseCommissionableTxtRecord**(`record`): `undefined` \| [`CommissionableDeviceRecordWithExpire`](../-internal-/README.md#commissionabledevicerecordwithexpire)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `record` | [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\> |

#### Returns

`undefined` \| [`CommissionableDeviceRecordWithExpire`](../-internal-/README.md#commissionabledevicerecordwithexpire)

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:943](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L943)

***

### parseTxtRecord()

> `private` **parseTxtRecord**(`record`): `undefined` \| [`DiscoveryData`](../../../common/export/README.md#discoverydata)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `record` | [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\> |

#### Returns

`undefined` \| [`DiscoveryData`](../../../common/export/README.md#discoverydata)

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:924](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L924)

***

### registerWaiterPromise()

> `private` **registerWaiterPromise**(`queryId`, `timeoutSeconds`?, `resolveOnUpdatedRecords`?): `Promise`\<`object`\>

Registers a deferred promise for a specific queryId together with a timeout and return the promise.
The promise will be resolved when the timer runs out latest.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `queryId` | `string` | `undefined` |
| `timeoutSeconds`? | `number` | `undefined` |
| `resolveOnUpdatedRecords`? | `boolean` | `true` |

#### Returns

`Promise`\<`object`\>

##### promise

> **promise**: `Promise`\<`void`\>

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:303](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L303)

***

### removeQuery()

> `private` **removeQuery**(`queryId`): `void`

Remove a query from the list of active queries because discovery has finished or timed out and stop sending it
out. If it was the last query announcing will stop completely.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `queryId` | `string` |

#### Returns

`void`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:237](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L237)

***

### sendQueries()

> `private` **sendQueries**(): `Promise`\<`void`\>

Sends out one DNS-SD query for all collected announce records and start a timer for the next query with doubled
interval, maximum 60min, as per MDNS specs. The already known answers are tried to be sent in the query as long
as they fit into a maximum 1500 byte long packet (as defined in MDNS specs), else they are split into more
packets and the query is sent as Truncated query.

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L129)

***

### setQueryRecords()

> `private` **setQueryRecords**(`queryId`, `queries`, `answers`): `void`

Set new DnsQuery records to the list of active queries to discover devices in the network and start sending them
out. When entry already exists the query is overwritten and answers are always added.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `queryId` | `string` | `undefined` |
| `queries` | [`DnsQuery`](../../../codec/export/README.md#dnsquery)[] | `undefined` |
| `answers` | [`DnsRecord`](../../../codec/export/README.md#dnsrecordt)\<`any`\>[] | `[]` |

#### Returns

`void`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:202](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L202)

***

### sortServerEntries()

> `private` **sortServerEntries**(`entries`): [`MatterServerRecordWithExpire`](../-internal-/README.md#matterserverrecordwithexpire)[]

Sort the list of found IP/ports and make sure link-local IPv6 addresses come first, IPv6 next and IPv4 last.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `entries` | [`MatterServerRecordWithExpire`](../-internal-/README.md#matterserverrecordwithexpire)[] |  |

#### Returns

[`MatterServerRecordWithExpire`](../-internal-/README.md#matterserverrecordwithexpire)[]

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:275](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L275)

***

### create()

> `static` **create**(`network`, `options`?): `Promise`\<[`MdnsScanner`](MdnsScanner.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `network` | [`Network`](../../../net/export/classes/Network.md) |
| `options`? | `object` |
| `options.enableIpv4`? | `boolean` |
| `options.netInterface`? | `string` |

#### Returns

`Promise`\<[`MdnsScanner`](MdnsScanner.md)\>

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L79)

***

### deviceAddressDiagnostics()

> `static` **deviceAddressDiagnostics**(`addresses`): `Record`\<`string`, `unknown`\> & [`Diagnostic`](../../../log/export/interfaces/Diagnostic.md)[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `addresses` | `Map`\<`string`, [`MatterServerRecordWithExpire`](../-internal-/README.md#matterserverrecordwithexpire)\> |

#### Returns

`Record`\<`string`, `unknown`\> & [`Diagnostic`](../../../log/export/interfaces/Diagnostic.md)[]

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:998](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L998)

***

### discoveryDataDiagnostics()

> `static` **discoveryDataDiagnostics**(`data`): `Record`\<`string`, `unknown`\> & [`Diagnostic`](../../../log/export/interfaces/Diagnostic.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`DiscoveryData`](../../../common/export/README.md#discoverydata) |

#### Returns

`Record`\<`string`, `unknown`\> & [`Diagnostic`](../../../log/export/interfaces/Diagnostic.md)

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:982](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L982)
