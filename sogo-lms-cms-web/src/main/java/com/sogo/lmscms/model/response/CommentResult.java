package com.sogo.lmscms.model.response;

public class CommentResult {
	private Integer commentResultId;
	private String commentResultName;
	private String commentResultDescription;
	public Integer getCommentResultId() {
		return commentResultId;
	}
	public void setCommentResultId(Integer commentResultId) {
		this.commentResultId = commentResultId;
	}
	public String getCommentResultName() {
		return commentResultName;
	}
	public void setCommentResultName(String commentResultName) {
		this.commentResultName = commentResultName;
	}
	public String getCommentResultDescription() {
		return commentResultDescription;
	}
	public void setCommentResultDescription(String commentResultDescription) {
		this.commentResultDescription = commentResultDescription;
	}
}
