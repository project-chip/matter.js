[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/model](../../README.md) / Access

# Namespace: Access

## Index

### Enumerations

- [Fabric](enumerations/Fabric.md)
- [Privilege](enumerations/Privilege.md)
- [PrivilegeName](enumerations/PrivilegeName.md)
- [Rw](enumerations/Rw.md)
- [Timed](enumerations/Timed.md)

## Type Aliases

### Ast

> **Ast**: `object`

#### Type declaration

##### fabric?

> `optional` **fabric**: \`$\{Fabric\}\`

##### readPriv?

> `optional` **readPriv**: \`$\{Privilege\}\`

##### rw?

> `optional` **rw**: \`$\{Rw\}\`

##### timed?

> `optional` **timed**: `boolean`

##### writePriv?

> `optional` **writePriv**: \`$\{Privilege\}\`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:49

***

### Authorization

> **Authorization**: *typeof* [`V`](README.md#v-1) \| *typeof* [`VO`](README.md#vo) \| *typeof* [`VM`](README.md#vm) \| *typeof* [`VA`](README.md#va) \| *typeof* [`O`](README.md#o) \| *typeof* [`OM`](README.md#om) \| *typeof* [`OA`](README.md#oa) \| *typeof* [`M`](README.md#m) \| *typeof* [`MA`](README.md#ma) \| *typeof* [`A`](README.md#a)

All valid privilege tags.

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:171

***

### Definition

> **Definition**: [`Ast`](README.md#ast) \| ([`Flag`](README.md#flag) \| [`Authorization`](README.md#authorization))[] \| `string` \| `undefined`

Defines access as defined in the Matter 1.1 specification.

In TypeScript and JavaScript, definitions adhering to this type look
like `[ RW, VA ]` or `[ Access.Rw.W, Access.Privilege.Operate ]`.

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:182

***

### Flag

> **Flag**: [`Rw`](enumerations/Rw.md) \| [`Fabric`](enumerations/Fabric.md) \| [`Privilege`](enumerations/Privilege.md) \| [`Timed`](enumerations/Timed.md)

All atomic access control values.

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:145

***

### Flags

> **Flags**: [`Flag`](README.md#flag)[]

A defined set of access control values.

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:149

***

### TimedTag

> **TimedTag**: *typeof* [`T`](README.md#t)

All valid timed tags.

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:175

## Variables

### A

> `const` **A**: [[`Administer`](enumerations/Privilege.md#administer)]

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:160

***

### Default

> `const` **Default**: [`Access`](../../classes/Access.md)

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:185

***

### F

> `const` **F**: [`Scoped`](enumerations/Fabric.md#scoped) = `Fabric.Scoped`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:155

***

### M

> `const` **M**: [[`Manage`](enumerations/Privilege.md#manage)]

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:159

***

### MA

> `const` **MA**: [[`Manage`](enumerations/Privilege.md#manage), [`Administer`](enumerations/Privilege.md#administer)]

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:166

***

### O

> `const` **O**: [[`Operate`](enumerations/Privilege.md#operate)]

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:158

***

### OA

> `const` **OA**: [[`Operate`](enumerations/Privilege.md#operate), [`Administer`](enumerations/Privilege.md#administer)]

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:165

***

### OM

> `const` **OM**: [[`Operate`](enumerations/Privilege.md#operate), [`Manage`](enumerations/Privilege.md#manage)]

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:164

***

### PrivilegeLevel

> `const` **PrivilegeLevel**: `object`

Relative ordering of privilege.

#### Type declaration

##### A

> **A**: [`AccessLevel`](../../../cluster/enumerations/AccessLevel.md)

##### M

> **M**: [`AccessLevel`](../../../cluster/enumerations/AccessLevel.md)

##### O

> **O**: [`AccessLevel`](../../../cluster/enumerations/AccessLevel.md)

##### V

> **V**: [`AccessLevel`](../../../cluster/enumerations/AccessLevel.md)

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:127

***

### R

> `const` **R**: [`Read`](enumerations/Rw.md#read) = `Rw.Read`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:150

***

### RW

> `const` **RW**: [`ReadWrite`](enumerations/Rw.md#readwrite) = `Rw.ReadWrite`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:152

***

### RWo

> `const` **RWo**: [`ReadWriteOption`](enumerations/Rw.md#readwriteoption) = `Rw.ReadWriteOption`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:153

***

### S

> `const` **S**: [`Sensitive`](enumerations/Fabric.md#sensitive) = `Fabric.Sensitive`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:156

***

### T

> `const` **T**: [`Required`](enumerations/Timed.md#required) = `Timed.Required`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:167

***

### U

> `const` **U**: [`Unaware`](enumerations/Fabric.md#unaware) = `Fabric.Unaware`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:154

***

### V

> `const` **V**: [`View`](enumerations/Privilege.md#view) = `Privilege.View`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:157

***

### VA

> `const` **VA**: [[`View`](enumerations/Privilege.md#view), [`Administer`](enumerations/Privilege.md#administer)]

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:163

***

### VM

> `const` **VM**: [[`View`](enumerations/Privilege.md#view), [`Manage`](enumerations/Privilege.md#manage)]

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:162

***

### VO

> `const` **VO**: [[`View`](enumerations/Privilege.md#view), [`Operate`](enumerations/Privilege.md#operate)]

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:161

***

### W

> `const` **W**: [`Write`](enumerations/Rw.md#write) = `Rw.Write`

#### Source

packages/matter.js/dist/esm/model/aspects/Access.d.ts:151
