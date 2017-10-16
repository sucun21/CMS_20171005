package vn.sogo.lmscms.model.mysql;

import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by VinhLe on 4/25/2017.
 */
@Entity
@javax.persistence.Table(name = "sg_trainee_activity_detail", schema = "", catalog = "lms_portal")
@DynamicInsert
public class SgTraineeActivityDetailEntity {
    private Integer traineeActivityDetailId;

    @Id
    @javax.persistence.Column(name = "trainee_activity_detail_id")
    @GeneratedValue
    public Integer getTraineeActivityDetailId() {
        return traineeActivityDetailId;
    }

    public void setTraineeActivityDetailId(Integer traineeActivityDetailId) {
        this.traineeActivityDetailId = traineeActivityDetailId;
    }

    private Integer traineeActivityId;

    @Basic
    @javax.persistence.Column(name = "trainee_activity_id")
    public Integer getTraineeActivityId() {
        return traineeActivityId;
    }

    public void setTraineeActivityId(Integer traineeActivityId) {
        this.traineeActivityId = traineeActivityId;
    }

    private Integer courseTraineeId;

    @Basic
    @javax.persistence.Column(name = "course_trainee_id")
    public Integer getCourseTraineeId() {
        return courseTraineeId;
    }

    public void setCourseTraineeId(Integer courseTraineeId) {
        this.courseTraineeId = courseTraineeId;
    }

    private Integer activityId;

    @Basic
    @javax.persistence.Column(name = "activity_id")
    public Integer getActivityId() {
        return activityId;
    }

    public void setActivityId(Integer activityId) {
        this.activityId = activityId;
    }

    private String activityResult;

    @Basic
    @javax.persistence.Column(name = "activity_result")
    public String getActivityResult() {
        return activityResult;
    }

    public void setActivityResult(String activityResult) {
        this.activityResult = activityResult;
    }

    private Integer activityScore;

    @Basic
    @javax.persistence.Column(name = "activity_score")
    public Integer getActivityScore() {
        return activityScore;
    }

    public void setActivityScore(Integer activityScore) {
        this.activityScore = activityScore;
    }

    private Integer questionId;

    @Basic
    @javax.persistence.Column(name = "question_id")
    public Integer getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Integer questionId) {
        this.questionId = questionId;
    }

    private String questionTitle;

    @Basic
    @javax.persistence.Column(name = "question_title")
    public String getQuestionTitle() {
        return questionTitle;
    }

    public void setQuestionTitle(String questionTitle) {
        this.questionTitle = questionTitle;
    }

    private Integer questionTypeId;

    @Basic
    @javax.persistence.Column(name = "question_type_id")
    public Integer getQuestionTypeId() {
        return questionTypeId;
    }

    public void setQuestionTypeId(Integer questionTypeId) {
        this.questionTypeId = questionTypeId;
    }

    private String questionContent;

    @Basic
    @javax.persistence.Column(name = "question_content")
    public String getQuestionContent() {
        return questionContent;
    }

    public void setQuestionContent(String questionContent) {
        this.questionContent = questionContent;
    }

    private String questionHint;

    @Basic
    @javax.persistence.Column(name = "question_hint")
    public String getQuestionHint() {
        return questionHint;
    }

    public void setQuestionHint(String questionHint) {
        this.questionHint = questionHint;
    }

    private String rightAnswerIndex;

    @Basic
    @javax.persistence.Column(name = "right_answer_index")
    public String getRightAnswerIndex() {
        return rightAnswerIndex;
    }

    public void setRightAnswerIndex(String rightAnswerIndex) {
        this.rightAnswerIndex = rightAnswerIndex;
    }

    private String traineeAnswer;

    @Basic
    @javax.persistence.Column(name = "trainee_answer")
    public String getTraineeAnswer() {
        return traineeAnswer;
    }

    public void setTraineeAnswer(String traineeAnswer) {
        this.traineeAnswer = traineeAnswer;
    }

    private Byte isTraineeAnswerRight;

    @Basic
    @javax.persistence.Column(name = "is_trainee_answer_right")
    public Byte getIsTraineeAnswerRight() {
        return isTraineeAnswerRight;
    }

    public void setIsTraineeAnswerRight(Byte isTraineeAnswerRight) {
        this.isTraineeAnswerRight = isTraineeAnswerRight;
    }

    private String videoUrl;

    @Basic
    @javax.persistence.Column(name = "video_url")
    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    private Byte isActive;

    @Basic
    @javax.persistence.Column(name = "is_active")
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Byte getIsActive() {
        return isActive;
    }

    public void setIsActive(Byte isActive) {
        this.isActive = isActive;
    }

    private Timestamp createdDate;

    @Basic
    @javax.persistence.Column(name = "created_date")
    public Timestamp getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Timestamp createdDate) {
        this.createdDate = createdDate;
    }

    private Integer createdBy;

    @Basic
    @javax.persistence.Column(name = "created_by")
    public Integer getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Integer createdBy) {
        this.createdBy = createdBy;
    }

    private Timestamp modifiedDate;

    @Basic
    @javax.persistence.Column(name = "modified_date")
    public Timestamp getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(Timestamp modifiedDate) {
        this.modifiedDate = modifiedDate;
    }

    private Integer modifiedBy;

    @Basic
    @javax.persistence.Column(name = "modified_by")
    public Integer getModifiedBy() {
        return modifiedBy;
    }

    public void setModifiedBy(Integer modifiedBy) {
        this.modifiedBy = modifiedBy;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SgTraineeActivityDetailEntity that = (SgTraineeActivityDetailEntity) o;

        if (traineeActivityDetailId != null ? !traineeActivityDetailId.equals(that.traineeActivityDetailId) : that.traineeActivityDetailId != null)
            return false;
        if (traineeActivityId != null ? !traineeActivityId.equals(that.traineeActivityId) : that.traineeActivityId != null)
            return false;
        if (courseTraineeId != null ? !courseTraineeId.equals(that.courseTraineeId) : that.courseTraineeId != null)
            return false;
        if (activityId != null ? !activityId.equals(that.activityId) : that.activityId != null) return false;
        if (activityResult != null ? !activityResult.equals(that.activityResult) : that.activityResult != null)
            return false;
        if (activityScore != null ? !activityScore.equals(that.activityScore) : that.activityScore != null)
            return false;
        if (questionId != null ? !questionId.equals(that.questionId) : that.questionId != null) return false;
        if (questionTitle != null ? !questionTitle.equals(that.questionTitle) : that.questionTitle != null)
            return false;
        if (questionTypeId != null ? !questionTypeId.equals(that.questionTypeId) : that.questionTypeId != null)
            return false;
        if (questionContent != null ? !questionContent.equals(that.questionContent) : that.questionContent != null)
            return false;
        if (questionHint != null ? !questionHint.equals(that.questionHint) : that.questionHint != null) return false;
        if (rightAnswerIndex != null ? !rightAnswerIndex.equals(that.rightAnswerIndex) : that.rightAnswerIndex != null)
            return false;
        if (traineeAnswer != null ? !traineeAnswer.equals(that.traineeAnswer) : that.traineeAnswer != null)
            return false;
        if (isTraineeAnswerRight != null ? !isTraineeAnswerRight.equals(that.isTraineeAnswerRight) : that.isTraineeAnswerRight != null)
            return false;
        if (videoUrl != null ? !videoUrl.equals(that.videoUrl) : that.videoUrl != null) return false;
        if (isActive != null ? !isActive.equals(that.isActive) : that.isActive != null) return false;
        if (createdDate != null ? !createdDate.equals(that.createdDate) : that.createdDate != null) return false;
        if (createdBy != null ? !createdBy.equals(that.createdBy) : that.createdBy != null) return false;
        if (modifiedDate != null ? !modifiedDate.equals(that.modifiedDate) : that.modifiedDate != null) return false;
        if (modifiedBy != null ? !modifiedBy.equals(that.modifiedBy) : that.modifiedBy != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = traineeActivityDetailId != null ? traineeActivityDetailId.hashCode() : 0;
        result = 31 * result + (traineeActivityId != null ? traineeActivityId.hashCode() : 0);
        result = 31 * result + (courseTraineeId != null ? courseTraineeId.hashCode() : 0);
        result = 31 * result + (activityId != null ? activityId.hashCode() : 0);
        result = 31 * result + (activityResult != null ? activityResult.hashCode() : 0);
        result = 31 * result + (activityScore != null ? activityScore.hashCode() : 0);
        result = 31 * result + (questionId != null ? questionId.hashCode() : 0);
        result = 31 * result + (questionTitle != null ? questionTitle.hashCode() : 0);
        result = 31 * result + (questionTypeId != null ? questionTypeId.hashCode() : 0);
        result = 31 * result + (questionContent != null ? questionContent.hashCode() : 0);
        result = 31 * result + (questionHint != null ? questionHint.hashCode() : 0);
        result = 31 * result + (rightAnswerIndex != null ? rightAnswerIndex.hashCode() : 0);
        result = 31 * result + (traineeAnswer != null ? traineeAnswer.hashCode() : 0);
        result = 31 * result + (isTraineeAnswerRight != null ? isTraineeAnswerRight.hashCode() : 0);
        result = 31 * result + (videoUrl != null ? videoUrl.hashCode() : 0);
        result = 31 * result + (isActive != null ? isActive.hashCode() : 0);
        result = 31 * result + (createdDate != null ? createdDate.hashCode() : 0);
        result = 31 * result + (createdBy != null ? createdBy.hashCode() : 0);
        result = 31 * result + (modifiedDate != null ? modifiedDate.hashCode() : 0);
        result = 31 * result + (modifiedBy != null ? modifiedBy.hashCode() : 0);
        return result;
    }
}
