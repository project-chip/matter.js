[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / FaultInjection

# Namespace: FaultInjection

## Index

### Enumerations

- [FaultType](enumerations/FaultType.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [FailAtFaultRequest](interfaces/FailAtFaultRequest.md)
- [FailRandomlyAtFaultRequest](interfaces/FailRandomlyAtFaultRequest.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L84)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### commands

> `readonly` **commands**: `object`

##### commands.failAtFault

> `readonly` **failAtFault**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

##### commands.failRandomlyAtFault

> `readonly` **failRandomlyAtFault**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

##### id

> `readonly` **id**: `4294048774` = `0xfff1fc06`

##### name

> `readonly` **name**: `"FaultInjection"` = `"FaultInjection"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L60)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L87)

***

### TlvFailAtFaultRequest

> `const` **TlvFailAtFaultRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the FaultInjection failAtFault command

#### Type declaration

##### id

> **id**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### numCallsToFail

> **numCallsToFail**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### numCallsToSkip

> **numCallsToSkip**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### takeMutex

> **takeMutex**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`boolean`\>

##### type

> **type**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`FaultType`](enumerations/FaultType.md)\>

#### Source

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L30)

***

### TlvFailRandomlyAtFaultRequest

> `const` **TlvFailRandomlyAtFaultRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the FaultInjection failRandomlyAtFault command

#### Type declaration

##### id

> **id**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### percentage

> **percentage**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

##### type

> **type**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`FaultType`](enumerations/FaultType.md)\>

#### Source

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L46)
