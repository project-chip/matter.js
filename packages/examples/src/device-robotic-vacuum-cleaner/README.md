# Robotic Vacuum Cleaner Example

This example shows how to run a Robot Vacuum Cleaning device. This is a bit more complex and implements the following 
(fictional) features and state engine:
* Supports Run Modes: Idle, Quick-Clean (one cleaning round), Auto-Clean (3 rounds for one cycle and does cleaning again after 3h)
* Supports Cleaning Modes: Vacuuming and Mopping
* Supports Cleaning Areas: Living Room, Kitchen, Bedroom, Bathroom
* State Engine:
  * One cleaning/mapping round takes 10 minutes
  * Returning to the charger (after Cleaning/Mapping) takes 30s
  * Recharging takes 2 Minutes (always happening when device reached charger)
  * In Auto Mode the RVC is repeating the cleaning after 3h

## Usage

For general documentation about the CLI parameters or environment variables that can be used for matter.js please refer to the [Examples README](../../../examples/README.md#cli-usage).

Execute the following command in the examples root directory

```bash
npm run matter-rvc
```
