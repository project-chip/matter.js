[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/mdns](../modules/exports_mdns.md) / MdnsBroadcaster

# Class: MdnsBroadcaster

[exports/mdns](../modules/exports_mdns.md).MdnsBroadcaster

This class is handing MDNS Announcements for multiple instances/devices

## Table of contents

### Constructors

- [constructor](exports_mdns.MdnsBroadcaster.md#constructor)

### Properties

- [#private](exports_mdns.MdnsBroadcaster.md##private)
- [getIpRecords](exports_mdns.MdnsBroadcaster.md#getiprecords)

### Methods

- [announce](exports_mdns.MdnsBroadcaster.md#announce)
- [close](exports_mdns.MdnsBroadcaster.md#close)
- [createInstanceBroadcaster](exports_mdns.MdnsBroadcaster.md#createinstancebroadcaster)
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

• **new MdnsBroadcaster**(`network`, `mdnsServer`, `enableIpv4?`): [`MdnsBroadcaster`](exports_mdns.MdnsBroadcaster.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](net_export.Network.md) |
| `mdnsServer` | [`MdnsServer`](exports_mdns.MdnsServer.md) |
| `enableIpv4?` | `boolean` |

#### Returns

[`MdnsBroadcaster`](exports_mdns.MdnsBroadcaster.md)

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:21

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:16

___

### getIpRecords

• `Private` **getIpRecords**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:24

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

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:31

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:35

___

### createInstanceBroadcaster

▸ **createInstanceBroadcaster**(`port`): [`MdnsInstanceBroadcaster`](exports_mdns._internal_.MdnsInstanceBroadcaster.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |

#### Returns

[`MdnsInstanceBroadcaster`](exports_mdns._internal_.MdnsInstanceBroadcaster.md)

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:22

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

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:34

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

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:33

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

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:32

___

### setCommissionMode

▸ **setCommissionMode**(`announcedNetPort`, `mode`, `«destructured»`): `Promise`\<`void`\>

Set the Broadcaster data to announce a device ready for commissioning in a special mode

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `mode` | `number` |
| `«destructured»` | [`CommissioningModeInstanceData`](../interfaces/exports_common.CommissioningModeInstanceData.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:26

___

### setCommissionerInfo

▸ **setCommissionerInfo**(`announcedNetPort`, `«destructured»`): `Promise`\<`void`\>

Set the Broadcaster data to announce a Commissioner (aka Commissioner discovery)

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `«destructured»` | [`CommissionerInstanceData`](../modules/exports_common.md#commissionerinstancedata) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:30

___

### setFabrics

▸ **setFabrics**(`announcedNetPort`, `fabrics`, `«destructured»?`): `Promise`\<`void`\>

Set the Broadcaster Data to announce a device for operative discovery (aka "already paired")

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `fabrics` | [`Fabric`](exports_fabric.Fabric.md)[] |
| `«destructured»` | [`OperationalInstanceData`](../modules/exports_common.md#operationalinstancedata) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:28

___

### validatePairingInstructions

▸ **validatePairingInstructions**(`pairingHint`, `pairingInstructions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pairingHint` | [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `administrator`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `customInstruction`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `deviceManual`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `deviceManufacturerUrl`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `powerCycle`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressResetButton`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressResetButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressResetButtonNumberOfTimes`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressResetButtonUntilLightBlinks`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressResetButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressResetButtonWithApplicationOfPower`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressRestButtonForNumberOfSeconds`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressSetupButton`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressSetupButtonForNumberOfSeconds`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressSetupButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressSetupButtonNumberOfTimes`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressSetupButtonUntilLightBlinks`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressSetupButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressSetupButtonWithApplicationOfPower`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `settingsMenuOnNode`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\> |
| `pairingInstructions` | `string` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:23

___

### create

▸ **create**(`network`, `options?`): `Promise`\<[`MdnsBroadcaster`](exports_mdns.MdnsBroadcaster.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Network`](net_export.Network.md) |
| `options?` | `Object` |
| `options.enableIpv4?` | `boolean` |
| `options.multicastInterface?` | `string` |

#### Returns

`Promise`\<[`MdnsBroadcaster`](exports_mdns.MdnsBroadcaster.md)\>

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsBroadcaster.d.ts:17
