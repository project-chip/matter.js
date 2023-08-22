[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](exports_model.md) / Access

# Namespace: Access

[exports/model](exports_model.md).Access

## Table of contents

### Enumerations

- [Fabric](../enums/exports_model.Access.Fabric.md)
- [Privilege](../enums/exports_model.Access.Privilege.md)
- [PrivilegeName](../enums/exports_model.Access.PrivilegeName.md)
- [Rw](../enums/exports_model.Access.Rw.md)
- [Timed](../enums/exports_model.Access.Timed.md)

### Type Aliases

- [Ast](exports_model.Access.md#ast)
- [Authorization](exports_model.Access.md#authorization)
- [Definition](exports_model.Access.md#definition)
- [Flag](exports_model.Access.md#flag)
- [Flags](exports_model.Access.md#flags)
- [TimedTag](exports_model.Access.md#timedtag)

### Variables

- [A](exports_model.Access.md#a)
- [F](exports_model.Access.md#f)
- [M](exports_model.Access.md#m)
- [MA](exports_model.Access.md#ma)
- [O](exports_model.Access.md#o)
- [OA](exports_model.Access.md#oa)
- [OM](exports_model.Access.md#om)
- [PrivilegePriority](exports_model.Access.md#privilegepriority)
- [R](exports_model.Access.md#r)
- [RW](exports_model.Access.md#rw)
- [RWo](exports_model.Access.md#rwo)
- [S](exports_model.Access.md#s)
- [T](exports_model.Access.md#t)
- [U](exports_model.Access.md#u)
- [V](exports_model.Access.md#v)
- [VA](exports_model.Access.md#va)
- [VM](exports_model.Access.md#vm)
- [VO](exports_model.Access.md#vo)
- [W](exports_model.Access.md#w)

## Type Aliases

### Ast

Ƭ **Ast**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fabric?` | \`${Fabric}\` |
| `readPriv?` | \`${Privilege}\` |
| `rw?` | \`${Rw}\` |
| `timed?` | `boolean` |
| `writePriv?` | \`${Privilege}\` |

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:40

___

### Authorization

Ƭ **Authorization**: typeof [`V`](exports_model.Access.md#v) \| typeof [`VO`](exports_model.Access.md#vo) \| typeof [`VM`](exports_model.Access.md#vm) \| typeof [`VA`](exports_model.Access.md#va) \| typeof [`O`](exports_model.Access.md#o) \| typeof [`OM`](exports_model.Access.md#om) \| typeof [`OA`](exports_model.Access.md#oa) \| typeof [`M`](exports_model.Access.md#m) \| typeof [`MA`](exports_model.Access.md#ma) \| typeof [`A`](exports_model.Access.md#a)

All valid privilege tags.

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:162

___

### Definition

Ƭ **Definition**: [`Ast`](exports_model.Access.md#ast) \| ([`Flag`](exports_model.Access.md#flag) \| [`Authorization`](exports_model.Access.md#authorization))[] \| `string` \| `undefined`

Defines access as defined in the Matter 1.1 specification.

In TypeScript and JavaScript, definitions adhering to this type look
like `[ RW, VA ]` or `[ Access.Rw.W, Access.Privilege.Operate ]`.

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:173

___

### Flag

Ƭ **Flag**: [`Rw`](../enums/exports_model.Access.Rw.md) \| [`Fabric`](../enums/exports_model.Access.Fabric.md) \| [`Privilege`](../enums/exports_model.Access.Privilege.md) \| [`Timed`](../enums/exports_model.Access.Timed.md)

All atomic access control values.

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:136

___

### Flags

Ƭ **Flags**: [`Flag`](exports_model.Access.md#flag)[]

A defined set of access control values.

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:140

___

### TimedTag

Ƭ **TimedTag**: typeof [`T`](exports_model.Access.md#t)

All valid timed tags.

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:166

## Variables

### A

• `Const` **A**: [[`Administer`](../enums/exports_model.Access.Privilege.md#administer)]

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:151

___

### F

• `Const` **F**: [`Scoped`](../enums/exports_model.Access.Fabric.md#scoped) = `Fabric.Scoped`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:146

___

### M

• `Const` **M**: [[`Manage`](../enums/exports_model.Access.Privilege.md#manage)]

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:150

___

### MA

• `Const` **MA**: [[`Manage`](../enums/exports_model.Access.Privilege.md#manage), [`Administer`](../enums/exports_model.Access.Privilege.md#administer)]

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:157

___

### O

• `Const` **O**: [[`Operate`](../enums/exports_model.Access.Privilege.md#operate)]

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:149

___

### OA

• `Const` **OA**: [[`Operate`](../enums/exports_model.Access.Privilege.md#operate), [`Administer`](../enums/exports_model.Access.Privilege.md#administer)]

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:156

___

### OM

• `Const` **OM**: [[`Operate`](../enums/exports_model.Access.Privilege.md#operate), [`Manage`](../enums/exports_model.Access.Privilege.md#manage)]

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:155

___

### PrivilegePriority

• `Const` **PrivilegePriority**: `Object`

Relative ordering of privilege.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `A` | `number` |
| `M` | `number` |
| `O` | `number` |
| `V` | `number` |

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:118

___

### R

• `Const` **R**: [`Read`](../enums/exports_model.Access.Rw.md#read) = `Rw.Read`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:141

___

### RW

• `Const` **RW**: [`ReadWrite`](../enums/exports_model.Access.Rw.md#readwrite) = `Rw.ReadWrite`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:143

___

### RWo

• `Const` **RWo**: [`ReadWriteOption`](../enums/exports_model.Access.Rw.md#readwriteoption) = `Rw.ReadWriteOption`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:144

___

### S

• `Const` **S**: [`Sensitive`](../enums/exports_model.Access.Fabric.md#sensitive) = `Fabric.Sensitive`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:147

___

### T

• `Const` **T**: [`Required`](../enums/exports_model.Access.Timed.md#required) = `Timed.Required`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:158

___

### U

• `Const` **U**: [`Unaware`](../enums/exports_model.Access.Fabric.md#unaware) = `Fabric.Unaware`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:145

___

### V

• `Const` **V**: [`View`](../enums/exports_model.Access.Privilege.md#view) = `Privilege.View`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:148

___

### VA

• `Const` **VA**: [[`View`](../enums/exports_model.Access.Privilege.md#view), [`Administer`](../enums/exports_model.Access.Privilege.md#administer)]

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:154

___

### VM

• `Const` **VM**: [[`View`](../enums/exports_model.Access.Privilege.md#view), [`Manage`](../enums/exports_model.Access.Privilege.md#manage)]

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:153

___

### VO

• `Const` **VO**: [[`View`](../enums/exports_model.Access.Privilege.md#view), [`Operate`](../enums/exports_model.Access.Privilege.md#operate)]

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:152

___

### W

• `Const` **W**: [`Write`](../enums/exports_model.Access.Rw.md#write) = `Rw.Write`

#### Defined in

packages/matter.js/dist/cjs/model/aspects/Access.d.ts:142
