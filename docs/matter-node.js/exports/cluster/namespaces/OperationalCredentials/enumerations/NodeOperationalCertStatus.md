[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OperationalCredentials](../README.md) / NodeOperationalCertStatus

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

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:446

***

### InvalidAdminSubject

> **InvalidAdminSubject**: `6`

Invalid CaseAdminSubject field for an AddNOC command.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:442

***

### InvalidFabricIndex

> **InvalidFabricIndex**: `11`

FabricIndex argument is invalid.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:454

***

### InvalidNoc

> **InvalidNoc**: `3`

Any other validation error in NOC chain

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:430

***

### InvalidNodeOpId

> **InvalidNodeOpId**: `2`

The Node Operational ID in the NOC is not formatted correctly.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:426

***

### InvalidPublicKey

> **InvalidPublicKey**: `1`

Public Key in the NOC does not match the public key in the NOCSR

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:422

***

### LabelConflict

> **LabelConflict**: `10`

Label already exists on another Fabric.

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:450

***

### MissingCsr

> **MissingCsr**: `4`

No record of prior CSR for which this NOC could match

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:434

***

### Ok

> **Ok**: `0`

OK, no error

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:418

***

### TableFull

> **TableFull**: `5`

NOCs table full, cannot add another one

#### Source

packages/matter.js/dist/esm/cluster/definitions/OperationalCredentialsCluster.d.ts:438
