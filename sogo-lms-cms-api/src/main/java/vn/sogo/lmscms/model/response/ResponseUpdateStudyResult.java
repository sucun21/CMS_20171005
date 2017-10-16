package vn.sogo.lmscms.model.response;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by VinhLe on 4/24/2017.
 */
public class ResponseUpdateStudyResult extends BaseResponse {

    private boolean isDoneLesson;

    public ResponseUpdateStudyResult(boolean isSuccess, String message) {
        super(isSuccess, message);

        this.isDoneLesson = Boolean.FALSE;
    }

    public ResponseUpdateStudyResult(String message, boolean isDoneLesson) {
        super(Boolean.TRUE, message);

        this.isDoneLesson = isDoneLesson;
    }

    @JsonProperty("is_done_lesson")
    public boolean isDoneLesson() {
        return isDoneLesson;
    }

    public void setDoneLesson(boolean doneLesson) {
        isDoneLesson = doneLesson;
    }
}
