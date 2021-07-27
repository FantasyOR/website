# Analyze

Reports code metrics, rules and anti-patterns violations. To execute the command, run

```sh
$ dart run dart_code_metrics:metrics analyze lib

# or for a Flutter package
$ flutter pub run dart_code_metrics:metrics analyze lib
```

Full command description:

```text
Usage: metrics analyze [arguments...] <directories>

-h, --help                                        Print this usage information.


-r, --reporter=<console>                          The format of the output of the analysis
                                                  [console (default), console-verbose,
                                                  codeclimate, github, gitlab, html, json]
-o, --output-directory=<OUTPUT>                   Write HTML output to OUTPUT
                                                  (defaults to "metrics/")


    --cyclomatic-complexity=<20>                  Cyclomatic Complexity threshold
    --lines-of-code=<100>                         Lines of Code threshold
    --maximum-nesting-level=<5>                   Maximum Nesting Level threshold
    --number-of-methods=<10>                      Number of Methods threshold
    --number-of-parameters=<4>                    Number of Parameters threshold
    --source-lines-of-code=<50>                   Source lines of Code threshold
    --weight-of-class=<0.33>                      Weight Of a Class threshold


    --root-folder=<./>                            Root folder
                                                  (defaults to current directory)
    --exclude=<{/**.g.dart,/**.template.dart}>    File paths in Glob syntax to be exclude
                                                  (defaults to "{/**.g.dart,/**.template.dart}")


    --set-exit-on-violation-level=<warning>       Set exit code 2 if code violations
                                                  have the same or higher level
                                                  [none, warning, alarm]
```

## Output example

### Console

Use `--reporter=console` to enable this format.

![Console](../../static/img/console-report.png)

### HTML

Use `--reporter=html` to enable this format.

#### HTML report overview

![HTML](../../static/img/html-report.png)

#### HTML single file report

![HTML](../../static/img/html-single-file-report.png)

#### HTML report details

![HTML](../../static/img/html-details-report.png)

### JSON

The reporter prints a single JSON object containing meta information and the violations grouped by a file. Use `--reporter=json` to enable this format.

#### The **root** object fields are

- `formatVersion` - an integer representing the format version (will be incremented each time the serialization format changes)
- `timestamp` - a creation time of the report in YYYY-MM-DD HH:MM:SS format
- `records` - an array of [objects](#the-record-object-fields-are)

```JSON
{
  "formatVersion": 2,
  "timestamp": "2021-04-11 14:44:42",
  "records": [
    {
      ...
    },
    {
      ...
    },
    {
      ...
    }
  ]
}
```

#### The **record** object fields are

- `path` - a relative path to the target file
- `classes` - a map with **class name** as the **key** and **[class report](#the-report-object-fields-are)** as the **value**
- `functions` - a map with **function name** as the **key** and **[function report](#the-report-object-fields-are)** as the **value**
- `issues` - an array of [issues](#the-issue-object-fields-are) detected in the target file
- `antiPatternCases` - an array of [anti-pattern cases](#the-issue-object-fields-are) detected in the target file

```JSON
{
  "path": "lib/src/metrics/metric_computation_result.dart",
  "classes": {
    ...
  },
  "functions": {
    ...
  },
  "issues": [
    ...
  ],
  "antiPatternCases": [
    ...
  ]
}
```

#### The **report** object fields are

- `codeSpan` - a source [code span](#the-code-span-object-fields-are) of the target entity
- `metrics` - an array with target entity [metrics](#the-metric-value-object-fields-are)

```JSON
{
  "codeSpan": {
    ...
  },
  "metrics": [
    ...
  ]
}
```

#### The **code span** object fields are

- `start` - a start [location](#the-location-object-fields-are) of an entity
- `end` - an end [location](#the-location-object-fields-are) of an entity
- `text` - a source code text of an entity

```JSON
{
  "start": {
    ...
  },
  "end": {
    ...
  },
  "text": "entity source code"
}
```

#### The **location** object fields are

- `offset` - a zero-based offset of the location in the source
- `line` - a zero-based line of the location in the source
- `column` - a zero-based column of the location in the source

```JSON
{
  "offset": 156,
  "line": 7,
  "column": 1
}
```

#### The **metric value** object fields are

- `metricsId` - an id of the computed metric
- `value` - an actual value computed by the metric
- `level` - a level of the value computed by the metric
- `comment` - a message with information about the value
- `recommendation` - a message with information about how the user can improve the value _(optional)_
- `context` - an [additional information](#the-context-message-object-fields-are) associated with the value that helps understand how the metric was computed

```JSON
{
  "metricsId": "number-of-methods",
  "value": 14,
  "level": "warning",
  "comment": "This class has 14 methods, which exceeds the maximum of 10 allowed.",
  "recommendation": "Consider breaking this class up into smaller parts.",
  "context": [
    ...
  ]
}
```

#### The **context message** object fields are

- `message` - an message to be displayed to the user
- `codeSpan` - a source [code span](#the-code-span-object-fields-are) associated with or referenced by the message

```JSON
{
  "message": "getter complexityEntities increase metric value",
  "codeSpan": {
    ...
  }
}
```

#### The **issue** object fields are

- `ruleId` - an id of the rule associated with the issue
- `documentation` - an url of a page containing documentation associated with the issue
- `codeSpan` - a source [code span](#the-code-span-object-fields-are) associated with the issue
- `severity` - a severity of the issue
- `message` - a short message
- `verboseMessage` - a verbose message containing information about how the user can fix the issue (optional)
- `suggestion` - a [suggested](#the-suggestion-object-fields-are) relevant change (optional)

```JSON
{
  "ruleId": "long-parameter-list",
  "documentation": "https://git.io/JUGrU",
  "codeSpan": {
    ...
  },
  "severity": "none",
  "message": "Long Parameter List. This function require 5 arguments.",
  "verboseMessage": "Based on configuration of this package, we don't recommend writing a function with argument count more than 4.",
  "suggestion": {
    ...
  }
}
```

#### The **suggestion** object fields are

- `comment` - a human-readable description of the change to be applied
- `replacement` - a code with changes to replace original code with

```JSON
{
  "comment": "Add trailing comma",
  "replacement": "WeightOfClassMetric.metricId: (config) => WeightOfClassMetric(config: config),"
}
```

### GitHub

Reports about design and static code diagnostics issues in pull requests based on GitHub Actions Workflow commands. Use `--reporter=github` to enable this format.

- Install dart/flutter and get packages:

  **Flutter example**

  ```yaml
  jobs:
    your_job_name:
      steps:
        - name: Install Flutter
          uses: subosito/flutter-action@master
          with:
            channel: stable

        - name: Install dependencies
          run: flutter pub get
        ...
  ```

  **Dart example**

  ```yaml
  jobs:
    your_job_name:
      steps:
        - name: Install Dart
          uses: dart-lang/setup-dart@v1

        - name: Install dependencies
          run: flutter pub get
        ...
  ```

- Run dart_code_metrics package:

  **`dart_code_metrics` is added to `dev_dependencies`**

  ```yaml
  - name: Run Code Metrics
    run: flutter pub run dart_code_metrics:metrics --reporter=github lib
    # OR
    # run: dart pub run dart_code_metrics:metrics --reporter=github lib
  ```

  **`dart_code_metrics` is not added to `dev_dependencies` (run as a global dependency)**

  ```yaml
  - name: Run Code Metrics
    run: flutter pub global activate dart_code_metrics && flutter pub global run dart_code_metrics:metrics --reporter=github lib
    # OR
    # run: dart pub global activate dart_code_metrics && dart pub global run dart_code_metrics:metrics --reporter=github lib
  ```

#### Full Example

```yaml
jobs:
  your_job_name:
    steps:
      - name: Install Flutter
        uses: subosito/flutter-action@master
        with:
          channel: stable

      - name: Install dependencies
        run: flutter pub get

      - name: Run Code Metrics
        run: flutter pub run dart_code_metrics:metrics --reporter=github lib
```

Example of a report in a PR:

![Report example](../../static/img/annotation.png)