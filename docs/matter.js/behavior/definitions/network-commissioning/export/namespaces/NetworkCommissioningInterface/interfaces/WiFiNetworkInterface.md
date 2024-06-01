[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/network-commissioning/export](../../../README.md) / [NetworkCommissioningInterface](../README.md) / WiFiNetworkInterface

# Interface: WiFiNetworkInterface

## Methods

### addOrUpdateWiFiNetwork()

> **addOrUpdateWiFiNetwork**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

This command shall be used to add or modify Wi-Fi network configurations.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

The Credentials associated with the network are not readable after execution of this command, as they do not
appear in the Networks attribute list, for security reasons.

See Section 11.8.7.5, “Common processing of AddOrUpdateWiFiNetwork and AddOrUpdateThreadNetwork” for
behavior of addition/update.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### See

MatterSpecification.v11.Core § 11.8.7.3

#### Source

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts:351](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts#L351)
