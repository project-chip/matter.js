[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [KeypadInput](../modules/cluster_export.KeypadInput.md) / Status

# Enumeration: Status

[cluster/export](../modules/cluster_export.md).[KeypadInput](../modules/cluster_export.KeypadInput.md).Status

**`See`**

MatterSpecification.v11.Cluster § 6.8.4.1

## Table of contents

### Enumeration Members

- [InvalidKeyInCurrentState](cluster_export.KeypadInput.Status.md#invalidkeyincurrentstate)
- [Success](cluster_export.KeypadInput.Status.md#success)
- [UnsupportedKey](cluster_export.KeypadInput.Status.md#unsupportedkey)

## Enumeration Members

### InvalidKeyInCurrentState

• **InvalidKeyInCurrentState** = ``2``

Command failed: Requested key code is invalid in the context of the responder’s current state.

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L146)

___

### Success

• **Success** = ``0``

Command succeeded

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:136](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L136)

___

### UnsupportedKey

• **UnsupportedKey** = ``1``

Command failed: Key code is not supported.

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:141](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L141)
