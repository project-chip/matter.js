[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [node/export](../modules/node_export.md) / [\<internal\>](../modules/node_export._internal_.md) / MdnsInstanceBroadcaster

# Class: MdnsInstanceBroadcaster

[node/export](../modules/node_export.md).[\<internal\>](../modules/node_export._internal_.md).MdnsInstanceBroadcaster

This class is handing MDNS Announcements for one instance of a device aka "port".

Obtain an instance via [MdnsBroadcaster.createInstanceBroadcaster](mdns_export.MdnsBroadcaster.md#createinstancebroadcaster).

## Implements

- [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md)

## Table of contents

### Constructors

- [constructor](node_export._internal_.MdnsInstanceBroadcaster.md#constructor)

### Properties

- [#instancePort](node_export._internal_.MdnsInstanceBroadcaster.md##instanceport)
- [#isClosed](node_export._internal_.MdnsInstanceBroadcaster.md##isclosed)
- [#mdnsBroadcaster](node_export._internal_.MdnsInstanceBroadcaster.md##mdnsbroadcaster)
- [#onclose](node_export._internal_.MdnsInstanceBroadcaster.md##onclose)

### Methods

- [#assertOpen](node_export._internal_.MdnsInstanceBroadcaster.md##assertopen)
- [announce](node_export._internal_.MdnsInstanceBroadcaster.md#announce)
- [close](node_export._internal_.MdnsInstanceBroadcaster.md#close)
- [expireAllAnnouncements](node_export._internal_.MdnsInstanceBroadcaster.md#expireallannouncements)
- [expireCommissioningAnnouncement](node_export._internal_.MdnsInstanceBroadcaster.md#expirecommissioningannouncement)
- [expireFabricAnnouncement](node_export._internal_.MdnsInstanceBroadcaster.md#expirefabricannouncement)
- [setCommissionMode](node_export._internal_.MdnsInstanceBroadcaster.md#setcommissionmode)
- [setCommissionerInfo](node_export._internal_.MdnsInstanceBroadcaster.md#setcommissionerinfo)
- [setFabrics](node_export._internal_.MdnsInstanceBroadcaster.md#setfabrics)

## Constructors

### constructor

• **new MdnsInstanceBroadcaster**(`instancePort`, `mdnsBroadcaster`, `onclose`): [`MdnsInstanceBroadcaster`](node_export._internal_.MdnsInstanceBroadcaster.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `instancePort` | `number` |
| `mdnsBroadcaster` | [`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md) |
| `onclose` | () => `void` |

#### Returns

[`MdnsInstanceBroadcaster`](node_export._internal_.MdnsInstanceBroadcaster.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L27)

## Properties

### #instancePort

• `Private` `Readonly` **#instancePort**: `number`

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L22)

___

### #isClosed

• `Private` **#isClosed**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L25)

___

### #mdnsBroadcaster

• `Private` `Readonly` **#mdnsBroadcaster**: [`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L23)

___

### #onclose

• `Private` `Readonly` **#onclose**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L24)

## Methods

### #assertOpen

▸ **#assertOpen**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L83)

___

### announce

▸ **announce**(): `Promise`\<`void`\>

Send out announcements for this instance.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/common_export.InstanceBroadcaster.md).[announce](../interfaces/common_export.InstanceBroadcaster.md#announce)

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:63](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L63)

___

### close

▸ **close**(): `Promise`\<`void`\>

Destroy the instance

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/common_export.InstanceBroadcaster.md).[close](../interfaces/common_export.InstanceBroadcaster.md#close)

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L33)

___

### expireAllAnnouncements

▸ **expireAllAnnouncements**(): `Promise`\<`void`\>

Expire all announcements.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/common_export.InstanceBroadcaster.md).[expireAllAnnouncements](../interfaces/common_export.InstanceBroadcaster.md#expireallannouncements)

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L78)

___

### expireCommissioningAnnouncement

▸ **expireCommissioningAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this commissioning instance.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/common_export.InstanceBroadcaster.md).[expireCommissioningAnnouncement](../interfaces/common_export.InstanceBroadcaster.md#expirecommissioningannouncement)

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L73)

___

### expireFabricAnnouncement

▸ **expireFabricAnnouncement**(): `Promise`\<`void`\>

Expire the announcement for this operative instance.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/common_export.InstanceBroadcaster.md).[expireFabricAnnouncement](../interfaces/common_export.InstanceBroadcaster.md#expirefabricannouncement)

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L68)

___

### setCommissionMode

▸ **setCommissionMode**(`mode`, `deviceData`): `Promise`\<`void`\>

Set a commissionable mode and details to announce a commissionable device.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `deviceData` | [`CommissioningModeInstanceData`](../interfaces/common_export.CommissioningModeInstanceData.md) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/common_export.InstanceBroadcaster.md).[setCommissionMode](../interfaces/common_export.InstanceBroadcaster.md#setcommissionmode)

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L43)

___

### setCommissionerInfo

▸ **setCommissionerInfo**(`commissionerData`): `Promise`\<`void`\>

Set the Broadcaster data to announce a Commissioner (aka Commissioner discovery)

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissionerData` | [`CommissionerInstanceData`](../modules/common_export.md#commissionerinstancedata) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/common_export.InstanceBroadcaster.md).[setCommissionerInfo](../interfaces/common_export.InstanceBroadcaster.md#setcommissionerinfo)

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L58)

___

### setFabrics

▸ **setFabrics**(`fabrics`, `expireCommissioningAnnouncements?`): `Promise`\<`void`\>

Set the Broadcaster Data to announce a device for operative discovery (aka "already paired")

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fabrics` | [`Fabric`](fabric_export.Fabric.md)[] | `undefined` |
| `expireCommissioningAnnouncements` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[InstanceBroadcaster](../interfaces/common_export.InstanceBroadcaster.md).[setFabrics](../interfaces/common_export.InstanceBroadcaster.md#setfabrics)

#### Defined in

[packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/mdns/MdnsInstanceBroadcaster.ts#L49)
