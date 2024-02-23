[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [mdns/export](../modules/mdns_export.md) / MdnsBroadcaster

# Class: MdnsBroadcaster

[mdns/export](../modules/mdns_export.md).MdnsBroadcaster

This class is handing MDNS Announcements for multiple instances/devices

## Table of contents

### Constructors

- [constructor](mdns_export.MdnsBroadcaster.md#constructor)

### Properties

- [activeCommissioningAnnouncements](mdns_export.MdnsBroadcaster.md#activecommissioningannouncements)
- [activeOperationalAnnouncements](mdns_export.MdnsBroadcaster.md#activeoperationalannouncements)
- [enableIpv4](mdns_export.MdnsBroadcaster.md#enableipv4)
- [mdnsServer](mdns_export.MdnsBroadcaster.md#mdnsserver)
- [network](mdns_export.MdnsBroadcaster.md#network)

### Methods

- [announce](mdns_export.MdnsBroadcaster.md#announce)
- [close](mdns_export.MdnsBroadcaster.md#close)
- [expireAllAnnouncements](mdns_export.MdnsBroadcaster.md#expireallannouncements)
- [expireCommissioningAnnouncement](mdns_export.MdnsBroadcaster.md#expirecommissioningannouncement)
- [expireFabricAnnouncement](mdns_export.MdnsBroadcaster.md#expirefabricannouncement)
- [getIpRecords](mdns_export.MdnsBroadcaster.md#getiprecords)
- [setCommissionMode](mdns_export.MdnsBroadcaster.md#setcommissionmode)
- [setCommissionerInfo](mdns_export.MdnsBroadcaster.md#setcommissionerinfo)
- [setFabrics](mdns_export.MdnsBroadcaster.md#setfabrics)
- [validatePairingInstructions](mdns_export.MdnsBroadcaster.md#validatepairinginstructions)
- [create](mdns_export.MdnsBroadcaster.md#create)

## Constructors

### constructor

• **new MdnsBroadcaster**(`mdnsServer`, `enableIpv4?`): [`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mdnsServer` | [`MdnsServer`](mdns_export.MdnsServer.md) |
| `enableIpv4?` | `boolean` |

#### Returns

[`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:70](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L70)

## Properties

### activeCommissioningAnnouncements

• `Private` `Readonly` **activeCommissioningAnnouncements**: `Set`\<`number`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:67](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L67)

___

### activeOperationalAnnouncements

• `Private` `Readonly` **activeOperationalAnnouncements**: `Map`\<`number`, [`FabricIndex`](../modules/datatype_export.md#fabricindex)[]\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:68](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L68)

___

### enableIpv4

• `Private` `Optional` `Readonly` **enableIpv4**: `boolean`

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:72](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L72)

___

### mdnsServer

• `Private` `Readonly` **mdnsServer**: [`MdnsServer`](mdns_export.MdnsServer.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:71](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L71)

___

### network

• `Private` `Readonly` **network**: [`Network`](net_export.Network.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:66](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L66)

## Methods

### announce

▸ **announce**(`announcementPort`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcementPort` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:327](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L327)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:356](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L356)

___

### expireAllAnnouncements

▸ **expireAllAnnouncements**(`announcementPort`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcementPort` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:345](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L345)

___

### expireCommissioningAnnouncement

▸ **expireCommissioningAnnouncement**(`announcementPort`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcementPort` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:338](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L338)

___

### expireFabricAnnouncement

▸ **expireFabricAnnouncement**(`announcementPort`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcementPort` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:331](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L331)

___

### getIpRecords

▸ **getIpRecords**(`hostname`, `ips`): [`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `hostname` | `string` |
| `ips` | `string`[] |

#### Returns

[`DnsRecord`](../modules/codec_export.md#dnsrecord)\<`any`\>[]

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:99](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L99)

___

### setCommissionMode

▸ **setCommissionMode**(`announcedNetPort`, `mode`, `«destructured»`): `Promise`\<`void`\>

Set the Broadcaster data to announce a device ready for commissioning in a special mode

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `mode` | `number` |
| `«destructured»` | [`CommissioningModeInstanceData`](../modules/common_export.md#commissioningmodeinstancedata) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:116](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L116)

___

### setCommissionerInfo

▸ **setCommissionerInfo**(`announcedNetPort`, `«destructured»`): `Promise`\<`void`\>

Set the Broadcaster data to announce a Commissioner (aka Commissioner discovery)

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `«destructured»` | [`CommissionerInstanceData`](../modules/common_export.md#commissionerinstancedata) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:269](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L269)

___

### setFabrics

▸ **setFabrics**(`announcedNetPort`, `fabrics`, `«destructured»?`): `Promise`\<`void`\>

Set the Broadcaster Data to announce a device for operative discovery (aka "already paired")

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `fabrics` | [`Fabric`](fabric_export.Fabric.md)[] |
| `«destructured»` | [`OperationalInstanceData`](../modules/common_export.md#operationalinstancedata) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:202](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L202)

___

### validatePairingInstructions

▸ **validatePairingInstructions**(`pairingHint`, `pairingInstructions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pairingHint` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `administrator`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `customInstruction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `deviceManual`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `deviceManufacturerUrl`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `powerCycle`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressResetButton`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressResetButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressResetButtonNumberOfTimes`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressResetButtonUntilLightBlinks`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressResetButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressResetButtonWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressRestButtonForNumberOfSeconds`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressSetupButton`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressSetupButtonForNumberOfSeconds`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressSetupButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressSetupButtonNumberOfTimes`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressSetupButtonUntilLightBlinks`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressSetupButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressSetupButtonWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `settingsMenuOnNode`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\> |
| `pairingInstructions` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:75](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L75)

___

### create

▸ **create**(`options?`): `Promise`\<[`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.enableIpv4?` | `boolean` |
| `options.multicastInterface?` | `string` |

#### Returns

`Promise`\<[`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:58](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L58)
