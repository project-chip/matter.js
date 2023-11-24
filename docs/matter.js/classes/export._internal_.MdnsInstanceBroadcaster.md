[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / MdnsInstanceBroadcaster

# Class: MdnsInstanceBroadcaster

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).MdnsInstanceBroadcaster

This class is handing MDNS Announcements for one instance of a device aka "port".

## Implements

- [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md)

## Table of contents

### Constructors

- [constructor](export._internal_.MdnsInstanceBroadcaster.md#constructor)

### Properties

- [instancePort](export._internal_.MdnsInstanceBroadcaster.md#instanceport)
- [mdnsBroadcaster](export._internal_.MdnsInstanceBroadcaster.md#mdnsbroadcaster)

### Methods

- [announce](export._internal_.MdnsInstanceBroadcaster.md#announce)
- [expireAllAnnouncements](export._internal_.MdnsInstanceBroadcaster.md#expireallannouncements)
- [expireCommissioningAnnouncement](export._internal_.MdnsInstanceBroadcaster.md#expirecommissioningannouncement)
- [expireFabricAnnouncement](export._internal_.MdnsInstanceBroadcaster.md#expirefabricannouncement)
- [setCommissionMode](export._internal_.MdnsInstanceBroadcaster.md#setcommissionmode)
- [setCommissionerInfo](export._internal_.MdnsInstanceBroadcaster.md#setcommissionerinfo)
- [setFabrics](export._internal_.MdnsInstanceBroadcaster.md#setfabrics)

## Constructors

### constructor

• **new MdnsInstanceBroadcaster**(`instancePort`, `mdnsBroadcaster`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `instancePort` | `number` |
| `mdnsBroadcaster` | [`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md) |

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:19](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L19)

## Properties

### instancePort

• `Private` `Readonly` **instancePort**: `number`

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:20](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L20)

___

### mdnsBroadcaster

• `Private` `Readonly` **mdnsBroadcaster**: [`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:21](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L21)

## Methods

### announce

▸ **announce**(): `Promise`<`void`\>

Send out announcements for this instance.

#### Returns

`Promise`<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/common_export.InstanceBroadcaster.md).[announce](../interfaces/common_export.InstanceBroadcaster.md#announce)

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:41](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L41)

___

### expireAllAnnouncements

▸ **expireAllAnnouncements**(): `Promise`<`void`\>

Expire all announcements.

#### Returns

`Promise`<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/common_export.InstanceBroadcaster.md).[expireAllAnnouncements](../interfaces/common_export.InstanceBroadcaster.md#expireallannouncements)

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:53](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L53)

___

### expireCommissioningAnnouncement

▸ **expireCommissioningAnnouncement**(): `Promise`<`void`\>

Expire the announcement for this commissioning instance.

#### Returns

`Promise`<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/common_export.InstanceBroadcaster.md).[expireCommissioningAnnouncement](../interfaces/common_export.InstanceBroadcaster.md#expirecommissioningannouncement)

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:49](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L49)

___

### expireFabricAnnouncement

▸ **expireFabricAnnouncement**(): `Promise`<`void`\>

Expire the announcement for this operative instance.

#### Returns

`Promise`<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/common_export.InstanceBroadcaster.md).[expireFabricAnnouncement](../interfaces/common_export.InstanceBroadcaster.md#expirefabricannouncement)

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:45](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L45)

___

### setCommissionMode

▸ **setCommissionMode**(`mode`, `deviceData`): `Promise`<`void`\>

Set a commissionable mode and details to announce a commissionable device.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `deviceData` | [`CommissioningModeInstanceData`](../modules/common_export.md#commissioningmodeinstancedata) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/common_export.InstanceBroadcaster.md).[setCommissionMode](../interfaces/common_export.InstanceBroadcaster.md#setcommissionmode)

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:24](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L24)

___

### setCommissionerInfo

▸ **setCommissionerInfo**(`commissionerData`): `Promise`<`void`\>

Set the Broadcaster data to announce a Commissioner (aka Commissioner discovery)

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissionerData` | [`CommissionerInstanceData`](../modules/common_export.md#commissionerinstancedata) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/common_export.InstanceBroadcaster.md).[setCommissionerInfo](../interfaces/common_export.InstanceBroadcaster.md#setcommissionerinfo)

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:37](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L37)

___

### setFabrics

▸ **setFabrics**(`fabrics`, `expireCommissioningAnnouncements?`): `Promise`<`void`\>

Set the Broadcaster Data to announce a device for operative discovery (aka "already paired")

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fabrics` | [`Fabric`](fabric_export.Fabric.md)[] | `undefined` |
| `expireCommissioningAnnouncements` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/common_export.InstanceBroadcaster.md).[setFabrics](../interfaces/common_export.InstanceBroadcaster.md#setfabrics)

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:29](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L29)
