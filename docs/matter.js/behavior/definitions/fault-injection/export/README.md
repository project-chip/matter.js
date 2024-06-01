[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / behavior/definitions/fault-injection/export

# behavior/definitions/fault-injection/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [FaultInjectionBehavior](namespaces/FaultInjectionBehavior/README.md)
- [FaultInjectionInterface](namespaces/FaultInjectionInterface/README.md)

### Classes

- [FaultInjectionServer](classes/FaultInjectionServer.md)

### Interfaces

- [FaultInjectionBehavior](interfaces/FaultInjectionBehavior.md)

## Type Aliases

### FailAtFaultRequest

> **FailAtFaultRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvFailAtFaultRequest`](../../../../cluster/export/namespaces/FaultInjection/README.md#tlvfailatfaultrequest)\>

#### Source

[packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionInterface.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionInterface.ts#L13)

***

### FailRandomlyAtFaultRequest

> **FailRandomlyAtFaultRequest**: [`TypeFromSchema`](../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvFailRandomlyAtFaultRequest`](../../../../cluster/export/namespaces/FaultInjection/README.md#tlvfailrandomlyatfaultrequest)\>

#### Source

[packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionInterface.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionInterface.ts#L14)

***

### FaultInjectionInterface

> **FaultInjectionInterface**: `object`

#### Type declaration

##### components

> **components**: [`object`]

#### Source

[packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionInterface.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionInterface.ts#L16)

## Variables

### FaultInjectionBehavior

> `const` **FaultInjectionBehavior**: [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Cluster`](../../../../cluster/export/namespaces/FaultInjection/interfaces/Cluster.md), [`Type`](../../../cluster/export/namespaces/ClusterBehavior/interfaces/Type.md)\<[`Of`](../../../../cluster/export/namespaces/ClusterType/interfaces/Of.md)\<`object`\>, *typeof* [`ClusterBehavior`](../../../cluster/export/namespaces/ClusterBehavior/README.md), [`FaultInjectionInterface`](README.md#faultinjectioninterface)\>, [`FaultInjectionInterface`](README.md#faultinjectioninterface)\>

FaultInjectionBehavior is the base class for objects that support interaction with [FaultInjection.Cluster](../../../../cluster/export/namespaces/FaultInjection/README.md#cluster).

#### Source

[packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionBehavior.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/fault-injection/FaultInjectionBehavior.ts#L16)
