[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [KeypadInput](../modules/cluster_export.KeypadInput.md) / Status

# Enumeration: Status

[cluster/export](../modules/cluster_export.md).[KeypadInput](../modules/cluster_export.KeypadInput.md).Status

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.8.4.1

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

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:142](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L142)

___

### Success

• **Success** = ``0``

Command succeeded

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:132](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L132)

___

### UnsupportedKey

• **UnsupportedKey** = ``1``

Command failed: Key code is not supported.

#### Defined in

[packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts:137](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/KeypadInputCluster.ts#L137)
