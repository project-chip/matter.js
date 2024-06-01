[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [mdns/export](../README.md) / \<internal\>

# \<internal\>

## Type Aliases

### CommissionableDeviceRecordWithExpire

> **CommissionableDeviceRecordWithExpire**: `Omit`\<[`CommissionableDevice`](../../../common/export/README.md#commissionabledevice), `"addresses"`\> & `object`

#### Type declaration

##### P?

> `optional` **P**: `number`

##### SD

> **SD**: `number`

##### V?

> `optional` **V**: `number`

##### addresses

> **addresses**: `Map`\<`string`, [`MatterServerRecordWithExpire`](README.md#matterserverrecordwithexpire)\>

##### expires

> **expires**: `number`

##### instanceId

> **instanceId**: `string`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L57)

***

### MatterServerRecordWithExpire

> **MatterServerRecordWithExpire**: [`ServerAddressIp`](../../../common/export/README.md#serveraddressip) & `object`

#### Type declaration

##### expires

> **expires**: `number`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L53)

***

### OperationalDeviceRecordWithExpire

> **OperationalDeviceRecordWithExpire**: `Omit`\<[`OperationalDevice`](../../../common/export/README.md#operationaldevice), `"addresses"`\> & `object`

#### Type declaration

##### addresses

> **addresses**: `Map`\<`string`, [`MatterServerRecordWithExpire`](README.md#matterserverrecordwithexpire)\>

##### expires

> **expires**: `number`

#### Source

[packages/matter.js/src/mdns/MdnsScanner.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsScanner.ts#L66)
