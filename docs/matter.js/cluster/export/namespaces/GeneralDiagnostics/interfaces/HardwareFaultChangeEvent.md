[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [GeneralDiagnostics](../README.md) / HardwareFaultChangeEvent

# Interface: HardwareFaultChangeEvent

Body of the GeneralDiagnostics hardwareFaultChange event

## See

MatterSpecification.v11.Core § 11.11.8.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvHardwareFaultChangeEvent`](../README.md#tlvhardwarefaultchangeevent)\>

## Properties

### current

> **current**: [`HardwareFault`](../enumerations/HardwareFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.11.4.1,
“HardwareFaultEnum”.

#### See

MatterSpecification.v11.Core § 11.11.8.1.1

#### Inherited from

`TypeFromSchema.current`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:380](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L380)

***

### previous

> **previous**: [`HardwareFault`](../enumerations/HardwareFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section

11.11.4.1, “HardwareFaultEnum”.

#### See

MatterSpecification.v11.Core § 11.11.8.1.2

#### Inherited from

`TypeFromSchema.previous`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:389](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L389)
