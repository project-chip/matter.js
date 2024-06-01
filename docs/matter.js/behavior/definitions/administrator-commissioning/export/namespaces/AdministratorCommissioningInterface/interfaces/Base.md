[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/administrator-commissioning/export](../../../README.md) / [AdministratorCommissioningInterface](../README.md) / Base

# Interface: Base

## Methods

### openCommissioningWindow()

> **openCommissioningWindow**(`request`): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

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

| Parameter | Type |
| :------ | :------ |
| `request` | [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 11.18.8.1

#### Source

[packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts#L102)

***

### revokeCommissioning()

> **revokeCommissioning**(): [`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

This command is used by a current Administrator to instruct a Node to revoke any active Open Commissioning
Window or Open Basic Commissioning Window command. This is an idempotent command and the Node shall (for
ECM) delete the temporary PAKEPasscodeVerifier and associated data, and stop publishing the DNS-SD record
associated with the Open Commissioning Window or Open Basic Commissioning Window command, see Section 4.3.1,
“Commissionable Node Discovery”.

If no commissioning window was open at time of receipt, this command shall fail with a cluster specific
status code of WindowNotOpen.

#### Returns

[`MaybePromise`](../../../../../../../util/export/README.md#maybepromiset)

#### See

MatterSpecification.v11.Core § 11.18.8.3

#### Source

[packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts:116](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/administrator-commissioning/AdministratorCommissioningInterface.ts#L116)
