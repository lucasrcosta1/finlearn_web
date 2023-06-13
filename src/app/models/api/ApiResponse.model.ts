export class ApiResponse {
  private success? : boolean;
  private response?: any;

  constructor (apiResponse?: ApiResponse) {
    this.success = apiResponse?.success;
    this.response = apiResponse?.response;
  }

  setSuccess (success: boolean) {
    this.success = success;
  }
  getSuccess () {
    return this.success;
  }

  setResponse (response: any) {
    this.response = response;
  }
  getResponse () {
    return this.response;
  }
}
