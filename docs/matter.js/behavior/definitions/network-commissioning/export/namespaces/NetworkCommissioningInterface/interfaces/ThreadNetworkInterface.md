[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/network-commissioning/export](../../../README.md) / [NetworkCommissioningInterface](../README.md) / ThreadNetworkInterface

# Interface: ThreadNetworkInterface

## Methods

### addOrUpdateThreadNetwork()

> **addOrUpdateThreadNetwork**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

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

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)\<[`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>\>

#### See

MatterSpecification.v11.Core § 11.8.7.4

#### Source

[packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts:373](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/network-commissioning/NetworkCommissioningInterface.ts#L373)
