package vn.sogo.lmscms.model.mysql.sgnative;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Time;
import java.sql.Timestamp;

/**
 * Created by VinhLe on 4/21/2017.
 */

/**
 * select sgoc.class_id, sgoclt.class_type_id, sgocs.class_status_id, sgocs.class_status_name, sgoclt.class_type_name, sgoc.class_icon_name, sgu.unit_id, sgu.unit_title, sgoc.trainer_id, sgus.full_name trainer_name, sgoc.study_date, sgoc.study_time, sgoct.booked_date, sgu.sort_order as unit_sort_order
 * from sg_course_trainee sgct join sg_offline_class_trainee sgoct on (sgct.course_trainee_id = sgoct.course_trainee_id and sgoct.is_attended = 1 and sgoct.is_cancel = 0 and sgoct.is_delete = 0)
 * join sg_offline_class sgoc on (sgoc.class_id = sgoct.class_id and sgoc.is_active = 1 and sgoc.is_delete = 0)
 * join sg_offline_class_status sgocs on (sgocs.class_status_id = sgoc.class_status_id)
 * join sg_offline_class_type sgoclt on (sgoclt.class_type_id = sgoc.class_type_id)
 * join sg_unit sgu on (sgoc.unit_id = sgu.unit_id)
 * join sg_user sgus on (sgus.user_id = sgoc.trainer_id and sgus.user_type_id = 2)
 * where sgct.course_id = 1 and sgct.trainee_id = 1
 * order by sgoc.class_type_id, sgu.sort_order
 * select sgoc.class_id, sgoclt.class_type_id, sgocs.class_status_id, sgocs.class_status_name, sgoclt.class_type_name, sgoc.class_icon_name, sgu.unit_id, sgu.unit_title, sgoc.trainer_id, sgus.full_name trainer_name, sgoc.study_date, sgoc.study_time, sgoct.booked_date, sgu.sort_order as unit_sort_order from sg_course_trainee sgct join sg_offline_class_trainee sgoct on (sgct.course_trainee_id = sgoct.course_trainee_id and sgoct.is_attended = 1 and sgoct.is_cancel = 0 and sgoct.is_delete = 0)join sg_offline_class sgoc on (sgoc.class_id = sgoct.class_id and sgoc.is_active = 1 and sgoc.is_delete = 0)                            join sg_offline_class_status sgocs on (sgocs.class_status_id = sgoc.class_status_id)                            join sg_offline_class_type sgoclt on (sgoclt.class_type_id = sgoc.class_type_id)                            join sg_unit sgu on (sgoc.unit_id = sgu.unit_id)                            join sg_user sgus on (sgus.user_id = sgoc.trainer_id and sgus.user_type_id = 2)where sgct.course_id = :courseId and sgct.trainee_id = :traineeId order by sgoc.class_type_id, sgu.sort_order
 */

@Embeddable
class SgENCScheduleId implements Serializable {
    private Integer classId;
    private Integer unitId;

    @Basic
    @Column(name = "class_id")
    public Integer getClassId() {
        return classId;
    }

    public void setClassId(Integer classId) {
        this.classId = classId;
    }

    @Basic
    @Column(name = "unit_id")
    public Integer getUnitId() {
        return unitId;
    }

    public void setUnitId(Integer unitId) {
        this.unitId = unitId;
    }
}

@Entity
public class SgENCScheduleEntity implements Serializable {

    private SgENCScheduleId sgENCScheduleId;
    private Integer classTypeId;
    private Integer classStatusId;
    private String classStatusName;
    private String classTypeName;
    private String classIconName;
    private String unitTitle;
    private Integer trainerId;
    private String trainerName;
    private Timestamp studyDate;
    private Time studyTime;
    private Timestamp bookDate;
    private Integer unitSortOrder;

    @EmbeddedId
    public SgENCScheduleId getSgENCScheduleId() {
        return sgENCScheduleId;
    }

    public void setSgENCScheduleId(SgENCScheduleId sgENCScheduleId) {
        this.sgENCScheduleId = sgENCScheduleId;
    }

    @Basic
    @Column(name = "class_type_id")
    public Integer getClassTypeId() {
        return classTypeId;
    }

    public void setClassTypeId(Integer classTypeId) {
        this.classTypeId = classTypeId;
    }

    @Basic
    @Column(name = "class_status_id")
    public Integer getClassStatusId() {
        return classStatusId;
    }

    public void setClassStatusId(Integer classStatusId) {
        this.classStatusId = classStatusId;
    }

    @Basic
    @Column(name = "class_status_name")
    public String getClassStatusName() {
        return classStatusName;
    }

    public void setClassStatusName(String classStatusName) {
        this.classStatusName = classStatusName;
    }

    @Basic
    @Column(name = "class_type_name")
    public String getClassTypeName() {
        return classTypeName;
    }

    public void setClassTypeName(String classTypeName) {
        this.classTypeName = classTypeName;
    }

    @Basic
    @Column(name = "class_icon_name")
    public String getClassIconName() {
        return classIconName;
    }

    public void setClassIconName(String classIconName) {
        this.classIconName = classIconName;
    }

    @Basic
    @Column(name = "unit_title")
    public String getUnitTitle() {
        return unitTitle;
    }

    public void setUnitTitle(String unitTitle) {
        this.unitTitle = unitTitle;
    }

    @Basic
    @Column(name = "trainer_id")
    public Integer getTrainerId() {
        return trainerId;
    }

    public void setTrainerId(Integer trainerId) {
        this.trainerId = trainerId;
    }

    @Basic
    @Column(name = "trainer_name")
    public String getTrainerName() {
        return trainerName;
    }

    public void setTrainerName(String trainerName) {
        this.trainerName = trainerName;
    }

    @Basic
    @Column(name = "study_date")
    public Timestamp getStudyDate() {
        return studyDate;
    }

    public void setStudyDate(Timestamp studyDate) {
        this.studyDate = studyDate;
    }

    @Basic
    @Column(name = "study_time")
    public Time getStudyTime() {
        return studyTime;
    }

    public void setStudyTime(Time studyTime) {
        this.studyTime = studyTime;
    }

    @Basic
    @Column(name = "booked_date")
    public Timestamp getBookDate() {
        return bookDate;
    }

    public void setBookDate(Timestamp bookDate) {
        this.bookDate = bookDate;
    }

    @Basic
    @Column(name = "unit_sort_order")
    public Integer getUnitSortOrder() {
        return unitSortOrder;
    }

    public void setUnitSortOrder(Integer unitSortOrder) {
        this.unitSortOrder = unitSortOrder;
    }

    @Transient
    public Integer getClassId() {
        return sgENCScheduleId.getClassId();
    }

    @Transient
    public Integer getUnitId() {
        return sgENCScheduleId.getUnitId();
    }
}
