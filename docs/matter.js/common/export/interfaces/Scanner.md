[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [common/export](../README.md) / Scanner

# Interface: Scanner

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

#### Source

[packages/matter.js/src/common/Scanner.ts:153](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Scanner.ts#L153)

***

### close()

> **close**(): `void`

Close the scanner server and free resources.

#### Returns

`void`

#### Source

[packages/matter.js/src/common/Scanner.ts:156](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Scanner.ts#L156)

***

### findCommissionableDevices()

> **findCommissionableDevices**(`identifier`, `timeoutSeconds`?, `ignoreExistingRecords`?): `Promise`\<[`CommissionableDevice`](../README.md#commissionabledevice)[]\>

Send DNS-SD queries to discover commissionable devices by a provided identifier (e.g. discriminator,
vendorId, etc.) and returns as soon as minimum one was found or the timeout is over.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../README.md#commissionabledeviceidentifiers) |
| `timeoutSeconds`? | `number` |
| `ignoreExistingRecords`? | `boolean` |

#### Returns

`Promise`\<[`CommissionableDevice`](../README.md#commissionabledevice)[]\>

#### Source

[packages/matter.js/src/common/Scanner.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Scanner.ts#L129)

***

### findCommissionableDevicesContinuously()

> **findCommissionableDevicesContinuously**(`identifier`, `callback`, `timeoutSeconds`?): `Promise`\<[`CommissionableDevice`](../README.md#commissionabledevice)[]\>

Send DNS-SD queries to discover commissionable devices by a provided identifier (e.g. discriminator,
vendorId, etc.) and returns after the timeout is over. For each new discovered device the provided callback is
called when it is discovered.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../README.md#commissionabledeviceidentifiers) |
| `callback` | (`device`) => `void` |
| `timeoutSeconds`? | `number` |

#### Returns

`Promise`\<[`CommissionableDevice`](../README.md#commissionabledevice)[]\>

#### Source

[packages/matter.js/src/common/Scanner.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Scanner.ts#L140)

***

### findOperationalDevice()

> **findOperationalDevice**(`fabric`, `nodeId`, `timeoutSeconds`?, `ignoreExistingRecords`?): `Promise`\<`undefined` \| [`OperationalDevice`](../README.md#operationaldevice)\>

Send DNS-SD queries to discover the current addresses of an operational paired device by its operational ID
and return them.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `timeoutSeconds`? | `number` |
| `ignoreExistingRecords`? | `boolean` |

#### Returns

`Promise`\<`undefined` \| [`OperationalDevice`](../README.md#operationaldevice)\>

#### Source

[packages/matter.js/src/common/Scanner.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Scanner.ts#L112)

***

### getDiscoveredCommissionableDevices()

> **getDiscoveredCommissionableDevices**(`identifier`): [`CommissionableDevice`](../README.md#commissionabledevice)[]

Return already discovered commissionable devices and return them. Does not send out new DNS-SD queries.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../README.md#commissionabledeviceidentifiers) |

#### Returns

[`CommissionableDevice`](../README.md#commissionabledevice)[]

#### Source

[packages/matter.js/src/common/Scanner.ts:147](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Scanner.ts#L147)

***

### getDiscoveredOperationalDevice()

> **getDiscoveredOperationalDevice**(`fabric`, `nodeId`): `undefined` \| [`OperationalDevice`](../README.md#operationaldevice)

Return already discovered addresses of an operational paired device and return them. Does not send out new
DNS-SD queries.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

`undefined` \| [`OperationalDevice`](../README.md#operationaldevice)

#### Source

[packages/matter.js/src/common/Scanner.ts:123](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Scanner.ts#L123)
