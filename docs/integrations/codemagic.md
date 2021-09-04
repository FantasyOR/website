# Codemagic

[Codemagic](http://codemagic.io/) is a CI/CD solution which helps you test and release your Flutter apps with zero configuration and no pain.

## Usage {#usage}

To enable Dart Code Metrics add the following script to `codemagic.yaml`

```yml title="codemagic.yaml"
scripts:
  - echo 'previous step'
  - name: Dart Code Metrics
    script: |
      mkdir -p metrics-results
      flutter pub run dart_code_metrics:metrics analyze lib --reporter=json > metrics-results/dart_code_metrics.json      
    test_report: metrics-results/dart_code_metrics.json
```

check out [Codemagic docs](https://docs.codemagic.io/yaml-testing/dart-code-metrics/) for more details about this setup.

Alternatively, you can use Dart Code Metrics with Flutter workflow editor. To do so, enable Dart Code Metrics option:

![Dart Code Metrics Flutter workflow editor](../../static/img/dcm-flutter-workflow-editor.png)

check out [Codemagic docs](https://docs.codemagic.io/flutter-testing/static-code-analysis/#dart-code-metrics) for more details about this setup.

### Output example {#output-example}

#### Results preview {#results-preview}

![Dart Code Metrics results](../../static/img/dcm-results.png)

![Dart Code Metrics results expanded](../../static/img/dcm-results-expanded.png)

#### Logs {#logs}

![Dart Code Metrics logs](../../static/img/dcm-logs.png)