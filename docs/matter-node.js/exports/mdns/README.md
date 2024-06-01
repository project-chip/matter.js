[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / exports/mdns

# exports/mdns

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

packages/matter.js/dist/esm/mdns/MdnsConsts.d.ts:9

***

### MATTER\_COMMISSION\_SERVICE\_QNAME

> `const` **MATTER\_COMMISSION\_SERVICE\_QNAME**: `"_matterc._udp.local"` = `"_matterc._udp.local"`

#### Source

packages/matter.js/dist/esm/mdns/MdnsConsts.d.ts:8

***

### MATTER\_SERVICE\_QNAME

> `const` **MATTER\_SERVICE\_QNAME**: `"_matter._tcp.local"` = `"_matter._tcp.local"`

#### Source

packages/matter.js/dist/esm/mdns/MdnsConsts.d.ts:10

***

### MDNS\_BROADCAST\_IPV4

> `const` **MDNS\_BROADCAST\_IPV4**: `"224.0.0.251"` = `"224.0.0.251"`

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:9

***

### MDNS\_BROADCAST\_IPV6

> `const` **MDNS\_BROADCAST\_IPV6**: `"ff02::fb"` = `"ff02::fb"`

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:10

***

### MDNS\_BROADCAST\_PORT

> `const` **MDNS\_BROADCAST\_PORT**: `5353` = `5353`

#### Source

packages/matter.js/dist/esm/mdns/MdnsServer.d.ts:11

***

### SERVICE\_DISCOVERY\_QNAME

> `const` **SERVICE\_DISCOVERY\_QNAME**: `"_services._dns-sd._udp.local"` = `"_services._dns-sd._udp.local"`

#### Source

packages/matter.js/dist/esm/mdns/MdnsConsts.d.ts:7

## Functions

### getCommissioningModeQname()

> **getCommissioningModeQname**(): `string`

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/mdns/MdnsConsts.d.ts:17

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

packages/matter.js/dist/esm/mdns/MdnsConsts.d.ts:18

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

packages/matter.js/dist/esm/mdns/MdnsConsts.d.ts:12

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

packages/matter.js/dist/esm/mdns/MdnsConsts.d.ts:14

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

packages/matter.js/dist/esm/mdns/MdnsConsts.d.ts:11

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

packages/matter.js/dist/esm/mdns/MdnsConsts.d.ts:16

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

packages/matter.js/dist/esm/mdns/MdnsConsts.d.ts:15

***

### getVendorQname()

> **getVendorQname**(`vendorId`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `vendorId` | [`VendorId`](../datatype/README.md#vendorid) |

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/mdns/MdnsConsts.d.ts:13
