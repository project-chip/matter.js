[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [GeneralDiagnostics](../README.md) / RadioFaultChangeEvent

# Interface: RadioFaultChangeEvent

Body of the GeneralDiagnostics radioFaultChange event

## See

MatterSpecification.v11.Core § 11.11.8.2

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvRadioFaultChangeEvent`](../README.md#tlvradiofaultchangeevent)\>

## Properties

### current

> **current**: [`RadioFault`](../enumerations/RadioFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.11.4.2, “RadioFaultEnum”.

#### See

MatterSpecification.v11.Core § 11.11.8.2.1

#### Inherited from

`TypeFromSchema.current`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:410](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L410)

***

### previous

> **previous**: [`RadioFault`](../enumerations/RadioFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section 11.11.4.2,
“RadioFaultEnum”.

#### See

MatterSpecification.v11.Core § 11.11.8.2.2

#### Inherited from

`TypeFromSchema.previous`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:418](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L418)
