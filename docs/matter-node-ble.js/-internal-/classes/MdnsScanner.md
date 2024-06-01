[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / MdnsScanner

# Class: MdnsScanner

This class implements the Scanner interface for a MDNS scanner via UDP messages in a IP based network.
It sends out queries to discover various types of Matter device types and listens for announcements.

## Implements

- [`Scanner`](../interfaces/Scanner.md)

## Constructors

### new MdnsScanner()

> **new MdnsScanner**(`multicastServer`, `enableIpv4`?): [`MdnsScanner`](MdnsScanner.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `multicastServer` | [`UdpMulticastServer`](UdpMulticastServer.md) |
| `enableIpv4`? | `boolean` |

#### Returns

[`MdnsScanner`](MdnsScanner.md)

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:35

## Properties

### activeAnnounceQueries

> `private` `readonly` **activeAnnounceQueries**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:27

***

### buildCommissionableQueryIdentifier

> `private` **buildCommissionableQueryIdentifier**: `any`

Builds an identifier string for commissionable queries based on the given identifier object.
Some identifiers are identical to the official DNS-SD identifiers, others are custom.

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:95

***

### closing

> `private` **closing**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:34

***

### commissionableDeviceRecords

> `private` `readonly` **commissionableDeviceRecords**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:31

***

### createOperationalMatterQName

> `private` **createOperationalMatterQName**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:77

***

### enableIpv4?

> `private` `optional` `readonly` **enableIpv4**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:22

***

### expire

> `private` **expire**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:156

***

### extractInstanceId

> `private` **extractInstanceId**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:96

***

### findCommissionableQueryIdentifier

> `private` **findCommissionableQueryIdentifier**: `any`

Check all options for a query identifier and return the most relevant one with an active query

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:100

***

### finishWaiter

> `private` **finishWaiter**: `any`

Remove a waiter promise for a specific queryId and stop the connected timer. If required also resolve the
promise.

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:74

***

### getActiveQueryEarlierAnswers

> `private` **getActiveQueryEarlierAnswers**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:49

***

### getCommissionableDeviceRecords

> `private` **getCommissionableDeviceRecords**: `any`

Returns the metadata and list of all target addresses (IP/port) discovered for a queried commissionable device
record.

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:90

***

### getCommissionableQueryRecords

> `private` **getCommissionableQueryRecords**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:101

***

### getOperationalDeviceRecords

> `private` **getOperationalDeviceRecords**: `any`

Returns the list of all targets (IP/port) discovered for a queried operational device record.

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:58

***

### handleCommissionableRecords

> `private` **handleCommissionableRecords**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:153

***

### handleDnsMessage

> `private` **handleDnsMessage**: `any`

Main method to handle all incoming DNS messages.
It will parse the message and check if it contains relevant discovery records.

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:148

***

### handleIpRecords

> `private` **handleIpRecords**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:149

***

### handleOperationalRecords

> `private` **handleOperationalRecords**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:150

***

### handleOperationalSrvRecord

> `private` **handleOperationalSrvRecord**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:152

***

### handleOperationalTxtRecord

> `private` **handleOperationalTxtRecord**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:151

***

### hasWaiter

> `private` **hasWaiter**: `any`

Returns weather a waiter promise is registered for a specific queryId.

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:76

***

### multicastServer

> `private` `readonly` **multicastServer**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:21

***

### nextAnnounceIntervalSeconds

> `private` **nextAnnounceIntervalSeconds**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:29

***

### operationalDeviceRecords

> `private` `readonly` **operationalDeviceRecords**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:30

***

### parseCommissionableTxtRecord

> `private` **parseCommissionableTxtRecord**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:155

***

### parseTxtRecord

> `private` **parseTxtRecord**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:154

***

### periodicTimer

> `private` `readonly` **periodicTimer**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:33

***

### queryTimer?

> `private` `optional` **queryTimer**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:28

***

### recordWaiters

> `private` `readonly` **recordWaiters**: `any`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:32

***

### registerWaiterPromise

> `private` **registerWaiterPromise**: `any`

Registers a deferred promise for a specific queryId together with a timeout and return the promise.
The promise will be resolved when the timer runs out latest.

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:69

***

### removeQuery

> `private` **removeQuery**: `any`

Remove a query from the list of active queries because discovery has finished or timed out and stop sending it
out. If it was the last query announcing will stop completely.

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:54

***

### sendQueries

> `private` **sendQueries**: `any`

Sends out one DNS-SD query for all collected announce records and start a timer for the next query with doubled
interval, maximum 60min, as per MDNS specs. The already known answers are tried to be sent in the query as long
as they fit into a maximum 1500 byte long packet (as defined in MDNS specs), else they are split into more
packets and the query is sent as Truncated query.

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:43

***

### setQueryRecords

> `private` **setQueryRecords**: `any`

Set new DnsQuery records to the list of active queries to discover devices in the network and start sending them
out. When entry already exists the query is overwritten and answers are always added.

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:48

***

### sortServerEntries

> `private` **sortServerEntries**: `any`

Sort the list of found IP/ports and make sure link-local IPv6 addresses come first, IPv6 next and IPv4 last.

#### Param

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:64

## Methods

### cancelCommissionableDeviceDiscovery()

> **cancelCommissionableDeviceDiscovery**(`identifier`): `void`

Cancel a running discovery of commissionable devices. The waiter promises are resolved as if the timeout would
be over.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../README.md#commissionabledeviceidentifiers) |

#### Returns

`void`

#### Implementation of

[`Scanner`](../interfaces/Scanner.md).[`cancelCommissionableDeviceDiscovery`](../interfaces/Scanner.md#cancelcommissionabledevicediscovery)

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:84

***

### cancelOperationalDeviceDiscovery()

> **cancelOperationalDeviceDiscovery**(`fabric`, `nodeId`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](Fabric.md) |
| `nodeId` | [`NodeId`](../README.md#nodeid-5) |

#### Returns

`void`

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:83

***

### close()

> **close**(): `Promise`\<`void`\>

Close all connects, end all timers and resolve all pending promises.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Scanner`](../interfaces/Scanner.md).[`close`](../interfaces/Scanner.md#close)

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:143

***

### findCommissionableDevices()

> **findCommissionableDevices**(`identifier`, `timeoutSeconds`?, `ignoreExistingRecords`?): `Promise`\<[`CommissionableDevice`](../README.md#commissionabledevice)[]\>

Discovers commissionable devices based on a defined identifier for maximal given timeout, but returns the
first found entries. If already a discovered device matches in the cache the response is returned directly and
no query is triggered. If no record exists a query is sent out and the promise gets fulfilled as soon as at least
one device is found. If no device is discovered in the defined timeframe an empty array is returned. When the
promise got fulfilled no more queries are send out, but more device entries might be added when discovered later.
These can be requested by the getCommissionableDevices method.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../README.md#commissionabledeviceidentifiers) |
| `timeoutSeconds`? | `number` |
| `ignoreExistingRecords`? | `boolean` |

#### Returns

`Promise`\<[`CommissionableDevice`](../README.md#commissionabledevice)[]\>

#### Implementation of

[`Scanner`](../interfaces/Scanner.md).[`findCommissionableDevices`](../interfaces/Scanner.md#findcommissionabledevices)

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:110

***

### findCommissionableDevicesContinuously()

> **findCommissionableDevicesContinuously**(`identifier`, `callback`, `timeoutSeconds`?): `Promise`\<[`CommissionableDevice`](../README.md#commissionabledevice)[]\>

Discovers commissionable devices based on a defined identifier and returns the first found entries. If already a

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../README.md#commissionabledeviceidentifiers) |  |
| `callback` | (`device`) => `void` |  |
| `timeoutSeconds`? | `number` |  |

#### Returns

`Promise`\<[`CommissionableDevice`](../README.md#commissionabledevice)[]\>

#### Implementation of

[`Scanner`](../interfaces/Scanner.md).[`findCommissionableDevicesContinuously`](../interfaces/Scanner.md#findcommissionabledevicescontinuously)

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:117

***

### findOperationalDevice()

> **findOperationalDevice**(`__namedParameters`, `nodeId`, `timeoutSeconds`?, `ignoreExistingRecords`?): `Promise`\<`undefined` \| [`OperationalDevice`](../README.md#operationaldevice)\>

Method to find an operational device (already commissioned) and return a promise with the list of discovered
IP/ports or an empty array if not found.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`Fabric`](Fabric.md) |
| `nodeId` | [`NodeId`](../README.md#nodeid-5) |
| `timeoutSeconds`? | `number` |
| `ignoreExistingRecords`? | `boolean` |

#### Returns

`Promise`\<`undefined` \| [`OperationalDevice`](../README.md#operationaldevice)\>

#### Implementation of

[`Scanner`](../interfaces/Scanner.md).[`findOperationalDevice`](../interfaces/Scanner.md#findoperationaldevice)

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:82

***

### getDiscoveredCommissionableDevices()

> **getDiscoveredCommissionableDevices**(`identifier`): `object`[]

Return already discovered commissionable devices and return them. Does not send out new DNS-SD queries.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../README.md#commissionabledeviceidentifiers) |

#### Returns

`object`[]

#### Implementation of

[`Scanner`](../interfaces/Scanner.md).[`getDiscoveredCommissionableDevices`](../interfaces/Scanner.md#getdiscoveredcommissionabledevices)

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:118

***

### getDiscoveredOperationalDevice()

> **getDiscoveredOperationalDevice**(`__namedParameters`, `nodeId`): `undefined` \| [`OperationalDevice`](../README.md#operationaldevice)

Return already discovered addresses of an operational paired device and return them. Does not send out new
DNS-SD queries.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`Fabric`](Fabric.md) |
| `nodeId` | [`NodeId`](../README.md#nodeid-5) |

#### Returns

`undefined` \| [`OperationalDevice`](../README.md#operationaldevice)

#### Implementation of

[`Scanner`](../interfaces/Scanner.md).[`getDiscoveredOperationalDevice`](../interfaces/Scanner.md#getdiscoveredoperationaldevice)

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:85

***

### create()

> `static` **create**(`network`, `options`?): `Promise`\<[`MdnsScanner`](MdnsScanner.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `network` | [`Network`](Network.md) |
| `options`? | `object` |
| `options.enableIpv4`? | `boolean` |
| `options.netInterface`? | `string` |

#### Returns

`Promise`\<[`MdnsScanner`](MdnsScanner.md)\>

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:23

***

### deviceAddressDiagnostics()

> `static` **deviceAddressDiagnostics**(`addresses`): `Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/Diagnostic.md)[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `addresses` | `Map`\<`string`, [`MatterServerRecordWithExpire`](../README.md#matterserverrecordwithexpire)\> |

#### Returns

`Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/Diagnostic.md)[]

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:158

***

### discoveryDataDiagnostics()

> `static` **discoveryDataDiagnostics**(`data`): `Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/Diagnostic.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`DiscoveryData`](../README.md#discoverydata) |

#### Returns

`Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/Diagnostic.md)

#### Source

matter.js/dist/esm/mdns/MdnsScanner.d.ts:157
