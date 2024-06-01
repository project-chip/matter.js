[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [GeneralDiagnostics](../README.md) / NetworkFaultChangeEvent

# Interface: NetworkFaultChangeEvent

Body of the GeneralDiagnostics networkFaultChange event

## See

MatterSpecification.v11.Core § 11.11.8.3

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvNetworkFaultChangeEvent`](../README.md#tlvnetworkfaultchangeevent)\>

## Properties

### current

> **current**: [`NetworkFault`](../enumerations/NetworkFault.md)[]

This field shall represent the set of faults currently detected, as per Section 11.11.4.3,
“NetworkFaultEnum”.

#### See

MatterSpecification.v11.Core § 11.11.8.3.1

#### Inherited from

`TypeFromSchema.current`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:440](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L440)

***

### previous

> **previous**: [`NetworkFault`](../enumerations/NetworkFault.md)[]

This field shall represent the set of faults detected prior to this change event, as per Section 11.11.4.3,
“NetworkFaultEnum”.

#### See

MatterSpecification.v11.Core § 11.11.8.3.2

#### Inherited from

`TypeFromSchema.previous`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:448](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L448)
