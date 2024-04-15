[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/network-commissioning/export](../modules/behavior_definitions_network_commissioning_export.md) / [NetworkCommissioningInterface](../modules/behavior_definitions_network_commissioning_export.NetworkCommissioningInterface.md) / WiFiNetworkInterface

# Interface: WiFiNetworkInterface

[behavior/definitions/network-commissioning/export](../modules/behavior_definitions_network_commissioning_export.md).[NetworkCommissioningInterface](../modules/behavior_definitions_network_commissioning_export.NetworkCommissioningInterface.md).WiFiNetworkInterface

## Table of contents

### Methods

- [addOrUpdateWiFiNetwork](behavior_definitions_network_commissioning_export.NetworkCommissioningInterface.WiFiNetworkInterface.md#addorupdatewifinetwork)

## Methods

### addOrUpdateWiFiNetwork

▸ **addOrUpdateWiFiNetwork**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>\>

This command shall be used to add or modify Wi-Fi network configurations.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

The Credentials associated with the network are not readable after execution of this command, as they do not
appear in the Networks attribute list, for security reasons.

See Section 11.8.7.5, “Common processing of AddOrUpdateWiFiNetwork and AddOrUpdateThreadNetwork” for
behavior of addition/update.

This field shall contain the SSID to which to attempt connection. Specific BSSID selection is not supported
by this cluster.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number` \| `bigint`\> ; `credentials`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `ssid`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`string`\> ; `networkIndex`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`number`\> ; `networkingStatus`: [`FieldType`](tlv_export.FieldType.md)\<[`NetworkCommissioningStatus`](../enums/cluster_export.NetworkCommissioning.NetworkCommissioningStatus.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.8.7.3

#### Defined in

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts:526](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts#L526)
