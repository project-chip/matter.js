[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster](../modules/cluster.md) / OperationalCertStatus

# Enumeration: OperationalCertStatus

[cluster](../modules/cluster.md).OperationalCertStatus

Used by the NOCResponse datatype response command to convey detailed outcome of several of this cluster’s operations.

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md) § 11.17.5.9

## Table of contents

### Enumeration Members

- [FabricConflict](cluster.OperationalCertStatus.md#fabricconflict)
- [InvalidAdminSubject](cluster.OperationalCertStatus.md#invalidadminsubject)
- [InvalidFabricIndex](cluster.OperationalCertStatus.md#invalidfabricindex)
- [InvalidNodeOpId](cluster.OperationalCertStatus.md#invalidnodeopid)
- [InvalidOperationalCert](cluster.OperationalCertStatus.md#invalidoperationalcert)
- [InvalidPublicKey](cluster.OperationalCertStatus.md#invalidpublickey)
- [LabelConflict](cluster.OperationalCertStatus.md#labelconflict)
- [MissingCsr](cluster.OperationalCertStatus.md#missingcsr)
- [Success](cluster.OperationalCertStatus.md#success)
- [TableFull](cluster.OperationalCertStatus.md#tablefull)

## Enumeration Members

### FabricConflict

• **FabricConflict** = ``9``

Trying to AddNOC instead of UpdateNOC against an existing Fabric.

#### Defined in

[packages/matter.js/src/cluster/OperationalCredentialsCluster.ts:189](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OperationalCredentialsCluster.ts#L189)

___

### InvalidAdminSubject

• **InvalidAdminSubject** = ``6``

Invalid CaseAdminSubject field for an AddNOC command.

#### Defined in

[packages/matter.js/src/cluster/OperationalCredentialsCluster.ts:186](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OperationalCredentialsCluster.ts#L186)

___

### InvalidFabricIndex

• **InvalidFabricIndex** = ``11``

FabricIndex argument is invalid.

#### Defined in

[packages/matter.js/src/cluster/OperationalCredentialsCluster.ts:195](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OperationalCredentialsCluster.ts#L195)

___

### InvalidNodeOpId

• **InvalidNodeOpId** = ``2``

The Node Operational ID in the NOC is not formatted correctly.

#### Defined in

[packages/matter.js/src/cluster/OperationalCredentialsCluster.ts:174](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OperationalCredentialsCluster.ts#L174)

___

### InvalidOperationalCert

• **InvalidOperationalCert** = ``3``

Any other validation error in NOC chain.

#### Defined in

[packages/matter.js/src/cluster/OperationalCredentialsCluster.ts:177](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OperationalCredentialsCluster.ts#L177)

___

### InvalidPublicKey

• **InvalidPublicKey** = ``1``

Public Key in the NOC does not match the public key in the NOCSR.

#### Defined in

[packages/matter.js/src/cluster/OperationalCredentialsCluster.ts:171](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OperationalCredentialsCluster.ts#L171)

___

### LabelConflict

• **LabelConflict** = ``10``

Label already exists on another Fabric.

#### Defined in

[packages/matter.js/src/cluster/OperationalCredentialsCluster.ts:192](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OperationalCredentialsCluster.ts#L192)

___

### MissingCsr

• **MissingCsr** = ``4``

No record of prior CSR for which this NOC could match.

#### Defined in

[packages/matter.js/src/cluster/OperationalCredentialsCluster.ts:180](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OperationalCredentialsCluster.ts#L180)

___

### Success

• **Success** = ``0``

OK, no error.

#### Defined in

[packages/matter.js/src/cluster/OperationalCredentialsCluster.ts:168](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OperationalCredentialsCluster.ts#L168)

___

### TableFull

• **TableFull** = ``5``

NOCs table full, cannot add another one.

#### Defined in

[packages/matter.js/src/cluster/OperationalCredentialsCluster.ts:183](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/cluster/OperationalCredentialsCluster.ts#L183)
