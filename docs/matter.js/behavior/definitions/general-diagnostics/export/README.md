[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/general-diagnostics/export

# behavior/definitions/general-diagnostics/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [GeneralDiagnosticsBehavior](namespaces/GeneralDiagnosticsBehavior/README.md)
- [GeneralDiagnosticsInterface](namespaces/GeneralDiagnosticsInterface/README.md)
- [GeneralDiagnosticsServer](namespaces/GeneralDiagnosticsServer/README.md)

### Classes

- [GeneralDiagnosticsServer](classes/GeneralDiagnosticsServer.md)

### Interfaces

- [GeneralDiagnosticsBehavior](interfaces/GeneralDiagnosticsBehavior.md)

## Type Aliases

### GeneralDiagnosticsInterface

> **GeneralDiagnosticsInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsInterface.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsInterface.ts#L24)

***

### TestEventTriggerRequest

> **TestEventTriggerRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvTestEventTriggerRequest`](../../../../cluster/export/namespaces/GeneralDiagnostics/README.md#tlvtesteventtriggerrequest)\>

This command shall be supported to provide a means for certification tests to trigger some test- plan-specific
events, necessary to assist in automation of device interactions for some certification test cases. This command
shall NOT cause any changes to the state of the device that persist after the last fabric is removed.

The fields for the TestEventTrigger command are as follows:

#### See

MatterSpecification.v11.Core § 11.11.7.1

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsInterface.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsInterface.ts#L22)

## Variables

### GeneralDiagnosticsBehavior

> `const` **GeneralDiagnosticsBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/GeneralDiagnostics/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`GeneralDiagnosticsInterface`](README.md#generaldiagnosticsinterface)\>, [`GeneralDiagnosticsInterface`](README.md#generaldiagnosticsinterface)\>

GeneralDiagnosticsBehavior is the base class for objects that support interaction with GeneralDiagnostics.Cluster.

#### Source

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsBehavior.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsBehavior.ts#L17)
