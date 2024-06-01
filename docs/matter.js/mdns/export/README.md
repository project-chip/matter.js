[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / mdns/export

# mdns/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Enumerations

- [AnnouncementType](enumerations/AnnouncementType.md)

### Classes

- [MdnsBroadcaster](classes/MdnsBroadcaster.md)
- [MdnsScanner](classes/MdnsScanner.md)
- [MdnsServer](classes/MdnsServer.md)

## Variables

### MATTER\_COMMISSIONER\_SERVICE\_QNAME

> `const` **MATTER\_COMMISSIONER\_SERVICE\_QNAME**: `"_matterd._udp.local"` = `"_matterd._udp.local"`

#### Source

[packages/matter.js/src/mdns/MdnsConsts.ts:11](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsConsts.ts#L11)

***

### MATTER\_COMMISSION\_SERVICE\_QNAME

> `const` **MATTER\_COMMISSION\_SERVICE\_QNAME**: `"_matterc._udp.local"` = `"_matterc._udp.local"`

#### Source

[packages/matter.js/src/mdns/MdnsConsts.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsConsts.ts#L10)

***

### MATTER\_SERVICE\_QNAME

> `const` **MATTER\_SERVICE\_QNAME**: `"_matter._tcp.local"` = `"_matter._tcp.local"`

#### Source

[packages/matter.js/src/mdns/MdnsConsts.ts:12](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsConsts.ts#L12)

***

### MDNS\_BROADCAST\_IPV4

> `const` **MDNS\_BROADCAST\_IPV4**: `"224.0.0.251"` = `"224.0.0.251"`

#### Source

[packages/matter.js/src/mdns/MdnsServer.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L27)

***

### MDNS\_BROADCAST\_IPV6

> `const` **MDNS\_BROADCAST\_IPV6**: `"ff02::fb"` = `"ff02::fb"`

#### Source

[packages/matter.js/src/mdns/MdnsServer.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L28)

***

### MDNS\_BROADCAST\_PORT

> `const` **MDNS\_BROADCAST\_PORT**: `5353` = `5353`

#### Source

[packages/matter.js/src/mdns/MdnsServer.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsServer.ts#L29)

***

### SERVICE\_DISCOVERY\_QNAME

> `const` **SERVICE\_DISCOVERY\_QNAME**: `"_services._dns-sd._udp.local"` = `"_services._dns-sd._udp.local"`

#### Source

[packages/matter.js/src/mdns/MdnsConsts.ts:9](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsConsts.ts#L9)

## Functions

### getCommissioningModeQname()

> **getCommissioningModeQname**(): `string`

#### Returns

`string`

#### Source

[packages/matter.js/src/mdns/MdnsConsts.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsConsts.ts#L23)

***

### getDeviceInstanceQname()

> **getDeviceInstanceQname**(`instanceId`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `instanceId` | `string` |

#### Returns

`string`

#### Source

[packages/matter.js/src/mdns/MdnsConsts.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsConsts.ts#L24)

***

### getDeviceMatterQname()

> **getDeviceMatterQname**(`operationalIdString`, `nodeIdString`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `operationalIdString` | `string` |
| `nodeIdString` | `string` |

#### Returns

`string`

#### Source

[packages/matter.js/src/mdns/MdnsConsts.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsConsts.ts#L15)

***

### getDeviceTypeQname()

> **getDeviceTypeQname**(`deviceType`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `deviceType` | `number` |

#### Returns

`string`

#### Source

[packages/matter.js/src/mdns/MdnsConsts.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsConsts.ts#L18)

***

### getFabricQname()

> **getFabricQname**(`operationalIdString`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `operationalIdString` | `string` |

#### Returns

`string`

#### Source

[packages/matter.js/src/mdns/MdnsConsts.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsConsts.ts#L14)

***

### getLongDiscriminatorQname()

> **getLongDiscriminatorQname**(`longDiscriminator`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `longDiscriminator` | `number` |

#### Returns

`string`

#### Source

[packages/matter.js/src/mdns/MdnsConsts.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsConsts.ts#L21)

***

### getShortDiscriminatorQname()

> **getShortDiscriminatorQname**(`shortDiscriminator`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `shortDiscriminator` | `number` |

#### Returns

`string`

#### Source

[packages/matter.js/src/mdns/MdnsConsts.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsConsts.ts#L19)

***

### getVendorQname()

> **getVendorQname**(`vendorId`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `vendorId` | [`VendorId`](../../datatype/export/README.md#vendorid) |

#### Returns

`string`

#### Source

[packages/matter.js/src/mdns/MdnsConsts.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/mdns/MdnsConsts.ts#L17)
