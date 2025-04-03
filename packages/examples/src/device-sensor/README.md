# Temperature/Humidity sensor with a CLI command interface to get the value

This example shows how to build a simple Sensor device with a temperature (default) or humidity (`--type humidity`) sensor. The sensor values are updated by default every 60 seconds, or the number of seconds specified via the CLI parameter `--interval`. The value can be defined by the output of a CLI script provided via parameter `--value` or, if no command is specified, are randomly set in the interval -50..+50. To read the Temperature of a Raspberry Pi as example use `--value ="echo \$((\$(</sys/class/thermal/thermal_zone0/temp)/10))"` or to read temperature of your location `--value="curl -s 'wttr.in/?format=%t\&m' | sed 's/°C//'| awk '{print \$1*100}'"` (or use `?format=%h` for humidity).

## Usage

For general documentation about the CLI parameters or environment variables that can be used for matter.js please refer to the [Examples README](../../../examples/README.md#cli-usage).

Execute the following command in the examples root directory

```bash
npm run matter-sensor
```
