import { DisplayProcessor, SpecReporter, StacktraceOption } from "jasmine-spec-reporter";
import JasmineStartedInfo = jasmine.JasmineStartedInfo

class CustomProcessor extends DisplayProcessor {
  public displayJasmineStarted(info: JasmineStartedInfo, log: string): string {
    return `TypeScript ${log}`;
  }
}

const env = jasmine.getEnv();
env.clearReporters();
env.addReporter(
  new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.NONE,
    },
    customProcessors: [CustomProcessor],
  })
);
