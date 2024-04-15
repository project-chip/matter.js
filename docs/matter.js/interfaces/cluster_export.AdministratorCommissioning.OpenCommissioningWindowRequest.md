[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [AdministratorCommissioning](../modules/cluster_export.AdministratorCommissioning.md) / OpenCommissioningWindowRequest

# Interface: OpenCommissioningWindowRequest

[cluster/export](../modules/cluster_export.md).[AdministratorCommissioning](../modules/cluster_export.AdministratorCommissioning.md).OpenCommissioningWindowRequest

Input to the AdministratorCommissioning openCommissioningWindow command

**`See`**

MatterSpecification.v11.Core § 11.18.8.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvOpenCommissioningWindowRequest`](../modules/cluster_export.AdministratorCommissioning.md#tlvopencommissioningwindowrequest)\>

  ↳ **`OpenCommissioningWindowRequest`**

## Table of contents

### Properties

- [commissioningTimeout](cluster_export.AdministratorCommissioning.OpenCommissioningWindowRequest.md#commissioningtimeout)
- [discriminator](cluster_export.AdministratorCommissioning.OpenCommissioningWindowRequest.md#discriminator)
- [iterations](cluster_export.AdministratorCommissioning.OpenCommissioningWindowRequest.md#iterations)
- [pakePasscodeVerifier](cluster_export.AdministratorCommissioning.OpenCommissioningWindowRequest.md#pakepasscodeverifier)
- [salt](cluster_export.AdministratorCommissioning.OpenCommissioningWindowRequest.md#salt)

## Properties

### commissioningTimeout

• **commissioningTimeout**: `number`

This field shall specify the time in seconds during which commissioning session establishment is allowed by
the Node. This is known as Open Commissioning Window (OCW). This timeout value shall follow guidance as
specified in Announcement Duration. The CommissioningTimeout applies only to cessation of any announcements
and to accepting of new commissioning sessions; it does not apply to abortion of connections, i.e., a
commissioning session SHOULD NOT abort prematurely upon expiration of this timeout.

**`See`**

MatterSpecification.v11.Core § 11.18.8.1.1

#### Inherited from

TypeFromSchema.commissioningTimeout

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L73)

___

### discriminator

• **discriminator**: `number`

This field shall be used by the Node as the long discriminator for DNS-SD advertisement (see Commissioning
Discriminator) for discovery by the new Administrator. The new Administrator can find and filter DNS-SD
records by long discriminator to locate and initiate commissioning with the appropriate Node.

**`See`**

MatterSpecification.v11.Core § 11.18.8.1.3

#### Inherited from

TypeFromSchema.discriminator

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L94)

___

### iterations

• **iterations**: `number`

This field shall be used by the Node as the PAKE iteration count associated with the ephemeral PAKE passcode
verifier to be used for this commissioning, which shall be sent by the Node to the new Administrator’s
software as response to the PBKDFParamRequest during PASE negotiation. The permitted range of values shall
match the range specified in Section 3.9, “Password-Based Key Derivation Function (PBKDF)”, within the
definition of the Crypto_PBKDFParameterSet.

**`See`**

MatterSpecification.v11.Core § 11.18.8.1.4

#### Inherited from

TypeFromSchema.iterations

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:105](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L105)

___

### pakePasscodeVerifier

• **pakePasscodeVerifier**: `Uint8Array`

This field shall specify an ephemeral PAKE passcode verifier (see Section 3.10, “Password-Authenticated Key
Exchange (PAKE)”) computed by the existing Administrator to be used for this commissioning. The field is
concatenation of two values (w0 || L) shall be (CRYPTO_GROUP_SIZE_BYTES +
CRYPTO_PUBLIC_KEY_SIZE_BYTES)-octets long as detailed in Crypto_PAKEValues_Responder. It shall be derived
from an ephemeral passcode (See PAKE). It shall be deleted by the Node at the end of commissioning or
expiration of OCW, and shall be deleted by the existing Administrator after sending it to the Node(s).

**`See`**

MatterSpecification.v11.Core § 11.18.8.1.2

#### Inherited from

TypeFromSchema.pakePasscodeVerifier

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L85)

___

### salt

• **salt**: `Uint8Array`

This field shall be used by the Node as the PAKE Salt associated with the ephemeral PAKE passcode verifier
to be used for this commissioning, which shall be sent by the Node to the new

Administrator’s software as response to the PBKDFParamRequest during PASE negotiation. The constraints on
the value shall match those specified in Section 3.9, “Password-Based Key Derivation Function (PBKDF)”,
within the definition of the Crypto_PBKDFParameterSet.

When a Node receives the Open Commissioning Window command, it shall begin advertising on DNS-SD as
described in Section 4.3.1, “Commissionable Node Discovery” and for a time period as described in Section
11.18.8.1.1, “CommissioningTimeout Field”. When the command is received by a SED, it shall enter into active
mode and set its fast-polling interval to SLEEPY_ACTIVE_INTERVAL for at least the entire duration of the
CommissioningTimeout.

**`See`**

MatterSpecification.v11.Core § 11.18.8.1.5

#### Inherited from

TypeFromSchema.salt

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:123](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L123)
