[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/network-commissioning/export](../modules/behavior_definitions_network_commissioning_export.md) / [NetworkCommissioningInterface](../modules/behavior_definitions_network_commissioning_export.NetworkCommissioningInterface.md) / ThreadNetworkInterface

# Interface: ThreadNetworkInterface

[behavior/definitions/network-commissioning/export](../modules/behavior_definitions_network_commissioning_export.md).[NetworkCommissioningInterface](../modules/behavior_definitions_network_commissioning_export.NetworkCommissioningInterface.md).ThreadNetworkInterface

## Table of contents

### Methods

- [addOrUpdateThreadNetwork](behavior_definitions_network_commissioning_export.NetworkCommissioningInterface.ThreadNetworkInterface.md#addorupdatethreadnetwork)

## Methods

### addOrUpdateThreadNetwork

▸ **addOrUpdateThreadNetwork**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>\>

This command shall be used to add or modify Thread network configurations.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

See Section 11.8.7.5, “Common processing of AddOrUpdateWiFiNetwork and AddOrUpdateThreadNetwork” for
behavior of addition/update.

The XPAN ID in the OperationalDataset serves as the NetworkID for the network configuration to be added or
updated.

If the Networks attribute list does not contain an entry with the same NetworkID as the one provided in the
OperationalDataset, the operation shall be considered an addition, otherwise, it shall be considered an
update.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `operationalDataset`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.8.7.4

#### Defined in

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts:548](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts#L548)
