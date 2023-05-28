export interface commentType {
  lessonId: number
  commentId?: number
  comment: string
  name: string
  icon: string
  time: number
  parentCommentId?: number
  subordinateId?: number
  subordinateName?: string
}
