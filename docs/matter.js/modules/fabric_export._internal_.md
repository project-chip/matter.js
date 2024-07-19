[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [fabric/export](fabric_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Namespaces

- [OperationalGroupKeySet](fabric_export._internal_.OperationalGroupKeySet.md)

### Type Aliases

- [OperationalGroupKeySet](fabric_export._internal_.md#operationalgroupkeyset)

## Type Aliases

### OperationalGroupKeySet

Ƭ **OperationalGroupKeySet**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvGroupKeySetStruct`](cluster_export.GroupKeyManagement.md#tlvgroupkeysetstruct)\> & \{ `groupSessionId0`: `number` \| ``null`` ; `groupSessionId1`: `number` \| ``null`` ; `groupSessionId2`: `number` \| ``null`` ; `operationalEpochKey0`: [`ByteArray`](util_export.md#bytearray) ; `operationalEpochKey1`: [`ByteArray`](util_export.md#bytearray) \| ``null`` ; `operationalEpochKey2`: [`ByteArray`](util_export.md#bytearray) \| ``null``  }

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:57](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/fabric/Fabric.ts#L57)

[packages/matter.js/src/fabric/Fabric.ts:66](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/fabric/Fabric.ts#L66)
