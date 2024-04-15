[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [mdns/export](../modules/mdns_export.md) / MdnsBroadcaster

# Class: MdnsBroadcaster

[mdns/export](../modules/mdns_export.md).MdnsBroadcaster

This class is handing MDNS Announcements for multiple instances/devices

## Table of contents

### Constructors

- [constructor](mdns_export.MdnsBroadcaster.md#constructor)

### Properties

- [#activeCommissioningAnnouncements](mdns_export.MdnsBroadcaster.md##activecommissioningannouncements)
- [#activeOperationalAnnouncements](mdns_export.MdnsBroadcaster.md##activeoperationalannouncements)
- [#enableIpv4](mdns_export.MdnsBroadcaster.md##enableipv4)
- [#instances](mdns_export.MdnsBroadcaster.md##instances)
- [#mdnsServer](mdns_export.MdnsBroadcaster.md##mdnsserver)
- [#network](mdns_export.MdnsBroadcaster.md##network)

### Methods

- [announce](mdns_export.MdnsBroadcaster.md#announce)
- [close](mdns_export.MdnsBroadcaster.md#close)
- [createInstanceBroadcaster](mdns_export.MdnsBroadcaster.md#createinstancebroadcaster)
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

• **new MdnsBroadcaster**(`network`, `mdnsServer`, `enableIpv4?`): [`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](net_export.Network.md) |
| `mdnsServer` | [`MdnsServer`](mdns_export.MdnsServer.md) |
| `enableIpv4?` | `boolean` |

#### Returns

[`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L77)

## Properties

### #activeCommissioningAnnouncements

• `Private` `Readonly` **#activeCommissioningAnnouncements**: `Set`\<`number`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L61)

___

### #activeOperationalAnnouncements

• `Private` `Readonly` **#activeOperationalAnnouncements**: `Map`\<`number`, [`FabricIndex`](../modules/datatype_export.md#fabricindex)[]\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L62)

___

### #enableIpv4

• `Private` `Optional` `Readonly` **#enableIpv4**: `boolean`

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L65)

___

### #instances

• `Private` `Readonly` **#instances**: [`BasicSet`](util_export.BasicSet.md)\<[`MdnsInstanceBroadcaster`](node_export._internal_.MdnsInstanceBroadcaster.md), [`MdnsInstanceBroadcaster`](node_export._internal_.MdnsInstanceBroadcaster.md)\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L66)

___

### #mdnsServer

• `Private` `Readonly` **#mdnsServer**: [`MdnsServer`](mdns_export.MdnsServer.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L64)

___

### #network

• `Private` `Readonly` **#network**: [`Network`](net_export.Network.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:63](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L63)

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

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:344](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L344)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:373](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L373)

___

### createInstanceBroadcaster

▸ **createInstanceBroadcaster**(`port`): [`MdnsInstanceBroadcaster`](node_export._internal_.MdnsInstanceBroadcaster.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |

#### Returns

[`MdnsInstanceBroadcaster`](node_export._internal_.MdnsInstanceBroadcaster.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L83)

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

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:362](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L362)

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

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:355](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L355)

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

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:348](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L348)

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

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:116](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L116)

___

### setCommissionMode

▸ **setCommissionMode**(`announcedNetPort`, `mode`, `«destructured»`): `Promise`\<`void`\>

Set the Broadcaster data to announce a device ready for commissioning in a special mode

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `mode` | `number` |
| `«destructured»` | [`CommissioningModeInstanceData`](../interfaces/common_export.CommissioningModeInstanceData.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:133](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L133)

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

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:286](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L286)

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

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:219](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L219)

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

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L92)

___

### create

▸ **create**(`network`, `options?`): `Promise`\<[`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](net_export.Network.md) |
| `options?` | `Object` |
| `options.enableIpv4?` | `boolean` |
| `options.multicastInterface?` | `string` |

#### Returns

`Promise`\<[`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L68)
