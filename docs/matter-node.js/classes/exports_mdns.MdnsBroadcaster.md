[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/mdns](../modules/exports_mdns.md) / MdnsBroadcaster

# Class: MdnsBroadcaster

[exports/mdns](../modules/exports_mdns.md).MdnsBroadcaster

This class is handing MDNS Announcements for multiple instances/devices

## Table of contents

### Constructors

- [constructor](exports_mdns.MdnsBroadcaster.md#constructor)

### Properties

- [activeCommissioningAnnouncements](exports_mdns.MdnsBroadcaster.md#activecommissioningannouncements)
- [activeOperationalAnnouncements](exports_mdns.MdnsBroadcaster.md#activeoperationalannouncements)
- [enableIpv4](exports_mdns.MdnsBroadcaster.md#enableipv4)
- [getIpRecords](exports_mdns.MdnsBroadcaster.md#getiprecords)
- [mdnsServer](exports_mdns.MdnsBroadcaster.md#mdnsserver)
- [network](exports_mdns.MdnsBroadcaster.md#network)

### Methods

- [announce](exports_mdns.MdnsBroadcaster.md#announce)
- [close](exports_mdns.MdnsBroadcaster.md#close)
- [expireAllAnnouncements](exports_mdns.MdnsBroadcaster.md#expireallannouncements)
- [expireCommissioningAnnouncement](exports_mdns.MdnsBroadcaster.md#expirecommissioningannouncement)
- [expireFabricAnnouncement](exports_mdns.MdnsBroadcaster.md#expirefabricannouncement)
- [setCommissionMode](exports_mdns.MdnsBroadcaster.md#setcommissionmode)
- [setCommissionerInfo](exports_mdns.MdnsBroadcaster.md#setcommissionerinfo)
- [setFabrics](exports_mdns.MdnsBroadcaster.md#setfabrics)
- [validatePairingInstructions](exports_mdns.MdnsBroadcaster.md#validatepairinginstructions)
- [create](exports_mdns.MdnsBroadcaster.md#create)

## Constructors

### constructor

• **new MdnsBroadcaster**(`mdnsServer`, `enableIpv4?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mdnsServer` | [`MdnsServer`](exports_mdns.MdnsServer.md) |
| `enableIpv4?` | `boolean` |

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:23

## Properties

### activeCommissioningAnnouncements

• `Private` `Readonly` **activeCommissioningAnnouncements**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:21

___

### activeOperationalAnnouncements

• `Private` `Readonly` **activeOperationalAnnouncements**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:22

___

### enableIpv4

• `Private` `Optional` `Readonly` **enableIpv4**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:15

___

### getIpRecords

• `Private` **getIpRecords**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:25

___

### mdnsServer

• `Private` `Readonly` **mdnsServer**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:14

___

### network

• `Private` `Readonly` **network**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:20

## Methods

### announce

▸ **announce**(`announcementPort`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcementPort` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:32

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:36

___

### expireAllAnnouncements

▸ **expireAllAnnouncements**(`announcementPort`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcementPort` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:35

___

### expireCommissioningAnnouncement

▸ **expireCommissioningAnnouncement**(`announcementPort`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcementPort` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:34

___

### expireFabricAnnouncement

▸ **expireFabricAnnouncement**(`announcementPort`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcementPort` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:33

___

### setCommissionMode

▸ **setCommissionMode**(`announcedNetPort`, `mode`, `«destructured»`): `Promise`<`void`\>

Set the Broadcaster data to announce a device ready for commissioning in a special mode

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `mode` | `number` |
| `«destructured»` | [`CommissioningModeInstanceData`](../modules/exports_common.md#commissioningmodeinstancedata) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:27

___

### setCommissionerInfo

▸ **setCommissionerInfo**(`announcedNetPort`, `«destructured»`): `Promise`<`void`\>

Set the Broadcaster data to announce a Commissioner (aka Commissioner discovery)

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `«destructured»` | [`CommissionerInstanceData`](../modules/exports_common.md#commissionerinstancedata) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:31

___

### setFabrics

▸ **setFabrics**(`announcedNetPort`, `fabrics`, `«destructured»?`): `Promise`<`void`\>

Set the Broadcaster Data to announce a device for operative discovery (aka "already paired")

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `fabrics` | [`Fabric`](exports_fabric.Fabric.md)[] |
| `«destructured»` | [`OperationalInstanceData`](../modules/exports_common.md#operationalinstancedata) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:29

___

### validatePairingInstructions

▸ **validatePairingInstructions**(`pairingHint`, `pairingInstructions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pairingHint` | [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)<{ `administrator`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `customInstruction`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `deviceManual`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `deviceManufacturerUrl`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `powerCycle`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `pressResetButton`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `pressResetButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `pressResetButtonNumberOfTimes`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `pressResetButtonUntilLightBlinks`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `pressResetButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `pressResetButtonWithApplicationOfPower`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `pressRestButtonForNumberOfSeconds`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `pressSetupButton`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `pressSetupButtonForNumberOfSeconds`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `pressSetupButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `pressSetupButtonNumberOfTimes`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `pressSetupButtonUntilLightBlinks`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `pressSetupButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `pressSetupButtonWithApplicationOfPower`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `settingsMenuOnNode`: [`BitFlag`](../modules/exports_schema.md#bitflag-1)  }\> |
| `pairingInstructions` | `string` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:24

___

### create

▸ `Static` **create**(`options?`): `Promise`<[`MdnsBroadcaster`](exports_mdns.MdnsBroadcaster.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.enableIpv4?` | `boolean` |
| `options.multicastInterface?` | `string` |

#### Returns

`Promise`<[`MdnsBroadcaster`](exports_mdns.MdnsBroadcaster.md)\>

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:16
