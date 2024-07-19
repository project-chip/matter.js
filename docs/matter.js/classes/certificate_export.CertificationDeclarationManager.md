[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [certificate/export](../modules/certificate_export.md) / CertificationDeclarationManager

# Class: CertificationDeclarationManager

[certificate/export](../modules/certificate_export.md).CertificationDeclarationManager

## Table of contents

### Constructors

- [constructor](certificate_export.CertificationDeclarationManager.md#constructor)

### Methods

- [generate](certificate_export.CertificationDeclarationManager.md#generate)

## Constructors

### constructor

• **new CertificationDeclarationManager**(): [`CertificationDeclarationManager`](certificate_export.CertificationDeclarationManager.md)

#### Returns

[`CertificationDeclarationManager`](certificate_export.CertificationDeclarationManager.md)

## Methods

### generate

▸ **generate**(`vendorId`, `productId`, `provisional?`): `Uint8Array`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `vendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) | `undefined` |
| `productId` | `number` | `undefined` |
| `provisional` | `boolean` | `false` |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/certificate/CertificationDeclarationManager.ts:34](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/certificate/CertificationDeclarationManager.ts#L34)
