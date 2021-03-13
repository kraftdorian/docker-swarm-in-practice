import axios from "axios";

/** Docker utils service */
export abstract class DockerService {
  /** Fetches docker container id from current app domain request headers */
  static getContainerId(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      axios
        .get("/")
        .then(response => {
          resolve(response.headers["x-container-id"] ?? "N/A");
        })
        .catch(error => reject(error));
    });
  }
}
