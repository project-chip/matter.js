[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ThreadNetworkDiagnostics](../README.md) / SecurityPolicy

# Interface: SecurityPolicy

## See

MatterSpecification.v11.Core § 11.13.5.6

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvSecurityPolicy`](../README.md#tlvsecuritypolicy)\>

## Properties

### flags

> **flags**: `number`

This field shall specify the flags as specified in Thread 1.3.0 section 8.10.1.15. This attribute shall be
null when there is no dataset configured.

#### See

MatterSpecification.v11.Core § 11.13.5.6.2

#### Inherited from

`TypeFromSchema.flags`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:248

***

### rotationTime

> **rotationTime**: `number`

This field shall specify the interval of time, in hours, that Thread security keys are rotated. This
attribute shall be null when there is no dataset configured.

#### See

MatterSpecification.v11.Core § 11.13.5.6.1

#### Inherited from

`TypeFromSchema.rotationTime`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:241
