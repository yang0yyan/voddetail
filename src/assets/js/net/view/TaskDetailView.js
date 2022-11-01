import { BaseView } from "../BaseView";

export class TaskDetailView extends BaseView {
  constructor() {
    super();
  }

  ordinaryView(submitTaskSuccess, submitTaskError) {
    this.submitTaskSuccess = submitTaskSuccess;
    this.submitTaskError = submitTaskError;
  }
}

// public interface UploadView {
//   interface view extends BaseView {
//       void submitTaskSuccess(WeiBoBean info);

//       void submitTaskError();

//       void uploadSuccess(String path, int id);

//       void uploadError(String error, int id);
//   }

//   interface presenter {
//       void addCategory(String referer, String id, String mid, String content);

//       void addCategory2(String referer, String id, String mid, String content, callabck, callback);

//       void uploadFile(String token, Bitmap bitmap, int id);
//   }
// }
