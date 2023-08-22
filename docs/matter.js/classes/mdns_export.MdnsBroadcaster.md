[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [mdns/export](../modules/mdns_export.md) / MdnsBroadcaster

# Class: MdnsBroadcaster

[mdns/export](../modules/mdns_export.md).MdnsBroadcaster

This class is handing MDNS Announcements for multiple instances/devices

## Table of contents

### Constructors

- [constructor](mdns_export.MdnsBroadcaster.md#constructor)

### Properties

- [mdnsServer](mdns_export.MdnsBroadcaster.md#mdnsserver)
- [network](mdns_export.MdnsBroadcaster.md#network)

### Methods

- [announce](mdns_export.MdnsBroadcaster.md#announce)
- [close](mdns_export.MdnsBroadcaster.md#close)
- [setCommissionMode](mdns_export.MdnsBroadcaster.md#setcommissionmode)
- [setCommissionerInfo](mdns_export.MdnsBroadcaster.md#setcommissionerinfo)
- [setFabrics](mdns_export.MdnsBroadcaster.md#setfabrics)
- [validatePairingInstructions](mdns_export.MdnsBroadcaster.md#validatepairinginstructions)
- [create](mdns_export.MdnsBroadcaster.md#create)

## Constructors

### constructor

• **new MdnsBroadcaster**(`mdnsServer`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mdnsServer` | [`MdnsServer`](mdns_export.MdnsServer.md) |

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:59](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L59)

## Properties

### mdnsServer

• `Private` `Readonly` **mdnsServer**: [`MdnsServer`](mdns_export.MdnsServer.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:59](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L59)

___

### network

• `Private` `Readonly` **network**: [`Network`](net_export.Network.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:57](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L57)

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

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:285](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L285)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:289](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L289)

___

### setCommissionMode

▸ **setCommissionMode**(`announcedNetPort`, `mode`, `«destructured»`): `Promise`<`void`\>

Set the Broadcaster data to announce a device ready for commissioning in a special mode

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `mode` | `number` |
| `«destructured»` | [`CommissioningModeInstanceData`](../modules/common_export.md#commissioningmodeinstancedata) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:86](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L86)

___

### setCommissionerInfo

▸ **setCommissionerInfo**(`announcedNetPort`, `«destructured»`): `Promise`<`void`\>

Set the Broadcaster data to announce a Commissioner (aka Commissioner discovery)

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `«destructured»` | [`CommissionerInstanceData`](../modules/common_export.md#commissionerinstancedata) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:226](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L226)

___

### setFabrics

▸ **setFabrics**(`announcedNetPort`, `fabrics`, `«destructured»?`): `Promise`<`void`\>

Set the Broadcaster Data to announce a device for operative discovery (aka "already paired")

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `fabrics` | [`Fabric`](fabric_export.Fabric.md)[] |
| `«destructured»` | [`OperationalInstanceData`](../modules/common_export.md#operationalinstancedata) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:171](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L171)

___

### validatePairingInstructions

▸ **validatePairingInstructions**(`pairingHint`, `pairingInstructions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pairingHint` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<{ `administrator`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `customInstruction`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `deviceManual`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `deviceManufacturerUrl`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `powerCycle`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressResetButton`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressResetButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressResetButtonNumberOfTimes`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressResetButtonUntilLightBlinks`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressResetButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressResetButtonWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressRestButtonForNumberOfSeconds`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressSetupButton`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressSetupButtonForNumberOfSeconds`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressSetupButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressSetupButtonNumberOfTimes`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressSetupButtonUntilLightBlinks`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressSetupButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressSetupButtonWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `settingsMenuOnNode`: [`BitFlag`](../modules/schema_export.md#bitflag-1)  }\> |
| `pairingInstructions` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:61](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L61)

___

### create

▸ `Static` **create**(`multicastInterface?`): `Promise`<[`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `multicastInterface?` | `string` |

#### Returns

`Promise`<[`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)\>

#### Defined in

[packages/matter.js/src/mdns/MdnsBroadcaster.ts:53](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/mdns/MdnsBroadcaster.ts#L53)
