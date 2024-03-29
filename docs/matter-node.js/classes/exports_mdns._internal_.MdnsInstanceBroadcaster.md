[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/mdns](../modules/exports_mdns.md) / [\<internal\>](../modules/exports_mdns._internal_.md) / MdnsInstanceBroadcaster

# Class: MdnsInstanceBroadcaster

[exports/mdns](../modules/exports_mdns.md).[\<internal\>](../modules/exports_mdns._internal_.md).MdnsInstanceBroadcaster

This class is handing MDNS Announcements for one instance of a device aka "port".

Obtain an instance via [MdnsBroadcaster.createInstanceBroadcaster](exports_mdns.MdnsBroadcaster.md#createinstancebroadcaster).

## Implements

- [`InstanceBroadcaster`](../interfaces/exports_common.InstanceBroadcaster.md)

## Table of contents

### Constructors

- [constructor](exports_mdns._internal_.MdnsInstanceBroadcaster.md#constructor)

### Properties

- [#private](exports_mdns._internal_.MdnsInstanceBroadcaster.md##private)

### Methods

- [announce](exports_mdns._internal_.MdnsInstanceBroadcaster.md#announce)
- [close](exports_mdns._internal_.MdnsInstanceBroadcaster.md#close)
- [expireAllAnnouncements](exports_mdns._internal_.MdnsInstanceBroadcaster.md#expireallannouncements)
- [expireCommissioningAnnouncement](exports_mdns._internal_.MdnsInstanceBroadcaster.md#expirecommissioningannouncement)
- [expireFabricAnnouncement](exports_mdns._internal_.MdnsInstanceBroadcaster.md#expirefabricannouncement)
- [setCommissionMode](exports_mdns._internal_.MdnsInstanceBroadcaster.md#setcommissionmode)
- [setCommissionerInfo](exports_mdns._internal_.MdnsInstanceBroadcaster.md#setcommissionerinfo)
- [setFabrics](exports_mdns._internal_.MdnsInstanceBroadcaster.md#setfabrics)

## Constructors

### constructor

• **new MdnsInstanceBroadcaster**(`instancePort`, `mdnsBroadcaster`, `onclose`): [`MdnsInstanceBroadcaster`](exports_mdns._internal_.MdnsInstanceBroadcaster.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `instancePort` | `number` |
| `mdnsBroadcaster` | [`MdnsBroadcaster`](exports_mdns.MdnsBroadcaster.md) |
| `onclose` | () => `void` |

#### Returns

[`MdnsInstanceBroadcaster`](exports_mdns._internal_.MdnsInstanceBroadcaster.md)

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:16

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:15

## Methods

### announce

▸ **announce**(): `Promise`\<`void`\>

Send out announcements for this instance.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/exports_common.InstanceBroadcaster.md).[announce](../interfaces/exports_common.InstanceBroadcaster.md#announce)

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:23

___

### close

▸ **close**(): `Promise`\<`void`\>

Destroy the instance

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/exports_common.InstanceBroadcaster.md).[close](../interfaces/exports_common.InstanceBroadcaster.md#close)

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:17

___

### expireAllAnnouncements

▸ **expireAllAnnouncements**(): `Promise`\<`void`\>

Expire all announcements.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/exports_common.InstanceBroadcaster.md).[expireAllAnnouncements](../interfaces/exports_common.InstanceBroadcaster.md#expireallannouncements)

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:26

___

### expireCommissioningAnnouncement

▸ **expireCommissioningAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this commissioning instance.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/exports_common.InstanceBroadcaster.md).[expireCommissioningAnnouncement](../interfaces/exports_common.InstanceBroadcaster.md#expirecommissioningannouncement)

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:25

___

### expireFabricAnnouncement

▸ **expireFabricAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this operative instance.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/exports_common.InstanceBroadcaster.md).[expireFabricAnnouncement](../interfaces/exports_common.InstanceBroadcaster.md#expirefabricannouncement)

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:24

___

### setCommissionMode

▸ **setCommissionMode**(`mode`, `deviceData`): `Promise`\<`void`\>

Set a commissionable mode and details to announce a commissionable device.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `deviceData` | [`CommissioningModeInstanceData`](../interfaces/exports_common.CommissioningModeInstanceData.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/exports_common.InstanceBroadcaster.md).[setCommissionMode](../interfaces/exports_common.InstanceBroadcaster.md#setcommissionmode)

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:18

___

### setCommissionerInfo

▸ **setCommissionerInfo**(`commissionerData`): `Promise`\<`void`\>

Set the Broadcaster data to announce a Commissioner (aka Commissioner discovery)

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissionerData` | [`CommissionerInstanceData`](../modules/exports_common.md#commissionerinstancedata) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/exports_common.InstanceBroadcaster.md).[setCommissionerInfo](../interfaces/exports_common.InstanceBroadcaster.md#setcommissionerinfo)

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:22

___

### setFabrics

▸ **setFabrics**(`fabrics`, `expireCommissioningAnnouncements?`): `Promise`\<`void`\>

Set the Broadcaster Data to announce a device for operative discovery (aka "already paired")

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](exports_fabric.Fabric.md)[] |
| `expireCommissioningAnnouncements?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/exports_common.InstanceBroadcaster.md).[setFabrics](../interfaces/exports_common.InstanceBroadcaster.md#setfabrics)

#### Defined in

packages/matter.js/dist/esm/mdns/MdnsInstanceBroadcaster.d.ts:20
