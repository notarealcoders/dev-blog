export interface Comment {
  id: string;
  content: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  createdAt: string;
  updatedAt?: string;
  parentId?: string;
  postSlug: string;
  reactions?: Reaction[];
}

export interface Reaction {
  id: string;
  type: ReactionType;
  userId: string;
  commentId?: string;
  postSlug: string;
}

export type ReactionType =
  | "like"
  | "heart"
  | "celebrate"
  | "thinking"
  | "rocket";
