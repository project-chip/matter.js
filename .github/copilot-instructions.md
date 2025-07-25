# GitHub Copilot Instructions for matter.js

## Project Overview

matter.js is a comprehensive TypeScript implementation of the Matter/Thread smart home protocol. This is a monorepo containing multiple packages that work together to provide Matter protocol support for JavaScript/TypeScript applications.

## Architecture & Key Packages

### Core Packages
- `@matter/general` - Core utilities, crypto, networking abstractions
- `@matter/protocol` - Matter protocol implementation, commissioning, clustering
- `@matter/model` - Matter data model, cluster definitions, device types
- `@matter/node` - Node/endpoint implementations, behaviors, supervision
- `@matter/types` - TypeScript type definitions for Matter clusters and data types

### Platform Packages
- `@matter/nodejs` - Node.js platform implementation
- `@matter/nodejs-ble` - Bluetooth Low Energy support for Node.js
- `@matter/nodejs-shell` - Interactive shell for Matter operations

### Application Packages
- `@matter/main` - Main entry point package
- `@matter/examples` - Example applications and devices
- `@matter/create` - Project scaffolding tool
- `@project-chip/matter.js` - Legacy compatibility package

### Development Tools
- `packages/tools` - Build system, documentation generation, project management
- `support/codegen` - Code generation from Matter specifications
- `support/chip` - Integration with Project CHIP/connectedhomeip

## Code Generation System

This project heavily uses code generation:

### Cluster Generation
- Clusters are generated from Matter specifications in `support/codegen/src/clusters/`
- Use `ClusterFile`, `ClusterComponentGenerator` for cluster definitions
- Generated files follow pattern: `src/clusters/[ClusterName].ts`

### Endpoint Generation  
- Device endpoints generated in `support/codegen/src/endpoints/`
- Use `EndpointFile`, `RequirementGenerator` for device type definitions
- Generated files follow pattern: `src/endpoints/[DeviceType].ts`

### Forward Exports
- Re-export generation in `support/codegen/src/forwards/`
- Creates proxy modules for clean package boundaries

## Development Patterns

### Behaviors
- Core abstraction for endpoint functionality in `@matter/node`
- Extend `Behavior` class for cluster implementations
- Use `@behavior` decorator for registration
- File pattern: `src/behaviors/[cluster-name]/[ClusterName]Behavior.ts`

### Models
- Use `ClusterModel`, `DeviceTypeModel`, `AttributeModel` etc. from `@matter/model`
- Models represent Matter specification elements
- Support variance analysis for conditional features

### Type Safety
- Extensive use of TypeScript generics and conditional types
- `MutableCluster` for runtime cluster composition
- Schema validation with `Schema` classes

## Build System

### Project Structure
- Monorepo managed with custom build tools in `packages/tools`
- Use `matter-build` command for building packages
- Support for ESM and CommonJS outputs
- TypeScript project references for incremental builds

### Key Build Commands
```bash
npm run build          # Build all packages
npm run build:clean    # Clean build
matter-build docs      # Generate documentation
matter-build graph     # Show dependency graph
```

### Code Generation Commands
```bash
npm run codegen:spec   # Generate from Matter spec
npm run codegen:chip   # Generate from CHIP XML
npm run codegen:clusters # Generate cluster definitions
```

## Testing Patterns

### Unit Tests
- Use Jest framework
- Test files: `*.test.ts` alongside source
- Mock external dependencies, especially platform-specific code

### Integration Tests
- Device commissioning and interaction tests
- Use `@matter/examples` for test scenarios
- CHIP tool integration for interoperability

## Coding Guidelines

### File Organization
- One main export per file
- Use barrel exports (`index.ts`) for public APIs
- Separate internal utilities with `.internal.ts` suffix

### Naming Conventions
- PascalCase for classes, interfaces, types
- camelCase for functions, variables, properties
- SCREAMING_SNAKE_CASE for constants
- kebab-case for file names (when multiple words)

### Import Patterns
```typescript
// Prefer specific imports
import { ClusterModel } from "@matter/model";

// Use type-only imports when possible
import type { Cluster } from "@matter/types";

// Internal imports use relative paths
import { someUtility } from "./utils.js";
```

### Error Handling
- Use specific error classes: `CommissioningError`, `ConstraintError`, etc.
- Provide detailed error messages with context
- Use `MatterError` as base class for Matter-specific errors

### Async Patterns
- Prefer `async/await` over Promises
- Use `using` for resource management where applicable
- Handle cancellation with `AbortSignal` when appropriate

## Matter Protocol Specifics

### Clusters
- Implement server behaviors for device functionality
- Use feature flags for conditional cluster elements
- Support both mandatory and optional cluster features

### Commissioning
- Follow Matter commissioning flow patterns
- Handle network credentials securely
- Support both WiFi and Thread network setup

### Data Types
- Use TLV (Tag-Length-Value) encoding for Matter data
- Implement proper schema validation
- Support fabric-scoped data handling

## Documentation

### Code Documentation
- Use JSDoc for all public APIs
- Include `@see` references to Matter specification sections
- Document cluster conformance requirements

### Examples
- Provide working examples in `@matter/examples`
- Include both device and controller examples
- Document setup and usage instructions

## Platform Considerations

### Node.js
- Use platform abstractions from `@matter/general`
- Implement platform-specific code in `@matter/nodejs`
- Support both CommonJS and ESM module systems

### Cross-Platform
- Avoid Node.js-specific APIs in core packages
- Use dependency injection for platform services
- Test on multiple Node.js versions (20.x, 22.x, 24.x)

## Performance Guidelines

- Use lazy initialization for expensive operations
- Cache cluster definitions and models
- Minimize memory allocations in hot paths
- Use efficient data structures for large datasets

## Security Considerations

- Handle cryptographic operations through `@matter/general/crypto`
- Validate all input data with schemas
- Implement proper access control for cluster operations
- Follow Matter security requirements for commissioning