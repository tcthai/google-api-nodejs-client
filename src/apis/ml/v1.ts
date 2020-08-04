// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace ml_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * AI Platform Training &amp; Prediction API
   *
   * An API to enable creating and using machine learning models.
   *
   * @example
   * const {google} = require('googleapis');
   * const ml = google.ml('v1');
   *
   * @namespace ml
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Ml
   */
  export class Ml {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Message that represents an arbitrary HTTP body. It should only be used for payload formats that can&#39;t be represented as JSON, such as raw binary or an HTML page.   This message can be used both in streaming and non-streaming API methods in the request as well as the response.  It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body.  Example:      message GetResourceRequest {       // A unique request id.       string request_id = 1;        // The raw HTTP body is bound to this field.       google.api.HttpBody http_body = 2;     }      service ResourceService {       rpc GetResource(GetResourceRequest) returns (google.api.HttpBody);       rpc UpdateResource(google.api.HttpBody) returns       (google.protobuf.Empty);     }  Example with streaming methods:      service CaldavService {       rpc GetCalendar(stream google.api.HttpBody)         returns (stream google.api.HttpBody);       rpc UpdateCalendar(stream google.api.HttpBody)         returns (stream google.api.HttpBody);     }  Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
   */
  export interface Schema$GoogleApi__HttpBody {
    /**
     * The HTTP Content-Type header value specifying the content type of the body.
     */
    contentType?: string | null;
    /**
     * The HTTP request/response body as raw binary.
     */
    data?: string | null;
    /**
     * Application specific response metadata. Must be set in the first response for streaming APIs.
     */
    extensions?: Array<{[key: string]: any}> | null;
  }
  export interface Schema$GoogleCloudMlV1_AutomatedStoppingConfig_DecayCurveAutomatedStoppingConfig {
    /**
     * If true, measurement.elapsed_time is used as the x-axis of each Trials Decay Curve. Otherwise, Measurement.steps will be used as the x-axis.
     */
    useElapsedTime?: boolean | null;
  }
  /**
   * The median automated stopping rule stops a pending trial if the trial&#39;s best objective_value is strictly below the median &#39;performance&#39; of all completed trials reported up to the trial&#39;s last measurement. Currently, &#39;performance&#39; refers to the running average of the objective values reported by the trial in each measurement.
   */
  export interface Schema$GoogleCloudMlV1_AutomatedStoppingConfig_MedianAutomatedStoppingConfig {
    /**
     * If true, the median automated stopping rule applies to measurement.use_elapsed_time, which means the elapsed_time field of the current trial&#39;s latest measurement is used to compute the median objective value for each completed trial.
     */
    useElapsedTime?: boolean | null;
  }
  /**
   * An observed value of a metric.
   */
  export interface Schema$GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric {
    /**
     * The objective value at this training step.
     */
    objectiveValue?: number | null;
    /**
     * The global training step for this metric.
     */
    trainingStep?: string | null;
  }
  /**
   * A message representing a metric in the measurement.
   */
  export interface Schema$GoogleCloudMlV1_Measurement_Metric {
    /**
     * Required. Metric name.
     */
    metric?: string | null;
    /**
     * Required. The value for this metric.
     */
    value?: number | null;
  }
  export interface Schema$GoogleCloudMlV1_StudyConfigParameterSpec_CategoricalValueSpec {
    /**
     * Must be specified if type is `CATEGORICAL`. The list of possible categories.
     */
    values?: string[] | null;
  }
  export interface Schema$GoogleCloudMlV1_StudyConfigParameterSpec_DiscreteValueSpec {
    /**
     * Must be specified if type is `DISCRETE`. A list of feasible points. The list should be in strictly increasing order. For instance, this parameter might have possible settings of 1.5, 2.5, and 4.0. This list should not contain more than 1,000 values.
     */
    values?: number[] | null;
  }
  export interface Schema$GoogleCloudMlV1_StudyConfigParameterSpec_DoubleValueSpec {
    /**
     * Must be specified if type is `DOUBLE`. Maximum value of the parameter.
     */
    maxValue?: number | null;
    /**
     * Must be specified if type is `DOUBLE`. Minimum value of the parameter.
     */
    minValue?: number | null;
  }
  export interface Schema$GoogleCloudMlV1_StudyConfigParameterSpec_IntegerValueSpec {
    /**
     * Must be specified if type is `INTEGER`. Maximum value of the parameter.
     */
    maxValue?: string | null;
    /**
     * Must be specified if type is `INTEGER`. Minimum value of the parameter.
     */
    minValue?: string | null;
  }
  /**
   * Represents the spec to match categorical values from parent parameter.
   */
  export interface Schema$GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentCategoricalValueSpec {
    /**
     * Matches values of the parent parameter with type &#39;CATEGORICAL&#39;. All values must exist in `categorical_value_spec` of parent parameter.
     */
    values?: string[] | null;
  }
  /**
   * Represents the spec to match discrete values from parent parameter.
   */
  export interface Schema$GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentDiscreteValueSpec {
    /**
     * Matches values of the parent parameter with type &#39;DISCRETE&#39;. All values must exist in `discrete_value_spec` of parent parameter.
     */
    values?: number[] | null;
  }
  /**
   * Represents the spec to match integer values from parent parameter.
   */
  export interface Schema$GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentIntValueSpec {
    /**
     * Matches values of the parent parameter with type &#39;INTEGER&#39;. All values must lie in `integer_value_spec` of parent parameter.
     */
    values?: string[] | null;
  }
  /**
   * Represents a metric to optimize.
   */
  export interface Schema$GoogleCloudMlV1_StudyConfig_MetricSpec {
    /**
     * Required. The optimization goal of the metric.
     */
    goal?: string | null;
    /**
     * Required. The name of the metric.
     */
    metric?: string | null;
  }
  /**
   * Represents a single parameter to optimize.
   */
  export interface Schema$GoogleCloudMlV1_StudyConfig_ParameterSpec {
    /**
     * The value spec for a &#39;CATEGORICAL&#39; parameter.
     */
    categoricalValueSpec?: Schema$GoogleCloudMlV1_StudyConfigParameterSpec_CategoricalValueSpec;
    /**
     * A child node is active if the parameter&#39;s value matches the child node&#39;s matching_parent_values.  If two items in child_parameter_specs have the same name, they must have disjoint matching_parent_values.
     */
    childParameterSpecs?: Schema$GoogleCloudMlV1_StudyConfig_ParameterSpec[];
    /**
     * The value spec for a &#39;DISCRETE&#39; parameter.
     */
    discreteValueSpec?: Schema$GoogleCloudMlV1_StudyConfigParameterSpec_DiscreteValueSpec;
    /**
     * The value spec for a &#39;DOUBLE&#39; parameter.
     */
    doubleValueSpec?: Schema$GoogleCloudMlV1_StudyConfigParameterSpec_DoubleValueSpec;
    /**
     * The value spec for an &#39;INTEGER&#39; parameter.
     */
    integerValueSpec?: Schema$GoogleCloudMlV1_StudyConfigParameterSpec_IntegerValueSpec;
    /**
     * Required. The parameter name must be unique amongst all ParameterSpecs.
     */
    parameter?: string | null;
    parentCategoricalValues?: Schema$GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentCategoricalValueSpec;
    parentDiscreteValues?: Schema$GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentDiscreteValueSpec;
    parentIntValues?: Schema$GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentIntValueSpec;
    /**
     * How the parameter should be scaled. Leave unset for categorical parameters.
     */
    scaleType?: string | null;
    /**
     * Required. The type of the parameter.
     */
    type?: string | null;
  }
  /**
   * A message representing a parameter to be tuned. Contains the name of the parameter and the suggested value to use for this trial.
   */
  export interface Schema$GoogleCloudMlV1_Trial_Parameter {
    /**
     * Must be set if ParameterType is DOUBLE or DISCRETE.
     */
    floatValue?: number | null;
    /**
     * Must be set if ParameterType is INTEGER
     */
    intValue?: string | null;
    /**
     * The name of the parameter.
     */
    parameter?: string | null;
    /**
     * Must be set if ParameterTypeis CATEGORICAL
     */
    stringValue?: string | null;
  }
  /**
   * Represents a hardware accelerator request config. Note that the AcceleratorConfig can be used in both Jobs and Versions. Learn more about [accelerators for training](/ml-engine/docs/using-gpus) and [accelerators for online prediction](/ml-engine/docs/machine-types-online-prediction#gpus).
   */
  export interface Schema$GoogleCloudMlV1__AcceleratorConfig {
    /**
     * The number of accelerators to attach to each machine running the job.
     */
    count?: string | null;
    /**
     * The type of accelerator to use.
     */
    type?: string | null;
  }
  /**
   * The request message for the AddTrialMeasurement service method.
   */
  export interface Schema$GoogleCloudMlV1__AddTrialMeasurementRequest {
    /**
     * Required. The measurement to be added to a trial.
     */
    measurement?: Schema$GoogleCloudMlV1__Measurement;
  }
  /**
   * Configuration for Automated Early Stopping of Trials. If no implementation_config is set, automated early stopping will not be run.
   */
  export interface Schema$GoogleCloudMlV1__AutomatedStoppingConfig {
    decayCurveStoppingConfig?: Schema$GoogleCloudMlV1_AutomatedStoppingConfig_DecayCurveAutomatedStoppingConfig;
    medianAutomatedStoppingConfig?: Schema$GoogleCloudMlV1_AutomatedStoppingConfig_MedianAutomatedStoppingConfig;
  }
  /**
   * Options for automatically scaling a model.
   */
  export interface Schema$GoogleCloudMlV1__AutoScaling {
    /**
     * Optional. The minimum number of nodes to allocate for this model. These nodes are always up, starting from the time the model is deployed. Therefore, the cost of operating this model will be at least `rate` * `min_nodes` * number of hours since last billing cycle, where `rate` is the cost per node-hour as documented in the [pricing guide](/ml-engine/docs/pricing), even if no predictions are performed. There is additional cost for each prediction performed.  Unlike manual scaling, if the load gets too heavy for the nodes that are up, the service will automatically add nodes to handle the increased load as well as scale back as traffic drops, always maintaining at least `min_nodes`. You will be charged for the time in which additional nodes are used.  If `min_nodes` is not specified and AutoScaling is used with a [legacy (MLS1) machine type](/ml-engine/docs/machine-types-online-prediction), `min_nodes` defaults to 0, in which case, when traffic to a model stops (and after a cool-down period), nodes will be shut down and no charges will be incurred until traffic to the model resumes.  If `min_nodes` is not specified and AutoScaling is used with a [Compute Engine (N1) machine type](/ml-engine/docs/machine-types-online-prediction), `min_nodes` defaults to 1. `min_nodes` must be at least 1 for use with a Compute Engine machine type.  Note that you cannot use AutoScaling if your version uses [GPUs](#Version.FIELDS.accelerator_config). Instead, you must use ManualScaling.  You can set `min_nodes` when creating the model version, and you can also update `min_nodes` for an existing version: &lt;pre&gt; update_body.json: {   &#39;autoScaling&#39;: {     &#39;minNodes&#39;: 5   } } &lt;/pre&gt; HTTP request: &lt;pre style=&quot;max-width: 626px;&quot;&gt; PATCH https://ml.googleapis.com/v1/{name=projects/x/models/x/versions/*}?update_mask=autoScaling.minNodes -d @./update_body.json &lt;/pre&gt;
     */
    minNodes?: number | null;
  }
  /**
   * Represents output related to a built-in algorithm Job.
   */
  export interface Schema$GoogleCloudMlV1__BuiltInAlgorithmOutput {
    /**
     * Framework on which the built-in algorithm was trained.
     */
    framework?: string | null;
    /**
     * The Cloud Storage path to the `model/` directory where the training job saves the trained model. Only set for successful jobs that don&#39;t use hyperparameter tuning.
     */
    modelPath?: string | null;
    /**
     * Python version on which the built-in algorithm was trained.
     */
    pythonVersion?: string | null;
    /**
     * AI Platform runtime version on which the built-in algorithm was trained.
     */
    runtimeVersion?: string | null;
  }
  /**
   * Request message for the CancelJob method.
   */
  export interface Schema$GoogleCloudMlV1__CancelJobRequest {}
  export interface Schema$GoogleCloudMlV1__Capability {
    /**
     * Available accelerators for the capability.
     */
    availableAccelerators?: string[] | null;
    type?: string | null;
  }
  /**
   * This message will be placed in the metadata field of a google.longrunning.Operation associated with a CheckTrialEarlyStoppingState request.
   */
  export interface Schema$GoogleCloudMlV1__CheckTrialEarlyStoppingStateMetatdata {
    /**
     * The time at which the operation was submitted.
     */
    createTime?: string | null;
    /**
     * The name of the study that the trial belongs to.
     */
    study?: string | null;
    /**
     * The trial name.
     */
    trial?: string | null;
  }
  /**
   * The request message for the CheckTrialEarlyStoppingState service method.
   */
  export interface Schema$GoogleCloudMlV1__CheckTrialEarlyStoppingStateRequest {}
  /**
   * The message will be placed in the response field of a completed google.longrunning.Operation associated with a CheckTrialEarlyStoppingState request.
   */
  export interface Schema$GoogleCloudMlV1__CheckTrialEarlyStoppingStateResponse {
    /**
     * The time at which operation processing completed.
     */
    endTime?: string | null;
    /**
     * True if the Trial should stop.
     */
    shouldStop?: boolean | null;
    /**
     * The time at which the operation was started.
     */
    startTime?: string | null;
  }
  /**
   * The request message for the CompleteTrial service method.
   */
  export interface Schema$GoogleCloudMlV1__CompleteTrialRequest {
    /**
     * Optional. If provided, it will be used as the completed trial&#39;s final_measurement; Otherwise, the service will auto-select a previously reported measurement as the final-measurement
     */
    finalMeasurement?: Schema$GoogleCloudMlV1__Measurement;
    /**
     * Optional. A human readable reason why the trial was infeasible. This should only be provided if `trial_infeasible` is true.
     */
    infeasibleReason?: string | null;
    /**
     * Optional. True if the trial cannot be run with the given Parameter, and final_measurement will be ignored.
     */
    trialInfeasible?: boolean | null;
  }
  export interface Schema$GoogleCloudMlV1__Config {
    /**
     * The service account Cloud ML uses to run on TPU node.
     */
    tpuServiceAccount?: string | null;
  }
  /**
   * Represents a custom encryption key configuration that can be applied to a resource.
   */
  export interface Schema$GoogleCloudMlV1__EncryptionConfig {
    /**
     * The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a training job. It has the following format: `projects/{PROJECT_ID}/locations/{REGION}/keyRings/{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}`
     */
    kmsKeyName?: string | null;
  }
  /**
   * Request for explanations to be issued against a trained model.
   */
  export interface Schema$GoogleCloudMlV1__ExplainRequest {
    /**
     * Required. The explanation request body.
     */
    httpBody?: Schema$GoogleApi__HttpBody;
  }
  /**
   * Message holding configuration options for explaining model predictions. There are two feature attribution methods supported for TensorFlow models: integrated gradients and sampled Shapley. [Learn more about feature attributions.](/ai-platform/prediction/docs/ai-explanations/overview)
   */
  export interface Schema$GoogleCloudMlV1__ExplanationConfig {
    /**
     * Attributes credit by computing the Aumann-Shapley value taking advantage of the model&#39;s fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1703.01365
     */
    integratedGradientsAttribution?: Schema$GoogleCloudMlV1__IntegratedGradientsAttribution;
    /**
     * An attribution method that approximates Shapley values for features that contribute to the label being predicted. A sampling strategy is used to approximate the value rather than considering all subsets of features.
     */
    sampledShapleyAttribution?: Schema$GoogleCloudMlV1__SampledShapleyAttribution;
    /**
     * Attributes credit by computing the XRAI taking advantage of the model&#39;s fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1906.02825 Currently only implemented for models with natural image inputs.
     */
    xraiAttribution?: Schema$GoogleCloudMlV1__XraiAttribution;
  }
  /**
   * Returns service account information associated with a project.
   */
  export interface Schema$GoogleCloudMlV1__GetConfigResponse {
    config?: Schema$GoogleCloudMlV1__Config;
    /**
     * The service account Cloud ML uses to access resources in the project.
     */
    serviceAccount?: string | null;
    /**
     * The project number for `service_account`.
     */
    serviceAccountProject?: string | null;
  }
  /**
   * Represents the result of a single hyperparameter tuning trial from a training job. The TrainingOutput object that is returned on successful completion of a training job with hyperparameter tuning includes a list of HyperparameterOutput objects, one for each successful trial.
   */
  export interface Schema$GoogleCloudMlV1__HyperparameterOutput {
    /**
     * All recorded object metrics for this trial. This field is not currently populated.
     */
    allMetrics?: Schema$GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric[];
    /**
     * Details related to built-in algorithms jobs. Only set for trials of built-in algorithms jobs that have succeeded.
     */
    builtInAlgorithmOutput?: Schema$GoogleCloudMlV1__BuiltInAlgorithmOutput;
    /**
     * Output only. End time for the trial.
     */
    endTime?: string | null;
    /**
     * The final objective metric seen for this trial.
     */
    finalMetric?: Schema$GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric;
    /**
     * The hyperparameters given to this trial.
     */
    hyperparameters?: {[key: string]: string} | null;
    /**
     * True if the trial is stopped early.
     */
    isTrialStoppedEarly?: boolean | null;
    /**
     * Output only. Start time for the trial.
     */
    startTime?: string | null;
    /**
     * Output only. The detailed state of the trial.
     */
    state?: string | null;
    /**
     * The trial id for these results.
     */
    trialId?: string | null;
  }
  /**
   * Represents a set of hyperparameters to optimize.
   */
  export interface Schema$GoogleCloudMlV1__HyperparameterSpec {
    /**
     * Optional. The search algorithm specified for the hyperparameter tuning job. Uses the default AI Platform hyperparameter tuning algorithm if unspecified.
     */
    algorithm?: string | null;
    /**
     * Optional. Indicates if the hyperparameter tuning job enables auto trial early stopping.
     */
    enableTrialEarlyStopping?: boolean | null;
    /**
     * Required. The type of goal to use for tuning. Available types are `MAXIMIZE` and `MINIMIZE`.  Defaults to `MAXIMIZE`.
     */
    goal?: string | null;
    /**
     * Optional. The TensorFlow summary tag name to use for optimizing trials. For current versions of TensorFlow, this tag name should exactly match what is shown in TensorBoard, including all scopes.  For versions of TensorFlow prior to 0.12, this should be only the tag passed to tf.Summary. By default, &quot;training/hptuning/metric&quot; will be used.
     */
    hyperparameterMetricTag?: string | null;
    /**
     * Optional. The number of failed trials that need to be seen before failing the hyperparameter tuning job. You can specify this field to override the default failing criteria for AI Platform hyperparameter tuning jobs.  Defaults to zero, which means the service decides when a hyperparameter job should fail.
     */
    maxFailedTrials?: number | null;
    /**
     * Optional. The number of training trials to run concurrently. You can reduce the time it takes to perform hyperparameter tuning by adding trials in parallel. However, each trail only benefits from the information gained in completed trials. That means that a trial does not get access to the results of trials running at the same time, which could reduce the quality of the overall optimization.  Each trial will use the same scale tier and machine types.  Defaults to one.
     */
    maxParallelTrials?: number | null;
    /**
     * Optional. How many training trials should be attempted to optimize the specified hyperparameters.  Defaults to one.
     */
    maxTrials?: number | null;
    /**
     * Required. The set of parameters to tune.
     */
    params?: Schema$GoogleCloudMlV1__ParameterSpec[];
    /**
     * Optional. The prior hyperparameter tuning job id that users hope to continue with. The job id will be used to find the corresponding vizier study guid and resume the study.
     */
    resumePreviousJobId?: string | null;
  }
  /**
   * Attributes credit by computing the Aumann-Shapley value taking advantage of the model&#39;s fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1703.01365
   */
  export interface Schema$GoogleCloudMlV1__IntegratedGradientsAttribution {
    /**
     * Number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is met within the desired error range.
     */
    numIntegralSteps?: number | null;
  }
  /**
   * Represents a training or prediction job.
   */
  export interface Schema$GoogleCloudMlV1__Job {
    /**
     * Output only. When the job was created.
     */
    createTime?: string | null;
    /**
     * Output only. When the job processing was completed.
     */
    endTime?: string | null;
    /**
     * Output only. The details of a failure or a cancellation.
     */
    errorMessage?: string | null;
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a job from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform job updates in order to avoid race conditions: An `etag` is returned in the response to `GetJob`, and systems are expected to put that etag in the request to `UpdateJob` to ensure that their change will be applied to the same version of the job.
     */
    etag?: string | null;
    /**
     * Required. The user-specified id of the job.
     */
    jobId?: string | null;
    /**
     * Optional. One or more labels that you can add, to organize your jobs. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on &lt;a href=&quot;/ml-engine/docs/tensorflow/resource-labels&quot;&gt;using labels&lt;/a&gt;.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Input parameters to create a prediction job.
     */
    predictionInput?: Schema$GoogleCloudMlV1__PredictionInput;
    /**
     * The current prediction job result.
     */
    predictionOutput?: Schema$GoogleCloudMlV1__PredictionOutput;
    /**
     * Output only. When the job processing was started.
     */
    startTime?: string | null;
    /**
     * Output only. The detailed state of a job.
     */
    state?: string | null;
    /**
     * Input parameters to create a training job.
     */
    trainingInput?: Schema$GoogleCloudMlV1__TrainingInput;
    /**
     * The current training job result.
     */
    trainingOutput?: Schema$GoogleCloudMlV1__TrainingOutput;
  }
  /**
   * Response message for the ListJobs method.
   */
  export interface Schema$GoogleCloudMlV1__ListJobsResponse {
    /**
     * The list of jobs.
     */
    jobs?: Schema$GoogleCloudMlV1__Job[];
    /**
     * Optional. Pass this token as the `page_token` field of the request for a subsequent call.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$GoogleCloudMlV1__ListLocationsResponse {
    /**
     * Locations where at least one type of CMLE capability is available.
     */
    locations?: Schema$GoogleCloudMlV1__Location[];
    /**
     * Optional. Pass this token as the `page_token` field of the request for a subsequent call.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for the ListModels method.
   */
  export interface Schema$GoogleCloudMlV1__ListModelsResponse {
    /**
     * The list of models.
     */
    models?: Schema$GoogleCloudMlV1__Model[];
    /**
     * Optional. Pass this token as the `page_token` field of the request for a subsequent call.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$GoogleCloudMlV1__ListStudiesResponse {
    /**
     * The studies associated with the project.
     */
    studies?: Schema$GoogleCloudMlV1__Study[];
  }
  /**
   * The response message for the ListTrials method.
   */
  export interface Schema$GoogleCloudMlV1__ListTrialsResponse {
    /**
     * The trials associated with the study.
     */
    trials?: Schema$GoogleCloudMlV1__Trial[];
  }
  /**
   * Response message for the ListVersions method.
   */
  export interface Schema$GoogleCloudMlV1__ListVersionsResponse {
    /**
     * Optional. Pass this token as the `page_token` field of the request for a subsequent call.
     */
    nextPageToken?: string | null;
    /**
     * The list of versions.
     */
    versions?: Schema$GoogleCloudMlV1__Version[];
  }
  export interface Schema$GoogleCloudMlV1__Location {
    /**
     * Capabilities available in the location.
     */
    capabilities?: Schema$GoogleCloudMlV1__Capability[];
    name?: string | null;
  }
  /**
   * Options for manually scaling a model.
   */
  export interface Schema$GoogleCloudMlV1__ManualScaling {
    /**
     * The number of nodes to allocate for this model. These nodes are always up, starting from the time the model is deployed, so the cost of operating this model will be proportional to `nodes` * number of hours since last billing cycle plus the cost for each prediction performed.
     */
    nodes?: number | null;
  }
  /**
   * A message representing a measurement.
   */
  export interface Schema$GoogleCloudMlV1__Measurement {
    /**
     * Output only. Time that the trial has been running at the point of this measurement.
     */
    elapsedTime?: string | null;
    /**
     * Provides a list of metrics that act as inputs into the objective function.
     */
    metrics?: Schema$GoogleCloudMlV1_Measurement_Metric[];
    /**
     * The number of steps a machine learning model has been trained for. Must be non-negative.
     */
    stepCount?: string | null;
  }
  /**
   * Represents a machine learning solution.  A model can have multiple versions, each of which is a deployed, trained model ready to receive prediction requests. The model itself is just a container.
   */
  export interface Schema$GoogleCloudMlV1__Model {
    /**
     * Output only. The default version of the model. This version will be used to handle prediction requests that do not specify a version.  You can change the default version by calling projects.models.versions.setDefault.
     */
    defaultVersion?: Schema$GoogleCloudMlV1__Version;
    /**
     * Optional. The description specified for the model when it was created.
     */
    description?: string | null;
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetModel`, and systems are expected to put that etag in the request to `UpdateModel` to ensure that their change will be applied to the model as intended.
     */
    etag?: string | null;
    /**
     * Optional. One or more labels that you can add, to organize your models. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on &lt;a href=&quot;/ml-engine/docs/tensorflow/resource-labels&quot;&gt;using labels&lt;/a&gt;.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. The name specified for the model when it was created.  The model name must be unique within the project it is created in.
     */
    name?: string | null;
    /**
     * Optional. If true, online prediction nodes send `stderr` and `stdout` streams to Stackdriver Logging. These can be more verbose than the standard access logs (see `onlinePredictionLogging`) and can incur higher cost. However, they are helpful for debugging. Note that [Stackdriver logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high QPS. Estimate your costs before enabling this option.  Default is false.
     */
    onlinePredictionConsoleLogging?: boolean | null;
    /**
     * Optional. If true, online prediction access logs are sent to StackDriver Logging. These logs are like standard server access logs, containing information like timestamp and latency for each request. Note that [Stackdriver logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high queries per second rate (QPS). Estimate your costs before enabling this option.  Default is false.
     */
    onlinePredictionLogging?: boolean | null;
    /**
     * Optional. The list of regions where the model is going to be deployed. Only one region per model is supported. Defaults to &#39;us-central1&#39; if nothing is set. See the &lt;a href=&quot;/ml-engine/docs/tensorflow/regions&quot;&gt;available regions&lt;/a&gt; for AI Platform services. Note: *   No matter where a model is deployed, it can always be accessed by     users from anywhere, both for online and batch prediction. *   The region for a batch prediction job is set by the region field when     submitting the batch prediction job and does not take its value from     this field.
     */
    regions?: string[] | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$GoogleCloudMlV1__OperationMetadata {
    /**
     * The time the operation was submitted.
     */
    createTime?: string | null;
    /**
     * The time operation processing completed.
     */
    endTime?: string | null;
    /**
     * Indicates whether a request to cancel this operation has been made.
     */
    isCancellationRequested?: boolean | null;
    /**
     * The user labels, inherited from the model or the model version being operated on.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Contains the name of the model associated with the operation.
     */
    modelName?: string | null;
    /**
     * The operation type.
     */
    operationType?: string | null;
    /**
     * Contains the project number associated with the operation.
     */
    projectNumber?: string | null;
    /**
     * The time operation processing started.
     */
    startTime?: string | null;
    /**
     * Contains the version associated with the operation.
     */
    version?: Schema$GoogleCloudMlV1__Version;
  }
  /**
   * Represents a single hyperparameter to optimize.
   */
  export interface Schema$GoogleCloudMlV1__ParameterSpec {
    /**
     * Required if type is `CATEGORICAL`. The list of possible categories.
     */
    categoricalValues?: string[] | null;
    /**
     * Required if type is `DISCRETE`. A list of feasible points. The list should be in strictly increasing order. For instance, this parameter might have possible settings of 1.5, 2.5, and 4.0. This list should not contain more than 1,000 values.
     */
    discreteValues?: number[] | null;
    /**
     * Required if type is `DOUBLE` or `INTEGER`. This field should be unset if type is `CATEGORICAL`. This value should be integers if type is `INTEGER`.
     */
    maxValue?: number | null;
    /**
     * Required if type is `DOUBLE` or `INTEGER`. This field should be unset if type is `CATEGORICAL`. This value should be integers if type is INTEGER.
     */
    minValue?: number | null;
    /**
     * Required. The parameter name must be unique amongst all ParameterConfigs in a HyperparameterSpec message. E.g., &quot;learning_rate&quot;.
     */
    parameterName?: string | null;
    /**
     * Optional. How the parameter should be scaled to the hypercube. Leave unset for categorical parameters. Some kind of scaling is strongly recommended for real or integral parameters (e.g., `UNIT_LINEAR_SCALE`).
     */
    scaleType?: string | null;
    /**
     * Required. The type of the parameter.
     */
    type?: string | null;
  }
  /**
   * Represents input parameters for a prediction job.
   */
  export interface Schema$GoogleCloudMlV1__PredictionInput {
    /**
     * Optional. Number of records per batch, defaults to 64. The service will buffer batch_size number of records in memory before invoking one Tensorflow prediction call internally. So take the record size and memory available into consideration when setting this parameter.
     */
    batchSize?: string | null;
    /**
     * Required. The format of the input data files.
     */
    dataFormat?: string | null;
    /**
     * Required. The Cloud Storage location of the input data files. May contain &lt;a href=&quot;/storage/docs/gsutil/addlhelp/WildcardNames&quot;&gt;wildcards&lt;/a&gt;.
     */
    inputPaths?: string[] | null;
    /**
     * Optional. The maximum number of workers to be used for parallel processing. Defaults to 10 if not specified.
     */
    maxWorkerCount?: string | null;
    /**
     * Use this field if you want to use the default version for the specified model. The string must use the following format:  `&quot;projects/YOUR_PROJECT/models/YOUR_MODEL&quot;`
     */
    modelName?: string | null;
    /**
     * Optional. Format of the output data files, defaults to JSON.
     */
    outputDataFormat?: string | null;
    /**
     * Required. The output Google Cloud Storage location.
     */
    outputPath?: string | null;
    /**
     * Required. The Google Compute Engine region to run the prediction job in. See the &lt;a href=&quot;/ml-engine/docs/tensorflow/regions&quot;&gt;available regions&lt;/a&gt; for AI Platform services.
     */
    region?: string | null;
    /**
     * Optional. The AI Platform runtime version to use for this batch prediction. If not set, AI Platform will pick the runtime version used during the CreateVersion request for this model version, or choose the latest stable version when model version information is not available such as when the model is specified by uri.
     */
    runtimeVersion?: string | null;
    /**
     * Optional. The name of the signature defined in the SavedModel to use for this job. Please refer to [SavedModel](https://tensorflow.github.io/serving/serving_basic.html) for information about how to use signatures.  Defaults to [DEFAULT_SERVING_SIGNATURE_DEF_KEY](https://www.tensorflow.org/api_docs/python/tf/saved_model/signature_constants) , which is &quot;serving_default&quot;.
     */
    signatureName?: string | null;
    /**
     * Use this field if you want to specify a Google Cloud Storage path for the model to use.
     */
    uri?: string | null;
    /**
     * Use this field if you want to specify a version of the model to use. The string is formatted the same way as `model_version`, with the addition of the version information:  `&quot;projects/YOUR_PROJECT/models/YOUR_MODEL/versions/YOUR_VERSION&quot;`
     */
    versionName?: string | null;
  }
  /**
   * Represents results of a prediction job.
   */
  export interface Schema$GoogleCloudMlV1__PredictionOutput {
    /**
     * The number of data instances which resulted in errors.
     */
    errorCount?: string | null;
    /**
     * Node hours used by the batch prediction job.
     */
    nodeHours?: number | null;
    /**
     * The output Google Cloud Storage location provided at the job creation time.
     */
    outputPath?: string | null;
    /**
     * The number of generated predictions.
     */
    predictionCount?: string | null;
  }
  /**
   * Request for predictions to be issued against a trained model.
   */
  export interface Schema$GoogleCloudMlV1__PredictRequest {
    /**
     *  Required. The prediction request body. Refer to the [request body details section](#request-body-details) for more information on how to structure your request.
     */
    httpBody?: Schema$GoogleApi__HttpBody;
  }
  /**
   * Represents the configuration for a replica in a cluster.
   */
  export interface Schema$GoogleCloudMlV1__ReplicaConfig {
    /**
     * Represents the type and number of accelerators used by the replica. [Learn about restrictions on accelerator configurations for training.](/ai-platform/training/docs/using-gpus#compute-engine-machine-types-with-gpu)
     */
    acceleratorConfig?: Schema$GoogleCloudMlV1__AcceleratorConfig;
    /**
     * Arguments to the entrypoint command. The following rules apply for container_command and container_args: - If you do not supply command or args:   The defaults defined in the Docker image are used. - If you supply a command but no args:   The default EntryPoint and the default Cmd defined in the Docker image   are ignored. Your command is run without any arguments. - If you supply only args:   The default Entrypoint defined in the Docker image is run with the args   that you supplied. - If you supply a command and args:   The default Entrypoint and the default Cmd defined in the Docker image   are ignored. Your command is run with your args. It cannot be set if custom container image is not provided. Note that this field and [TrainingInput.args] are mutually exclusive, i.e., both cannot be set at the same time.
     */
    containerArgs?: string[] | null;
    /**
     * The command with which the replica&#39;s custom container is run. If provided, it will override default ENTRYPOINT of the docker image. If not provided, the docker image&#39;s ENTRYPOINT is used. It cannot be set if custom container image is not provided. Note that this field and [TrainingInput.args] are mutually exclusive, i.e., both cannot be set at the same time.
     */
    containerCommand?: string[] | null;
    /**
     * The Docker image to run on the replica. This image must be in Container Registry. Learn more about [configuring custom containers](/ai-platform/training/docs/distributed-training-containers).
     */
    imageUri?: string | null;
    /**
     * The AI Platform runtime version that includes a TensorFlow version matching the one used in the custom container. This field is required if the replica is a TPU worker that uses a custom container. Otherwise, do not specify this field. This must be a [runtime version that currently supports training with TPUs](/ml-engine/docs/tensorflow/runtime-version-list#tpu-support).  Note that the version of TensorFlow included in a runtime version may differ from the numbering of the runtime version itself, because it may have a different [patch version](https://www.tensorflow.org/guide/version_compat#semantic_versioning_20). In this field, you must specify the runtime version (TensorFlow minor version). For example, if your custom container runs TensorFlow `1.x.y`, specify `1.x`.
     */
    tpuTfVersion?: string | null;
  }
  /**
   * Configuration for logging request-response pairs to a BigQuery table. Online prediction requests to a model version and the responses to these requests are converted to raw strings and saved to the specified BigQuery table. Logging is constrained by [BigQuery quotas and limits](/bigquery/quotas). If your project exceeds BigQuery quotas or limits, AI Platform Prediction does not log request-response pairs, but it continues to serve predictions.  If you are using [continuous evaluation](/ml-engine/docs/continuous-evaluation/), you do not need to specify this configuration manually. Setting up continuous evaluation automatically enables logging of request-response pairs.
   */
  export interface Schema$GoogleCloudMlV1__RequestLoggingConfig {
    /**
     * Required. Fully qualified BigQuery table name in the following format: &quot;&lt;var&gt;project_id&lt;/var&gt;.&lt;var&gt;dataset_name&lt;/var&gt;.&lt;var&gt;table_name&lt;/var&gt;&quot;  The specified table must already exist, and the &quot;Cloud ML Service Agent&quot; for your project must have permission to write to it. The table must have the following [schema](/bigquery/docs/schemas):  &lt;table&gt;   &lt;tr&gt;&lt;th&gt;Field name&lt;/th&gt;&lt;th style=&quot;display: table-cell&quot;&gt;Type&lt;/th&gt;     &lt;th style=&quot;display: table-cell&quot;&gt;Mode&lt;/th&gt;&lt;/tr&gt;   &lt;tr&gt;&lt;td&gt;model&lt;/td&gt;&lt;td&gt;STRING&lt;/td&gt;&lt;td&gt;REQUIRED&lt;/td&gt;&lt;/tr&gt;   &lt;tr&gt;&lt;td&gt;model_version&lt;/td&gt;&lt;td&gt;STRING&lt;/td&gt;&lt;td&gt;REQUIRED&lt;/td&gt;&lt;/tr&gt;   &lt;tr&gt;&lt;td&gt;time&lt;/td&gt;&lt;td&gt;TIMESTAMP&lt;/td&gt;&lt;td&gt;REQUIRED&lt;/td&gt;&lt;/tr&gt;   &lt;tr&gt;&lt;td&gt;raw_data&lt;/td&gt;&lt;td&gt;STRING&lt;/td&gt;&lt;td&gt;REQUIRED&lt;/td&gt;&lt;/tr&gt;   &lt;tr&gt;&lt;td&gt;raw_prediction&lt;/td&gt;&lt;td&gt;STRING&lt;/td&gt;&lt;td&gt;NULLABLE&lt;/td&gt;&lt;/tr&gt;   &lt;tr&gt;&lt;td&gt;groundtruth&lt;/td&gt;&lt;td&gt;STRING&lt;/td&gt;&lt;td&gt;NULLABLE&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt;
     */
    bigqueryTableName?: string | null;
    /**
     * Percentage of requests to be logged, expressed as a fraction from 0 to 1. For example, if you want to log 10% of requests, enter `0.1`. The sampling window is the lifetime of the model version. Defaults to 0.
     */
    samplingPercentage?: number | null;
  }
  /**
   * An attribution method that approximates Shapley values for features that contribute to the label being predicted. A sampling strategy is used to approximate the value rather than considering all subsets of features.
   */
  export interface Schema$GoogleCloudMlV1__SampledShapleyAttribution {
    /**
     * The number of feature permutations to consider when approximating the Shapley values.
     */
    numPaths?: number | null;
  }
  /**
   * All parameters related to scheduling of training jobs.
   */
  export interface Schema$GoogleCloudMlV1__Scheduling {
    /**
     * Optional. The maximum job running time, expressed in seconds. The field can contain up to nine fractional digits, terminated by `s`. If not specified, this field defaults to `604800s` (seven days).  If the training job is still running after this duration, AI Platform Training cancels it.  For example, if you want to ensure your job runs for no more than 2 hours, set this field to `7200s` (2 hours * 60 minutes / hour * 60 seconds / minute).  If you submit your training job using the `gcloud` tool, you can [provide this field in a `config.yaml` file](/ai-platform/training/docs/training-jobs#formatting_your_configuration_parameters). For example:  ```yaml trainingInput:   ...   scheduling:     maxRunningTime: 7200s   ... ```
     */
    maxRunningTime?: string | null;
    maxWaitTime?: string | null;
  }
  /**
   * Request message for the SetDefaultVersion request.
   */
  export interface Schema$GoogleCloudMlV1__SetDefaultVersionRequest {}
  export interface Schema$GoogleCloudMlV1__StopTrialRequest {}
  /**
   * A message representing a Study.
   */
  export interface Schema$GoogleCloudMlV1__Study {
    /**
     * Output only. Time at which the study was created.
     */
    createTime?: string | null;
    /**
     * Output only. A human readable reason why the Study is inactive. This should be empty if a study is ACTIVE or COMPLETED.
     */
    inactiveReason?: string | null;
    /**
     * Output only. The name of a study.
     */
    name?: string | null;
    /**
     * Output only. The detailed state of a study.
     */
    state?: string | null;
    /**
     * Required. Configuration of the study.
     */
    studyConfig?: Schema$GoogleCloudMlV1__StudyConfig;
  }
  /**
   * Represents configuration of a study.
   */
  export interface Schema$GoogleCloudMlV1__StudyConfig {
    /**
     * The search algorithm specified for the study.
     */
    algorithm?: string | null;
    /**
     * Configuration for automated stopping of unpromising Trials.
     */
    automatedStoppingConfig?: Schema$GoogleCloudMlV1__AutomatedStoppingConfig;
    /**
     * Metric specs for the study.
     */
    metrics?: Schema$GoogleCloudMlV1_StudyConfig_MetricSpec[];
    /**
     * Required. The set of parameters to tune.
     */
    parameters?: Schema$GoogleCloudMlV1_StudyConfig_ParameterSpec[];
  }
  /**
   * Metadata field of a google.longrunning.Operation associated with a SuggestTrialsRequest.
   */
  export interface Schema$GoogleCloudMlV1__SuggestTrialsMetadata {
    /**
     * The identifier of the client that is requesting the suggestion.
     */
    clientId?: string | null;
    /**
     * The time operation was submitted.
     */
    createTime?: string | null;
    /**
     * The name of the study that the trial belongs to.
     */
    study?: string | null;
    /**
     * The number of suggestions requested.
     */
    suggestionCount?: number | null;
  }
  /**
   * The request message for the SuggestTrial service method.
   */
  export interface Schema$GoogleCloudMlV1__SuggestTrialsRequest {
    /**
     * Required. The identifier of the client that is requesting the suggestion.  If multiple SuggestTrialsRequests have the same `client_id`, the service will return the identical suggested trial if the trial is pending, and provide a new trial if the last suggested trial was completed.
     */
    clientId?: string | null;
    /**
     * Required. The number of suggestions requested.
     */
    suggestionCount?: number | null;
  }
  /**
   * This message will be placed in the response field of a completed google.longrunning.Operation associated with a SuggestTrials request.
   */
  export interface Schema$GoogleCloudMlV1__SuggestTrialsResponse {
    /**
     * The time at which operation processing completed.
     */
    endTime?: string | null;
    /**
     * The time at which the operation was started.
     */
    startTime?: string | null;
    /**
     * The state of the study.
     */
    studyState?: string | null;
    /**
     * A list of trials.
     */
    trials?: Schema$GoogleCloudMlV1__Trial[];
  }
  /**
   * Represents input parameters for a training job. When using the gcloud command to submit your training job, you can specify the input parameters as command-line arguments and/or in a YAML configuration file referenced from the --config command-line argument. For details, see the guide to [submitting a training job](/ai-platform/training/docs/training-jobs).
   */
  export interface Schema$GoogleCloudMlV1__TrainingInput {
    /**
     * Optional. Command-line arguments passed to the training application when it starts. If your job uses a custom container, then the arguments are passed to the container&#39;s &lt;a class=&quot;external&quot; target=&quot;_blank&quot; href=&quot;https://docs.docker.com/engine/reference/builder/#entrypoint&quot;&gt; `ENTRYPOINT`&lt;/a&gt; command.
     */
    args?: string[] | null;
    /**
     * Optional. Options for using customer-managed encryption keys (CMEK) to protect resources created by a training job, instead of using Google&#39;s default encryption. If this is set, then all resources created by the training job will be encrypted with the customer-managed encryption key that you specify.  [Learn how and when to use CMEK with AI Platform Training](/ai-platform/training/docs/cmek).
     */
    encryptionConfig?: Schema$GoogleCloudMlV1__EncryptionConfig;
    /**
     * Optional. The configuration for evaluators.  You should only set `evaluatorConfig.acceleratorConfig` if `evaluatorType` is set to a Compute Engine machine type. [Learn about restrictions on accelerator configurations for training.](/ai-platform/training/docs/using-gpus#compute-engine-machine-types-with-gpu)  Set `evaluatorConfig.imageUri` only if you build a custom image for your evaluator. If `evaluatorConfig.imageUri` has not been set, AI Platform uses the value of `masterConfig.imageUri`. Learn more about [configuring custom containers](/ai-platform/training/docs/distributed-training-containers).
     */
    evaluatorConfig?: Schema$GoogleCloudMlV1__ReplicaConfig;
    /**
     * Optional. The number of evaluator replicas to use for the training job. Each replica in the cluster will be of the type specified in `evaluator_type`.  This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `evaluator_type`.  The default value is zero.
     */
    evaluatorCount?: string | null;
    /**
     * Optional. Specifies the type of virtual machine to use for your training job&#39;s evaluator nodes.  The supported values are the same as those described in the entry for `masterType`.  This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be Compute Engine machine types or both must be legacy machine types.  This value must be present when `scaleTier` is set to `CUSTOM` and `evaluatorCount` is greater than zero.
     */
    evaluatorType?: string | null;
    /**
     * Optional. The set of Hyperparameters to tune.
     */
    hyperparameters?: Schema$GoogleCloudMlV1__HyperparameterSpec;
    /**
     * Optional. A Google Cloud Storage path in which to store training outputs and other data needed for training. This path is passed to your TensorFlow program as the &#39;--job-dir&#39; command-line argument. The benefit of specifying this field is that Cloud ML validates the path for use in training.
     */
    jobDir?: string | null;
    /**
     * Optional. The configuration for your master worker.  You should only set `masterConfig.acceleratorConfig` if `masterType` is set to a Compute Engine machine type. Learn about [restrictions on accelerator configurations for training.](/ai-platform/training/docs/using-gpus#compute-engine-machine-types-with-gpu)  Set `masterConfig.imageUri` only if you build a custom image. Only one of `masterConfig.imageUri` and `runtimeVersion` should be set. Learn more about [configuring custom containers](/ai-platform/training/docs/distributed-training-containers).
     */
    masterConfig?: Schema$GoogleCloudMlV1__ReplicaConfig;
    /**
     * Optional. Specifies the type of virtual machine to use for your training job&#39;s master worker. You must specify this field when `scaleTier` is set to `CUSTOM`.  You can use certain Compute Engine machine types directly in this field. The following types are supported:  - `n1-standard-4` - `n1-standard-8` - `n1-standard-16` - `n1-standard-32` - `n1-standard-64` - `n1-standard-96` - `n1-highmem-2` - `n1-highmem-4` - `n1-highmem-8` - `n1-highmem-16` - `n1-highmem-32` - `n1-highmem-64` - `n1-highmem-96` - `n1-highcpu-16` - `n1-highcpu-32` - `n1-highcpu-64` - `n1-highcpu-96`  Learn more about [using Compute Engine machine types](/ml-engine/docs/machine-types#compute-engine-machine-types).  Alternatively, you can use the following legacy machine types:  - `standard` - `large_model` - `complex_model_s` - `complex_model_m` - `complex_model_l` - `standard_gpu` - `complex_model_m_gpu` - `complex_model_l_gpu` - `standard_p100` - `complex_model_m_p100` - `standard_v100` - `large_model_v100` - `complex_model_m_v100` - `complex_model_l_v100`  Learn more about [using legacy machine types](/ml-engine/docs/machine-types#legacy-machine-types).  Finally, if you want to use a TPU for training, specify `cloud_tpu` in this field. Learn more about the [special configuration options for training with TPUs](/ml-engine/docs/tensorflow/using-tpus#configuring_a_custom_tpu_machine).
     */
    masterType?: string | null;
    /**
     * Optional. The full name of the [Compute Engine network](/vpc/docs/vpc) to which the Job is peered. For example, `projects/12345/global/networks/myVPC`. The format of this field is `projects/{project}/global/networks/{network}`, where {project} is a project number (like `12345`) and {network} is network name.  Private services access must already be configured for the network. If left unspecified, the Job is not peered with any network. [Learn about using VPC Network Peering.](/ai-platform/training/docs/vpc-peering).
     */
    network?: string | null;
    /**
     * Required. The Google Cloud Storage location of the packages with the training program and any additional dependencies. The maximum number of package URIs is 100.
     */
    packageUris?: string[] | null;
    /**
     * Optional. The configuration for parameter servers.  You should only set `parameterServerConfig.acceleratorConfig` if `parameterServerType` is set to a Compute Engine machine type. [Learn about restrictions on accelerator configurations for training.](/ai-platform/training/docs/using-gpus#compute-engine-machine-types-with-gpu)  Set `parameterServerConfig.imageUri` only if you build a custom image for your parameter server. If `parameterServerConfig.imageUri` has not been set, AI Platform uses the value of `masterConfig.imageUri`. Learn more about [configuring custom containers](/ai-platform/training/docs/distributed-training-containers).
     */
    parameterServerConfig?: Schema$GoogleCloudMlV1__ReplicaConfig;
    /**
     * Optional. The number of parameter server replicas to use for the training job. Each replica in the cluster will be of the type specified in `parameter_server_type`.  This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `parameter_server_type`.  The default value is zero.
     */
    parameterServerCount?: string | null;
    /**
     * Optional. Specifies the type of virtual machine to use for your training job&#39;s parameter server.  The supported values are the same as those described in the entry for `master_type`.  This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be Compute Engine machine types or both must be legacy machine types.  This value must be present when `scaleTier` is set to `CUSTOM` and `parameter_server_count` is greater than zero.
     */
    parameterServerType?: string | null;
    /**
     * Required. The Python module name to run after installing the packages.
     */
    pythonModule?: string | null;
    /**
     * Optional. The version of Python used in training. You must either specify this field or specify `masterConfig.imageUri`.  The following Python versions are available:  * Python &#39;3.7&#39; is available when `runtime_version` is set to &#39;1.15&#39; or   later. * Python &#39;3.5&#39; is available when `runtime_version` is set to a version   from &#39;1.4&#39; to &#39;1.14&#39;. * Python &#39;2.7&#39; is available when `runtime_version` is set to &#39;1.15&#39; or   earlier.  Read more about the Python versions available for [each runtime version](/ml-engine/docs/runtime-version-list).
     */
    pythonVersion?: string | null;
    /**
     * Required. The region to run the training job in. See the [available regions](/ai-platform/training/docs/regions) for AI Platform Training.
     */
    region?: string | null;
    /**
     * Optional. The AI Platform runtime version to use for training. You must either specify this field or specify `masterConfig.imageUri`.  For more information, see the [runtime version list](/ai-platform/training/docs/runtime-version-list) and learn [how to manage runtime versions](/ai-platform/training/docs/versioning).
     */
    runtimeVersion?: string | null;
    /**
     * Required. Specifies the machine types, the number of replicas for workers and parameter servers.
     */
    scaleTier?: string | null;
    /**
     * Optional. Scheduling options for a training job.
     */
    scheduling?: Schema$GoogleCloudMlV1__Scheduling;
    /**
     * Optional. The email address of a service account to use when running the training appplication. You must have the `iam.serviceAccounts.actAs` permission for the specified service account. In addition, the AI Platform Training Google-managed service account must have the `roles/iam.serviceAccountAdmin` role for the specified service account. [Learn more about configuring a service account.](/ai-platform/training/docs/custom-service-account)  If not specified, the AI Platform Training Google-managed service account is used by default.
     */
    serviceAccount?: string | null;
    /**
     * Optional. Use `chief` instead of `master` in the `TF_CONFIG` environment variable when training with a custom container. Defaults to `false`. [Learn more about this field.](/ai-platform/training/docs/distributed-training-details#chief-versus-master)  This field has no effect for training jobs that don&#39;t use a custom container.
     */
    useChiefInTfConfig?: boolean | null;
    /**
     * Optional. The configuration for workers.  You should only set `workerConfig.acceleratorConfig` if `workerType` is set to a Compute Engine machine type. [Learn about restrictions on accelerator configurations for training.](/ai-platform/training/docs/using-gpus#compute-engine-machine-types-with-gpu)  Set `workerConfig.imageUri` only if you build a custom image for your worker. If `workerConfig.imageUri` has not been set, AI Platform uses the value of `masterConfig.imageUri`. Learn more about [configuring custom containers](/ai-platform/training/docs/distributed-training-containers).
     */
    workerConfig?: Schema$GoogleCloudMlV1__ReplicaConfig;
    /**
     * Optional. The number of worker replicas to use for the training job. Each replica in the cluster will be of the type specified in `worker_type`.  This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `worker_type`.  The default value is zero.
     */
    workerCount?: string | null;
    /**
     * Optional. Specifies the type of virtual machine to use for your training job&#39;s worker nodes.  The supported values are the same as those described in the entry for `masterType`.  This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be Compute Engine machine types or both must be legacy machine types.  If you use `cloud_tpu` for this value, see special instructions for [configuring a custom TPU machine](/ml-engine/docs/tensorflow/using-tpus#configuring_a_custom_tpu_machine).  This value must be present when `scaleTier` is set to `CUSTOM` and `workerCount` is greater than zero.
     */
    workerType?: string | null;
  }
  /**
   * Represents results of a training job. Output only.
   */
  export interface Schema$GoogleCloudMlV1__TrainingOutput {
    /**
     * Details related to built-in algorithms jobs. Only set for built-in algorithms jobs.
     */
    builtInAlgorithmOutput?: Schema$GoogleCloudMlV1__BuiltInAlgorithmOutput;
    /**
     * The number of hyperparameter tuning trials that completed successfully. Only set for hyperparameter tuning jobs.
     */
    completedTrialCount?: string | null;
    /**
     * The amount of ML units consumed by the job.
     */
    consumedMLUnits?: number | null;
    /**
     * The TensorFlow summary tag name used for optimizing hyperparameter tuning trials. See [`HyperparameterSpec.hyperparameterMetricTag`](#HyperparameterSpec.FIELDS.hyperparameter_metric_tag) for more information. Only set for hyperparameter tuning jobs.
     */
    hyperparameterMetricTag?: string | null;
    /**
     * Whether this job is a built-in Algorithm job.
     */
    isBuiltInAlgorithmJob?: boolean | null;
    /**
     * Whether this job is a hyperparameter tuning job.
     */
    isHyperparameterTuningJob?: boolean | null;
    /**
     * Results for individual Hyperparameter trials. Only set for hyperparameter tuning jobs.
     */
    trials?: Schema$GoogleCloudMlV1__HyperparameterOutput[];
  }
  /**
   * A message representing a trial.
   */
  export interface Schema$GoogleCloudMlV1__Trial {
    /**
     * Output only. The identifier of the client that originally requested this trial.
     */
    clientId?: string | null;
    /**
     * Output only. Time at which the trial&#39;s status changed to COMPLETED.
     */
    endTime?: string | null;
    /**
     * The final measurement containing the objective value.
     */
    finalMeasurement?: Schema$GoogleCloudMlV1__Measurement;
    /**
     * Output only. A human readable string describing why the trial is infeasible. This should only be set if trial_infeasible is true.
     */
    infeasibleReason?: string | null;
    /**
     * A list of measurements that are strictly lexicographically ordered by their induced tuples (steps, elapsed_time). These are used for early stopping computations.
     */
    measurements?: Schema$GoogleCloudMlV1__Measurement[];
    /**
     * Output only. Name of the trial assigned by the service.
     */
    name?: string | null;
    /**
     * The parameters of the trial.
     */
    parameters?: Schema$GoogleCloudMlV1_Trial_Parameter[];
    /**
     * Output only. Time at which the trial was started.
     */
    startTime?: string | null;
    /**
     * The detailed state of a trial.
     */
    state?: string | null;
    /**
     * Output only. If true, the parameters in this trial are not attempted again.
     */
    trialInfeasible?: boolean | null;
  }
  /**
   * Represents a version of the model.  Each version is a trained model deployed in the cloud, ready to handle prediction requests. A model can have multiple versions. You can get information about all of the versions of a given model by calling projects.models.versions.list.
   */
  export interface Schema$GoogleCloudMlV1__Version {
    /**
     * Optional. Accelerator config for using GPUs for online prediction (beta). Only specify this field if you have specified a Compute Engine (N1) machine type in the `machineType` field. Learn more about [using GPUs for online prediction](/ml-engine/docs/machine-types-online-prediction#gpus).
     */
    acceleratorConfig?: Schema$GoogleCloudMlV1__AcceleratorConfig;
    /**
     * Automatically scale the number of nodes used to serve the model in response to increases and decreases in traffic. Care should be taken to ramp up traffic according to the model&#39;s ability to scale or you will start seeing increases in latency and 429 response codes.  Note that you cannot use AutoScaling if your version uses [GPUs](#Version.FIELDS.accelerator_config). Instead, you must use specify `manual_scaling`.
     */
    autoScaling?: Schema$GoogleCloudMlV1__AutoScaling;
    /**
     * Output only. The time the version was created.
     */
    createTime?: string | null;
    /**
     * Required. The Cloud Storage location of the trained model used to create the version. See the [guide to model deployment](/ml-engine/docs/tensorflow/deploying-models) for more information.  When passing Version to projects.models.versions.create the model service uses the specified location as the source of the model. Once deployed, the model version is hosted by the prediction service, so this location is useful only as a historical record. The total number of model files can&#39;t exceed 1000.
     */
    deploymentUri?: string | null;
    /**
     * Optional. The description specified for the version when it was created.
     */
    description?: string | null;
    /**
     * Output only. The details of a failure or a cancellation.
     */
    errorMessage?: string | null;
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetVersion`, and systems are expected to put that etag in the request to `UpdateVersion` to ensure that their change will be applied to the model as intended.
     */
    etag?: string | null;
    /**
     * Optional. Configures explainability features on the model&#39;s version. Some explanation features require additional metadata to be loaded as part of the model payload.
     */
    explanationConfig?: Schema$GoogleCloudMlV1__ExplanationConfig;
    /**
     * Optional. The machine learning framework AI Platform uses to train this version of the model. Valid values are `TENSORFLOW`, `SCIKIT_LEARN`, `XGBOOST`. If you do not specify a framework, AI Platform will analyze files in the deployment_uri to determine a framework. If you choose `SCIKIT_LEARN` or `XGBOOST`, you must also set the runtime version of the model to 1.4 or greater.  Do **not** specify a framework if you&#39;re deploying a [custom prediction routine](/ml-engine/docs/tensorflow/custom-prediction-routines).  If you specify a [Compute Engine (N1) machine type](/ml-engine/docs/machine-types-online-prediction) in the `machineType` field, you must specify `TENSORFLOW` for the framework.
     */
    framework?: string | null;
    /**
     * Output only. If true, this version will be used to handle prediction requests that do not specify a version.  You can change the default version by calling projects.methods.versions.setDefault.
     */
    isDefault?: boolean | null;
    /**
     * Optional. One or more labels that you can add, to organize your model versions. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on &lt;a href=&quot;/ml-engine/docs/tensorflow/resource-labels&quot;&gt;using labels&lt;/a&gt;.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The time the version was last used for prediction.
     */
    lastUseTime?: string | null;
    /**
     * Optional. The type of machine on which to serve the model. Currently only applies to online prediction service. If this field is not specified, it defaults to `mls1-c1-m2`.  Online prediction supports the following machine types:  * `mls1-c1-m2` * `mls1-c4-m2` * `n1-standard-2` * `n1-standard-4` * `n1-standard-8` * `n1-standard-16` * `n1-standard-32` * `n1-highmem-2` * `n1-highmem-4` * `n1-highmem-8` * `n1-highmem-16` * `n1-highmem-32` * `n1-highcpu-2` * `n1-highcpu-4` * `n1-highcpu-8` * `n1-highcpu-16` * `n1-highcpu-32`  `mls1-c1-m2` is generally available. All other machine types are available in beta. Learn more about the [differences between machine types](/ml-engine/docs/machine-types-online-prediction).
     */
    machineType?: string | null;
    /**
     * Manually select the number of nodes to use for serving the model. You should generally use `auto_scaling` with an appropriate `min_nodes` instead, but this option is available if you want more predictable billing. Beware that latency and error rates will increase if the traffic exceeds that capability of the system to serve it based on the selected number of nodes.
     */
    manualScaling?: Schema$GoogleCloudMlV1__ManualScaling;
    /**
     * Required. The name specified for the version when it was created.  The version name must be unique within the model it is created in.
     */
    name?: string | null;
    /**
     * Optional. Cloud Storage paths (`gs://…`) of packages for [custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines) or [scikit-learn pipelines with custom code](/ml-engine/docs/scikit/exporting-for-prediction#custom-pipeline-code).  For a custom prediction routine, one of these packages must contain your Predictor class (see [`predictionClass`](#Version.FIELDS.prediction_class)). Additionally, include any dependencies used by your Predictor or scikit-learn pipeline uses that are not already included in your selected [runtime version](/ml-engine/docs/tensorflow/runtime-version-list).  If you specify this field, you must also set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater.
     */
    packageUris?: string[] | null;
    /**
     * Optional. The fully qualified name (&lt;var&gt;module_name&lt;/var&gt;.&lt;var&gt;class_name&lt;/var&gt;) of a class that implements the Predictor interface described in this reference field. The module containing this class should be included in a package provided to the [`packageUris` field](#Version.FIELDS.package_uris).  Specify this field if and only if you are deploying a [custom prediction routine (beta)](/ml-engine/docs/tensorflow/custom-prediction-routines). If you specify this field, you must set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater and you must set `machineType` to a [legacy (MLS1) machine type](/ml-engine/docs/machine-types-online-prediction).  The following code sample provides the Predictor interface:  &lt;pre style=&quot;max-width: 626px;&quot;&gt; class Predictor(object): &quot;&quot;&quot;Interface for constructing custom predictors.&quot;&quot;&quot;  def predict(self, instances, **kwargs):     &quot;&quot;&quot;Performs custom prediction.      Instances are the decoded values from the request. They have already     been deserialized from JSON.      Args:         instances: A list of prediction input instances.         **kwargs: A dictionary of keyword args provided as additional             fields on the predict request body.      Returns:         A list of outputs containing the prediction results. This list must         be JSON serializable.     &quot;&quot;&quot;     raise NotImplementedError()  @classmethod def from_path(cls, model_dir):     &quot;&quot;&quot;Creates an instance of Predictor using the given path.      Loading of the predictor should be done in this method.      Args:         model_dir: The local directory that contains the exported model             file along with any additional files uploaded when creating the             version resource.      Returns:         An instance implementing this Predictor class.     &quot;&quot;&quot;     raise NotImplementedError() &lt;/pre&gt;  Learn more about [the Predictor interface and custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines).
     */
    predictionClass?: string | null;
    /**
     * Required. The version of Python used in prediction.  The following Python versions are available:  * Python &#39;3.7&#39; is available when `runtime_version` is set to &#39;1.15&#39; or   later. * Python &#39;3.5&#39; is available when `runtime_version` is set to a version   from &#39;1.4&#39; to &#39;1.14&#39;. * Python &#39;2.7&#39; is available when `runtime_version` is set to &#39;1.15&#39; or   earlier.  Read more about the Python versions available for [each runtime version](/ml-engine/docs/runtime-version-list).
     */
    pythonVersion?: string | null;
    /**
     * Optional. *Only* specify this field in a projects.models.versions.patch request. Specifying it in a projects.models.versions.create request has no effect.  Configures the request-response pair logging on predictions from this Version.
     */
    requestLoggingConfig?: Schema$GoogleCloudMlV1__RequestLoggingConfig;
    /**
     * Required. The AI Platform runtime version to use for this deployment.  For more information, see the [runtime version list](/ml-engine/docs/runtime-version-list) and [how to manage runtime versions](/ml-engine/docs/versioning).
     */
    runtimeVersion?: string | null;
    /**
     * Optional. Specifies the service account for resource access control.
     */
    serviceAccount?: string | null;
    /**
     * Output only. The state of a version.
     */
    state?: string | null;
  }
  /**
   * Attributes credit by computing the XRAI taking advantage of the model&#39;s fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1906.02825 Currently only implemented for models with natural image inputs.
   */
  export interface Schema$GoogleCloudMlV1__XraiAttribution {
    /**
     * Number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is met within the desired error range.
     */
    numIntegralSteps?: number | null;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.  If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.  Example Policy with multiple AuditConfigs:      {       &quot;audit_configs&quot;: [         {           &quot;service&quot;: &quot;allServices&quot;,           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,               &quot;exempted_members&quot;: [                 &quot;user:jose@example.com&quot;               ]             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;             },             {               &quot;log_type&quot;: &quot;ADMIN_READ&quot;             }           ]         },         {           &quot;service&quot;: &quot;sampleservice.googleapis.com&quot;,           &quot;audit_log_configs&quot;: [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;             },             {               &quot;log_type&quot;: &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [                 &quot;user:aliya@example.com&quot;               ]             }           ]         }       ]     }  For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
   */
  export interface Schema$GoogleIamV1__AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$GoogleIamV1__AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example:      {       &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;: &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [             &quot;user:jose@example.com&quot;           ]         },         {           &quot;log_type&quot;: &quot;DATA_WRITE&quot;         }       ]     }  This enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$GoogleIamV1__AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[] | null;
    /**
     * The log type that this config enables.
     */
    logType?: string | null;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$GoogleIamV1__Binding {
    /**
     * The condition that is associated with this binding.  If the condition evaluates to `true`, then this binding applies to the current request.  If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the members in this binding.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    condition?: Schema$GoogleType__Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@example.com` .   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.  * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique    identifier) representing a user that has been recently deleted. For    example, `alice@example.com?uid=123456789012345678901`. If the user is    recovered, this value reverts to `user:{emailid}` and the recovered user    retains the role in the binding.  * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus    unique identifier) representing a service account that has been recently    deleted. For example,    `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.    If the service account is undeleted, this value reverts to    `serviceAccount:{emailid}` and the undeleted service account retains the    role in the binding.  * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique    identifier) representing a Google group that has been recently    deleted. For example, `admins@example.com?uid=123456789012345678901`. If    the group is recovered, this value reverts to `group:{emailid}` and the    recovered group retains the role in the binding.   * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.   A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role.  For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).  **JSON example:**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationAdmin&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-project-id@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationViewer&quot;,           &quot;members&quot;: [             &quot;user:eve@example.com&quot;           ],           &quot;condition&quot;: {             &quot;title&quot;: &quot;expirable access&quot;,             &quot;description&quot;: &quot;Does not grant access after Sep 2020&quot;,             &quot;expression&quot;: &quot;request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)&quot;,           }         }       ],       &quot;etag&quot;: &quot;BwWWja0YfJA=&quot;,       &quot;version&quot;: 3     }  **YAML example:**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-project-id@appspot.gserviceaccount.com       role: roles/resourcemanager.organizationAdmin     - members:       - user:eve@example.com       role: roles/resourcemanager.organizationViewer       condition:         title: expirable access         description: Does not grant access after Sep 2020         expression: request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)     - etag: BwWWja0YfJA=     - version: 3  For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$GoogleIamV1__Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$GoogleIamV1__AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
     */
    bindings?: Schema$GoogleIamV1__Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy.  Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected.  Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations:  * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy   that includes conditions  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.  If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    version?: number | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$GoogleIamV1__SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$GoogleIamV1__Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used:  `paths: &quot;bindings, etag&quot;`
     */
    updateMask?: string | null;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$GoogleIamV1__TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$GoogleIamV1__TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunning__ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunning__Operation[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunning__Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpc__Status;
    /**
     * Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$GoogleProtobuf__Empty {}
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpc__Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.  Example (Comparison):      title: &quot;Summary size limit&quot;     description: &quot;Determines if a summary is less than 100 chars&quot;     expression: &quot;document.summary.size() &lt; 100&quot;  Example (Equality):      title: &quot;Requestor is owner&quot;     description: &quot;Determines if requestor is the document owner&quot;     expression: &quot;document.owner == request.auth.claims.email&quot;  Example (Logic):      title: &quot;Public documents&quot;     description: &quot;Determine whether the document should be publicly visible&quot;     expression: &quot;document.type != &#39;private&#39; &amp;&amp; document.type != &#39;internal&#39;&quot;  Example (Data Manipulation):      title: &quot;Notification string&quot;     description: &quot;Create a notification string with a timestamp.&quot;     expression: &quot;&#39;New message received at &#39; + string(document.create_time)&quot;  The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
   */
  export interface Schema$GoogleType__Expr {
    /**
     * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.
     */
    expression?: string | null;
    /**
     * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    jobs: Resource$Projects$Jobs;
    locations: Resource$Projects$Locations;
    models: Resource$Projects$Models;
    operations: Resource$Projects$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.jobs = new Resource$Projects$Jobs(this.context);
      this.locations = new Resource$Projects$Locations(this.context);
      this.models = new Resource$Projects$Models(this.context);
      this.operations = new Resource$Projects$Operations(this.context);
    }

    /**
     * ml.projects.explain
     * @desc Performs explanation on the data in the request.  <div>{% dynamic include "/ai-platform/includes/___explain-request" %}</div>
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.explain({
     *     // Required. The resource name of a model or a version.
     *     //
     *     // Authorization: requires the `predict` permission on the specified resource.
     *     name: 'projects/.*',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "httpBody": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.explain
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of a model or a version.  Authorization: requires the `predict` permission on the specified resource.
     * @param {().GoogleCloudMlV1__ExplainRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    explain(
      params: Params$Resource$Projects$Explain,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    explain(
      params?: Params$Resource$Projects$Explain,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleApi__HttpBody>;
    explain(
      params: Params$Resource$Projects$Explain,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    explain(
      params: Params$Resource$Projects$Explain,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleApi__HttpBody>,
      callback: BodyResponseCallback<Schema$GoogleApi__HttpBody>
    ): void;
    explain(
      params: Params$Resource$Projects$Explain,
      callback: BodyResponseCallback<Schema$GoogleApi__HttpBody>
    ): void;
    explain(callback: BodyResponseCallback<Schema$GoogleApi__HttpBody>): void;
    explain(
      paramsOrCallback?:
        | Params$Resource$Projects$Explain
        | BodyResponseCallback<Schema$GoogleApi__HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleApi__HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleApi__HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleApi__HttpBody>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Explain;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Explain;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:explain').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleApi__HttpBody>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleApi__HttpBody>(parameters);
      }
    }

    /**
     * ml.projects.getConfig
     * @desc Get the service account information associated with your project. You need this information in order to grant the service account permissions for the Google Cloud Storage location where you put your model training code for training the model with Google Cloud Machine Learning.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.getConfig({
     *     // Required. The project name.
     *     name: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "config": {},
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "serviceAccountProject": "my_serviceAccountProject"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.getConfig
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The project name.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getConfig(
      params: Params$Resource$Projects$Getconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getConfig(
      params?: Params$Resource$Projects$Getconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__GetConfigResponse>;
    getConfig(
      params: Params$Resource$Projects$Getconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Getconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__GetConfigResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__GetConfigResponse>
    ): void;
    getConfig(
      params: Params$Resource$Projects$Getconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__GetConfigResponse>
    ): void;
    getConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__GetConfigResponse>
    ): void;
    getConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Getconfig
        | BodyResponseCallback<Schema$GoogleCloudMlV1__GetConfigResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__GetConfigResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__GetConfigResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__GetConfigResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:getConfig').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__GetConfigResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__GetConfigResponse>(
          parameters
        );
      }
    }

    /**
     * ml.projects.predict
     * @desc Performs online prediction on the data in the request.  <div>{% dynamic include "/ai-platform/includes/___predict-request" %}</div>
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.predict({
     *     // Required. The resource name of a model or a version.
     *     //
     *     // Authorization: requires the `predict` permission on the specified resource.
     *     name: 'projects/.*',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "httpBody": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.predict
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of a model or a version.  Authorization: requires the `predict` permission on the specified resource.
     * @param {().GoogleCloudMlV1__PredictRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    predict(
      params: Params$Resource$Projects$Predict,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    predict(
      params?: Params$Resource$Projects$Predict,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleApi__HttpBody>;
    predict(
      params: Params$Resource$Projects$Predict,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    predict(
      params: Params$Resource$Projects$Predict,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleApi__HttpBody>,
      callback: BodyResponseCallback<Schema$GoogleApi__HttpBody>
    ): void;
    predict(
      params: Params$Resource$Projects$Predict,
      callback: BodyResponseCallback<Schema$GoogleApi__HttpBody>
    ): void;
    predict(callback: BodyResponseCallback<Schema$GoogleApi__HttpBody>): void;
    predict(
      paramsOrCallback?:
        | Params$Resource$Projects$Predict
        | BodyResponseCallback<Schema$GoogleApi__HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleApi__HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleApi__HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleApi__HttpBody>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$Predict;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Predict;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:predict').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleApi__HttpBody>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleApi__HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Explain extends StandardParameters {
    /**
     * Required. The resource name of a model or a version.  Authorization: requires the `predict` permission on the specified resource.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__ExplainRequest;
  }
  export interface Params$Resource$Projects$Getconfig
    extends StandardParameters {
    /**
     * Required. The project name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Predict extends StandardParameters {
    /**
     * Required. The resource name of a model or a version.  Authorization: requires the `predict` permission on the specified resource.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__PredictRequest;
  }

  export class Resource$Projects$Jobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * ml.projects.jobs.cancel
     * @desc Cancels a running job.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.jobs.cancel({
     *     // Required. The name of the job to cancel.
     *     name: 'projects/my-project/jobs/my-job',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.jobs.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the job to cancel.
     * @param {().GoogleCloudMlV1__CancelJobRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params: Params$Resource$Projects$Jobs$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Jobs$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobuf__Empty>;
    cancel(
      params: Params$Resource$Projects$Jobs$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Jobs$Cancel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>,
      callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Jobs$Cancel,
      callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobs$Cancel
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobuf__Empty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobs$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobs$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobuf__Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobuf__Empty>(parameters);
      }
    }

    /**
     * ml.projects.jobs.create
     * @desc Creates a training or a batch prediction job.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.jobs.create({
     *     // Required. The project name.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "endTime": "my_endTime",
     *       //   "errorMessage": "my_errorMessage",
     *       //   "etag": "my_etag",
     *       //   "jobId": "my_jobId",
     *       //   "labels": {},
     *       //   "predictionInput": {},
     *       //   "predictionOutput": {},
     *       //   "startTime": "my_startTime",
     *       //   "state": "my_state",
     *       //   "trainingInput": {},
     *       //   "trainingOutput": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "endTime": "my_endTime",
     *   //   "errorMessage": "my_errorMessage",
     *   //   "etag": "my_etag",
     *   //   "jobId": "my_jobId",
     *   //   "labels": {},
     *   //   "predictionInput": {},
     *   //   "predictionOutput": {},
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "trainingInput": {},
     *   //   "trainingOutput": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.jobs.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project name.
     * @param {().GoogleCloudMlV1__Job} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Projects$Jobs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Jobs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Job>;
    create(
      params: Params$Resource$Projects$Jobs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Jobs$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
    ): void;
    create(
      params: Params$Resource$Projects$Jobs$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
    ): void;
    create(callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobs$Create
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__Job>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/jobs').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__Job>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Job>(parameters);
      }
    }

    /**
     * ml.projects.jobs.get
     * @desc Describes a job.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.jobs.get({
     *     // Required. The name of the job to get the description of.
     *     name: 'projects/my-project/jobs/my-job',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "endTime": "my_endTime",
     *   //   "errorMessage": "my_errorMessage",
     *   //   "etag": "my_etag",
     *   //   "jobId": "my_jobId",
     *   //   "labels": {},
     *   //   "predictionInput": {},
     *   //   "predictionOutput": {},
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "trainingInput": {},
     *   //   "trainingOutput": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.jobs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the job to get the description of.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Jobs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Jobs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Job>;
    get(
      params: Params$Resource$Projects$Jobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Jobs$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
    ): void;
    get(
      params: Params$Resource$Projects$Jobs$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobs$Get
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__Job>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__Job>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Job>(parameters);
      }
    }

    /**
     * ml.projects.jobs.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.jobs.getIamPolicy({
     *     // Optional. The policy format version to be returned.
     *     //
     *     // Valid values are 0, 1, and 3. Requests specifying an invalid value will be
     *     // rejected.
     *     //
     *     // Requests for policies with any conditional bindings must specify version 3.
     *     // Policies without any conditional bindings may specify any valid value or
     *     // leave the field unset.
     *     //
     *     // To learn which resources support conditions in their IAM policies, see the
     *     // [IAM
     *     // documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/jobs/my-job',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.jobs.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params: Params$Resource$Projects$Jobs$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Jobs$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1__Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Jobs$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Jobs$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Jobs$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobs$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1__Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobs$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobs$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1__Policy>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1__Policy>(parameters);
      }
    }

    /**
     * ml.projects.jobs.list
     * @desc Lists the jobs in the project.  If there are no jobs that match the request parameters, the list request returns an empty response body: {}.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.jobs.list({
     *     // Optional. Specifies the subset of jobs to retrieve.
     *     // You can filter on the value of one or more attributes of the job object.
     *     // For example, retrieve jobs with a job identifier that starts with 'census':
     *     // <p><code>gcloud ai-platform jobs list --filter='jobId:census*'</code>
     *     // <p>List all failed jobs with names that start with 'rnn':
     *     // <p><code>gcloud ai-platform jobs list --filter='jobId:rnn*
     *     // AND state:FAILED'</code>
     *     // <p>For more examples, see the guide to
     *     // <a href="/ml-engine/docs/tensorflow/monitor-training">monitoring jobs</a>.
     *     filter: 'placeholder-value',
     *     // Optional. The number of jobs to retrieve per "page" of results. If there
     *     // are more remaining results than this number, the response message will
     *     // contain a valid value in the `next_page_token` field.
     *     //
     *     // The default value is 20, and the maximum page size is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token to request the next page of results.
     *     //
     *     // You get the token from the `next_page_token` field of the response from
     *     // the previous call.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the project for which to list jobs.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "jobs": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.jobs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional. Specifies the subset of jobs to retrieve. You can filter on the value of one or more attributes of the job object. For example, retrieve jobs with a job identifier that starts with 'census': <p><code>gcloud ai-platform jobs list --filter='jobId:census*'</code> <p>List all failed jobs with names that start with 'rnn': <p><code>gcloud ai-platform jobs list --filter='jobId:rnn* AND state:FAILED'</code> <p>For more examples, see the guide to <a href="/ml-engine/docs/tensorflow/monitor-training">monitoring jobs</a>.
     * @param {integer=} params.pageSize Optional. The number of jobs to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
     * @param {string=} params.pageToken Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
     * @param {string} params.parent Required. The name of the project for which to list jobs.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Jobs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Jobs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__ListJobsResponse>;
    list(
      params: Params$Resource$Projects$Jobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Jobs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListJobsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__ListJobsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Jobs$List,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__ListJobsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__ListJobsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobs$List
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListJobsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListJobsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListJobsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__ListJobsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/jobs').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__ListJobsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__ListJobsResponse>(
          parameters
        );
      }
    }

    /**
     * ml.projects.jobs.patch
     * @desc Updates a specific job resource.  Currently the only supported fields to update are `labels`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.jobs.patch({
     *     // Required. The job name.
     *     name: 'projects/my-project/jobs/my-job',
     *     // Required. Specifies the path, relative to `Job`, of the field to update.
     *     // To adopt etag mechanism, include `etag` field in the mask, and include the
     *     // `etag` value in your job resource.
     *     //
     *     // For example, to change the labels of a job, the `update_mask` parameter
     *     // would be specified as `labels`, `etag`, and the
     *     // `PATCH` request body would specify the new value, as follows:
     *     //     {
     *     //       "labels": {
     *     //          "owner": "Google",
     *     //          "color": "Blue"
     *     //       }
     *     //       "etag": "33a64df551425fcc55e4d42a148795d9f25f89d4"
     *     //     }
     *     // If `etag` matches the one on the server, the labels of the job will be
     *     // replaced with the given ones, and the server end `etag` will be
     *     // recalculated.
     *     //
     *     // Currently the only supported update masks are `labels` and `etag`.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "endTime": "my_endTime",
     *       //   "errorMessage": "my_errorMessage",
     *       //   "etag": "my_etag",
     *       //   "jobId": "my_jobId",
     *       //   "labels": {},
     *       //   "predictionInput": {},
     *       //   "predictionOutput": {},
     *       //   "startTime": "my_startTime",
     *       //   "state": "my_state",
     *       //   "trainingInput": {},
     *       //   "trainingOutput": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "endTime": "my_endTime",
     *   //   "errorMessage": "my_errorMessage",
     *   //   "etag": "my_etag",
     *   //   "jobId": "my_jobId",
     *   //   "labels": {},
     *   //   "predictionInput": {},
     *   //   "predictionOutput": {},
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "trainingInput": {},
     *   //   "trainingOutput": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.jobs.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The job name.
     * @param {string=} params.updateMask Required. Specifies the path, relative to `Job`, of the field to update. To adopt etag mechanism, include `etag` field in the mask, and include the `etag` value in your job resource.  For example, to change the labels of a job, the `update_mask` parameter would be specified as `labels`, `etag`, and the `PATCH` request body would specify the new value, as follows:     {       "labels": {          "owner": "Google",          "color": "Blue"       }       "etag": "33a64df551425fcc55e4d42a148795d9f25f89d4"     } If `etag` matches the one on the server, the labels of the job will be replaced with the given ones, and the server end `etag` will be recalculated.  Currently the only supported update masks are `labels` and `etag`.
     * @param {().GoogleCloudMlV1__Job} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params: Params$Resource$Projects$Jobs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Jobs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Job>;
    patch(
      params: Params$Resource$Projects$Jobs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Jobs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
    ): void;
    patch(
      params: Params$Resource$Projects$Jobs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
    ): void;
    patch(callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Job>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobs$Patch
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Job>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__Job>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__Job>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Job>(parameters);
      }
    }

    /**
     * ml.projects.jobs.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.  Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.jobs.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/jobs/my-job',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.jobs.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().GoogleIamV1__SetIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params: Params$Resource$Projects$Jobs$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Jobs$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1__Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Jobs$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Jobs$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Jobs$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobs$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1__Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobs$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobs$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1__Policy>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1__Policy>(parameters);
      }
    }

    /**
     * ml.projects.jobs.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.jobs.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/jobs/my-job',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "permissions": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.jobs.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GoogleIamV1__TestIamPermissionsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params: Params$Resource$Projects$Jobs$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Jobs$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1__TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Jobs$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Jobs$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>,
      callback: BodyResponseCallback<
        Schema$GoogleIamV1__TestIamPermissionsResponse
      >
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Jobs$Testiampermissions,
      callback: BodyResponseCallback<
        Schema$GoogleIamV1__TestIamPermissionsResponse
      >
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<
        Schema$GoogleIamV1__TestIamPermissionsResponse
      >
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Jobs$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1__TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Jobs$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Jobs$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1__TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1__TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Jobs$Cancel
    extends StandardParameters {
    /**
     * Required. The name of the job to cancel.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__CancelJobRequest;
  }
  export interface Params$Resource$Projects$Jobs$Create
    extends StandardParameters {
    /**
     * Required. The project name.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__Job;
  }
  export interface Params$Resource$Projects$Jobs$Get
    extends StandardParameters {
    /**
     * Required. The name of the job to get the description of.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Jobs$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Jobs$List
    extends StandardParameters {
    /**
     * Optional. Specifies the subset of jobs to retrieve. You can filter on the value of one or more attributes of the job object. For example, retrieve jobs with a job identifier that starts with 'census': <p><code>gcloud ai-platform jobs list --filter='jobId:census*'</code> <p>List all failed jobs with names that start with 'rnn': <p><code>gcloud ai-platform jobs list --filter='jobId:rnn* AND state:FAILED'</code> <p>For more examples, see the guide to <a href="/ml-engine/docs/tensorflow/monitor-training">monitoring jobs</a>.
     */
    filter?: string;
    /**
     * Optional. The number of jobs to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
     */
    pageToken?: string;
    /**
     * Required. The name of the project for which to list jobs.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Jobs$Patch
    extends StandardParameters {
    /**
     * Required. The job name.
     */
    name?: string;
    /**
     * Required. Specifies the path, relative to `Job`, of the field to update. To adopt etag mechanism, include `etag` field in the mask, and include the `etag` value in your job resource.  For example, to change the labels of a job, the `update_mask` parameter would be specified as `labels`, `etag`, and the `PATCH` request body would specify the new value, as follows:     {       "labels": {          "owner": "Google",          "color": "Blue"       }       "etag": "33a64df551425fcc55e4d42a148795d9f25f89d4"     } If `etag` matches the one on the server, the labels of the job will be replaced with the given ones, and the server end `etag` will be recalculated.  Currently the only supported update masks are `labels` and `etag`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__Job;
  }
  export interface Params$Resource$Projects$Jobs$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1__SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Jobs$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1__TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Operations;
    studies: Resource$Projects$Locations$Studies;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.studies = new Resource$Projects$Locations$Studies(this.context);
    }

    /**
     * ml.projects.locations.get
     * @desc Get the complete list of CMLE capabilities in a location, along with their location-specific properties.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.locations.get({
     *     // Required. The name of the location.
     *     name: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "capabilities": [],
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.locations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the location.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Location>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Location>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Location>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Location>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Location>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__Location>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__Location>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Location>(parameters);
      }
    }

    /**
     * ml.projects.locations.list
     * @desc List all locations that provides at least one type of CMLE capability.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.locations.list({
     *     // Optional. The number of locations to retrieve per "page" of results. If
     *     // there are more remaining results than this number, the response message
     *     // will contain a valid value in the `next_page_token` field.
     *     //
     *     // The default value is 20, and the maximum page size is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token to request the next page of results.
     *     //
     *     // You get the token from the `next_page_token` field of the response from
     *     // the previous call.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the project for which available locations are to be
     *     // listed (since some locations might be whitelisted for specific projects).
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.locations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The number of locations to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
     * @param {string=} params.pageToken Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
     * @param {string} params.parent Required. The name of the project for which available locations are to be listed (since some locations might be whitelisted for specific projects).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListLocationsResponse>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudMlV1__ListLocationsResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudMlV1__ListLocationsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudMlV1__ListLocationsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__ListLocationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/locations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__ListLocationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Required. The name of the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * Optional. The number of locations to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
     */
    pageToken?: string;
    /**
     * Required. The name of the project for which available locations are to be listed (since some locations might be whitelisted for specific projects).
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * ml.projects.locations.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.locations.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.locations.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobuf__Empty>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>,
      callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobuf__Empty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobuf__Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobuf__Empty>(parameters);
      }
    }

    /**
     * ml.projects.locations.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.locations.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.locations.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunning__Operation>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunning__Operation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }

  export class Resource$Projects$Locations$Studies {
    context: APIRequestContext;
    trials: Resource$Projects$Locations$Studies$Trials;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.trials = new Resource$Projects$Locations$Studies$Trials(
        this.context
      );
    }

    /**
     * ml.projects.locations.studies.create
     * @desc Creates a study.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.locations.studies.create({
     *     // Required. The project and location that the study belongs to.
     *     // Format: projects/{project}/locations/{location}
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. The ID to use for the study, which will become the final component of
     *     // the study's resource name.
     *     studyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "inactiveReason": "my_inactiveReason",
     *       //   "name": "my_name",
     *       //   "state": "my_state",
     *       //   "studyConfig": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "inactiveReason": "my_inactiveReason",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "studyConfig": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.locations.studies.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project and location that the study belongs to. Format: projects/{project}/locations/{location}
     * @param {string=} params.studyId Required. The ID to use for the study, which will become the final component of the study's resource name.
     * @param {().GoogleCloudMlV1__Study} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Projects$Locations$Studies$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Studies$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Study>;
    create(
      params: Params$Resource$Projects$Locations$Studies$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Studies$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Study>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Study>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Studies$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Study>
    ): void;
    create(callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Study>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Studies$Create
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Study>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Study>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Study>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__Study>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Studies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Studies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/studies').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__Study>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Study>(parameters);
      }
    }

    /**
     * ml.projects.locations.studies.delete
     * @desc Deletes a study.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.locations.studies.delete({
     *     // Required. The study name.
     *     name: 'projects/my-project/locations/my-location/studies/my-studie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.locations.studies.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The study name.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Projects$Locations$Studies$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Studies$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobuf__Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Studies$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Studies$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>,
      callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Studies$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Studies$Delete
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobuf__Empty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Studies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Studies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobuf__Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobuf__Empty>(parameters);
      }
    }

    /**
     * ml.projects.locations.studies.get
     * @desc Gets a study.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.locations.studies.get({
     *     // Required. The study name.
     *     name: 'projects/my-project/locations/my-location/studies/my-studie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "inactiveReason": "my_inactiveReason",
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "studyConfig": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.locations.studies.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The study name.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Locations$Studies$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Studies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Study>;
    get(
      params: Params$Resource$Projects$Locations$Studies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Studies$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Study>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Study>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Studies$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Study>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Study>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Studies$Get
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Study>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Study>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Study>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__Study>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Studies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Studies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__Study>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Study>(parameters);
      }
    }

    /**
     * ml.projects.locations.studies.list
     * @desc Lists all the studies in a region for an associated project.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.locations.studies.list({
     *     // Required. The project and location that the study belongs to.
     *     // Format: projects/{project}/locations/{location}
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "studies": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.locations.studies.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project and location that the study belongs to. Format: projects/{project}/locations/{location}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Locations$Studies$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Studies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__ListStudiesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Studies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Studies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListStudiesResponse>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudMlV1__ListStudiesResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Studies$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudMlV1__ListStudiesResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudMlV1__ListStudiesResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Studies$List
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListStudiesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListStudiesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListStudiesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__ListStudiesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Studies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Studies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/studies').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__ListStudiesResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__ListStudiesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Studies$Create
    extends StandardParameters {
    /**
     * Required. The project and location that the study belongs to. Format: projects/{project}/locations/{location}
     */
    parent?: string;
    /**
     * Required. The ID to use for the study, which will become the final component of the study's resource name.
     */
    studyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__Study;
  }
  export interface Params$Resource$Projects$Locations$Studies$Delete
    extends StandardParameters {
    /**
     * Required. The study name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Studies$Get
    extends StandardParameters {
    /**
     * Required. The study name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Studies$List
    extends StandardParameters {
    /**
     * Required. The project and location that the study belongs to. Format: projects/{project}/locations/{location}
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Studies$Trials {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * ml.projects.locations.studies.trials.addMeasurement
     * @desc Adds a measurement of the objective metrics to a trial. This measurement is assumed to have been taken before the trial is complete.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.locations.studies.trials.addMeasurement({
     *     // Required. The trial name.
     *     name:
     *       'projects/my-project/locations/my-location/studies/my-studie/trials/my-trial',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "measurement": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientId": "my_clientId",
     *   //   "endTime": "my_endTime",
     *   //   "finalMeasurement": {},
     *   //   "infeasibleReason": "my_infeasibleReason",
     *   //   "measurements": [],
     *   //   "name": "my_name",
     *   //   "parameters": [],
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "trialInfeasible": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.locations.studies.trials.addMeasurement
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The trial name.
     * @param {().GoogleCloudMlV1__AddTrialMeasurementRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addMeasurement(
      params: Params$Resource$Projects$Locations$Studies$Trials$Addmeasurement,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addMeasurement(
      params?: Params$Resource$Projects$Locations$Studies$Trials$Addmeasurement,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Trial>;
    addMeasurement(
      params: Params$Resource$Projects$Locations$Studies$Trials$Addmeasurement,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addMeasurement(
      params: Params$Resource$Projects$Locations$Studies$Trials$Addmeasurement,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
    ): void;
    addMeasurement(
      params: Params$Resource$Projects$Locations$Studies$Trials$Addmeasurement,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
    ): void;
    addMeasurement(
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
    ): void;
    addMeasurement(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Studies$Trials$Addmeasurement
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__Trial>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Studies$Trials$Addmeasurement;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Studies$Trials$Addmeasurement;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:addMeasurement').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__Trial>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Trial>(parameters);
      }
    }

    /**
     * ml.projects.locations.studies.trials.checkEarlyStoppingState
     * @desc Checks  whether a trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.locations.studies.trials.checkEarlyStoppingState(
     *     {
     *       // Required. The trial name.
     *       name:
     *         'projects/my-project/locations/my-location/studies/my-studie/trials/my-trial',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.locations.studies.trials.checkEarlyStoppingState
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The trial name.
     * @param {().GoogleCloudMlV1__CheckTrialEarlyStoppingStateRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    checkEarlyStoppingState(
      params: Params$Resource$Projects$Locations$Studies$Trials$Checkearlystoppingstate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    checkEarlyStoppingState(
      params?: Params$Resource$Projects$Locations$Studies$Trials$Checkearlystoppingstate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunning__Operation>;
    checkEarlyStoppingState(
      params: Params$Resource$Projects$Locations$Studies$Trials$Checkearlystoppingstate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    checkEarlyStoppingState(
      params: Params$Resource$Projects$Locations$Studies$Trials$Checkearlystoppingstate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    checkEarlyStoppingState(
      params: Params$Resource$Projects$Locations$Studies$Trials$Checkearlystoppingstate,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    checkEarlyStoppingState(
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    checkEarlyStoppingState(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Studies$Trials$Checkearlystoppingstate
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunning__Operation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Studies$Trials$Checkearlystoppingstate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Studies$Trials$Checkearlystoppingstate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:checkEarlyStoppingState').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters
        );
      }
    }

    /**
     * ml.projects.locations.studies.trials.complete
     * @desc Marks a trial as complete.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.locations.studies.trials.complete({
     *     // Required. The trial name.metat
     *     name:
     *       'projects/my-project/locations/my-location/studies/my-studie/trials/my-trial',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "finalMeasurement": {},
     *       //   "infeasibleReason": "my_infeasibleReason",
     *       //   "trialInfeasible": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientId": "my_clientId",
     *   //   "endTime": "my_endTime",
     *   //   "finalMeasurement": {},
     *   //   "infeasibleReason": "my_infeasibleReason",
     *   //   "measurements": [],
     *   //   "name": "my_name",
     *   //   "parameters": [],
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "trialInfeasible": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.locations.studies.trials.complete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The trial name.metat
     * @param {().GoogleCloudMlV1__CompleteTrialRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    complete(
      params: Params$Resource$Projects$Locations$Studies$Trials$Complete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    complete(
      params?: Params$Resource$Projects$Locations$Studies$Trials$Complete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Trial>;
    complete(
      params: Params$Resource$Projects$Locations$Studies$Trials$Complete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    complete(
      params: Params$Resource$Projects$Locations$Studies$Trials$Complete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
    ): void;
    complete(
      params: Params$Resource$Projects$Locations$Studies$Trials$Complete,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
    ): void;
    complete(
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
    ): void;
    complete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Studies$Trials$Complete
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__Trial>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Studies$Trials$Complete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Studies$Trials$Complete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:complete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__Trial>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Trial>(parameters);
      }
    }

    /**
     * ml.projects.locations.studies.trials.create
     * @desc Adds a user provided trial to a study.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.locations.studies.trials.create({
     *     // Required. The name of the study that the trial belongs to.
     *     parent: 'projects/my-project/locations/my-location/studies/my-studie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clientId": "my_clientId",
     *       //   "endTime": "my_endTime",
     *       //   "finalMeasurement": {},
     *       //   "infeasibleReason": "my_infeasibleReason",
     *       //   "measurements": [],
     *       //   "name": "my_name",
     *       //   "parameters": [],
     *       //   "startTime": "my_startTime",
     *       //   "state": "my_state",
     *       //   "trialInfeasible": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientId": "my_clientId",
     *   //   "endTime": "my_endTime",
     *   //   "finalMeasurement": {},
     *   //   "infeasibleReason": "my_infeasibleReason",
     *   //   "measurements": [],
     *   //   "name": "my_name",
     *   //   "parameters": [],
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "trialInfeasible": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.locations.studies.trials.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the study that the trial belongs to.
     * @param {().GoogleCloudMlV1__Trial} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Projects$Locations$Studies$Trials$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Studies$Trials$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Trial>;
    create(
      params: Params$Resource$Projects$Locations$Studies$Trials$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Studies$Trials$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Studies$Trials$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
    ): void;
    create(callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Studies$Trials$Create
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__Trial>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Studies$Trials$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Studies$Trials$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/trials').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__Trial>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Trial>(parameters);
      }
    }

    /**
     * ml.projects.locations.studies.trials.delete
     * @desc Deletes a trial.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.locations.studies.trials.delete({
     *     // Required. The trial name.
     *     name:
     *       'projects/my-project/locations/my-location/studies/my-studie/trials/my-trial',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.locations.studies.trials.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The trial name.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Projects$Locations$Studies$Trials$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Studies$Trials$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobuf__Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Studies$Trials$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Studies$Trials$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>,
      callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Studies$Trials$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Studies$Trials$Delete
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobuf__Empty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Studies$Trials$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Studies$Trials$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobuf__Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobuf__Empty>(parameters);
      }
    }

    /**
     * ml.projects.locations.studies.trials.get
     * @desc Gets a trial.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.locations.studies.trials.get({
     *     // Required. The trial name.
     *     name:
     *       'projects/my-project/locations/my-location/studies/my-studie/trials/my-trial',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientId": "my_clientId",
     *   //   "endTime": "my_endTime",
     *   //   "finalMeasurement": {},
     *   //   "infeasibleReason": "my_infeasibleReason",
     *   //   "measurements": [],
     *   //   "name": "my_name",
     *   //   "parameters": [],
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "trialInfeasible": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.locations.studies.trials.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The trial name.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Locations$Studies$Trials$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Studies$Trials$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Trial>;
    get(
      params: Params$Resource$Projects$Locations$Studies$Trials$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Studies$Trials$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Studies$Trials$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Studies$Trials$Get
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__Trial>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Studies$Trials$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Studies$Trials$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__Trial>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Trial>(parameters);
      }
    }

    /**
     * ml.projects.locations.studies.trials.list
     * @desc Lists the trials associated with a study.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.locations.studies.trials.list({
     *     // Required. The name of the study that the trial belongs to.
     *     parent: 'projects/my-project/locations/my-location/studies/my-studie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "trials": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.locations.studies.trials.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the study that the trial belongs to.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Locations$Studies$Trials$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Studies$Trials$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__ListTrialsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Studies$Trials$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Studies$Trials$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListTrialsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__ListTrialsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Studies$Trials$List,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__ListTrialsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__ListTrialsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Studies$Trials$List
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListTrialsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListTrialsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListTrialsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__ListTrialsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Studies$Trials$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Studies$Trials$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/trials').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__ListTrialsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__ListTrialsResponse>(
          parameters
        );
      }
    }

    /**
     * ml.projects.locations.studies.trials.stop
     * @desc Stops a trial.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.locations.studies.trials.stop({
     *     // Required. The trial name.
     *     name:
     *       'projects/my-project/locations/my-location/studies/my-studie/trials/my-trial',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientId": "my_clientId",
     *   //   "endTime": "my_endTime",
     *   //   "finalMeasurement": {},
     *   //   "infeasibleReason": "my_infeasibleReason",
     *   //   "measurements": [],
     *   //   "name": "my_name",
     *   //   "parameters": [],
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "trialInfeasible": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.locations.studies.trials.stop
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The trial name.
     * @param {().GoogleCloudMlV1__StopTrialRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    stop(
      params: Params$Resource$Projects$Locations$Studies$Trials$Stop,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    stop(
      params?: Params$Resource$Projects$Locations$Studies$Trials$Stop,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Trial>;
    stop(
      params: Params$Resource$Projects$Locations$Studies$Trials$Stop,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    stop(
      params: Params$Resource$Projects$Locations$Studies$Trials$Stop,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
    ): void;
    stop(
      params: Params$Resource$Projects$Locations$Studies$Trials$Stop,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
    ): void;
    stop(callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Studies$Trials$Stop
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Trial>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__Trial>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Studies$Trials$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Studies$Trials$Stop;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:stop').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__Trial>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Trial>(parameters);
      }
    }

    /**
     * ml.projects.locations.studies.trials.suggest
     * @desc Adds one or more trials to a study, with parameter values suggested by AI Platform Optimizer. Returns a long-running operation associated with the generation of trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.locations.studies.trials.suggest({
     *     // Required. The name of the study that the trial belongs to.
     *     parent: 'projects/my-project/locations/my-location/studies/my-studie',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clientId": "my_clientId",
     *       //   "suggestionCount": 0
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.locations.studies.trials.suggest
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the study that the trial belongs to.
     * @param {().GoogleCloudMlV1__SuggestTrialsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    suggest(
      params: Params$Resource$Projects$Locations$Studies$Trials$Suggest,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    suggest(
      params?: Params$Resource$Projects$Locations$Studies$Trials$Suggest,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunning__Operation>;
    suggest(
      params: Params$Resource$Projects$Locations$Studies$Trials$Suggest,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    suggest(
      params: Params$Resource$Projects$Locations$Studies$Trials$Suggest,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    suggest(
      params: Params$Resource$Projects$Locations$Studies$Trials$Suggest,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    suggest(
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    suggest(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Studies$Trials$Suggest
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunning__Operation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Studies$Trials$Suggest;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Studies$Trials$Suggest;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/trials:suggest').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Studies$Trials$Addmeasurement
    extends StandardParameters {
    /**
     * Required. The trial name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__AddTrialMeasurementRequest;
  }
  export interface Params$Resource$Projects$Locations$Studies$Trials$Checkearlystoppingstate
    extends StandardParameters {
    /**
     * Required. The trial name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__CheckTrialEarlyStoppingStateRequest;
  }
  export interface Params$Resource$Projects$Locations$Studies$Trials$Complete
    extends StandardParameters {
    /**
     * Required. The trial name.metat
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__CompleteTrialRequest;
  }
  export interface Params$Resource$Projects$Locations$Studies$Trials$Create
    extends StandardParameters {
    /**
     * Required. The name of the study that the trial belongs to.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__Trial;
  }
  export interface Params$Resource$Projects$Locations$Studies$Trials$Delete
    extends StandardParameters {
    /**
     * Required. The trial name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Studies$Trials$Get
    extends StandardParameters {
    /**
     * Required. The trial name.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Studies$Trials$List
    extends StandardParameters {
    /**
     * Required. The name of the study that the trial belongs to.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Studies$Trials$Stop
    extends StandardParameters {
    /**
     * Required. The trial name.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__StopTrialRequest;
  }
  export interface Params$Resource$Projects$Locations$Studies$Trials$Suggest
    extends StandardParameters {
    /**
     * Required. The name of the study that the trial belongs to.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__SuggestTrialsRequest;
  }

  export class Resource$Projects$Models {
    context: APIRequestContext;
    versions: Resource$Projects$Models$Versions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.versions = new Resource$Projects$Models$Versions(this.context);
    }

    /**
     * ml.projects.models.create
     * @desc Creates a model which will later contain one or more versions.  You must add at least one version before you can request predictions from the model. Add versions by calling projects.models.versions.create.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.models.create({
     *     // Required. The project name.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "defaultVersion": {},
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "onlinePredictionConsoleLogging": false,
     *       //   "onlinePredictionLogging": false,
     *       //   "regions": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "defaultVersion": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "onlinePredictionConsoleLogging": false,
     *   //   "onlinePredictionLogging": false,
     *   //   "regions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.models.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project name.
     * @param {().GoogleCloudMlV1__Model} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Projects$Models$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Models$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Model>;
    create(
      params: Params$Resource$Projects$Models$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Models$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Model>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Model>
    ): void;
    create(
      params: Params$Resource$Projects$Models$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Model>
    ): void;
    create(callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Model>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Create
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Model>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Model>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Model>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__Model>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/models').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__Model>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Model>(parameters);
      }
    }

    /**
     * ml.projects.models.delete
     * @desc Deletes a model.  You can only delete a model if there are no versions in it. You can delete versions by calling projects.models.versions.delete.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.models.delete({
     *     // Required. The name of the model.
     *     name: 'projects/my-project/models/my-model',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.models.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the model.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Projects$Models$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Models$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunning__Operation>;
    delete(
      params: Params$Resource$Projects$Models$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Models$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Models$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Delete
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunning__Operation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters
        );
      }
    }

    /**
     * ml.projects.models.get
     * @desc Gets information about a model, including its name, the description (if set), and the default version (if at least one version of the model has been deployed).
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.models.get({
     *     // Required. The name of the model.
     *     name: 'projects/my-project/models/my-model',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "defaultVersion": {},
     *   //   "description": "my_description",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "onlinePredictionConsoleLogging": false,
     *   //   "onlinePredictionLogging": false,
     *   //   "regions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.models.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the model.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Models$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Models$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Model>;
    get(
      params: Params$Resource$Projects$Models$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Models$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Model>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Model>
    ): void;
    get(
      params: Params$Resource$Projects$Models$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Model>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Model>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Get
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Model>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Model>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Model>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__Model>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__Model>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Model>(parameters);
      }
    }

    /**
     * ml.projects.models.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.models.getIamPolicy({
     *     // Optional. The policy format version to be returned.
     *     //
     *     // Valid values are 0, 1, and 3. Requests specifying an invalid value will be
     *     // rejected.
     *     //
     *     // Requests for policies with any conditional bindings must specify version 3.
     *     // Policies without any conditional bindings may specify any valid value or
     *     // leave the field unset.
     *     //
     *     // To learn which resources support conditions in their IAM policies, see the
     *     // [IAM
     *     // documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/models/my-model',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.models.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params: Params$Resource$Projects$Models$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Models$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1__Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Models$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Models$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Models$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1__Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1__Policy>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1__Policy>(parameters);
      }
    }

    /**
     * ml.projects.models.list
     * @desc Lists the models in a project.  Each project can contain multiple models, and each model can have multiple versions.  If there are no models that match the request parameters, the list request returns an empty response body: {}.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.models.list({
     *     // Optional. Specifies the subset of models to retrieve.
     *     filter: 'placeholder-value',
     *     // Optional. The number of models to retrieve per "page" of results. If there
     *     // are more remaining results than this number, the response message will
     *     // contain a valid value in the `next_page_token` field.
     *     //
     *     // The default value is 20, and the maximum page size is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token to request the next page of results.
     *     //
     *     // You get the token from the `next_page_token` field of the response from
     *     // the previous call.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the project whose models are to be listed.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "models": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.models.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional. Specifies the subset of models to retrieve.
     * @param {integer=} params.pageSize Optional. The number of models to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
     * @param {string=} params.pageToken Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
     * @param {string} params.parent Required. The name of the project whose models are to be listed.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Models$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Models$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__ListModelsResponse>;
    list(
      params: Params$Resource$Projects$Models$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Models$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListModelsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__ListModelsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Models$List,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__ListModelsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__ListModelsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$List
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListModelsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListModelsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListModelsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__ListModelsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/models').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__ListModelsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__ListModelsResponse>(
          parameters
        );
      }
    }

    /**
     * ml.projects.models.patch
     * @desc Updates a specific model resource.  Currently the only supported fields to update are `description` and `default_version.name`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.models.patch({
     *     // Required. The project name.
     *     name: 'projects/my-project/models/my-model',
     *     // Required. Specifies the path, relative to `Model`, of the field to update.
     *     //
     *     // For example, to change the description of a model to "foo" and set its
     *     // default version to "version_1", the `update_mask` parameter would be
     *     // specified as `description`, `default_version.name`, and the `PATCH`
     *     // request body would specify the new value, as follows:
     *     //     {
     *     //       "description": "foo",
     *     //       "defaultVersion": {
     *     //         "name":"version_1"
     *     //       }
     *     //     }
     *     //
     *     // Currently the supported update masks are `description` and
     *     // `default_version.name`.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "defaultVersion": {},
     *       //   "description": "my_description",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "onlinePredictionConsoleLogging": false,
     *       //   "onlinePredictionLogging": false,
     *       //   "regions": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.models.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The project name.
     * @param {string=} params.updateMask Required. Specifies the path, relative to `Model`, of the field to update.  For example, to change the description of a model to "foo" and set its default version to "version_1", the `update_mask` parameter would be specified as `description`, `default_version.name`, and the `PATCH` request body would specify the new value, as follows:     {       "description": "foo",       "defaultVersion": {         "name":"version_1"       }     }  Currently the supported update masks are `description` and `default_version.name`.
     * @param {().GoogleCloudMlV1__Model} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params: Params$Resource$Projects$Models$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Models$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunning__Operation>;
    patch(
      params: Params$Resource$Projects$Models$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Models$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Models$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Patch
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunning__Operation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters
        );
      }
    }

    /**
     * ml.projects.models.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.  Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.models.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/models/my-model',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.models.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().GoogleIamV1__SetIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params: Params$Resource$Projects$Models$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Models$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1__Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Models$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Models$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1__Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Models$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1__Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1__Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1__Policy>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1__Policy>(parameters);
      }
    }

    /**
     * ml.projects.models.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.models.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested.
     *     // See the operation documentation for the appropriate value for this field.
     *     resource: 'projects/my-project/models/my-model',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "permissions": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.models.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GoogleIamV1__TestIamPermissionsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params: Params$Resource$Projects$Models$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Models$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1__TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Models$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Models$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>,
      callback: BodyResponseCallback<
        Schema$GoogleIamV1__TestIamPermissionsResponse
      >
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Models$Testiampermissions,
      callback: BodyResponseCallback<
        Schema$GoogleIamV1__TestIamPermissionsResponse
      >
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<
        Schema$GoogleIamV1__TestIamPermissionsResponse
      >
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1__TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1__TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1__TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Models$Create
    extends StandardParameters {
    /**
     * Required. The project name.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__Model;
  }
  export interface Params$Resource$Projects$Models$Delete
    extends StandardParameters {
    /**
     * Required. The name of the model.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Models$Get
    extends StandardParameters {
    /**
     * Required. The name of the model.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Models$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.  To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Models$List
    extends StandardParameters {
    /**
     * Optional. Specifies the subset of models to retrieve.
     */
    filter?: string;
    /**
     * Optional. The number of models to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
     */
    pageToken?: string;
    /**
     * Required. The name of the project whose models are to be listed.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Models$Patch
    extends StandardParameters {
    /**
     * Required. The project name.
     */
    name?: string;
    /**
     * Required. Specifies the path, relative to `Model`, of the field to update.  For example, to change the description of a model to "foo" and set its default version to "version_1", the `update_mask` parameter would be specified as `description`, `default_version.name`, and the `PATCH` request body would specify the new value, as follows:     {       "description": "foo",       "defaultVersion": {         "name":"version_1"       }     }  Currently the supported update masks are `description` and `default_version.name`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__Model;
  }
  export interface Params$Resource$Projects$Models$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1__SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Models$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1__TestIamPermissionsRequest;
  }

  export class Resource$Projects$Models$Versions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * ml.projects.models.versions.create
     * @desc Creates a new version of a model from a trained TensorFlow model.  If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call projects.models.versions.setDefault.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.models.versions.create({
     *     // Required. The name of the model.
     *     parent: 'projects/my-project/models/my-model',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "acceleratorConfig": {},
     *       //   "autoScaling": {},
     *       //   "createTime": "my_createTime",
     *       //   "deploymentUri": "my_deploymentUri",
     *       //   "description": "my_description",
     *       //   "errorMessage": "my_errorMessage",
     *       //   "etag": "my_etag",
     *       //   "explanationConfig": {},
     *       //   "framework": "my_framework",
     *       //   "isDefault": false,
     *       //   "labels": {},
     *       //   "lastUseTime": "my_lastUseTime",
     *       //   "machineType": "my_machineType",
     *       //   "manualScaling": {},
     *       //   "name": "my_name",
     *       //   "packageUris": [],
     *       //   "predictionClass": "my_predictionClass",
     *       //   "pythonVersion": "my_pythonVersion",
     *       //   "requestLoggingConfig": {},
     *       //   "runtimeVersion": "my_runtimeVersion",
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.models.versions.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the model.
     * @param {().GoogleCloudMlV1__Version} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Projects$Models$Versions$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Models$Versions$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunning__Operation>;
    create(
      params: Params$Resource$Projects$Models$Versions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Models$Versions$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Models$Versions$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Versions$Create
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunning__Operation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Versions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Versions$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/versions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters
        );
      }
    }

    /**
     * ml.projects.models.versions.delete
     * @desc Deletes a model version.  Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version.  Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.models.versions.delete({
     *     // Required. The name of the version. You can get the names of all the
     *     // versions of a model by calling
     *     // projects.models.versions.list.
     *     name: 'projects/my-project/models/my-model/versions/my-version',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.models.versions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the version. You can get the names of all the versions of a model by calling projects.models.versions.list.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Projects$Models$Versions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Models$Versions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunning__Operation>;
    delete(
      params: Params$Resource$Projects$Models$Versions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Models$Versions$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Models$Versions$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Versions$Delete
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunning__Operation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Versions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Versions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters
        );
      }
    }

    /**
     * ml.projects.models.versions.get
     * @desc Gets information about a model version.  Models can have multiple versions. You can call projects.models.versions.list to get the same information that this method returns for all of the versions of a model.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.models.versions.get({
     *     // Required. The name of the version.
     *     name: 'projects/my-project/models/my-model/versions/my-version',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acceleratorConfig": {},
     *   //   "autoScaling": {},
     *   //   "createTime": "my_createTime",
     *   //   "deploymentUri": "my_deploymentUri",
     *   //   "description": "my_description",
     *   //   "errorMessage": "my_errorMessage",
     *   //   "etag": "my_etag",
     *   //   "explanationConfig": {},
     *   //   "framework": "my_framework",
     *   //   "isDefault": false,
     *   //   "labels": {},
     *   //   "lastUseTime": "my_lastUseTime",
     *   //   "machineType": "my_machineType",
     *   //   "manualScaling": {},
     *   //   "name": "my_name",
     *   //   "packageUris": [],
     *   //   "predictionClass": "my_predictionClass",
     *   //   "pythonVersion": "my_pythonVersion",
     *   //   "requestLoggingConfig": {},
     *   //   "runtimeVersion": "my_runtimeVersion",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "state": "my_state"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.models.versions.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the version.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Models$Versions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Models$Versions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Version>;
    get(
      params: Params$Resource$Projects$Models$Versions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Models$Versions$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Version>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Version>
    ): void;
    get(
      params: Params$Resource$Projects$Models$Versions$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Version>
    ): void;
    get(callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Version>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Versions$Get
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Version>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Version>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Version>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__Version>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Versions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Versions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__Version>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Version>(parameters);
      }
    }

    /**
     * ml.projects.models.versions.list
     * @desc Gets basic information about all the versions of a model.  If you expect that a model has many versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages).  If there are no versions that match the request parameters, the list request returns an empty response body: {}.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.models.versions.list({
     *     // Optional. Specifies the subset of versions to retrieve.
     *     filter: 'placeholder-value',
     *     // Optional. The number of versions to retrieve per "page" of results. If
     *     // there are more remaining results than this number, the response message
     *     // will contain a valid value in the `next_page_token` field.
     *     //
     *     // The default value is 20, and the maximum page size is 100.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token to request the next page of results.
     *     //
     *     // You get the token from the `next_page_token` field of the response from
     *     // the previous call.
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the model for which to list the version.
     *     parent: 'projects/my-project/models/my-model',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "versions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.models.versions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional. Specifies the subset of versions to retrieve.
     * @param {integer=} params.pageSize Optional. The number of versions to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
     * @param {string=} params.pageToken Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
     * @param {string} params.parent Required. The name of the model for which to list the version.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Models$Versions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Models$Versions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__ListVersionsResponse>;
    list(
      params: Params$Resource$Projects$Models$Versions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Models$Versions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListVersionsResponse>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudMlV1__ListVersionsResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Models$Versions$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudMlV1__ListVersionsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudMlV1__ListVersionsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Versions$List
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListVersionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListVersionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__ListVersionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__ListVersionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Versions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Versions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/versions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__ListVersionsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__ListVersionsResponse>(
          parameters
        );
      }
    }

    /**
     * ml.projects.models.versions.patch
     * @desc Updates the specified Version resource.  Currently the only update-able fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.models.versions.patch({
     *     // Required. The name of the model.
     *     name: 'projects/my-project/models/my-model/versions/my-version',
     *     // Required. Specifies the path, relative to `Version`, of the field to
     *     // update. Must be present and non-empty.
     *     //
     *     // For example, to change the description of a version to "foo", the
     *     // `update_mask` parameter would be specified as `description`, and the
     *     // `PATCH` request body would specify the new value, as follows:
     *     //
     *     // ```
     *     // {
     *     //   "description": "foo"
     *     // }
     *     // ```
     *     //
     *     // Currently the only supported update mask fields are `description`,
     *     // `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`.
     *     // However, you can only update `manualScaling.nodes` if the version uses a
     *     // [Compute Engine (N1)
     *     // machine type](/ml-engine/docs/machine-types-online-prediction).
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "acceleratorConfig": {},
     *       //   "autoScaling": {},
     *       //   "createTime": "my_createTime",
     *       //   "deploymentUri": "my_deploymentUri",
     *       //   "description": "my_description",
     *       //   "errorMessage": "my_errorMessage",
     *       //   "etag": "my_etag",
     *       //   "explanationConfig": {},
     *       //   "framework": "my_framework",
     *       //   "isDefault": false,
     *       //   "labels": {},
     *       //   "lastUseTime": "my_lastUseTime",
     *       //   "machineType": "my_machineType",
     *       //   "manualScaling": {},
     *       //   "name": "my_name",
     *       //   "packageUris": [],
     *       //   "predictionClass": "my_predictionClass",
     *       //   "pythonVersion": "my_pythonVersion",
     *       //   "requestLoggingConfig": {},
     *       //   "runtimeVersion": "my_runtimeVersion",
     *       //   "serviceAccount": "my_serviceAccount",
     *       //   "state": "my_state"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.models.versions.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the model.
     * @param {string=} params.updateMask Required. Specifies the path, relative to `Version`, of the field to update. Must be present and non-empty.  For example, to change the description of a version to "foo", the `update_mask` parameter would be specified as `description`, and the `PATCH` request body would specify the new value, as follows:  ``` {   "description": "foo" } ```  Currently the only supported update mask fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`. However, you can only update `manualScaling.nodes` if the version uses a [Compute Engine (N1) machine type](/ml-engine/docs/machine-types-online-prediction).
     * @param {().GoogleCloudMlV1__Version} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params: Params$Resource$Projects$Models$Versions$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Models$Versions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunning__Operation>;
    patch(
      params: Params$Resource$Projects$Models$Versions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Models$Versions$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Models$Versions$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Versions$Patch
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunning__Operation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Versions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Versions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters
        );
      }
    }

    /**
     * ml.projects.models.versions.setDefault
     * @desc Designates a version to be the default for the model.  The default version is used for prediction requests made against the model that don't specify a version.  The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.models.versions.setDefault({
     *     // Required. The name of the version to make the default for the model. You
     *     // can get the names of all the versions of a model by calling
     *     // projects.models.versions.list.
     *     name: 'projects/my-project/models/my-model/versions/my-version',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acceleratorConfig": {},
     *   //   "autoScaling": {},
     *   //   "createTime": "my_createTime",
     *   //   "deploymentUri": "my_deploymentUri",
     *   //   "description": "my_description",
     *   //   "errorMessage": "my_errorMessage",
     *   //   "etag": "my_etag",
     *   //   "explanationConfig": {},
     *   //   "framework": "my_framework",
     *   //   "isDefault": false,
     *   //   "labels": {},
     *   //   "lastUseTime": "my_lastUseTime",
     *   //   "machineType": "my_machineType",
     *   //   "manualScaling": {},
     *   //   "name": "my_name",
     *   //   "packageUris": [],
     *   //   "predictionClass": "my_predictionClass",
     *   //   "pythonVersion": "my_pythonVersion",
     *   //   "requestLoggingConfig": {},
     *   //   "runtimeVersion": "my_runtimeVersion",
     *   //   "serviceAccount": "my_serviceAccount",
     *   //   "state": "my_state"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.models.versions.setDefault
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the version to make the default for the model. You can get the names of all the versions of a model by calling projects.models.versions.list.
     * @param {().GoogleCloudMlV1__SetDefaultVersionRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setDefault(
      params: Params$Resource$Projects$Models$Versions$Setdefault,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setDefault(
      params?: Params$Resource$Projects$Models$Versions$Setdefault,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudMlV1__Version>;
    setDefault(
      params: Params$Resource$Projects$Models$Versions$Setdefault,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setDefault(
      params: Params$Resource$Projects$Models$Versions$Setdefault,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Version>,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Version>
    ): void;
    setDefault(
      params: Params$Resource$Projects$Models$Versions$Setdefault,
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Version>
    ): void;
    setDefault(
      callback: BodyResponseCallback<Schema$GoogleCloudMlV1__Version>
    ): void;
    setDefault(
      paramsOrCallback?:
        | Params$Resource$Projects$Models$Versions$Setdefault
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Version>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Version>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudMlV1__Version>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudMlV1__Version>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Models$Versions$Setdefault;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Models$Versions$Setdefault;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:setDefault').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudMlV1__Version>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudMlV1__Version>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Models$Versions$Create
    extends StandardParameters {
    /**
     * Required. The name of the model.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__Version;
  }
  export interface Params$Resource$Projects$Models$Versions$Delete
    extends StandardParameters {
    /**
     * Required. The name of the version. You can get the names of all the versions of a model by calling projects.models.versions.list.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Models$Versions$Get
    extends StandardParameters {
    /**
     * Required. The name of the version.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Models$Versions$List
    extends StandardParameters {
    /**
     * Optional. Specifies the subset of versions to retrieve.
     */
    filter?: string;
    /**
     * Optional. The number of versions to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
     */
    pageToken?: string;
    /**
     * Required. The name of the model for which to list the version.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Models$Versions$Patch
    extends StandardParameters {
    /**
     * Required. The name of the model.
     */
    name?: string;
    /**
     * Required. Specifies the path, relative to `Version`, of the field to update. Must be present and non-empty.  For example, to change the description of a version to "foo", the `update_mask` parameter would be specified as `description`, and the `PATCH` request body would specify the new value, as follows:  ``` {   "description": "foo" } ```  Currently the only supported update mask fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`. However, you can only update `manualScaling.nodes` if the version uses a [Compute Engine (N1) machine type](/ml-engine/docs/machine-types-online-prediction).
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__Version;
  }
  export interface Params$Resource$Projects$Models$Versions$Setdefault
    extends StandardParameters {
    /**
     * Required. The name of the version to make the default for the model. You can get the names of all the versions of a model by calling projects.models.versions.list.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudMlV1__SetDefaultVersionRequest;
  }

  export class Resource$Projects$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * ml.projects.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobuf__Empty>;
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>,
      callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$GoogleProtobuf__Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Cancel
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobuf__Empty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobuf__Empty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobuf__Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobuf__Empty>(parameters);
      }
    }

    /**
     * ml.projects.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunning__Operation>;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunning__Operation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunning__Operation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunning__Operation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunning__Operation>(
          parameters
        );
      }
    }

    /**
     * ml.projects.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/ml.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const ml = google.ml('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await ml.projects.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias ml.projects.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunning__ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleLongrunning__ListOperationsResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleLongrunning__ListOperationsResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Operations$List,
      callback: BodyResponseCallback<
        Schema$GoogleLongrunning__ListOperationsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleLongrunning__ListOperationsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunning__ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunning__ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunning__ListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunning__ListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunning__ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<
          Schema$GoogleLongrunning__ListOperationsResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }
}
