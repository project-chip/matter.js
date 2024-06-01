[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OperationalCredentials](../README.md) / NodeOperationalCertStatus

# Enumeration: NodeOperationalCertStatus

This enumeration is used by the NOCResponse common response command to convey detailed out

come of several of this cluster’s operations.

## See

MatterSpecification.v11.Core § 11.17.4.3

## Enumeration Members

### FabricConflict

> **FabricConflict**: `9`

Trying to AddNOC instead of UpdateNOC against an existing Fabric.

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:493](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L493)

***

### InvalidAdminSubject

> **InvalidAdminSubject**: `6`

Invalid CaseAdminSubject field for an AddNOC command.

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:488](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L488)

***

### InvalidFabricIndex

> **InvalidFabricIndex**: `11`

FabricIndex argument is invalid.

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:503](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L503)

***

### InvalidNoc

> **InvalidNoc**: `3`

Any other validation error in NOC chain

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:473](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L473)

***

### InvalidNodeOpId

> **InvalidNodeOpId**: `2`

The Node Operational ID in the NOC is not formatted correctly.

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:468](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L468)

***

### InvalidPublicKey

> **InvalidPublicKey**: `1`

Public Key in the NOC does not match the public key in the NOCSR

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:463](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L463)

***

### LabelConflict

> **LabelConflict**: `10`

Label already exists on another Fabric.

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:498](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L498)

***

### MissingCsr

> **MissingCsr**: `4`

No record of prior CSR for which this NOC could match

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:478](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L478)

***

### Ok

> **Ok**: `0`

OK, no error

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:458](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L458)

***

### TableFull

> **TableFull**: `5`

NOCs table full, cannot add another one

#### Source

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:483](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L483)
