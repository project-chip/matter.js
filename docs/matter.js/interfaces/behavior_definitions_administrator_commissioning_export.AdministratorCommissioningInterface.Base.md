[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/administrator-commissioning/export](../modules/behavior_definitions_administrator_commissioning_export.md) / [AdministratorCommissioningInterface](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningInterface.md) / Base

# Interface: Base

[behavior/definitions/administrator-commissioning/export](../modules/behavior_definitions_administrator_commissioning_export.md).[AdministratorCommissioningInterface](../modules/behavior_definitions_administrator_commissioning_export.AdministratorCommissioningInterface.md).Base

## Table of contents

### Methods

- [openCommissioningWindow](behavior_definitions_administrator_commissioning_export.AdministratorCommissioningInterface.Base.md#opencommissioningwindow)
- [revokeCommissioning](behavior_definitions_administrator_commissioning_export.AdministratorCommissioningInterface.Base.md#revokecommissioning)

## Methods

### openCommissioningWindow

▸ **openCommissioningWindow**(`request`): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command is used by a current Administrator to instruct a Node to go into commissioning mode. The
Enhanced Commissioning Method specifies a window of time during which an already commissioned Node accepts
PASE sessions. The current Administrator MUST specify a timeout value for the duration of OCW.

When OCW expires or commissioning completes, the Node shall remove the Passcode by deleting the PAKE
passcode verifier as well as stop publishing the DNS-SD record corresponding to this command as described in
Section 4.3.1, “Commissionable Node Discovery”. The commissioning into a new Fabric completes when the Node
successfully receives a CommissioningComplete command, see Section 5.5, “Commissioning Flows”.

The parameters for OpenCommissioningWindow command are as follows:

A current Administrator may invoke this command to put a node in commissioning mode for the next
Administrator. On completion, the command shall return a cluster specific status code from the enumeration
below reflecting success or reasons for failure of the operation. The new Administrator shall discover the
Node on the IP network using DNS-based Service Discovery (DNS-SD) for commissioning.

If any format or validity errors related to the PAKEPasscodeVerifier, Iterations or Salt arguments arise,
this command shall fail with a cluster specific status code of PAKEParameterError.

If a commissioning window is already currently open, this command shall fail with a cluster specific status
code of Busy.

If the fail-safe timer is currently armed, this command shall fail with a cluster specific status code of
Busy, since it is likely that concurrent commissioning operations from multiple separate Commissioners are
about to take place.

In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 11.18.8.1

#### Defined in

[packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts:113](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts#L113)

___

### revokeCommissioning

▸ **revokeCommissioning**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

This command is used by a current Administrator to instruct a Node to revoke any active Open Commissioning
Window or Open Basic Commissioning Window command. This is an idempotent command and the Node shall (for
ECM) delete the temporary PAKEPasscodeVerifier and associated data, and stop publishing the DNS-SD record
associated with the Open Commissioning Window or Open Basic Commissioning Window command, see Section 4.3.1,
“Commissionable Node Discovery”.

If no commissioning window was open at time of receipt, this command shall fail with a cluster specific
status code of WindowNotOpen.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

**`See`**

MatterSpecification.v11.Core § 11.18.8.3

#### Defined in

[packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts#L127)
